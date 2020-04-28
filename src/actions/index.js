import * as types from "./../constants/index";
import * as uis from "./../constants/ui";
export const fetchdata = () => {
  return {
    type: types.FETCH_DATA,
  };
};

export const fetchdatasucces = (data) => {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchdatafail = (data) => {
  return {
    type: types.FETCH_DATA_FAIL,
    payload: {
      data,
    },
  };
};

///show hide loading ///
export const showloading = () => {
  return {
    type: uis.SHOW_LOADING,
  };
};

export const hideloading = () => {
  return {
    type: uis.HIDE_LOADING,
  };
};

///add data /////

export const addtask = (roomName, quantity, notes) => {
  return {
    type: types.ADD_DATA,
    payload: {
      roomName,
      quantity,
      notes,
    },
  };
};

export const addtasksuccess = (data) => {
  return {
    type: types.ADD_DATA_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addtaskfail = (error) => {
  return {
    type: types.ADD_DATA_FAIL,
    payload: {
      error,
    },
  };
};

////delete data /////////
export const deletetask = (id) => {
  return {
    type: types.DELETE_DATA,
    payload: {
      id,
    },
  };
};

export const deletetasksuccess = (data) => {
  return {
    type: types.DELETE_DATA_SUCCESS,
    payload: {
      data,
    },
  };
};

export const deletetaskfail = (data) => {
  return {
    type: types.DELETE_DATA_FAIL,
    payload: {
      data,
    },
  };
};

//set data editing ////
export const setdata = (task) => {
  return {
    type: types.SET_DATA_EDITING,
    payload: {
      task,
    },
  };
};

//update data////

export const updatetask = (upData) => {
  return {
    type: types.UPDATE_DATA,
    payload: {
      upData,
    },
  };
};

export const updatetasksuccess = (data) => {
  return {
    type: types.UPDATE_DATA_SUCCESS,
    payload: {
      data,
    },
  };
};
export const updatetaskfail = (data) => {
  return {
    type: types.UPDATE_DATA_FAIL,
    payload: {
      data,
    },
  };
};
