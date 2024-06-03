import { browser, Runtime } from "wxt/browser";
export default defineContentScript({
  matches: ["*://*/*"],
  main() {
    console.log("Hello content.");
    browser.runtime.onMessage.addListener(messageHandler);
  },
});

function messageHandler(message: any, sender: Runtime.MessageSender) {
  switch (message) {
    case "translateWord":
      openTranslate();
  }
}

function openTranslate() {
  let url = `https://dictionary.cambridge.org/dictionary/english/${getSelectText()}`;
  window.open(url, "_blank");
}

function getSelectText() {
  let text: string = "";
  let element = document.activeElement;
  let tag_name = element ? element.tagName.toLowerCase() : "";
  if (tag_name == "input" || tag_name == "textarea") {
    //@ts-ignore
    text = element?.value?.substring(element.selectionStart, element.selectionEnd);
  } else {
    text = window.getSelection()?.toString() ?? "";
  }
   return text;
}
