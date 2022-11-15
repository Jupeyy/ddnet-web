import React from "react";
import { CardProps, Card, useTheme } from "@mui/material";

export const DDNetCardInner = ({ sx, ...props }: CardProps) => {
	return (
		<Card
			{...props}
			sx={{ borderRadius: 0, mt: 1, ...sx }}
			variant="elevation"
		></Card>
	);
};

export const DDNetCardInnerRounded = ({ sx, ...props }: CardProps) => {
	return <Card {...props} sx={{ mt: 1, ...sx }} variant="elevation"></Card>;
};

export const DDNetCard = ({ sx, ...props }: CardProps) => {
	return <Card {...props} sx={{ mt: 1, ...sx }} variant="outlined"></Card>;
};

export const DDNetCardTop = ({ sx, ...props }: CardProps) => {
	return (
		<Card
			{...props}
			sx={{
				borderTopLeftRadius: 0,
				borderTopRightRadius: 0,
				mt: 2,
				...sx,
			}}
			variant="outlined"
		></Card>
	);
};

export const DDNetCardFullHeight = ({ sx, ...props }: CardProps) => {
	const theme = useTheme();
	return (
		<Card
			{...props}
			sx={{
				borderTopLeftRadius: 0,
				borderTopRightRadius: 0,
				mt: 0,
				pt: 1,
				height: "calc(100vh + " + theme.spacing() + ")",
				...sx,
			}}
			variant="outlined"
		></Card>
	);
};
