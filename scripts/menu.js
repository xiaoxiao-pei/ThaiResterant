
//jquery for accordion
$(document).ready(function(){
    $(".accordion").click(function(){
        $(this).next().slideToggle("slow");
    });
 });


 //jquery input validation for quantity
 $(document).ready(function(){
    $('input[type="number"]').change(function(){
        var reg = /^(?:[0-9]|[1-4][0-9]|50)$/;
        if (!reg.test($(this).val())){
            alert("Quantity must be integer between 0 to 50.")
            $(this).val(0);
        }
        
    });
 });



//get food names to array foodNames
let foodElements = document.getElementsByClassName('card-title');
const foodNames = [];
for(let i = 0; i < foodElements.length; i ++){
    foodNames[i] = foodElements[i].innerHTML;
}

//get food price to array prices
let priceElements = document.getElementsByClassName('price');
const prices = [];
for(let i = 0; i < priceElements.length; i ++){
    prices[i] = priceElements[i].textContent.slice(1);
}

//get quantity input elements to array quantities
var quantities = document.getElementsByName('quantity');

//get each order information to an object, then store those objects in an array
var orderArray = [];


/**
 * everytime reload memu page, check if the localstorage has the ordering information
 * if true, get the quantity infomation user entered before, so the users doesn't need to enter it again
 */
function startup(){
    if (localStorage.getItem('orderArrayJSON')){
        let orders = localStorage.getItem('orderArrayJSON');
        orderArray = JSON.parse(orders); 
        let orderRecord, index,quantity;

        for(let i = 0; i < orderArray.length; i ++){
            orderRecord = orderArray[i];
            index = orderRecord.index;
            quantity = orderRecord.quantity;
            quantities[index-1].value = quantity;
        }
    }
}




/**
 * create an object with an specific index of order record 
 * @param {number} itemIndex 
 */
function addItem(itemIndex){
    //delete the old record for this item
    let orderRecord;
    for(let i = 0; i <orderArray.length; i ++){
        orderRecord = orderArray[i];
        if(orderRecord.index == itemIndex){
            orderArray.splice(i,1);
        }
    }

    //if quantity is zero, tell the user delete success
    //else create an new object for orderArray
    let ItemQuantity = quantities[itemIndex-1].value;
    if(ItemQuantity ==0){
        alert('You have delete an Item')
    }else{
        // create an object of this order item
        orderRecord = {
            index: itemIndex,
            name: foodNames[itemIndex-1],
            price: prices[itemIndex-1],
            quantity: ItemQuantity,
            subtotal: (prices[itemIndex-1] * ItemQuantity).toFixed(2)
        } 
        orderArray.push(orderRecord);
    }

    
}

/**
 * calculate the total price for all the food(before tax)
 *  
 */
function CalTotalOrdered(){

    //store order object array to localstorage in format of JSON
    const orderDetails = JSON.stringify(orderArray);
    localStorage.setItem('orderArrayJSON',orderDetails); 

    //calculate order total and save it to localstorage
    let totalOrdered = 0;
    for (let i =0; i < orderArray.length; i ++){
        let orderRecord = orderArray[i];
        totalOrdered = Number(totalOrdered) + Number(orderRecord.subtotal);
    }
    localStorage.setItem('totalOrdered',totalOrdered.toFixed(2));

}

