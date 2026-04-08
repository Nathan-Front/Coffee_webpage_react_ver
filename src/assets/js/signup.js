import { hashPassword } from "./hashPassword";
//Check duplicate email
export function checkEmail(emailString) {
    const users = JSON.parse(localStorage.getItem("registeredUser")) || [];
    if(!users) return;
    const userEmail = emailString.trim().toLowerCase();
    const emailExist = users.some(user => user.email?.toLowerCase() === userEmail)
    return emailExist;
}
//email validator
export function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email)
}
//Check duplicate user
export function checkUser(userString) {
    const users = JSON.parse(localStorage.getItem("registeredUser")) || [];
    if(!users) return;
    const userN = userString.trim().toLowerCase();
    const userExist = users.some(user => user.userName === userN)
    return userExist;
}
//Create new user
export async function createAccount(form) {
    const users = JSON.parse(localStorage.getItem("registeredUser")) || [];
    if(!users) return;
    const hashedPassword = await hashPassword(form.password);
    const newUser = {
        ...form, //Copy all the data
        registryId: crypto.randomUUID(),
        password: hashedPassword, //Then overwrite the password
        cart: []
    };
    users.push(newUser);
    localStorage.setItem("registeredUser", JSON.stringify(users));
}

