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


    const handleChange = (e) => {
        setNoteText(e.target.value);
    }

    const handleAddClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteTitle, noteCategory, noteText)
            setNoteTitle('')
            setNoteCategory('')
            setNoteText('')
        } else {
            alert("Please Add something")
        }
    }
    return <form id="form1">
        <div className="note new">
            <label htmlFor="title" id="title">TITLE:</label>
            <input name="txt1" type="text" id="title" className="title" value={noteTitle} onChange={handleTitle} placeholder="Add Title" required="required" autoFocus />
            <label htmlFor="category" name="txt2" for="category" id="category">CATEGORY:</label>
            <input type="text" className="category" value={noteCategory} onChange={handleCategory} placeholder="Add Category" required="required" />
            <textarea rows="8" cols="10" placeholder="Please Add note here....."
                value={noteText} onChange={handleChange}></textarea>
            <div className="note-footer">
                <button className="add" onClick={handleAddClick}>Add</button>
            </div>
        </div >
    </form>

}
export default AddNote;