import { useEffect, useState } from "react"
import ListVent from "../components/ListVent"
import { Render } from "../components/Render"


const Sales = () => {

    const [productos, setProducts] = useState([])

    const list = (newProducts) => {
        console.log(newProducts)
    }
    const plop = (event) => {


    }


    return (
        <>
            <ListVent newList={list} />
            {/* <button onClick={plop}>
                Buscar
            </button> */}
            <Render />

            {/* <h1>{productos.name}</h1> */}
        </>
    )
}

export default Sales