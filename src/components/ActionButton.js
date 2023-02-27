import React from "react";

const ActionButton = ({
	className,
	type,
	isDisabled,
	title,
	animation,
	variant,
	size,
}) => {
	return (
		<button type={type} className={className} disabled={isDisabled}>
			{isDisabled ? (
				<>Processing...</>
			) : (
				title
			)}
		</button>
	);
};

export default ActionButton;
