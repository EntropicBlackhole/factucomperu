import React, { useEffect } from 'react'
import { useState } from 'react'
export const Render = ({ selectProduct }) => {
    const [producto, setProduct] = useState()

    // useEffect(() => {
    //     setProduct(selectProduct)
    // }, [])

    // console.log(selectProduct)

    return (
        <>
            <section className="listaVenta">
                <div>
                    <h3>Nombre/Modelo</h3>
                    <span>{selectProduct.name}</span>
                </div>
                <div>
                    <h3>Precio de venta</h3>
                    <span>{selectProduct.sell_price}</span>
                </div>

                <div>
                    <h3>Cantidad</h3>
                    <input type="number" placeholder="1" />
                </div>

                <div>
                    <h3>Descuento</h3>
                    <input type="number" />
                </div>

                <div>
                    <h3>Total</h3>

                </div>


            </section>

        </>
    )
}
export default Render