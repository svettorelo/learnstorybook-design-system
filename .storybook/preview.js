import React from "react";
import {GlobalStyle} from "../src/shared/global";

/**Global decorator applied to ALL stories */
export const decorators = [
  Story => (
    <>
      <GlobalStyle/>
      <Story/>
    </>
  )
];

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
  // Storybook a11y addon configuration
  a11y: {
    element: "#root",  // the target DOM element
    manual: false      // sets the execution mode for the addon
  }
  // controls: {
  //   matchers: {
  //     color: /(background|color)$/i,
  //     date: /Date$/,
  //   },
  // },
}