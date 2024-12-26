import { createRenderer, Config, loadFonts } from "@lightningtv/solid";
import { WebGlCoreRenderer, SdfTextRenderer } from "@lightningjs/renderer/webgl";
import { Inspector } from "@lightningjs/renderer/inspector";
import fonts from "../src/fonts";
import { themes } from "@storybook/theming";
import { useFocusManager } from "@lightningtv/solid/primitives";
import { createSignal, Show } from "solid-js";

Config.rendererOptions = {
  appWidth: 1280,
  appHeight: 720,
  deviceLogicalPixelRatio: 2 / 3,
  inspector: Inspector,
  devicePhysicalPixelRatio: 1,
  fontEngines: [SdfTextRenderer],
  renderEngine: WebGlCoreRenderer,
};

Config.fontSettings.fontFamily = "Roboto";

let startRenderer = true;
const solidRoot = document.createElement("div");
let toRender, setToRender;

const preview = {
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
    },
    docs: {
      theme: themes.dark,
      story: {
        inline: false,
        iframeHeight: "360px",
      },
      source: {
        type: "code",
        language: "tsx",
      },
    },
  },
  decorators: [
    (Story, context) => {
      if (setToRender) {
        setToRender(Story);
      }
      if (startRenderer) {
        startRenderer = false;
        const { render } = createRenderer(undefined, solidRoot);
        loadFonts(fonts);

        render(() => {
          useFocusManager();
          [toRender, setToRender] = createSignal(Story);
          return <Show when={toRender()}>{toRender()}</Show>;
        });
      }

      return solidRoot;
    },
  ],
};

export default preview;
