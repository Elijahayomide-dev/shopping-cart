//  let cart = []
let cart = JSON.parse(localStorage.getItem('item')) || []

    let displayArea = document.getElementById('displayArea')
    // let cart = JSON.parse(localStorage.getItem('item')) || []

    function addItem() {
    let displayArea = document.getElementById('displayArea')
    let userInput = document.getElementById('userInput').value.trim()
    if (userInput === ""){
        // document.innerHTML.userInput('please enter your items')
        alert('please enter your items');
    }else {
        // displayArea.innerHTML = userInput ;
        cart.push(userInput);
        localStorage.setItem('item', JSON.stringify(cart))
         displayCart()
    }
}

    function deleteAllItem() {
        cart = []
        displayCart()
        } 

    function deleteFirstItem() {
        cart.shift()
        displayCart()
        } 

    function deleteLastItem() {
        cart.pop()
        localStorage.setItem('item', JSON.stringify(cart))
        displayCart()
        }    

    function addToFirstItem() {
        let userInput = document.getElementById('userInput').value.trim()
        if (userInput === ""){
            // document.innerHTML.userInput('please enter your items')
            alert('please enter your items');
        }else {
            cart.unshift(userInput)
            displayCart()
            } 
    }

    function addToLastItem() {
        let userInput = document.getElementById('userInput').value.trim()
        if (userInput === ""){
            // document.innerHTML.userInput('please enter your items')
            alert('please enter your items');
        }else {
            cart.push(userInput)
           displayCart() 
        }
    }

    function displayCart(){
        displayArea.innerHTML = ""
        for (let index = 0; index < cart.length; index++){
            displayArea.innerHTML += `<p> ${index+1}. ${cart[index]}</p>  <button onclick="removeItem(${index})" > Delete item</button>`
        }
    }
    function removeItem(i){
        if (cart.length <1){
            alert('Nothing to delete')
        }else {
            cart.splice(i);
            displayCart()

        
        }
    }
    
    displayCart()