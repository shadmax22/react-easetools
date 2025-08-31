import { Modal } from "../Modal";
import { ModalViewer } from "../ModalViewer";
import { ModalContentA } from "./components/ModalContentA";

function ModalDemo() {
  return (
    <>
      <div className="flex flex-col gap-12">
        <h1>
          EASE-<span className="text-green-400">TOOLS</span>
        </h1>

        <div className="flex justify-center">
          <button
            onClick={() => {
              Modal({
                title: "Hello",
                body: () => <ModalContentA />,
              });
            }}
          >
            APP
          </button>
        </div>
      </div>

      <ModalViewer></ModalViewer>
    </>
  );
}

export default ModalDemo;
