import React, { useState } from 'react';
import Paper from "@material-ui/core/Paper";
import {
	SortingState,
	IntegratedSorting,
	PagingState,
	IntegratedPaging,
	FilteringState,
	IntegratedFiltering,
} from '@devexpress/dx-react-grid';
import {
	Grid,
	Table,
	TableHeaderRow,
	TableFilterRow,
	PagingPanel,
	TableColumnResizing,
} from "@devexpress/dx-react-grid-material-ui";

const Grid1 = (props) => {
	const {rows, columns} = props;
	const [sorting, setSorting] = useState([{ columnName: 'name', direction: 'asc' }]);
	const [filters, setFilters] = useState([]); // здесь можно предустановить фильтр
	const baseUrl = "https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/";

	const [defaultColumnWidths] = useState([
		{ columnName: 'name', width: 250 },
		{ columnName: 'sex', width: 150 },
		{ columnName: 'city', width: 250 },
		{ columnName: 'car', width: 250 },
	]);
  
	return (
		<Paper>
			<h1>Grid1</h1>
			<h2>Links:</h2>
			<ul>
				<li>
					<a href={`${baseUrl}controlled-and-uncontrolled-modes/`} target="_blank" rel="noopener noreferrer">
						Controlled (Stateless) and Uncontrolled (Stateful) Modes (+ sorting)
					</a>
				</li>
				<li>
					<a href={`${baseUrl}column-resizing/`} target="_blank" rel="noopener noreferrer">
						Column Resizing
					</a>
				</li>
				<li>
					<a href={`${baseUrl}filtering/`} target="_blank" rel="noopener noreferrer">
						Filtering
					</a>
				</li>
			</ul>

			<Grid rows={rows} columns={columns}>
				<FilteringState
					filters={filters}
					onFiltersChange={setFilters}
				/>
				<IntegratedFiltering />
				<SortingState
					sorting={sorting}
					onSortingChange={setSorting}
				/>
				<PagingState
					defaultCurrentPage={0}
					pageSize={4}
				/>
				<IntegratedSorting />
				<IntegratedPaging />
				<PagingPanel />
				<Table />
				<TableColumnResizing defaultColumnWidths={defaultColumnWidths} />
				<TableHeaderRow showSortingControls />
				<TableFilterRow />
			</Grid>
		</Paper>
	);
}

export default Grid1;
