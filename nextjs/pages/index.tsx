import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	Box,
	Button,
	CardContent,
	CardHeader,
	createTheme,
	LinearProgress,
	Stack,
	ThemeProvider,
	Typography,
} from "@mui/material";
import { NextPage } from "next";
import React, { useEffect, useMemo, useState } from "react";

import MuiMarkdown from "mui-markdown";
import { default as NextLink } from "next/link";
import * as mkNewsList from "data/mk";
import * as rdd from "react-device-detect";
import { StackProps } from "@mui/system";
import { useRecoilValue } from "recoil";
import { globalTheme } from "data/ddnet-theme";
import { getDDNetFunding } from "data/funding";
import { SizeMe } from "react-sizeme";
import { DDNetCard, DDNetCardInner, DDNetCardTop } from "data/ddnet-card";
import DDNetLink from "data/ddnet-link";
import TDDNetAppProps from "data/app-props";
import Head from "next/head";

enum EVideoProvider {
	YouTube,
	Twitch,
}

const VideoListNav = ({
	contentHeight,
	onMouseEnter,
	onMouseLeave,
	onClick,
	show,
	left,
}: {
	contentHeight: number;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
	onClick: () => void;
	show: boolean;
	left: boolean;
}) => {
	const basicStyle = useMemo(() => {
		return {
			p: 0,
			m: 0,
			display: "flex",
			position: "absolute",
			top: 0,
			width: 50,
			height: contentHeight,
			alignItems: "center",
			cursor: "pointer",
		};
	}, [contentHeight]);

	const style = useMemo(() => {
		if (left) return { ...basicStyle, left: 0 };
		else return { ...basicStyle, right: 0 };
	}, [basicStyle, left]);

	return (
		<CardContent
			sx={style}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={onClick}
		>
			{show && (
				<div
					style={{
						background: left
							? "linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.0) 100%)"
							: "linear-gradient(90deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.3) 100%)",
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<FontAwesomeIcon
						icon={["fas", left ? "angle-left" : "angle-right"]}
					></FontAwesomeIcon>
				</div>
			)}
		</CardContent>
	);
};

const YouTubeVideo = ({
	srcList,
	isMobile,
}: {
	srcList: { video: string; provider: EVideoProvider }[];
	isMobile: boolean;
}) => {
	const [curTab, setCurTab] = useState(0);
	const contentHeight = 400;

	const [showNav, setShowNav] = useState(!isMobile);

	const curVideo = useMemo(() => {
		if (srcList.length == 0) return <></>;
		const curSrc = srcList[curTab];
		switch (curSrc.provider) {
			case EVideoProvider.YouTube:
				return (
					<iframe
						width="100%"
						height={contentHeight}
						src={
							"https://www.youtube.com/embed/" +
							srcList[curTab].video
						}
						title="YouTube video player"
						frameBorder={"0"}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				);
			case EVideoProvider.Twitch:
				return (
					<iframe
						src={
							"https://player.twitch.tv/?" +
							srcList[curTab].video +
							"&parent=ddnet.org"
						}
						height={contentHeight}
						width="100%"
						allowFullScreen
					></iframe>
				);
		}
		return <>Not implemented</>;
	}, [curTab, srcList]);

	return (
		<CardContent sx={{ p: 0, m: 0, position: "relative" }}>
			{srcList.length > 1 && (
				<>
					<VideoListNav
						onMouseEnter={() => setShowNav(true)}
						onMouseLeave={() => setShowNav(false)}
						onClick={() =>
							setCurTab((old) =>
								old - 1 >= 0 ? old - 1 : srcList.length - 1
							)
						}
						show={showNav || isMobile}
						contentHeight={contentHeight}
						left={true}
					></VideoListNav>
					<VideoListNav
						onMouseEnter={() => setShowNav(true)}
						onMouseLeave={() => setShowNav(false)}
						onClick={() =>
							setCurTab((old) =>
								old + 1 < srcList.length ? old + 1 : 0
							)
						}
						show={showNav || isMobile}
						contentHeight={contentHeight}
						left={false}
					></VideoListNav>
				</>
			)}
			{curVideo}
		</CardContent>
	);
};

const DownloadButton = (props: StackProps) => {
	const [osText, setOSText] = useState("Windows (64-bit)");
	const version = "16.3.1";
	const [osDownloadLink, setOSDownloadLink] = useState(
		"/downloads/DDNet-" + version + "-win64.zip"
	);

	useEffect(() => {
		const OSBase = rdd.osName;
		if (OSBase == "Windows") {
			setOSText("Windows (64-bit)");
			setOSDownloadLink("/downloads/DDNet-" + version + "-win64.zip");
		} else if (OSBase == "macOS") {
			setOSText("macOS");
			setOSDownloadLink("/downloads/DDNet-" + version + "-macos.dmg");
		} else if (OSBase == "Linux") {
			setOSText("Linux x86_64");
			setOSDownloadLink(
				"/downloads/DDNet-" + version + "-linux_x86_64.tar.xz"
			);
		}
	}, []);

	return (
		<Stack {...props}>
			<Button sx={{ justifyContent: "start" }}>
				<Stack
					flexDirection={"row"}
					alignItems={"center"}
					justifyContent={"start"}
					width={"100%"}
				>
					<FontAwesomeIcon
						icon={["fas", "download"]}
						style={{ width: 40, height: 40 }}
					/>
					<NextLink href={osDownloadLink}>
						<Typography
							variant="body1"
							sx={{ marginLeft: "auto", marginRight: "auto" }}
						>
							DDraceNetwork {version} for {osText}
						</Typography>
					</NextLink>
				</Stack>
			</Button>
			<DDNetLink href="/downloads" sx={{ marginLeft: 1 }}>
				<Typography
					variant="subtitle2"
					sx={{ cursor: "pointer", fontSize: 10 }}
				>
					Other systems, versions {"&"} changelogs
				</Typography>
			</DDNetLink>
		</Stack>
	);
};

const DDNetNewsRenderer = ({
	mkText,
	dateUnderscored,
}: {
	mkText: string;
	dateUnderscored: string;
}) => {
	const curIndex = mkText.indexOf("---", 3);
	const metaInfo = mkText.substring(3, curIndex).split("\n");
	let title =
		metaInfo
			.find((val) => val.includes("title: "))
			?.replace("title: ", "") ?? "";
	if (title.length >= 2) title = title.substring(1, title.length - 1);
	const realMkText = mkText.substring(curIndex + 3);
	return (
		<DDNetCardInner className={"markdownContainer"}>
			<CardHeader
				title={title}
				subheader={dateUnderscored.replaceAll("_", "-")}
			></CardHeader>
			<CardContent>
				<MuiMarkdown>{realMkText}</MuiMarkdown>
			</CardContent>
		</DDNetCardInner>
	);
};

const DDNetNews = () => {
	const newsElements = useMemo(
		() =>
			Object.keys(mkNewsList).sort(
				(val1, val2) =>
					-val1.split("___")[1].localeCompare(val2.split("___")[1])
			),
		[]
	);
	const newsListFast = useMemo(
		() =>
			newsElements
				.filter((val, index) => index < 3)
				.map((val, index) => {
					return (
						<DDNetNewsRenderer
							mkText={mkNewsList[val].default}
							dateUnderscored={val.split("___")[1]}
							key={"mkNews" + index.toString()}
						></DDNetNewsRenderer>
					);
				}),
		[newsElements]
	);
	const [newsListSlow, setNewsListSlow] = useState<JSX.Element[] | undefined>(
		undefined
	);

	useEffect(
		() =>
			setNewsListSlow(
				newsElements
					.filter((val, index) => index >= 3 && index < 10)
					.map((val, index) => {
						return (
							<DDNetNewsRenderer
								mkText={mkNewsList[val].default}
								dateUnderscored={val.split("___")[1]}
								key={"mkNews" + index.toString()}
							></DDNetNewsRenderer>
						);
					})
			),
		[newsElements]
	);

	return (
		<DDNetCard>
			<CardHeader title="News"></CardHeader>
			{newsListFast}
			{newsListSlow}
		</DDNetCard>
	);
};

function DDNetFundingProgress() {
	const theme = useRecoilValue(globalTheme);

	const ddnetFunding = useMemo(() => getDDNetFunding(), []);

	const progressBarTheme = useMemo(() => {
		return createTheme({
			components: {
				MuiLinearProgress: {
					defaultProps: {
						color: "primary",
					},
					styleOverrides: {
						root: {
							backgroundColor: theme.palette.background.default,
						},
						bar1Determinate: {
							backgroundColor: ddnetFunding.totalProgressColor,
						},
					},
				},
				MuiTypography: {
					styleOverrides: {
						body2: {
							color: theme.palette.text.primary + " !important",
							margin: 10,
							textShadow:
								"1px 1px 0 " + theme.palette.background.paper,
						},
					},
				},
			},
		});
	}, [
		ddnetFunding.totalProgressColor,
		theme.palette.background.default,
		theme.palette.background.paper,
		theme.palette.text.primary,
	]);

	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				flexBasis: 300,
				height: 30,
			}}
		>
			<ThemeProvider theme={progressBarTheme}>
				<SizeMe>
					{({ size }) => (
						<>
							<Box sx={{ width: "100%", mr: 1, height: "100%" }}>
								<LinearProgress
									variant={"determinate"}
									value={ddnetFunding.totalProgress}
									sx={{
										height: "100%",
										color: ddnetFunding.totalProgressColor,
									}}
								/>
							</Box>
							<Box
								sx={{
									minWidth: 35,
									position: "absolute",
									width: size.width,
									display: "flex",
									justifyContent: "center",
								}}
							>
								<Typography variant="body2">
									{ddnetFunding.totalProgressText}
								</Typography>
							</Box>
						</>
					)}
				</SizeMe>
			</ThemeProvider>
		</Box>
	);
}

