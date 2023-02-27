import React from "react";
import { FiCheck, FiX } from "react-icons/fi";

const General = (props) => {
	return (
		<div className="grid">
			<div className="col-12 lg:col-6">
				<div className="text-key-val-grid">
					<p className="m-0 lable">Name:</p>
					<p className="m-0 value">
						{props.agent.profile.agent.salutation +
							" " +
							props.agent.profile.agent.firstName +
							" " +
							props.agent.profile.agent.middleName +
							" " +
							props.agent.profile.agent.lastName}
					</p>
				</div>
				<div className="text-key-val-grid">
					<p className="m-0 lable">Username:</p>
					<p className="m-0 value">
						{props.agent.profile.agent.userName}
					</p>
				</div>
				<div className="text-key-val-grid">
					<p className="m-0 lable">Email ID:</p>
					<p className="m-0 value">
						{props.agent.profile.agent.emailId}
					</p>
				</div>
				<div className="text-key-val-grid">
					<p className="m-0 lable">Mobile No:</p>
					<p className="m-0 value">
						{props.agent.profile.agent.mobileNumber}
					</p>
				</div>
				<div className="text-key-val-grid no-border">
					<p className="m-0 lable">Gender:</p>
					<p className="m-0 value">
						{props.agent.profile.agent.gender}
					</p>
				</div>
			</div>
			<div className="col-12 lg:col-6">
				<div className="text-key-val-grid">
					<p className="m-0 lable">Profile Type:</p>
					<p className="m-0 value">
						{props.agent.profile.profileType}
					</p>
				</div>
				<div className="text-key-val-grid">
					<p className="m-0 lable">Status:</p>
					<p className="m-0 value">
						{props.agent.profile.status === "VERIFIED" ? (
							<span className="status status-success">
								{props.agent.profile.status}
							</span>
						) : props.agent.profile.status ===
						  "TEMPORARISUSPEND" ? (
							<span className="status status-danger">
								{props.agent.profile.status}
							</span>
						) : props.agent.profile.status === "ONHOLD" ? (
							<span className="status status-warning">
								On Hold
							</span>
						) : (
							<span className="status status-ban">
								Not Verified
							</span>
						)}
					</p>
				</div>
				<div className="text-key-val-grid">
					<p className="m-0 lable">Work On Given Lead:</p>
					<p className="m-0 value">
						{props.agent.profile.workOnGivenLead ? (
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
				<div className="text-key-val-grid no-border">
					<p className="m-0 lable">Work Area Pincode:</p>
					<p className="m-0 value">{props.agent.profile.pincode}</p>
				</div>
			</div>
		</div>
	);
};

export default General;
