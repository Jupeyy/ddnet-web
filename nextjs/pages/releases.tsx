import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	CardHeader,
	IconButton,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
	Link,
	SvgIcon,
	Rating,
	TextField,
	Slider,
	Select,
	InputLabel,
	MenuItem,
	FormControl,
} from "@mui/material";
import { Stack } from "@mui/system";
import { nanoid } from "nanoid";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { Waypoint } from "react-waypoint";
import { useRecoilValue } from "recoil";
import TDDNetAppProps from "data/app-props";
import {
	DDNetCard,
	DDNetCardInnerRounded,
	DDNetCardTop,
} from "data/ddnet-card";
import DDNetLink, { DDNetSilentLink } from "data/ddnet-link";
import { globalTheme } from "data/ddnet-theme";
import JSONSvg from "public/json.svg";
import { NextPage } from "next";

const tiles = [
	"BONUS",
	"BOOST",
	"CHECKPOINT_FIRST",
	"CRAZY_SHOTGUN",
	"DEATH",
	"DFREEZE",
	"DOOR",
	"DRAGGER",
	"EHOOK_START",
	"HIT_END",
	"JETPACK_START",
	"JUMP",
	"LASER_STOP",
	"NPC_START",
	"NPH_START",
	"OLDLASER",
	"PLASMAE",
	"PLASMAF",
	"PLASMAU",
	"POWERUP_NINJA",
	"SOLO_START",
	"STOP",
	"SUPER_START",
	"SWITCH_TIMED",
	"SWITCH",
	"TELE_GRENADE",
	"TELE_GUN",
	"TELE_LASER",
	"TELECHECK",
	"TELECHECKIN",
	"TELEIN",
	"TELEINEVIL",
	"TELEINHOOK",
	"TELEINWEAPON",
	"THROUGH_ALL",
	"THROUGH",
	"TUNE",
	"WALLJUMP",
	"WEAPON_GRENADE",
	"WEAPON_RIFLE",
	"WEAPON_SHOTGUN",
];

const servers = [
	"Novice",
	"Moderate",
	"Brutal",
	"Insane",
	"Dummy",
	"DDmaX",
	"Oldschool",
	"Solo",
	"Race",
	"Fun",
];

type TMapRelease = {
	name: string;
	website: string;
	thumbnail: string;
	web_preview: string;
	type: string;
	points: number;
	difficulty: number;
	mapper: string;
	release: string;
	width: number;
	height: number;
	tiles: Array<string>;
};

const releaseCardWidth = 345;

