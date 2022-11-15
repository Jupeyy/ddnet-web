import { Link, LinkProps } from "@mui/material";
import { default as NextLink } from "next/link";
import React, { useMemo } from "react";

export const DDNetLink = ({ href, download, ...props }: LinkProps) => {
	const renderedLink = useMemo(() => {
		return download == undefined &&
			(href.startsWith("/") || href.startsWith("#")) ? (
			<NextLink href={href} download={download}>
				<Link {...props} sx={{ cursor: "pointer", ...props.sx }} />
			</NextLink>
		) : (
			<Link
				href={href}
				download={download}
				{...props}
				sx={{ cursor: "pointer", ...props.sx }}
			/>
		);
	}, [download, href, props]);

	return renderedLink;
};

export const DDNetSilentLink = ({
	href,
	children,
}: {
	href: string;
	children: JSX.Element | string;
}) => {
	return (
		<NextLink href={href}>
			<Link sx={{ cursor: "pointer" }} color="inherit" underline="none">
				{children}
			</Link>
		</NextLink>
	);
};

export default DDNetLink;
