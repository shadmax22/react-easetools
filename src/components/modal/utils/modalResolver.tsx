import { set } from "react-usethis";
import { use_MODAL_STATE_SLICE } from "../state/modal.state";
import { Modal } from "../Modal";
import { ModalCloserType, ModalResolverType } from "../types/modal.type";

export const ModalResolver: ModalResolverType =
  (intance_id: number) => (props?: ModalCloserType) => {
    return Modal.close(intance_id, props);
  };

ModalResolver.store = (intance_id: number) => (data: unknown) => {
  const modal_state = use_MODAL_STATE_SLICE();
  modal_state.upsert({
    instances: {
      [intance_id]: {
        reserved_data: set.fun(data),
      },
    },
  });

  return true;
};

ModalResolver.get = (intance_id: number) => () => {
  const modal_state = use_MODAL_STATE_SLICE();

  return modal_state?.getInstance(intance_id)?.reserved_data;
};
ModalResolver.close = (intance_id: number) => (props) => {
  return Modal.close(intance_id, props);
};
