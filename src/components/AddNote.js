import { useState } from "react";

const AddNote = ({ handleAddNote }) => {

    const [noteTitle, setNoteTitle] = useState('');

    const handleTitle = (e) => {
        setNoteTitle(e.target.value)

    }

    const [noteText, setNoteText] = useState('');
    // const characterlimit = 200

    const handleChange = (e) => {
        // if (characterlimit - e.target.value.length >= 0) {
        setNoteText(e.target.value);

        // }
    }
    const handleAddClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteTitle, noteText)
            setNoteText('')
        } else {
            alert("Please add required data")
        }
    }





    return <div className="note new">
        <label for="title" id="title">TITLE:</label>
        <input type="title" className="title" value={noteTitle} onChange={handleTitle} required />


        <textarea rows="8" cols="10" placeholder="Please Add note here....."
            value={noteText} onChange={handleChange}></textarea>
        <div className="note-footer">
            <button className="add" onClick={handleAddClick}>Add</button>
        </div>
    </div >
}

export default AddNote;