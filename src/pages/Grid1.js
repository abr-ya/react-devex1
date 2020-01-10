import React from 'react';
import Paper from "@material-ui/core/Paper";
import "@devexpress/dx-react-grid";
import {Grid, Table, TableHeaderRow} from "@devexpress/dx-react-grid-material-ui";

const Grid1 = (props) => {
    const {rows, columns} = props;
  
    return (
        <Paper>
            <h1>Grid1</h1>
            <Grid rows={rows} columns={columns}>
                <Table />
                <TableHeaderRow />
            </Grid>
        </Paper>
    );
}

export default Grid1;
