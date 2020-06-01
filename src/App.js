import React from 'react';
import './App.css';
import BookForm from './components/BookForm';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1> Example form </h1>
            </header>
            <main>
                <h2> Welcome to the library! </h2>
                <BookForm />
            </main>
        </div>
    );
}

export default App;
