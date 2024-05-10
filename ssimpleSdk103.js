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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ssimpleWidget {\n\t// init = ({ appId: clientId, showFloatingBtn, btnColor }) => {\n\t// \tthis.mountIframe(clientId, showFloatingBtn, btnColor);\n\t// }\n\n\tinit = ({ appId, showFloatingBtn, btnColor }) => {\n\t\tconst styleTag = showFloatingBtn ? `\n      <style>\n\t\t\t\t#ssimpleWidget {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\tbottom: 20px;\n\t\t\t\t\tright: 20px;\n\t\t\t\t\tz-index: 999999999 !important;\n\t\t\t\t}\n\t\t\t\t#ssimpleWidgetBtn {\n\t\t\t\t\tbackground-color: white;\n\t\t\t\t\tpadding: 0.25rem 0.75rem;\n\t\t\t\t\tborder-radius: 9999px;\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\tcolor: ` + btnColor + `;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\tborder-color: ` + btnColor + `;\n\t\t\t\t\tborder-style: solid;\n\t\t\t\t\tborder-width: 2px;\n\t\t\t\t}\n\t\t\t\t#ssimpleIframeWrapper {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tbottom: 0px;\n\t\t\t\t\tright: 0px;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tz-index: 999999999;\n\t\t\t\t}\n      </style>\n\t\t` : `\n\t\t\t<style>\n\t\t\t\t#ssimpleWidget {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tbottom: 0px;\n\t\t\t\t\tright: 0px;\n\t\t\t\t\tz-index: 999999999 !important;\n\t\t\t\t}\n\t\t\t\t#ssimpleIframeWrapper {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tbottom: 0px;\n\t\t\t\t\tright: 0px;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\taligh-items: center;\n\t\t\t\t\tz-index: 999999999;\n\t\t\t\t}\n\t\t\t</style>\n\t\t`;\n\n\t\t// create widget trigger button\n\t\tif (showFloatingBtn) {\n\t\t\tconst btn = document.createElement('button');\n\t\t\tbtn.id = \"ssimpleWidgetBtn\";\n\t\t\tbtn.innerHTML = 'Found an Issue?';\n\t\t\tbtn.addEventListener(\"click\", () => {\n\t\t\t\tiframeWrapper.style.display = \"flex\"\n\t\t\t\tbtn.style.display = \"none\";\n\t\t\t\tblur.style.display = \"block\";\n\t\t\t\t// if (btn.innerHTML === 'Found an Issue?') {\n\t\t\t\t// \tbtn.innerHTML = 'Close';\n\t\t\t\t// \tiframeWrapper.style.display = \"flex\";\n\t\t\t\t// \tblur.style.display = \"block\";\n\t\t\t\t// } else {\n\t\t\t\t// \tbtn.innerHTML = 'Found an Issue?';\n\t\t\t\t// \tiframeWrapper.style.display = \"none\";\n\t\t\t\t// \tblur.style.display = \"none\";\n\t\t\t\t// \tif (hideBtn) btn.style.display = \"none\";\n\t\t\t\t// }\n\t\t\t});\n\t\t\tthis.btn = btn;\n\t\t}\n\n\t\t// create background blur\n\t\tconst blur = document.createElement('div');\n\t\tblur.style.position = \"fixed\";\n\t\tblur.style.top = \"0\";\n\t\tblur.style.backgroundColor = \"rgba(0, 0, 0, 0.25)\";\n\t\tblur.style.backdropFilter = \"blur(4px)\";\n\t\tblur.style.width = \"100vw\";\n\t\tblur.style.height = \"100vh\";\n\t\tblur.style.zIndex = \"99999999\";\n\t\tif (showFloatingBtn) blur.style.display = \"none\";\n\t\tthis.blur = blur;\n\n\t\t// create iframe\n\t\tconst iframe = document.createElement('iframe');\n\t\t// iframe.style.display = \"none\";\n\t\t// iframe.style.border = \"none\";\n\t\t// iframe.style.position = \"fixed\";\n\t\t// iframe.style.inset = \"auto 30% 15% auto\";\n\t\tiframe.style.width = \"95vw\";\n\t\tiframe.style.height = \"80vh\";\n\t\t// iframe.style.borderWidth = \"1px\";\n\t\tiframe.style.borderRadius = \"16px\";\n\t\t// iframe.style.boxShadow = \"rgba(0, 0, 0, 0.16) 0px 5px 40px\";\n\t\t// iframe.style.opacity = \"1\";\n\t\tiframe.style.maxWidth = \"800px\";\n\t\tiframe.style.maxHeight = \"700px\";\n\t\t// iframe.style.visibility = \"visible\";\n\t\tiframe.style.zIndex = \"999999999\";\n\n\t\t// iframe.src = 'https://' + appId + '.ssimple.co/widget';\n\t\tiframe.src = 'http://localhost:3000/widget';\n\t\tiframe.crossorigin = \"anonymous\";\n\t\tthis.iframe = iframe;\n\n\t\t// create cancel button\n\t\tconst cancelBtn = document.createElement('button');\n\t\tcancelBtn.innerHTML = 'Cancel';\n\t\tcancelBtn.style.color = \"white\";\n\t\tcancelBtn.style.fontWeight = \"700\";\n\t\tcancelBtn.style.marginTop = \"2rem\";\n\t\tcancelBtn.addEventListener(\"click\", () => {\n\t\t\twrapper.style.display = \"none\";\n\t\t\tiframe.contentWindow.postMessage('cancelReport', '*');\n\t\t\tif (showFloatingBtn) {\n\t\t\t\tthis.btn.style.display = \"block\";\n\t\t\t\tthis.blur.style.display = \"none\";\n\t\t\t}\n\t\t});\n\t\tthis.cancelBtn = cancelBtn;\n\n\t\t// create iframe wrapper\n\t\tconst iframeWrapper = document.createElement('div');\n\t\tiframeWrapper.id = \"ssimpleIframeWrapper\";\n\t\t// iframeWrapper.style.display = \"flex\";\n\t\t// iframeWrapper.style.position = \"fixed\";\n\t\t// iframeWrapper.style.width = \"100%\";\n\t\t// iframeWrapper.style.height = \"100%\";\n\t\t// iframeWrapper.style.top = \"0\";\n\t\t// iframeWrapper.style.left = \"0\";\n\t\t// iframeWrapper.style.flexDirection = \"column\";\n\t\t// iframeWrapper.style.justifyContent = \"center\";\n\t\t// iframeWrapper.style.alignItems = \"center\";\n\t\t// iframeWrapper.style.zIndex = \"999999999\";\n\t\tiframeWrapper.appendChild(this.iframe);\n\t\tiframeWrapper.appendChild(this.cancelBtn);\n\t\tthis.iframeWrapper = iframeWrapper;\n\n\t\tconst wrapper = document.createElement('div');\n\t\twrapper.id = \"ssimpleWidget\";\n\t\twrapper.appendChild(this.iframeWrapper);\n\t\twrapper.appendChild(this.blur);\n\t\tif (showFloatingBtn) wrapper.appendChild(this.btn);\n\t\tthis.wrapper = wrapper;\n\n\t\tdocument.head.insertAdjacentHTML(\"beforeend\", styleTag);\n\t\tdocument.body.appendChild(wrapper);\n\n\t\t// listen to custom trigger\n\t\tconst customTrigger = document.querySelector('[data-ssimple-widget]');\n\t\tif (customTrigger) {\n\t\t\tcustomTrigger.addEventListener(\"click\", () => {\n\t\t\t\twrapper.style.display = \"block\";\n\t\t\t\tif (showFloatingBtn) {\n\t\t\t\t\tthis.btn.style.display = \"none\";\n\t\t\t\t\tthis.blur.style.display = \"block\";\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\n\t\t// capture console messages\n\t\tif (console.everything === undefined) {\n\t\t\tconsole.everything = [];\n\n\t\t\twindow.onerror = function (error, url, line) {\n\t\t\t\tconsole.everything.push({\n\t\t\t\t\ttype: \"exception\",\n\t\t\t\t\ttime_stamp: Date.now(),\n\t\t\t\t\tvalue: [error]\n\t\t\t\t});\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\twindow.onunhandledrejection = function (e) {\n\t\t\t\tconsole.everything.push({\n\t\t\t\t\ttype: \"promiseRejection\",\n\t\t\t\t\ttime_stamp: Date.now(),\n\t\t\t\t\tvalue: [e.reason]\n\t\t\t\t});\n\t\t\t}\n\n\t\t\tfunction hookLogType(logType) {\n\t\t\t\tconst original = console[logType].bind(console);\n\t\t\t\treturn function () {\n\t\t\t\t\tconsole.everything.push({\n\t\t\t\t\t\ttype: logType,\n\t\t\t\t\t\ttime_stamp: Date.now(),\n\t\t\t\t\t\tvalue: Array.from(arguments)\n\t\t\t\t\t});\n\t\t\t\t\toriginal.apply(console, arguments);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t['log', 'error', 'warn', 'debug'].forEach(logType => {\n\t\t\t\tconsole[logType] = hookLogType(logType);\n\t\t\t});\n\t\t}\n\n\t\twindow.addEventListener(\"message\", this.receiveMessage);\n\t}\n\n\treceiveMessage = (event) => {\n\t\tif (event.data === 'capture') {\n\t\t\tconst captureScreenshot = async () => {\n\t\t\t\tconst canvas = document.createElement(\"canvas\");\n\t\t\t\tconst context = canvas.getContext(\"2d\");\n\t\t\t\tconst video = document.createElement(\"video\");\n\n\t\t\t\ttry {\n\t\t\t\t\tthis.wrapper.style.display = \"none\";\n\t\t\t\t\t// this.btn.style.display = \"none\";\n\t\t\t\t\tconst stream = await navigator.mediaDevices.getDisplayMedia({ preferCurrentTab: true });\n\n\t\t\t\t\tvideo.addEventListener(\"loadedmetadata\", () => {\n\t\t\t\t\t\tcanvas.width = video.videoWidth / 2;\n\t\t\t\t\t\tcanvas.height = video.videoHeight / 2;\n\n\t\t\t\t\t\tvideo.play();\n\t\t\t\t\t\tcontext.drawImage(video, 0, 0, video.videoWidth, video.videoHeight, 0, 0, canvas.width, canvas.height);\n\t\t\t\t\t\tstream.getTracks().forEach(track => track.stop());\n\t\t\t\t\t\tconst screenshot = canvas.toDataURL(\"image/png\");\n\n\t\t\t\t\t\tthis.iframe.contentWindow.postMessage({ type: 'screenshot', payload: { console: console.everything, screenshot } }, '*');\n\t\t\t\t\t\tthis.wrapper.style.display = \"block\";\n\t\t\t\t\t\t// this.btn.style.display = \"inline-flex\";\n\t\t\t\t\t});\n\n\t\t\t\t\tvideo.srcObject = stream;\n\t\t\t\t} catch (err) {\n\t\t\t\t\tthis.wrapper.style.display = \"block\";\n\t\t\t\t\t// this.btn.style.display = \"inline-flex\";\n\t\t\t\t\tconsole.error(\"Error capturing screenshot: \" + err);\n\t\t\t\t}\n\t\t\t};\n\t\t\tcaptureScreenshot();\n\t\t}\n\n\t\tif (event.data === 'record') {\n\t\t\tconst recordVideo = async () => {\n\t\t\t\t// const canvas = document.createElement(\"canvas\");\n\t\t\t\t// const context = canvas.getContext(\"2d\");\n\t\t\t\t// const video = document.createElement(\"video\");\n\t\t\t\tlet stream;\n\t\t\t\tlet recorder;\n\n\t\t\t\tconst handleOnDataAvailable = async (e) => {\n\t\t\t\t\tif (e.data.size > 0) {\n\t\t\t\t\t\tconsole.log(e.data);\n\t\t\t\t\t\tconst video = e.data;\n\t\t\t\t\t\tthis.iframe.contentWindow.postMessage({ type: 'video', payload: { console: console.everything, video } }, '*');\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tconst stopRecord = () => {\n\t\t\t\t\tif (!recorderx) return;\n\t\t\t\t\trecorder.stop();\n\t\t\t\t}\n\n\t\t\t\tconst handleOnStop = () => {\n\t\t\t\t\t// if (audioStream) audioStream.getTracks().forEach(track => track.stop());\n\t\t\t\t\tstream.getTracks().forEach(track => track.stop());\n\t\t\t\t\trecorder.onstart = undefined;\n\t\t\t\t\trecorder.ondataavailable = undefined;\n\t\t\t\t\trecorder.onstop = undefined;\n\t\t\t\t\trecorder = undefined;\n\t\t\t\t\tthis.wrapper.style.display = \"block\";\n\t\t\t\t}\n\n\t\t\t\ttry {\n\t\t\t\t\tthis.wrapper.style.display = \"none\";\n\t\t\t\t\t// this.btn.innerHTML = \"Stop Recording\";\n\t\t\t\t\t// this.btn.addEventListener(\"click\", stopRecord);\n\t\t\t\t\tstream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true, preferCurrentTab: true });\n\t\t\t\t\trecorder = new MediaRecorder(stream, { mimeType: \"video/webm; codecs=vp9\" });\n\t\t\t\t\trecorder.ondataavailable = handleOnDataAvailable;\n\t\t\t\t\trecorder.onstop = handleOnStop;\n\t\t\t\t\trecorder.start();\n\n\t\t\t\t\t// video.addEventListener(\"loadedmetadata\", () => {\n\t\t\t\t\t// \tcanvas.width = video.videoWidth / 2;\n\t\t\t\t\t// \tcanvas.height = video.videoHeight / 2;\n\n\t\t\t\t\t// \tvideo.play();\n\t\t\t\t\t// \tcontext.drawImage(video, 0, 0, video.videoWidth, video.videoHeight, 0, 0, canvas.width, canvas.height);\n\t\t\t\t\t// \tstream.getTracks().forEach(track => track.stop());\n\t\t\t\t\t// \tconst screenshot = canvas.toDataURL();\n\n\t\t\t\t\t// \tthis.iframe.contentWindow.postMessage({ type: 'bug', payload: { console: console.everything, screenshot } }, '*');\n\t\t\t\t\t// \tthis.iframe.style.display = \"block\";\n\t\t\t\t\t// \tthis.btn.innerHTML = \"Close\";\n\t\t\t\t\t// });\n\n\t\t\t\t\t// video.srcObject = stream;\n\t\t\t\t} catch (err) {\n\t\t\t\t\tthis.wrapper.style.display = \"block\";\n\t\t\t\t\t// this.btn.style.display = \"inline-flex\";\n\t\t\t\t\tthrow Error(\"Error recording video: \" + err.message);\n\t\t\t\t}\n\t\t\t};\n\t\t\trecordVideo();\n\t\t}\n\t}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (((window) => {\n\tconst stubSdk = window.ssimple;\n\tconst shim = new ssimpleWidget();\n\tstubSdk.init = shim.init;\n})(__webpack_require__.g));\n\n\n//# sourceURL=webpack://ssimple-widget/./src/ssimpleSdk.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/ssimpleSdk.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;