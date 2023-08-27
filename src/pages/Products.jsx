// import { Link } from 'react-router-dom'
import Header from '../components/Header'
import AppointmentsForm from "../components/appointments/appointmentsList"
import AppointmentsList from "../components/appointments/appointmentsForm"
import { useState } from 'react'

const Products = () => {
    const [appointment,setAppointments] = useState([])

    const handleSaveAppointment = () => { }

    return (
        <>
          <appointmentsForm
            onSaveAppointment="handleSaveAppointment"
            appointment={appointmentSelected}
          />
    
          {/* <AppointmentsList
            appointments={appointments}
            onRemove={handleRemove}
            onEdit={handleEdit}
          /> */}
        </>
    )
            
        
    
}

export default Products