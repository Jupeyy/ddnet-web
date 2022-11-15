import React, { Suspense, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { skinInfoAtomFam } from "data/skins/table-cells";
import { useRecoilValue } from "recoil";
import { nanoid } from "nanoid";
import { EEyesEmote, onTeeSkinRender } from "data/downloads/tee";

const SkinRenderer = () => {
	const { query } = useRouter();
	const SkinPath = query["skin"];

	const skinFullPath = SkinPath;
	const skinImg = useRecoilValue(skinInfoAtomFam(skinFullPath as string));
	const thisCanvasId = useMemo(() => nanoid(), []);

	useEffect(() => {
		{
			if (skinImg.imgEl != undefined) {
				const canEl = document.createElement(
					"canvas"
				) as HTMLCanvasElement;
				if (canEl != null) {
					onTeeSkinRender(
						canEl,
						skinImg.imgEl,
						EEyesEmote.EMOTE_NORMAL,
						[1, 0]
					);
					(canEl as HTMLCanvasElement).toBlob((obj) => {
						if (obj != null) {
							const url = URL.createObjectURL(obj);
							window.location.replace(url);
						}
					});
				}
			}
		}
	}, [skinImg, thisCanvasId]);

	return <Suspense></Suspense>;
};

export default SkinRenderer;
