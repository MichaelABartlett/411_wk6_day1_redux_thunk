import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { SimpleMenu } from './Menu';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const handleClick = (props) => {
  console.log('props.makes: ', props.makes)
};

export function CustomTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Make</TableCell>
            <TableCell  align="right" onClick={handleClick}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((row, index) => (
            <TableRow key={row.MakeId}>
              <TableCell component="th" scope="row">{row.MakeId}</TableCell>
              <TableCell>{row.MakeName}</TableCell>
              <TableCell  align="right">{<SimpleMenu makes={props.makes} index={index} deleteMake={props.deleteMake}/>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}