import React from "react";
import AppHeader from "../appHeader";
import RandomChar from "../randomChar";
import CharList from "../charList";
import CharInfo from "../charInfo";

import decoration from '../../resources/img/vision.png';

const App = () => {
    return (
        <div className="app">
            <AppHeader />
            <main>
                <RandomChar />
                <div className="char__content">
                    <CharList />
                    <CharInfo />
                </div>
                <img className="bg-decoration" src={decoration} alt="vision" />
            </main>
        </div>
    );
};

export default App;