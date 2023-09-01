const AppointmentsList = ({ appointments, onRemove, onEdit }) => {
    if (appointments.length === 0) {
        return (
            <section>
                <h4>Lista de Productos</h4>
                <div>No hay productos</div>
            </section>
        )
    }
    return (
        <section>
            <h4>Lista de Productos</h4>
            <div>
                {appointments.map(appointment => {
                    return (
                        <div key={appointment.id}>
                            <div>
                                <div>
                                    <strong>Codigo:</strong>{appointment.cod}
                                </div>
                                <div>
                                    <strong>Clase:</strong>{appointment.class}
                                </div>
                                <div>
                                    <strong>Descripción:</strong>{appointment.description}
                                </div>
                                <div>
                                    <strong>Marca:</strong>{appointment.brand}
                                </div>
                                <div>
                                    <strong>Modelo:</strong>{appointment.model}
                                </div>
                                <div>
                                    <strong>Stock:</strong>{appointment.stock}
                                </div>
                                <div>
                                    <strong>Precio venta:</strong>{appointment.sellprice}
                                </div>
                                <div>
                                    <strong>Precio compra:</strong>{appointment.purchprice}
                                </div>                                
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>    
    )
}

export default AppointmentsList 