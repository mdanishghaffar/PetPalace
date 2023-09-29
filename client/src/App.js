import {Routes , Route } from "react-router-dom" 

import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Policy" element={<Policy />}></Route>
        <Route path="/*" element={<Pagenotfound />}></Route>
    </Routes>
    </>
  );
}

export default App;
