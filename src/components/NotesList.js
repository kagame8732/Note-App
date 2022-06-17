import AddNote from "./AddNote";
import Note from "./Note";


const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
        <div className="notes-list">
            <AddNote
                handleAddNote={handleAddNote}
            />
            {notes.map((note) => <Note key={note.id}
                id={note.id}
                title={note.title}
                category={note.category}
                text={note.text}
                date={note.date}
                handleDeleteNote={handleDeleteNote}
            />
            )}
<<<<<<< HEAD

=======
>>>>>>> aa4976de5b27db25d173f2d5cc8b57db74487156
        </div>
    )
}

export default NotesList;