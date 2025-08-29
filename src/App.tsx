import "./App.css";
import { Modal } from "./modal/modal";
import { ModalViewer } from "./modal/modalViewer";

const ModalBody = ({ modalHandler }: any) => (
  <>
    Hii{" "}
    <b onClick={() => modalHandler.store((modalHandler.get() ?? 0) + 1)}>
      Hello world {modalHandler.get()}
    </b>
  </>
);
function App() {
  return (
    <>
      <div className="flex flex-col gap-12">
        <h1>
          EASE-<span className="text-green-400">TOOLS</span>
        </h1>

        <div className="flex justify-center">
          <button
            onClick={async () => {
              await Modal({
                title: "Hello World",
                body: (modalHandler) => (
                  <ModalBody modalHandler={modalHandler}></ModalBody>
                ),
                type: "info",
                size: "normal",
                footer: (btn) => {
                  return <button onClick={() => btn()}>CLOSE</button>;
                },
              });
            }}
          >
            MODAL
          </button>
        </div>
      </div>

      <ModalViewer></ModalViewer>
    </>
  );
}

export default App;
