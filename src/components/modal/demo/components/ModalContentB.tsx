export function ModalContentB(prop: any) {
  return (
    <>
      <h1>This is second modal content</h1>

      <button
        onClick={() => {
          prop.resolver();
        }}
      >
        Resolve It
      </button>
    </>
  );
}

async function onClickHandle() {}
