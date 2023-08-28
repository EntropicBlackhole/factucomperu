// import { Link } from 'react-router-dom'
import Header from '../components/Header'
import appointmentsForm from "../components/appointments/AppointmentsForm"
// import appointmentsList from "../components/appointments/appointmentsList"
import { useState } from 'react'

const Products = () => {
    const [appointment,setAppointments] = useState([])
    const [appointmentSelected, setAppointmentSelected] = useState({})

    const handleSaveAppointment = () => { }

    return (
        <>
          <appointmentsForm
            onSaveAppointment="handleSaveAppointment"
            appointment={appointmentSelected}
          />
    
          {/* Aqui va la lista */}
        </>
    )
            
        
    
}

export default Products