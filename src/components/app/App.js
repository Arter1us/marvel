import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppHeader from "../appHeader";
import AppBanner from "../appBanner";
import RandomChar from "../randomChar";
import CharList from "../charList";
import CharInfo from "../charInfo";
import ComicsList from "../comicsList";
import ErrorBoundary from "../errorBoundary";

import decoration from '../../resources/img/vision.png';

const App = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    };

    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    {/* <ErrorBoundary>
                        <RandomChar />
                    </ErrorBoundary>
                    <div className="char__content">
                        <ErrorBoundary>
                            <CharList onCharSelected={onCharSelected} />
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <CharInfo charId={selectedChar} />
                        </ErrorBoundary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision" /> */}
                    <AppBanner />
                    <ComicsList />

                </main>
            </div>
        </Router>
    )
};

export default App;