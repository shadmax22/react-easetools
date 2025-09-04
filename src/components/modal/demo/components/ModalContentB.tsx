import { ModalResolverType } from "../../types/modal.type";

export function ModalContentB(prop: { resolver: ModalResolverType }) {
  return (
    <>
      <h1>This is second modal content</h1>

      <button
        onClick={() => {
          prop.resolver({
            data: {
              hello: 1,
            },
          });
        }}
      >
        Resolve It
      </button>
    </>
  );
}
