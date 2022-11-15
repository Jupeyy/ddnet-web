import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	CardContent,
	Dialog,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import { nanoid } from "nanoid";

import React, { CSSProperties, useCallback, useMemo, useState } from "react";
import useScrollbarSize from "react-scrollbar-size";
import { SizeMe, SizeMeProps } from "react-sizeme";
import { FixedSizeList, FixedSizeListProps } from "react-window";
import { DDNetCard } from "./ddnet-card";

type TDDNetTableColumn = {
	name: string;
	width: number;
	priority: number; // importance of this column (use values >= 1), might be invisible else, lower is better, 1 means always renderes
	onHeaderClick?: () => void;
	onRenderRowCell: (columnIndex: number, rowIndex: number) => JSX.Element;
};

type TDDNetTableColumnRender = TDDNetTableColumn & {
	renderIndex: number;
};

const infoButtonSize = 50;
const infoButtonPadding = 15;

const MuiVirtualizedTableRenderInfo = ({
	columns,
	rowIndex,
}: {
	columns: TDDNetTableColumn[];
	rowIndex: number;
}) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = useCallback(() => {
		setOpen(true);
	}, []);

	const handleClose = useCallback(() => {
		setOpen(false);
	}, []);

	const maxWidth = useMemo(() => {
		let maxWidth = 0;
		columns.forEach((val) => {
			if (maxWidth < val.width) maxWidth = val.width;
		});
		return maxWidth;
	}, [columns]);

	const infoId = useMemo(() => nanoid(), []);

	const renderedColumns = useMemo(() => {
		return columns.map((val, index) => {
			const RenderComp = val.onRenderRowCell.bind(null, index, rowIndex);
			return (
				<Stack key={infoId + index.toString()} sx={{ mt: 2 }}>
					<Typography>
						{val.name + (val.name != "" ? ":" : "")}
					</Typography>
					<RenderComp></RenderComp>
				</Stack>
			);
		});
	}, [columns, infoId, rowIndex]);
	return (
		<>
			<FontAwesomeIcon
				icon={["fas", "circle-info"]}
				style={{
					width: infoButtonSize - infoButtonPadding * 2,
					height: infoButtonSize - infoButtonPadding * 2,
					margin: 0,
					paddingLeft: infoButtonPadding,
					paddingRight: infoButtonPadding,
					cursor: "pointer",
				}}
				onClick={handleClickOpen}
			/>
			<Dialog open={open} onClose={handleClose}>
				<DDNetCard sx={{ m: 2 }}>
					<CardContent>
						<Stack sx={{ minWidth: maxWidth }}>
							{renderedColumns}
						</Stack>
					</CardContent>
				</DDNetCard>
			</Dialog>
		</>
	);
};

const MuiVirtualizedTableRow = (
	columns: TDDNetTableColumnRender[],
	rowSize: number,
	{
		index,
		style,
	}: {
		index: number;
		style: CSSProperties;
	}
) => {
	const rowId = useMemo(() => nanoid(), []);
	return (
		<TableRow sx={{ ...style }}>
			{columns.map((val) => {
				const RenderComp = val.onRenderRowCell.bind(
					null,
					val.renderIndex,
					index
				);
				return (
					<TableCell
						key={rowId + "__" + val.renderIndex.toString()}
						width={val.width}
						height={style.height}
						style={{
							minWidth: val.width,
							maxWidth: val.width,
							width: val.width,
							padding: 0,
							margin: 0,
						}}
					>
						<RenderComp></RenderComp>
					</TableCell>
				);
			})}
		</TableRow>
	);
};

