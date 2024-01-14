import "../src/styles/styles.scss";
import { WApp } from "@tne-kit/space";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (story) => ({
    components: { story, WApp },
    template: `<t-app theme='light'><story /></t-app>`,
  }),
];
