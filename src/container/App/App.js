import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { Provider } from "react-redux";
import GlobalLoading from "../../GlobalLoading/GlobalLoading";
import TaskBoard from "../TaskBoard";
import ModalBoard from "./../../component/Modal";
import configStore from "./../../store/configStore";
import style from "./style";

const store = configStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ModalBoard></ModalBoard>
        <GlobalLoading></GlobalLoading>
        <TaskBoard />
      </Provider>
    );
  }
}

export default withStyles(style)(App);
