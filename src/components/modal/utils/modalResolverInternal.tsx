import { set } from "react-usethis";
import { Modal } from "../Modal";
import { use_MODAL_STATE_SLICE } from "../state/modal.state";
import {
  ModalCloserType,
  ModalResolverInternalType,
  ModalResolverType,
} from "../types/modal.type";

export const ModalResolverInernal: ModalResolverInternalType = (
  intance_id: number
) => {
  const closer = (props: ModalCloserType) => {
    return Modal.close(intance_id, props);
  };
  const ModalResolver: any = closer;

  ModalResolver.store = (data: unknown) => {
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

  ModalResolver.get = () => {
    const modal_state = use_MODAL_STATE_SLICE();

    return modal_state?.getInstance(intance_id)?.reserved_data;
  };
  ModalResolver.close = closer;

  return ModalResolver as ModalResolverType;
};
