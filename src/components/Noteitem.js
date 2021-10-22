import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className='col-md-3'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text my-1" >{note.description}</p>
                    <i className="far fa-trash-alt mx-1" onClick={() => { deleteNote(note._id); props.showAlert("Deleted successfully", "success"); }}></i>
                    <i className="far fa-edit mx-1" onClick={() => { updateNote(note); }}></i>
                </div>
            </div>
        </div>
    )
}
export default Noteitem;