
import { hashPassword } from "./hashPassword";
import { locateCartOfUser } from "./coffeeBeans";

export async function userLogin(userData){
    const user = JSON.parse(localStorage.getItem("registeredUser")) || [];
    if(!user) return;
    const hashedPassword = await hashPassword(userData.password);
    const foundUser = user.find(user => user.userName === userData.userName && user.password === hashedPassword);
    
    if(foundUser) {
        localStorage.setItem("userLogged", JSON.stringify(foundUser));
        return {success: true, user: foundUser}
    } else {
        return { error: "Invalid username or password" };
    }
}

export async function RememberMe(check, user){
    if(!user) return;
    if(check) {
        localStorage.setItem("rememberMe", JSON.stringify(user.userName))
    } else {
        localStorage.removeItem("rememberMe");
    }
    return {success: true}
}

export async function mergeCartOnLogin() {
    const tempCart = JSON.parse(localStorage.getItem("tempCoffeeCart")) || [];
    const loggedUser = JSON.parse(localStorage.getItem("userLogged"));
    if(!loggedUser || tempCart.length === 0) return;
    const userCart = locateCartOfUser();
    if(!userCart) return;
    const {users, userIndex} = userCart;
    if(userIndex === -1) return;
    users[userIndex].cart = users[userIndex].cart || [];

    tempCart.forEach(tempItem => {
        const itemExist = users[userIndex].cart.find(item => (item.itemId === tempItem.itemId));
        if (itemExist) {
            itemExist.qty += tempItem.qty;
            itemExist.totalPrice = itemExist.price * itemExist.qty;
        } else {
            users[userIndex].cart.push(tempItem);
        }
    });
    
    localStorage.setItem("registeredUser", JSON.stringify(users));
    const updatedUser = users[userIndex];
    localStorage.setItem("userLogged", JSON.stringify(updatedUser));
    localStorage.removeItem("tempCoffeeCart");
}


