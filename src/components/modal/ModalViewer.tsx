import { ModalContainer } from "./components/ModalContainer/ModalContainer";
import { ThisProvider } from "react-usethis/thisProvider";

export function ModalViewer() {
  //   MODAL_STATE_INIT();

  return (
    <ThisProvider>
      <ModalContainer></ModalContainer>
    </ThisProvider>
  );
}
