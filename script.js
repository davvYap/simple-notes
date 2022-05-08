'use strict';

const notesEl = document.querySelector('.notes');
const overlayEl = document.querySelector('.overlay');
const btnCloseNotesEl = document.querySelector('.close-notes');
const btnOpenNotesEl = document.querySelectorAll('.show-notes');
const addBoxRightEl = document.querySelector('.right-container');
const addListBoxEl = document.querySelector('.list-box');
const addNotesBtnEl = document.querySelector('.notes-container');
const addHiddenBoxEl = document.querySelector('.hidden-container');
const addNotesContentEl = document.querySelector('#notes');
const createEl = document.querySelector('#submit');
const dateEl = document.querySelector('#date');
const titleEl = document.querySelector('#title');
const contentEl = document.querySelector('#content');
const deleteEl = document.querySelector('#delete');
const changeUser = document.querySelector('.logo');

// Add functionality for remove button for existing template
const delList = function () {
  addNotesBtnEl.innerHTML = '';
  addNotesContentEl.innerHTML = '';
  notesEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

// To create a function to close the notes and overlayEl
const closeNotes = function () {
  notesEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

// Open notes
const openNotes = function () {
  notesEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};

//To add button functionality for each notes
for (let i = 0; i < btnOpenNotesEl.length; i++) {
  console.log(btnOpenNotesEl[i].textContent);
  console.log(btnOpenNotesEl.length);
  btnOpenNotesEl[i].addEventListener('click', function () {
    notesEl.classList.remove('hidden');
    overlayEl.classList.remove('hidden');
  });
}

// Add new button when creating new notes
const newNote = function () {
  if (!titleEl.value || !contentEl.value) {
    alert('Please fill in your notes!');
  } else {
    // 1. Create new box in right container
    // Create new notes button
    const createShowNotesBtn = document.createElement('button');
    createShowNotesBtn.classList.add('show-notes');
    createShowNotesBtn.innerText = titleEl.value;

    addNotesBtnEl.appendChild(createShowNotesBtn);

    //Append the whole box in the container
    addListBoxEl.appendChild(addNotesBtnEl);
    addBoxRightEl.appendChild(addListBoxEl);

    // 2. Create new box inside the note
    const createNotesEl = document.createElement('div');
    createNotesEl.classList.add('notes', 'hidden');

    // Create new close button in the box
    const createCloseBtnEl = document.createElement('button');
    createCloseBtnEl.classList.add('close-notes');
    createCloseBtnEl.innerText = 'x';

    createNotesEl.appendChild(createCloseBtnEl);

    // Create date value in the box
    const createNotesDateEl = document.createElement('p');
    createNotesDateEl.classList.add('date');
    createNotesDateEl.innerText = `Date created: ${dateEl.value}`;

    createNotesEl.appendChild(createNotesDateEl);

    // Create title value in the box
    const createNoteTitleEl = document.createElement('h1');
    createNoteTitleEl.classList.add('title');
    createNoteTitleEl.innerText = titleEl.value;

    createNotesEl.appendChild(createNoteTitleEl);

    // Create content value in the box
    const createNoteContentEl = document.createElement('p');
    createNoteContentEl.innerText = contentEl.value;

    createNotesEl.appendChild(createNoteContentEl);

    // Create delete btn in the box
    const createDelBtnDiv1El = document.createElement('div');
    createDelBtnDiv1El.classList.add('close-btn');
    const createDelBtnDiv2El = document.createElement('div');
    const createDelBtnEl = document.createElement('button');
    createDelBtnEl.classList.add('btn');

    createNotesEl.appendChild(createDelBtnDiv1El);
    createDelBtnDiv1El.appendChild(createDelBtnDiv2El);
    createDelBtnDiv2El.appendChild(createDelBtnEl);

    // Append whole box in hidden container
    addHiddenBoxEl.appendChild(createNotesEl);

    dateEl.value = '';
    titleEl.value = '';
    contentEl.value = '';
  }
};

// To add close button functionality using the function created
btnCloseNotesEl.addEventListener('click', closeNotes);

// To add functionality to close the overlayEl when click on the overlayEl
overlayEl.addEventListener('click', closeNotes);

// Escape key to close
document.addEventListener('keydown', function (e) {
  //   console.log(event.key);
  if (e.key === 'Escape' && !notesEl.classList.contains('hidden')) {
    closeNotes();
  }
});

deleteEl.addEventListener('click', delList);

createEl.addEventListener('click', newNote);

changeUser.addEventListener('click', function (e) {
  let user = prompt('Please enter your name:');
  if (user === null || user === '') {
    changeUser.innerText = 'Davv';
  } else {
    changeUser.innerText = user;
  }
});
