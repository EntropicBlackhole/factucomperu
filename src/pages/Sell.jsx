import Header from '../components/Header'
import { useEffect, useState } from "react"
import ListVent from "../components/ListVent"
import { Render } from "../components/Render"

const Sell = () => {

    const [productos, setProducts] = useState([])

    const list = (newProducts) => {
        setProducts(newProducts)
    }


    return (
			<>
				<Header />
				<div className="sell-wrapper">
					<ListVent newList={list} />
					{productos.map((producto) => {
						return <Render selectProduct={producto} />;
					})}
				</div>

				{/* {JSON.stringify(productos)} */}
				{/* <h1>{productos.name}</h1> */}
			</>
		);
}

export default Sell
