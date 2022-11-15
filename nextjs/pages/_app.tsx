import React, { useCallback, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
	AppBar,
	Button,
	CssBaseline,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Stack,
	SvgIcon,
	Theme,
	Toolbar,
	Typography,
} from "@mui/material";
import ddnet2 from "public/ddnet2.svg";
import { AppProps } from "next/app";
import { Box } from "@mui/system";
import Link from "next/link";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faGithub,
	faSteamSymbol,
	faDiscord,
	faWikipediaW,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import {
	faDownload,
	faRss,
	faSun,
	faMoon,
	faBars,
	faComments,
	faServer,
	faRankingStar,
	faMap,
	faTrophy,
	faShirt,
	faArrowTrendUp,
	faUser,
	faAngleDown,
	faAngleUp,
	faAngleLeft,
	faAngleRight,
	faCircle,
	faHome,
	faCircleInfo,
	faPen,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { globalTheme, darkTheme, lightTheme } from "data/ddnet-theme";
import { SizeMe, SizeMeProps } from "react-sizeme";
import "../style/ddnet-global.css";
import { useRouter } from "next/router";

library.add(
	faGithub,
	faSteamSymbol,
	faDiscord,
	faRss,
	faDownload,
	faSun,
	faMoon,
	faBars,
	faComments,
	faServer,
	faRankingStar,
	faMap,
	faWikipediaW,
	faTrophy,
	faShirt,
	faArrowTrendUp,
	faUser,
	faAngleDown,
	faAngleUp,
	faAngleLeft,
	faAngleRight,
	faCircle,
	faHome,
	faCircleInfo,
	faPen,
	faTrash
);

const wideSwitchSize = 2300;
const mobileSwitchWidth = 1000;

const drawerWidthWide = 300;
const drawerWidth = 230;
const drawerWidthMobile = 50;
const footerIconSize = (isMobile: boolean) =>
	isMobile ? drawerWidthMobile - 7 : drawerWidth / 5 - 6;
const footerIconPad = 0;

const NavItem = ({
	href,
	text,
	iconOnly,
	icon,
	activeName,
}: {
	href: string;
	text: string;
	iconOnly: boolean;
	icon: IconProp;
	activeName: string;
}) => {
	const renderedItem = useMemo(() => {
		if (iconOnly)
			return (
				<ListItem
					sx={{
						p: 0,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Link href={href}>
						<ListItemButton
							selected={activeName == href}
							sx={{
								width: footerIconSize(true),
								height: footerIconSize(true),
								p: footerIconPad,
								minWidth: footerIconSize(true),
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
							title={text}
						>
							<FontAwesomeIcon
								icon={icon}
								style={{ width: "60%", height: "60%" }}
							/>
						</ListItemButton>
					</Link>
				</ListItem>
			);
		return (
			<ListItem
				sx={{
					p: 0,
				}}
			>
				<Link href={href}>
					<ListItemButton selected={activeName == href}>
						<ListItemText
							sx={{ m: 0 }}
							primary={text}
						></ListItemText>
					</ListItemButton>
				</Link>
			</ListItem>
		);
	}, [activeName, href, icon, iconOnly, text]);

	return renderedItem;
};

const useRouterNav = () => {
	const { pathname } = useRouter();

	return pathname;
};

const NavDrawer = ({
	theme,
	isMobileView,
	isMobileMini,
	isWide,
	isOpen,
	onChangeState,
}: {
	theme: Theme;
	isMobileView: boolean;
	isMobileMini: boolean;
	isWide: boolean;
	isOpen: boolean;
	onChangeState: (isOpen: boolean) => void;
}) => {
	const setTheme = useSetRecoilState(globalTheme);
	const switchTheme = useCallback(() => {
		setTheme((old) => (old == darkTheme ? lightTheme : darkTheme));
	}, [setTheme]);

	const activeElement = useRouterNav();

	const thisWidth = isMobileMini
		? drawerWidthMobile
		: isWide
		? drawerWidthWide
		: drawerWidth;

	return (
		<Drawer
			sx={{
				width: thisWidth,
				flexShrink: 0,
				top: 50,
			}}
			PaperProps={{ sx: { top: 50, height: "calc(100% - 50px)" } }}
			variant={isMobileView ? "temporary" : "permanent"}
			anchor="left"
			open={isOpen || !isMobileView}
			onClose={() => onChangeState(false)}
		>
			<List sx={{ width: thisWidth }}>
				{isMobileMini && (
					<ListItem
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
						onClick={() => onChangeState(true)}
					>
						<FontAwesomeIcon icon={["fas", "bars"]} />
					</ListItem>
				)}
				<Link href="/">
					<ListItem
						sx={{
							p: 0,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<SvgIcon
							shapeRendering="geometricPrecision"
							component={ddnet2}
							sx={{
								width: "100%",
								height: 150,
								maxHeight: thisWidth,
								maxWidth: thisWidth,
								cursor: "pointer",
							}}
							inheritViewBox
						></SvgIcon>
					</ListItem>
				</Link>
				<NavItem
					href="/"
					text="Home"
					iconOnly={isMobileMini}
					icon={["fas", "home"]}
					activeName={activeElement}
				></NavItem>
				<NavItem
					href="/status"
					text="Status"
					iconOnly={isMobileMini}
					icon={["fas", "server"]}
					activeName={activeElement}
				></NavItem>
				<NavItem
					href="/ranks"
					text="Ranks"
					iconOnly={isMobileMini}
					icon={["fas", "ranking-star"]}
					activeName={activeElement}
				></NavItem>
				<NavItem
					href="/releases"
					text="Map releases"
					iconOnly={isMobileMini}
					icon={["fas", "map"]}
					activeName={activeElement}
				></NavItem>
				<NavItem
					href="https://forum.ddnet.org/"
					text="Forum"
					iconOnly={isMobileMini}
					icon={["fas", "comments"]}
					activeName={activeElement}
				></NavItem>
				<NavItem
					href="https://wiki.ddnet.org"
					text="Wiki"
					iconOnly={isMobileMini}
					icon={["fab", "wikipedia-w"]}
					activeName={activeElement}
				></NavItem>
				<NavItem
					href="/downloads"
					text="Downloads"
					iconOnly={isMobileMini}
					icon={["fas", "download"]}
					activeName={activeElement}
				></NavItem>
				<NavItem
					href="/tournaments"
					text="Tournaments"
					iconOnly={isMobileMini}
					icon={["fas", "trophy"]}
					activeName={activeElement}
				></NavItem>
				<NavItem
					href="/skins"
					text="Skin Database"
					iconOnly={isMobileMini}
					icon={["fas", "shirt"]}
					activeName={activeElement}
				></NavItem>
				<NavItem
					href="/stats"
					text="Statistics"
					iconOnly={isMobileMini}
					icon={["fas", "arrow-trend-up"]}
					activeName={activeElement}
				></NavItem>
				<NavItem
					href="/staff"
					text={"Staff & Contact"}
					iconOnly={isMobileMini}
					icon={["fas", "user"]}
					activeName={activeElement}
				></NavItem>
			</List>
			<Stack
				flexDirection={isMobileMini ? "column" : "row"}
				alignItems={"center"}
				sx={{ marginTop: "auto", justifyContent: "center" }}
			>
				<Button
					sx={{
						width: footerIconSize(isMobileMini),
						height: footerIconSize(isMobileMini),
						p: footerIconPad,
						minWidth: footerIconSize(isMobileMini),
					}}
					onClick={switchTheme}
					title={"Toggle theme"}
				>
					<FontAwesomeIcon
						icon={["fas", theme == darkTheme ? "sun" : "moon"]}
						style={{ width: "60%", height: "60%" }}
					/>
				</Button>
				<Link href={"https://github.com/ddnet/"}>
					<Button
						sx={{
							width: footerIconSize(isMobileMini),
							height: footerIconSize(isMobileMini),
							p: footerIconPad,
							minWidth: footerIconSize(isMobileMini),
						}}
						title={"DDNet source code on GitHub"}
					>
						<FontAwesomeIcon
							icon={["fab", "github"]}
							style={{ width: "60%", height: "60%" }}
						/>
					</Button>
				</Link>
				<Link href={"https://ddnet.tw/discord"}>
					<Button
						sx={{
							width: footerIconSize(isMobileMini),
							height: footerIconSize(isMobileMini),
							p: footerIconPad,
							minWidth: footerIconSize(isMobileMini),
						}}
						title={"DDNet's community discord"}
					>
						<FontAwesomeIcon
							icon={["fab", "discord"]}
							style={{ width: "60%", height: "60%" }}
						/>
					</Button>
				</Link>
				<Link
					href={
						"https://store.steampowered.com/app/412220/DDraceNetwork/"
					}
				>
					<Button
						sx={{
							width: footerIconSize(isMobileMini),
							height: footerIconSize(isMobileMini),
							p: footerIconPad,
							minWidth: footerIconSize(isMobileMini),
						}}
						title={"DDNet on steam"}
					>
						<FontAwesomeIcon
							icon={["fab", "steam-symbol"]}
							style={{ width: "60%", height: "60%" }}
						/>
					</Button>
				</Link>
				<Link href={"/feed"}>
					<Button
						sx={{
							width: footerIconSize(isMobileMini),
							height: footerIconSize(isMobileMini),
							p: footerIconPad,
							minWidth: footerIconSize(isMobileMini),
						}}
						title={"RSS feed"}
					>
						<FontAwesomeIcon
							icon={["fas", "rss"]}
							style={{ width: "60%", height: "60%" }}
						/>
					</Button>
				</Link>
			</Stack>
		</Drawer>
	);
};

const Nav = ({ theme, size }: { theme: Theme } & SizeMeProps) => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const isMobileView = size.width <= mobileSwitchWidth;
	//
	return (
		<>
			{isMobileView && (
				<NavDrawer
					isMobileMini={true}
					isWide={false}
					isMobileView={false}
					isOpen={true}
					onChangeState={setDrawerOpen}
					theme={theme}
				></NavDrawer>
			)}
			<NavDrawer
				isMobileMini={false}
				isWide={size.width >= wideSwitchSize}
				isMobileView={isMobileView}
				isOpen={drawerOpen}
				onChangeState={setDrawerOpen}
				theme={theme}
			></NavDrawer>
		</>
	);
};

const AppWithNav = ({ Component, pageProps, size }: AppProps & SizeMeProps) => {
	const theme = useRecoilValue(globalTheme);

	const isMobile = size.width <= mobileSwitchWidth;
	const drawActualWidth = isMobile
		? drawerWidthMobile
		: size.width >= wideSwitchSize
		? drawerWidthWide
		: drawerWidth;
	const paddingContent =
		size.width <= mobileSwitchWidth ? (size.width <= 600 ? 0 : 3) : 10;

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar
				position="relative"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, height: 50 }}
			>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						Clipped drawer
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Nav theme={theme} size={size}></Nav>
				<Box
					component="main"
					sx={{
						flexGrow: 1,
						p: paddingContent,
						pt: 0,
						pb: 0,
						mt: -1,
						width:
							"calc(100% - " + drawActualWidth.toString() + "px)",
						maxWidth: 1300,
						height: "calc(100vh - 50px)",
					}}
				>
					<Component {...pageProps} isMobile={isMobile} />
				</Box>
			</Box>
		</ThemeProvider>
	);
};

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<RecoilRoot>
			<SizeMe>
				{({ size }) => (
					<AppWithNav
						Component={Component}
						{...pageProps}
						size={size}
					></AppWithNav>
				)}
			</SizeMe>
		</RecoilRoot>
	);
};

export default MyApp;
