import { setClass } from "../../../../utils/ease";
import { modalType } from "../../types/modal.type";
import style from "../../style/modal.module.css";
import { useEffect, useState } from "react";
import { BasicLoader } from "../../../spinner/BasicSpinner/BasicSpinner";

export function ModalFooter(props: {
  givenProps: modalType;
  seeded_modal_resolver: any;
  instance_id: number;
}) {
  const [state, setState] = useState<{
    givenProps: null | modalType;
    loading: {
      stat: boolean;
      button?: null | number;
    };
  }>({
    givenProps: props.givenProps,
    loading: {
      stat: false,
      button: null,
    },
  });
  const { seeded_modal_resolver } = props;
  const { givenProps } = state;

  const handle_onclick = async (button_id: number, fun: any) => {
    try {
      setState((pv) => ({
        ...pv,
        loading: {
          stat: true,
          button: button_id,
        },
      }));

      await fun(seeded_modal_resolver);
    } catch (e) {
    } finally {
      setState((pv) => ({
        ...pv,
        loading: {
          stat: false,
          button: null,
        },
      }));
    }
  };

  useEffect(() => {
    setState((pv) => {
      return {
        ...pv,
        givenProps: props.givenProps,
      };
    });
  }, [props.givenProps]);

  if (!givenProps) return <></>;
  return (
    <div
      {...givenProps?.props?.footer}
      className={setClass(
        "soft-modal-footer",
        style["alert-footer"],
        givenProps?.props?.footer?.className ?? ""
      )}
    >
      {givenProps?.footer ? (
        givenProps.footer(seeded_modal_resolver)
      ) : givenProps?.buttons && givenProps.buttons.length > 0 ? (
        givenProps.buttons.map((btn, idx) => (
          <button
            key={idx}
            className={setClass(
              "btn",
              btn.variant ? `btn-${btn.variant}` : "btn-primary",
              btn.className ?? ""
            )}
            onClick={async () =>
              await handle_onclick(
                idx,
                btn.onClick ? btn.onClick : seeded_modal_resolver
              )
            }
          >
            {state.loading.stat && state.loading.button == idx ? (
              <BasicLoader></BasicLoader>
            ) : (
              btn.label
            )}
          </button>
        ))
      ) : (
        <button className="btn-primary" onClick={seeded_modal_resolver}>
          CLOSE
        </button>
      )}
    </div>
  );
}
