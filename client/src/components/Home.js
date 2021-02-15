import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    You are not logged in to Spotify
                </p>
                <Link
                    to="/login"
                >
                    Login Here
                </Link>
            </header>
        </div>
    );
}

export default Home;