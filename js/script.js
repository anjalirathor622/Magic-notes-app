// console.log('hello')
//get element
let addbtn = document.getElementById("addbtn");
showNotes();

//addeventlistener to handle add notes button
addbtn.addEventListener("click",function(){

    let addtext = document.getElementById("addtext");
    let storedNotes = localStorage.getItem("notes");

    if(storedNotes == null){
        allNotes = [];
    }else{
        allNotes = JSON.parse(storedNotes);  // convertnotes to json arraylist

    }
    allNotes.push(addtext.value);           //push all notes to the array

    localStorage.setItem("notes", JSON.stringify(allNotes));   //set the notes and convert them to json string
    addtext.value = "";
    showNotes();
})

//function to shhow  notes 
function showNotes() {
    let storedNotes = localStorage.getItem("notes");
    if(storedNotes==null) {
        allNotes = [];
    }else{
        allNotes=JSON.parse(storedNotes);
    }
    let html = "";
    allNotes.forEach(function(element,index){     //looping on notes and generating html for each note
        html += `<div class="card m-2" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">MyNote ${index+1}</h5>
              <p class="card-text">${element}</p>
              <button href="#" class="btn btn-primary">delete</button>
            </div>
          </div>`
    })

    let notesTextElem = document.getElementById("notes");
    //checking for notes and seting the inner html
    if(allNotes.length!=0){        
        notesTextElem.innerHTML = html;
    }else{
        notesTextElem.innerHTML = "There is nothing to show,let's create your first note;it will make things documented.";
    }
}