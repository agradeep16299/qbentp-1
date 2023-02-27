import { BiGridAlt, BiUser } from "react-icons/bi";
import { AiOutlineBank } from "react-icons/ai"
export const sidenavData = [
	{
		title: "Masters",
		icon: <BiGridAlt />,
		child: [
			{
				title: "Products",
				path: "/masters/products",
			},
			{
				title: "Financial Institutions",
				child: [
					{
						title: "List",
						path: "/masters/financial-institutions/list",
					},
					{
						title: "Add",
						path: "/masters/financial-institutions/add",
					},
				],
			},
			{
				title: "System Configuration",
				child: [
					{
						title: "Roles",
						path: "/masters/configuration/roles",
					},
					{
						title: "Menus",
						path: "/masters/configuration/menus",
					},
					{
						title: "Pincode Management",
						path: "/masters/configuration/work-area-pincode",
					},
				],
			},
		],
	},
	{
		title: "System Members",
		icon: <BiUser />,
		child: [
			{
				title: "User Management",
				child: [
					{
						title: "Agents",
						path: "/members/agents",
					},
					{
						title: "Users",
						path: "/members/users",
					},
				],
			},
			{
				title: "Allocation",
				child: [
					{
						title: "Allocation view",
						path: "/members/allocation",
					},
				],
			},
		],
	},
	{
		title: "Financial Institutes",
		icon: <AiOutlineBank />,
		child: [
			{
				title: "Search/List",
				child: [
					{
						title: "Lead",
						path: "/financial-institutions/lead"
					},
				]
			},

		]
	}
];

//dropdoen cities for financial-institutions/add

export const states = [
	{ name: "Andhra Pradesh", code: "Andhra Pradesh" },
	{ name: "Arunchal Pradesh", code: "Arunchal Pradesh" },
	{ name: "Assam", code: "Assam" },
	{ name: "Bihar", code: "Bihar" },
	{ name: "Chhattisgarh", code: "Chhattisgarh" },
	{ name: "Goa", code: "Goa" },
	{ name: "Gujarat", code: "Gujarat" },
	{ name: "Haryana", code: "Haryana" },
	{ name: "Himachal Pradesh", code: "Himachal Pradesh" },
	{ name: "Jharkhand", code: "Jharkhand" },
	{ name: "Karnataka", code: "Karnataka" },
	{ name: "Kerala", code: "Kerala" },
	{ name: "Madhya Pradesh", code: "Madhya Pradesh" },
	{ name: "Maharashtra", code: "Maharashtra" },
	{ name: "Manipur", code: "Manipur" },
	{ name: "Meghalaya", code: "Meghalaya" },
	{ name: "Mizoram", code: "Mizoram" },
	{ name: "Nagaland", code: "Nagaland" },
	{ name: "Odisha", code: "Odisha" },
	{ name: "Punjab", code: "Punjab" },
	{ name: "Rajasthan", code: "Rajasthan" },
	{ name: "Sikkim", code: "Sikkim" },
	{ name: "Tamil Nadu", code: "Tamil Nadu" },
	{ name: "Telangana", code: "Telangana" },
	{ name: "Tripura", code: "Tripura" },
	{ name: "Uttar Pradesh", code: "Uttar Pradesh" },
	{ name: "Uttarakhand", code: "Uttarakhand" },
	{ name: "West Bangal", code: "West Bangal" },
];

//members data

export const memberStatic = [
	{
		name: "Agradeep Rakshit",
		email: "rakshit.bwn@gmail.com",
		mobile: "7063276421",
		userName: "agradeep1234",
		role: "Area Manager",
		status: "active",
	},
	{
		name: "Rajdeep Rakshit",
		email: "rajdeep.bwn@gmail.com",
		mobile: "8927159487",
		userName: "rajdeep1234",
		role: "Zonal Manager",
		status: "inactive",
	},
	{
		name: "Pradip Rakshit",
		email: "pradip.bwn@gmail.com",
		mobile: "8347688653",
		userName: "rajdeep1234",
		role: "Regional Manager",
		status: "active",
	},
	{
		name: "Sandip Rakshit",
		email: "sandip.bwn@gmail.com",
		mobile: "9475473876",
		userName: "sandip1234",
		role: "Sales Excutive",
		status: "active",
	},
]

