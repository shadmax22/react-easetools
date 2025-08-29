import { useThis } from "react-usethis";
import { ModalReolver } from "../modal/modal";
import { ReactElement } from "react";

interface ModalProps {
  container?: React.HTMLAttributes<HTMLDivElement>;
  title?: React.HTMLAttributes<HTMLDivElement>;
  body?: React.HTMLAttributes<HTMLDivElement>;
  footer?: React.HTMLAttributes<HTMLDivElement>;
}

export type modalType = {
  title:
    | ((modalCloser: typeof ModalReolver) => ReactElement)
    | string
    | false
    | null;
  body: ((modalCloser: typeof ModalReolver) => ReactElement) | string;
  footer?: ((modalCloser: typeof ModalReolver) => ReactElement) | false | null;
  size?: "full-modal" | "fluid" | "normal";
  type?: "info" | "success" | "error" | "warning";
  props?: ModalProps;
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "center";
  animation?: {
    open?: string;
    close?: string;
  };
};

/* MODAL_STATE */
export const MODAL_STATE_NAME = "modal";
export const MODAL_STATE_DEFAULT_OBJECT = {
  props: {
    title: "",
    body: () => <></>,
    buttons: [{ okay: (btn: any) => btn() }],
  },
};

export function use_MODAL_STATE() {
  return useThis(MODAL_STATE_NAME); // THIS IS HAS TO BE INITALIZED IN MAIN PAGE
}
export const MODAL_STATE_INIT = () => {
  return useThis(MODAL_STATE_NAME, MODAL_STATE_DEFAULT_OBJECT);
};

export function use_MODAL_STATE_SLICE() {
  let state = use_MODAL_STATE();

  return {
    ...state,
    getProps: () => state?.fetch()?.props,
  };
}

// await Alert({
//   title: "",
//   body: "",
// })
