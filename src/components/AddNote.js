import { useState } from "react";

const AddNote = ({ handleAddNote }) => {

    const [noteText, setNoteText] = useState('');
    // const characterlimit = 200

    const handleChange = (e) => {
        // if (characterlimit - e.target.value.length >= 0) {
        setNoteText(e.target.value);

        // }
    }
    const handleAddClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText('')
        }
    }
    return <div className="note new">
        <textarea rows="8" cols="10" placeholder="Please Add note here....."
            value={noteText} onChange={handleChange}></textarea>
        <div className="note-footer">

            <button className="add" onClick={handleAddClick}>Add</button>
        </div>

    </div>
}

export default AddNote;