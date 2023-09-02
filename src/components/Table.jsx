import ButtonIcon from '../components/ButtonIcon'
// import { useState } from 'react';


function Table(data) {

	let tableData = data.data;
	// console.log(tableData)
	data.type == "ventas"
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
									<ButtonIcon icon="./src/assets/icons/print.svg" />
									{/* This will open a new window with the pdf thing */}
									<ButtonIcon icon="./src/assets/icons/trash.svg" />
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