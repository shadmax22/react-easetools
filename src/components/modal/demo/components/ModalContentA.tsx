import { Modal } from "../../Modal";
import { ModalContentB } from "./ModalContentB";

export function ModalContentA() {
  return (
    <>
      <h1>This is first modal content</h1>

      <button onClick={onClickHandle}>APP</button>
    </>
  );
}

async function onClickHandle() {
  await Modal({
    title: "Hello",
    body: (resolver) => <ModalContentB resolver={resolver} />,
  });
}