const VTable = (
	rowCount: number,
	columns: TDDNetTableColumnRender[],
	rowSize: number,
	rowHeight: number,
	containerHeight: number,
	{ children }: { children: JSX.Element | JSX.Element[] }
) => {
	return (
		<Table
			stickyHeader
			sx={{
				width: rowSize,
				tableLayout: "fixed",
			}}
		>
			<TableHead
				sx={{
					width: rowSize,
					height: rowHeight - 1,
					m: 0,
					p: 0,
				}}
			>
				<TableRow
					sx={{
						height: rowHeight - 1,
						p: 0,
						m: 0,
					}}
				>
					{columns.map((val) => (
						<TableCell
							key={
								"table-header-column" +
								val.renderIndex.toString()
							}
							width={val.width}
							onClick={() => {
								if (val.onHeaderClick != undefined)
									val.onHeaderClick();
							}}
							style={{
								minWidth: val.width,
								maxWidth: val.width,
								width: val.width,
								height: rowHeight - 1,
								padding: 0,
								margin: 0,
								overflow: "hidden",
							}}
						>
							{val.name}
						</TableCell>
					))}
				</TableRow>
			</TableHead>
			<TableBody
				sx={{
					width: rowSize,
					height: rowCount * (rowHeight + 1),
					position: "relative",
				}}
			>
				{children}
			</TableBody>
		</Table>
	);
};

const MuiVirtualizedTableInner = ({
	columns,
	rowHeight,
	itemCount,
	size,
	...props
}: Omit<
	FixedSizeListProps,
	"width" | "height" | "itemHeight" | "itemSize" | "children"
> & {
	columns: TDDNetTableColumn[];
	rowHeight: number;
} & SizeMeProps) => {
	const rowSize = useMemo(() => {
		let rowSize = 0;
		columns.forEach((val) => {
			rowSize += val.width;
		});
		return rowSize;
	}, [columns]);

	const { width: scWidth } = useScrollbarSize();

	const { realWidth, renderColumns } = useMemo(() => {
		let renderColumns: TDDNetTableColumnRender[] = columns.map(
			(val, index) => {
				return { ...val, renderIndex: index };
			}
		);
		let realWidth = rowSize;
		let needsInfo = false;
		while (
			realWidth >
			size.width - (scWidth + (needsInfo ? infoButtonSize : 0))
		) {
			let curMaxPrio = -999999;
			// try to remove some rows
			renderColumns.forEach((val) => {
				if (curMaxPrio < val.priority) {
					curMaxPrio = val.priority;
				}
			});
			if (curMaxPrio > 1) {
				renderColumns = renderColumns.filter(
					(val) => val.priority < curMaxPrio
				);
				realWidth = 0;
				renderColumns.forEach((val) => {
					realWidth += val.width;
				});
				needsInfo = true;
			} else break;
		}
		if (needsInfo) {
			renderColumns.push({
				renderIndex: columns.length,
				name: "",
				priority: 1,
				width: infoButtonSize,
				onRenderRowCell: (columnIndex, rowIndex) => {
					return (
						<MuiVirtualizedTableRenderInfo
							columns={columns}
							rowIndex={rowIndex}
						></MuiVirtualizedTableRenderInfo>
					);
				},
			});
			realWidth += infoButtonSize;
		}

		return { renderColumns, realWidth };
	}, [columns, rowSize, scWidth, size.width]);

	return (
		<FixedSizeList
			{...props}
			itemCount={itemCount}
			width={realWidth + scWidth}
			height={size.height}
			itemSize={rowHeight + 1}
			overscanCount={20}
			innerElementType={VTable.bind(
				null,
				itemCount,
				renderColumns,
				realWidth,
				rowHeight,
				size.height
			)}
			style={{
				overflow: "auto",
				position: "absolute",
			}}
		>
			{MuiVirtualizedTableRow.bind(null, renderColumns, realWidth)}
		</FixedSizeList>
	);
};

export const MuiVirtualizedTable = (
	props: Omit<
		FixedSizeListProps,
		"width" | "height" | "itemHeight" | "itemSize" | "children"
	> & {
		columns: TDDNetTableColumn[];
		rowHeight: number;
	}
) => {
	return (
		<SizeMe monitorHeight monitorWidth>
			{({ size }) => {
				return (
					<div
						style={{
							width: "100%",
							height: "100%",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<MuiVirtualizedTableInner
							{...props}
							size={size}
						></MuiVirtualizedTableInner>
					</div>
				);
			}}
		</SizeMe>
	);
};
