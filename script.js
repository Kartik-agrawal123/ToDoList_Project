function getAndupdate() {
    console.log("updating");
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    update();
}

function update() {
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
       
    }
  
    //Populate the table
    let tablebody = document.getElementById('tablebody');
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `<tr>
        <th>${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td>
        <button class="btn2" onclick = "deleted(${index})">Delete</button></td>
        </tr> `;
    });
    tablebody.innerHTML = str;
}

add = document.getElementById("add");
add.addEventListener("click", getAndupdate);
update();
function deleted(itemIndex) {
    console.log("Delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    //Delete itemIndex element from the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
}
function clearStorage(){
    if(confirm("Do you really want to clear whole list?")){
    console.log('clearing the storage');
    localStorage.clear();
    update();
}
}