import React from "react";

const BankDetail = (props) => {
	return props.agent.bankDetails ? (
		<div className="grid">
			<div className="col-12 lg:col-6">
				<div className="text-key-val-grid">
					<p className="m-0 lable">A/C Type:</p>
					<p className="m-0 value">
						{props.agent.bankDetails.accountType}
					</p>
				</div>
				<div className="text-key-val-grid">
					<p className="m-0 lable">A/C No:</p>
					<p className="m-0 value">
						{props.agent.bankDetails.accountNumber}
					</p>
				</div>
				<div className="text-key-val-grid">
					<p className="m-0 lable">Bank Name:</p>
					<p className="m-0 value">
						{props.agent.bankDetails.bankName}
					</p>
				</div>
				<div className="text-key-val-grid">
					<p className="m-0 lable">Bank Address:</p>
					<p className="m-0 value">
						{props.agent.bankDetails.bankAddress}
					</p>
				</div>
				<div className="text-key-val-grid">
					<p className="m-0 lable">Name as in Bank Account:</p>
					<p className="m-0 value">{props.agent.bankDetails.name}</p>
				</div>
				<div className="text-key-val-grid">
					<p className="m-0 lable">IFSC:</p>
					<p className="m-0 value">{props.agent.bankDetails.ifsc}</p>
				</div>
				<div className="text-key-val-grid">
					<p className="m-0 lable">MICR:</p>
					<p className="m-0 value">{props.agent.bankDetails.micr}</p>
				</div>
			</div>
			<div className="col-12 lg:col-6">
				<p style={{ fontWeight: 700 }}>Cancleed Cheque</p>
				<img
					src={`https://rainbow-india.s3.ap-south-1.amazonaws.com/agent-profile/${props.agent.bankDetails.chequeId}`}
					alt="cancel-check-photo"
					style={{ width: "100%" }}
				/>
			</div>
		</div>
	) : null;
};

export default BankDetail;
