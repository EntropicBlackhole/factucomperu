<<<<<<< HEAD
import { useState } from "react"
import AppointmentsForm from "../components/ModuloProducto/productoForm"
import AppointmentsList from "../components/ModuloProducto/productoList"
import Header from "../components/Header"
=======
import Header from '../components/Header'
>>>>>>> 6b479de1f6736a88f1a33a71334301427fcbb0a7

const Products = () => {
   const [appointments,setAppointments] = useState([])
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
<<<<<<< HEAD
        <>            
            <AppointmentsForm
            onSaveAppointment={handleSaveAppointment}
            appointment={appointmentSelected}/>

            <AppointmentsList
            appointments={appointments}
            onRemove={handleRemove}
            onEdit={handleEdit}/>
        </>
    )   
=======
        <>
            <Header />
            {/* Tu codigo aca abajo */}
        </>
    )
>>>>>>> 6b479de1f6736a88f1a33a71334301427fcbb0a7
}

export default Products