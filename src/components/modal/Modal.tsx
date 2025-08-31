import { use_MODAL_STATE_SLICE } from "./state/modal.state";
import { ModalCloserType, modalType } from "./types/modal.type";

export async function Modal(props: modalType) {
  const modal_state = use_MODAL_STATE_SLICE();

  return new Promise((resolver, error) => {
    modal_state.addModalInstance({
      props,
      resolver,
      error,
    });
  });
}

Modal.close = async (instance_id: number, props?: ModalCloserType) => {
  const modal_state = use_MODAL_STATE_SLICE();

  const modal_instance = modal_state.getInstance(instance_id);

  const data = props?.data;
  const close = props?.close === null ? true : props?.close;

  await modal_instance.resolver(data);

  modal_state.upsert.at("instances", instance_id, (pv: any) => ({
    ...pv,
    hide: true,
    reserved_data: null,
  }));

  if (close !== false)
    setTimeout(() => modal_state.removeModalInstance(instance_id), 100);

  return true;
};
