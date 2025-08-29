import { modalType, use_MODAL_STATE_SLICE } from "../states/modal.state";
import { setClass } from "../utils/ease";
import { ModalReolver } from "./modal";
import style from "./style/modal.module.css";

export function ModalContainer() {
  const state = use_MODAL_STATE_SLICE();
  const state_data = state.get();
  const givenProps: modalType = state?.getProps();

  const animation_classess = {
    open: givenProps?.animation?.open ?? style["anim_slideTo_bottom_to_top"],
    close: givenProps?.animation?.close ?? style["anim_slideTo_top_to_bottom"],
  };

  if (!state_data?.open) return <></>;

  return (
    <>
      <div
        className={setClass(
          "soft-modal-backdrop",
          style["alert-container"],
          animation_classess.open,
          givenProps?.position ? style["pos_" + givenProps?.position] : "",
          state_data?.hide ? style["anim_fade_out_slow"] : ""
        )}
      >
        <div
          {...givenProps?.props?.container}
          className={setClass(
            "soft-modal-container",

            style["alert-modal"],
            style["modal_" + givenProps?.size],
            state_data?.hide ? animation_classess.close : "",
            givenProps?.props?.container?.className ?? ""
          )}
        >
          <div
            {...givenProps?.props?.title}
            className={setClass(
              "soft-modal-title",

              style["alert-title"],
              style["type_" + (givenProps?.type ?? "info")],

              givenProps?.props?.title?.className ?? ""
            )}
          >
            {typeof givenProps?.title == "function" ? (
              givenProps?.title(ModalReolver)
            ) : (
              <>
                <span
                  className={setClass("soft-modal-status", style["circle"])}
                ></span>
                <h2>{givenProps?.title}</h2>
              </>
            )}
          </div>

          <div
            {...givenProps?.props?.body}
            className={setClass(
              "soft-modal-body",

              style["alert-body"],
              givenProps?.props?.body?.className ?? ""
            )}
          >
            {typeof givenProps?.body == "function" ? (
              givenProps?.body(ModalReolver)
            ) : (
              <>
                <p>{givenProps?.body}</p>
              </>
            )}
          </div>

          {givenProps?.footer !== null && (
            <>
              <div
                {...givenProps?.props?.footer}
                className={setClass(
                  "soft-modal-footer",

                  style["alert-footer"],
                  givenProps?.props?.footer?.className ?? ""
                )}
              >
                {givenProps?.footer ? (
                  givenProps?.footer(ModalReolver)
                ) : (
                  <>
                    <button
                      className="btn-primary"
                      onClick={() => ModalReolver()}
                    >
                      CLOSE
                    </button>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
