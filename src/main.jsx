import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './components/pages/Home'
import NewPost from './components/pages/NewPost'

import Layout from './Layout'

import './index.css'


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import QrCodePage from './components/pages/QrCodePage'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="newPost" element={<NewPost />} />
        <Route path="QrCodePage" element={<QrCodePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
)