const MapReleaseCard = ({ mapRelease }: { mapRelease: TMapRelease }) => {
	const itemUniqueness = useMemo(() => nanoid(), []);
	return (
		<DDNetCardInnerRounded
			sx={{
				width: "100%",
				maxWidth: releaseCardWidth,
				flexShrink: 0,
				mr: 1,
				ml: 1,
			}}
		>
			<CardHeader
				action={<IconButton aria-label="settings"></IconButton>}
				title={
					<>
						<DDNetSilentLink href={"/maps/" + mapRelease.name}>
							{mapRelease.name}
						</DDNetSilentLink>
					</>
				}
				subheader={
					<>
						{mapRelease.release}
						{" by "}
						{mapRelease.mapper
							.split(" & ")
							.map((val, index, arr) => (
								<React.Fragment
									key={
										itemUniqueness +
										"mapperKey" +
										index.toString()
									}
								>
									<DDNetLink href={"/mappers/" + val}>
										{val}
									</DDNetLink>
									{index < arr.length - 1 ? " & " : ""}
								</React.Fragment>
							))}
					</>
				}
			/>
			<CardContent
				sx={{
					pt: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Typography variant="body2" color="text.secondary">
					<DDNetLink href={"/ranks/" + mapRelease.type.toLowerCase()}>
						{mapRelease.type + " Server"}
					</DDNetLink>
					{", Difficulty: "}
					<Rating
						value={mapRelease.difficulty}
						readOnly
						sx={{ fontSize: 12 }}
					/>
					{", Points: " + mapRelease.points}
				</Typography>
			</CardContent>
			<CardMedia
				component="img"
				height="194"
				image={mapRelease.thumbnail}
				alt={mapRelease.name}
			/>
			<CardContent sx={{ display: "flex", flexWrap: "wrap" }}>
				{mapRelease.tiles.map((val, index) => (
					<img
						key={itemUniqueness + "maprelImg" + index.toString()}
						src={"/tiles/" + val + ".png"}
						style={{ height: 30, width: 30, flexShrink: 0 }}
					></img>
				))}
			</CardContent>
			<CardActions disableSpacing></CardActions>
		</DDNetCardInnerRounded>
	);
};

const MapReleases: NextPage = ({ isMobile }: TDDNetAppProps) => {
	const [mapReleases, setMapReleases] = useState<Array<TMapRelease>>([]);

	const [maxMapLoad, setMaxMapLoad] = useState(10);
	const [mapLoadOffset, setMapLoadOffset] = useState(0);

	const tileSelectIconSize = isMobile ? 40 : 30;

	const theme = useRecoilValue(globalTheme);

	useEffect(() => {
		async function getData() {
			const res = await fetch("/releases/maps.json");
			const data = await res.json();
			setMapReleases(data);
		}
		getData();
	}, []);

	const marksPoints = useMemo(() => {
		let offset = 0;
		const res: { value: number; label: string }[] = [];
		while (offset <= 50) {
			res.push({ value: offset, label: offset.toString() });
			offset += 10;
		}
		return res;
	}, []);

	const [searchedMap, setSearchedMap] = useState<{
		search: string;
		stars: number;
		pointRange: number[];
		tiles: string[];
		notiles: string[];
		server: string;
	}>({
		search: "",
		stars: -1,
		pointRange: [0, 50],
		tiles: [],
		notiles: [],
		server: "",
	});
	const itemUniqueness = useMemo(() => nanoid(), []);

	const filteredReleases = useMemo(() => {
		return mapReleases
			.sort((val1, val2) => -val1.release.localeCompare(val2.release))
			.filter(
				(val) =>
					val.name
						.toLowerCase()
						.includes(searchedMap.search.toLowerCase()) &&
					(searchedMap.stars == -1 ||
						val.difficulty == searchedMap.stars) &&
					val.points >= searchedMap.pointRange[0] &&
					val.points <= searchedMap.pointRange[1] &&
					searchedMap.tiles.filter(
						(valT) =>
							val.tiles.find((valTF) => valT == valTF) !=
							undefined
					).length == searchedMap.tiles.length &&
					searchedMap.notiles.filter(
						(valT) =>
							val.tiles.find((valTF) => valT == valTF) ==
							undefined
					).length == searchedMap.notiles.length &&
					(searchedMap.server == "" ||
						searchedMap.server.toLowerCase() ==
							val.type.toLowerCase())
			);
	}, [
		mapReleases,
		searchedMap.notiles,
		searchedMap.pointRange,
		searchedMap.search,
		searchedMap.server,
		searchedMap.stars,
		searchedMap.tiles,
	]);

	const releasesRendered = useMemo(() => {
		const realLoadOffset =
			mapLoadOffset >= filteredReleases.length
				? Math.floor((filteredReleases.length - 1) / 10) * 10
				: mapLoadOffset;
		const res = filteredReleases
			.filter(
				(val, index) =>
					index >= realLoadOffset &&
					index < maxMapLoad + realLoadOffset
			)
			.map((val, index) => (
				<MapReleaseCard
					key={itemUniqueness + "maprelease" + index.toString()}
					mapRelease={val}
				></MapReleaseCard>
			));
		if (res.length > 0)
			res.push(
				<Waypoint
					key={itemUniqueness + "waypoint" + res.length.toString()}
					onEnter={() => setMaxMapLoad(maxMapLoad + 10)}
				></Waypoint>
			);
		return res;
	}, [filteredReleases, itemUniqueness, mapLoadOffset, maxMapLoad]);

	const markSteps = useMemo(
		() =>
			filteredReleases.length < 700
				? filteredReleases.length < 200
					? 30
					: 100
				: 300,
		[filteredReleases.length]
	);

	const marks = useMemo(() => {
		let offset = 0;
		const res: { value: number; label: string }[] = [];
		while (offset < Math.floor(filteredReleases.length / 10) * 10) {
			res.push({ value: offset, label: offset.toString() });
			offset += markSteps;
		}
		return res;
	}, [filteredReleases.length, markSteps]);

	return (
		<>
			<Head>
				<title>DDRaceNetwork - Map releases</title>
			</Head>
			<DDNetCardTop>
				<CardHeader title={"Map releases"} />
				<CardContent>
					<Stack>
						<Link href={"/releases/feed"}>
							<Button
								title={"Map release RSS feed"}
								variant="text"
							>
								<FontAwesomeIcon
									icon={["fas", "rss"]}
									style={{
										width: 20,
										height: 20,
										marginRight: 8,
									}}
								/>
								You can subscribe to the feed to get updated
								about new map releases.
							</Button>
						</Link>{" "}
						<Link href={"/releases/maps.json"}>
							<Button
								title={"Map release RSS feed"}
								variant="text"
								sx={{ mt: 1 }}
							>
								<SvgIcon
									shapeRendering="geometricPrecision"
									component={JSONSvg}
									sx={{
										width: 20,
										height: 20,
										mr: 1,
									}}
									viewBox="0 0 160 160"
								></SvgIcon>
								All map release infos are also available in JSON
								format.
							</Button>
						</Link>{" "}
					</Stack>
					<Typography sx={{ mt: 1 }}>
						Planned Map Releases are listed on{" "}
						<DDNetLink
							href={"https://discordapp.com/invite/85Vavs"}
						>
							Discord
						</DDNetLink>
						. All DDNet maps can be download from{" "}
						<DDNetLink href={"https://github.com/ddnet/ddnet-maps"}>
							GitHub
						</DDNetLink>
						,{" "}
						<DDNetLink href={"https://maps.ddnet.tw/compilations/"}>
							our compilations
						</DDNetLink>{" "}
						or{" "}
						<DDNetLink href={"https://maps.ddnet.tw/"}>
							as single files
						</DDNetLink>
						.
					</Typography>
				</CardContent>
				<CardActions disableSpacing></CardActions>
			</DDNetCardTop>
			<DDNetCard>
				<CardContent
					sx={{
						display: "flex",
						alignItems: "center",
						flexWrap: "wrap",
						flexDirection: "row",
					}}
				>
					<TextField
						label="Map name"
						variant="outlined"
						sx={{ m: 1, minWidth: 400, marginRight: 10 }}
						onChange={(
							event: React.ChangeEvent<HTMLInputElement>
						) =>
							setSearchedMap((old) => {
								return { ...old, search: event.target.value };
							})
						}
					></TextField>
					<div
						style={{
							flexGrow: 1,
							marginRight: 10,
							flexBasis: 200,
						}}
					>
						<FormControl sx={{ m: 1, minWidth: 120 }}>
							<InputLabel id="map-server-select">
								Server type
							</InputLabel>
							<Select
								labelId="map-server-select"
								id="map-server-select-id"
								defaultValue={searchedMap.server}
								label="Server type"
								sx={{ minWidth: 200 }}
								onChange={(e) =>
									setSearchedMap((old) => {
										let newVal = e.target.value as string;
										if (newVal == "All") newVal = "";
										return {
											...old,
											server: newVal,
										};
									})
								}
							>
								{["All"].concat(servers).map((val, index) => (
									<MenuItem
										key={
											itemUniqueness +
											"map-search" +
											index.toString()
										}
										value={val}
									>
										{val}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</div>
					<div style={{ flexGrow: 1, marginRight: 10 }}>
						<Typography>Difficulty</Typography>
						<Rating
							value={
								searchedMap.stars == -1 ? 0 : searchedMap.stars
							}
							onChange={(e, val) =>
								setSearchedMap((old) => {
									return { ...old, stars: val ?? -1 };
								})
							}
						/>
					</div>
					<div
						style={{
							flexGrow: 1,
							marginLeft: 18,
							marginRight: 15,
							flexBasis: 300,
						}}
					>
						<Typography>
							Amount of maps to skip in this list
						</Typography>
						<Slider
							defaultValue={0}
							step={markSteps}
							getAriaValueText={(index) =>
								(index * 100).toString()
							}
							disabled={marks.length <= 1}
							marks={marks}
							min={0}
							max={
								Math.floor((filteredReleases.length - 1) / 10) *
								10
							}
							valueLabelDisplay="auto"
							onChangeCommitted={(
								event: Event,
								value: number | number[]
							) =>
								setMapLoadOffset(
									typeof value == "number" ? value : value[0]
								)
							}
						/>
					</div>
					<div
						style={{
							flexGrow: 1,
							marginLeft: 18,
							marginRight: 15,
							flexBasis: 200,
						}}
					>
						<Typography>Points range</Typography>
						<Slider
							getAriaLabel={() => "Points range"}
							defaultValue={searchedMap.pointRange}
							onChangeCommitted={(e, value) =>
								setSearchedMap((old) => {
									return {
										...old,
										pointRange:
											typeof value == "number"
												? [0, value]
												: [value[0], value[1]].sort(
														(a, b) => a - b
												  ),
									};
								})
							}
							getAriaValueText={(value) => value.toString()}
							max={50}
							min={0}
							marks={marksPoints}
							valueLabelDisplay="auto"
						/>
					</div>
					<div
						style={{
							flexGrow: 1,
							marginRight: 10,
							flexBasis: "100%",
							display: "flex",
							flexWrap: "wrap",
							maxWidth: !isMobile ? 500 : undefined,
						}}
					>
						{tiles.map((val, index) => {
							const doesInclude = searchedMap.tiles.includes(val);
							const doesNoTileInclude =
								searchedMap.notiles.includes(val);
							return (
								<img
									key={
										itemUniqueness +
										"maprelFilterImg" +
										index.toString()
									}
									src={"/tiles/" + val + ".png"}
									style={{
										height: tileSelectIconSize,
										width: tileSelectIconSize,
										margin: 1,
										flexShrink: 0,
										cursor: "pointer",
										filter:
											doesInclude || doesNoTileInclude
												? ""
												: "grayscale(100%)",
										outline:
											doesInclude || doesNoTileInclude
												? "1px solid " +
												  (doesNoTileInclude
														? theme.palette
																.secondary.main
														: theme.palette.primary
																.main)
												: "",
									}}
									onClick={() =>
										setSearchedMap((old) => {
											return {
												...old,
												tiles:
													!old.tiles.includes(val) &&
													!old.notiles.includes(val)
														? [...old.tiles, val]
														: old.notiles.includes(
																val
														  )
														? old.tiles
														: old.tiles.filter(
																(fval) =>
																	fval != val
														  ),
												notiles:
													old.tiles.includes(val) &&
													!old.notiles.includes(val)
														? [...old.notiles, val]
														: old.notiles.includes(
																val
														  )
														? old.notiles.filter(
																(fval) =>
																	fval != val
														  )
														: old.notiles,
											};
										})
									}
								></img>
							);
						})}
					</div>
				</CardContent>
				<CardContent
					sx={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "start",
					}}
				>
					{releasesRendered}
				</CardContent>
			</DDNetCard>
		</>
	);
};

export default MapReleases;
