import React, { useState, useEffect } from 'react';
import './BookForm.css';

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const stopSubmit = event => {
        event.preventDefault();
    }

    useEffect(() => {
        // om det är tomt i input-fälten, men finns saker i localStorage - hämta data från localStorage och lägg i input-fälten
        // annars -> spara det användaren skrivit i localStorage
        if( title === '' && author === '' ) {
            let cachedBook = JSON.parse(localStorage.getItem('library.book'));
            if( cachedBook ) {
                setTitle(cachedBook.title);
                setAuthor(cachedBook.author);
            }
        } else {
            localStorage.setItem('library.book', JSON.stringify({ title, author }));
        }
    }, [title, author])

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
