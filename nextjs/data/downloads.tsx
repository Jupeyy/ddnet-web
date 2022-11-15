import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardHeader, CardContent } from "@mui/material";
import React from "react";
import { DDNetCardInner } from "./ddnet-card";
import { DDNetSilentLink } from "./ddnet-link";

export const DownloadVersion = ({
	children,
	version,
	date,
}: {
	children: JSX.Element | JSX.Element[];
	version: string;
	date: string;
}) => {
	return (
		<DDNetCardInner>
			<DDNetSilentLink href={"#" + version}>
				<CardHeader
					id={version}
					title={"DDNet " + version}
					subheader={date}
				></CardHeader>
			</DDNetSilentLink>
			<CardContent sx={{ display: "flex", flexWrap: "wrap" }}>
				{children}
			</CardContent>
		</DDNetCardInner>
	);
};

export const DownloadDownloadFiles = ({
	children,
}: {
	children: JSX.Element | (JSX.Element | string)[];
}) => {
	return <div style={{ width: "150px", flexShrink: 0 }}>{children}</div>;
};

export const DownloadChangeLog = ({
	children,
}: {
	children: JSX.Element | (JSX.Element | string)[];
}) => {
	return <div style={{ marginLeft: 10 }}>{children}</div>;
};

export const DDNetChangeLogLi = ({
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
