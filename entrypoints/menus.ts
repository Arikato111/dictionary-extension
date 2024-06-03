import { browser, Menus, Tabs } from "wxt/browser";

function onShow(info: Menus.OnShownInfoType, tab: Tabs.Tab) {
  if (info.contexts.includes("selection")) {
    browser.contextMenus.update("translateWord", { visible: true });
  } else {
    browser.contextMenus.update("translateWord", { visible: false });
  }
  browser.contextMenus.refresh();
}

function onClicked(info: Menus.OnClickData, tab: Tabs.Tab | undefined) {
  switch (info.menuItemId) {
    case "translateWord":
      browser.tabs.sendMessage(tab?.id ?? 0, "translateWord");
      break;
  }
}

export function contextListener() {
  if (!!browser.contextMenus.onShown)
    browser.contextMenus.onShown.addListener(onShow);
  browser.contextMenus.onClicked.addListener(onClicked);
}

function setupContextMenu() {
  browser.contextMenus.create({
    id: "translateWord",
    title: "search dictionary",
    contexts: ["all"],
    visible: true,
  });
}

function menuInit() {
  contextListener();
  setupContextMenu();
}
export default menuInit;
