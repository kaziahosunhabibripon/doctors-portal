import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';
import './AppointmetsbyDate.css';

const AppointmentsbyDate = ({appointments}) => {
   
    return (
        <div>
            <h2 className="text-color">Appointments : {appointments.length}</h2>
            {
                appointments.length ? <AppointmentShortList appointments={appointments}></AppointmentShortList> 
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments</h4>
                </div>
                
            }
        </div>
    );
};

export default AppointmentsbyDate;