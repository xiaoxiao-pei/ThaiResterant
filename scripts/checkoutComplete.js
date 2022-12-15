function store() { 
    window.localStorage.setItem(0, document.getElementById("firstName").value);

    window.localStorage.setItem(1, document.getElementById("type").value); 
    window.localStorage.setItem(2, JSON.stringify(document.getElementById("date").value)); 
    window.localStorage.setItem(3, document.getElementById("time").value);  

    window.localStorage.setItem(4, document.getElementById("creditCard").value);

    window.localStorage.setItem(5, document.getElementById("subTotal").innerHTML);  
    window.localStorage.setItem(6, document.getElementById("promoField").innerHTML);  
    window.localStorage.setItem(7, document.getElementById("taxField").innerHTML);
    window.localStorage.setItem(8, document.getElementById("taxField10").innerHTML);  
    window.localStorage.setItem(9, document.getElementById("tipField").value);
    window.localStorage.setItem(10, document.getElementById("totalField").innerHTML);
    
}


//after submit checkout form, delete the order array and order total form local storage
document.getElementById('order').addEventListener('submit', ()=>{
    localStorage.removeItem('orderArrayJSON');
    localStorage.removeItem('totalOrdered');
})