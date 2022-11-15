import { DDNetCardFullHeight, DDNetCardTop } from "data/ddnet-card";
import { NextPage } from "next";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import JSZip from "data/downloads/jszip.min";

import { Button, CardContent, CardHeader, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { MuiVirtualizedTable } from "data/vtable-mui";
import { TSkin, TCellRenderFunc, TSkinList } from "data/skins/types";
import { skinListCells } from "data/skins/table-cells";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/*
let IsSkinAddOpen = false;
let IsSkinAddZipOpen = false;
let IsSkinAddZipExtractOpen = false;
let IsSkinChangeOpen = false;
let IsSkinRemoveOpen = false;

function OpenAddSkin() {
	const AddSkinPopup = document.getElementById("addskinpopup");
	if (!IsSkinAddOpen) AddSkinPopup.style.display = "block";
	else AddSkinPopup.style.display = "none";

	IsSkinAddOpen = !IsSkinAddOpen;
}

function OpenAddSkinZipExtract() {
	const AddSkinPopup = document.getElementById("addskinzipextractpopup");
	if (!IsSkinAddZipExtractOpen) AddSkinPopup.style.display = "block";
	else AddSkinPopup.style.display = "none";

	IsSkinAddZipExtractOpen = !IsSkinAddZipExtractOpen;
}

function ExtractSkinZip() {
	OpenAddSkinZipExtract();
	const ZipContent = document.getElementById("addskinzipextractzip");

	const ZipList = document.getElementById("addskinziphidden");
	let InnerHTML = "";
	JSZip.loadAsync(ZipContent.files[0]).then((FileContent) => {
		let Counter = 0;
		let CountDec = Object.keys(FileContent.files).length;
		Object.keys(FileContent.files).map((FileVal) => {
			FileContent.files[FileVal].async("base64").then((StrVal) => {
				InnerHTML +=
					'<input name="skin_list[' +
					Counter.toString() +
					']" type="hidden" value="' +
					StrVal +
					'">';
				InnerHTML +=
					'<input name="skin_name_list[' +
					Counter.toString() +
					']" type="hidden" value="' +
					FileVal +
					'">';
				++Counter;
				--CountDec;
				if (CountDec == 0) {
					ZipList.innerHTML = InnerHTML;
				}
			});
		});
		OpenAddSkinZip();
	});
}

function OpenAddSkinZip() {
	const AddSkinPopup = document.getElementById("addskinzippopup");
	if (!IsSkinAddZipOpen) AddSkinPopup.style.display = "block";
	else AddSkinPopup.style.display = "none";

	IsSkinAddZipOpen = !IsSkinAddZipOpen;
}

function OpenChangeSkin(
	ChangeSkinNamePure,
	ChangeSkinName,
	ChangeSkinType,
	ChangeSkinCreator,
	ChangeSkinSkinPack,
	ChangeSkinLicense
) {
	const AddSkinPopup = document.getElementById("changeskinpopup");
	if (!IsSkinChangeOpen) AddSkinPopup.style.display = "block";
	else AddSkinPopup.style.display = "none";

	if (ChangeSkinName != undefined) {
		document.getElementById("changeskinname").value = ChangeSkinName;
		document.getElementById("changeskinname2").value = ChangeSkinName;
		document.getElementById("changeskincreator").value = ChangeSkinCreator;
		document.getElementById("changeskinskinpack").value =
			ChangeSkinSkinPack;
		document.getElementById("changeskinlicense").value = ChangeSkinLicense;
		document.getElementById("changeskinskintype").value = ChangeSkinType;
		let HasSkinImg = false;
		if (SkinMap.has(ChangeSkinNamePure)) {
			const SkinImg = SkinMap.get(ChangeSkinNamePure);
			if (SkinImg.Loaded) {
				document.getElementById("changeskinimg").value =
					SkinImg.ImgData;
				HasSkinImg = true;
			}
		}
		if (!HasSkinImg) alert("Skin was not loaded yet. Try again.");
	}

	IsSkinChangeOpen = !IsSkinChangeOpen;
}

function OpenRemoveSkin(RemoveSkinName) {
	const AddSkinPopup = document.getElementById("removeskinpopup");
	if (!IsSkinRemoveOpen) AddSkinPopup.style.display = "block";
	else AddSkinPopup.style.display = "none";

	document.getElementById("removeskinname").value = RemoveSkinName;
	document.getElementById("removeskinname2").value = RemoveSkinName;

	IsSkinRemoveOpen = !IsSkinRemoveOpen;
}

function documentIsReady(FuncCB) {
	if (
		document.readyState === "complete" ||
		document.readyState === "interactive"
	) {
		setTimeout(FuncCB, 1);
	} else {
		document.addEventListener("DOMContentLoaded", FuncCB);
	}
}*/
/*
function GetParams(qs) {
	qs = qs.split("+").join(" ");
	let params = {},
		tokens,
		re = /[?&]?([^=]+)=([^&]*)/g;

	while ((tokens = re.exec(qs))) {
		params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
	}

	return params;
}

const JS_GET = {}; //GetParams(document.location.search);

function GetTableHeaderNameInline(SortName, DisplayName) {
	let Ret = "'', '')";
	if (JS_GET["sort"] == SortName && JS_GET["dir"] == "down")
		Ret = "'" + SortName + "', 'up')";
	else Ret = "'" + SortName + "', 'down')";

	if (JS_GET["sort"] == SortName) {
		if (JS_GET["dir"] == "down") Ret += '">' + DisplayName + " ▾";
		if (JS_GET["dir"] == "up") Ret += '">' + DisplayName + " ▴";
	} else {
		Ret += '">' + DisplayName + "&nbsp;&nbsp;";
	}
	return Ret;
}

function SetLocationParams(SearchStr, SortStr, DirStr) {
	const SearchInp = document.getElementById("skinsearch");
	SearchInp.value = SearchStr;
	JS_GET["search"] = SearchStr;
	JS_GET["sort"] = SortStr;
	JS_GET["dir"] = DirStr;

	let Params = "?";
	if (SearchStr != "")
		Params += "search=" + encodeURIComponent(SearchStr) + "&";
	if (SortStr != "" && SortStr != "name")
		Params += "sort=" + encodeURIComponent(SortStr) + "&";
	if (DirStr != "" && DirStr != "down")
		Params += "dir=" + encodeURIComponent(DirStr) + "&";

	if (Params.endsWith("&")) Params = Params.substring(0, Params.length - 1);

	if (Params == "?") Params = "";
	window.history.replaceState({}, "param_changed", "index.php" + Params);

	DrawSkinList();
}

function GetSearchStrAndMode() {
	let SearchStr = JS_GET["search"];
	let SearchMode = "";
	if (SearchStr.startsWith("$creator:")) {
		SearchStr = SearchStr.replace("$creator:", "");
		SearchMode = "creator";
	} else if (SearchStr.startsWith("$skinpack:")) {
		SearchStr = SearchStr.replace("$skinpack:", "");
		SearchMode = "skinpack";
	} else if (SearchStr.startsWith("$skin:")) {
		SearchStr = SearchStr.replace("$skin:", "");
		SearchMode = "skin";
	} else if (SearchStr.startsWith("$type:")) {
		SearchStr = SearchStr.replace("$type:", "");
		SearchMode = "type";
	} else if (SearchStr.startsWith("$license:")) {
		SearchStr = SearchStr.replace("$license:", "");
		SearchMode = "license";
	} else if (SearchStr.startsWith("$uhd:")) {
		SearchStr = SearchStr.replace("$uhd:", "");
		SearchMode = "uhd";
	}

	return { SearchStr: SearchStr, SearchMode: SearchMode };
}*/
/*
function GetSkinsFiltered(AllowTemplateSkins) {
	const FilteredSkinList = new Array();

	const StrAndMode = GetSearchStrAndMode();
	const SearchStr = StrAndMode.SearchStr;
	const SearchMode = StrAndMode.SearchMode;

	const Finding = (StrToFind) => {
		if (SearchMode == "")
			return StrToFind.toLowerCase().includes(SearchStr.toLowerCase());
		else return StrToFind.toLowerCase() == SearchStr.toLowerCase();
	};

	for (let i = 0; i < SkinList.skins.length; ++i) {
		const CurSkin = SkinList.skins[i];

		if (!AllowTemplateSkins && CurSkin.type == "template") continue;

		if (
			((SearchMode != "skin" && SearchMode != "") ||
				!Finding(CurSkin.name)) &&
			((SearchMode != "creator" && SearchMode != "") ||
				!Finding(CurSkin.creator)) &&
			((SearchMode != "skinpack" && SearchMode != "") ||
				!Finding(CurSkin.skinpack)) &&
			((SearchMode != "type" && SearchMode != "") ||
				!Finding(CurSkin.type)) &&
			((SearchMode != "license" && SearchMode != "") ||
				!Finding(CurSkin.license)) &&
			((SearchMode != "uhd" && SearchMode != "") ||
				!Finding(CurSkin.hd.uhd ? "yes" : "no"))
		)
			continue;

		FilteredSkinList.push(CurSkin);
	}
	FilteredSkinList.sort((Skin1, Skin2) => {
		if (JS_GET["sort"] == "name") {
			if (JS_GET["dir"] == "down")
				return Skin1.name.localeCompare(Skin2.name);
			else return -Skin1.name.localeCompare(Skin2.name);
		} else if (JS_GET["sort"] == "type") {
			if (JS_GET["dir"] == "down")
				return Skin1.type
					.toLowerCase()
					.localeCompare(Skin2.type.toLowerCase());
			else
				return -Skin1.type
					.toLowerCase()
					.localeCompare(Skin2.type.toLowerCase());
		} else if (JS_GET["sort"] == "creator") {
			if (JS_GET["dir"] == "down")
				return Skin1.creator
					.toLowerCase()
					.localeCompare(Skin2.creator.toLowerCase());
			else
				return -Skin1.creator
					.toLowerCase()
					.localeCompare(Skin2.creator.toLowerCase());
		} else if (JS_GET["sort"] == "skin_pack") {
			if (JS_GET["dir"] == "down")
				return Skin1.skinpack
					.toLowerCase()
					.localeCompare(Skin2.skinpack.toLowerCase());
			else
				return -Skin1.skinpack
					.toLowerCase()
					.localeCompare(Skin2.skinpack.toLowerCase());
		} else if (JS_GET["sort"] == "release_date") {
			if (JS_GET["dir"] == "down")
				return Skin1.date
					.toLowerCase()
					.localeCompare(Skin2.date.toLowerCase());
			else
				return -Skin1.date
					.toLowerCase()
					.localeCompare(Skin2.date.toLowerCase());
		} else if (JS_GET["sort"] == "license") {
			if (JS_GET["dir"] == "down")
				return Skin1.license
					.toLowerCase()
					.localeCompare(Skin2.license.toLowerCase());
			else
				return -Skin1.license
					.toLowerCase()
					.localeCompare(Skin2.license.toLowerCase());
		} else if (JS_GET["sort"] == "uhd") {
			if (JS_GET["dir"] == "down")
				return Number(Skin1.hd.uhd) - Number(Skin2.hd.uhd);
			else return -(Number(Skin1.hd.uhd) - Number(Skin2.hd.uhd));
		}
	});

	return FilteredSkinList;
}

let DownloadSkinList = null;
let DownloadSkinListStack = new Array();
let DownloadSkinListRef = new Array();

function DownloadSkinsImpl() {
	if (DownloadSkinList != null) {
		const SkinZip = new JSZip();
		for (let i = 0; i < DownloadSkinList.length; ++i) {
			SkinZip.file(DownloadSkinList[i].name, DownloadSkinList[i].data);
		}
		SkinZip.generateAsync({ type: "blob" }).then(function (content) {
			saveAs(content, "skins.zip");
		});
		DownloadSkinList = null;
	}
}

function DownloadSkins(AsUHD) {
	const FilteredSkinList = GetSkinsFiltered(false);
	if (DownloadSkinList == null && FilteredSkinList.length > 0) {
		DownloadSkinList = new Array();
		DownloadSkinListStack = new Array();
		DownloadSkinListRef = new Array();
		for (let i = 0; i < FilteredSkinList.length; ++i) {
			const CurSkin = FilteredSkinList[i];
			if (AsUHD && !CurSkin.hd.uhd) continue;
			DownloadSkinListStack.push(false);
			const SkinPath =
				(CurSkin.type == "normal"
					? "/skins/skin/"
					: CurSkin.type == "community"
					? "/skins/skin/community/"
					: "/skins/skin/template/") + (AsUHD ? "uhd/" : "");
			const CurSkinNameImg = CurSkin.name + "." + CurSkin.imgtype;
			const DownloadPath = SkinPath + CurSkinNameImg;
			const SkinAjax = new XMLHttpRequest();
			const Index = DownloadSkinListRef.push({
				path: DownloadPath,
				obj: SkinAjax,
			});
			SkinAjax.responseType = "arraybuffer";
			SkinAjax.onreadystatechange = function (CurSkinNameImg) {
				if (this.readyState == 4) {
					if (this.status == 200) {
						DownloadSkinList.push({
							name: CurSkinNameImg,
							data: new Uint8Array(this.response),
						});
					}
					DownloadSkinListStack.pop();
					if (DownloadSkinListStack.length == 0) DownloadSkinsImpl();
				}
			}.bind(SkinAjax, CurSkinNameImg);
		}
		if (DownloadSkinListStack.length == 0) DownloadSkinList = null;
		for (let i = 0; i < DownloadSkinListRef.length; ++i) {
			const Tmp = DownloadSkinListRef[i];
			Tmp.obj.open("GET", Tmp.path);
			Tmp.obj.send();
		}
	}
}

function SetDownloadLink(
	FilteredCount,
	FilteredHDCount,
	FilteredCommuntiyCount,
	FilteredCommuntiyHDCount
) {
	const SkinDownloaderObj = document.getElementById("skin_download_link");

	const StrAndMode = GetSearchStrAndMode();
	const SearchStr = StrAndMode.SearchStr;
	const SearchMode = StrAndMode.SearchMode;
	let InnerHTML = "";
	if (SearchMode == "creator") {
		InnerHTML +=
			"All skins by creator '" +
			SearchStr +
			'\' : <a href="javascript:DownloadSkins(false)">';
		InnerHTML += "Download [" + FilteredCount.toString() + "]";
		InnerHTML += "</a>";
	}
	if (SearchMode == "skinpack") {
		InnerHTML +=
			"All skins from skin pack '" +
			SearchStr +
			'\' : <a href="javascript:DownloadSkins(false)">';
		InnerHTML += "Download [" + FilteredCount.toString() + "]";
		InnerHTML += "</a>";
	}
	if (SearchMode == "type") {
		InnerHTML +=
			"All skins from grouped as '" +
			SearchStr +
			'\' skins : <a href="javascript:DownloadSkins(false)">';
		InnerHTML += "Download [" + FilteredCount.toString() + "]";
		InnerHTML += "</a>";
	}
	if (SearchMode == "license") {
		InnerHTML +=
			"All skins with license '" +
			SearchStr +
			'\' : <a href="javascript:DownloadSkins(false)">';
		InnerHTML += "Download [" + FilteredCount.toString() + "]";
		InnerHTML += "</a>";
	}
	if (SearchMode == "uhd") {
		InnerHTML +=
			"All skins that are UHD '" +
			SearchStr +
			'\' : <a href="javascript:DownloadSkins(false)">';
		InnerHTML += "Download [" + FilteredCount.toString() + "]";
		InnerHTML += "</a>";
	}
	if (SearchMode == "") {
		InnerHTML +=
			'All skins from the database matching the current filters : <a href="javascript:DownloadSkins(false)">';
		InnerHTML += "Download [" + FilteredCount.toString() + "]";
		InnerHTML += "</a>";
	}

	if (FilteredHDCount > 0)
		InnerHTML +=
			' (<a href="javascript:DownloadSkins(true)">UHD [' +
			FilteredHDCount +
			"]</a>)";

	SkinDownloaderObj.innerHTML = InnerHTML;
}
*/

const Skins: NextPage = () => {
	const [isSkinAddOpen, setIsSkinAddOpen] = useState(false);
	const [isSkinZipAddOpen, setIsSkinZipAddOpen] = useState(false);
	const [isSkinZipExtractOpen, setIsSkinZipExtractOpen] = useState(false);
	const [isChangeSkinOpen, setIsChangeSkinOpen] = useState(false);
	const [isRemoveSkinOpen, setIsRemoveSkinOpen] = useState(false);

	const [isEditMode, setIsEditMode] = useState(false);

	const [skins, setSkins] = useState<TSkinList>(undefined);

	const [searchStr, setSearchStr] = useState("");

	const { query } = useRouter();
	const queryKeys = useMemo(() => Object.keys(query), [query]);

	const searchInpChanged = useCallback((newVal: string | undefined) => {
		if (newVal != undefined) {
			setSearchStr(newVal);
			/* TODO: const SearchInp = document.getElementById("skinsearch");
		const SearchStr = SearchInp.value;
		SetLocationParams(SearchStr, JS_GET["sort"], JS_GET["dir"]);*/
		}
	}, []);

	// get skins json
	useEffect(() => {
		async function getData() {
			const res = await fetch("/skins/skin/skins.json");
			const data = (await res.json()) as TSkinList;
			setSkins(data);
			/* TODO: SkinList = data;
			if (JS_GET["sort"] == undefined) JS_GET["sort"] = "name";
			if (JS_GET["dir"] == undefined) JS_GET["dir"] = "down";
			if (JS_GET["search"] == undefined) JS_GET["search"] = "";

			if (queryKeys.includes("search")) {
				const searchStr = query["search"];
				if (searchStr != undefined)
					setSearchStr(
						typeof searchStr == "string" ? searchStr : searchStr[0]
					);
			}

			DrawSkinList();*/
		}
		if (skins == undefined) getData();
	}, [query, queryKeys, skins]);

	const renderRowFunc = useCallback(
		(columnIndex: number, rowIndex: number) => {
			const cellFunc: TCellRenderFunc = skinListCells[columnIndex];
			return <>{cellFunc(skins.skins[rowIndex], isEditMode)}</>;
		},
		[isEditMode, skins]
	);

	return (
		<>
			<DDNetCardFullHeight
				sx={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				{isSkinAddOpen && (
					<div id="addskinpopup" className="modifyskinpopup">
						<form
							action="edit/modify_skin.php"
							method="post"
							encType="multipart/form-data"
							style={{ margin: 0 }}
						>
							<table cellPadding={5} style={{ margin: 0 }}>
								<tr>
									<td>Image</td>
									<td>
										<input name="image" type="file" />
									</td>
								</tr>
								<tr>
									<td>Creator</td>
									<td>
										<input name="creator" type="text" />
									</td>
								</tr>
								<tr>
									<td>Skin pack</td>
									<td>
										<input name="skin_pack" type="text" />
									</td>
								</tr>
								<tr>
									<td>License</td>
									<td>
										<input
											name="skin_license"
											type="text"
											placeholder="unknown"
										/>
									</td>
								</tr>
								<tr>
									<td>Type</td>
									<td>
										<select name="skin_type">
											<option value="normal" selected>
												normal
											</option>
											<option value="community">
												community
											</option>
										</select>
									</td>
								</tr>
								<tr>
									<td>Is UHD</td>
									<td>
										<input
											type="checkbox"
											name="skinisuhd"
										/>
									</td>
								</tr>
							</table>
							<input
								name="game_version"
								type="hidden"
								value="tw-0.6"
							/>
							<input
								name="skin_part"
								type="hidden"
								value="full"
							/>
							<input
								name="modifyaction"
								type="hidden"
								value="add"
							/>
							<div style={{ display: "flex", width: "100%" }}>
								<input type="submit" value="Add skin" />
								<input
									type="button"
									value="Cancel"
									//onClick={OpenAddSkin}
									style={{ marginLeft: "auto" }}
								/>
							</div>
						</form>
					</div>
				)}
				{isSkinZipAddOpen && (
					<div id="addskinzippopup" className="modifyskinpopup">
						<form
							action="edit/modify_skin.php"
							method="post"
							encType="multipart/form-data"
							style={{ margin: 0 }}
						>
							<table cellPadding={5} style={{ margin: 0 }}>
								<tr>
									<td>Creator</td>
									<td>
										<input name="creator" type="text" />
									</td>
								</tr>
								<tr>
									<td>Skin pack</td>
									<td>
										<input name="skin_pack" type="text" />
									</td>
								</tr>
								<tr>
									<td>License</td>
									<td>
										<input
											name="skin_license"
											type="text"
											placeholder="unknown"
										/>
									</td>
								</tr>
								<tr>
									<td>Type</td>
									<td>
										<select name="skin_type">
											<option value="normal" selected>
												normal
											</option>
											<option value="community">
												community
											</option>
										</select>
									</td>
								</tr>
								<tr>
									<td>Is UHD</td>
									<td>
										<input
											type="checkbox"
											name="skinisuhd"
										/>
									</td>
								</tr>
							</table>
							<input
								name="game_version"
								type="hidden"
								value="tw-0.6"
							/>
							<input
								name="skin_part"
								type="hidden"
								value="full"
							/>
							<input
								name="modifyaction"
								type="hidden"
								value="add"
							/>
							<div id="addskinziphidden"></div>
							<div style={{ display: "flex", width: "100%" }}>
								<input type="submit" value="Add skins" />
								<input
									type="button"
									value="Cancel"
									//onClick={OpenAddSkinZip}
									style={{ marginLeft: "auto" }}
								/>
							</div>
						</form>
					</div>
				)}
				{isSkinZipExtractOpen && (
					<div
						id="addskinzipextractpopup"
						className="modifyskinpopup"
					>
						<form
							action="javascript:ExtractSkinZip()"
							method="post"
							encType="multipart/form-data"
							style={{ margin: 0 }}
						>
							<table cellPadding={5} style={{ margin: 0 }}>
								<tr>
									<td>ImageZip</td>
									<td>
										<input
											id="addskinzipextractzip"
											name="image"
											type="file"
										/>
									</td>
								</tr>
							</table>
							<div style={{ display: "flex", width: "100%" }}>
								<input type="submit" value="Extract skin zip" />
								<input
									type="button"
									value="Cancel"
									//onClick={OpenAddSkinZipExtract}
									style={{ marginLeft: "auto" }}
								/>
							</div>
						</form>
					</div>
				)}
				{isChangeSkinOpen && (
					<div id="changeskinpopup" className="modifyskinpopup">
						<form
							action="edit/modify_skin.php"
							method="post"
							encType="multipart/form-data"
							style={{ margin: 0 }}
						>
							<table cellPadding={5} style={{ margin: 0 }}>
								<tr>
									<td>Skin</td>
									<td>
										<input
											id="changeskinname"
											name="skin_name2"
											type="text"
											disabled
										/>
									</td>
								</tr>
								<tr>
									<td>Creator</td>
									<td>
										<input
											id="changeskincreator"
											name="creator"
											type="text"
										/>
									</td>
								</tr>
								<tr>
									<td>Skin pack</td>
									<td>
										<input
											id="changeskinskinpack"
											name="skin_pack"
											type="text"
										/>
									</td>
								</tr>
								<tr>
									<td>License</td>
									<td>
										<input
											id="changeskinlicense"
											name="skin_license"
											type="text"
											placeholder="unknown"
										/>
									</td>
								</tr>
								<tr>
									<td>Type</td>
									<td>
										<select
											name="skin_type"
											id="changeskinskintype"
										>
											<option value="normal" selected>
												normal
											</option>
											<option value="community">
												community
											</option>
										</select>
									</td>
								</tr>
							</table>
							<input
								id="changeskinname2"
								name="skin_name_list[0]"
								type="hidden"
								value=""
							/>
							<input
								id="changeskinimg"
								name="skin_list[0]"
								type="hidden"
								value=""
							/>
							<input
								name="skinisuhd"
								type="hidden"
								value="false"
							/>
							<input
								name="game_version"
								type="hidden"
								value="tw-0.6"
							/>
							<input
								name="skin_part"
								type="hidden"
								value="full"
							/>
							<input
								name="modifyaction"
								type="hidden"
								value="add"
							/>
							<div style={{ display: "flex", width: "100%" }}>
								<input type="submit" value="Change Skin" />
								<input
									type="button"
									value="Cancel"
									//onClick={OpenChangeSkin}
									style={{ marginLeft: "auto" }}
								/>
							</div>
						</form>
					</div>
				)}
				{isRemoveSkinOpen && (
					<div id="removeskinpopup" className="modifyskinpopup">
						<form
							action="edit/modify_skin.php"
							method="post"
							encType="multipart/form-data"
							style={{ margin: 0 }}
						>
							<table cellPadding={5} style={{ margin: 0 }}>
								<tr>
									<td>Skin</td>
									<td>
										<input
											id="removeskinname"
											name="skin_name2"
											type="text"
											disabled
										/>
									</td>
								</tr>
							</table>
							<input
								name="skinisuhd"
								type="hidden"
								value="false"
							/>
							<input
								id="removeskinname2"
								name="skin_name"
								type="hidden"
								value=""
							/>
							<input
								name="modifyaction"
								type="hidden"
								value="delete"
							/>
							<div style={{ display: "flex", width: "100%" }}>
								<input type="submit" value="Remove Skin" />
								<input
									type="button"
									value="Cancel"
									//onClick={OpenRemoveSkin}
									style={{ marginLeft: "auto" }}
								/>
							</div>
						</form>
					</div>
				)}
				{/*	
<script src="tee.js"></script>
<script src="jszip.min.js"></script>
<script src="FileSaver.js"></script>
	<script src="vlist.js"></script>*/}
				<CardHeader title={"Skin database"}></CardHeader>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
						flexGrow: 1,
					}}
				>
					<div className="block" id="contentblock">
						<div style={{ display: "flex", alignItems: "center" }}>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flex: "1 1 auto",
								}}
							>
								<TextField
									label="Search skin"
									id="skinsearch"
									onInput={(
										e: React.ChangeEvent<HTMLInputElement>
									) =>
										searchInpChanged(
											e.target.value as string
										)
									}
								/>
								<Button
								//onClick={() =>
								//	SetLocationParams("", "name", "down")
								//}
								>
									Reset filter
								</Button>
							</div>
							<div
								style={{
									flex: "0 0 auto",
									fontSize: 12,
								}}
							>
								{!isEditMode ? (
									<div>
										<FontAwesomeIcon
											icon={["fas", "pen"]}
											style={{
												cursor: "pointer",
											}}
											onClick={() => setIsEditMode(true)}
										/>
									</div>
								) : (
									<div>
										<a
											onClick={() =>
												setIsSkinAddOpen(true)
											}
										>
											add skin
										</a>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<a
											onClick={() =>
												setIsSkinZipAddOpen(true)
											}
										>
											add skin zip
										</a>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<a onClick={() => setIsEditMode(false)}>
											normal mode
										</a>
									</div>
								)}
							</div>
						</div>
					</div>

					<h3 id="skin_download_link"></h3>
					<div
						id="skinlist"
						className="nowraptable"
						style={{
							width: "100%",
							margin: 0,
							marginTop: 20,
							display: "flex",
							flexGrow: 1,
						}}
					>
						<MuiVirtualizedTable
							columns={[
								{
									name: "",
									width: 72,
									priority: 1,
									onRenderRowCell: renderRowFunc,
								},
								{
									name: "Name",
									width: 120,
									priority: 1,
									onRenderRowCell: renderRowFunc,
								},
								{
									name: "Group",
									width: 120,
									priority: 3,
									onRenderRowCell: renderRowFunc,
								},
								{
									name: "Creator",
									width: 120,
									priority: 2,
									onRenderRowCell: renderRowFunc,
								},
								{
									name: "Skin pack",
									width: 120,
									priority: 4,
									onRenderRowCell: renderRowFunc,
								},
								{
									name: "Release date",
									width: 120,
									priority: 6,
									onRenderRowCell: renderRowFunc,
								},
								{
									name: "License",
									width: 120,
									priority: 7,
									onRenderRowCell: renderRowFunc,
								},
								{
									name: "UHD",
									width: 50,
									priority: 5,
									onRenderRowCell: renderRowFunc,
								},
								{
									name: "",
									width: 60,
									priority: 1,
									onRenderRowCell: renderRowFunc,
								},
							]}
							itemCount={skins?.skins.length ?? 0}
							rowHeight={75}
						></MuiVirtualizedTable>
					</div>
				</CardContent>
			</DDNetCardFullHeight>
		</>
	);
};

export default Skins;
