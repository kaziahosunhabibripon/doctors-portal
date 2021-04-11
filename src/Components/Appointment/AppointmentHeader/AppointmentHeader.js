import React from 'react';
import Chair from '../../../images/Chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
   
    return (
        <main className="row d-flex align-items-center m-0 p-0">
            <div className="col-md-4 offset-md-1 my-1">
                <h1 > APPOINTMENT</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6 p-2">
                <img src={Chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppointmentHeader;