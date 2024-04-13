import React from 'react';
import './Main.css';
import NavBar from './NavBar';
import Footer from './Footer';
import Body from './body';


const Main = () =>{
    return(
        <>
      <section id="header_container">
        <NavBar/>
        <Body/>
        <Footer/>

      </section>
        </>
    );
}

export default Main;