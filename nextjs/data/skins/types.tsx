export type TSkinHDOptions = {
	uhd: boolean;
};

export type TSkin = {
	name: string;
	type: string;
	imgtype: string;
	creator: string;
	license: string;
	skinpack: string;
	date: string;
	hd: TSkinHDOptions;
};

export type TSkinList = {
	skins: Array<TSkin>;
	version: string;
};

export type TCellRenderFunc = (
	curSkin: TSkin,
	isEditMode: boolean
) => JSX.Element;
