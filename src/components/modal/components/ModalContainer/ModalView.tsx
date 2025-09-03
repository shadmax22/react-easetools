import { setClass } from "../../../../utils/ease";
import { MODAL_STATE } from "../../state/modal.state";
import style from "../../style/modal.module.css";
import { ModalResolver } from "../../utils/modalResolver";

export function ModalView(prop: { instance_id: number }) {
  const { instance_id } = prop;
  const state_slice = MODAL_STATE();

  const active_instance = state_slice.getActiveInstance();
  const modal_instance = state_slice.getInstance(instance_id);
  const givenProps = modal_instance.props;

  const animation_classess = {
    open: givenProps?.animation?.open ?? style["anim_slideTo_bottom_to_top"],
    close: givenProps?.animation?.close ?? style["anim_slideTo_top_to_bottom"],
  };

  if (!modal_instance?.open) return <></>;

  const seeded_modal_resolver = ModalResolver(instance_id);
  console.log(active_instance, instance_id);
  return (
    <>
      <div
        className={setClass(
          "soft-modal-backdrop",
          style["alert-container"],
          animation_classess.open,
          givenProps?.position ? style["pos_" + givenProps?.position] : "",
          modal_instance?.hide ? style["anim_fade_out_slow"] : ""
        )}
        style={active_instance != instance_id ? { display: "none" } : {}}
      >
        <div
          {...givenProps?.props?.container}
          className={setClass(
            "soft-modal-container",

            style["alert-modal"],
            style["modal_" + givenProps?.size],
            modal_instance?.hide ? animation_classess.close : "",
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
              givenProps?.title(seeded_modal_resolver)
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
              givenProps?.body(seeded_modal_resolver)
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
                  givenProps?.footer(seeded_modal_resolver)
                ) : (
                  <>
                    <button
                      className="btn-primary"
                      onClick={ModalResolver(instance_id) as any}
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
