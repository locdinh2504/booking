import { Button, TableBody, withStyles } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import React, { Component } from "react";
import style from "./style";

class TaskList extends Component {
  deleteTask = (status, totalPrice) => {
    this.props.deleteTask(status, totalPrice);
  };

  editTask = (status, notes) => {
    this.props.editTask(status, notes);
  };

  render() {
    const { classes, status, deleteTask } = this.props;
    var totalPrice = null;
    totalPrice = status.price * status.quantity;

    return (
      <TableBody>
        <TableRow className={classes.rowContainer}>
          <TableCell className={classes.hotelName}>
            {status.hotelName}
          </TableCell>
          <TableCell>{status.roomName}</TableCell>
          {this.showInclude()}
          {this.showStorage()}
          <TableCell align="right">
            {new Intl.NumberFormat("ja-JP", {
              style: "currency",
              currency: "JPY",
            }).format(status.price)}
          </TableCell>
          <TableCell align="right">{status.quantity}</TableCell>
          <TableCell align="right">
            {/* {this.showToTalPrice(status.price, status.quantity)} */}

            {new Intl.NumberFormat("ja-JP", {
              style: "currency",
              currency: "JPY",
            }).format(totalPrice)}
          </TableCell>
          <TableCell align="right">{status.notes}</TableCell>
          <TableCell align="right" className={classes.buttonContainer}>
            <Button
              variant="contained"
              size="small"
              color="secondary"
              onClick={() => this.deleteTask(status, totalPrice)}
              className={classes.buttonDelete}
            >
              Xóa
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.buttonDelete}
              onClick={() => this.editTask(status, status.notes)}
            >
              Sửa
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  showInclude = () => {
    const { status } = this.props;
    if (status && status.roomName === "Standard Double Room") {
      return <TableCell align="right">Miễn phí sân tennis</TableCell>;
    } else if (status && status.roomName === "Superior Room") {
      return <TableCell align="right">Spa miễn phí</TableCell>;
    } else if (status && status.roomName === "Deluxe Room") {
      return <TableCell align="right">Chính sách đổi trả miễn phí</TableCell>;
    }
  };
  showStorage = () => {
    const { status } = this.props;
    if (status && status.roomName === "Standard Double Room") {
      return <TableCell align="right">2</TableCell>;
    } else if (status && status.roomName === "Superior Room") {
      return <TableCell align="right">4</TableCell>;
    } else if (status && status.roomName === "Deluxe Room") {
      return <TableCell align="right">6</TableCell>;
    }
  };
}

export default withStyles(style)(TaskList);
