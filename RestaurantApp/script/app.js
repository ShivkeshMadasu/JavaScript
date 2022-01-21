//Tables
const tables =  [
    {
        "id":1,
        "name":"Table-1",
        "totalCost":0,
        "totalItems":0,
        "orders":[]
    },
    {
        "id":2,
        "name":"Table-2",
        "totalCost":0,
        "totalItems":0,
        "orders":[]
    },
    {
        "id":3,
        "name":"Table-3",
        "totalCost":0,
        "totalItems":0,
        "orders":[]
    }
];
//Menu 
const items=[
    {
        "id":1,
        "name":"Veg Biryani",
        "cost":200,
        "course":"main"
    },
    {
      "id":2,
      "name":"Chicken Biryani",
      "cost":300,
      "course":"main"
    },
    {
        "id":3,
        "name":"Mutton Biryani",
        "cost":450,
        "course":"main"
    },
    {
        "id":4,
        "name":"Chicken 65",
        "cost":220,
        "course":"entree"
    },
    {
      "id":5,
      "name":"Chicken Manchuria",
      "cost":220,
      "course":"entree" 
    },
    {
        "id":6,
        "name":"IceCream",
        "cost":65,
        "course":"dessert"
    },
    {
        "id":7,
        "name":"Coca-Cola",
        "cost":20,
        "course":"beverages"
    },
    {
        "id":8,
        "name":"Thums Up",
        "cost":20,
        "course":"beverages"
    },
    {
        "id":9,
        "name":"Samosa",
        "cost":20,
        "course":"appetizers"
    },

  ]



  document.addEventListener("DOMContentLoaded",  function load(){
       
    
    // displaying table details 
        for(let i = 0; i < tables.length;i++){

            let tableCard = document.createElement("div");
            let tableBody = document.createElement("div");
            let tableTitle = document.createElement("h5");
            let tableCost = document.createElement("h6");

            tableCard.setAttribute("class","card mt-2 table");
            tableCard.setAttribute("id","table-"+(i+1));
            tableCard.setAttribute("data-toggle","modal");
            tableCard.setAttribute("data-target","#exampleModal");
            tableBody.setAttribute("class","card-body");
            tableTitle.setAttribute("class","card-title");
            tableCost.setAttribute("class","card-subtitle mb-2 text-muted");

            tableTitle.innerHTML = tables[i].name;
            tableCost.innerHTML = `Rs.${tables[i].totalCost} | Total items: ${tables[i].totalItems}`;

            tableBody.appendChild(tableTitle);
            tableBody.appendChild(tableCost);
            tableCard.appendChild(tableBody);

            document.getElementById("table-container").appendChild(tableCard);
            document.getElementById("table-"+(i+1)).addEventListener("click",()=>{
                
                tableDetails(tables[i])
            });
            document.getElementById("table-"+(i+1)).addEventListener("dragover",(event)=>{
                event.preventDefault();
            });
            document.getElementById("table-"+(i+1)).addEventListener("drop",dragDrop);
        }

        

        //displaying menu item details
        for(let i = 0; i < items.length;i++){
        
            let itemCard = document.createElement("div");
            let itemBody = document.createElement("div");
            let itemTitle = document.createElement("h5");
            let itemCost = document.createElement("h6");
            let itemCourseType = document.createElement("h6");
          
            if(i===items.length-1)
                itemCard.setAttribute("class","card mt-2 mb-4 shadow-sm menu");
            else
                itemCard.setAttribute("class","card mt-2 shadow-sm menu");
          
                itemCard.setAttribute("id","item-"+(i+1));    
            itemCard.setAttribute("draggable","true");       
            itemBody.setAttribute("class","card-body");
            itemTitle.setAttribute("class","card-title mb-4");
            itemCost.setAttribute("class","card-subtitle mb-2 text-muted");
            itemCourseType.setAttribute("class","card-subtitle mb-2 text-muted d-none");

            itemTitle.innerHTML =items[i].name;
            itemCost.innerHTML = items[i].cost;
            itemCourseType.innerHTML=items[i].course;
            itemBody.appendChild(itemTitle);
            itemBody.appendChild(itemCost);
            itemBody.appendChild(itemCourseType);
            itemCard.appendChild(itemBody);

            document.getElementById("menu-container").appendChild(itemCard);

            document.getElementById("item-"+(i+1)).addEventListener("dragstart",(event)=>{
                event.dataTransfer.setData("dropItem",event.target.id );
            });
        }



        // creating  model
        let model = document.createElement("div");
        model.setAttribute("class","modal fade");
        model.setAttribute("id","exampleModal");
        model.setAttribute("tabindex","-1");
        model.setAttribute("role","dialog");
        model.setAttribute("aria-labelledby","exampleModalLabel");
        model.setAttribute("aria-hidden","true");
        model.setAttribute("data-backdrop","static");
        
        let modelDialog= document.createElement("div");
        modelDialog.setAttribute("class","modal-dialog modal-dialog-centered modal-lg");
        modelDialog.setAttribute("role","document");
        modelDialog.setAttribute("style","shadow-lg")
       
        let modelContent = document.createElement("div");
        modelContent.setAttribute("class","modal-content border-0");
        modelContent.setAttribute("id","modal-content");
       
        //model header
        let modelHeader = document.createElement("div");
        modelHeader.setAttribute("class","modal-header ");
        modelHeader.setAttribute("style","background-color:rgb(79, 95, 219)");
        
        let modelTitle = document.createElement("h5");
        modelTitle.setAttribute("class","modal-title text-white");
        modelTitle.setAttribute("id","exampleModalLabel");
        
        let headerClose = document.createElement("button");
        headerClose.setAttribute("id","modelHeaderClose")
        headerClose.setAttribute("type","button");
        headerClose.setAttribute("class","btn-close");
        headerClose.setAttribute("data-dismiss","modal");
        headerClose.setAttribute("aria-label","Close");
        
        //model body
        let modelBody = document.createElement("div");
        modelBody.setAttribute("class","modal-body");
        modelBody.setAttribute("id","modelBodyId");
        
        //model footer
        let modelFooter = document.createElement("div");
        modelFooter.setAttribute("class","modal-footer");
        
        let closeButton = document.createElement("div");
        closeButton.setAttribute("id","modelFooterClose");
        closeButton.setAttribute("type","button");
        closeButton.setAttribute("data-dismiss","modal");
        closeButton.innerHTML = "CLOSE SESSION (GENERATE BILL)";
        
        modelFooter.appendChild(closeButton);
        modelHeader.appendChild(modelTitle);
        modelHeader.appendChild(headerClose);
        modelContent.appendChild(modelHeader);
        modelContent.appendChild(modelBody);
        modelContent.appendChild(modelFooter);
        modelDialog.appendChild(modelContent);
        model.appendChild(modelDialog);
        document.body.appendChild(model);
    }
    
    
);

