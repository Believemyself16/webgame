import React, {useState}  from 'react';
import Logo from "../assets/R.png";
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';
import { Button } from '@mui/material';

function Navbar() {
  const[openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? 'open' : 'close'}> 
        {/* nếu giá trị openLinks true thì open, ko thì close */}
            <img src={Logo} alt='' />
            {/* logo ở bên trái */}
            <div className='hiddenLinks'>
              <Link to ="/"> Home </Link>
              <Link to ="/preview"> Preview </Link>
              <Link to ="/about"> About </Link>
              <Link to ="/contact"> Contact </Link>
            </div>
        </div>
            
        <div className="rightSide">
          <Link to ="/"> Home </Link>
          <Link to ="/preview"> Preview </Link>
          <Link to ="/about"> About </Link>
          <Link to ="/contact"> Contact </Link>
          <Button onClick={toggleNavbar}>
            <ReorderIcon />
          </Button>
        </div> 
    </div>
  );
}

export default Navbar;