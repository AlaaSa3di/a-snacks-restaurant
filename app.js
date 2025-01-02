const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', () => {    
    const userName = document.getElementById("username").value;
    const Age = document.getElementById("Age").value;
    const Gender = document.getElementById("Gender").value;
    const orderType = document.getElementById("orderType").value
    let yourOrder =''
    if (document.getElementById('shawarma').checked) {
        yourOrder = 'Shawarma';
    } else if (document.getElementById('zinger').checked) {
        yourOrder = 'Zinger';
    } else if (document.getElementById('burger').checked) {
        yourOrder = 'Burger';
    }
    let combSand = '';
    if (document.getElementById('combo').checked) {
        combSand = 'combo';
    } else if (document.getElementById('sandwich').checked) {
        combSand = 'sandwich';
    }

let output=document.getElementById("details");
output.innerText = `
Username: ${userName}
Age: ${Age}
Gender: ${Gender}
Order Type: ${orderType}
Your Order: ${yourOrder}
Your choice: ${combSand}
`;
})







