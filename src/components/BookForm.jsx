import React, { useState } from 'react';
import './BookForm.css';

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const stopSubmit = event => {
        event.preventDefault();
    }
    // First input is an UNCONTROLLED component
    // Second input is CONTROLLED
    return (
        <div>
            <h3> Register a book </h3>
            <form onSubmit={stopSubmit}>
            <div className="form-group">
                <label> Book title </label>
                <input type="text" placeholder="The book title"
                    onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label> Author name </label>
                <input type="text" placeholder="The author's name"
                    onChange={e => setAuthor(e.target.value)}
                    value={author} />
            </div>
            <div className="form-group">
                <button> Register book in database </button>
            </div>
            <div>
                If you click, "{title}" by "{author}" will be added.
            </div>
            </form>
        </div>
    )
}

export default BookForm;
