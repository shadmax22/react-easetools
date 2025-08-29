import type { Preview } from "@storybook/react";
import React from "react";
import { ModalViewer } from "../src/modal/modalViewer";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <ModalViewer />

        <Story />
      </>
    ),
  ],
};

export default preview;
