import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import PersonalDetails from "./pages/PersonalDetails";
import ContactMe from "./pages/ContactMe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Likes from './components/project/Likes'
import Comments from './components/project/Comments'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/projects' element={<Projects />}> </Route>
          <Route path='/projects/:ProjectID' element={<ProjectDetails/>}>
            <Route path='like' element={<Likes />}></Route>
          <Route path='comments' element={<Comments />}></Route>
          </Route>
          <Route path='/projectDetails' element={<ProjectDetails />}></Route>
          <Route path='/personal_info' element={<PersonalDetails />}></Route>
          <Route path='/contact_me' element={ <ContactMe />}></Route>
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
