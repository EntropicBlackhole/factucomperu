import React, { useEffect } from 'react'
import { useState } from 'react'
export const Render = ({ selectProduct }) => {
    const [total, setTotal] = useState()
    const [list, setList] = useState([])


    const cant = (event) => {
        const cantidad = event.target.value
        // console.log(cantidad)
        const total = selectProduct.sell_price * cantidad
        // console.log(total)
        setTotal(total)

    }
    if (selectProduct.total == 0) {
        selectProduct.total = total
    }
    else {
        selectProduct.total = 0
    }

    const desc = (event) => {
        const descuento = event.target.value
        console.log(descuento)
        const newTotal = total - 1
        setTotal(newTotal)
    }

    const createList = (event) => {
        setList([...list, selectProduct])

    }

    return (
        <>
            <div>
                <button onClick={createList} >
                    agregar
                </button>
            </div>
            <section className='listaVenta' >
                <div className="listaVenta--titulos">
                    <div>
                        <h3>Nombre/Modelo</h3>

                    </div>
                    <div>
                        <h3>Precio de venta</h3>

                    </div>

                    <div>
                        <h3>Cantidad</h3>
                    </div>

                    <div>
                        <h3>Descuento</h3>
                    </div>

                    <div>
                        <h3>Total</h3>

                    </div>
                </div>
                {list.map(produto => {
                    return (
                        <div className='listaVentas--productos'>
                            <div className='nombre'>
                                <h3>{produto.name}</h3>

                            </div>
                            <div className='precio'>
                                <h3>{produto.sell_price}</h3>

                            </div>

                            <div className='cantidad'>
                                <input type="number" placeholder="Ingresa la cantidad" onChange={cant} className='cantidad--input' />
                            </div>

                            <div className='descuento'>
                                <input type="number" placeholder='Ingresa el descuento' onChange={desc} className='cantidad--input' />
                            </div>

                            <div className='total'>
                                <h3>{produto.total}</h3>

                            </div>
                        </div>

                    )
                })}





            </section>

        </>
    )
}
export default Render