import Header from "../components/Header";
// import ventaData from "../ventas.json";
import Table from "../components/Table";
import { useState, useEffect } from "react";
const Sales = () => {
	const [data, setData] = useState([])
	const [globalData, setGlobalData] = useState([])

	const [compName, setCompName] = useState("");
	const [compLogo, setCompLogo] = useState("");
	const [compSlogan, setCompSlogan] = useState("");
	
	useEffect(() => {
		fetch(`http://localhost:3000/sales/${window.sessionStorage.getItem("comp_id")}`, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: `${window.sessionStorage.getItem("token")}`,
				// 'Access-Control-Allow-Credentials': 'true',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					setData(convertData(data.sales, "ventas"));
					setGlobalData(convertData(data.sales, "ventas"));

					setCompName(data.comp.name);
					setCompLogo(data.comp.logo);
					setCompSlogan(data.comp.slogan);
				}
				// else console.log(data.message);
			});
	}, []);

	function searchVentas(event) {
		event.preventDefault();
		let date =
			event.target[0].value == ""
				? event.target[0].value
				: `${event.target[0].value.split("-")[1]}/${
				event.target[0].value.split("-")[2]
				}/${event.target[0].value.split("-")[0]}`;
		// console.log(`"${date}"`);
		let client = event.target[1].value;
		let cashier = event.target[2].value;
		let note = event.target[3].value;
		let serie = event.target[4].value;
		// console.log(ventaData)
		let ventas = convertData(globalData, "itemList");
		// console.log(ventas)
		// console.log(ventas)
		// let newData = filterData(ventas, { date, client, cashier, note, serie });
		// console.log(newData)
		setData(filterData(ventas, { date, client, cashier, note, serie }));
	}

	function convertData(data, type) {
		let arrayedData = [];
		for (let info in data) {
			if (type == "ventas") {
				let newObject = { serie: info };

				let date = new Date(data[info].date);

				newObject.date = `${date.getMonth() < 10 ? "0" : ""}${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
				newObject.client = data[info].client;
				newObject.note = data[info].note;
				let totalSale = 0;
				for (let product in data[info].products) {
					totalSale +=
						data[info].products[product].amt *
							data[info].products[product].unit_price -
						data[info].products[product].discount;
				}
				newObject.totalSale = totalSale;
				arrayedData.push(newObject);
			} else if (type == "itemList") {
				let newObject = { serie: info };

				let date = new Date(data[info].date);

				newObject.date = `${
					date.getMonth() < 10 ? "0" : ""
				}${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
				newObject.client = data[info].client;
				newObject.cashier = data[info].cashier;
				newObject.note = data[info].note;
				let totalSale = 0;
				for (let product in data[info].products) {
					totalSale +=
						data[info].products[product].amt *
							data[info].products[product].unit_price -
						data[info].products[product].discount;
				}
				newObject.totalSale = totalSale.toString();
				arrayedData.push(newObject);
			}
		}
		return arrayedData;
	}

	function filterData(data, inputs) {
		// console.log(data)
		// console.log(inputs)
		const { date, client, cashier, note, serie } = inputs;
		let returnArray = [];
		for (let piece of data) {
			console.log(returnArray);
			if (Object.values(piece).includes(date)) returnArray.push(piece);
			else if (Object.values(piece).includes(client)) returnArray.push(piece);
			else if (Object.values(piece).includes(cashier)) returnArray.push(piece);
			else if (Object.values(piece).includes(note)) returnArray.push(piece);
			else if (Object.values(piece).includes(serie)) returnArray.push(piece);
		}
		return returnArray;

		
		for (let piece of data) {
			let unjoinedStatements = [];
			// console.log("piece = ", piece);
			for (let key in piece) {
				if (inputs[key] == undefined) inputs[key] = "";
				unjoinedStatements.push(`piece.${key}.includes(inputs.${key})`);
				// console.log(`"${inputs[key]}"`, key);
			}
			// console.log(unjoinedStatements);
			eval(`if (${unjoinedStatements.join(" && ")}) returnArray.push(piece);`);
		}
		// console.log(returnArray)
		return returnArray;
	}
	return (
		<>
			<Header name={compName} logo={compLogo} slogan={compSlogan} />
			<div>
				<form className="search-form" onSubmit={searchVentas}>
					<input
						type="date"
						className="search-input"
						name="date"
						placeholder="dd/mm/yyyy"
						format="dd/mm/yyyy"></input>
					<input
						type="text"
						className="search-input"
						name="client"
						placeholder="Cliente"></input>
					<input
						type="text"
						className="search-input"
						name="cashier"
						placeholder="Cajero"></input>
					{/* <input type="text" name="products" placeholder="Productos"></input> */}
					<input
						type="text"
						className="search-input"
						name="note"
						placeholder="Nota"></input>
					<input
						type="text"
						className="search-input"
						name="id"
						placeholder="Serie"></input>
					<input type="submit" className="search-submit" value="Buscar"></input>
				</form>
			</div>
			<div className="separator"></div>
			<Table data={data} type="ventas" className="sales-table" />
		</>
	);
};

export default Sales;
