import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import "./App.css";
import Login from "./pages/login/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./pages/Layouts/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import Products from "./pages/masters/products/Products";
import MasterProducts from "./pages/masters/products/MasterProducts";
import FinancialInstitutions from "./pages/masters/institutions/FinancialInstitutions";
import AgentsProfile from "./pages/users/agents/AgentsProfile";
import AddFinancialInstitutions from "./pages/masters/institutions/AddFinancialInstitutions";
import Allocation from "./pages/allocation/Allocation";
import MemberProfile from "./pages/users/agents/members/MemberProfile";
import SearchFinancialInstitute from "./pages/financialinstitute/SearchFinancialInstitute";

const App = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route element={<AppLayout />}>
				<Route index element={<Dashboard />} />
				<Route path="/masters/products" element={<Products />} />
				<Route
					path="/masters/master-products"
					element={<MasterProducts />}
				/>
				<Route
					path="/masters/financial-institutions/list"
					element={<FinancialInstitutions />}
				/>
				<Route
					path="/masters/financial-institutions/add"
					element={<AddFinancialInstitutions />}
				/>
				<Route path="/members/agents" element={<AgentsProfile />} />
				<Route path="/members/allocation" element={<Allocation />} />
				<Route path="/members/users" element={<MemberProfile />} />
				<Route path="/financial-institutions/lead" element={<SearchFinancialInstitute />} />
			</Route>

			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
};

export default App;
