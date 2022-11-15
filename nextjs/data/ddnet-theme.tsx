import { createTheme, Theme } from "@mui/material";
import { atom } from "recoil";

type TDDNetTheme = Theme;

export const darkTheme: TDDNetTheme = {
	...createTheme({
		palette: {
			mode: "dark",
			background: { default: "#555555", paper: "#2d2d2d" },
		},
		typography: {
			fontFamily: "Arial, Helvetica, sans-serif",
		},
	}),
};

export const lightTheme: TDDNetTheme = {
	...createTheme({
		palette: {
			mode: "light",
			background: { default: "#f6fbff", paper: "white" },
		},
		components: {
			MuiCard: {
				variants: [
					{
						props: { variant: "elevation" },
						style: {
							backgroundColor: "#f5f5f5",
						},
					},
				],
			},
		},
		typography: {
			fontFamily: "Arial, Helvetica, sans-serif",
		},
	}),
};

const ddnetThemeStorageName = "ddnet-design-theme";
export const globalTheme = atom<TDDNetTheme>({
	key: "globalPageTheme",
	default: darkTheme,
	dangerouslyAllowMutability: true,
	effects: [
		// save/load theme in local storage
		({ onSet, trigger, setSelf }) => {
			if (trigger == "get") {
				const themeName = window.localStorage.getItem(
					ddnetThemeStorageName
				);
				if (themeName != null) {
					if (themeName == "dark") setSelf(darkTheme);
					else if (themeName == "light") setSelf(lightTheme);
				}
			}

			onSet((newTheme) => {
				if (window != undefined) {
					window.localStorage.setItem(
						ddnetThemeStorageName,
						newTheme == darkTheme ? "dark" : "light"
					);
				}
			});
		},
	],
});
