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

const Grid2 = (props) => {
    const {rows, columns} = props;
    const [sorting, setSorting] = useState([{ columnName: 'name', direction: 'asc' }]);
    const [filters, setFilters] = useState([]); // здесь можно предустановить фильтр

    const [defaultColumnWidths] = useState([
        { columnName: 'name', width: 250 },
        { columnName: 'sex', width: 150 },
        { columnName: 'city', width: 250 },
        { columnName: 'car', width: 250 },
    ]);
  
    return (
        <Paper>
            <h1>Grid2</h1>

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

export default Grid2;
