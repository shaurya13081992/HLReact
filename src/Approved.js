import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Approved() {
  return (
    <div className="App">
        <ul className="liststyle">		
            <Link to="/blocks"><li>Test Shipment1</li></Link>
        </ul>   
    </div>
  );
}

export default Approved;
