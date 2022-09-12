import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import { HomePage, FavouritesPage } from './pages';

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/favourites' element={<FavouritesPage />}></Route>
            </Routes>
        </>
    );
}

export default App;
