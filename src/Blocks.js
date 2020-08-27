import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

var events = ['Actions', 'Shipment Created', 'Picked Up', 'Departed ',
    'Delivered', 'POD (ERP Sysytem)'];

function generateHash(str) {
    var hash = 0;
    if (str.length == 0) {
        return hash;
    }
    for (let i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        hash = ((hash << 7) - hash) + charCode;
        hash = hash & hash;
    }
    return hash;
}

function BlockList(props) {
    return (<div className="col-md-3" id="child-block">
        <div className="bg m10 p10">
            <form className="needs-validation" novalidate>
                <div className="form-group">
                    <label for="block">Block:</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">#</div>
                        </div>
                        <input type="text" className="form-control blockId" id="blockId" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="data">Data:</label>
                    <div id="data">
                        ShipmentID : Test Shipment1 CustomerID : Test Customer1
                            Status : {events[props.index]} ShipmentNo : 4656656
                            Latitude : 27.664827 Longitude : -81.515755
                            Ship From : AC_DC01 Ship To: AC_CW03 Location : Test Location1
                            Date : {Date.now()} Changed By : Test Person1 System : Test System1
                </div>
                </div>
                <div className="form-group">
                    <label>Prev:</label>
                    <input type="text" className="form-control" id="prevHash" placeholder="0000000000" name="name" />
                </div>
                <div className="form-group">
                    <label>Hash:</label>
                    <input type="text" className="form-control" id="hash" placeholder={props.hash} name="name" />
                </div>
                <div className="form-group">
                    <label>Status:</label>
                    <input type="text" className="form-control" id="status" name="status" value="Approved" />
                </div>
            </form>
        </div>
    </div>)
}

function Blocks() {
    return (
        <div className="App">
            <div className="container-fluid pad">
                <div id="myBlock" className="row parent-block">
                    {[1, 2, 3, 4, 5].map(a => <BlockList index={a} hash={generateHash(events[a])} />)}
                </div>
            </div>
        </div>
    )
}
export default Blocks;
