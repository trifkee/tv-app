import { createRenderer, Config, loadFonts } from "@lightningtv/solid";
import { WebGlCoreRenderer, SdfTextRenderer } from "@lightningjs/renderer/webgl";
import { Inspector } from "@lightningjs/renderer/inspector";
import { Route } from "@solidjs/router";
import { HashRouter } from "@lightningtv/solid/primitives";
import App from "./pages/App";
import HelloWorld from "./pages/HelloWorld";
import TextPage from "./pages/Text";
import NotFound from "./pages/NotFound";
import fonts from "./fonts";

Config.debug = false;
Config.fontSettings.fontFamily = "Roboto";
Config.fontSettings.color = 0xffffffff;
Config.rendererOptions = {
  numImageWorkers: window.navigator.hardwareConcurrency || 2,
  fontEngines: [SdfTextRenderer],
  renderEngine: WebGlCoreRenderer,
  inspector: Inspector,
  // Set the resolution based on window height
  // 720p = 0.666667, 1080p = 1, 1440p = 1.5, 2160p = 2
  deviceLogicalPixelRatio: window.innerHeight / 1080,
  devicePhysicalPixelRatio: 1,
  // Increase to preload images coming from offscreen
  boundsMargin: 20,
};

const { render } = createRenderer();
loadFonts(fonts);
render(() => (
  <HashRouter root={App}>
    <Route path="/" component={HelloWorld} />
    <Route path="/text" component={TextPage} />
    <Route path="/*all" component={NotFound} />
  </HashRouter>
));
