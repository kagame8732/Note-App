import { useState } from "react";

const AddNote = ({ handleAddNote }) => {

    const [noteTitle, setNoteTitle] = useState('');

    const handleTitle = (e) => {
        setNoteTitle(e.target.value)

    }

    const [noteCategory, setNoteCategory] = useState('');
    const handleCategory = (e) => {
        setNoteCategory(e.target.value)

    }

    const [noteText, setNoteText] = useState('');
    // const characterlimit = 200

    const handleChange = (e) => {
        // if (characterlimit - e.target.value.length >= 0) {
        setNoteText(e.target.value);

        // }
    }

    const handleAddClick = () => {
        // e.preventDefault()
        if (noteText.trim().length > 0) {
            handleAddNote(noteTitle, noteCategory, noteText)
            setNoteText('')




        } else {
            alert("Please Add something")
        }
    }


    return <div className="note new">
        {/* <form onSubmit={handleAddClick}> */}
        <label for="title" id="title">TITLE:</label>
        <input type="title" className="title" value={noteTitle} onChange={handleTitle} placeholder="Add Title" required />

        <label for="category" id="category">CATEGORY:</label>
        <input type="category" className="category" value={noteCategory} onChange={handleCategory} placeholder="Add Category" required />


        <textarea rows="8" cols="10" placeholder="Please Add note here....."
            value={noteText} onChange={handleChange}></textarea>
        <div className="note-footer">
            <button className="add" onClick={handleAddClick}>Add</button>
        </div>
        {/* </form> */}

    </div >
}

export default AddNote;