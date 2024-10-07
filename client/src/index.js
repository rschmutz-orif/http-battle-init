import React from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Layout from './components/modules/Layout'


import Login from './components/modules/Login'
import Lobby from './components/modules/Lobby'
import Game from './components/modules/Game'

import './index.pcss';

const container = document.getElementById('root');
const root = createRoot(container);

const NoMatch = () => {
    return <p>404 - Aucune page trouvée</p>
}

root.render(<BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="lobby" element={<Lobby />} />
            <Route path="games/:gameId" element={<Game />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NoMatch />} />
        </Route>
    </Routes>
</BrowserRouter>);
