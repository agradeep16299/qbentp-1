import React from "react";
import { FiCheck } from "react-icons/fi";

const Product = (props) => {
	return (
		<div className="grid">
			{props.agent.products.map((item, index) => (
				<div className="col-12 lg:col-6" key={`products-${index}`}>
					<div className="text-key-val-grid">
						<p className="m-0 lable font-bold">{item.title}</p>
					</div>
					{item.subProducts.map((elm, index) => (
						<div
							className="text-key-val-grid"
							key={`sub-product-${index}`}
						>
							<p className="m-0 lable">{elm.title}</p>
							<p className="m-0 value">
								<span className="sq-status status-success">
									<FiCheck />
								</span>
							</p>
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default Product;
