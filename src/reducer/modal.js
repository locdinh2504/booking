import * as types from "./../constants/ui";

const initialstate = {
  showModal: false,
  title: "",
  component: null,
};

const modal = (state = initialstate, action) => {
  switch (action.type) {
    case types.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case types.HIDE_MODAL:
      return {
        ...state,
        showModal: false,
        title: "",
        component: null,
      };
    case types.CHANGE_MODAL_TITLE:
      const { title } = action.payload;
      return {
        ...state,
        title: title,
      };
    case types.CHANGE_MODAL_CONTENT:
      const { component } = action.payload;
      return {
        ...state,
        component: component,
      };

    default:
      return state;
  }
};

export default modal;
