import React, { useState, useReducer, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import {
	VirtualTableState,
	SelectionState, // sel
} from '@devexpress/dx-react-grid';
import {
	Grid,
	VirtualTable,
	TableHeaderRow,
	TableSelection, // sel
} from '@devexpress/dx-react-grid-material-ui';

const VIRTUAL_PAGE_SIZE = 100;
const MAX_ROWS = 50000;
const URL = 'https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/Sales';
const getRowId = row => row.Id;
const buildQueryString = (skip, take) => `${URL}?skip=${skip}&take=${take}`;

const initialState = {
	rows: [],
	skip: 0,
	requestedSkip: 0,
	take: VIRTUAL_PAGE_SIZE * 2,
	totalCount: 0,
	loading: false,
	lastQuery: '',
};

function reducer(state, { type, payload }) {
	switch (type) {
		case 'UPDATE_ROWS':
			return {
				...state,
				...payload,
				loading: false,
			};
		case 'START_LOADING':
			return {
				...state,
				requestedSkip: payload.requestedSkip,
				take: payload.take,
			};
		case 'REQUEST_ERROR':
			return {
				...state,
				loading: false,
			};
		case 'FETCH_INIT':
			return {
				...state,
				loading: true,
			};
		case 'UPDATE_QUERY':
			return {
				...state,
				lastQuery: payload,
			};
		default:
			return state;
	}
}

export default () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [selection, setSelection] = useState([1]);
	const [columns] = useState([
		{ name: 'Id', title: 'Id', getCellValue: row => row.Id },
		{ name: 'ProductCategoryName', title: 'Category', getCellValue: row => row.ProductCategoryName },
		{ name: 'StoreName', title: 'Store', getCellValue: row => row.StoreName },
		{ name: 'ProductName', title: 'Product', getCellValue: row => row.ProductName },
		{ name: 'SalesAmount', title: 'Amount', getCellValue: row => row.SalesAmount },
	]);
	const [tableColumnExtensions] = useState([
		{ columnName: 'Id', width: 80 },
		{ columnName: 'ProductCategoryName', width: 220 },
		{ columnName: 'StoreName', width: 220 },
		{ columnName: 'SalesAmount', width: 120 },
	]);

	const getRemoteRows = (requestedSkip, take) => {
		console.log('getRemoteRows (requestedSkip, take)', requestedSkip, take);
		dispatch({ type: 'START_LOADING', payload: { requestedSkip, take } });
	};

	const loadData = () => {
		const {
			requestedSkip, take, lastQuery, loading,
        } = state;
        console.log('state', state);
		const query = buildQueryString(requestedSkip, take);
		if (query !== lastQuery && !loading) {
			dispatch({ type: 'FETCH_INIT' });
			fetch(query)
				.then(response => response.json())
				.then(({ data }) => {
					dispatch({
						type: 'UPDATE_ROWS',
						payload: {
							skip: requestedSkip,
							rows: data,
							totalCount: MAX_ROWS,
						},
					});
				})
				.catch(() => dispatch({ type: 'REQUEST_ERROR' }));
			dispatch({ type: 'UPDATE_QUERY', payload: query });
        }
	};

	useEffect(() => loadData());

	const {rows, skip, totalCount, loading} = state;
	console.log('rows:', rows);
	
	return (
		<Paper>
            <h1>Virtual Scrolling</h1>
            <p>
                <a href="https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/lazy-loading/"
                    target="_blank" rel="noopener noreferrer">
                    React Grid - Virtual Scrolling with Remote Data: Lazy Loading
                </a>
            </p>
			<p>
                <a href="https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/selection/#select-on-a-row-click"
                    target="_blank" rel="noopener noreferrer">
                    React Grid - Selection - Select on a Row Click
                </a>
            </p>
			<Grid
				rows={rows}
				columns={columns}
				getRowId={getRowId}
			>
				<SelectionState
					selection={selection}
					onSelectionChange={
						(data) => {
							setSelection([data[data.length-1]])
							console.log(data);
						}
					}
				/>
				<VirtualTableState
					loading={loading}
					totalRowCount={totalCount}
					pageSize={VIRTUAL_PAGE_SIZE}
					skip={skip}
					getRows={getRemoteRows}
				/>
				<VirtualTable columnExtensions={tableColumnExtensions} />
				<TableHeaderRow />
				<TableSelection
					selectByRowClick
					highlightRow
					showSelectionColumn={false}
				/>
			</Grid>
		</Paper>
	);
};
