import React from "react";
import { FiCheck, FiX } from "react-icons/fi";

const KyDetail = (props) => {
	console.log(props);
	return (
		<div className="grid ">
			<div className="col-12 lg:col-6">
				<div className="text-key-val-grid">
					<p className="m-0 lable">AADHAAR Verified:</p>
					<p className="m-0 value">
						{props.agent.profile.aadhaarVerified ? (
							<span className="sq-status status-success">
								<FiCheck />
							</span>
						) : (
							<span className="sq-status status-danger">
								<FiX />
							</span>
						)}
					</p>
				</div>
			</div>
			<div className="col-12 lg:col-6">
				<div className="text-key-val-grid">
					<p className="m-0 lable">PAN Verified:</p>
					<p className="m-0 value">
						{props.agent.profile.panVerified ? (
							<span className="sq-status status-success">
								<FiCheck />
							</span>
						) : (
							<span className="sq-status status-danger">
								<FiX />
							</span>
						)}
					</p>
				</div>
			</div>
			<div className="col-12 lg:col-6">
				<div className="text-key-val-grid">
					<p className="m-0 lable">Selfie Verified:</p>
					<p className="m-0 value">
						{props.agent.profile.selfieVerified ? (
							<span className="sq-status status-success">
								<FiCheck />
							</span>
						) : (
							<span className="sq-status status-danger">
								<FiX />
							</span>
						)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default KyDetail;
