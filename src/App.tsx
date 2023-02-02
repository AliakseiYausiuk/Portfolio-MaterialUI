import React from 'react';
import { HashRouter, Route, Routes} from 'react-router-dom';
import {Home} from './componets/pages/home/Home';
import {AboutME} from './componets/pages/aboutME/AboutME';
import {Portfolio} from './componets/pages/portfolio/Portfolio'
import {Contact} from './componets/pages/contact/Contact';
import {Blog} from './componets/pages/blog/Blog';

export const PATH = {
    HOME: '/',
    ABOUTME: '/aboutMe',
    PORTFOLIO: '/portfolio',
    CONTACT: '/contact',
    BLOG: '/blog'
}

function App() {
    return <HashRouter>
        <Routes>
            <Route path={PATH.HOME} element={<Home/>}/>
            <Route path={PATH.ABOUTME} element={<AboutME/>}/>
            <Route path={PATH.PORTFOLIO} element={<Portfolio/>}/>
            <Route path={PATH.CONTACT} element={<Contact/>}/>
            <Route path={PATH.BLOG} element={<Blog/>}/>
        </Routes>
    </HashRouter>
}

export default App;
