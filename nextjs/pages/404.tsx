import { Button, CardContent, CardHeader } from "@mui/material";
import Link from "next/link";
import React from "react";
import { DDNetCardTop } from "data/ddnet-card";

const DDNet404 = () => (
	<DDNetCardTop>
		<CardHeader title={"Page not found"}></CardHeader>
		<CardContent>
			<Link href="/">
				<Button variant="outlined">Back</Button>
			</Link>
		</CardContent>
	</DDNetCardTop>
);

export default DDNet404;
