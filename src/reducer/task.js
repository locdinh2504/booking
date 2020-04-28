import * as types from "./../constants/index";

const initialstate = {
  listRoom: [],
  roomEditing: null,
};

const task = (state = initialstate, action) => {
  switch (action.type) {
    case types.FETCH_DATA:
      return {
        ...state,
      };
    case types.FETCH_DATA_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        listRoom: data,
      };
    case types.FETCH_DATA_FAIL:
      return {
        ...state,
      };

    case types.ADD_DATA:
      return {
        ...state,
      };
    case types.ADD_DATA_SUCCESS:
      return {
        ...state,
        listRoom: state.listRoom.concat([data]),
      };
    case types.ADD_DATA_FAIL:
      return {
        ...state,
      };
    case types.DELETE_DATA:
      return {
        ...state,
      };
    case types.DELETE_DATA_SUCCESS:
      const { data: taskId } = action.payload;
      return {
        ...state,
        listRoom: state.listRoom.filter((items) => items.id !== taskId),
      };
    case types.DELETE_DATA_FAIL:
      return {
        ...state,
        listRoom: data,
      };

    case types.SET_DATA_EDITING:
      const { task } = action.payload;

      return {
        ...state,
        roomEditing: task,
      };

    case types.UPDATE_DATA: {
      return {
        ...state,
      };
    }
    case types.UPDATE_DATA_SUCCESS:
      const { listRoom } = state;
      const { data: UP } = action.payload;
      const index = listRoom.findIndex((x) => x.id === UP.id);
      if (index !== -1) {
        const newList = [
          ...listRoom.slice(0, index),
          UP,
          ...listRoom.slice(index + 1),
        ];
        console.log("newlist là : ", newList);
        return {
          ...state,
          listRoom: newList,
        };
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default task;
