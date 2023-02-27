import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Skeleton } from "primereact/skeleton";
import { Dialog } from "primereact/dialog";
import { useNavigate } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { ProductService } from "../../../services/ProductService";
import Paginator from "../../../components/Paginator";
import MasterProducts from "./MasterProducts";

const Products = (props) => {
	const toastTL = useRef(null);
	const toastBC = useRef(null);
	const navigate = useNavigate();
	const [products, setProducts] = useState(null);
	const [expandedRows, setExpandedRows] = useState(null);
	const [searchValue, setSearchValue] = useState("");
	const [columnName, setColumnName] = useState("title");
	const [operation, setoperation] = useState("LIKE");
	const [sortByColumn, setSortByColumn] = useState(null);
	const [sortType, setSortType] = useState(null);
	const [pageNo, setpageNo] = useState(1);
	const [pageSize, setpageSize] = useState(300);
	const [masterProductDialog, setmasterProductDialog] = useState(false);
	const [addedProducts, setInsertedProducts] = useState(null);
	const [selectedProducts, setselectedProducts] = useState(null);
	const productService = new ProductService();

	function getSortableColumn(name, columnName) {
		return (
			<span className="flex align-items-center">
				{name}
				<span className="flex flex-column text-xs ml-2">
					<span
						className={
							sortByColumn === columnName && sortType === "asc"
								? "sort-icon asc active"
								: "sort-icon asc"
						}
						onClick={() => tblSort(columnName, "asc")}
					></span>
					<span
						className={
							sortByColumn === columnName && sortType === "desc"
								? "sort-icon desc active"
								: "sort-icon desc"
						}
						onClick={() => tblSort(columnName, "desc")}
					></span>
				</span>
			</span>
		);
	}

	const lodarTblArray = Array.from({ length: 10 });
	const skeletonBody = () => {
		return <Skeleton height="1.5rem"></Skeleton>;
	};

	function tblSort(columnName, sortType) {
		setSortByColumn(columnName);
		setSortType(sortType);
	}

	useEffect(() => {
		let payload = {
			searchRequest: [],
			pageNo: pageNo,
			pageSize: pageSize,
			sorts: [],
		};
		if (searchValue !== "" && columnName && operation) {
			payload.searchRequest = [
				{
					column: "parentId",
					value: searchValue,
					operation: operation,
				},
				{
					column: columnName,
					value: searchValue,
					operation: operation,
				},
			];
		}
		if (sortByColumn && sortType) {
			payload.sorts = [sortByColumn + "," + sortType];
		}
		getProducts(payload);
	}, [
		columnName,
		searchValue,
		operation,
		sortByColumn,
		sortType,
		pageNo,
		pageSize,
	]);

	const getProducts = (payload) => {
		productService
			.getProducts(payload)
			.then((res) => {
				let products = res;
				setProducts(products);
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

	const increment = () => {
		setpageNo(pageNo + 1);
	};
	const decrement = () => {
		setpageNo(pageNo - 1);
	};
	const pagesizechange = (e) => {
		setpageSize(e.target.value);
	};

	const handelImportProduct = (items, value) => {
		setInsertedProducts(items);
		setselectedProducts(value);
	};

	const onEditClick = (item) => {
		let requestBody = {
			id: item.id,
			title: item.title,
			code: item.code,
			parentId: item.parentId,
			lineOfBusiness: item.lineOfBusiness,
			active: !item.active,
		};
		productService
			.updateProduct(requestBody)
			.then((res) => {
				if (res) {
					toastTL.current.show({
						severity: "success",
						summary: "Successfull",
						detail: "Product update successfull",
						style: { color: "#000000" },
						life: 3000,
					});
					let payload = {
						searchRequest: [],
						pageNo: pageNo,
						pageSize: pageSize,
						sorts: [],
					};
					getProducts(payload);
				}
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

	const showConfirm = () => {
		toastBC.current.show({
			severity: "warn",
			summary: "Warning Message",
			content: (
				<div className="flex flex-column" style={{ flex: "1" }}>
					<div className="text-center">
						<i
							className="pi pi-exclamation-triangle"
							style={{ fontSize: "3rem" }}
						></i>
						<h4>Are you sure?</h4>
						<p>Want to add this product to your country.</p>
					</div>
					<div className="grid p-fluid">
						<div className="col-6">
							<Button
								type="button"
								label="Yes"
								className="p-button-success"
								onClick={onConfirmYes}
							/>
						</div>
						<div className="col-6">
							<Button
								type="button"
								label="No"
								className="p-button-secondary"
								onClick={onConfirmNo}
							/>
						</div>
					</div>
				</div>
			),
			life: 3000,
		});
	};

	const onConfirmYes = () => {
		let payload = {
			searchRequest: [],
			pageNo: pageNo,
			pageSize: pageSize,
			sorts: [],
		};
		productService
			.addProducts(addedProducts)
			.then((res) => {
				if (typeof res === "object") {
					toastTL.current.show({
						severity: "success",
						summary: "Success",
						detail: "Product added to country",
						style: { color: "#000000" },
						life: 3000,
					});
					getProducts(payload);
					setInsertedProducts(null);
					setselectedProducts(null);
					setmasterProductDialog(false);
				}
			})
			.catch((e) => {
				toastTL.current.show({
					severity: "error",
					summary: e.name,
					detail: e.message,
					style: { color: "#000000" },
					life: 3000,
				});
				getProducts(payload);
				setInsertedProducts(null);
				setselectedProducts(null);
				setmasterProductDialog(false);
			});
	};

	const onConfirmNo = () => {
		setInsertedProducts(null);
		setselectedProducts(null);
	};

	// Table template
	const headerGroup = (
		<ColumnGroup>
			<Row>
				<Column style={{ width: "3em" }}></Column>
				<Column
					header={getSortableColumn(
						"Line Of Business",
						"lineOfBusiness"
					)}
				></Column>
				<Column header={getSortableColumn("Product", "title")}></Column>
				<Column header="Status"></Column>
				<Column header="Action"></Column>
			</Row>
		</ColumnGroup>
	);
	const statusTemplate = (item) => {
		return item.active ? (
			<span className="status status-success">Active</span>
		) : (
			<span className="status status-danger">Inactive</span>
		);
	};
	const actionTemplate = (item) => {
		return (
			<button
				className="icon-btn primary-btn"
				onClick={() => onEditClick(item)}
			>
				<BiEdit />
			</button>
		);
	};
	const allowExpansion = (rowData) => {
		return rowData.subProducts.length > 0;
	};
	const rowExpansionTemplate = (data) => {
		return (
			<div className="w-full">
				<h5>Sub Products for {data.title}</h5>
				<DataTable value={data.subProducts} responsiveLayout="scroll">
					<Column field="title" header="Sub Product"></Column>
					<Column header="Status" body={statusTemplate}></Column>
					<Column header="Action" body={actionTemplate} ></Column>
				</DataTable>
			</div>
		);
	};
	const getFooterTemplate = () => {
		return addedProducts && addedProducts.length > 0 ? (
			<Button
				label="Add Product"
				icon="pi pi-plus"
				iconPos="right"
				className="primary-btn"
				onClick={showConfirm}
			/>
		) : null;
	};
	// end Table template

	return (
		<div className="grid">
			<Toast ref={toastTL} position="top-left" />
			<Toast ref={toastBC} position="bottom-center" />
			<div className="col">
				<div className="w-full flex flex-wrap justify-content-between align-items-center">
					<h3 className="m-0">Products</h3>
					<div className="flex align-items-center">
						<Button
							label="Filter"
							icon="pi pi-filter-fill"
							iconPos="left"
							className="disabled-btn"
						/>
						<span className="p-input-icon-left">
							<i className="pi pi-search" />
							<InputText
								value={searchValue}
								onChange={(e) => setSearchValue(e.target.value)}
								placeholder="Search Products"
								className="search-field"
							/>
						</span>
						<Button
							label="Import Products"
							icon="pi pi-plus"
							className="primary-btn"
							onClick={() => setmasterProductDialog(true)}
						/>
					</div>
				</div>
			</div>
			<Dialog
				header="Master Products"
				visible={masterProductDialog}
				style={{ width: "50vw" }}
				breakpoints={{ "960px": "90vw" }}
				onHide={() => setmasterProductDialog(false)}
				footer={getFooterTemplate}
			>
				<MasterProducts
					handelImportProduct={handelImportProduct}
					selectedProducts={selectedProducts}
				/>
			</Dialog>
			{products ? (
				<div className="col-12">
					<DataTable
						headerColumnGroup={headerGroup}
						value={products.data}
						expandedRows={expandedRows}
						onRowToggle={(e) => setExpandedRows(e.data)}
						rowExpansionTemplate={rowExpansionTemplate}
						responsiveLayout="scroll"
						dataKey="id"
						breakpoint="960px"
					>
						<Column
							expander={allowExpansion}
							style={{ width: "3em" }}
						/>
						<Column field="lineOfBusiness" />
						<Column field="title" />
						<Column body={statusTemplate} />
						<Column body={actionTemplate} />
					</DataTable>
					{products.firstPage && products.lastPage ? null : (
						<Paginator
							pageSize={products.pageSize}
							firstPage={products.firstPage}
							lastPage={products.lastPage}
							decrement={decrement}
							increment={increment}
							pagesizechange={pagesizechange}
							pageNo={products.pageNo}
							totalPages={products.totalPages}
						/>
					)}
				</div>
			) : (
				<div className="col-12">
					<DataTable
						value={lodarTblArray}
						responsiveLayout="stack"
						breakpoint="960px"
					>
						<Column
							headerStyle={{ width: "3em" }}
							body={skeletonBody}
						></Column>
						<Column header="Line Of Business" body={skeletonBody} />
						<Column header="Product" body={skeletonBody} />
						<Column header="Status" body={skeletonBody} />
					</DataTable>
				</div>
			)}
		</div>
	);
};

export default Products;
