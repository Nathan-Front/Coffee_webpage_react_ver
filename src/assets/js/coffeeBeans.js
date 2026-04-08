
import { Beans } from "../data/coffeeBeans/beans";
export function addToCartHandle(item){
    const selectedItem = {
        id: crypto.randomUUID(),
        itemId: item.id,
        item: item.name,
        description: item.description,
        image: item.src,
        imageAlt: item.alt,
        price: item.price,
        shipping: item.ship,
        qty: 1,
        totalPrice: item.price
    }
    sendToStorage(selectedItem);
}
export function getCartStorage() {
    const loggedUser = JSON.parse(localStorage.getItem("userLogged"));
    if(loggedUser) {
        const userData = locateCartOfUser();
        if(!userData) return;
        return userData.users[userData.userIndex].cart || [];
    } else {
        return JSON.parse(localStorage.getItem("tempCoffeeCart")) || [];
    }
}
export function locateCartOfUser() {
    const loggedUser = JSON.parse(localStorage.getItem("userLogged"));
    if(!loggedUser) return;
    let users = JSON.parse(localStorage.getItem("registeredUser"))
    if(!Array.isArray(users)) users = [];
    const userIndex = users.findIndex(user => String(user.registryId) === String(loggedUser.registryId));
    if(userIndex === -1) return;
    users[userIndex].cart = users[userIndex].cart || [];
    return {users, userIndex}
}
export function sendToStorage(selectedItem) {
   const cart = getCartStorage();
   const existingItem = cart.find(item => item.itemId === selectedItem.itemId);
   console.log(existingItem);
   if(existingItem) {
    existingItem.qty += selectedItem.qty;
    existingItem.totalPrice = existingItem.qty * existingItem.price
   } else {
    cart.push({
        id: crypto.randomUUID(),
        itemId: selectedItem.itemId,
        item: selectedItem.item,
        description: selectedItem.description,
        image: selectedItem.image,
        imageAlt: selectedItem.imageAlt,
        price: selectedItem.price,
        shipping: selectedItem.shipping,
        qty: selectedItem.qty,
        totalPrice: selectedItem.totalPrice
    });
   }
   saveToCartStorage(cart);
}
export function saveToCartStorage(itemToCart) {
    const loggedUser = JSON.parse(localStorage.getItem("userLogged"))
    if(loggedUser) {
        const userData = locateCartOfUser();
        if(!userData) return;
        let {users, userIndex} = userData;
        users[userIndex].cart = itemToCart;
        localStorage.setItem("registeredUser", JSON.stringify(users));
    } else {
        localStorage.setItem("tempCoffeeCart", JSON.stringify(itemToCart));
    }
}
export function coffeeOfMonthAddToCart(name) {
    const cart = getCartStorage();
    if(!cart) return;
    const existingItem = cart.find(cartItem => cartItem.item === name);
    if(existingItem){
        existingItem.qty += 1;
        existingItem.totalPrice = existingItem.qty * existingItem.price;
    } else {
        const beanList = Beans.find(bean => bean.name === name)
        cart.push({
            id: crypto.randomUUID(),
            itemId: beanList.id,
            item: beanList.name,
            description: beanList.description,
            image: beanList.src,
            imageAlt: beanList.alt,
            price: beanList.price,
            shipping: beanList.ship,
            qty: 1,
            totalPrice: beanList.price
        });
    }
    saveToCartStorage(cart);
}

export function subTotalCalc(){
    const cart = getCartStorage();
    if (!cart || !Array.isArray(cart)){
        return 0;
    }
    return cart.reduce((sum, item) => {
        return sum + (Number(item.price) * Number(item.qty));
    }, 0);
}
export function displayTax(){
    const cart = getCartStorage();
    if(!cart) return;       
    const subTotal = subTotalCalc();
    return  subTotal * 0.1;
}
export function itemShipping(){
    const cart = getCartStorage();
    if(!cart || !Array.isArray(cart)) {
        return 0;
    }
    return cart.reduce((sum, item) =>{
        return sum + (Number(item.shipping || 0) * item.qty);
    }, 0);
}
export function displayGrandTotal(){
    const cart = getCartStorage();
    if(!cart) return;
    const subTotal = subTotalCalc();
    const tax = displayTax();
    const shippingFee = itemShipping();
    return subTotal + tax + shippingFee;
}

