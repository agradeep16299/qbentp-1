import React, { useState, useEffect, useRef } from "react";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { TreeTable } from "primereact/treetable";

import { ProductService } from "../../../services/ProductService";

const MasterProducts = (props) => {
	const toastTL = useRef(null);
	const toastBC = useRef(null);
	const [products, setProducts] = useState(null);
	const [duplicateProducts, setDuplicateProducts] = useState(null);
	const productService = new ProductService();

	useEffect(() => {
		let payload = {
			searchRequest: [],
			pageNo: 1,
			pageSize: 200,
			sorts: [],
		};
		getProducts(payload);
	}, []);
	const getIndex = (arr, value) => {
		return arr.findIndex((item) => item.id === value);
	};
	const getProducts = (payload) => {
		Promise.all([
			productService.getAllPreviousProducts(),
			productService.getSuperProducts(payload),
		])
			.then((res) => {
				let master = res[0];
				let response = res[1];

				let filteredProducts = [];
				response.data.forEach((item, index) => {
					let i = getIndex(master, item.id);
					if (i > -1) {
						let tempsub = [];
						item.subProducts.forEach((elm) => {
							let j = getIndex(master, elm.id);
							if (j === -1) {
								tempsub.push(elm);
							}
						});
						if (tempsub.length > 0) {
							delete item.subProducts;
							filteredProducts.push({
								...item,
								subProducts: tempsub,
							});
						}
					} else {
						filteredProducts.push(item);
					}
				});

				let products = [],
					finalProducts = [];
				filteredProducts.forEach((elm) => {
					let subProducts = elm.subProducts;
					delete elm.subProducts;
					finalProducts.push(elm);
					let tempParent = { key: elm.id, data: { ...elm } };
					if (subProducts.length > 0) {
						let child = [];
						subProducts.forEach((item) => {
							delete item.subProducts;
							finalProducts.push(item);
							child.push({ key: item.id, data: { ...item } });
						});
						products.push({ ...tempParent, children: child });
					} else {
						products.push(tempParent);
					}
				});

				setProducts(products);
				setDuplicateProducts(finalProducts);
			})
			.catch((e) => {
				toastTL.current.show({
					severity: "error",
					summary: e.name,
					detail: e.message,
					style: { color: "#000000" },
					life: 3000,
				});
			});
	};

	// Table template
	const statusTemplate = (item) => {
		return item.data.active ? (
			<span className="status status-success">Active</span>
		) : (
			<span className="status status-danger">Inactive</span>
		);
	};

	const onSelectedProducts = (value) => {
		console.log(value);
		let keyId = [],
			insertedProducts = [],
			parentIds = [];
		Object.keys(value).forEach((item) => {
			if (value[item].checked) {
				keyId.push(item);
			}
		});

		if (keyId.length > 0) {
			keyId.forEach((item) => {
				let index = duplicateProducts.findIndex(
					(elm) => elm.id.toString() === item
				);
				if (index > -1) {
					insertedProducts.push({
						id: duplicateProducts[index].id,
						title: duplicateProducts[index].title,
						code: duplicateProducts[index].code,
						lineOfBusiness: duplicateProducts[index].lineOfBusiness,
						parentId: duplicateProducts[index].parentId,
						active: duplicateProducts[index].active,
					});
				}
			});
		}
		insertedProducts.forEach((item) => {
			if (item.parent !== null) {
				if (!parentIds.includes(item.parentId)) {
					parentIds.push(item.parentId);
				}
			}
		});

		parentIds.forEach((item) => {
			if (!insertedProducts.some((elm) => elm.id === item)) {
				let index = duplicateProducts.findIndex(
					(elm) => elm.id === item
				);
				if (index > -1) {
					insertedProducts.push({
						id: duplicateProducts[index].id,
						title: duplicateProducts[index].title,
						code: duplicateProducts[index].code,
						lineOfBusiness: duplicateProducts[index].lineOfBusiness,
						parentId: duplicateProducts[index].parentId,
						active: duplicateProducts[index].active,
					});
				}
			}
		});
		props.handelImportProduct(insertedProducts, value);
	};

	return (
		<div className="grid">
			<Toast ref={toastTL} position="top-left" />
			<Toast ref={toastBC} position="bottom-center" />
			<div className="col-12">
				<TreeTable
					value={products}
					selectionMode="checkbox"
					selectionKeys={props.selectedProducts}
					onSelectionChange={(e) => onSelectedProducts(e.value)}
				>
					<Column
						field="lineOfBusiness"
						header="Line Of Business"
						expander
					></Column>
					<Column field="title" header="Product Name"></Column>
					<Column header="Status" body={statusTemplate}></Column>
				</TreeTable>
			</div>
		</div>
	);
};

export default MasterProducts;
