import React, { useEffect } from 'react'
import { useState } from 'react'
const ListVent = ({ newList }) => {

    const [nombre, setNombre] = useState()
    const [product, setProducts] = useState()

    const Productos = [
        {
            "id": "1",
            "name": "pernos",
            "brand": "plop",
            "model": "103",
            "bought_price": "10",
            "sell_price": "20",
            "amt": "0"
        },
        {
            "id": "2",
            "name": "clavos",
            "brand": "pepitos",
            "model": "104",
            "bought_price": "15",
            "sell_price": "18",
            "amt": "0"
        },
        {
            "id": "3",
            "name": "alfiler",
            "brand": "panam",
            "model": "105",
            "bought_price": "5",
            "sell_price": "10",
            "amt": "0"
        }

    ]

    const search = (event) => {
        const name = event.target.value
        setNombre(name)
    }
    const newProduct = Productos.filter(producto => {
        if (producto.name == nombre) {
            return producto
        }
    })
    if (newProduct.length == 1) {
        const sendProduct = newProduct[0]
        newList(sendProduct)
    }

    return (
        <>
            <div>
                <label htmlFor="">Buscar</label>
                <input type="text" onChange={search} />
            </div>
        </>
    )
}

export default ListVent