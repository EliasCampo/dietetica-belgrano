import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {


  return (

    <>
    
    <NavBar/>
    <ItemListContainer greeting="Mis productos"/>
    </>
  )
}

export default App