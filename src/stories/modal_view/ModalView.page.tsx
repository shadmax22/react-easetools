import { Modal } from "../../components/modal/Modal";

export function ModalViewPage() {
  const openModal = async () => {
    await Modal({ title: "Hello", body: "Hello WOrld" });
  };

  return (
    <>
      <button onClick={openModal}>Open Me</button>
    </>
  );
}
