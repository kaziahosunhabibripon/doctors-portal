import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import AppointmentsbyDate from '../AppointmentsbyDate/AppointmentsbyDate';
import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';

const DashBord = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());   
    const[appointments, setAppointments] = useState([]);
    const handleDateChange= date=>{
        setSelectedDate(date);
    }
    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate',{
            method:'POST',
            headers: { 'content-type' : 'application/json'},
            body: JSON.stringify({date: selectedDate})
        })
        .then(res=>res.json())
        .then(data=>setAppointments(data))
    }, [selectedDate])
    return (
        <section>
            <div className="container-fluid row container-style">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentsbyDate appointments={appointments}></AppointmentsbyDate>
                </div>
            </div>
        </section>
    );
};

export default DashBord;