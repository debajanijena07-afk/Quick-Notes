// Store notes in a variable (in-memory only)
let notes = [];

// DOM elements
const noteInput = document.getElementById('noteInput');
const addNoteBtn = document.getElementById('addNoteBtn');
const notesList = document.getElementById('notesList');

// Add note function
function addNote() {
    const noteText = noteInput.value.trim();
    
    if (noteText === '') {
        alert('Please enter a note before adding.');
        return;
    }
    
    // Add note to the array
    notes.push(noteText);
    
    // Clear input
    noteInput.value = '';
    
    // Refresh the display
    displayNotes();
}

// Delete note function
function deleteNote(index) {
    notes.splice(index, 1);
    displayNotes();
}

// Display all notes
function displayNotes() {
    if (notes.length === 0) {
        notesList.innerHTML = '<div class="empty-message">No notes yet. Add your first note above!</div>';
        return;
    }
    
    notesList.innerHTML = '';
    
    notes.forEach((note, index) => {
        const noteItem = document.createElement('div');
        noteItem.className = 'note-item';
        
        const noteText = document.createElement('div');
        noteText.className = 'note-text';
        noteText.textContent = note;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteNote(index);
        
        noteItem.appendChild(noteText);
        noteItem.appendChild(deleteBtn);
        notesList.appendChild(noteItem);
    });
}

// Event listeners
addNoteBtn.addEventListener('click', addNote);

// Allow adding note with Enter key (Ctrl+Enter or Shift+Enter)
noteInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.shiftKey)) {
        addNote();
    }
});

// Initialize display
displayNotes();
