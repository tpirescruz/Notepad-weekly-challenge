const noteInput = document.querySelector('#note-input')
const sendButton = document.querySelector('.submit')
const sentNotes = document.querySelector('.notes')
const color = document.querySelector('#color')
const notes =  document.querySelector('.note-container')

color.addEventListener('input', ()=> {
    noteInput.style.filter = `drop-shadow( 15px 10px ${color.value})`
    document.querySelector('h1').style.filter = `drop-shadow(4px 4px ${color.value})`
})

function addNote(e) {
    e.preventDefault()
    const noteContainer = document.createElement('div')
    const noteContent = document.createElement('p')
    const deleteNote = document.createElement('div')
    if (noteInput.value.length == 0) {
        alert('Il faut que votre note contienne quelquechose!')
    } else {
        sentNotes.appendChild(noteContainer).appendChild(noteContent).textContent = `${noteInput.value}`
        noteContainer.appendChild(deleteNote).classList.add('delete')
        noteContainer.classList.add('note-container')
        noteContainer.setAttribute('draggable', 'true')
        noteContainer.style.border = `${color.value} 2px solid`

        const deleteBtn = document.querySelectorAll('.delete')
        for (const i of deleteBtn) {
            i.addEventListener('click', () => {
                i.parentNode.parentNode.removeChild(noteContainer)
            })
        }
    }
}

sendButton.addEventListener('click', addNote)
