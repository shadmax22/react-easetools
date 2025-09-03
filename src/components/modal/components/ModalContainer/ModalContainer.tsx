import { MODAL_STATE } from "../../state/modal.state";
import { ModalView } from "./ModalView";

export function ModalContainer() {
  const state_slice = MODAL_STATE();
  const instances = state_slice?.getInstanceList();

  return (
    <>
      {instances.map((instance_id) => (
        <ModalView instance_id={instance_id}></ModalView>
      ))}
    </>
  );
}