const HomePage: NextPage = ({ isMobile }: TDDNetAppProps) => {
	return (
		<>
			<Head>
				<title>DDRaceNetwork</title>
			</Head>
			<DDNetCardTop>
				<CardHeader title="DDRace Servers and much more!"></CardHeader>
				<CardContent>
					<Typography variant="body1">
						DDraceNetwork (DDNet) is an actively maintained version
						of DDRace, a{" "}
						<DDNetLink href="https://www.teeworlds.com/">
							Teeworlds
						</DDNetLink>{" "}
						modification with a unique cooperative gameplay. Help
						each other play through{" "}
						<DDNetLink href="/releases">custom maps</DDNetLink> with
						up to 64 players, compete against the best in{" "}
						<DDNetLink href="/tournaments">
							international tournaments
						</DDNetLink>
						, design your{" "}
						<DDNetLink href="/howto">own maps</DDNetLink>, or run
						your{" "}
						<DDNetLink href="/settingscommands">
							own server
						</DDNetLink>
						. The{" "}
						<DDNetLink href="/status">official servers</DDNetLink>{" "}
						are around the world. All{" "}
						<DDNetLink href="/ranks">ranks</DDNetLink> made on
						official servers are available worldwide and you can{" "}
						<DDNetLink href="/players">collect points</DDNetLink>!
					</Typography>
					<Stack
						flexDirection={"row"}
						alignItems={"center"}
						justifyContent={"space-between"}
						flexWrap={"wrap"}
						sx={{ mt: 2 }}
					>
						<DownloadButton
							sx={{ flexBasis: 450 }}
						></DownloadButton>
						<DDNetFundingProgress></DDNetFundingProgress>
					</Stack>
				</CardContent>
			</DDNetCardTop>
			<DDNetCard>
				<CardHeader title={"Featured"}></CardHeader>
				<YouTubeVideo
					srcList={[
						{
							video: "fY6btJ4tImU",
							provider: EVideoProvider.YouTube,
						},
						{
							video: "LWu9IIrGWug",
							provider: EVideoProvider.YouTube,
						},
					]}
					isMobile={isMobile}
				></YouTubeVideo>
			</DDNetCard>
			<DDNetNews></DDNetNews>
		</>
	);
};

export default HomePage;
