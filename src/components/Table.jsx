import ButtonIcon from '../components/ButtonIcon'

function Table(data) {
	let tableData = convertData(data.data, data.type);
	if (data.type == "ventas") {
		return (
			<table className="table">
				<thead className="table-head">
					<tr className="table-row">
						<th className="table-header">Serie</th>
						<th className="table-header">Cliente</th>
						<th className="table-header">Date</th>
						<th className="table-header">Monto</th>
						<th className="table-header">Opciones</th>
					</tr>
				</thead>
				<tbody className="table-body">
					{tableData.map((item) => {
						return (
							<tr key={item.serie} className="table-row">
								<td className="table-data">{item.serie}</td>
								<td className="table-data">{item.client}</td>
								<td className="table-data">{item.date}</td>
								<td className="table-data">{item.totalSale}</td>
								<td className="table-data">
									<ButtonIcon icon="./src/assets/icons/print.svg" />{" "}
									{/* This will open a new window with the pdf thing */}
									<ButtonIcon icon="./src/assets/icons/trash.svg" />{" "}
									{/* This will delete the thing but first asking for confirmation*/}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}

export default Table;

//Search will have:
//Date
//Client
//Cashier
//Products
//Note
//ID

// These will work as inputs and the serach button as a submit

//Serie
//Date
//Cliente
//Monto
//Botones

function convertData(data, type) {
	let arrayedData = [];
	for (let info in data) {
		if (type == "ventas") {
			let newObject = { serie: info };

			let date = new Date(data[info].date);

			newObject.date = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
			newObject.client = data[info].client;

			let totalSale = 0;
			for (let product in data[info].products) {
				totalSale +=
					data[info].products[product].amt *
						data[info].products[product].unit_price -
					data[info].products[product].discount;
			}
			newObject.totalSale = totalSale;
			arrayedData.push(newObject);
		}
	}
	return arrayedData;
}
