import React from "react";
import { TabPanel, TabView } from "primereact/tabview";
import Listview from "./components/Listview";
import Treeview from "./components/Treeview";
const Allocation = () => {
	return (
		<>
			<TabView>
				<TabPanel header="Tree">
					<Treeview />
				</TabPanel>
				<TabPanel header="List">
					<Listview />
				</TabPanel>
			</TabView>
		</>
	);
};

export default Allocation;
