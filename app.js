let Name = prompt("Enter your name");
function askGender() {
    let gender;
    while (true) {
        gender = prompt("Please enter your gender (male or female):");
        if (gender === "male" || gender === "female") {
            break; 
        }
    }
    return gender; 
}
let Gender = askGender(); 
let Age = prompt("Enter your Age");
let Order = prompt("Enter your order");
if (Gender === "male") {
    const element = document.getElementsByClassName('Name')[0];
    element.textContent = ` Welcome Mr.  ${Name}`;
} else if (Gender === "female") {
    const element = document.getElementsByClassName('Name')[0];
    element.textContent = ` Welcome Ms.  ${Name}`;
}
Gen = document.getElementsByClassName("Gender")[0];
Gen.textContent = `Your Gender: ${Gender}`;
Ord = document.getElementsByClassName('Order')[0];
Ord.textContent = ` Your order: ${Order}`;
X = document.getElementsByClassName('Age')[0];
X.textContent = ` Your Age: ${Age}`;







