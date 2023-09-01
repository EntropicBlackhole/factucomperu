import { useState } from "react"
import AppointmentsForm from "../components/ModuloProducto/productoForm"

const Products = () => {
   const [appointment,setAppointments] = useState([])
    const [appointmentSelected, setAppointmentSelected] = useState({})

    const handleSaveAppointment = (form) => {
        setAppointments([...appointments, form])
    }

    const handleRemove = (id) => {
        const newAppointments = appointments.filter(
          appointment => appointment.id !== id
        )
    
        setAppointments(newAppointments)
    }
    
    const handleEdit = (appointment) => {
        setAppointmentSelected(appointment)
    } 

    

    return (
        <>
            <AppointmentsForm/>
        </>
    )   
}

export default Products