export const allocationTree = [
	{
		key: "0",
		label: "Zonal manager",
		type: "ZM",
		data: {
			name: "Ujjal Kr Chatterjee",
			mobile: "7852365785",
			email: "ujjalchatterjee1178@gmail.com",
			zone: "Eastern Zone",
		},
		children: [
			{
				key: "0-0",
				type: "ASM",
				label: "ASM",
				data: {
					name: "Ujjal Kr Chatterjee",
					mobile: "7852365785",
					email: "ujjalchatterjee1178@gmail.com",
					state: "West Bengal",
				},
				children: [
					{
						key: "0-0-0",
						label: "RM",
						type: "RM",
						data: {
							name: "Ujjal Kr Chatterjee",
							mobile: "7852365785",
							email: "ujjalchatterjee1178@gmail.com",
							district: "Kolkata",
						},
						children: [
							{
								key: "0-0-0-0",
								label: "SALES EXCUTIVE",
								type: "SALES EXCUTIVE",
								data: {
									name: "Ujjal Kr Chatterjee",
									mobile: "7852365785",
									email: "ujjalchatterjee1178@gmail.com",
									area: ["700001", "700002"],
								},
								children: [
									{
										key: "0-0-0-0-0",
										label: "AGENT",
										type: "AGENT",
										data: {
											name: "Ujjal Kr Chatterjee",
											mobile: "7852365785",
											email: "ujjalchatterjee1178@gmail.com",
											area: ["700001", "700002"],
										},
									},
								],
							},
						],
					},
				],
			},
			{
				key: "0-1",
				label: "ASM",
				type: "ASM",
				data: {
					name: "Ujjal Kr Chatterjee",
					mobile: "7852365785",
					email: "ujjalchatterjee1178@gmail.com",
					state: "West Bengal",
				},
				children: [
					{
						key: "0-1-0",
						label: "RM",
						type: "RM",
						data: {
							name: "Ujjal Kr Chatterjee",
							mobile: "7852365785",
							email: "ujjalchatterjee1178@gmail.com",
							district: "Kolkata",
						},
						children: [
							{
								key: "0-1-0-0",
								label: "SALES EXCUTIVE",
								type: "SALES EXCUTIVE",
								data: {
									name: "Ujjal Kr Chatterjee",
									mobile: "7852365785",
									email: "ujjalchatterjee1178@gmail.com",
									area: ["700001", "700002"],
								},
								children: [
									{
										key: "0-1-0-0-0",

										label: "AGENT",
										type: "AGENT",
										data: {
											name: "Ujjal Kr Chatterjee",
											mobile: "7852365785",
											email: "ujjalchatterjee1178@gmail.com",
											area: ["700001", "700002"],
										},
									},
								],
							},
						],
					},
				],
			},
		],
	},
];

export const listData = {
	data: [
		{
			id: "1",
			name: "Ujjal Kr Chatterjee",
			mobile: "7852365785",
			email: "ujjalchatterjee1178@gmail.com",
			username: "UjjalCh1221",
			gender: "M",
			profiletype: "Employee",
		},
		{
			id: "2",
			name: "Ujjal Kr Chatterjee",
			mobile: "7852365785",
			email: "ujjalchatterjee1178@gmail.com",
			username: "UjjalCh1221",
			gender: "M",
			profiletype: "Employee",
		},
		{
			id: "3",
			name: "Ujjal Kr Chatterjee",
			mobile: "7852365785",
			email: "ujjalchatterjee1178@gmail.com",
			username: "UjjalCh1221",
			gender: "M",
			profiletype: "Employee",
		},
		{
			id: "4",
			name: "Ujjal Kr Chatterjee",
			mobile: "7852365785",
			email: "ujjalchatterjee1178@gmail.com",
			username: "UjjalCh1221",
			gender: "M",
			profiletype: "Employee",
		},
	],
	totalPages: 2,
	totalElements: 5,
	pageNo: 1,
	pageSize: 10,
	firstPage: true,
	lastPage: false,
};
export const memberRole = [
	{ name: "Zonal Manager", code: "ZM" },
	{ name: "Area Sales Manager", code: "ASM" },
	{ name: "Regional Manager ", code: "RM" },
	{ name: "Sales Executive", code: "SE" },

];
export const zoneRole = [
	{ name: "East Zone", code: "EZ" },
	{ name: "West Zone", code: "WZ" },
	{ name: "North Zone ", code: "NZ" },
	{ name: "South Zone", code: "SZ" },

];
//for asm
export const asmRole = [
	{ name: "Arunachal Pradesh", code: "EZ" },
	{ name: "Nagaland", code: "NL" },
	{ name: "Mizoram", code: "MR" },
	{ name: "Jharkhand", code: "JR" },
	{ name: "West Bangal", code: "Wb" }
]
export const zoneManagerName = [
	{ name: "Agradeep Rakshit", code: "AR" },
	{ name: "deep Rakshit", code: "DR" },
	{ name: "Sudeep Rakshit", code: "SR" },
	{ name: "sandip Rakshit", code: "SR" },
	{ name: "Paldeep Rakshit", code: "PR" },
	{ name: "Manob Rakshit", code: "MR" },
	{ name: "Modon Rakshit", code: "MR" },
]
//for rm
export const rmRole = [
	{ name: "Burdwan", code: "BW" },
	{ name: "Nodia", code: "ND" },
	{ name: "Birbhum", code: "BM" },
	{ name: "Murshidabad", code: "Md" },

]
export const areaSalesManagerName = [
	{ name: "Madhurima das", code: "MD" },
	{ name: "Chandrima das", code: "CD" },
	{ name: "Rima Das", code: "RD" },
	{ name: "Karima Das", code: "KD" },

]
//for se(singer)
export const areaRegionalManagerName = [
	{ name: "Arijit Singh", code: "AS" },
	{ name: "Honey Sing", code: "HS" },
	{ name: "Darshan Ravel", code: "DR" },
	{ name: "Kailash Kher", code: "KK" },
	{ name: "Kumar Sanu", code: "KS" }
]

