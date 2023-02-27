import React from "react";

const Paginator = (props) => {
	return (
		<div className="w-full mt-3 paginator flex justify-content-end align-items-center">
			<div className="mr-3">
				Rows per page:{" "}
				<select onChange={props.pagesizechange} value={props.pageSize}>
					<option value="10">10</option>
					<option value="20">20</option>
					<option value="25">25</option>
				</select>
			</div>
			<div>
				<button
					className="mr-2 pagination-btn"
					disabled={props.firstPage}
					onClick={props.decrement}
				>
					<span className="pi pi-angle-left"></span>
				</button>
				<span>
					{props.pageNo}/{props.totalPages}
				</span>
				<button
					className="ml-2 pagination-btn"
					disabled={props.lastPage}
					onClick={props.increment}
				>
					<span className="pi pi-angle-right"></span>
				</button>
			</div>
		</div>
	);
};

export default Paginator;
