import { useState } from 'react'

const appointmentList = (onSaveAppointment) => {
    const {form, setForm} = useState({
        cod: '',
        class:'',
        description:'',
        brand:'',
        model:'',
        stock:'',
        sellprice:'',
        purchprice:''    
    })

    const handleChange = (event) => {
        //const name = event.target.name
        //const value = event.target.value
        const [name, value] = event.target
        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <>
            <main><Header/></main>            
            <section className='BuscarProducto'>
                <form action="">
                    <h3>Buscar Productos</h3>
                    <p>Codigo: 
                        <input type="number" name='cod' placeholder='Codigo almacén' onChange={handleChange} />
                    </p>
                    <p>Clase: 
                        <input type="text" name='class' placeholder='Clase' onChange={handleChange} />
                    </p>
                    <p>Descripción: 
                        <input type="text" name='description' placeholder='Descripción o nombre del producto' onChange={handleChange} />
                    </p>
                    <p>Marca: 
                        <input type="text" name='brand' placeholder="Marca del producto" onChange={handleChange} />
                    </p>
                    <p>Modelo: 
                        <input type="text" name='model' placeholder="Modelo del producto" onChange={handleChange} />
                    </p>
                    <p>Stock: 
                        <input type="number" name='stock' min="0" max="99999" placeholder="Stock" onChange={handleChange} />
                    </p>
                    <p>Precio Venta: 
                        <input type="number" name='sellprice' step="0.01" min="0.01" max="99999.99"  placeholder="Precio al público" onChange={handleChange} />
                    </p>
                    <p>Precio Compra: 
                        <input type="number" name='purchprice' step="0.01" min="0.01" max="99999.99" placeholder='Precio compra' onChange={handleChange} />
                    </p>
                    <button>Guardar</button>
                    <button>+Nuevo</button>
                </form>
                {JSON.stringify(form)}
            </section>
        </>
    )
}