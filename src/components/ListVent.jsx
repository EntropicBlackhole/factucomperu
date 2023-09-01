import React, { useEffect } from 'react'
import { useState } from 'react'
const ListVent = ({ newList }) => {

    const [selectOp, setOption] = useState()

    const Productos = [
        {
            "id": "1",
            "name": "pernos",
            "brand": "plop",
            "model": "103",
            "bought_price": "10",
            "sell_price": "20",
            "amt": "0",
            "total": "0"
        },
        {
            "id": "2",
            "name": "clavos",
            "brand": "pepitos",
            "model": "104",
            "bought_price": "15",
            "sell_price": "18",
            "amt": "0",
            "total": "0"
        },
        {
            "id": "3",
            "name": "alfiler",
            "brand": "panam",
            "model": "105",
            "bought_price": "5",
            "sell_price": "10",
            "amt": "0",
            "total": "0"
        }

    ]

    const search = (event) => {
        const name = event.target.value
        // console.log(name)
        const newProduct = Productos.filter(producto => {
            if (producto.name == name) {
                return producto
            }
        })
        if (newProduct.length == 1) {
            const sendProduct = newProduct
            newList(sendProduct)
        }
        // console.log("search")
    }
    const options = (event) => {
        const option = event.target.value
        setOption(option)
    }


    return (
        <>
            <div>
                <label htmlFor="">Buscar</label>
                <input type="text" onChange={search} />
                <select name="" id="" onChange={options}>
                    <option value="">--Guia de inventario--</option>
                    {Productos.map(producto => {
                        return (
                            <>
                                <option value={producto.name} >{producto.name}</option>
                            </>
                        )
                    })}
                </select>
            </div>
        </>
    )
}

export default ListVent