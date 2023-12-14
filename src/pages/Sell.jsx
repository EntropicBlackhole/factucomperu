import Header from "../components/Header";
import Table from "../components/Table";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useEffect, useState } from "react";

const Sell = () => {
	const [client, setClient] = useState("");
	const [date, setDate] = useState("");
	const [cashier, setCashier] = useState("");
	const [products, setProducts] = useState([]);
	const [shownProducts, setShownProducts] = useState([]);
	const [note, setNote] = useState("");

	useEffect(() => {
		fetch("http://localhost:3000/sell", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: `${window.sessionStorage.getItem("token")}`,
				// 'Access-Control-Allow-Credentials': 'true',
			},
			body: JSON.stringify({
				comp_id: window.sessionStorage.getItem("comp_id"),
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					setProducts(reorganizeProductObject(data.products));
				} else {
					console.log(data.message);
				}
			});
	}, []);

	const handleOnSelect = (item) => {
		item.amount = 1;
		item.discount = 0;
		item.total = item.price * item.amount - item.discount;
		setShownProducts([...shownProducts, item]);
	};

	const formatResult = (item) => {
		return (
			<>
				<span style={{ fontSize: "1rem", display: "block", textAlign: "left" }}>
					{item.name} - {item.brand}
				</span>
				<span
					style={{
						fontSize: "0.8rem",
						display: "block",
						textAlign: "left",
					}}>
					{item.model} - {item.stock} - S/{item.price}
				</span>
			</>
		);
	};

	function reorganizeProductObject(products) {
		let returnArray = [];
		for (let product of products) {
			returnArray.push({
				id: product.id,
				name: product.name,
				brand: product.brand,
				model: product.model,
				price: product.sell_price,
				stock: product.stock,
			});
		}
		return returnArray;
	}

	return (
		<div className="sell-wrapper">
			<Header />
			<div className="sell-wrapper-2">
				<div className="sell-left">
					<h2 className="sell-left-title">Informacion</h2>
					<input
						className="sell-left-info"
						type="text"
						placeholder="ID de venta"
						value={"V001-1"}
						readOnly
					/>
					<input
						className="sell-left-info"
						type="text"
						placeholder="Fecha"
						value={"10/12/23"}
						readOnly
					/>
					<input
						className="sell-left-info"
						type="text"
						placeholder="DNI"
						value={"00000000"}
						readOnly
					/>
					<input
						className="sell-left-info"
						type="text"
						placeholder="Cajer@"
						value={"Christopher"}
						readOnly
					/>
					<input
						className="sell-left-info"
						type="text"
						placeholder="Nota adicional"
					/>
					<button className="sell-button" onClick={updateProducts}>
						Vender
					</button>
				</div>
				<div className="sell-right">
					<div className="sell-search-wrapper">
						<form className="sell-search-id-form">
							<input
								className="sell-search-id-input"
								type="text"
								placeholder="ID del producto"></input>
							<input
								className="sell-search-submit"
								type="submit"
								value="Buscar"></input>
						</form>
						<ReactSearchAutocomplete
							className="autocomplete-search"
							items={products}
							onSelect={handleOnSelect}
							autoFocus
							formatResult={formatResult}
						/>
					</div>
					<Table
						data={shownProducts}
						type="vender"
						handleChange={handleOnChange}
						className="sell-table"
					/>
				</div>
			</div>
		</div>
	);

	function handleOnChange(e) {
		if (e.target.name.split("|")[0] == "amount") {
			for (let i = 0; i < shownProducts.length; i++) {
				if (shownProducts[i].id == e.target.name.split("|")[1]) {
					shownProducts[i].amount = e.target.value;
					shownProducts[i].total = Math.round(
						shownProducts[i].price * shownProducts[i].amount -
							shownProducts[i].discount,
						2
					);
				}
			}
		} else if (e.target.name.split("|")[0] == "discount") {
			for (let i = 0; i < shownProducts.length; i++) {
				if (shownProducts[i].id == e.target.name.split("|")[1]) {
					shownProducts[i].discount = e.target.value;
					shownProducts[i].total =
						shownProducts[i].price * shownProducts[i].amount -
						shownProducts[i].discount;
				}
			}
		}
		setShownProducts(shownProducts);
		updateProducts();
	}

	function updateProducts() {
		/*
		Grab all the table fields
		Sort them
		Place them in products via setProducts
		*/
		const tableFields = document.querySelectorAll(".table-data");
		const sortedFields = Array.from(tableFields);
		console.log(tableFields);
		for (let i = 0; i < sortedFields.length; i++) {
			if (i == 3 || i == 4) {
				sortedFields[i] = sortedFields[i].children[0].value;
			} else {
				sortedFields[i] = sortedFields[i].textContent;
			}
		}
		let matrixFields = arrayToMatrix(sortedFields, 7);
		let tempArray = [];
		for (let vector in matrixFields) {
			tempArray.push({
				name: matrixFields[vector][0],
				brand: matrixFields[vector][1],
				price: matrixFields[vector][2],
				amount: matrixFields[vector][3],
				discount: matrixFields[vector][4],
				total:
					matrixFields[vector][2] * matrixFields[vector][3] -
					matrixFields[vector][4],
			});
		}
		setShownProducts(tempArray);
	}

	function arrayToMatrix(array, k) {
		// Calculate the number of arrays (n) in the matrix
		const n = Math.floor(array.length / k);
		// Create an empty matrix to store the results
		const matrix = [];
		// Loop through the array and create sub-arrays of k elements
		for (let i = 0; i < n; i++) {
			matrix.push(array.slice(i * k, (i + 1) * k));
		}
		// Return the resulting matrix
		return matrix;
	}
};

export default Sell;
