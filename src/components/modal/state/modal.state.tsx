import { useThis } from "react-usethis";
import { modalStateType } from "../types/modal.type";
import { MODAL_SLICE } from "./modal.slice";

/* MODAL_STATE DEFINATION */
const STATE_NAME = "modal";
const DEFAULT_OBJECT: modalStateType = {
  instances: [],
  instance_ids: [],
  active_instance: null,
};
const STATE = new useThis<modalStateType>(DEFAULT_OBJECT)
  .stateName(STATE_NAME)
  .create();

export function MODAL_STATE() {
  const state = STATE();
  return {
    ...state,
    ...MODAL_SLICE(state),
  };
}
export function use_MODAL_STATE() {
  return STATE.use;
}

export function use_MODAL_STATE_SLICE() {
  const state = use_MODAL_STATE();
  return {
    ...state,
    ...MODAL_SLICE(state),
  };
}
