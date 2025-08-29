import { modalType, use_MODAL_STATE_SLICE } from "../states/modal.state";
import { set } from "js-upsert";

export async function Modal(props: modalType) {
  const modal_state = use_MODAL_STATE_SLICE();

  return new Promise((resolve, error) => {
    modal_state.upsert({
      open: set(true),
      props: set(props),
      resolve: set(() => resolve),
      error: set(() => error),
    });
  });
}

export type ModalCloserType = { data?: any; close?: boolean };

Modal.close = (props?: ModalCloserType) => {
  const modal_state = use_MODAL_STATE_SLICE();

  const data = props?.data;
  const close = props?.close === null ? true : props?.close;

  modal_state.fetch().resolve(data);
  modal_state.upsert({
    hide: set(true),
    reserved_data: set(() => null),
  });

  if (close !== false)
    setTimeout(
      () =>
        modal_state.upsert({
          open: set(false),
          hide: set(false),
        }),
      100
    );

  return true;
};
export type ModalResolverType = ModalCloserType;
export const ModalReolver: {
  (props?: ModalCloserType): void;
  store: (props?: any) => boolean;
  get: () => any;
  close: (props?: ModalResolverType) => boolean;
} = (props?: ModalResolverType) => {
  return Modal.close(props);
};
ModalReolver.store = (data) => {
  const modal_state = use_MODAL_STATE_SLICE();
  modal_state.upsert({
    reserved_data: set(() => data),
  });

  return true;
};

ModalReolver.get = () => {
  const modal_state = use_MODAL_STATE_SLICE();

  return modal_state?.fetch()?.reserved_data;
};
ModalReolver.close = (props) => {
  return Modal.close(props);
};
