import { MdDeleteForever } from "react-icons/md";
import { MdUpdate } from "react-icons/md"

const Note = ({ id, title, category, text, date, handleDeleteNote }) => {
    return <div className="note">
        <h2>{title}</h2>
        <h3>{category}</h3>
        <span>{text}</span>
        <div className="note-footer">
            <MdUpdate className="update-icon" size="1.5em" />
            <small>{date}</small>
            <MdDeleteForever onClick={() => handleDeleteNote(id)} className="delete-icon" size="1.5em" />

        </div>
    </div>
}

export default Note;