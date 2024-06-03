import { browser } from "wxt/browser";
import menuInit from "./menus";

export default defineBackground(() => {
  console.log("Hello background!", { id: browser.runtime.id });
  menuInit(); 
});


