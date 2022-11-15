type TDDNetFuding = {
	totalProgress: number;
	totalProgressColor: string;
	totalProgressText: string;
	costServer: Array<{
		progress: number;
		progressText: string;
		progressColor: string;
	}>;
	oldCost: { progress: number; progressText: string; progressColor: string };
};

export const getDDNetFunding = (): TDDNetFuding => {
	const res: TDDNetFuding = {
		totalProgress: 0,
		totalProgressColor: "",
		totalProgressText: "",
		costServer: [],
		oldCost: { progress: 0, progressColor: "", progressText: "" },
	};

	const costs = {
		ddnet: [177, 338, "Brokecdx-"], // includes vpn and blocklist
		master: [36, 36, "Brokecdx-"], // hetzner.de
		db: [50, 50, "David*°Villa"],
		nld: 193, // nforce.com
		fra: "Davide", // ovh.com, runs out on 2022-06-13
		ger1: "labixe", // labixee.net
		ger2: "heinrich5991", // hetzner.de
		ger3: [66, 66, "Insanity"], // netcup.de
		pol: "Davide", // ovh.com, runs out on 2023-06-13
		rus1: 155, // myarena.ru
		rus2: [10, 10, "Pepsicola_o0"], // vdsina.ru
		tur: 164, // hostingdunyam.com.tr
		irn: "NotAriaN",
		chl: 156, // grupocg.cl
		bra: [143, 903, "Miguilim"], // maxihost.com
		arg: "Miguilim",
		usa1: 103, // nfoservers.com
		usa2: 69, // nfoservers.com
		can: "Davide", // ovh.com, runs out on 2023-06-13
		chn: [287, 537, "TsFreddie"],
		chn5: "紫川",
		jap: 208, // linode.com
		kor: 264, // vultr.com
		sgp: [66, 66, "Jem"], // linode.com
		ind: 39, // linode.com
		aus: [29, 29, "Lem0n"], // ovh.com
		zaf: [62, 60, "Mariac & Her0"], // absolutehosting.co.za
	};
	const donated = 987;
	const yearStr = "2022";
	const costOld =
		1540 + /*2018:*/ 917 + /*2019:*/ 1327 + /*2020:*/ 1118 + /*2021:*/ 2612;
	let donatedOld = 7422;
	const yearStrOld = "2013-21";

	let sum = 0;
	let sumToPay = 0;
	let sumPartSponsored = 0;
	for (const server in costs) {
		const val = costs[server];
		if (val.toFixed) {
			sum += val;
			sumToPay += val;
		} else if (Array.isArray(val)) {
			sum += val[1];
			sumToPay += val[1] - val[0];
			sumPartSponsored += val[0];
		}
	}

	let donatedRest = 0;
	const paid = {};
	for (const server in costs) {
		const val = costs[server];
		paid[server] = 0;
		if (donatedRest > 0) {
			paid[server] += donatedRest;
		}
		if (val.toFixed) {
			paid[server] += (val * donated) / sumToPay;
			if (paid[server] > val) {
				donatedRest += paid[server] - val;
				paid[server] = val;
			}
		} else if (Array.isArray(val)) {
			paid[server] += ((val[1] - val[0]) * donated) / sumToPay + val[0];
			if (paid[server] > val[1]) {
				donatedRest += paid[server] - val[1];
				paid[server] = val[1];
			}
		}
	}

	let total = donated + sumPartSponsored;
	if (total > sum) {
		donatedOld += total - sum;
		total = sum;
	}

	res.totalProgress = (100 * total) / sum;
	let color = "#F6A828";
	if (total >= sum) {
		color = "#37d628";
	}
	res.totalProgressColor = color;
	res.totalProgressText =
		total.toFixed() + " € donated / " + sum + " € cost " + yearStr;

	for (const server in costs) {
		const val = costs[server];
		let value = 0;
		let text = "";
		let color = "#F6A828";
		if (val.toFixed) {
			value = (100 * paid[server]) / val;
			text = paid[server].toFixed() + " / " + val + " €";
			if (paid[server] >= val) {
				color = "#37d628";
			}
		} else if (Array.isArray(val)) {
			value = (100 * paid[server]) / val[1];
			text = paid[server].toFixed() + " / " + val[1] + " €";
			if (paid[server] >= val[1]) {
				color = "#37d628";
			}
			if (val.length > 2) {
				text += " (sponsored by " + val[2] + ")";
			}
		} else {
			value = 100;
			text = "sponsored by " + val;
			color = "#37d628";
		}
		res.costServer.push({
			progress: value,
			progressColor: color,
			progressText: text,
		});
	}

	const valueOld = (100 * donatedOld) / costOld;
	color = "#F6A828";
	if (donatedOld >= costOld) {
		color = "#37d628";
	}
	res.oldCost.progress = valueOld;
	res.oldCost.progressColor = color;
	res.oldCost.progressText =
		donatedOld.toFixed() + " € / " + costOld + " € cost " + yearStrOld;
	return res;
};
