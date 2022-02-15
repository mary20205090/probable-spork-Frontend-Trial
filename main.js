function store(){ //stores items in the localStorage
    var destination = document.getElementById('destination').value;
    var vehicle = document.getElementById('vehicle').value;
    var description = document.getElementById('description').value;
    var sendername = document.getElementById('sendername').value;
    var receiptname = document.getElementById('receiptname').value;
    var paymentmode = document.getElementById('paymentmode').value;
    var amount = document.getElementById('amount').value;





    const price = {
        destination: destination,
        vehicle:vehicle,
        description: description,
        sendername: sendername,
        receiptname: receiptname,
        paymentmode: paymentmode,
        amount: amount,
    }

    window.localStorage.setItem(localStorage.length + 1,JSON.stringify(price));  
    //converting object to string
}
// retrieve records
function retrieveRecords(){ //retrieves items in the localStorage
    console.log("retrieve records");
    var key = document.getElementById('retrieveKey').value;
    var records = window.localStorage.getItem(key);
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);
}
// remove items
function removeItem(){  //deletes item from localStorage
    var key = document.getElementById('removeKey').value;
    localStorage.removeItem(key)
    console.log("remove items");
}
// clear storage
function clearStorage(){ 
    //clears the entire localStorage
    localStorage.clear()
    console.log("clear records");
}

// onclick
window.onload =function(){ //ensures the page is loaded before functions are executed.
    document.getElementById("priceForm").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("retrieveButton").onclick = retrieveRecords




    
    
}
// A $( document ).ready() block.


