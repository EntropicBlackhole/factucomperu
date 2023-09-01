import Header from "../components/Header";
import Data from "../ventas.json";
import Table from "../components/Table";
const Sales = () => {
	return (
		<>
			<Header />
			<div>
				<form className="search-form">
					<input type="date" className="search-input" name="date"></input>
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
			<Table data={Data} type="ventas" className="sales-table" />
		</>
	);
};

export default Sales;
