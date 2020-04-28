import * as uis from "./../constants/ui";

///show hide modal ///

export const showmodal = () => {
  return {
    type: uis.SHOW_MODAL
  };
};
export const hidemodal = () => {
  return {
    type: uis.HIDE_MODAL
  };
};

export const changemodaltitle = title => {
  return {
    type: uis.CHANGE_MODAL_TITLE,
    payload: {
      title
    }
  };
};

export const changemodalcontent = component => {
  return {
    type: uis.CHANGE_MODAL_CONTENT,
    payload: {
      component
    }
  };
};
