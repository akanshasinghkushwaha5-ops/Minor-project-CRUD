let database = JSON.parse(localStorage.getItem("minorProject")) || [];
window.onload = function() {
    displayData();
};
function createData() {
    const inputField = document.getElementById("userInput");
    const val = inputField.value.trim();
    if (val ===""){
        alert("write first");
        return;
    }
    database.push(val);
    saveAndRefresh();
    inputField.value="";
}
function displayData() {
    const list =document.getElementById("datalist");
    list.innerHTML ="";

    database.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = ` 
         <span>${item}</span>
            <div class="btns">
                <button class="edit-btn" onclick="updateData(${index})">Update</button>
                <button class="delete-btn"onclick="deleteData(${index})">Delete</button>
            </div>
            `;
            list.appendChild(li);
        });
}
function updateData(index) {
    const currentval = database[index];
    const newval = prompt("Edit your Entry",currentval);

    if (newval !==null && newval.trim() !=="") {
        database[index] = newval.trim();
        saveAndRefresh();
    }
}
function deleteData(index) {
    if (confirm("you want to delete this")){
        database.splice(index,1);
        saveAndRefresh();
    }
}
function saveAndRefresh() {
    localStorage.setItem("minorProject",JSON.stringify(database));
    displayData();
    }