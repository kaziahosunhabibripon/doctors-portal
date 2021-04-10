import React from 'react';
import Chair from '../../../images/Chair.png';
import './HeaderMain.css';
const HeaderMain = () => {
    return (
        <main  className="row d-flex align-items-center m-0 p-0">
            <div className="col-md-4 offset-md-1 my-1">
                <h1 >Your New Smile <br/> Starts Here</h1>
                <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et necessitatibus cum reprehenderit a alias laborum, perferendis accusantium quod tempore placeat! 
                </p>
                <button className="btn btn-primary btn-color">
                    GET APPOINTMENT
                </button>
            </div>
            <div className="col-md-6 p-2">
                <img src={Chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;