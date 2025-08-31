import { ReactElement } from "react";

interface ModalProps {
  container?: React.HTMLAttributes<HTMLDivElement>;
  title?: React.HTMLAttributes<HTMLDivElement>;
  body?: React.HTMLAttributes<HTMLDivElement>;
  footer?: React.HTMLAttributes<HTMLDivElement>;
}

export type modalType = {
  title: ((modalCloser: any) => ReactElement) | string | false | null;
  body: ((modalCloser: any) => ReactElement) | string;
  footer?: ((modalCloser: any) => ReactElement) | false | null;
  size?: "full-modal" | "fluid" | "normal";
  type?: "info" | "success" | "error" | "warning";
  props?: ModalProps;
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "center";
  animation?: {
    open?: string;
    close?: string;
  };
};

export type modalInstanceType = {
  props: modalType;
  open: boolean;
  hide: boolean;
  resolver: (data: any) => Promise<any>;
  error: (data: any) => Promise<any>;
  reserved_data?: unknown;
};
export type modalStateType = {
  instances: {
    [instance_id: number]: modalInstanceType;
  };
  instance_ids: number[];
  active_instance: number | null;
};

export type ModalCloserType = { data?: any; close?: boolean };

export type ModalResolverType = {
  (instance_id: number): (props?: ModalCloserType) => unknown;
  store: (instance_id: number) => (data: unknown) => boolean;
  get: (instance_id: number) => () => unknown;
  close: (instance_id: number) => (props?: ModalCloserType) => unknown;
};
