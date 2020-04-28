import { Box, Button, withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import TaskForm from "../../component/TaskForm";
import TaskFormEdit from "../../component/TaskFormEdit";
import TaskList from "../../component/TaskList";
import { HOTEL_LIST } from "../../constants/status";
import * as taskActionsCreators from "./../../actions/index";
import { fetchdata } from "./../../actions/index";
import * as modalActionCretors from "./../../actions/modal";
import style from "./style";

class TaskBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: "",
    };
  }

  componentDidMount() {
    this.props.fetchdata();
  }

  // render hotel list

  renderHotel = () => {
    const { classes } = this.props;
    let xhtml = null;
    xhtml = HOTEL_LIST.map((items, index) => {
      if (items.status === 0) {
        return (
          <Grid item xs={12} md={4} key={index} className={classes.gridHotel}>
            <Card className={classes.rootHotel}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={items.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {items.hotel}
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions className={classes.buttonHotel}>
                <Button
                  color="primary"
                  arial-label="add"
                  size="small"
                  variant="contained"
                  className={classes.fab}
                  onClick={() =>
                    this.addTaskRoom(items.hotel, items.priceS, items.roomNameS)
                  }
                >
                  {items.roomNameS}
                </Button>
                <Button
                  color="primary"
                  arial-label="add"
                  size="small"
                  variant="contained"
                  className={classes.fab}
                  onClick={() =>
                    this.addTaskRoom(
                      items.hotel,
                      items.priceSS,
                      items.roomNameSS
                    )
                  }
                >
                  {items.roomNameSS}
                </Button>
                <Button
                  color="primary"
                  arial-label="add"
                  size="small"
                  variant="contained"
                  className={classes.fab}
                  onClick={() =>
                    this.addTaskRoom(
                      items.hotel,
                      items.priceSSS,
                      items.roomNameSSS
                    )
                  }
                >
                  {items.roomNameSSS}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      } else if (items.status === 1) {
        return (
          <Grid item xs={12} md={4} key={index} className={classes.gridHotel}>
            <Card className={classes.rootHotel}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={items.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {items.hotel}
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions className={classes.buttonHotel}>
                <Button
                  color="primary"
                  arial-label="add"
                  size="small"
                  variant="contained"
                  className={classes.fab}
                  onClick={() =>
                    this.addTaskRoom(items.hotel, items.priceS, items.roomNameS)
                  }
                >
                  {items.roomNameS}
                </Button>
                <Button
                  color="primary"
                  arial-label="add"
                  size="small"
                  variant="contained"
                  disabled
                  className={classes.fab}
                  onClick={() =>
                    this.addTaskRoom(
                      items.hotel,
                      items.priceSS,
                      items.roomNameSS
                    )
                  }
                >
                  {items.roomNameSS}
                </Button>
                <Button
                  color="primary"
                  arial-label="add"
                  size="small"
                  variant="contained"
                  className={classes.fab}
                  onClick={() =>
                    this.addTaskRoom(
                      items.hotel,
                      items.priceSSS,
                      items.roomNameSSS
                    )
                  }
                >
                  {items.roomNameSSS}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      } else {
        return (
          <Grid item xs={12} md={4} key={index} className={classes.gridHotel}>
            <Card className={classes.rootHotel}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={items.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {items.hotel}
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions className={classes.buttonHotel}>
                <Button
                  color="primary"
                  arial-label="add"
                  size="small"
                  variant="contained"
                  className={classes.fab}
                  onClick={() =>
                    this.addTaskRoom(items.hotel, items.priceS, items.roomNameS)
                  }
                >
                  {items.roomNameS}
                </Button>
                <Button
                  color="primary"
                  arial-label="add"
                  size="small"
                  variant="contained"
                  disabled
                  className={classes.fab}
                  onClick={() =>
                    this.addTaskRoom(
                      items.hotel,
                      items.priceSS,
                      items.roomNameSS
                    )
                  }
                >
                  {items.roomNameSS}
                </Button>
                <Button
                  color="primary"
                  arial-label="add"
                  size="small"
                  variant="contained"
                  disabled
                  className={classes.fab}
                  onClick={() =>
                    this.addTaskRoom(
                      items.hotel,
                      items.priceSSS,
                      items.roomNameSSS
                    )
                  }
                >
                  {items.roomNameSSS}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      }
    });

    return xhtml;
  };

  // render grid list
  showRenderGrid = () => {
    const { classes, listRoom } = this.props;
    let xhtml = null;

    xhtml = listRoom.map((status, index) => {
      return (
        <TaskList
          xs={12}
          md={12}
          deleteTask={this.deleteTask}
          editTask={() => this.editTask(status)}
          key={status.id}
          status={status}
        ></TaskList>
      );
    });

    return xhtml;
  };

  /////delete////
  deleteTask = (status, totalPrice) => {
    const { modalActionCretors, classes } = this.props;
    const {
      showmodal,
      changemodaltitle,
      changemodalcontent,
      hidemodal,
    } = modalActionCretors;
    showmodal();
    changemodaltitle("Xóa khách sạn đã chọn ?");
    changemodalcontent(
      <div>
        <p>
          Bạn có muốn xóa {status.roomName}, <strong>{status.hotelName}</strong>{" "}
          ?
        </p>
        <div className={classes.button}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="small"
            className={classes.buttonSubmit}
            onClick={() => this.onDeleteData(status, totalPrice)}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            type="button"
            size="small"
            onClick={hidemodal}
          >
            Cancle
          </Button>
        </div>
      </div>
    );
  };

  onDeleteData = (status) => {
    const { id } = status;
    console.log(status);
    console.log("id :", id);
    const { taskActionsCreators, modalActionCretors } = this.props;
    const { hidemodal } = modalActionCretors;
    const { deletetask } = taskActionsCreators;
    deletetask(id);
  };

  editTask = (status) => {
    console.log("status của edit :", status);

    const { modalActionCretors, classes, taskActionsCreators } = this.props;
    const {
      showmodal,
      changemodaltitle,
      changemodalcontent,
      hidemodal,
    } = modalActionCretors;
    const { setdata } = taskActionsCreators;
    setdata(status);
    showmodal();
    changemodaltitle("Chỉnh sửa ghi chú, số lượng phòng");
    changemodalcontent(
      <TaskFormEdit
        status={status}
        onEditTask={this.onEditTask}
        hidemodal={hidemodal}
      ></TaskFormEdit>
    );
  };

  onEditTask = (data) => {
    console.log("data từ edit :", data);
  };

  ///add /////

  addTaskRoom = (hotel, price, room) => {
    const { modalActionCretors } = this.props;
    const {
      showmodal,
      changemodaltitle,
      changemodalcontent,
      hidemodal,
    } = modalActionCretors;
    showmodal();
    changemodaltitle("Add typeof Room");
    changemodalcontent(
      <TaskForm hotel={hotel} price={price} room={room} hidemodal={hidemodal} />
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container className={classes.hotelContainer}>
          {this.renderHotel()}
        </Grid>

        {/* list  */}
        <Grid container spacing={3} className={classes.items}>
          <Grid item xs={12} md={12}>
            <Box mt={2} mb={2}>
              <div className={classes.status}></div>
            </Box>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Tên Khách Sạn</TableCell>
                  <TableCell>Loại Phòng</TableCell>
                  <TableCell align="right">Giá này đã bao gồm</TableCell>
                  <TableCell align="right">Sức chứa</TableCell>
                  <TableCell align="right">Giá phòng/đêm</TableCell>
                  <TableCell align="right">Số lượng</TableCell>
                  <TableCell align="right">Tổng tiền</TableCell>
                  <TableCell align="right">Ghi chú</TableCell>
                  <TableCell align="right">Chỉnh sửa</TableCell>
                </TableRow>
              </TableHead>
              {/* show items  */}
              {this.showRenderGrid()}
            </Table>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    listRoom: state.task.listRoom,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    fetchdata: bindActionCreators(fetchdata, dispatch),
    modalActionCretors: bindActionCreators(modalActionCretors, dispatch),
    taskActionsCreators: bindActionCreators(taskActionsCreators, dispatch),
  };
};

const withconnect = connect(mapStatetoProps, mapDispatchtoProps);

export default compose(withconnect, withStyles(style))(TaskBoard);
