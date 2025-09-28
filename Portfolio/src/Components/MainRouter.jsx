import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Services from '../Pages/Services'
import Project from '../Pages/Project'
import Layout from './Layout'

//STUDENT INFORMATION: Name: Natashya Peddle / StudentID: 301487275 / Date: September 27th 2025 / File Name: Portfolio: MainRouter.jsx

const MainRouter = () => { //route links
        return (<div>
    <Layout />
    <Routes>
 
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/projects" element={<Project />} />
 
    </Routes>
    
</div>
 )
}
export default MainRouter

 