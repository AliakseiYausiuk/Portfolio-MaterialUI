import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './componets/pages/home/Home';
import {AboutME} from './componets/pages/aboutME/AboutME';
import {Portfolio} from './componets/pages/portfolio/Portfolio'
import {Contact} from './componets/pages/contact/Contact';
import {Blog} from './componets/pages/blog/Blog';


function App() {

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutMe" element={<AboutME/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/blog" element={<Blog/>}/>
        </Routes>
    </BrowserRouter>
}

export default App;
