import React, { Component } from "react";

// import button grid and textfield from material-ui

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextFeild from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default class ViewStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.requestStudents();
  }

  requestStudents = () => {
    fetch("/api/students")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState([data]);

        // this.state.smth.map((student) => {
        //     console.log(student);
        //     }
        // );
        console.log(this.state[0]);
      });
  };

  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} align="center">
            <Typography variant="h4" component="h4">
              View Students
            </Typography>
          </Grid>
          {/* make textfield take full width */}
          <Grid item xs={12} align="center">
            <TextFeild id="outlined-basic" label="Search" variant="outlined" />
          </Grid>
          <Grid item xs={12} align="center">
            <Button
              color="primary"
              variant="contained"
              onClick={this.requestStudents}
            >
              Search
            </Button>

            <Button
              color="secondary"
              variant="contained"
              to="/"
              component={Link}
            >
              Back
            </Button>
          </Grid>
        </Grid>

        <TableContainer component={Paper}>
          <Table  aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">URN</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state[0] ? this.state[0].map((student) => (
                    <TableRow key={student.URN}>
                    <TableCell component="th" scope="row">
                        {student.name}
                    </TableCell>
                    <TableCell align="right">{student.age}</TableCell>
                    <TableCell align="right">{student.URL}</TableCell>
                    </TableRow>
                ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
        
      </div>
    );
  }
}

<style></style>;
