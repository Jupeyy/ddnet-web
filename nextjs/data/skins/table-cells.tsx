import DDNetLink from "data/ddnet-link";
import { nanoid } from "nanoid";
import React, { useEffect, useMemo } from "react";
import { atomFamily, useRecoilValue } from "recoil";
import { TSkin, TCellRenderFunc } from "./types";
import { EEyesEmote, onTeeSkinRender } from "data/downloads/tee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const skinInfoAtomFamKeyName = "skinRenderInfoAtomFam";
export const skinInfoAtomFam = atomFamily<
	{ value: string | undefined; imgEl?: HTMLImageElement },
	string
>({
	key: skinInfoAtomFamKeyName,
	default: { value: undefined, imgEl: undefined },
	effects: [
		({ trigger, node, setSelf }) => {
			async function fetchSkinImg(skinPath: string) {
				const res = await fetch(skinPath);

				const data = Buffer.from(await res.arrayBuffer()).toString(
					"base64"
				);

				const imgEl = document.createElement("img");
				imgEl.onload = () => {
					setSelf({ value: data, imgEl: imgEl });
				};
				imgEl.src = "data:image/jpeg;base64," + data;
			}
			if (trigger == "get") {
				let realName = node.key.replace(
					skinInfoAtomFamKeyName + '__"',
					""
				);
				realName = realName.substring(0, realName.length - 1);
				fetchSkinImg(realName).catch((r) =>
					console.log("failed to fetch skin ", r)
				);
			}
		},
	],
});

const SkinListCellCanvas = (curSkin: TSkin) => {
	const SkinPath =
		curSkin.type == "normal"
			? "/skins/skin/"
			: curSkin.type == "community"
			? "/skins/skin/community/"
			: "/skins/skin/template/";

	const skinFullPath = SkinPath + curSkin.name + "." + curSkin.imgtype;
	const skinImg = useRecoilValue(skinInfoAtomFam(skinFullPath));
	const thisCanvasId = useMemo(() => nanoid(), []);

	useEffect(() => {
		{
			if (skinImg.imgEl != undefined) {
				const canEl = document.getElementById(
					thisCanvasId
				) as HTMLCanvasElement;
				if (canEl != null) {
					onTeeSkinRender(
						canEl,
						skinImg.imgEl,
						EEyesEmote.EMOTE_NORMAL,
						[1, 0]
					);
				}
			}
		}
	}, [skinImg, thisCanvasId]);

	return (
		<DDNetLink href={SkinPath + curSkin.name + "." + curSkin.imgtype}>
			<canvas
				style={{ width: 72, height: 72 }}
				id={thisCanvasId}
				onMouseMove={(e) => {
					const thisCan = e.target as HTMLCanvasElement;
					if (skinImg.imgEl != undefined && thisCan != null) {
						const rect = thisCan.getBoundingClientRect();
						const x = e.pageX - rect.left;
						const y = e.pageY - rect.top;
						const dir: number[] = [
							x - thisCan.width / 2,
							thisCan.height / 2 - y,
						];
						const dirLen = Math.sqrt(
							dir[0] * dir[0] + dir[1] * dir[1]
						);
						dir[0] = dir[0] / dirLen;
						dir[1] = dir[1] / dirLen;
						onTeeSkinRender(
							thisCan,
							skinImg.imgEl,
							EEyesEmote.EMOTE_HAPPY,
							dir
						);
					}
				}}
				onMouseLeave={(e) => {
					const thisCan = e.target as HTMLCanvasElement;
					if (skinImg.imgEl != undefined && thisCan != null) {
						onTeeSkinRender(
							thisCan,
							skinImg.imgEl,
							EEyesEmote.EMOTE_NORMAL,
							[1, 0]
						);
					}
				}}
			></canvas>
		</DDNetLink>
	);
};

const SkinListCellName = (curSkin: TSkin) => {
	return <strong>{curSkin.name}</strong>;
};

