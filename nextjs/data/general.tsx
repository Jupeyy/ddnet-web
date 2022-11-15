import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const DDNetUl = ({
	children,
}: {
	children: JSX.Element | (JSX.Element | string)[];
}) => {
	return <div style={{ marginLeft: 10 }}>{children}</div>;
};

export const DDNetLi = ({
	children,
}: {
	children: JSX.Element | (JSX.Element | string)[] | string;
}) => {
	return (
		<div style={{ display: "flex", alignItems: "baseline" }}>
			<FontAwesomeIcon
				icon={["fas", "circle"]}
				style={{
					flexShrink: 1,
					width: 6,
					height: 6,
					marginRight: 10,
				}}
			/>
			<div>{children}</div>
		</div>
	);
};
