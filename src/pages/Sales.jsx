import { useEffect, useState } from "react"
import ListVent from "../components/ListVent"
import { Render } from "../components/Render"


const Sales = () => {

    const [productos, setProducts] = useState([])

    const list = (newProducts) => {
        setProducts(newProducts)
    }


    return (
        <>
            <ListVent newList={list} />
            {productos.map(producto => {
                return <Render selectProduct={producto} />
            })}

            {/* {JSON.stringify(productos)} */}
            {/* <h1>{productos.name}</h1> */}
        </>
    )
}

export default Sales