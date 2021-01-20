// Add Note to local storage
shownote();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    // console.log(notesObj);
    shownote();
});

// Display Added Notes
function shownote() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard my-1 mx-1 card shadow p-0 mb-0 bg-white rounded border-0 rounded-0" style="width: 16.3rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id);" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`;
    });
    let noteelm = document.getElementById('notes');
    let empty = document.getElementById('empty');
    if (notesObj.length != 0) {
        noteelm.innerHTML = html;
    }
    else {
        noteelm.innerHTML = `<center><div class="noteCard my-1 mx-0 card shadow p-0 mb-0 bg-white rounded border-0 rounded-0" align="center">
        <div class="card-body">
          <h5 class="card-title">Empty Note</h5>
          <p class="card-text">No Notes Found Please Create A New Note.</p>
        </div>
      </div></center>`;
    }
}

// Delete Function
function deleteNote(index) {
    console.log(index);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownote();
}

// Search
let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener('input', function () {
    let inputVal = searchTxt.value.toLowerCase();
    // console.log(inputVal);
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element) {
        let cardtext = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardtext);
        if(cardtext.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
});


// Further Features:
// 1. Add Title
// 2. Mark a note as Important
// 3. Separate notes by user
// 4. Sync and host to web server 