// model table details function
function tableDetails(table){

    document.getElementById("table-"+table.id).style.background="orange";
    document.getElementById("exampleModalLabel").innerHTML = table.name+" | Order Details";

    let modelBody = document.getElementById("modelBodyId");

    if(modelBody.hasChildNodes()){
        modelBody.innerHTML=""
    }

    let displayTable = document.createElement("table");
    displayTable.setAttribute("class","table");
    let tableHead = document.createElement("thead");
    let tableRow = document.createElement("tr");
    let sno = document.createElement("th");
    sno.setAttribute("scope","col");
    sno.innerHTML="S.NO"
    let item = document.createElement("th");
    item.setAttribute("scope","col");
    item.innerHTML="Item"
    let price = document.createElement("th");
    price.setAttribute("scope","col");
    price.innerHTML="Price"
    let quantity = document.createElement("th");
    quantity.setAttribute("scope","col");
    let remove = document.createElement("th");
    remove.setAttribute("scope","col");

    tableRow.appendChild(sno);
    tableRow.appendChild(item);
    tableRow.appendChild(price);
    tableRow.appendChild(quantity);
    tableRow.appendChild(remove);
    tableHead.appendChild(tableRow);
    displayTable.appendChild(tableHead);
   
    let tableBody = document.createElement("tbody");
    tableBody.setAttribute("class","border-3");
    for(let i = 0; i < table.orders.length;i++){
       
        let tableRow1 = document.createElement("tr");
        tableRow1.setAttribute("class","border-1");
        let td1 = document.createElement("th");
        td1.setAttribute("scope","row");
        td1.setAttribute("class","pt-4");
        td1.innerHTML = i+1;

        let td2 = document.createElement("td");
        td2.setAttribute("class","pt-4");
        td2.innerHTML=table.orders[i].name;

        let td3 = document.createElement("td");
        td3.setAttribute("class","pt-4");
        td3.innerHTML=table.orders[i].cost.toFixed(2);

        let td4 = document.createElement("td");
        let label = document.createElement("label");
        label.setAttribute("style","font-size:small");
        label.innerHTML="Number of Servings";
        let input = document.createElement("input");
        input.setAttribute("id","itemQuantity-"+(i+1));
        input.setAttribute("type","number");
        input.setAttribute("class","form-control mt-1 mb-1 ");
        input.setAttribute("min","1");
        input.setAttribute("value",table.orders[i].quantity);
        td4.appendChild(label);
        td4.appendChild(input);
        
        let td5 = document.createElement("td");
        let deleteButton = document.createElement("span");
        deleteButton.setAttribute("type","button");
        deleteButton.setAttribute("class","material-icons");
        deleteButton.innerHTML="delete";
        td5.appendChild(deleteButton);
        td5.setAttribute("class","pt-4");

        tableRow1.appendChild(td1);
        tableRow1.appendChild(td2);
        tableRow1.appendChild(td3);
        tableRow1.appendChild(td4);
        tableRow1.appendChild(td5);
        tableBody.appendChild(tableRow1);
        td4.addEventListener("input",()=> updateItemQuatity(table,i));
        deleteButton.addEventListener("click",()=> deleteOrder(table,i));
      
    }
    let totalPrice = document.createElement("p");
    totalPrice.setAttribute("id","modalTotalPrice");
    totalPrice.setAttribute("style","margin-left:36%");
    totalPrice.innerHTML=`Total: <br> ${table.totalCost.toFixed(2)}`;

    displayTable.appendChild(tableBody);
    modelBody.appendChild(displayTable);
    modelBody.appendChild(totalPrice);

    document.getElementById("modelHeaderClose").addEventListener("click",()=>{
        document.getElementById("table-"+table.id).style.background="white";
        }
    )
   
    document.getElementById("modelFooterClose").addEventListener("click",()=>{
        document.getElementById("table-"+table.id).style.background="white";
       table.orders = [];
        table.totalCost=0;
        table.totalItems=0;
        document.getElementById("table-"+table.id).children[0].children[1].innerHTML=`Rs.${table.totalCost} | Total items: ${table.totalItems}`;
    })
}
// drag and drop function
function dragDrop(event){
    event.preventDefault();
    let tableIdName = this.id;
    let droppedItem = event.dataTransfer.getData("dropItem");
    let itemId = parseInt(droppedItem.substring(5));
    let tableId = parseInt(tableIdName.substring(6));
    let orderId;
    for(let i = 0;i<tables[tableId-1].orders.length;i++){
        let order = tables[tableId-1].orders[i];
        if(order.id===items[itemId-1].id){
            orderId = i;
            tables[tableId-1].orders[orderId].quantity+=1;
            break;
        }
    }
    if(isNaN(orderId)){
        tables[tableId-1].orders.push(items[itemId-1]);
        orderId = tables[tableId-1].orders.length-1;
        tables[tableId-1].orders[orderId].quantity=1;
    }
    tables[tableId-1].totalCost=calculateTotalCost(tables[tableId-1]);
    tables[tableId-1].totalItems+=1;
    document.getElementById(tableIdName).children[0].children[1].innerHTML=`Rs.${tables[tableId-1].totalCost} | Total items: ${tables[tableId-1].totalItems}`
}

