/**
 * show order details to the table
 */
function showOrder(){
    let orders = localStorage.getItem('orderArrayJSON');
    let orderArray = JSON.parse(orders);
    let totalOrdered = localStorage.getItem('totalOrdered');

    let orderTable = document.getElementById('ordersTable');  

    // show the th row
    orderTable.innerHTML = '<tr><th> Dish Name</th><th> Price</th><th> Quantity</th><th> Subtotal</th></tr>';

    // show the order records,  one line for each item
    for (let i = 0; i < orderArray.length; i ++){
        let orderRecord = orderArray[i];
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(orderRecord.name)); 

        let td2 = document.createElement('td');
        td2.appendChild(document.createTextNode('$' + orderRecord.price)); 

        let td3 = document.createElement('td');
        td3.appendChild(document.createTextNode(orderRecord.quantity)); 

        let td4 = document.createElement('td');
        td4.appendChild(document.createTextNode('$' +orderRecord.subtotal));

        tr.append(td1, td2, td3, td4 ) ;
        orderTable.append(tr);
    }

    // show total ordered (exclude tax)
    orderTable.appendChild(document.createElement('br'));

    let tr = document.createElement('tr');
    tr.innerHTML = '<td></td><td></td>';

    let td3 = document.createElement('td');
    td3.appendChild(document.createTextNode('Total:'));

    let td4 = document.createElement('td');
    td4.appendChild(document.createTextNode('$' + totalOrdered));

    
    tr.append(td3, td4);

    orderTable.appendChild(tr);
    

}