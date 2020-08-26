import React from 'react';
import './App.css';

function Blocks() {
  return (
    <div className="App">		
        <div className="container-fluid pad">             
            <div id="myBlock" className="row parent-block">
                <div className="col-md-3" id="child-block">
                    <form className="needs-validation" novalidate>
                        <div className="form-group">
                            <label for="block">Block:</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">#</div>
                                </div>
                                <input type="text" className="form-control blockId" id="blockId"/>
                            </div>
                        </div>                        
                        <div className="form-group">
                            <label for="data">Data:</label>
                            <div id="data"></div>
                        </div>
                        <div className="form-group">
                            <label>Prev:</label>
                            <input type="text" className="form-control" id="prevHash" placeholder="0000000000" name="name"/>
                        </div>
                        <div className="form-group">
                            <label>Hash:</label>
                            <input type="text" className="form-control" id="hash" placeholder="be35" name="name"/>
                        </div>
                        <div className="form-group">
                            <label>Status:</label>
                            <input type="text" className="form-control" id="status" name="status" value="Approved"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Blocks;
