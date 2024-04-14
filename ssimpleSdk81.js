/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ssimpleSdk.js":
/*!***************************!*\
  !*** ./src/ssimpleSdk.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ssimpleWidget {\n\tinit = ({ appId: clientId, btnColor }) => {\n\t\tthis.mountIframe(clientId, btnColor);\n\t}\n\n\tmountIframe = (clientId, btnColor) => {\n\t\tconst styleTag = `\n      <style>\n\t\t\t\t#ssimpleWidget {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\tbottom: 20px;\n\t\t\t\t\tright: 20px;\n\t\t\t\t\tz-index: 999999999 !important;\n\t\t\t\t}\n\t\t\t\t#ssimpleWidgetBtn {\n\t\t\t\t\tbackground-color: white;\n\t\t\t\t\tpadding: 0.25rem 0.75rem;\n\t\t\t\t\tborder-radius: 9999px;\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\tcolor: ` + btnColor + `;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\tborder-color: ` + btnColor + `;\n\t\t\t\t\tborder-style: solid;\n\t\t\t\t\tborder-width: 2px;\n\t\t\t\t}\n      </style>\n\t\t`;\n\n\t\t// create iframe\n\t\tconst iframe = document.createElement('iframe');\n\t\tiframe.style.display = \"none\";\n\t\tiframe.style.border = \"none\";\n\t\tiframe.style.position = \"fixed\";\n\t\tiframe.style.inset = \"auto 15px 75px auto\";\n\t\tiframe.style.width = \"420px\";\n\t\tiframe.style.height = \"70vh\";\n\t\tiframe.style.borderWidth = \"1px\";\n\t\tiframe.style.borderRadius = \"16px\";\n\t\tiframe.style.boxShadow = \"rgba(0, 0, 0, 0.16) 0px 5px 40px\";\n\t\tiframe.style.opacity = \"1\";\n\t\tiframe.style.maxWidth = \"100vw\";\n\t\tiframe.style.maxHeight = \"100vh\";\n\t\tiframe.style.visibility = \"visible\";\n\t\tiframe.style.zIndex = \"999999999\";\n\n\t\t// iframe.src = 'https://' + clientId + '.ssimple.co/widget';\n\t\tiframe.src = 'http://localhost:3000/widget';\n\t\tiframe.crossorigin = \"anonymous\";\n\t\tthis.iframe = iframe;\n\t\twindow.addEventListener(\"message\", this.receiveMessage);\n\n\t\t// create widget trigger button\n\t\tconst btn = document.createElement('button');\n\t\tbtn.id = \"ssimpleWidgetBtn\";\n\t\tbtn.innerHTML = 'Feedback';\n\t\tbtn.addEventListener(\"click\", () => {\n\t\t\tif (btn.innerHTML === 'Feedback') {\n\t\t\t\tbtn.innerHTML = 'Close';\n\t\t\t\tiframe.style.display = \"block\";\n\t\t\t} else {\n\t\t\t\tbtn.innerHTML = 'Feedback';\n\t\t\t\tiframe.style.display = \"none\";\n\t\t\t}\n\t\t});\n\t\tthis.btn = btn;\n\n\t\tconst wrapper = document.createElement('div');\n\t\twrapper.id = \"ssimpleWidget\";\n\t\twrapper.appendChild(this.iframe);\n\t\twrapper.appendChild(this.btn);\n\n\t\tdocument.head.insertAdjacentHTML(\"beforeend\", styleTag);\n\t\tdocument.body.appendChild(wrapper);\n\n\t\t// listen to custom trigger\n\t\tconst customTrigger = document.querySelector('[data-ssimple-widget]');\n\t\tconsole.log(customTrigger);\n\t\tif (customTrigger) {\n\t\t\tlet iframeOpen = false;\n\t\t\tcustomTrigger.addEventListener(\"click\", () => {\n\t\t\t\tif (!iframeOpen) {\n\t\t\t\t\tiframe.style.display = \"block\";\n\t\t\t\t\tiframeOpen = true;\n\t\t\t\t} else {\n\t\t\t\t\tiframe.style.display = \"none\";\n\t\t\t\t\tiframeOpen = false;\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\n\t\t// capture console messages\n\t\tif (console.everything === undefined) {\n\t\t\tconsole.everything = [];\n\n\t\t\twindow.onerror = function (error, url, line) {\n\t\t\t\tconsole.everything.push({\n\t\t\t\t\ttype: \"exception\",\n\t\t\t\t\ttime_stamp: Date.now(),\n\t\t\t\t\tvalue: [error]\n\t\t\t\t});\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\twindow.onunhandledrejection = function (e) {\n\t\t\t\tconsole.everything.push({\n\t\t\t\t\ttype: \"promiseRejection\",\n\t\t\t\t\ttime_stamp: Date.now(),\n\t\t\t\t\tvalue: [e.reason]\n\t\t\t\t});\n\t\t\t}\n\n\t\t\tfunction hookLogType(logType) {\n\t\t\t\tconst original = console[logType].bind(console);\n\t\t\t\treturn function () {\n\t\t\t\t\tconsole.everything.push({\n\t\t\t\t\t\ttype: logType,\n\t\t\t\t\t\ttime_stamp: Date.now(),\n\t\t\t\t\t\tvalue: Array.from(arguments)\n\t\t\t\t\t});\n\t\t\t\t\toriginal.apply(console, arguments);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t['log', 'error', 'warn', 'debug'].forEach(logType => {\n\t\t\t\tconsole[logType] = hookLogType(logType);\n\t\t\t});\n\t\t}\n\t}\n\n\treceiveMessage = (event) => {\n\t\tif (event.data !== 'capture') return;\n\t\tconst captureScreenshot = async () => {\n\t\t\tconst canvas = document.createElement(\"canvas\");\n\t\t\tconst context = canvas.getContext(\"2d\");\n\t\t\tconst video = document.createElement(\"video\");\n\n\t\t\ttry {\n\t\t\t\tthis.iframe.style.display = \"none\";\n\t\t\t\tthis.btn.style.display = \"none\";\n\t\t\t\tconst stream = await navigator.mediaDevices.getDisplayMedia({ preferCurrentTab: true });\n\n\t\t\t\tvideo.addEventListener(\"loadedmetadata\", () => {\n\t\t\t\t\tcanvas.width = video.videoWidth / 2;\n\t\t\t\t\tcanvas.height = video.videoHeight / 2;\n\n\t\t\t\t\tvideo.play();\n\t\t\t\t\tcontext.drawImage(video, 0, 0, video.videoWidth, video.videoHeight, 0, 0, canvas.width, canvas.height);\n\t\t\t\t\tstream.getTracks().forEach(track => track.stop());\n\t\t\t\t\tconst screenshot = canvas.toDataURL(\"image/png\");\n\n\t\t\t\t\tthis.iframe.contentWindow.postMessage({ type: 'bug', payload: { console: console.everything, screenshot } }, '*');\n\t\t\t\t\tthis.iframe.style.display = \"block\";\n\t\t\t\t\tthis.btn.style.display = \"inline-flex\";\n\t\t\t\t});\n\n\t\t\t\tvideo.srcObject = stream;\n\t\t\t} catch (err) {\n\t\t\t\tthis.iframe.style.display = \"block\";\n\t\t\t\tthis.btn.style.display = \"inline-flex\";\n\t\t\t\tconsole.error(\"Error capturing screenshot: \" + err);\n\t\t\t}\n\t\t};\n\t\tcaptureScreenshot();\n\t}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (((window) => {\n\tconst stubSdk = window.ssimple;\n\tconst shim = new ssimpleWidget();\n\tstubSdk.init = shim.init;\n})(__webpack_require__.g));\n\n\n//# sourceURL=webpack://ssimple-widget/./src/ssimpleSdk.js?");

        /***/
})

    /******/
});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
}
        /******/
}
      /******/
};
    /******/
})();
/******/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function () {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
        /******/
} catch (e) {
/******/ 				if (typeof window === 'object') return window;
        /******/
}
      /******/
})();
    /******/
})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/
})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
      /******/
};
    /******/
})();
/******/
/************************************************************************/
/******/
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/ssimpleSdk.js"](0, __webpack_exports__, __webpack_require__);
  /******/
  /******/
})()
  ;