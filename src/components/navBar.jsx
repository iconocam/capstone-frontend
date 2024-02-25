import React, {useState} from "react";
import "./Navbar.css";
import SubNavLinks from "./SubNavLinks";
import { Link } from "react-router-dom";
import Modal from "./Modal";
// State for burgerMenu and modal interface
const Navbar = () => {
const [click, setClick ] = useState(false);
const [modalOpen, setModalOpen]= useState(false)

// Toggle modal interface
const clickHandler = () => {
    setClick(!click)
    setModalOpen(true)
}

const closeModal = () => setModalOpen(false);


return (
    <div id="Navbar">
    <div id="INFJ">
    <div className= "menu-icon" onClick={clickHandler}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
    </div>
    <Link to="/home">
      THE INFJ-Antilock
    {/* <img src={'public/rainybg.jpg'} alt="Logo" className="navbar-logo" /> */}
    </Link>
    
    </div>
    
    <Modal isOpen={modalOpen} onClose={closeModal}>
        <ul>
          <li>
            <SubNavLinks text="Hero" to="/home" />
          </li>
          <li>
            <SubNavLinks text="Home" to="/heropage" />
          </li>
          <li>
            <SubNavLinks text="You" to="/you" />
          </li>
          <li>
            <SubNavLinks text="Mind" to="/mind" />
          </li>
          <li>
            <SubNavLinks text="Us" to="/us" />
          </li>
        </ul>
      </Modal>
    </div>
  );
};

export default Navbar;
