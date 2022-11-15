/* eslint-disable react/no-unescaped-entities */
import { Stack } from "@mui/material";
import React from "react";
import DDNetLink from "./ddnet-link";
import {
	DownloadVersion,
	DownloadDownloadFiles,
	DownloadChangeLog,
	DDNetChangeLogLi,
} from "./downloads";

export const OldDownloads = () => {
	return (
		<>
			<DownloadVersion version={"16.2.2"} date={"2022-07-11"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-16.2.2-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-16.2.2-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-16.2.2-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-16.2.2-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-16.2.2-macos.dmg">
							macOS (arm64&nbsp;&amp;&nbsp;x86-64)
						</DDNetLink>
						<DDNetLink href="DDNet-16.2.2.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] <strong>DDNet HUD</strong> [
							<strong>c0d3d3v</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] <strong>Controller support</strong>&nbsp;[
							<strong>Robyt3</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>Add community skin option</strong> [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>Prediction of switch state toggles</strong>
							&nbsp;[
							<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Use STUN to check network status when connecting
							</strong>
							&nbsp;[<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server]&nbsp;
							<strong>HTTP masterserver registering</strong>
							&nbsp;[
							<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Reworked draggers, turrets, hooks always
							visible [<strong>c0d3d3v</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Video Recorder: Don't ever skip any frame [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Use ellipsis in scoreboard for too long
							names [<strong>c0d3d3</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Added live freeze in comfort entities [
							<strong>louis</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix prediction input timing [
							<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix input getter for dummy [
							<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix dummy tick handling [
							<strong>sjrc6</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove ui_scale [<strong>Robyt3</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove cl_nameplates_ha(_size) [
							<strong>Robyt3</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix ingame menu button behavior when
							holding mouse button [<strong>Robyt3</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Prevent UI lockups [<strong>Robyt3</strong>
							]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Always render nameplate of spec char [
							<strong>c0d3d3v</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix pos1 only scrolling up one page in
							console [<strong>Robyt3</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Lower max allowed FSAA on OpenGL [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix toggle with multiple chains [
							<strong>Robyt3</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove cl_show_console [
							<strong>Robyt3</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix video rendering being too fast [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add basic driver version parsing for Vulkan
							[<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Update tooltip text after changing language
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Support nesting CUI clipping regions and
							other UI elements [<strong>Robyt3</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove cl_reset_wanted_weapon_on_death [
							<strong>Chairn</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix crash because of hooks on non-DDNet
							servers [<strong>c0d3d3v</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix deleting envelopes not updating sounds
							[<strong>Ravie &amp; c0d3d3v</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Practice: Unfreeze when rescued, reset
							speed when teleporting [<strong>kiw-q</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Practice: Unfreeze after teleporting [
							<strong>hus3h</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add `/cptime name` to get checkpoint times
							of another player (for speedrunning)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix laser bounce physics on Putt Putt [
							<strong>c0d3d3v</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix server loading map twice on startup [
							<strong>Zwelf</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fixed non-determinism in physics while
							keeping old behavior [<strong>c0d3d3v</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Swap: Also swap no-collision and no-hook
							status [<strong>c0d3d3v</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Prevent time overflow [
							<strong>c0d3d3v</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Weapon-specific shields: Send normal
							shields to old clients [<strong>c0d3d3v</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Explicitly delete game server from server
							list on shutdown [<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Make capital /WHISPER work
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Remove sv_checkpoint_save
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Paginate bans
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Make input handling teehistorian-friendly [
							<strong>Zwelf</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Update unicode script generation [
							<strong>Chairn</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client+Server] Support outdated Windows 7 again
							(hopefully)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Tooling] Add integration test script and coverage
							map [<strong>ChillerDragon</strong>]
						</DDNetChangeLogLi>
					</Stack>
					and a lot of smaller fixes, see the&nbsp;
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/16.1...16.2.2">
						full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"16.1"} date={"2022-05-20"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-16.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-16.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-16.1-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-16.1-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-16.1-macos.dmg">
							macOS (arm64&nbsp;&amp;&nbsp;x86-64)
						</DDNetLink>
						<DDNetLink href="DDNet-16.1.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Add option to change default eyes when joining
								server
							</strong>
							&nbsp;[<strong>sjrc6</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>Tooltips to explain some settings</strong>
							&nbsp;[
							<strong>Ryozuki</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server]&nbsp;
							<strong>Enable swapping in team 0</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server]&nbsp;
							<strong>
								Shields that take away specific weapons
							</strong>
							&nbsp;[<strong>Jupeyy, Cellegen, Konsti</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client+Server]&nbsp;
							<strong>
								Unify logging infrastructure so that F1 shows
								all
							</strong>
							&nbsp;[<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client+Server]&nbsp;
							<strong>
								Switch new players to DDNet config dir, support
								Teeworlds as fallback
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Adjustable hook collision line alpha [
							<strong>sjrc6</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix whisper sending/receiving
							differentiation [<strong>srdante</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Respect GPU type better [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Better forced viewport handling (Vulkan) [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix Vulkan on dual core CPUs [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Allow onfly FSAA change under Vulkan [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Display super with "super" string in
							scoreboard
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Unselect text after ctrl-u
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix wrong quad offset for (not caused by
							transparent) flushes (Vulkan, OpenGL 3.3) [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Improve demo slice popup, minor refactoring
							of UI/menus [<strong>Robyt3</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix flashing colors in console when
							scrolling up continuously [<strong>Robyt3</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove cl_predict_ddrace [
							<strong>c0d3d3v</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove cl_show_quads standard bind
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Ignore F5 key press when ingame menu is
							open
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix pistol sounds for BW servers [
							<strong>Nouaa</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Allow freecam to center on world border [
							<strong>c0d3d3v</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix local hookline direction when mouse is
							exactly centered [<strong>sjrc6</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix ghost color [<strong>c0d3d3v</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Check if the resolution is "really" not
							supported before applying desktop resolution [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Try default opengl settings first, when
							vulkan fails [<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix editor animation offset time being
							affected by the animation speed factor [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Ctrl+Right click tile to select layer [
							<strong>ChillerDragon</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Do not release the hooks if you swap [
							<strong>c0d3d3v</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix /top5 inconvenience / local ranking
							problem [<strong>srdante</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix SQL duplicated top and player team top
							5 [<strong>srdante</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix websocket crash on client connect [
							<strong>srdante</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix angle calculation for 0.7 clients [
							<strong>c0d3d3v</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Make super ignore livefreeze [
							<strong>Ryozuki</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Don't allow infinite shotgun bounce
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Allow sv_show_others_default in map
							settings
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Continuously test MySQL too instead of just
							MariaDB
						</DDNetChangeLogLi>
					</Stack>
					and a lot of smaller fixes, see the&nbsp;
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/16.0.3...16.1">
						full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"16.0"} date={"2022-04-04"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-16.0.3-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-16.0.3-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-16.0.3-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-16.0.3-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-16.0.3-macos.dmg">
							macOS (arm64&nbsp;&amp;&nbsp;x86-64)
						</DDNetLink>
						<DDNetLink href="DDNet-16.0.3.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								New Vulkan graphics renderer for more FPS
								(enable in Graphics Settings)
							</strong>
							&nbsp;[<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>Improved demo renderer performance</strong>
							&nbsp;[
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								New players join Tutorial servers by default
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Replace browser icons with font icons
							</strong>
							&nbsp;[<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] <strong>Quad knife tool</strong> [
							<strong>Ravie</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client+Server]&nbsp;
							<strong>Exception handling on Windows</strong>
							(Crash reports in %APPDATA%\Teeworlds\dumps) [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Automatic font size in menu [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Make hook collision line size adjustable [
							<strong>sjrc6</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Automatically select search string on
							Ctrl+F [<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add optional save_replay parameter
							(filename) [<strong>simpygirl</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Improvement of the automatic completion of
							player names in chat [<strong>c0d3d3v</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix duplicated team messages with dummy [
							<strong>c0d3d3v</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix binds, fix sounds and demo playback for
							violent gametypes [<strong>Kaffeine</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix sound bug on large maps (like Back in
							Time 3) [<strong>c0d3d3v</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix dummy connect on some vanilla servers [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Show key presses in nameplates [
							<strong>c0d3d3v</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Update local hook collision line every
							frame [<strong>sjrc6</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Allow the ghost to carry any weapon [
							<strong>c0d3d3v</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Show correct server address when connecting
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Drop non-RGBA image-support in skins [
							<strong>Chairn</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix listbox item double click behaviour [
							<strong>Robyt3</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix bindings with modifiers [
							<strong>Kaffeine</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Support saving any size binds
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] HTTP Serverbrowser: Quit faster
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove the totally unsafe editor undo
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix client freezes if server sends funny
							ticks [<strong>ChillerDragon, heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix wrong warnings with saved config file
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix integer overflow in CHud when server
							time exceeds around 248 days [
							<strong>Robyt3</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Set gfx_opengl_major 1 as default on 32bit
							Windows
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Don't print binds into F1
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix player death effect color [
							<strong>srdante</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Do not mute if spam protection is off [
							<strong>ChillerDragon</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Write log to disk on assert [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix specteam 1 not showing teammates while
							spectating/freecam in solo [<strong>sjrc6</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix logging into rcon with dummy [
							<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] No chat messages for live freeze
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Make spawn position independent of players
							in other teams
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Record player_ready event in Teehistorian [
							<strong>Zwelf</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix recording server-side demos [
							<strong>c0d3d3v</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix laser clipping [
							<strong>Kaffeine</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Tools] Fixed bad DataReader loop on
							map_replace_image [<strong>sctt</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client+Server] Support NO_COLOR environment
							variable
						</DDNetChangeLogLi>
					</Stack>
					and a lot of smaller fixes, see the&nbsp;
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/15.9.1...16.0.3">
						full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"15.9"} date={"2022-02-15"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-15.9.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-15.9.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-15.9.1-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-15.9.1-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-15.9.1-macos.dmg">
							macOS (arm64&nbsp;&amp;&nbsp;x86-64)
						</DDNetLink>
						<DDNetLink href="DDNet-15.9.1.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Server] <strong>Live freeze tiles</strong>
							(cannot move or jump, but can use hook and weapons)
							[<strong>GiuCcc</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server]&nbsp;
							<strong>
								Add teleport/tp chat command to teleport
								yourself
							</strong>
							to another player or spectated location (requires
							/practice)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Add new icons and macOS installer graphics
							</strong>
							&nbsp;[<strong>Ravie</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add windowed fullscreen mode on Windows [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Support 128 players in server browser [
							<strong>fokkonaut</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Adjustable prediction margin
							(cl_prediction_margin) [<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Improve projectile prediction [
							<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Use power button to quit (hopefully more
							clear)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Implement "reset" command to reset specific
							config values to default value
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add cl_port, cl_dummy_port, cl_contact_port
							for ISPs that throttle specific ports
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove compatible version filter [
							<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Display more relevant version numbers on
							command line
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix bullet rendered through walls [
							<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix ARM-specific crash in macOS when moving
							screen [<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix console line offsets when resizing [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix changing resolution in fullscreen [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Improved double click handling [
							<strong>Robyt3</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Reduce default ambient volume to 30
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Update score HUD immediately when switching
							dummy
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Allow multiple commands when adding vote in
							UI
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Allow "zoom" command to take smaller/larger
							values
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Improve super prediction
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Improve preformance when listing
							directories [<strong>Robyt3</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Lower chance of losing config files [
							<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Explicitly disable notch area on Macbook
							Pro for fullscreen
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Support enter and escape keys in editor
							when confirming save
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Don't react to server settings shortcuts
							when dialog is open
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] 255 jump tile acts as no double jump [
							<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fail database queries faster [
							<strong>Zwelf</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Improve database writes during shutdown and
							bad network [<strong>Zwelf</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Extend and fix DDNet Server launcher on
							macOS
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Also switch rescue tees when swapping
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Implement sv_min_team_size to prevent too
							small teams counting as team finishes
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Default players to being AFK when joining
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix warnings to only warn every 3 seconds
							when touching start line
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Reload map when changing sv_sixup [
							<strong>Robyt3</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client+Server] Handle signals (SIGINT, SIGTERM) [
							<strong>Robyt3</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client+Server] Fix lots of undefined behavior [
							<strong>Robyt3</strong>]
						</DDNetChangeLogLi>
					</Stack>
					and a lot of smaller fixes, see the&nbsp;
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/15.8.1...15.9.1">
						full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"15.8"} date={"2021-12-28"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-15.8.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-15.8.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-15.8.1-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-15.8.1-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-15.8.1-macos.dmg">
							macOS (arm64&nbsp;&amp;&nbsp;x86-64)
						</DDNetLink>
						<DDNetLink href="DDNet-15.8.1.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Support GUI/Cmd key and use it as equivalent to
								Ctrl in default shortcuts
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Add cl_run_on_join to set command to execute
								when joining server (e.g. "showall 1")
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Fix Unicode path/link/argument handling
							</strong>
							&nbsp;[<strong>Robyt3</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove ping filter in serverbrowser
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Adopt vanilla scrollbar colors and sizes [
							<strong>Robyt3</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Center timer in HUD
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add buttons to open settings file and
							config directory
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Lower worst/best case frame time
							calculations [<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix text selection cursor position after
							moving window to different screen or resizing
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Support cl_video_show_direction 2 to show
							your own key presses when recording
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove gfx_asyncrender_old on macOS to
							crash less when resizing/moving window
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] No wasd moving when dialog is open
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix enter behavior when creating new folder
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix save typing when server settings are
							open
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[All]&nbsp;
							<strong>
								Skip UTF-8 BOM on all read text files
							</strong>
							&nbsp;[<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[All] Support M1 CPUs natively on macOS (Website
							build only, Steam doesn't support native M1 yet,
							without Discord integration on M1)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[All] Add console_enable_colors 0 to turn off colors
							[<strong>Kaffeine</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[All] Use dbg_asserts in Release builds again [
							<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server]&nbsp;
							<strong>
								Don't shut down server when SQL queries haven't
								finished
							</strong>
							&nbsp;[<strong>Zwelf</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] More fixes for /swap
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Make /rescue handle switch freeze too
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Consider initial chat delays as normal
							mutes, implement unmuteid
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix badly cut-off user names when name is
							too long [<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix crash with switchers
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Don't clear client version on map change [
							<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Some fixes for super
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add target clientid to antibot's
							OnHammerHit [<strong>fokkonaut</strong>]
						</DDNetChangeLogLi>
					</Stack>
					and a lot of smaller fixes, see the&nbsp;
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/15.7...15.8.1">
						full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"15.7"} date={"2021-11-26"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-15.7-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-15.7-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-15.7-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-15.7-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-15.7-osx.dmg">macOS</DDNetLink>
						<DDNetLink href="DDNet-15.7.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Make opening files for reading on windows
							case insensitive (again) [<strong>Robyt3</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Increase console backlog size from64 KB to
							1 MB
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix cutting demos from KoG server
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix steam names being cut off inside utf8
							codepoints [<strong>Robyt3</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Make laser doors show correctly when
							spectating other players [<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Improve performance of SnapFindItem for
							extended item types [<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix spacing in HUD settings for 5:4
							resolution
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix serverinfo json parser to work with
							system libjsonparser
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Don't overflow network statistics in debug
							view
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix search bar cursor position with empty
							text [<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix killmessage-colored player names [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Allow zooming any distance in editor
							(cl_limit_max_zoom_level 0)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Use wasd to navigate in editor [
							<strong>ChillerDragon</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Server can disable dummy functionality in
							client [<strong>fokkonaut</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] sv_plasma_per_sec 0 disables firing
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Optimize entity sending [
							<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Tools] Fix map_extract
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Tools] Lots of TSAN, UBSAN, ASAN fixes [
							<strong>Jupeyy, heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Tools] Support ASAN manual memory poisoning for
							pool allocators [<strong>Learath2</strong>]
						</DDNetChangeLogLi>
					</Stack>
					and a lot of smaller fixes, see the&nbsp;
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/15.6.2...15.7">
						full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"15.6"} date={"2021-11-07"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-15.6.2-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-15.6.2-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-15.6.2-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-15.6.2-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-15.6.2-osx.dmg">macOS</DDNetLink>
						<DDNetLink href="DDNet-15.6.2.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Lots of prediction improvements, predict switch
								tiles
							</strong>
							&nbsp;[<strong>trml, Ryozuki</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>Select and copy from ingame console</strong>
							&nbsp;[<strong>σℓí♡, Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>Make emoticons smoother</strong> [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Improve fullscreen and allow ingame resolution
								changes
							</strong>
							&nbsp;[<strong>Jupeyy, vainiovano</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Add colors for console window (cl_show_console 1
								on Windows)
							</strong>
							&nbsp;[<strong>σℓí♡, Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Display colors for strong / weak hook
							states [<strong>σℓí♡</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Allow zooming to levels (e.g. zoom5) [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Improved debug graphs [
							<strong>ChillerDragon</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add ctrl+backspace for ingame console [
							<strong>σℓí♡</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Update server list silently [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add a new failure log level to the HTTP
							module [<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add inp_translated_keys 1 to use local
							keyboard layout
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Disable chat sounds when recording without
							chat
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Better entity explanations at bottom of
							screen [<strong>HamidReza585</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add /team -1 to join first empty team [
							<strong>gerdoe-jr</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Try to fix start line skipping [
							<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Allow antibot to get more insight into
							network [<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Make teehistorian easier to reproduce [
							<strong>Zwelf</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Split long system messages into two lines [
							<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
					</Stack>
					and a lot of fixes, see the&nbsp;
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/15.5.4...15.6.2">
						full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"15.5"} date={"2021-06-20"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-15.5.4-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-15.5.4-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-15.5.4-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-15.5.4-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-15.5.4-osx.dmg">macOS</DDNetLink>
						<DDNetLink href="DDNet-15.5.4.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Add client-side HTTP server info (instantaneous,
								secure, raw data from
								<DDNetLink href="https://master1.ddnet.tw/ddnet/15/servers.json">
									https://master1.ddnet.tw/ddnet/15/servers.json
								</DDNetLink>
								)
							</strong>
							&nbsp;[<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Predict tune zones for characters, allow
								unpredicted tune zone settings for projectiles
								and lasers
							</strong>
							&nbsp;[<strong>TsFreddie</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Steam: Support connecting to hostname
							</strong>
							(for example
							<DDNetLink href="steam://run/412220//ger2.ddnet.tw:8303/">
								steam://run/412220//ger2.ddnet.tw:8303/
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;<strong>Implement HSL sliders</strong>{" "}
							[<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add hookcollision color changeable in HUD [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove "Show only supported" resolutions
							switch from graphics tab [<strong>ardadem</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove texture quality config [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] HiDPI-aware resolution list [
							<strong>TsFreddie</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix some buttons in menus [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Set all Intel GPU Windows players to OpenGL
							2.0 by default [<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix composed binds involving F-keys [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Differentiate better between window modes [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix out of list clip clickable/hoverable
							items [<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Center more tees in graphics [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix auto-reconnect while in game [
							<strong>ChillerDragon</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix parsing an ipv6 address without port [
							<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Avoid spawn effect being clipped for
							spawning player [<strong>TsFreddie</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix serverbrowser crash [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Make pixel alignment numerical more robust
							when scrolling [<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Compress IPv6 string representations
							according to RFC5952 [<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix crash when sorting empty friend list [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix X11 notifications [
							<strong>Maiski</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Differenciate between width and height for
							body part [<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add better support for compose binds in
							demo menu [<strong>ChillerDragon</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Print GPU info into console [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix infinite loop in editor when changing
							height [<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Make sure ctrl+shift+s works same as
							clicking UI [<strong>ChillerDragon</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Disable swap properly since it's still
							broken
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix multiple crashes with super
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add new tune: hammer_hit_fire_delay
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix team rank updating not working [
							<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Lower save/swap punishment
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Tools] Fix duplicate uuid index in maps edited by
							tools [<strong>Patiga</strong>]
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/15.4...15.5.4">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"15.4"} date={"2021-03-25"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-15.4-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-15.4-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-15.4-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-15.4-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-15.4-osx.dmg">macOS</DDNetLink>
						<DDNetLink href="DDNet-15.4.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								More colors from components in consoles
							</strong>
							&nbsp;[<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Add dummy_reset and remove +resetdummy
							</strong>
							&nbsp;[<strong>ardadem</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Don't predict other teams [
							<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Center tees in more places in UI (Tee
							settings, Scoreboard, Spectator board) [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix scoreboard overlapping [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Make statboard work with up to 32 players [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Lower dilate threshold [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix top time not being displayed on old
							servers [<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix chat refind skins [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove gfx_show_warnings
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove deepfly binds
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix initially sent zoom level with dummy
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Don't allocate the windows console by
							default [<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Automatically use HTTPS compression if the
							server supports it [<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix legacy server info with reserved slots
							and num_players over 15
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix x_ skins so that they can't be
							chosen/shown
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] No negative player count in server browser
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Set search field active when opening vote
							menu ingame
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Keep demos sorted the same way after
							deleting one
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix chat reapeated messages [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Don't leak memory on Windows in logger
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Only externalize images with vanilla names
							[<strong>Patiga</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Don't toggle Destructive when pressing
							ctrl-shift-d
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Prevent crash when setting image to None
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix automapper crash
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server]&nbsp;
							<strong>
								Local ranking info viewable ingame (/top5,
								/rank)
							</strong>
							&nbsp;[<strong>Zodiac</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server]&nbsp;
							<strong>
								Add swap functionality for teams (/swap)
							</strong>
							&nbsp;[<strong>Zodiac</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Inform player while loading when save
							exists, but they don't belong to the team [
							<strong>Zwelf</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] /times: Show country rank is from [
							<strong>partially heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix ": " being included in "*** : abc"
							server messages [<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add initial delay to talking in chat [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add a way to block people from chatting on
							VPNs [<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Improve performance of /top5points query,
							remove negative /top5points since it makes no sense
							anyway
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Get rid of MySQL C++ connector as
							dependency, disable C++ exceptions [
							<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Remove fifo file on shutdown
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Forgot to actually send Sv_RecordLegacy to
							old clients [<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Increase max ban duration from 1 month to 1
							year
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Don't call our temporary global bans "bans
							for life"
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix crash on autoban unsupported client [
							<strong>fokkonaut</strong>]
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/15.3.2...15.4">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"15.3"} date={"2021-02-20"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-15.3.2-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-15.3.2-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-15.3.2-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-15.3.2-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-15.3.2-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-15.3.2.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Add Discord rich presence (except on Linux x86)
							</strong>
							&nbsp;[<strong>Ryozuki &amp; heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Allow online resizing of window on Windows
							</strong>
							&nbsp;[<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;<strong>Menu tabs animations</strong>{" "}
							[<strong>Banana090</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>Color picker in settings</strong> [
							<strong>Banana090</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>Better sliders and lists</strong> [
							<strong>Banana090</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Indicate strength of hook in nameplates
								(ctrl-shift-d)
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Freeview mouse moves faster when zoomed out
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Don't predict input from dummy when it's
							paused
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Keep showing last checkpoint after kill
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Use map download URL from info2.ddnet.tw
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fixed mouse jumping after losing focus [
							<strong>Banana090</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Notify about vote when logged in
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix prediction with global collision off
							tiles and tunings [<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Check skin/sprite images for correctness [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Unlimited texture names [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove hardcoded zoom level limits
							(cl_limit_max_zoom_level) [<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Filter invalid kill messages [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] First Arabic client translation [
							<strong>.Yukki</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add F-DDrace entities [
							<strong>fokkonaut</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Update ingame BlockWorlds entities [
							<strong>Brokecdx</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Don't sort server browser on entry adding,
							but once per update call [<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Respect possible particle size increase, of
							worst case rotation [<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Dynamically size scoreboard title
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove ddnet info tmp file always when
							quitting [<strong>Ryozuki</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix freezing with text boxes [
							<strong>TsFreddie</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Move PNG loading in SkinDL to fetch thread
							to prevent graphics lags
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add more default binds and binds in
							settings (h for dummy hammer, up/down for deepfly
							on/off, / for chat command)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] HTTP Map Download: Time out faster
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Increase Intel driver blocklist range [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Run server in background on Windows
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix client crash with too many items
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix up/down keys in demo browser
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Log duplicate messages in console
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Port some refactor from teeworlds-0.7 [
							<strong>Kaffeine</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Allow reordering commands in the server
							settings editor [<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Make dragging quads in the editor more
							sensitive to small mouse deltas [
							<strong>timakro</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server]&nbsp;
							<strong>
								Make netclipping of entities and events respect
								shown distance
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server]&nbsp;
							<strong>
								Display median time instead of average
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Reset practice after team saved and got
							killed
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add (un)endless_hook commands
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] rank/teamrank: Display how much better you
							are
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add /top5team s?i command to show all team
							ranks of a player [<strong>Zwelf</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Check finish of team after player joins
							spectators
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Allow UTF8 ban reasons
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Remove SQL locks [<strong>Zwelf</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Handle switch number 0
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Improve error messages when you can't join
							team
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix storing load/save result in main thread
							without incrementing usage count [
							<strong>Zwelf</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Synchronize database thread via atomic_bool
							instead of use_count from shared pointer [
							<strong>Zwelf</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Keep veto right after joining dummy with
							lower ID
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix server crash with too many items
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix centisecs rounding in ranks
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Show sixup client info in status [
							<strong>nobody-mb</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Also display DDNet version for 0.7 clients
							in status [<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Disable ninja jetpack when player has
							telegun
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Everywhere] Lots of minor fixes, thanks to
							everyone!
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/15.2.5...15.3.2">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"15.2"} date={"2020-12-29"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-15.2.5-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-15.2.5-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-15.2.5-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-15.2.5-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-15.2.5-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-15.2.5.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] <strong>New chat look</strong> [
							<strong>Banana090</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>Show friends on spectate tab</strong>&nbsp;[
							<strong>ardadem</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Warn new players about name with points
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;<strong>Smooth dynamic camera</strong>{" "}
							[<strong>TsFreddie</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;<strong>Optimize UI rendering</strong>{" "}
							[<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client+Server]&nbsp;
							<strong>
								Fix lots of undefined behaviour, out-of-bounds
								accesses, memory leaks
							</strong>
							&nbsp;[
							<strong>
								Jupeyy, Learath2, Patiga, Zwelf, axblk, ...
							</strong>
							]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client+Server] Remove CRC in all possible places [
							<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client+Server] Show hours in more places
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix and change text cursor [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Improve Call Vote menu [
							<strong>Banana090</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Use 0.7 gameskins [<strong>Zatline</strong>
							]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add comfort entities assets [
							<strong>louis</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add refresh button for skins [
							<strong>Jupeyy, timakro</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix laser prediction for non-DDRace mods [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Make animations more consistent with high
							float values [<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Improve text alignment [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Modulize skins, particles, emoticons and
							game assets [<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add GUI &amp; Game sound volume sliders
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Make gfx_quad_as_triangle 0 default for
							performance <strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add hint for disabling debug mode [
							<strong>TsFreddie</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add dbg_gfx command [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add more video modes, reorder them for
							consistency
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Make initial borderless work again
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Set libnotify icon (Linux) [
							<strong>yangfl</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Don't make width depend on localized text
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Update demo browser on demo save [
							<strong>BannZay</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix button rendering in "Render demo"
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Speed up sorting [
							<strong>Jupeyy, Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix skin load [<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Use pointer directly for tile layer
							building [<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix hook chains [<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix combined player/ping sorting [
							<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix weapon muzzle texture cutoff [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix overlapping of combined binds with
							modifiers [<strong>Banana090</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix IME state softlock under Linux and
							MacOS [<strong>TsFreddie</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Sort skins without case
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix skin x_ check
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Always embed map sounds [
							<strong>Patiga</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Improve usability of server settings
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Allow zooming in further
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Update ddmax_freeze [
							<strong>saltyElefant</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Update winter_main.rules [
							<strong>mind</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix selection of None value in auto rules
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Offset env pos of sound sources when
							appending maps [<strong>Patiga</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server]&nbsp;
							<strong>
								Show all local maps in votes (add_map_votes)
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Kick-voting someone doesn't kill locked
							team
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Support starting without wordlist.txt
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Disallow player name changes when muted [
							<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Disallow more commands with testing mode [
							<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Consider emoticon, chat, vote as not-afk
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Render afk emote instead of chat emote [
							<strong>ardadem</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Use rest instead of string in some commands
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Increase size for name_ban messages [
							<strong>jao</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Detect more whitespace characters in names
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix random_map and random_unfinished_map
							with SQlite [<strong>Zwelf</strong>]
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/15.1.3...15.2.5">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"15.1"} date={"2020-10-15"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-15.1.3-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-15.1.3-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-15.1.3-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-15.1.3-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-15.1.3-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-15.1.3.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>Add menu background maps</strong> [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>Add changeable assets in settings</strong>
							&nbsp;[
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>Sharper graphics ingame</strong>
							(gfx_opengl_texture_lod_bias) [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add directory buttons in settings [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Set IME window position &amp; prevent input
							from fighting with IME [<strong>TsFreddie</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Join identical chat lines to prevent spam [
							<strong>Ryozuki</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] HUD: Show days and hours in game time,
							don't show wrong deciseconds
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix score/time alignment in scoreboard [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Server browser: Remove pure server filter,
							add space for countries
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Server browser: Add clear button to server
							address field
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Print errors when writing files failed
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Grab focus more agressively when starting
							client
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Handle rcon command completion properly
							with dummy
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add hover for demo browser [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add background music volume slider
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add explicit button for current map as
							background
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix ctrl+shift+d so that it doesn't move
							tee again
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix finding server for running it inside of
							start menu
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove failed downloaded files more
							consistently
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Don't log skin downloading progress
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Handle PNG read errors
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix entities for some modifications [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Make sure turning dynamic camera off in
							settings works
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Print out modifiers when unbinding a bind [
							<strong>plsplsplslol</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix empty lines in chat
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor]&nbsp;
							<strong>
								Add new renderer, looks more consistent with
								ingame
							</strong>
							&nbsp;[<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor]&nbsp;
							<strong>
								Improve dilate and auto apply dilate on embedded
								texture in editor
							</strong>
							&nbsp;[<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Properly set sound envelope offsets for
							sound sources [<strong>Patiga</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Add scrollbar to auto rules list [
							<strong>Ryozuki</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix multiple layer selection for groups [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix Texture UV coordinates [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Save maps more deterministically [
							<strong>Patiga</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Network] Create ALLOW_X_SKINS game info flag (for
							mods)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Implement /showothers 2 to show own team
							members only
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Ship more default maps: LearnToPlay, Sunny
							Side Up, Tsunami
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Inform players that they are in team
							already when trying to join team
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix spectating so that you can't spectate
							yourself [<strong>Fireball</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix laser_damage tune with 0.7 client [
							<strong>pure-luck-999</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix 0.7 player vote creator id [
							<strong>pure-luck-999</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix last character when showing IPs in rcon
							[<strong>Zwelf</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix show_ips on non-SQL servers
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/15.0.5...15.1.3">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"15.0"} date={"2020-09-23"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-15.0.5-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-15.0.5-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-15.0.5-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-15.0.5-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-15.0.5-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-15.0.5.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								On-demand skin downloader to see all skins from
								<DDNetLink href="/skins/">
									Skin Database
								</DDNetLink>
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								New start menu adapted from Teeworlds0.7
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Optimize loading glyphs from font file
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Scale graphics textures more nicely [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Support hovering in many menus [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Refresh server browser immediately when
							updated info arrives
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Refresh server browser faster
							(br_max_requests 100)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Sort spectator view by team, then name (not
							score)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Show entities on all server types [
							<strong>BannZay &amp; Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix mapres for new graphics renderer [
							<strong>mind</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix some 5:4/4:3 rendering in demo &amp;
							recorder menus
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix entity text [<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Don't close the client on error in video
							recorder
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add some more space for Countries &amp;
							Types in DDNet/KoG tabs
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove borderfix/add/rem tools we don't
							need anymore
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add unmasked entities for all mods [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Ask for confirmation before placing border
							tiles [<strong>Fireball</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Select game layer by default
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server &amp; Client]&nbsp;
							<strong>
								Update libwebsockets and make client able to use
								websockets
							</strong>
							&nbsp;[<strong>QingGo</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Don't use server name when storing saves in
							database [<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Print SQlite statements [
							<strong>Zwelf</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Allow to use config_retrieve on whole
							directory [<strong>BannZay</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] map_convert_07: Check for width/height 0
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Optimization: Only receive new packets when
							we know they are waiting
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Remove sv_team_lock command [
							<strong>BannZay</strong>]
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/14.7.1...15.0.5">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"14.7"} date={"2020-09-08"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-14.7.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-14.7.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-14.7.1-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-14.7.1-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-14.7.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-14.7.1.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Allow joining and inviting others via Steam
								friend list
							</strong>
							&nbsp;[<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Update mapres for the new graphics renderer
							</strong>
							&nbsp;[<strong>mind</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>Add demo video recorder</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix some broken unicode strings [
							<strong>TsFreddie</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix game hanging on spectating person
							change [<strong>BannZay, Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix front.png [<strong>Soreu</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Don't time out so often when using HTTP
							downloads
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix proof circle position
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix duplicate teamranks
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Improve database performance
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/14.6.2...14.7.1">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"14.6"} date={"2020-09-05"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-14.6.2-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-14.6.2-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-14.6.2-videorecorder-win64.zip">
							Windows&nbsp;64bit (with Video Recorder)
						</DDNetLink>
						<DDNetLink href="DDNet-14.6.2-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-14.6.2-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-14.6.2-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-14.6.2.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								OpenGL graphics improvements &amp; fixes
							</strong>
							&nbsp;[<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] <strong>Updated entities</strong> [
							<strong>Soreu</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Add buttons for Kill (k) and Pause (p)
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Only send valid UTF-8 over the network, fixes
								joining server
							</strong>
							&nbsp;[<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Use the correct name for determining ranks in
								server browser
							</strong>
							&nbsp;[<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Load server browser more fairly
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix word wrapping for unicode strings [
							<strong>TsFreddie</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add cl_nameplates_friendmark to see your
							friends more easily [<strong>BannZay</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix mouse interaction when game console is
							open [<strong>BannZay</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Don't show wrong servers in server browser
							[<strong>BannZay</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Allow changing entities text size
							on-the-fly [<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Warn about textures with sizes not
							divisible by 16 [<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix texture destroying [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add platform and arch in console output
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove some confusing settings from
							graphics menu
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix rendering of menu background with dark
							background [<strong>BannZay</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Allow empty max ping filter in server
							browser [<strong>BannZay</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove fallback for Teeworlds' settings.cfg
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Upgrade SDL2 for Linux Steam release,
							fixing Unicode input
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Set search field to active when opening
							file dialog
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix map details layout [
							<strong>BannZay</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix right click on items [
							<strong>BannZay</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix voting for 0.7 clients [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Allow loading from any server independent
							of server it was saved on
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix port in error messages &amp;
							teehistorian [<strong>BannZay, heinrich5991</strong>
							]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Ignore duplicate records when inserting
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/14.5.1...14.6.2">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"14.5"} date={"2020-08-26"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-14.5.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-14.5.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-14.5.1-videorecorder-win64.zip">
							Windows&nbsp;64bit (with Video Recorder)
						</DDNetLink>
						<DDNetLink href="DDNet-14.5.1-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-14.5.1-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-14.5.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-14.5.1.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Sort servers by a combination of players &amp;
								ping by default
							</strong>
							&nbsp;[<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Use player name from Steam API as fallback
							</strong>
							&nbsp;[<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Grab input when starting client
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Enable "Switch weapon on pickup" by default
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Send larger distance when zooming
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Only send pain sound in freeze if fire was
							released [<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix connecting to some servers by adding
							back vanilla maps for compatibility
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Refresh browser on "Indicate map finish"
							click [<strong>BannZay</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Support Linux shared libraries in
							autoupdater
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove panic quit button (use alt-f4
							instead)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Give a more instructive message on DNSBL
							ban (telling players to connect without VPN)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Forbid some more whitespace and
							whitespace-like characters
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/14.4.1...14.5.1">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"14.4"} date={"2020-08-23"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-14.4.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-14.4.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-14.4.1-videorecorder-win64.zip">
							Windows&nbsp;64bit (with Video Recorder)
						</DDNetLink>
						<DDNetLink href="DDNet-14.4.1-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-14.4.1-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-14.4.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-14.4.1.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Support CJK for everyone, improve font
							</strong>
							&nbsp;[<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>Add back skins by Moby Dog</strong>&nbsp;[
							<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Don't bother Steam users with red update
							text anymore
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add welcome instructions about how to kill
							(k) and pause game (q)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Enable showing other players' key presses
							by default
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Ignore clan of friends by default
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add ctrl-u to delete entire line in text
							fields
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Disable SDL IME on Windows to improve
							Chinese input
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add tele checkpoint number to debug screen
							(ctrl-shift-d)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add +resetdummy [<strong>ardadem</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix memory leak when loading map in editor
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Allow switching weak/strong with saving and
							loading
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Ship map_convert_07 executable, allow
							drag'n'drop
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add ban_region &amp; ban_region_range [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/14.3...14.4.1">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"14.3"} date={"2020-08-18"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-14.3.3-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-14.3.3-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-14.3.3-videorecorder-win64.zip">
							Windows&nbsp;64bit (with Video Recorder)
						</DDNetLink>
						<DDNetLink href="DDNet-14.3.3-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-14.3.3-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-14.3.3-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-14.3.3.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Remove skins without clear licensing
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Add function to show health and armor in
								nameplates
							</strong>
							&nbsp;[<strong>sirius1242</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Improved dummy switching [
							<strong>Fireball</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix prediction when chatting while
							shooting/walking [<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix 0.7 players not making sounds when
							hooking others [<strong>Fireball</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Limit zooming out to prevent crashes
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Client message color option in HUD settings
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Truncate UTF8 map names correctly in
							scoreboard
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Arrow keys for navigation
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Support .map file drag-and-drop to open map
							in editor
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server]&nbsp;
							<strong>
								SQLite database instead of file based ranks
							</strong>
							&nbsp;[<strong>Zwelf</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix the same token being generated for each
							client [<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix votes for 0.7 clients [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Show free view for 0.7 clients [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix legacy 64 player serverinfo don't send
							duplicate packets
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/14.2...14.3.3">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"14.2"} date={"2020-07-10"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-14.2-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-14.2-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-14.2-videorecorder-win64.zip">
							Windows&nbsp;64bit (with Video Recorder)
						</DDNetLink>
						<DDNetLink href="DDNet-14.2-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-14.2-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-14.2-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-14.2.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>Smooth Zoom with cubic polynomial</strong>
							(cl_smooth_zoom_time, 0 to disable) [
							<strong>Ryozuki &amp; heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Only write non-defaulted config values to
								settings_ddnet.cfg
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>Various translations updated</strong>&nbsp;[
							<strong>
								Ryozuki, barsik, SunnyPistache, Pipou, TortiLeq,
								Cellegen, Jeroen, gigi7187,3edcxzaq1, FeaRZ
							</strong>
							]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server]&nbsp;
							<strong>
								Find available port with new default sv_port 0
							</strong>
							&nbsp;[<strong>MikiGamer</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove some skins where we don't own
							intellectual property
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Make zoom reset respect cl_default_zoom
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Send zoom status for dummy too
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Don't reset chat on map change
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix video recorder
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Tell why DNSBL isn't allowing to vote
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix shown distance for widescreen
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Keep hook when loading [
							<strong>Zwelf</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix doors resetting on restart on solo
							server [<strong>Zwelf</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Don't load movement and pause state when
							rescuing [<strong>Zwelf</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix storing finish on solo server with
							practice enabled [<strong>Zwelf</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Spam protection on /rank [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/14.1...14.2">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"14.1"} date={"2020-06-30"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-14.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-14.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-14.1-videorecorder-win64.zip">
							Windows&nbsp;64bit (with Video Recorder)
						</DDNetLink>
						<DDNetLink href="DDNet-14.1-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-14.1-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-14.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-14.1.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Client tells server its zoom level, so no need
								for /showall 1
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Option to ignore emotes of specific players
							(graphic by Ravie)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix showothers for spectated character [
							<strong>Ryozuki</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] cl_show_hoolk_coll_own/other 2 to always
							show hook collision line without sending it to
							server
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server]&nbsp;
							<strong>
								Fix shipped server so that 0.6 players can join
								again
							</strong>
							&nbsp;[<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] cl_showothers 2 to show only your own team
							members in solo
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/14.0.3...14.1">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"14.0"} date={"2020-06-29"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-14.0.3-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-14.0.3-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-14.0.3-videorecorder-win64.zip">
							Windows&nbsp;64bit (with Video Recorder)
						</DDNetLink>
						<DDNetLink href="DDNet-14.0.3-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-14.0.3-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-14.0.3-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-14.0.3.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Server]
							<b>
								Support Teeworlds 0.7 clients on DDNet servers
							</b>
							[<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] <b>Thread safe SQL interaction</b>[
							<strong>Zwelf</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] <b>Show outline of tees in spec</b>[
							<strong>Ryozuki</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]
							<b>Remember savecodes in ddnet-saves.txt</b>
							(in config dir)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]
							<b>
								Add Learn button which opens the DDNet wiki in
								browser
							</b>
							[<strong>Ryozuki</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]
							<b>New introduction text when starting client</b>
							(please
							<DDNetLink href="https://github.com/ddnet/ddnet/tree/master/data/languages">
								translate
							</DDNetLink>
							if you can)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Don't reset zoom when using timeline in
							demo
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Make demo render the right clan as green [
							<strong>ZombieToad</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix highlighting of wrong player [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Reset hook &amp; collision in prediction
							after kill
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Stop playing map sound when demo player is
							paused
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Workaround for client crash on predicted
							explosion [<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Only forbid resizing when videorecorder is
							recording (Linux-only)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[VideoRec] Improve video recorder quality default,
							persist settings
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Add Entites off sign to front layer [
							<strong>Konsti</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Make ctrl-s/ctrl-shift-s/ctrl-l etc work
							everywhere in editor
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix team rejoin logic for solo servers
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Save active weapon with /rescue [
							<strong>d3fault</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Ensure that team state is always sent [
							<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix /spec + super
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] teehistorian: Track whether clients join
							via the 0.7 protocol [<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Remove sv_spectator_votes
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add note that autoexec_server.cfg gets
							overwritten by updates
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Document which MySQL/MariaDB versions we
							require
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix rotated stoppers [
							<strong>ardadem</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Build] Fix git revision updating for out-of-tree
							builds [<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/13.2.2...14.0.3">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"13.2"} date={"2020-05-31"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-13.2.2-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-13.2.2-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-13.2.2-videorecorder-win64.zip">
							Windows&nbsp;64bit (with Video Recorder)
						</DDNetLink>
						<DDNetLink href="DDNet-13.2.2-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-13.2.2-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-13.2.2-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-13.2.2.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Server] Allow /practice mode for teams: Enables
							/rescue, but no rank possible
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] /load without params to show some info
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] /unlock as an alias for /lock 0
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] UPnP support for forwarding ports easier
							(-DUPNP=ON when compiling to enable) [
							<strong>Ryozuki</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Small prediction fixes/update [
							<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Make server info more reliable again [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Extend Antibot library interface [
							<strong>heinrich5991, Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Use a consistent PRNG on all platforms [
							<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Send DDNet version early in the connection
							process [<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Print name of requester when saving/loading
							team [<strong>Chairn</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix empty ammo when loading savegame
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix "Tee keeps crying when holding fire" [
							<strong>fokkonaut</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix storing incomplete game uuid on /save [
							<strong>Zwelf</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] BlockWorlds Entities [
							<strong>MikiGamer</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Make dummy hold fire with cl_dummy_hammer 1
							[<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix sound on empty chat message
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix crash in prediction when touching
							switch tile with number 0
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Improvements &amp; fixes [
							<strong>BannZay</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Don't count freshly loaded map as modified
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Write Automapper version, was not
							initialized [<strong>Patiga</strong>]
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/13.1...13.2">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"13.1"} date={"2020-04-30"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-13.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-13.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-13.1-videorecorder-win64.zip">
							Windows&nbsp;64bit (with Video Recorder)
						</DDNetLink>
						<DDNetLink href="DDNet-13.1-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-13.1-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-13.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-13.1.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Linux and Mac OS X: Show chat notifications
							on desktop [<strong>ardadem</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add dummy prediction [<strong>trml</strong>
							]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix DDNet connection for showing servers
							&amp; news on Mac OS X
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] cl_showchat_2 to always show large chat
							area
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix memory leaks and related [
							<strong>Ryozuki</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix whispering to players with quotes (by
							escaping, for example for player "nameless tee"
							whisper with `/w "\"nameless tee\"" Hey there`
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Remove setting ammo for freeze to 0 [
							<strong>fokkonaut</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Rename antibot to ddnet-antibot and install
							it on cmake [<strong>Ryozuki</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[VideoRec] Update ffmpeg lib version [
							<strong>sirius1242</strong>]
						</DDNetChangeLogLi>

						<DDNetChangeLogLi>
							[Client] recording with broken maps [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add gfx_highdpi [<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix cl_showrecord with dummy
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] cl_unpredicted_shadow -1 to show shadow not
							even in debug mode
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Allow editing multiple tile layer props [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add support for dynamically loading an
							antibot module [<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add reason to mute [
							<strong>trafilaw</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[VideoRec] Add option to pause video rendering when
							demo playing is paused [<strong>sirius1242</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[VideoRec] Add option to only start new demo on
							connect while automatically recording demos [
							<strong>sirius1242</strong>]
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/13.0.2...13.1">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"13.0"} date={"2020-04-10"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-13.0.2-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-13.0.2-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-13.0.2-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-13.0.2-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-13.0.2-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-13.0.2.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Add spectate_closest [
							<strong>d3fault</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix demo recording with broken maps [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add gfx_highdpi [<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix cl_showrecord with dummy
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] cl_unpredicted_shadow -1 to show shadow not
							even in debug mode
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Allow editing multiple tile layer props [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add support for dynamically loading an
							antibot module [<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add reason to mute [
							<strong>trafilaw</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[VideoRec] Add option to pause video rendering when
							demo playing is paused [<strong>sirius1242</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[VideoRec] Add option to only start new demo on
							connect while automatically recording demos [
							<strong>sirius1242</strong>]
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/12.9.2...13.0.2">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"12.9"} date={"2020-02-22"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-12.9.2-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-12.9.2-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-12.9.2-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-12.9.2-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-12.9.2-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-12.9.2.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Video Recorder (not shipped yet) [
							<strong>HMH &amp; sirius1242</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Check snap to prevent crashing on invalid
							snaps [<strong>ChillerDragon</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Allow filtering by name in status [
							<strong>jao</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Strip spaces in server name in browser [
							<strong>ChillerDragon</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix some race conditions when running
							multiple clients at once
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Eliminate static libcurl dependency on
							Linux [<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Demo] Fix map loading when playing demo [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Demo] Fix emoticons glitching out when going back
							in demo
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Display envelope name in popups [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Optimize editor code to run faster [
							<strong>ChillerDragon</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix rotating rotatable tiles in switch
							layer [<strong>jao</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix envelopes when appending maps [
							<strong>jao</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix del key removing commands while in
							editbox [<strong>archimede67</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Support to run in unison with DDNet7
							servers, map_convert_07 tool
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/12.8.1...12.9.2">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"12.8"} date={"2019-12-22"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-12.8.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-12.8.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-12.8.1-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-12.8.1-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-12.8.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-12.8.1.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Play demo without map file [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Save selected UI settings page [
							<strong>ChillerDragon</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Invert hook coll colors when using
							cl_show_hook_coll_always [<strong>d3fault</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix background colors being set to white [
							<strong>Aerll</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Optimize character evolve function [
							<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Downgrade SDL version to 2.0.8 because of
							performance regression
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Fix automapper skipping tiles when it
							shouldn't [<strong>Aerll</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server]
							<DDNetLink href="https://github.com/ddnet/ddnet/pull/1985">
								Changed MySQL table schema to tell DDNet7 ranks
								from DDNet ones
							</DDNetLink>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Improve serverinfo response performance [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/12.7.3...12.8.1">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"12.7"} date={"2019-10-31"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-12.7.3-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-12.7.3-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-12.7.3-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-12.7.3-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-12.7.3-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-12.7.3.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							<strong>
								[Server] Allow to hammer directly on unfreeze.
								Previously, this was only doable with
								frame-perfect input if you were going to get
								frozen again the next tick. Now, you only have
								to hold your hammer to immediately hammer once
								you get unfrozen.
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Numbers centered for OpenGL 3.3 [
							<strong>Andrii</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add tunezone prediction [
							<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add toggle keyboard shortcuts button to
							demo player [<strong>jao</strong>
							{" & "}
							<strong>eNJi</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Don't highlight window when playing demo
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix keeping tmp replay demo file on map
							change [<strong>archimede67</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix skin reset [<strong>jao</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix player number in server browser if
							server is under attack [<strong>WsYFU</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Don't render your own dummy's afk emote [
							<strong>d3fault</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add cl_dummy_resetonswitch 2 [
							<strong>d3fault</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Demo] Fix className selector in demo player [
							<strong>sirius1242</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Add a saner way to select angles [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix telegun save [<strong>Ryozuki</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Handle 0 star random map votes [
							<strong>jao</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix filescore path [
							<strong>ChillerDragon</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Mark players as afk initially [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix show_ips to show regular formatting
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix crash when switch (un)deep number is 0
							[<strong>jao</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Optimize CCollision::MoveBox
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/12.6.1...12.7.3">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"12.6"} date={"2019-08-02"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-12.6-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-12.6-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-12.6-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-12.6-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-12.6-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-12.6.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] <strong>Add afk emote</strong> [
							<strong>ardadem</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Show map name in scoreboard [
							<strong>ChillerDragon</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Restart required message when changing
							cl_show_console (Windows only) [
							<strong>fokkonaut</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove ingame timer at top
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Render all entities on non-DDNet servers [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix deciseconds not updating in
							spectator/pause [<strong>fokkonaut</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix wrong flag color in scoreboard and
							spectator select menu [<strong>fokkonaut</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix blockZ/infectionZ game mode support [
							<strong>fokkonaut</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix cl_dyncam_min_distance camera spawn [
							<strong>FallenKN</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Correctly embed replacing images [
							<strong>jao</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Apply cl_show_others_alpha to projectiles [
							<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix toggle not working with colors [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Prediction fixes [<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix name/clang width when zooming out [
							<strong>Jupeyy</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add ctrl-k to delete in client console [
							<strong>ChillerDragon</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix zoom if dummy is connected and only one
							is able to zoom [<strong>fokkonaut</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] cl_dummy_restore_weapon config to keep
							hammer after hammerfly [
							<strong>ChillerDragon</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix laser/shotgun prediction on solo
							servers [<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Update to SDL 2.0.10
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Allow server to opt in/out of certain
							workarounds and behaviours [
							<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Force spawn order of teams [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix double pause due to spec [
							<strong>fokkonaut</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix 'several players were found' in /rank [
							<strong>fokkonaut</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Don't advertise reserved slots [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Persist playerflags when using timeout
							protection [<strong>jao</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Return error code on server fail [
							<strong>ChillerDragon</strong>]
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/12.5...12.6">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"12.5"} date={"2019-06-13"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-12.5-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-12.5-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-12.5-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-12.5-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-12.5-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-12.5.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Replay-after-the-fact system [
							<strong>archimede67</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fixed zoom reset when dummy connects [
							<strong>archimede67</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Show play time [<strong>sirius1242</strong>
							]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] ctrl-left/right/delete/u in client console
							[<strong>ChillerDragon</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Improve heuristic to find map to embed in
							demo [<strong>ChillerDragon</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] No longer log unknown UUIDs with debug on [
							<strong>heinrich5991</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Respawn client immediately [
							<strong>d3fault</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] More flexibility for
							sv_server_info_per_second, sv_van_conn_per_second
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix solo prediction with sv_team 3 [
							<strong>trml</strong>]
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/12.4.3...12.5">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"12.4"} date={"2019-05-22"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-12.4.3-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-12.4.3-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-12.4.3-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-12.4.3-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-12.4.3-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-12.4.3.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Unified color system in console (RGB, HSL,
							Value) [<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Bind compound keys (shift, ctrl, alt) [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Prediction fixes [<strong>trml</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] cl_text_entities_size [
							<strong>BannZay</strong>]
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/12.3.1...12.4.3">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"12.3"} date={"2019-04-25"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-12.3.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-12.3.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-12.3.1-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-12.3.1-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-12.3.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-12.3.1.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Revamped prediction, with additional
							prediction: [<strong>trml</strong>]
							<Stack style={{ paddingTop: 5 }}>
								<DDNetChangeLogLi>
									Prediction for laser, shotgun, ninja, fng
									hammer, pickups and ddrace tiles
									(freeze/unfreeze tiles with
									cl_predict_freeze)
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									laser and bullets are rendered when you fire
									them and they don't go through walls (when
									both cl_antiping_grenade and
									cl_antiping_weapons are enabled)
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									Antiping for flags
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									Prediction of dummy input
								</DDNetChangeLogLi>
								<DDNetChangeLogLi>
									An additional smoothing option that attempts
									to make antiping less jumpy
									(cl_antiping_smooth)
								</DDNetChangeLogLi>
							</Stack>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fixed a bug where tees were rendered with
							transparency when spectating [
							<strong>Ryozuki</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Disabled demo shortcuts in console [
							<strong>jao</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Improved prediction for solo and super [
							<strong>Ryozuki</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fixed a bug where you or a partner would be
							in solo after a /load when they shouldn't [
							<strong>Learath2</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fill the DDNet Network Character packet
							with data [<strong>Ryozuki</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Added the option to delete specific
							projectiles on death [<strong>jao</strong>]
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/12.2...12.3.1">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"12.2"} date={"2019-04-20"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-12.2-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-12.2-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-12.2-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-12.2-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-12.2-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-12.2.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Server] <strong>Fixed draggers</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Added the DDNet Network Character [
							<strong>Learath2 / Ryozuki</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server/Client] Now the client knows about other
							players Solo status, therefore fixing some
							prediction bugs. [<strong>Ryozuki</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fixed the score not showing up when joining
							a server using file based records [
							<strong>fokkonaut</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Removed duplicate () on file based records
							/rank, etc
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fixed non-destructive drawing with
							hookthrough shortcut [<strong>jao</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fixed crypto library includes not being
							included [<strong>Learath</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Added color_to_rgb console command
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Added copy & paste functionality to editor
							[<strong>jao</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Added reasonable layer size limits to
							prevent crash [<strong>jao</strong>]
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Removed unmaintained Android code
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/12.1...12.2">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"12.1"} date={"2019-04-10"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-12.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-12.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-12.1-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-12.1-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-12.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-12.1.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Colored ping in scoreboard
							<strong>[Ryozuki]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Color for your clan in scoreboard
							<strong>[Ryozuki]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Console command color_from_rgb to convert
							colors into TW formats
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Handle failures while updating
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add ctrl-a/ctrl-e navigation in console{" "}
							<strong>[ChillerDragon]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix Home/End keys in console
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] cl_mouse_min_distance to keep mouse at a
							minimum distance from center of screen
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Enable gun sound by default again
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Allow faster demo playback
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Notify about chat mentions
							<strong>[jao]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix nondestructive mapping mode with
							hookthroughs <strong>[jao]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] More accurate world offset calculation{" "}
							<strong>[jao]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Display playerflags and DNSBL in rcon
							status command
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Don't show IPs in rcon console by default,
							enable with show_ips 1
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Save telegun on /save
							<strong>[Ryozuki]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Make timestamp consistent for every member
							of team in final ranks
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Display unicode names like 😶 correctly
							when returned from database
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix crash when draggers don't have a number{" "}
							<strong>[jao]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Many minor fixes and improvements
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/12.0.1...12.1">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"12.0"} date={"2019-03-30"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-12.0.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-12.0.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-12.0.1-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-12.0.1-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-12.0.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-12.0.1.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Server browser tab for
							<DDNetLink href="https://qshar.com/">
								KoG servers
							</DDNetLink>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Mark official DDNet &amp; KoG servers with
							a ✓ (graphic by
							<DDNetLink href="https://ddnet.tw/players/-9479--187-M-237-M-171--9479-/">
								┇»MíM«┇
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Autocomplete chat commands starting with /
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix rendering glyphs not in font
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Color authed players in spec
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Don't ask to quit without good reason
							(cl_confirm_quit_time)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Ask to disconnect (dummy) when race time is
							high (cl_confirm_disconnect_time)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Exclude current map on random map votes{" "}
							<strong>[jao]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add vote_unmute and vote_mutes
							<strong>[Ryozuki]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix updating nameban reason
							<strong>[jao]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Don't enforce own votes when moderating{" "}
							<strong>[jao]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Only print team join message when not in
							team already
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Add non-destructive brush drawing mode{" "}
							<strong>[jao]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Add shortcut to add quad/sound at mouse
							position <strong>[jao]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Don't rotate static game tiles and fix
							switch rotation <strong>[jao]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Allow editing texture UV offsets in quad
							properties <strong>[Bojidar]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							As usual, lots of minor fixes
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/11.9...12.0.1">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"11.9"} date={"2019-03-16"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-11.9-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.9-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.9-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-11.9-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-11.9-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-11.9.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Colors for authed players in scoreboard{" "}
							<strong>[Learath2]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix audio on some platforms
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Scoreboard shows time instead of score on
							race server
							<strong>[fokkonaut]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client+Server] Fix map load with long file names
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add exact name ban option
							<strong>[jao]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Uninvite kicked/spectated players from team
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] New server icon with border
							<strong>[daverck]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Automapper: Remove opaque flag before
							checking <strong>[Bojidar]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Remove save group/layer button
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/11.8...11.9">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"11.8"} date={"2019-02-15"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-11.8-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.8-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.8-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-11.8-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-11.8-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-11.8.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Server] Improved weapon input with high ping/jitter{" "}
							<strong>[trml]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Make teleporting to where you look at
							convenient <strong>[jao]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Allow vote-kicking players with same auth
							level <strong>[jao]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Require sv_vote_kick_min only on team 0
							votes <strong>[jao]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Disable unused tiles only for DDNet
							entities <strong>[jao]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] New server icon based on "Game Server" icon
							by Deepz from the Noun Project (Creative Commons
							CCBY)
							<strong>[daverck]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add autoban depending on client version{" "}
							<strong>[ChillerDragon]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server/Client] Merge BW support into IsDDNet{" "}
							<strong>[fokkonaut]</strong>
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/11.7.2...11.8">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"11.7"} date={"2019-01-11"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-11.7.2-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.7.2-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.7.2-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-11.7.2-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-11.7.2-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-11.7.2.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Show markers in demo browser
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>lots of fixes</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/11.6.1...11.7.2">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"11.6"} date={"2018-12-27"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-11.6.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.6.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.6.1-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-11.6.1-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-11.6.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-11.6.1.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Christmas skin event
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Improved networking performance
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fallback for /save when database is
							unreachable
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Remove /modhelp command
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Improve sv_join_vote_delay against vote
							bots
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Add toggle_tune command
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/11.5.1...11.6.1">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"11.5"} date={"2018-12-11"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-11.5.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.5.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.5.1-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-11.5.1-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-11.5.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-11.5.1.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Mapping] Add option to automatically run the
							automapper <strong>[Bojidar]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Save automapper config in map
							<strong>[Bojidar]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Improved Teleport Gun
							<strong>[Ryozuki]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix Race scoreboard ordering for times &gt;
							166 minutes
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Allow to use /pausevoted as normal pause{" "}
							<strong>[ChillerDragon]</strong>
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/11.4.6...11.5.1">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"11.4"} date={"2018-11-02"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-11.4.6-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.4.6-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.4.6-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-11.4.6-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-11.4.6-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-11.4.6.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Editor] Left align menu texts like server settings.{" "}
							<strong>[timakro]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Allow choosing game layer entities for
							different gametypes.
							<strong>[timakro]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Implement brush saving, see
							<DDNetLink href="https://github.com/ddnet/ddnet/issues/1111">
								#1111
							</DDNetLink>
							.
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fixed a crash:
							<DDNetLink href="https://github.com/ddnet/ddnet/issues/1362">
								#1362
							</DDNetLink>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix embedding vanilla images and not
							others.
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Reset scroll when search text changes.
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Mark unused envelopes.
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Updated Chinese translations.
							<strong>[yangfl]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Improve the teleblocker tile, thanks to
							Ravie.
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Update GL and LY flags.
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Small code optimizations.
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Removed unused cl_flow and cl_eventthread.
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Increase max score that can be displayed in
							scoreboard.
							<strong>[fokkonaut]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server/Client] Updated libraries that DDNet depends
							on.
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] DNSBL is now ignored on "empty" servers.
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Map] Add support for extra map items in datafiles.
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/11.4.4...11.4.6">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"11.4"} date={"2018-09-30"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-11.4.4-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.4.4-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.4.4-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-11.4.4-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-11.4.4-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-11.4.4.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							Don't copy alpha when coloring the brush
							<strong>[bojidar-bg]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Optimize automapper a bit
							<strong>[Aerll]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Ability to select multiple quads
							<strong>[Aerll]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fixed a bug where you could not vote on a server
							with spoofed clients
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix crash with FillSelection
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Add a filter for &quot;(connecting)&quot; players
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix cl_nameplates_own with antiping on when
							spectating
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Add a toggle button for brush coloring
							<strong>[bojidar-bg]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							grass_main automapper fix
							<strong>Ravie</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Add some UI for the skin prefix stuff
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix dnsbl initialization
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fixed a segfault (crash)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Limit demo speed to 64 (thanks to fokkonaut for
							report)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix crash when filling selection on
							tele/switch/speedup layers
							<strong>[bojidar-bg]</strong>
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/11.3.1...11.4.4">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"11.3"} date={"2018-08-07"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-11.3.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.3.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.3.1-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-11.3.1-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-11.3.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-11.3.1.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							<strong>
								New gameplay feature: Teleport weapons (gun,
								grenade, laser) and 7 new tiles (on &amp; off
								for each weapon and teleblock) [code by:
								Ryozuki, timakro; graphics by: necropotame,
								forsaken and hi_leute_gll]
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix hidpi resolution issue on macOS
							<strong>[weez15]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Require DNSBL check on /modhelp
							<strong>[Learath2]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>Update /modhelp</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Added skin prefix
							<strong>[fokkonaut]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix votespec on /pause, fixes
							<DDNetLink href="https://github.com/ddnet/ddnet/issues/1193">
								#1193
							</DDNetLink>
							<strong>[ChillerDragon]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Removed a bunch of unused client scripts
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Updated translations to include new strings
							<strong>[rffontenelle]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Updated Brazilian Portuguese translation
							<strong>[rffontenelle]</strong>
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/11.2.1...11.3.1">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"11.2"} date={"2018-06-30"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-11.2.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.2.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.2.1-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-11.2.1-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-11.2.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-11.2.1.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							Add commands for switching pages in console
							<strong>[ChillerDragon]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix unwanted dummy fire
							<strong>[ChillerDragon]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix help for /showall command
							<strong>[ChillerDragon]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix veto <strong>[ZombieToad]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix pause messages
							<strong>[ZombieToad]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix a serverbrowser bug
							<strong>[ZombieToad]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Add a way to call for external moderator help
							(extends /modhelp)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Use a more secure hash function for map downloads
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix dyncam not saving
							<strong>[z6zzz]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix pain emote immunity with jetpack
							<strong>[Piepow]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Add cl_nameplates_own for demo recording
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Allow some key binds in editor when GUI is hidden
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Add new freeze automap rule
							<strong>[ChillerDragon]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							By default, don't embed vanilla images
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/11.1.9...11.2.1">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"11.1"} date={"2018-05-29"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-11.1.9-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.1.9-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.1.9-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-11.1.9-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-11.1.9-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-11.1.9.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Add cl_show_hook_coll_always
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Allow low mousesens
							<strong>[ChillerDragon]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add vote_ban rcon command
							<strong>[ChillerDragon]</strong>
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/11.1.4...11.1.9">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"11.1"} date={"2018-04-15"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-11.1.4-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.1.4-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.1.4-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-11.1.4-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-11.1.4-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-11.1.4.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							<strong>
								New buffer system and text renderer to support
								buffering of HUD, text and map components that
								are displayed ingame
								<em>[Jupeyy]</em>
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Add /pausevoted and /specvoted
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Add /modhelp chat command
							<strong>[Ryozuki]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Chinese translation fixes
							<strong>[QingGo]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Catalan translation fixes
							<strong>[Ryozuki]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Database records for finishes now also save the
							client version
							<strong>[Learath2]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Better integration of teehistorian files
							<strong>[Learath2]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Remove unused inp_grab
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>Some CMake changes</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix a
							<DDNetLink href="https://github.com/ddnet/ddnet/issues/1031">
								UI/UX bug
							</DDNetLink>
							<strong>[Learath2]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Update websockets implementation (required by the
							Debian packaging guideline)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>Fix bundled pnglite</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix bunbled wavpack when system wavpack is available
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Updated instructions for installing dependencies
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix dyncam confusion
							<strong>[Learath2]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							More space for clan name in scoreboard
							<strong>[Learath2]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix UI break on protuguese
							<strong>[Learath2]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							{
								"Don't log out on `sv_rcon{,_mod,_helper}_password` if not changed"
							}
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Removed teamkill message on solo teams
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Added broadcast importance (timer broadcast
							overwrote other broadcasts on non-ddnet clients){" "}
							<strong>[ChillerDragon]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>Added name banning</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Added more dummy settings (cl_control_dummy,
							cl_dummy_jump, cl_dummy_fire)
							<strong>[QingGo]</strong>
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/11.0.3...11.1.4">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"11.0"} date={"2018-02-03"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-11.0.3-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.0.3-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-11.0.3-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-11.0.3-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-11.0.3-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-11.0.3.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							OpenGL 3 graphics support for better zooming out{" "}
							<strong>[Jupeyy]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Teehistorian: record player inputs on server
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Ghost and demo recorder
							<DDNetLink href="https://github.com/ddnet/ddnet/pull/869">
								rework
							</DDNetLink>
							(teerace compatible)
							<strong>[Redix]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							/pause [name] and /spec [name] to watch a specific
							player immediately
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Improve server browser spoofing protection
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							More customizable HUD options (cl_showemotes,
							cl_shownotifications, cl_show_chat_system)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Rcon moderate mode
							<strong>[Ryozuki]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Reconnecting doesn't unmute you anymore
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							FNG mod entities <strong>[noby]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix crashes in client and server
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/10.8.6...11.0.3">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"10.8"} date={"2017-09-08"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-10.8.6-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.8.6-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.8.6-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-10.8.6-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-10.8.6-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-10.8.6.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							Replace versionsrv with ddnet-info.json
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Add control for 'Toggle Ghost'
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Add 'install', 'package' to CMake
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix DDNet tab for WinXP
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Update Brazillian Portuguese translation
							<strong>[rffontenelle]</strong>
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/10.8.3...10.8.6">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"10.8"} date={"2017-09-01"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-10.8.3-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.8.3-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.8.3-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-10.8.3-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-10.8.3-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-10.8.3.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							Show finished maps in serverbrowser
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix ghost and demo storage
							<strong>[Redix]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix memory leaks <strong>[HMH]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix CMake build for macOS
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Add time to log messages on console
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Use UTF8 in database to ensure all names are usable
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fixed map_resave tool and added map_replace_image{" "}
							<strong>[sctt]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Add unit testing capabilities
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Initialize graphics later to allow user resolutions
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Update simplified Chinese translation
							<strong>[ACTom]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Update Russian translation
							<strong>[Deeper]</strong>
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/10.7.1...10.8.3">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"10.7"} date={"2017-07-25"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-10.7.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.7.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.7.1-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-10.7.1-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-10.7.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-10.7.1.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							Fix cases where a worse finish time was displayed
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Add Ctrl-F support to the serverbrowser and to the
							skin list
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Remove rcon username prompt on servers that don't
							require it
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>Fat tees</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Add kitty skins by <strong>[Ravie]</strong>
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/10.7...10.7.1">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"10.7"} date={"2017-07-22"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-10.7-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.7-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.7-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-10.7-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-10.7-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-10.7.tar.xz">Source</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							Seperate out libraries from the main repository
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Add a scrollbar to the controls tab
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>Fix demo slicing</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix icons for executables
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/10.6.7...10.7">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"10.6"} date={"2017-07-15"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-10.6.5-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.6.5-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.6.5-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-10.6.5-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-10.6.5-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.6.5.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.6.5.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							Can't spectate yourself when /pause'd
							<strong>[Learath2]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Always close files, cleaner demo recording, fix some
							other stuff
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Don't open map file again if we have it open already
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Update translations and translation scripts
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Lots of Windows fixes
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix linux opusfile linking
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Show X and Y coordinates in map editor
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>Distribute map_diff</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix disappearing switches in editor
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Support ctrl-l to load map in editor
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/10.6.4...10.6.5">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"10.6"} date={"2017-07-08"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-10.6.4-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.6.4-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.6.4-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-10.6.4-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-10.6.4-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.6.4.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.6.4.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							Fix map_extract usage a bit
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix cmake build of map_extract
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Add sv_check_teleport_hold_hook map setting
							<strong>[timakro]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Use sv_teleport_hold_hook also for checkpoint tele{" "}
							<strong>[timakro]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Forbid escaping base directory
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Add toggling for string options
							<strong>[Learath2]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix set_team_ddr doc
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Support pageup, pagedown, home, end buttons in menus
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fixed scoreboard update for slow racers
							<strong>[ChillerDragon]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							String toggling supports escaped strings
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/10.6.3...10.6.4">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"10.6"} date={"2017-06-12"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-10.6.3-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.6.3-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.6.3-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-10.6.3-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-10.6.3-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.6.3.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.6.3.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							Add option to disable long pain sound
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Update the range of sv_default_timer_type
							<strong>[Learath2]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix old maps by removing unused tiles
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Get rid of a wrong dbg_assert that can crash the
							server <strong>[Ryozuki]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Add tool to extract images and sounds from maps
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Add map_extract to distribution
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/10.6.2...10.6.3">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"10.6"} date={"2017-06-04"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-10.6.2-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.6.2-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.6.2-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-10.6.2-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-10.6.2-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.6.2.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.6.2.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>Fix a login crash</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Prevent data race when initializing loggers
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Dissable dbg_stress in release builds
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Change some default configs
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/10.6.1...10.6.2">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"10.6"} date={"2017-06-01"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-10.6.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.6.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.6.1-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-10.6.1-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-10.6.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.6.1.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.6.1.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/10.6...10.6.1">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"10.6"} date={"2017-05-15"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-10.6-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.6-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.6-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-10.6-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-10.6-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.6.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.6.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							Reworked pause <strong>[Leararth2]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Tees must now be teamed up before loading
							<strong>[Leararth2]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Reimplemented sv_pause_frequency
							<strong>[Leararth2]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Random tees can't load saves
							<strong>[Leararth2]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Don't show ips to non-administrators on rcon (a.k.a
							moderators and helpers)
							<strong>[Ryozuki]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Don't block when logging queue is full, instead
							ignore the messages
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Add own time to /mapinfo
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Update timestamp in team rank (fixes discord bot)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Show more precise coords in debug
							<strong>[d3fault]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix invite spam <strong>[Leararth2]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Add ratelimiting and config options for invite{" "}
							<strong>[Leararth2]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Reset invites when team is empty
							<strong>[Leararth2 + heinrich5991]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Add show angle in debug
							<strong>[d3fault]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Change behaviour for kick votes in teams
							<strong>[Leararth2]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Prevent vote spam
							<strong>[Leararth2]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							CSV file instead of statboard screenshot
							<strong>[SheikhZayx]</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							cl_cpu_throttle_inactive can be set higher than 1
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Prenet invites in solo server
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							/pause'd players stay in player list
							<strong>[Leararth2]</strong>
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/10.5...10.6">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"10.5"} date={"2017-04-16"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-10.5-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.5-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.5-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-10.5-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-10.5-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.5.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.5.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<br />
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/10.4.3...10.5">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"10.4"} date={"2017-03-09"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-10.4.3-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.4.3-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.4.3-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-10.4.3-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-10.4.3-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.4.3.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.4.3.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<br />
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/10.3.5...10.4.3">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"10.3"} date={"2016-12-16"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-10.3.5-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.3.5-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.3.5-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-10.3.5-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-10.3.5-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.3.5.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.3.5.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<br />
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/10.2.1...10.3.5">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"10.2"} date={"2016-07-26"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-10.2.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.2.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.2.1-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-10.2.1-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-10.2.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.2.1.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.2.1.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<br />
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/10.1.1...10.2.1">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"10.1"} date={"2016-05-22"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-10.1.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.1.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.1.1-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-10.1.1-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-10.1.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.1.1.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.1.1.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Add <i>cl_showpred 1</i> to show prediction time
								(similar to ping) ingame (by Ryozuki)
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor]&nbsp;
							<strong>
								Add auto gametile placer for hookthrough (by
								timakro)
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor]&nbsp;
							<strong>
								Merge buttons for tele, switch, tune and speedup
								layer into one (by BannZay)
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Jump to the next word when pressing
							CTRL+arrowkey in chat (by Henningstone)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Make <i>cl_show_ids</i> also show client
							ids in chat
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add <i>gfx_highdpi 1</i> for experimental
							High-DPI screen support
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add <i>inp_mouseold 1</i> for old mouse
							input
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Improve fullscreen in Gnome
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Improve handling of multiple screens
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Disable input when window focus lost
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Show DDNet entities by default, fixes
							invisible freeze after joining (thanks to
							kamillentee)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Pressing shift makes sliders in various
							menus move slower
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Sort demos case-insensitively
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Reconnect on timeout to last address, not
							the one selected in browser
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix
							<i>br_filter_exclude_countries</i> including the
							values from
							<i>br_filter_exclude_types</i> (by timakro)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix autoupdater on windows XP
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix local console auto completion
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix "vanilla skins only" setting in menu
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix buffer overflow when pasting text
							(thanks to Im 'corneum)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add support for old race server racetime
							messages in HUD, including checkpoint time
							difference
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add client setting
							<i>cl_ignored_modifiers</i> to ignore a set of
							keyboard modifiers, 0 ignores nothing, use
							<DDNetLink href="https://github.com/ddnet/ddnet/blob/a8ce73dffaca66e732d5626dc733fa1e9b93fb44/src/engine/client/input.cpp#L174-L187">
								these values
							</DDNetLink>
							to ignore certain modifiers
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Immediately accept input while console is
							still opening
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Disable antiping on solo servers and in
							solo parts
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server/Client] Fix fifo console bug that caused a
							crash (by Henningstone)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server/Client] Fix fifo console to remove newlines
							from commands
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server/Client] Fix fifo console on Mac OS X (by
							HMH)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server/Client] Clean up debug messages
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] More uniform output of
							<i>/times</i> (thanks to Soreu)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Make <i>sv_join_vote_delay</i> work for{" "}
							<i>/map</i> votes and make the number of seconds
							configurable
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Don't show <i>/top5</i> from rank 0 on (by
							Henningstone)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Don't allow restarting after touching
							finish line on solo server
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Make envelopes unsynchronized by default
							and explain the setting better
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Reorder auto gametile placers (by
							hi_leute_gll)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Rename some auto gametile placers (by
							timakro)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Explain the unused button when a mapper
							tries to place a unused tile with the button turned
							off
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix gametile placer button and automapper
							button overlapping (by timakro)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix size of popups
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix <i>ed_showkeys</i> with mousewheel
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Fix <i>sv_deepfly</i>, works now (by
							timakro)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Installation] Fix debian installation instructions
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Translation] Fix persian and simplified_chinese
							language files syntax (by timakro)
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/10.0...10.1.1">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"10.0"} date={"2016-05-14"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-10.0.3-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.0.3-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-10.0.3-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-10.0.3-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-10.0.3-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.0.3.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/10.0.3.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Switched to SDL2, allows pasting from clipboard
								and a better compatibility with new environments
								(mostly by swick & oy)
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server/Client]&nbsp;
							<strong>
								Add a faster and easier to use hookthrough tile,
								read the
								<DDNetLink href="https://forum.ddnet.tw/viewtopic.php?f=16&t=3552&p=37323#p37323">
									tutorial
								</DDNetLink>
								(by timakro)
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Added overlay entities support for other
								gametypes including OpenFNG and Race (by Soreu &
								timakro)
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Update mapping and overlay entities (by
							Soreu)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add client setting
							<i>cl_show_local_time_always 1</i> if true show the
							current time ingame at the top of the screen
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Rename <i>cl_reconnect_ban</i> to
							<i>cl_reconnect_timeout</i>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove <i>cl_reconnect_full</i> and
							<i>cl_reconnect_full_timeout</i>, set
							<i>cl_reconnect_timeout</i> or
							<i>cl_reconnect_full</i> to 0 to deactivate
							reconnecting now
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add function to remove messages from demo
							when slicing it
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add client command
							<i>demo_speed i[speed]</i> to set the demo playing
							speed
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove ingame network tab to show browser
							and ghost tab directly
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Show ingame ghost tab only on race servers
							(by Henningstone)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Alert if layer size is bigger than1000 to
							prevent unnecessary huge layers
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add shorcut key F5 or CTRL+R to reload
							server and demo browser
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Make double click work on votes
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Key up/down in serverbrowser doesn't change
							friend list
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Make fading border in menu more
							customizeable (by Soreu & timakro)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: No tab selected when joining server
							from news page
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: <i>gfx_resizable</i> on by default
							with X11
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add server settings
							<i>sv_connlimit=4</i> and
							<i>sv_connlimit_time=20</i> to control the number of
							connections an IP is allowed to do in a timespan
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Development] Allow autoupdater to update DLL files
							(by Learath2)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Prevent placing unused tiles,
							<strong>
								mapping for other gametypes requires activating
								the 'Unused' button now!
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Rearrange editor buttons to fit for5:4
							resolutions and a cleaner look (by timakro)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Add map setting
							<i>sv_deepfly=1</i> if false deepfly doesn't work
							anymore, useful for dummy maps (by timakro)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Improve automapper for
							<i>ddnet_tiles.png</i> (by hi_leute_gll)
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/9.3.1...10.0.3">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"9.3"} date={"2016-04-27"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-9.3.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-9.3.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-9.3.1-linux_x86.tar.xz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-9.3.1-linux_x86_64.tar.xz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-9.3.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-9.3.1.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/9.3.1.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/9.3.1.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Server]&nbsp;
							<strong>
								New unlock team tile which unlocks the team if
								one of the teammembers touches it, already added
								to a lot of dummy maps
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server]&nbsp;
							<strong>
								The server congratulates you to your DDNet
								birthday if you join a server on the day you
								finished your first map
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: No antiping in demo player or when
							spectating
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Optimize PNGs in filesize
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server/Client] Fix: Hammer hit isn't predicted by
							antiping when hammer is off
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Killer of locked team will get strong hook
							on respawn (by HMH)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] <i>sv_hide_score</i> now also hides the
							answer of <i>/rank</i> and
							<i>/teamrank</i> to everyone except the requester
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Translation] Add persian language (by OneShadow)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Translation] Add font support for chinese,
							japanese, korean in the language list (by awaysoft)
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/9.2...9.3.1">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"9.2"} date={"2016-03-02"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-9.2-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-9.2-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-9.2-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-9.2-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-9.2-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-9.2.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/9.2.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/9.2.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Add quick search for skin selection (by timakro)
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server]&nbsp;
							<strong>
								No respawn delay on suicide else possiblity to
								respawn instantly by firing (by HMH)
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix memory leak that occured when playing
							with dummy
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: Move kill messages down in case fps is
							shown (by timakro)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Veto right applies to people who are on a
							server instead of in a race for a long time
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] New config option
							<i>sv_join_vote_delay=1</i> if true you have to wait
							60 seconds after joining until you can vote, doesn't
							apply when joining empty servers (by heinrich5991)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] New config option
							<i>sv_server_info_per_second=50</i> to control how
							many complete server info responses are maximal sent
							per second, fixes DoS vulnerability (by
							heinrich5991)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Translation] Tons of additions to the chinese
							language (by awaysoft)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Translation] Improve catalan translation (by
							Ryozuki)
						</DDNetChangeLogLi>
					</Stack>
					<DDNetLink href="https://github.com/ddnet/ddnet/compare/9.1...9.2">
						Full list of git changes
					</DDNetLink>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"9.1"} date={"2016-01-05"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-9.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-9.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-9.1-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-9.1-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-9.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-9.1.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/9.1.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/9.1.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Add selection of eye emotes to the emote
								selector (
								<DDNetLink href="https://github.com/ddnet/ddnet/pull/317">
									#317
								</DDNetLink>
								,
								<DDNetLink href="https://github.com/ddnet/ddnet/pull/373">
									#373
								</DDNetLink>
								)
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server]&nbsp;
							<strong>
								Add a new rcon access level "helper" (
								<DDNetLink href="https://github.com/ddnet/ddnet/pull/356">
									#356
								</DDNetLink>
								)
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add config option `cl_save_settings` that
							can disable saving the config on closing (
							<DDNetLink href="https://github.com/ddnet/ddnet/pull/352">
								#352
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add config option `cl_text_entities` to
							disable slow rendering of entities with text (
							<DDNetLink href="https://github.com/ddnet/ddnet/pull/340">
								#340
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix a constant in the UTF-8 decoder (
							<DDNetLink href="https://github.com/ddnet/ddnet/pull/332">
								#332
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix an envelopes bug (
							<DDNetLink href="https://github.com/ddnet/ddnet/pull/339">
								#339
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix antiping config handling, stop
							subconfigs from resetting on restart (
							<DDNetLink href="https://github.com/ddnet/ddnet/pull/333">
								#333
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix background map setting in 5:4
							resolution (
							<DDNetLink href="https://github.com/ddnet/ddnet/commit/201782dbfccb608e861420b1025b79554cee70c2">
								ecc9cbfe
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix dummy input behaving weirdly sometimes
							(
							<DDNetLink href="https://github.com/ddnet/ddnet/pull/364">
								#364
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix game layer rendering depending on the
							order they appear in the map (
							<DDNetLink href="https://github.com/ddnet/ddnet/pull/343">
								#343
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix the UI of the "Vanilla Skins only"
							setting (
							<DDNetLink href="https://github.com/ddnet/ddnet/commit/24f973613a138895e3bc68207abb63a6ff679d49">
								24f97361
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix the menu music playing ingame (
							<DDNetLink href="https://github.com/ddnet/ddnet/pull/350">
								#350
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix weapon rotation around the top (
							<DDNetLink href="https://github.com/ddnet/ddnet/pull/369">
								#369
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Increase width of the date column in the
							demo browser (
							<DDNetLink href="https://github.com/ddnet/ddnet/commit/865d50950d62294f6e8b1e5b45be503ef16168fe">
								865d5095
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Replace `cl_show_new_skins` and
							`cl_show_custom_skins` with `cl_vanilla_skins_only`
							(
							<DDNetLink href="https://github.com/ddnet/ddnet/commit/ed49e3214a6bad55c9a3c2289f43c37985352f76">
								ed49e321
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Reset stat scoreboard when the game
							restarts (
							<DDNetLink href="https://github.com/ddnet/ddnet/pull/366">
								#366
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Securely generate the random client port (
							<DDNetLink href="https://github.com/ddnet/ddnet/pull/396">
								#396
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Stop the ingame server browser from
							reloading when clicking a tab again (
							<DDNetLink href="https://github.com/ddnet/ddnet/pull/342">
								#342
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Development] Add NetBSD support (
							<DDNetLink href="https://github.com/ddnet/ddnet/commit/522c41330d1c931cc089312c331854c37fa26a86">
								522c4133
							</DDNetLink>
							, from vanilla
							<DDNetLink href="https://github.com/teeworlds/teeworlds/pull/1165">
								#1165
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Development] Cross-compile improvements (
							<DDNetLink href="https://github.com/ddnet/ddnet/commit/fca4c112d49138a56a8146da9512655b9cf9cf25">
								fca4c112
							</DDNetLink>
							,
							<DDNetLink href="https://github.com/ddnet/ddnet/commit/d4fe267c5842f567d8cd721df22c427b6dae9106">
								d4fe267c
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Development] Fix MySQL building on OS X (
							<DDNetLink href="https://github.com/ddnet/ddnet/pull/317">
								#317
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Development] Fix linking of libdl on some systems (
							<DDNetLink href="https://github.com/ddnet/ddnet/compare/b3f094bf4097cc1c0ddade616a4352d9760cbf23%5E...b596ee34173fa14d0874216691c92e8192fbdf7d7">
								3f094bf..596ee341
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Development] Make OS X build forward compatible (
							<DDNetLink href="https://github.com/ddnet/ddnet/pull/361">
								#361
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix crash when opening files without
							transparency information, i.e. RGB instead of RGBA (
							<DDNetLink href="https://github.com/ddnet/ddnet/commit/aa4bbed178258e9157ecd6b2c82ca3292b70efdf">
								aa4bbed1
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server/Client] Add description to console command
							arguments (
							<DDNetLink href="https://github.com/ddnet/ddnet/pull/389">
								#389
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server/Client] Allow setting config variables to
							the empty string (
							<DDNetLink href="https://github.com/ddnet/ddnet/2874e18ce0218280cb73cfd68b54ecafbf731adf">
								2874e18c
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add a config option `sv_dragger_range` to
							adjust the range of draggers (
							<DDNetLink href="https://github.com/ddnet/ddnet/pull/323">
								#323
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add a config option `sv_sql_create_tables`
							to not try to create the record tables if they don't
							exist (
							<DDNetLink href="https://github.com/ddnet/ddnet/commit/336e916548af31d0a6c817e1faa8e639fdc2e027">
								336e9165
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add a message that specifies who killed a
							race team (
							<DDNetLink href="https://github.com/ddnet/ddnet/pull/367">
								#367
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add an option to reload the map once the
							server becomes empty (
							<DDNetLink href="https://github.com/ddnet/ddnet/pull/355">
								#355
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Don't reset timeout protection status on
							rejoin (
							<DDNetLink href="https://github.com/ddnet/ddnet/commit/d1c0551546417df011cc1f2522aa52017b584c7c">
								d1c05515
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix a thread handle leak on Windows (
							<DDNetLink href="https://github.com/ddnet/ddnet/commit/7487923774df3a372bb3618087a0753b435acf8d">
								74879237
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix name equality checking a few times (
							<DDNetLink href="https://github.com/ddnet/ddnet/pull/385">
								#385
							</DDNetLink>
							,
							<DDNetLink href="https://github.com/ddnet/ddnet/pull/386">
								#386
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Only log name changes when the name
							actually changes (
							<DDNetLink href="https://github.com/ddnet/ddnet/commit/f20a6a49343d3fa3f2b2d58bc11dfae13d646a4f">
								f20a6a49
							</DDNetLink>
							)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Security: Fix registering vulnerability (
							<DDNetLink href="https://github.com/ddnet/ddnet/pull/359">
								#359
							</DDNetLink>
							)
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"9.0"} date={"2015-08-28"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-9.0.2-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-9.0.2-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-9.0.2-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-9.0.2-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-9.0.2-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-9.0.2.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/9.0.2.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/9.0.2.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							<strong>
								Save server settings inside the map file, can be
								edited in editor, server sends map version with
								configs in the map, config_store and
								config_retrieve tools (by heinrich5991)
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Use a map as custom entities background,
								%current% for the current map (by Chairn)
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client]&nbsp;
							<strong>
								Sort demos in demo browser by name or date (by
								east)
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] New file names for manual and auto demo
							recorder including map name
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Highlight notifications work on Mac OS X
							(by HMH)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add cl_chat_reset to disable the chat from
							being reset by pressing ESC
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Demo player pause/unpause can be bound to a
							key and scoreboard hidden (by Savander)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Hide console window on Windows by default
							(cl_show_console)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix double clicking on friend who's in
							first server (by Chairn)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix chat highlighting (by east &amp;
							Learath2)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix race recorder
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix frozen input when leaving a server with
							active chat (by Oy)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix frozen spec window when unpausing
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix and improve dyncam bind and settings
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix server browser to always load servers
							when first starting
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix country flags for Catalan and Europe
							(by Soreu)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server]&nbsp;
							<strong>
								Improved security against spoofing attacks (by
								east)
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server]&nbsp;
							<strong>
								New autoexec_server.cfg instead of autoexec.cfg
								(with Soreu)
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server]&nbsp;
							<strong>
								Make rejoining session possible before timeout
								protection triggers (by east)
							</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Make team locking an option
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix timeout protection problems (by east)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix: No two players with same name
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix: /map and /mapinfo work better
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix: Prevent solo finish when saving
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor]&nbsp;
							<strong>HSV Color picker (by BeaR)</strong>
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Switches can be set with number 0
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix mouse hang with editor popup
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Add sv_teleport_lose_weapons for some race
							maps
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Update jungle_main.rules (by hi_leute_gll)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Fix collision bug with weapon projectiles
							(by BeaR)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Fix: Tunes are reset by default
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"8.1"} date={"2015-08-10"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-8.1.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-8.1.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-8.1.1-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-8.1.1-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-8.1.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-8.1.1.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/8.1.1.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/8.1.1.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Add country flags for Europe and Catalonia
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Bind chat on enter/return by default as
							well
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Dyncam bind saves special mousesens (by
							Shiki)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Sort spectators by name in scoreboard
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add friends and foes commands to list them
							in console
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Make clan optional when adding and removing
							friends and foes
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: Only print MOTD to console when it's
							not empty
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Show average time in /mapinfo
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Add basic_freeze automappers (by
							hi_leute_gll and timakro)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Add generic_clear automappers (by
							hi_leute_gll)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Fix desert_mountains_new_foreground (by
							hi_leute_gll)
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"8.0"} date={"2015-07-28"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-8.0.2-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-8.0.2-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-8.0.2-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-8.0.2-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-8.0.2-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-8.0.2.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/8.0.2.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/8.0.2.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Allow spectating other players and freeview
							in demo player (especially fun with /showall and
							/showothers on)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add foes feature to permanantly ignore
							players (F1, add_foe only)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Use temporary file for saving config to
							prevent broken configs
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: Make add_demomarker working in all
							recorders (by east)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix highlighting in demo playback (by east)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: TAB in console doesn't influence
							server browser
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix scroll bar in server control votes when
							search bar is used
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix saving of config file on Windows
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix and improve spectator mode in demo
							viewer
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Print MOTD to the console
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add switch_open to set the initial state of
							a switch to open
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix support for 0 stars in database
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix /mapinfo with mixed case server names
							(DDmaX)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix envelope button color (by timakro)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Save twice as fast (hopefully doesn't break
							anything)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Add "Save copy" button so that filename is
							not changed
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Add ctrl+shift+s for "save as" and
							ctrl+shift+alt+s for "save copy"
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Zoom faster by holding down numpad +/- (by
							Chairn)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Add basic_freeze automapper rules (by
							timakro)
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"7.9"} date={"2015-07-15"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-7.9.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-7.9.1-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-7.9.1-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-7.9.1-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-7.9.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-7.9.1.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/7.9.1.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/7.9.1.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Show all recorders at top of scoreboard
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Sort players in server browser by name too
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix statboard for some resolutions
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix saving of favorite IPv6 servers (by
							east)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix demo cutter to add .demo file ending
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Improved German translations (by timakro)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Add many nice mapres to the client (thanks
							to Soreu)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Improved grass_main/0.7 automappers (by
							hi_leute_gll)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Rename mapres to have consistent names
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Scroll speedup angles by 45° (finer with
							shift)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix: Show degrees sign in values selector
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Veto right for players with high time (20
							minutes) to stop map change votes
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Only allow /save when team is started
							already to prevent saving after noobfilter
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Make /map and /mapinfo work for maps with
							really similar names
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Show nice messages to known bot clients
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix /map and /mapinfo with special unicode
							characters
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix: Only disallow team changing/killing
							when calling kick/spec votes
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix: Vote callers never count as afk
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Compilation] Use system libraries by default when
							available (should enable building DDNet on any
							platform and OS)
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"7.8"} date={"2015-07-07"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-7.8.2-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-7.8.2-win64.zip">
							Windows&nbsp;64bit
						</DDNetLink>
						<DDNetLink href="DDNet-7.8.2-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-7.8.2-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-7.8.2-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-7.8.2.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/7.8.2.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/7.8.2.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] 64bit Windows version available
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: Error out on invalid UTF-8 strings (by
							heinrich5991)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add size variable for clan plates
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: Make TAB always work in serverbrowser
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add automatic antiping based on ping
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add support to show clan above name plates
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Improve Android client
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Show full time in scoreboard even when
							minutes are over 100
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix autorecorder again (by east)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Better Polish translations (by Savander and
							Lady Saavik)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add Catalan translations (by Ryozuki)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] More reasonable default key bindings
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Ctrl-s doesn't ask about overwriting
							anymore
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Highlight game layers
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Make a few value selectors wrap around
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Display local time in editor so mappers
							don't lose track of it
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Improved grass_main and round-tiles
							automapper rules (by hi_leute_gll)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] If no rcon password is set, generate one
							(by heinrich5991)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add sv_rescue_delay and rename
							sv_allow_rescue to sv_rescue
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] /mapinfo shows release dates now
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix excessive name/skin changing
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Hopefully fix problem where timeout code
							sometimes doesn't work
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Update unicode confusable detection
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"7.7"} date={"2015-06-21"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-7.7.3-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-7.7.3-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-7.7.3-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-7.7.3-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-7.7.3.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/7.7.3.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/7.7.3.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Detailed statboard for vanilla gaming (by
							Shiki)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Dyncam remembers settings (by Shiki)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Enable timeouts and low speed limits for
							HTTP downloads
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Only refresh serverbrowser when necessary
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix bug with 'Join Red' and 'Spectate'
							buttons sharing same state variable (by Shiki)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix console page color
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix a few freezes and crashes and make them
							recoverable
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Freeze tiles on switch layer can be
							switched off
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix start info spam protection
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix crash with doors
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix banning of websocket clients (by eeeee)
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"7.6"} date={"2015-05-08"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-7.6.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-7.6.1-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-7.6.1-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-7.6.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-7.6.1.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/7.6.1.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/7.6.1.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] New game tiles (by Soreu)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Improve antiping prediction of collision
							between players (by nuborn)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix dummy connect delay (by east)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Disable buttons while dummy is connecting
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: Resend player and dummy info if it was
							filtered by server (by timakro)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Hopefully fix player move on dummy connect
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix popup title overflow on disconnect
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix client crash
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Go back in envelopes with right mouse click
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Move "Add Sound" button down for5:4
							resolutions
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix: On switch layer correct delay number
							when filling
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Disallow spectators to participate in kick
							votes
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Rename rifle_fire_delay tuning to
							laser_fire_delay
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"7.5"} date={"2015-04-18"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-7.5-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-7.5-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-7.5-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-7.5-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-7.5.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/7.5.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/7.5.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Render kill messages with DDRace team color
							(with cl_chat_teamcolors 1)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix autoupdater on Windows XP (with
							Learath2)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix voting problems
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix map saving with RGB images by
							converting them to RGBA
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix compilation on new OS X systems
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Allow to exit editor value selectors with
							mouse clicks (by HMH)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix rendering of images in editor when
							scrolling
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Add black tile to ddnet-walls (by Saavik)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add /r, /rescue: teleport yourself out of
							freeze (disabled by default, sv_allow_rescue 1 in
							config to enable)
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"7.4"} date={"2015-04-18"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-7.4-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-7.4-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-7.4-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-7.4-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-7.4.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/7.4.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/7.4.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Fix quad rendering with colors (by BeaR)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Hopefully fix map download crashes (by
							Learath2)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix too big popup titles
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix spacing in browser menu search
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] No more sun for unfreeze entity
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Improved envolpe switching and deleting (by
							HMH)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Resize font in editor to show full image
							and sound name
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix: Don't let players fall outside of map
							without dying
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix refill jumps with 1 jump (by timakro)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] /teamrank (for /rankteam) and /teamtop5
							(for /top5team) also work now
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"7.3"} date={"2015-03-15"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-7.3.5-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-7.3.5-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-7.3.5-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-7.3.5-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-7.3.5.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/7.3.5.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/7.3.5.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] New autoupdater (by Learath2)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Search in the vote calling menu
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] TAB key in server browser switches between
							Filter, Info, Friends
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] New demo format to fix crashes (by BeaR)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix crash with demo viewing (by BeaR)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix crash with demo cutting
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Changed unfreeze tile ingame (by Saavik)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Automapper improvements (by timakro and
							hi_leute_gll)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Add ddmax-freeze tileset with automapper
							(by timakro)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Fix entities a bit (by timakro)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] BONUS tile that reduces your time (only
							for special maps)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add security tokens to protocol (by eeeee)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client+Server] Ninja Jetpack prediction (by
							timakro)
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"7.2"} date={"2015-02-21"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-7.2.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-7.2.1-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-7.2.1-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-7.2.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-7.2.1.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/7.2.1.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/7.2.1.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Kill &amp; emoticons are cloned with
							cl_dummy_copy_moves
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Tons of automapper features (by timakro)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix: Release hook when player changes team
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"7.1"} date={"2015-02-16"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-7.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-7.1-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-7.1-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-7.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-7.1.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/7.1.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/7.1.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Dummy copies moves (by Tobii)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix fast file download for some filenames
							(by Learath2)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Fire delay tunings
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Automapper rules for generic_unhookable
							(+0.7) (by hi_leute_gll)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Support for JS clients (by eeeee)
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"7.0"} date={"2015-02-05"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-7.0-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-7.0-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-7.0-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-7.0-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-7.0.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/7.0.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/7.0.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Faster map download using HTTP for DDNet
							maps (by Learath2)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix highlighting color in F1
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix: Make /map work with #
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"6.6"} date={"2015-01-18"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-6.6.8-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-6.6.8-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-6.6.8-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-6.6.8-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-6.6.8.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/6.6.8.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/6.6.8.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Antiping: prediction of weak/strong hook
							(by trml)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] New tile: Refill jumps (by timakro)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Fix water mapres (by Soreu, found by
							hi_leute_gll)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: No jetpack prediction on DDNet
							incompatible servers
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add default zoom setting
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Add hook duration tune
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Various fixes
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: Still allow to find clan mates when
							clan is ignored in friends
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Highlight broadcasts in console as well
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Show the function of search and exclusion
							edit boxes when empty (Suggestion by Saavik)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix friend display when clan doesn't match
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Change colors again
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix: Correct images are reported for
							embedding
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Add better hookable entity (by Soreu)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Add water tileset (by Soreu)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix master server registration on Windows
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Make prediction work with unsolo command
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Prevent spam with SQL messages
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Browser: Remove "pure" exclamation mark
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Browser: Flexible map column size
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Browser: "Reset filter" also resets DDNet
							Country and Type exclusion lists
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Browser: Fix: Clan is ignored when
							searching for friends
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Browser: Fix: Save that you were on
							settings tab
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Highlight in console
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Add detection whether an image and sound
							has to be embedded and redesign colors
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Only allow savegames in one country to
							prevent cheats
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Allow to set country where you can load
							savegame (e.g. /save ZAF CODE for South Africa)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Disable hook when /spec is used
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"6.5"} date={"2014-12-14"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-6.5-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-6.5-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-6.5-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-6.5-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-6.5.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/6.5.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/6.5.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Filter DDNet servers by type
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Exclusion in quick search
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Clean up menus
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Ignore clan when searching for friends
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] One AntiPing setting for everything
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] AntiPing: Smoke trails of grenades (by
							BeaR)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client+Server] Set IP TOS value to low delay (might
							improve ping stability)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix possible crash
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"6.4"} date={"2014-12-05"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-6.4-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-6.4-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-6.4-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-6.4-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-6.4.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/6.4.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/6.4.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Mapping] Rectangular sounds and variable falloff
							distance (by BeaR)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Old sound maps can be converted to new
							format by loading and saving in editor (by BeaR)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] round-tiles fixed (by Soreu)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Antiping for weapons added again (by
							nuborn)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] cl_show_decisecs 0 to get back timer from
							Vanilla at top of screen
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix sound cutoff for looped sounds and make
							sound offset threshold dependent on the size of the
							audio buffer
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Send timeout code later (fixes timeout code
							entering issues, fixes timeout protection not
							working realiably with dummy)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server+Client] Minor optimizations and fixes
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"6.3"} date={"2014-11-25"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-6.3-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-6.3-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-6.3-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-6.3-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-6.3.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/6.3.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/6.3.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Allow for more than 9 DDNet locations
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add unicode support for console output on
							Windows (by heinrich5991)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix duplicate skin handling
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Demos show race time in scoreboard
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] HD flag works for sounds
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix double click recognition in menu
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix demo saving
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix editor in Images &amp; Sounds views
							when GUI is deactivated
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] New entities for better visibility of
							hookables (by Tee 3D)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] ASCII confusable detection to prevent name
							faking
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] sv_solo_server for easier solo servers
							(also working for tunezones finally)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix infrequent segfault when server shuts
							down immediately
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Minor ping improvement on empty server
							(serverbrowser)
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"6.2"} date={"2014-11-16"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-6.2.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-6.2.1-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-6.2.1-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-6.2.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-6.2.1.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/6.2.1.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/6.2.1.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Mapping] Fix editor sound replacing (by BeaR)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Remove Bandana Brothers skins (use
							skinpacks instead)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Make sound more accurate
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Don't render useless CTele-in number
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] gfx_text_overlay to stop rendering text at
							far distances
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Improve performance and ping
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Improve /rank performance
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"6.1"} date={"2014-11-02"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-6.1.3-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-6.1.3-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-6.1.3-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-6.1.3-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-6.1.3.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/6.1.3.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/6.1.3.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Mapping] Use opus codec for map sounds instead of
							wavpack (with help by BeaR)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Antiping for Weapons improved, might also
							work for Vanilla (by nuborn)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add bind for dyncam to settings
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Balance sending of vote options (by east)
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"6.0"} date={"2014-10-28"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-6.0.3-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-6.0.3-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-6.0.3-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-6.0.3-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-6.0.3.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/6.0.3.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/6.0.3.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Flash window on chat highlight (Windows by
							BeaR &amp; Linux)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Option for disabling gunfire
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Delay of 1 minute for loading savegames
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix solo zone + laser drag in spec
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Map Sounds (by BeaR)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Fixed jungle_background (by645654)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Fixed grass_main_0.7 (by Saavik) and
							automapper rules (by hi_leute_gll)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] AntiPing for weapons (by nuborn)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Demo recording fixed
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Quads look the same on every GPU (by BeaR)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Right click to decrease FSAA samples in
							menu (by Wohoo)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Don't clear rcon history when connecting to
							new server
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Shift + right click to delete a quad
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fixed automapper rules (grass_main_0.7,
							ddnet-tiles, ddnet-walls, desert_main, fadeout,
							grass_main, jungle_main, round-tiles, winter_main,
							by timakro)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Show sleepy eyes when a player is paused
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] /mapinfo shows more information
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"5.3"} date={"2014-10-11"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-5.3-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-5.3-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-5.3-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-5.3-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-5.3.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/5.3.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/5.3.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Skin name in skin selector (by Savander)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Sort player completion (TAB) by name
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Shift + TAB to invert completion order in
							chat (by Wohoo)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Automatically rcon-authenticate dummy on
							connection if player is authenticated already
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add cl_zoom_background_layers (set to 0 to
							keep background nice when zoomed out)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] New "Entities off" sign
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Scale quad point selection indicator with
							zoomlevel (by BeaR)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Zoom into cursor position (by BeaR)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix: Consistently allow rotations and
							flipping in editor
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Vote random map with defined number of
							stars (add number as reason)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Vote random unfinished map with defined
							number of stars (add number as reason)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Show stars in /mapinfo
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Spectated tee can be changed more often
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"5.1"} date={"2014-09-29"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-5.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-5.1-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-5.1-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-5.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-5.1.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/5.1.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/5.1.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Sort ingame menus (by laxa)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Print broadcasts in console (by laxa)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add button to select whether to reset
							wanted weapon on death (by laxa)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix editor input on Android
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix buggy envelope editor while tile picker
							is active
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Automapper support rotation (by timakro)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Disable key inputs in editor when typing in
							a field
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix: Selecting quads works after having
							rotated one
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Kill protection: Prevent joining to
							spectators (by Savander)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Lock works for single player teams
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix: Log player out of rcon after timeout
							protection was used
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Check whether team has finished once a
							player in the team kills
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add sv_player_demo_record (mostly from
							Teerace, not used on official DDNet Servers)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix a bunch of crashes on server demo
							recording
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"5.0"} date={"2014-09-20"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-5.0.2-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-5.0.2-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-5.0.2-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-5.0.2-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-5.0.2.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/5.0.2.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/5.0.2.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] DDNet page with all DDNet servers,
							filterable by country (by east)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: Make the initial ping in serverbrowser
							less wrong (still not perfect)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: Prevent animated server names and fake
							0 pings in serverbrowser
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: also record a demo when the start line
							is on the front layer (by Tobii)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: Show tune layer when
							cl_overlay_entities is less than 100
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: Separate timed-switch-activation and
							unsolo tiles in ingame-entities
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: Rcon spoofing protection bans clients
							after password change (by Tobii)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] automapper works without basetile (by
							timakro)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add number of finishes to /mapinfo
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"4.9"} date={"2014-09-14"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-4.9.3-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-4.9.3-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-4.9.3-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-4.9.3-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-4.9.3.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/4.9.3.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/4.9.3.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Fix clamping in network objects to prevent
							many crashes
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: Reset zoom when going out of spectate
							mode (in zcatch for example)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client+Server] Threaded logger output for fewer
							lags
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Ignore user inputs when paused
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Instead of banning players for reconnecting
							too often, make them wait 3 seconds
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Use settings_ddnet.cfg instead of
							settings.cfg
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add switch to disable CPU throttle when
							window is inactive
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Unix only: FIFO console (as in server)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Add demo speed setting in menu
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Don't show quit popup on update
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: Android controls working again
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: Only use rcon spoofing protection on
							ddnet servers as it's buggy on others
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: Case insensitive map filenames on
							Windows
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: Repopulate demo list after closing
							demo player because a new demo could have been
							created
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: Remove damage indications when
							entering game
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: Don't crash on broken demo files
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix: Negative clipping width and height
							make no sense
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix: Only set active weapon when it
							actually has ammo
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix: Make /save reset switches
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"4.8"} date={"2014-08-26"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-4.8.4-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-4.8.4-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-4.8.4-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-4.8.4-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-4.8.4.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/4.8.4.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/4.8.4.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Cut demos into parts and save them (by
							east)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: Don't render hooks to non-active
							character cores (by east)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: 64 player server info in LAN tab (by
							Savander)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Kill protection (by Savander)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Faster /points and /top5points
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Switch /pause and /spec with sv_pauseable 1
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix: Bullets don't explode when a player
							stands in their way (by Tobii)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Also show all players for 32 player servers
							in serverbrowser
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Half transparent chat and emoticons with
							/showothers
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Recording with multiple clients at the same
							time working
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Show current quad when pressing space
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Keys still work with TAB pressed
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Don't show proof lines in editor when space
							is pressed
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Show time of players you're spectating
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Timeout protection and crash fixes
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server+Client] Protect from IP spoofing of rcon
							commands
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"4.7"} date={"2014-08-17"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-4.7.7-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-4.7.7-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-4.7.7-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-4.7.7-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-4.7.7.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/4.7.7.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/4.7.7.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Automatic timeout protection on DDNet
							servers
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix: Dummy really disconnects on map change
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Display map name while downloading
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Make emoticon selector reset when you point
							it in the middle
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Allow disabling custom and new skins
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Disable joystick on non-android devices by
							default
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] /timeout protection for all clients
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] /specteam to only see players from your
							team when spectating
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] 1 minute punishment for saving to prevent
							abuse
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fixes for /save and /load
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add sv_shutdown_when_empty
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix: Exclude dummies from spoof protection
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix: Reset timeout protection when it's
							over
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Add a timeout protection message
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Timeout protection fixes
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"4.6"} date={"2014-08-01"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-4.6.3-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-4.6.3-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-4.6.3-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-4.6.3-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-4.6.3.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/4.6.3.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/4.6.3.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Server] Save a game in team using /save password
							(by HMH)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Bugs in /save fixed
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Message about joining team 0 after you
							finish in team
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix some default binds (pageup, pagedown)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Prevent dummy from reconnecting too often
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Case insensitive player sort
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Removed buggy speedup prediction
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Blocker] Disable rejoin to team 0 after finish
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Blocker] Add freeze hammer
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>and many more fixes</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"4.5"} date={"2014-07-16"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-4.5.2-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-4.5.2-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-4.5.2-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-4.5.2-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-4.5.2.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/4.5.2.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/4.5.2.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Mapping] A new DDNet start line (ddnet-start.png)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] See in editor which images are used and
							which not
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Added editor button, Cleanup of some menus,
							Ask before disconnect
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Feature: Add cl_dummy_resetonswitch to
							reset dummy keys
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Feature: Lots of color customization (by
							CookieMichal)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Major skin cleanup
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Fix a few hangs
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Players join team 0 after finishing in team
							(without /lock)
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"4.4"} date={"2014-06-28"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-4.4-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-4.4-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-4.4-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-4.4-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-4.4.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/4.4.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/4.4.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Feature: Auto-Reconnect (by CookieMichal)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Mapping] Add some Teeworlds 0.7 mapres
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Feature: Show who locked and unlocked a
							team
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix: Walljump works properly
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"4.3"} date={"2014-06-22"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-4.3.1-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-4.3.1-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-4.3.1-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-4.3.1-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-4.3.1.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/4.3.1.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/4.3.1.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Mapping] Feature: Wall jump tiles (put it next to
							wall)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Client] Feature: CPU throttle in Settings → General
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Feature: Vote a random map you haven't
							finished yet
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix: Don't show draggers of players in solo
							part
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Fix: You can keep pistol when going through
							armor entities
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"4.2"} date={"2014-06-14"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-4.2-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-4.2-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-4.2-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-4.2-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="DDNet-4.2.apk">Android</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/4.2.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/4.2.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							[Client] Fix: Don't crash when standing on start
							line and connecting dummy
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix: Shifting front layer works
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix: Allow adding more than 33 images
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Editor] Fix: Show all images, no matter how many
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							[Server] Feature: undeep, unsolo on test server
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Feature: News in client
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: News in correct directory
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: Jetpack tuning works with tunezones
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: Dummy can see 64 players on non-DDNet servers
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: Don't crash when standing on start line and
							connecting dummy
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"3.9"} date={"2014-06-01"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-3.9.6-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-3.9.6-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-3.9.6-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-3.9.6-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/3.9.6.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/3.9.6.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							Feature: Set how far to shift a layer in editor
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Feature: Server works on older Linux systems
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: gfx_threaded_old 0 and gfx_asyncrender_old 0
							for old computers
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: Image selection popups always visible in editor
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: Info with grid and animations works in editor
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: Dummy only connects to server when we're
							connected too
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"3.8"} date={"2014-05-10"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-3.8.3-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-3.8.3-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-3.8.3-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-3.8.3-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/3.8.3.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/3.8.3.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							Feature: Guns and draggers work for each player in a
							solo part individually
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Feature: Old gun holding position
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: Still receive dummy whispers and team messages
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: Dummy should behave better
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: Key presses more visible
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"3.7"} date={"2014-05-03"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-3.7.3-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-3.7.3-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-3.7.3-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-3.7.3-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/3.7.3.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/3.7.3.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							Feature: cl_overlay_entities (0-100) instead of
							cl_show_entities
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Feature: More colors in serverbrowser (thanks to
							NooBxGockeL &amp; GamerClient)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: Draw player direction arrows at different
							positions
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: Tunes with dummies (by HMH)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: Better switching with dummy
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"3.6"} date={"2014-04-30"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="DDNet-3.6-win32.zip">
							Windows&nbsp;32bit
						</DDNetLink>
						<DDNetLink href="DDNet-3.6-linux_x86.tar.gz">
							Linux&nbsp;x86
						</DDNetLink>
						<DDNetLink href="DDNet-3.6-linux_x86_64.tar.gz">
							Linux&nbsp;x86-64
						</DDNetLink>
						<DDNetLink href="DDNet-3.6-osx.dmg">
							Mac&nbsp;OS&nbsp;X
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/3.6.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/3.6.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							Feature: Inputs always work in freeze (on any DDRace
							server)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Feature: Hammerfly with dummy tee (more accurate
							now)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Feature: Dummy tee (thanks to //toast and Monsta,
							more stable now)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Feature: Show key presses (by unsigned char*)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Feature: Auto-Updater (thanks to unsigned char*)
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"3.2"} date={"2014-04-12"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/3.2.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/3.2.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							Feature: Jetpack prediction
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Feature: More tunings for tune zones
							(jetpack_strength, hammer_strength,
							shotgun_strength, explosion_strength)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Feature: Better team differentiation ingame (colored
							nameplates and more transparency)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Feature: Add cl_show_other_hook_coll
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Feature: Add sv_teleport_hold_hook
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: Timeouts, disconnects and game leaves no longer
							kill your entire locked team
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: Players don't disappear without 64 player
							client
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: hook collision line of other players works on
							yourself when you're paused
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: Show the server you're connected to in the
							server browser too
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: Remove projectiles when player dies
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
			<DownloadVersion version={"3.0"} date={"2014-03-29"}>
				<DownloadDownloadFiles>
					<br />
					<Stack>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/3.0.zip">
							Source&nbsp;(zip)
						</DDNetLink>
						<DDNetLink href="https://github.com/ddnet/ddnet/archive/3.0.tar.gz">
							Source&nbsp;(tar.gz)
						</DDNetLink>
					</Stack>
				</DownloadDownloadFiles>
				<DownloadChangeLog>
					<strong>Changelog</strong>
					<Stack>
						<DDNetChangeLogLi>
							Feature: Tune Zones allow you to have different
							physics in each part of map (by HMH) (
							<DDNetLink href="/map/tunezones/">
								Tutorial
							</DDNetLink>
							, Example
							<DDNetLink href="/map/gravity.map">
								gravity.map
							</DDNetLink>
							,
							<DDNetLink href="/map/gravity.cfg">
								gravity.cfg
							</DDNetLink>
							(put it into data/maps right where your DDNet-Server
							binary is))
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Feature: Prediction for stoppers and speedups (by v)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Feature: When a server has more than 16 players, the
							first 16 voters count
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Feature: Mapres preview in editor
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Feature: Show unpredicted shadow tee
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Feature: Optionally don't show Ninja
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>Feature: New skins</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: Mac OS X version should work without extra
							libraries
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: Doors are properly reset in locked teams
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: Sounds settings make sense
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: Editor copy &amp; paste is less buggy (by HMH)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: No more annoying "player paused" and "player
							unpaused" messages
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: Newly joined players see ongoing votes
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: Crash on strange user inputs in console (by
							HMH)
						</DDNetChangeLogLi>
						<DDNetChangeLogLi>
							Fix: Crash on screenshot
						</DDNetChangeLogLi>
					</Stack>
				</DownloadChangeLog>
			</DownloadVersion>
		</>
	);
};
