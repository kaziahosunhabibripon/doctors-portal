import React from 'react';
import Doctors from '../../../images/doctor.png';
import './MakeAppointment.css';
const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={Doctors} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className="text-color"> APPOINTMENT</h5>
                        <h1 className="my-4"> Make an Appointment Today</h1>
                        <p> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam at facere expedita quas distinctio quo obcaecati iusto, doloribus necessitatibus animi.
                        </p>
                        <button className="btn btn-primary">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;