//search financial institute dummy data

export const instituteDummyData = [
	{
		"sl": "1",
		"interested in": "Home Loan",
		"mobile": "7063276421",
		"pin": "713148",
		"city": "Alipurduar",
		"name": "Kesab Chandra Patel",
		"more details": "Collected Data",
		"status": "Not Interested"
	},
	{
		"sl": "2",
		"interested in": "Car Loan",
		"mobile": "7063276421",
		"pin": "700156",
		"city": "kolkata",
		"name": "Murari Mohan Gayen",
		"more details": "Collected Data",
		"status": "Converted"
	},
	{
		"sl": "3",
		"interested in": "Home Loan",
		"mobile": "8927159487",
		"pin": "700223",
		"city": "kolkata",
		"name": "Ram Lal Gayen",
		"more details": "Collected Data",
		"status": "Not Eligible",
	},
]


//

export const InsuranceData = [

	{
		"id": 1,
		"title": "Loan",
		"subProducts": [
			{
				"id": 1.0,
				"title": "Individual",
				"isActive": false,
			},
			{
				"id": 1.1,
				"title": "Family",
				"isActive": true,
			},

		]
	},
	{
		"id": 2,
		"title": "Insurance",
		"subProducts": [
			{
				"id": 2.0,
				"title": "Traditional",
				"isActive": true,
			},
			{
				"id": 2.1,
				"title": "Retirement Plan",
				"isActive": false,
			},

		]
	}
];
{/*
export const PanelData = [
	{
		"id": "1",
		"title": "Loan",
		"subProducts": [],
	},
	{
		"id": "2",
		"title": "Insurance",
		"subProducts": [

			{
				"id": "2.0",
				"title": "Medical Insurance",
				"subProducts": [
					{
						"id":"2.0.1" ,
						"title": "Individual",
						"isActive": false,
					},
					{
						"id": "2.0.2",
						"title": "Family",
						"isActive": true,
					},

				],
			},
			{
				"id": "2.1",
				"title": "Life Insurance",
				"subProducts": [
					{
						"id": "2.1.1",
						"title": "Traditional",
						"isActive": true,
					},
					{
						"id": "2.1.2",
						"title": "Retirement Plan",
						"isActive": false,
					},

				],
			},
		]
	},
	{
		"id": "3",
		"title": "Investment",
		"subProducts": [],
	},


]
*/}

export const leadAllocationFind=[
	{
		"id":"1",
		"name":"Raju",
		"phoneNo":"7063276421",
		"altPhoneNo":"7654667043",
		"place":"kolkata",
		"pin":"713148",
		"type":"Agent"
	},
	{
		"id":"2",
		"name":"Sanju",
		"phoneNo":"8927159487",
		"altPhoneNo":"7654321234",
		"place":"delhi",
		"pin":"713148",
		"type":"User"
	}
]