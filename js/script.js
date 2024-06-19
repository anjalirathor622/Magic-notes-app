// console.log('hello')
let addbtn = document.getElementById("addbtn");
showNotes();

addbtn.addEventListener("click",function(){

    let addtext = document.getElementById("addtext");
    let storedNotes = localStorage.getItem("notes");

    if(storedNotes == null){
        allNotes = [];
    }else{
        allNotes = JSON.parse(storedNotes);

    }
    allNotes.push(addtext.value);

    localStorage.setItem("notes", JSON.stringify(allNotes));
    addtext.value = "";
    showNotes();
})

//function  definition
function showNotes() {
    let storedNotes = localStorage.getItem("notes");
    if(storedNotes==null) {
        allNotes = [];
    }else{
        allNotes=JSON.parse(storedNotes);
    }
    let html = "";
    allNotes.forEach(function(element,index){
        html += `<div class="card m-2" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">MyNote ${index+1}</h5>
              <p class="card-text">${element}</p>
              <button href="#" class="btn btn-primary">delete</button>
            </div>
          </div>`
    })
    let notesTextElem = document.getElementById("notes");
    if(allNotes.length!=0){
        notesTextElem.innerHTML = html;
    }else{
        notesTextElem.innerHTML = "There is nothing to show,let's create your first note;it will make things documented.";
    }
}