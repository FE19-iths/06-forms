import React, { useState/*, useEffect*/ } from 'react';
import './BookForm.css';

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [titleTouched, setTitleTouched] = useState(false);
    const [authorTouched, setAuthorTouched] = useState(false);

    const stopSubmit = event => {
        event.preventDefault();
    }

    /*useEffect(() => {
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
    }, [title, author])*/

    let [titleClass, titleError] = titleTouched
        ? isValidTitle(title)
        : ['', ''];
    let [authorClass, authorError] = authorTouched
        ? isValidAuthor(author)
        : ['', ''];

    // First input is an UNCONTROLLED component
    // Second input is CONTROLLED
    return (
        <div>
            <h3> Register a book </h3>
            <form onSubmit={stopSubmit}>
            <div className="form-group">
                <label> Book title </label>
                <input type="text" placeholder="The book title"
                    className={titleClass}
                    onChange={e => setTitle(e.target.value)}
                    onBlur={() => setTitleTouched(true)} />
                <div className="error">{titleError}</div>
            </div>

            <div className="form-group">
                <label> Author name </label>
                <input type="text" placeholder="The author's name"
                    className={authorClass}
                    onChange={e => setAuthor(e.target.value)}
                    onBlur={() => setAuthorTouched(true)}
                    value={author} />
                <div className="error">{authorError}</div>
            </div>

            <div className="form-group">
                <button disabled={titleError || authorError}> Register book in database </button>
            </div>
            <div>
                If you click, "{title}" by "{author}" will be added.
            </div>
            </form>
        </div>
    )
}

function isValidTitle(title) {
    if( String(title) !== '' ) {
        return ['valid', ''];
    } else {
        return ['invalid', 'Please enter a title']
    }
}
function isValidAuthor(author) {
    let validAuthor = typeof(author) === 'string'
        && isNaN(Number(author));

    if( validAuthor ) {
        return ['valid', ''];
    } else {
        return ['invalid', "Please enter the author's name"]
    }
}

export default BookForm;
