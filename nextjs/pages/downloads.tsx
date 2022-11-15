/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useState } from "react";
import { NextPage } from "next";
import { DDNetCard, DDNetCardInner, DDNetCardTop } from "data/ddnet-card";
import { Button, CardContent, CardHeader, Stack } from "@mui/material";
import DDNetLink from "data/ddnet-link";
import {
	DownloadVersion,
	DownloadDownloadFiles,
	DownloadChangeLog,
	DDNetChangeLogLi,
} from "data/downloads";
import { OldDownloads } from "data/downloads-old";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";

const Downloads: NextPage = () => {
	const [expanded, setExpanded] = useState(false);
	const handleExpandClick = useCallback(() => {
		setExpanded((old) => !old);
	}, []);

	return (
		<>
			<Head>
				<title>DDRaceNetwork - Downloads</title>
			</Head>
			<DDNetCardTop>
				<CardHeader title={"Downloads"}></CardHeader>
				<CardContent sx={{ p: 0 }}>
					<DownloadVersion version={"16.3.1"} date={"2022-08-21"}>
						<DownloadDownloadFiles>
							<br />
							<Stack>
								<DDNetLink href="DDNet-16.3.1-win32.zip">
									Windows&nbsp;32bit
								</DDNetLink>
								<DDNetLink href="DDNet-16.3.1-win64.zip">
									Windows&nbsp;64bit
								</DDNetLink>
								<DDNetLink href="DDNet-16.3.1-linux_x86.tar.xz">
									Linux&nbsp;x86
								</DDNetLink>
								<DDNetLink href="DDNet-16.3.1-linux_x86_64.tar.xz">
									Linux&nbsp;x86-64
								</DDNetLink>
								<DDNetLink href="DDNet-16.3.1-macos.dmg">
									macOS (arm64&nbsp;&amp;&nbsp;x86-64)
								</DDNetLink>
								<DDNetLink href="DDNet-16.3.1.tar.xz">
									Source
								</DDNetLink>
							</Stack>
						</DownloadDownloadFiles>
						<DownloadChangeLog>
							<strong>Changelog</strong>
							<Stack>
								<DDNetChangeLogLi>
									[Client]&nbsp;
									<strong>
										Faster PNG loading, warn about
										incompatible PNGs
									</strong>
									&nbsp;[<strong>Jupeyy, heinrich5991</strong>
									]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Client]&nbsp;
									<strong>
										Console completion for tunings and
										renames (`binds`, `tunes`)
									</strong>
									&nbsp;[<strong>Robyt3</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Client]&nbsp;
									<strong>
										Loading screen for map loading
									</strong>
									&nbsp;[<strong>Jupeyy</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Editor]&nbsp;
									<strong>Add map_replace_area tool</strong> [
									<strong>sctt</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Server]&nbsp;
									<strong>
										Time checkpoint improvements
									</strong>
									&nbsp;[<strong>c0d3d3v</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Client] Improve rendering of demo list
									icons [<strong>Robyt3</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Client] Include config info in help
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Client] Add appearance settings page [
									<strong>c0d3d3v</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Client] Allow multiple addresses per server
									in the serverbrowser [
									<strong>heinrich5991</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Client] Add Esperanto language [
									<strong>dannyhpy</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Client] Fix finding server executable
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Client] Abort skin downloads too
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Client] Add Discord SDK for macOS arm64
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Client] Fix dump_local_console
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Client] Validate snapshot size and member
									variables and demo snapshots [
									<strong>Robyt3</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Client] Fix game freezing up on duplicate
									snapshot [<strong>Fireball</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Client+Server] Improve snapshot performance
									[<strong>Robyt3</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Client] Check fully transparent quads with
									negative alpha [<strong>Jupeyy</strong> (on
									phone)]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Client] Fix backlog page switching between
									local/remote consoles [
									<strong>Robyt3</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Client] Fix client crash on Linux on freeze
									bar [<strong>c0d3d3v</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Client] Improve UI inputs [
									<strong>c0d3d3v</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Client] Rename `cl_show_quads` to
									`cl_showquads` to remove binds
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Client] Fix text alignment in popups [
									<strong>bluesky</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Editor] Only apply size and color if
									changed, when editing multiple layers [
									<strong>Robyt3</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Editor] Envelope preview: fix last point
									not being editable, fix movement of envelope
									points in Info mode (Ctrl+I) [
									<strong>Robyt3</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Editor] Fix tab and F10 keys working
									inconsistently in editor [
									<strong>Robyt3</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Editor] Fix editor crashes [
									<strong>Robyt3</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Editor] Fix editor image delete [
									<strong>Jupeyy</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Editor] Fix buffer-overflow in editor on
									shift-clicking brush [
									<strong>Robyt3</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Editor] Fix shift-leftclick-drag with empty
									selection to delete
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Editor] Reset selected quads when switching
									layers
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Server] Option to remove weak hook &amp;
									bounce (`sv_no_weak_hook_and_bounce`, for
									KoG testing) [<strong>Jupeyy</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Server] Fix another swap bug [
									<strong>c0d3d3v</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Server] Fix player input player flags
									translation with 0.7 client [
									<strong>Robyt3</strong>]
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Server] Only announce DDNet birthday once
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									[Server] Fix MySQL compilation
								</DDNetChangeLogLi>
							</Stack>
							and a lot of smaller fixes, see the&nbsp;
							<DDNetLink href="https://github.com/ddnet/ddnet/compare/16.2.2...16.3.1">
								full list of git changes
							</DDNetLink>
						</DownloadChangeLog>
					</DownloadVersion>
					<DDNetCardInner>
						<CardHeader title={"Other Downloads"}></CardHeader>
						<CardContent sx={{ pt: 0, ml: 3 }}>
							<Stack>
								<DDNetLink href="https://store.steampowered.com/app/412220/DDraceNetwork/">
									Steam package
								</DDNetLink>
								<DDNetLink href="https://packages.debian.org/search?keywords=ddnet">
									Debian packages
								</DDNetLink>
								<DDNetLink href="https://packages.ubuntu.com/search?keywords=ddnet&searchon=names&section=all">
									Ubuntu packages
								</DDNetLink>
								<Stack flexDirection={"row"}>
									<DDNetLink href="https://aur.archlinux.org/packages/?O=0&SeB=nd&K=ddnet&outdated=&SB=n&SO=a&PP=50&do_Search=Go">
										ArchLinux AUR packages
									</DDNetLink>
									,&nbsp;
									<DDNetLink href="https://wiki.archlinux.org/index.php/DDRaceNetwork">
										ArchWiki
									</DDNetLink>
								</Stack>
								Nightly Builds:
								<Stack flexDirection={"row"}>
									<DDNetLink href="DDNet-nightly-win32.zip">
										Windows&nbsp;32-bit
									</DDNetLink>
									,&nbsp;
									<DDNetLink href="DDNet-nightly-win64.zip">
										Windows&nbsp;64-bit
									</DDNetLink>
									,&nbsp;
									<DDNetLink href="DDNet-nightly-linux_x86.tar.xz">
										Linux&nbsp;x86
									</DDNetLink>
									,&nbsp;
									<DDNetLink href="DDNet-nightly-linux_x86_64.tar.xz">
										Linux&nbsp;x86-64
									</DDNetLink>
									,&nbsp;
									<DDNetLink href="DDNet-nightly-macos.dmg">
										macOS
									</DDNetLink>
									&nbsp;(
									<DDNetLink href="DDNet-nightly.log">
										build log
									</DDNetLink>
									)
								</Stack>
								Hashes for download verification:
								<Stack flexDirection={"row"}>
									<DDNetLink href="md5sums.txt">
										MD5
									</DDNetLink>
									,&nbsp;
									<DDNetLink href="sha256sums.txt">
										SHA256
									</DDNetLink>
								</Stack>
								Git repositories:
								<Stack flexDirection={"row"}>
									<DDNetLink href="https://github.com/ddnet/ddnet">
										DDNet Client &amp; Server
									</DDNetLink>
									,&nbsp;
									<DDNetLink href="https://github.com/ddnet/ddnet-maps">
										Maps
									</DDNetLink>
									&nbsp;(including configs,&nbsp;
									<DDNetLink href="https://github.com/ddnet/ddnet-maps/archive/master.zip">
										download all maps
									</DDNetLink>
									),&nbsp;
									<DDNetLink href="https://github.com/ddnet/ddnet-scripts">
										Scripts
									</DDNetLink>
									,&nbsp;
									<DDNetLink href="https://github.com/ddnet/ddnet-libs">
										Libs
									</DDNetLink>
								</Stack>
								Raw list of all DDNet ranks, team ranks and
								maps:
								<Stack flexDirection={"row"}>
									<DDNetLink href="/stats/ddnet-stats.zip">
										CSV
									</DDNetLink>
									,&nbsp;
									<DDNetLink href="/stats/ddnet-sql.zip">
										SQL
									</DDNetLink>
								</Stack>
								Map download server:
								<Stack flexDirection={"row"}>
									<DDNetLink href="https://maps2.ddnet.tw/">
										List of all maps
									</DDNetLink>
									,&nbsp;
									<DDNetLink href="https://maps2.ddnet.tw/compilations/">
										Map compilations
									</DDNetLink>
								</Stack>
								<Stack flexDirection={"row"}>
									<DDNetLink href="http://www.foveon.de/sonstiges/opusdrop/index.htm">
										OpusDrop
									</DDNetLink>
									&nbsp;(Convert sound files to Opus for DDNet
									maps)
								</Stack>
							</Stack>
						</CardContent>
					</DDNetCardInner>
				</CardContent>
			</DDNetCardTop>
			<DDNetCard>
				<CardHeader title={"Old Versions"}></CardHeader>
				<Button onClick={handleExpandClick} sx={{ ml: 1 }}>
					<FontAwesomeIcon
						icon={["fas", !expanded ? "angle-down" : "angle-up"]}
					/>
				</Button>
				<CardContent sx={{ p: 0 }}>
					{expanded && <OldDownloads></OldDownloads>}
				</CardContent>
			</DDNetCard>
		</>
	);
};

export default Downloads;
