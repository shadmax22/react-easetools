import { Meta, StoryObj } from "@storybook/react";
import { ModalViewPage } from "./modal_view/ModalView.page";
export default {
  title: "Modal",
  component: ModalViewPage,
  argTypes: {},
} satisfies Meta<typeof ModalViewPage>;
export const General: StoryObj<typeof ModalViewPage> = {
  args: {},
};