const SkinListCellSkinType = (curSkin: TSkin) => {
	return (
		<DDNetLink
			href={
				"index.php?search=" +
				encodeURIComponent("$type:" + curSkin.type.toLowerCase())
			}
		>
			{curSkin.type}
		</DDNetLink>
	);
};

const SkinListCellCreator = (curSkin: TSkin) => {
	if (curSkin.creator != "")
		return (
			<DDNetLink
				href={
					"index.php?search=" +
					encodeURIComponent(
						"$creator:" + curSkin.creator.toLowerCase()
					)
				}
			>
				{curSkin.creator}
			</DDNetLink>
		);
	return <></>;
};

const SkinListCellSkinPack = (curSkin: TSkin) => {
	if (curSkin.skinpack != "")
		return (
			<DDNetLink
				href={
					"index.php?search=" +
					encodeURIComponent(
						"$skinpack:" + curSkin.skinpack.toLowerCase()
					)
				}
			>
				{curSkin.skinpack}
			</DDNetLink>
		);
	return <></>;
};

const SkinListCellDate = (curSkin: TSkin) => {
	return <>{curSkin.date}</>;
};

const SkinListCellLicense = (curSkin: TSkin) => {
	if (curSkin.license != "")
		return (
			<DDNetLink
				href={
					"index.php?search=" +
					encodeURIComponent(
						"$license:" + curSkin.license.toLowerCase()
					)
				}
			>
				{curSkin.license}
			</DDNetLink>
		);
	return <></>;
};

const SkinListCellUHD = (curSkin: TSkin) => {
	return (
		<DDNetLink
			href={
				"index.php?search=" +
				encodeURIComponent("$uhd:" + (curSkin.hd.uhd ? "yes" : "no"))
			}
		>
			{curSkin.hd.uhd ? "yes" : "no"}
		</DDNetLink>
	);
};

const SkinListCellDownload = (curSkin: TSkin, isEditMode: boolean) => {
	const SkinPath =
		curSkin.type == "normal"
			? "/skins/skin/"
			: curSkin.type == "community"
			? "/skins/skin/community/"
			: "/skins/skin/template/";
	return isEditMode ? (
		<>
			<FontAwesomeIcon
				icon={["fas", "pen"]}
				style={{
					cursor: "pointer",
					marginRight: 8,
				}}
				onClick={() => {
					/* TODO */
				}}
			/>
			<FontAwesomeIcon
				icon={["fas", "trash"]}
				style={{
					cursor: "pointer",
				}}
				onClick={() => {
					/*
				"javascript:OpenChangeSkin(" +
				curSkin.name +
				"', '" +
				curSkin.name +
				"." +
				curSkin.imgtype +
				"', '" +
				curSkin.type +
				"', '" +
				curSkin.creator.replace("'", "\\'") +
				"', '" +
				curSkin.skinpack +
				"', '" +
				curSkin.license +
				"');\">change</DDNetLink>&nbsp;&nbsp;&nbsp;<DDNetLink href=\"javascript:OpenRemoveSkin('" +
				curSkin.name +
				"." +
				curSkin.imgtype*/
				}}
			/>
		</>
	) : (
		<>
			<DDNetLink
				href={SkinPath + curSkin.name + "." + curSkin.imgtype}
				download={curSkin.name + "." + curSkin.imgtype}
			>
				<FontAwesomeIcon icon={["fas", "download"]} />
			</DDNetLink>
			{curSkin.hd.uhd && (
				<>
					&nbsp;&nbsp;&nbsp;
					<DDNetLink
						href={
							SkinPath +
							"uhd/" +
							curSkin.name +
							"." +
							curSkin.imgtype
						}
						download={curSkin.name + "." + curSkin.imgtype}
					>
						UHD
					</DDNetLink>
				</>
			)}
		</>
	);
};

export const skinListCells: TCellRenderFunc[] = [
	SkinListCellCanvas,
	SkinListCellName,
	SkinListCellSkinType,
	SkinListCellCreator,
	SkinListCellSkinPack,
	SkinListCellDate,
	SkinListCellLicense,
	SkinListCellUHD,
	SkinListCellDownload,
];