//calculate total cost of table 
function calculateTotalCost(table){
    let totalCost = 0;
    for(let i = 0;i<table.orders.length;i++){
        totalCost+=(table.orders[i].cost)*(table.orders[i].quantity);
    }
    return totalCost;
}

//remove order item from table
function deleteOrder(table,index){
    table.totalItems -= table.orders[index].quantity;
    table.orders.splice(index,1);
    table.totalCost = calculateTotalCost(table);
    tableDetails(table);
    document.getElementById("modalTotalPrice").innerHTML = `Total: <br> ${table.totalCost.toFixed(2)}`;
    document.getElementById("table-"+table.id).children[0].children[1].innerHTML=`cost: ${table.totalCost} | total items: ${table.totalItems}`;
}

//update item quantity
function updateItemQuatity(table,index){
    let order=table.orders[index]
    order.quantity = parseInt(document.getElementById("itemQuantity-"+(index+1)).value);
    table.totalItems = updatedTotalQuantity(table);
    table.totalCost=calculateTotalCost(table);
    document.getElementById("modalTotalPrice").innerHTML = `Total: <br> ${table.totalCost.toFixed(2)}`;
    document.getElementById("table-"+table.id).children[0].children[1].innerHTML=`cost: ${table.totalCost} | total items: ${table.totalItems}`;
}

function updatedTotalQuantity(table){
    let totalItems = 0;
    for(let i = 0;i<table.orders.length;i++){
        totalItems+=table.orders[i].quantity;
    } 
    return totalItems;    
}

//search menu function
function searchMenu(){
    let allCards = document.getElementsByClassName("card menu");
    let searchText = document.getElementById("searchMenuName").value.toUpperCase();
    for(let index=0;index<allCards.length;index++){
        let item = allCards[index].children[0].children[0].innerHTML.toUpperCase();
        let course = allCards[index].children[0].children[2].innerHTML.toUpperCase();
        if(item.includes(searchText) || course.includes(searchText))
            allCards[index].style.display = "block";
        else
            allCards[index].style.display = "none";
    }   
}
//search table function
function searchTable(){
    let allCards = document.getElementsByClassName("card table");
    let searchText = document.getElementById("searchTableName").value.toUpperCase();
    
    for(let index=0;index<allCards.length;index++){
        let item = allCards[index].children[0].children[0].innerHTML.toUpperCase();
        console.log(item);
       
        if(item.includes(searchText))
            allCards[index].setAttribute("class","card mt-2 table"); 
        else
            allCards[index].setAttribute("class","card mt-2 table d-none");    
      
    }   
}
