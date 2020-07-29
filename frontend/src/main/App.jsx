import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faHome,
    faHeart,
    faTrash,
    faEdit,
    faPen,
    faDragon
}
    from '@fortawesome/free-solid-svg-icons'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'

library.add(faHome,
    faHeart,
    faEdit,
    faPen,
    faTrash, 
    faDragon)

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>