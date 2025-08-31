import { store, useThisReturnType } from "react-usethis";
import { modalStateType, modalType } from "../types/modal.type";

export function MODAL_SLICE(state: useThisReturnType<modalStateType>) {
  return {
    ...state,

    getInstanceList: () => state.get().instance_ids,

    getInstance: (instance_id: number) => state.fetch().instances[instance_id],

    addModalInstance: (instanceData: {
      props: modalType;
      resolver: any;
      error: any;
    }) => {
      const { props, resolver, error } = instanceData;
      const instance_id = Math.ceil(Math.random() * 1000);
      state.update((pv) => ({
        ...pv,
        instances: {
          ...pv.instances,
          [instance_id]: store.fun({
            props,
            resolver,
            error,
            open: true,
            hide: false,
          }),
        },
        instance_ids: [...pv.instance_ids, instance_id],

        active: instance_id,
      }));
    },

    removeModalInstance: (instance_id: number) => {
      state.update((state_data) => {
        const {
          instance_ids: current_instance_ids,
          instances: current_instances,
        } = state_data;

        const instances = { ...current_instances };
        delete instances[instance_id];
        const instance_ids = current_instance_ids.filter(
          (id) => instance_id != id
        );
        return {
          ...state_data,
          instances,
          instance_ids,
          // instances: [...pv.instances],
        };
      });
    },
  };
}
