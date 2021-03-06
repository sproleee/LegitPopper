import $ from "jquery";

import { getDataFromStorage, setDataInStorage } from "./utils/localStorage";
import { getDocumentHeight } from "./utils/document";
import { CONFIG } from "./utils/config";
import icon from "./styles/icon.png";
import "./styles/legitPopper.css";

class LegitPopper {
  constructor(options) {
    this.options = options;
    this.settings = CONFIG;
  }

  init() {
    const { settings, options } = this;
    if (options) this.settings = { ...settings, ...options }; // or Object.assign()
    this.buildPopper();
  }

  addCloseListener(button, body) {
    const { onlyOnce } = this.settings;
    button.addEventListener("click", e => {
      e.preventDefault();
      $(".lpc").fadeOut();
      if (onlyOnce) {
        document.body.removeChild(body);
        return setDataInStorage(true);
      }
      $(".lpc").css("visibility", "hidden");
    });
  }

  controlPopperFade() {
    const { showWhen } = this.settings;
    if (showWhen === 0) return $(".lpc").fadeIn();

    window.onscroll = () => {
      const scrollTop = window.pageYOffset;
      const documentHeight = getDocumentHeight();
      const windowHeight = window.innerHeight;
      const scrollPercent = scrollTop / (documentHeight - windowHeight);
      const scrollRounded = Math.round(scrollPercent * 100);
      if (scrollRounded >= showWhen) return $(".lpc").fadeIn();
      $(".lpc").fadeOut();
    };
  }

  initiatePopperEnd(body) {
    const { timeUntil } = this.settings;
    setTimeout(() => {
      document.body.removeChild(body);
    }, timeUntil);
  }

  buildPopper() {
    const {
      padding,
      bgColor,
      textColor,
      borderWidth,
      borderColor,
      borderRadius,
      boxShadow,
      width,
      fullWidth,
      position,
      content,
      closeButton,
      closeButtonPosition,
      timeUntil,
    } = this.settings;
    const shouldRender = !getDataFromStorage();

    if (shouldRender) {
      const body = document.createElement("div");
      let style = `padding: ${padding}px; background: ${bgColor}; color: ${textColor}; border-width: ${borderWidth}px; border-color: ${borderColor}; border-radius: ${borderRadius}px;`;

      if (fullWidth) style += "width: calc(100% - 30px);";

      if (!boxShadow) style += "box-shadow: none;";

      if (width > 0 && !fullWidth) style += `width: ${width}%;`;

      const _position = `popper-${position}`;
      const container = document.createElement("div");
      container.id = "test";
      container.className = `lpc ${_position}`;
      container.style = style;
      const _content = document.createElement("div");
      _content.className = "lpcn";
      _content.innerText = content;

      if (closeButton) {
        const _button = document.createElement("div");
        const img = document.createElement("img");
        _button.className = `lpcl ${
          closeButton && closeButtonPosition === "right" ? "l-tr" : "l-tl"
        }`;
        img.src = icon;
        _button.appendChild(img);
        container.appendChild(_button);
        this.addCloseListener(_button, body);
      }

      // append all elements to body
      container.appendChild(_content);
      body.appendChild(container);
      document.body.append(body);

      if (timeUntil) this.initiatePopperEnd(body);

      this.controlPopperFade();
    }
  }
}

export default LegitPopper;
