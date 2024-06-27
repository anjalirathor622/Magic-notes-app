// console.log('hello')
//get element
let addbtn = document.getElementById("addbtn");
let searchNotes = document.getElementById("search");
showNotes();

//addeventlisteners
addbtn.addEventListener("click", addNoteFuntion)  //for create note when add note is clicked

searchNotes.addEventListener('input',searchFunction);  //for search notes

//function to create/add notes
function addNoteFuntion(){
    let addtext = document.getElementById("addtext");
    let addtitle = document.getElementById("addTitle");
    let storedNotes = localStorage.getItem("notes");
        
    if(storedNotes == null){
        allNotes = [];
    }else{
        allNotes = JSON.parse(storedNotes);  // convertnotes to json arraylist
    }
    let myNotes = {
        notestext: addtext.value,
        notestitle: addtitle.value
    };
    allNotes.push(myNotes);           //push all notes to the array

    localStorage.setItem("notes", JSON.stringify(allNotes));   //set the notes and convert them to json string
    addtext.value = "";
    addtitle.value = "";
    showNotes();
}
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
        html += `<div class="noteCard card m-2" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title"> ${index+1 + ") " + element.notestitle}</h5>
              <p class="card-text">${element.notestext}</p>
              <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">delete</button>
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

//delete note function
function deleteNote(index){
    // console.log("deleteNote"+index);

    let storedNotes = localStorage.getItem("notes");

    if(storedNotes==null) {
        allNotes = [];
    }else{
        allNotes=JSON.parse(storedNotes);
    }

    allNotes.splice(index, 1);    //splicing clicked notes from localstrorage notes array
    localStorage.setItem("notes", JSON.stringify(allNotes));   //updating localstorage
    showNotes();
}

//search note fucntion
function searchFunction(){

    let inputval = searchNotes.value;
    // console.log('input changed',inputval);
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let noteTxt = element.getElementsByClassName('card-text')[0].innerText;
        if(noteTxt.includes(inputval)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
        // console.log(noteTxt);


    })
        
}