// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9sbld":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "03af7e6ce6d65bb7";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gt0ZF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AElement", ()=>AElement);
parcelHelpers.export(exports, "AnimateColorElement", ()=>AnimateColorElement);
parcelHelpers.export(exports, "AnimateElement", ()=>AnimateElement);
parcelHelpers.export(exports, "AnimateTransformElement", ()=>AnimateTransformElement);
parcelHelpers.export(exports, "BoundingBox", ()=>BoundingBox);
parcelHelpers.export(exports, "CB1", ()=>CB1);
parcelHelpers.export(exports, "CB2", ()=>CB2);
parcelHelpers.export(exports, "CB3", ()=>CB3);
parcelHelpers.export(exports, "CB4", ()=>CB4);
parcelHelpers.export(exports, "Canvg", ()=>Canvg);
parcelHelpers.export(exports, "CircleElement", ()=>CircleElement);
parcelHelpers.export(exports, "ClipPathElement", ()=>ClipPathElement);
parcelHelpers.export(exports, "DefsElement", ()=>DefsElement);
parcelHelpers.export(exports, "DescElement", ()=>DescElement);
parcelHelpers.export(exports, "Document", ()=>Document);
parcelHelpers.export(exports, "Element", ()=>Element);
parcelHelpers.export(exports, "EllipseElement", ()=>EllipseElement);
parcelHelpers.export(exports, "FeColorMatrixElement", ()=>FeColorMatrixElement);
parcelHelpers.export(exports, "FeCompositeElement", ()=>FeCompositeElement);
parcelHelpers.export(exports, "FeDropShadowElement", ()=>FeDropShadowElement);
parcelHelpers.export(exports, "FeGaussianBlurElement", ()=>FeGaussianBlurElement);
parcelHelpers.export(exports, "FeMorphologyElement", ()=>FeMorphologyElement);
parcelHelpers.export(exports, "FilterElement", ()=>FilterElement);
parcelHelpers.export(exports, "Font", ()=>Font);
parcelHelpers.export(exports, "FontElement", ()=>FontElement);
parcelHelpers.export(exports, "FontFaceElement", ()=>FontFaceElement);
parcelHelpers.export(exports, "GElement", ()=>GElement);
parcelHelpers.export(exports, "GlyphElement", ()=>GlyphElement);
parcelHelpers.export(exports, "GradientElement", ()=>GradientElement);
parcelHelpers.export(exports, "ImageElement", ()=>ImageElement);
parcelHelpers.export(exports, "LineElement", ()=>LineElement);
parcelHelpers.export(exports, "LinearGradientElement", ()=>LinearGradientElement);
parcelHelpers.export(exports, "MarkerElement", ()=>MarkerElement);
parcelHelpers.export(exports, "MaskElement", ()=>MaskElement);
parcelHelpers.export(exports, "Matrix", ()=>Matrix);
parcelHelpers.export(exports, "MissingGlyphElement", ()=>MissingGlyphElement);
parcelHelpers.export(exports, "Mouse", ()=>Mouse);
parcelHelpers.export(exports, "PSEUDO_ZERO", ()=>PSEUDO_ZERO);
parcelHelpers.export(exports, "Parser", ()=>Parser);
parcelHelpers.export(exports, "PathElement", ()=>PathElement);
parcelHelpers.export(exports, "PathParser", ()=>PathParser);
parcelHelpers.export(exports, "PatternElement", ()=>PatternElement);
parcelHelpers.export(exports, "Point", ()=>Point);
parcelHelpers.export(exports, "PolygonElement", ()=>PolygonElement);
parcelHelpers.export(exports, "PolylineElement", ()=>PolylineElement);
parcelHelpers.export(exports, "Property", ()=>Property);
parcelHelpers.export(exports, "QB1", ()=>QB1);
parcelHelpers.export(exports, "QB2", ()=>QB2);
parcelHelpers.export(exports, "QB3", ()=>QB3);
parcelHelpers.export(exports, "RadialGradientElement", ()=>RadialGradientElement);
parcelHelpers.export(exports, "RectElement", ()=>RectElement);
parcelHelpers.export(exports, "RenderedElement", ()=>RenderedElement);
parcelHelpers.export(exports, "Rotate", ()=>Rotate);
parcelHelpers.export(exports, "SVGElement", ()=>SVGElement);
parcelHelpers.export(exports, "SVGFontLoader", ()=>SVGFontLoader);
parcelHelpers.export(exports, "Scale", ()=>Scale);
parcelHelpers.export(exports, "Screen", ()=>Screen);
parcelHelpers.export(exports, "Skew", ()=>Skew);
parcelHelpers.export(exports, "SkewX", ()=>SkewX);
parcelHelpers.export(exports, "SkewY", ()=>SkewY);
parcelHelpers.export(exports, "StopElement", ()=>StopElement);
parcelHelpers.export(exports, "StyleElement", ()=>StyleElement);
parcelHelpers.export(exports, "SymbolElement", ()=>SymbolElement);
parcelHelpers.export(exports, "TRefElement", ()=>TRefElement);
parcelHelpers.export(exports, "TSpanElement", ()=>TSpanElement);
parcelHelpers.export(exports, "TextElement", ()=>TextElement);
parcelHelpers.export(exports, "TextPathElement", ()=>TextPathElement);
parcelHelpers.export(exports, "TitleElement", ()=>TitleElement);
parcelHelpers.export(exports, "Transform", ()=>Transform);
parcelHelpers.export(exports, "Translate", ()=>Translate);
parcelHelpers.export(exports, "UnknownElement", ()=>UnknownElement);
parcelHelpers.export(exports, "UseElement", ()=>UseElement);
parcelHelpers.export(exports, "ViewPort", ()=>ViewPort);
parcelHelpers.export(exports, "compressSpaces", ()=>compressSpaces);
parcelHelpers.export(exports, "default", ()=>Canvg);
parcelHelpers.export(exports, "getSelectorSpecificity", ()=>getSelectorSpecificity);
parcelHelpers.export(exports, "normalizeAttributeName", ()=>normalizeAttributeName);
parcelHelpers.export(exports, "normalizeColor", ()=>normalizeColor);
parcelHelpers.export(exports, "parseExternalUrl", ()=>parseExternalUrl);
parcelHelpers.export(exports, "presets", ()=>index);
parcelHelpers.export(exports, "toNumbers", ()=>toNumbers);
parcelHelpers.export(exports, "trimLeft", ()=>trimLeft);
parcelHelpers.export(exports, "trimRight", ()=>trimRight);
parcelHelpers.export(exports, "vectorMagnitude", ()=>vectorMagnitude);
parcelHelpers.export(exports, "vectorsAngle", ()=>vectorsAngle);
parcelHelpers.export(exports, "vectorsRatio", ()=>vectorsRatio);
var _esPromiseJs = require("core-js/modules/es.promise.js");
var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");
var _asyncToGeneratorDefault = parcelHelpers.interopDefault(_asyncToGenerator);
var _esStringMatchJs = require("core-js/modules/es.string.match.js");
var _esStringReplaceJs = require("core-js/modules/es.string.replace.js");
var _esStringStartsWithJs = require("core-js/modules/es.string.starts-with.js");
var _esArrayIteratorJs = require("core-js/modules/es.array.iterator.js");
var _webDomCollectionsIteratorJs = require("core-js/modules/web.dom-collections.iterator.js");
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _esArrayReduceJs = require("core-js/modules/es.array.reduce.js");
var _esStringEndsWithJs = require("core-js/modules/es.string.ends-with.js");
var _esStringSplitJs = require("core-js/modules/es.string.split.js");
var _raf = require("raf");
var _rafDefault = parcelHelpers.interopDefault(_raf);
var _esStringTrimJs = require("core-js/modules/es.string.trim.js");
var _rgbcolor = require("rgbcolor");
var _rgbcolorDefault = parcelHelpers.interopDefault(_rgbcolor);
var _esArrayIndexOfJs = require("core-js/modules/es.array.index-of.js");
var _esStringIncludesJs = require("core-js/modules/es.string.includes.js");
var _esArrayReverseJs = require("core-js/modules/es.array.reverse.js");
var _svgPathdata = require("svg-pathdata");
var _esRegexpToStringJs = require("core-js/modules/es.regexp.to-string.js");
var _stackblurCanvas = require("stackblur-canvas");
var process = require("73bd10b5b0307ea1");
/**
 * Options preset for `OffscreenCanvas`.
 * @param config - Preset requirements.
 * @param config.DOMParser - XML/HTML parser from string into DOM Document.
 * @returns Preset object.
 */ function offscreen() {
    var { DOMParser: DOMParserFallback  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var preset = {
        window: null,
        ignoreAnimation: true,
        ignoreMouse: true,
        DOMParser: DOMParserFallback,
        createCanvas (width, height) {
            return new OffscreenCanvas(width, height);
        },
        createImage (url) {
            return (0, _asyncToGeneratorDefault.default)(function*() {
                var response = yield fetch(url);
                var blob = yield response.blob();
                var img = yield createImageBitmap(blob);
                return img;
            })();
        }
    };
    if (typeof DOMParser !== "undefined" || typeof DOMParserFallback === "undefined") Reflect.deleteProperty(preset, "DOMParser");
    return preset;
}
/**
 * Options preset for `node-canvas`.
 * @param config - Preset requirements.
 * @param config.DOMParser - XML/HTML parser from string into DOM Document.
 * @param config.canvas - `node-canvas` exports.
 * @param config.fetch - WHATWG-compatible `fetch` function.
 * @returns Preset object.
 */ function node(_ref) {
    var { DOMParser: DOMParser1 , canvas , fetch: fetch1  } = _ref;
    return {
        window: null,
        ignoreAnimation: true,
        ignoreMouse: true,
        DOMParser: DOMParser1,
        fetch: fetch1,
        createCanvas: canvas.createCanvas,
        createImage: canvas.loadImage
    };
}
var index = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    offscreen: offscreen,
    node: node
});
/**
 * HTML-safe compress white-spaces.
 * @param str - String to compress.
 * @returns String.
 */ function compressSpaces(str) {
    return str.replace(/(?!\u3000)\s+/gm, " ");
}
/**
 * HTML-safe left trim.
 * @param str - String to trim.
 * @returns String.
 */ function trimLeft(str) {
    return str.replace(/^[\n \t]+/, "");
}
/**
 * HTML-safe right trim.
 * @param str - String to trim.
 * @returns String.
 */ function trimRight(str) {
    return str.replace(/[\n \t]+$/, "");
}
/**
 * String to numbers array.
 * @param str - Numbers string.
 * @returns Numbers array.
 */ function toNumbers(str) {
    var matches = (str || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
    return matches.map(parseFloat);
} // Microsoft Edge fix
var allUppercase = /^[A-Z-]+$/;
/**
 * Normalize attribute name.
 * @param name - Attribute name.
 * @returns Normalized attribute name.
 */ function normalizeAttributeName(name) {
    if (allUppercase.test(name)) return name.toLowerCase();
    return name;
}
/**
 * Parse external URL.
 * @param url - CSS url string.
 * @returns Parsed URL.
 */ function parseExternalUrl(url) {
    //                      single quotes [2]
    //                      v         double quotes [3]
    //                      v         v         no quotes [4]
    //                      v         v         v
    var urlMatch = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(url) || [];
    return urlMatch[2] || urlMatch[3] || urlMatch[4];
}
/**
 * Transform floats to integers in rgb colors.
 * @param color - Color to normalize.
 * @returns Normalized color.
 */ function normalizeColor(color) {
    if (!color.startsWith("rgb")) return color;
    var rgbParts = 3;
    var normalizedColor = color.replace(/\d+(\.\d+)?/g, (num, isFloat)=>rgbParts-- && isFloat ? String(Math.round(parseFloat(num))) : num);
    return normalizedColor;
}
// slightly modified version of https://github.com/keeganstreet/specificity/blob/master/specificity.js
var attributeRegex = /(\[[^\]]+\])/g;
var idRegex = /(#[^\s+>~.[:]+)/g;
var classRegex = /(\.[^\s+>~.[:]+)/g;
var pseudoElementRegex = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi;
var pseudoClassWithBracketsRegex = /(:[\w-]+\([^)]*\))/gi;
var pseudoClassRegex = /(:[^\s+>~.[:]+)/g;
var elementRegex = /([^\s+>~.[:]+)/g;
function findSelectorMatch(selector, regex) {
    var matches = regex.exec(selector);
    if (!matches) return [
        selector,
        0
    ];
    return [
        selector.replace(regex, " "),
        matches.length
    ];
}
/**
 * Measure selector specificity.
 * @param selector - Selector to measure.
 * @returns Specificity.
 */ function getSelectorSpecificity(selector) {
    var specificity = [
        0,
        0,
        0
    ];
    var currentSelector = selector.replace(/:not\(([^)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " ");
    var delta = 0;
    [currentSelector, delta] = findSelectorMatch(currentSelector, attributeRegex);
    specificity[1] += delta;
    [currentSelector, delta] = findSelectorMatch(currentSelector, idRegex);
    specificity[0] += delta;
    [currentSelector, delta] = findSelectorMatch(currentSelector, classRegex);
    specificity[1] += delta;
    [currentSelector, delta] = findSelectorMatch(currentSelector, pseudoElementRegex);
    specificity[2] += delta;
    [currentSelector, delta] = findSelectorMatch(currentSelector, pseudoClassWithBracketsRegex);
    specificity[1] += delta;
    [currentSelector, delta] = findSelectorMatch(currentSelector, pseudoClassRegex);
    specificity[1] += delta;
    currentSelector = currentSelector.replace(/[*\s+>~]/g, " ").replace(/[#.]/g, " ");
    [currentSelector, delta] = findSelectorMatch(currentSelector, elementRegex); // lgtm [js/useless-assignment-to-local]
    specificity[2] += delta;
    return specificity.join("");
}
var PSEUDO_ZERO = .00000001;
/**
 * Vector magnitude.
 * @param v
 * @returns Number result.
 */ function vectorMagnitude(v) {
    return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
}
/**
 * Ratio between two vectors.
 * @param u
 * @param v
 * @returns Number result.
 */ function vectorsRatio(u, v) {
    return (u[0] * v[0] + u[1] * v[1]) / (vectorMagnitude(u) * vectorMagnitude(v));
}
/**
 * Angle between two vectors.
 * @param u
 * @param v
 * @returns Number result.
 */ function vectorsAngle(u, v) {
    return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vectorsRatio(u, v));
}
function CB1(t) {
    return t * t * t;
}
function CB2(t) {
    return 3 * t * t * (1 - t);
}
function CB3(t) {
    return 3 * t * (1 - t) * (1 - t);
}
function CB4(t) {
    return (1 - t) * (1 - t) * (1 - t);
}
function QB1(t) {
    return t * t;
}
function QB2(t) {
    return 2 * t * (1 - t);
}
function QB3(t) {
    return (1 - t) * (1 - t);
}
class Property {
    constructor(document1, name, value){
        this.document = document1;
        this.name = name;
        this.value = value;
        this.isNormalizedColor = false;
    }
    static empty(document1) {
        return new Property(document1, "EMPTY", "");
    }
    split() {
        var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : " ";
        var { document: document1 , name  } = this;
        return compressSpaces(this.getString()).trim().split(separator).map((value)=>new Property(document1, name, value));
    }
    hasValue(zeroIsValue) {
        var { value  } = this;
        return value !== null && value !== "" && (zeroIsValue || value !== 0) && typeof value !== "undefined";
    }
    isString(regexp) {
        var { value  } = this;
        var result = typeof value === "string";
        if (!result || !regexp) return result;
        return regexp.test(value);
    }
    isUrlDefinition() {
        return this.isString(/^url\(/);
    }
    isPixels() {
        if (!this.hasValue()) return false;
        var asString = this.getString();
        switch(true){
            case asString.endsWith("px"):
            case /^[0-9]+$/.test(asString):
                return true;
            default:
                return false;
        }
    }
    setValue(value) {
        this.value = value;
        return this;
    }
    getValue(def) {
        if (typeof def === "undefined" || this.hasValue()) return this.value;
        return def;
    }
    getNumber(def) {
        if (!this.hasValue()) {
            if (typeof def === "undefined") return 0;
            return parseFloat(def);
        }
        var { value  } = this;
        var n = parseFloat(value);
        if (this.isString(/%$/)) n /= 100.0;
        return n;
    }
    getString(def) {
        if (typeof def === "undefined" || this.hasValue()) return typeof this.value === "undefined" ? "" : String(this.value);
        return String(def);
    }
    getColor(def) {
        var color = this.getString(def);
        if (this.isNormalizedColor) return color;
        this.isNormalizedColor = true;
        color = normalizeColor(color);
        this.value = color;
        return color;
    }
    getDpi() {
        return 96.0; // TODO: compute?
    }
    getRem() {
        return this.document.rootEmSize;
    }
    getEm() {
        return this.document.emSize;
    }
    getUnits() {
        return this.getString().replace(/[0-9.-]/g, "");
    }
    getPixels(axisOrIsFontSize) {
        var processPercent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (!this.hasValue()) return 0;
        var [axis, isFontSize] = typeof axisOrIsFontSize === "boolean" ? [
            undefined,
            axisOrIsFontSize
        ] : [
            axisOrIsFontSize
        ];
        var { viewPort  } = this.document.screen;
        switch(true){
            case this.isString(/vmin$/):
                return this.getNumber() / 100.0 * Math.min(viewPort.computeSize("x"), viewPort.computeSize("y"));
            case this.isString(/vmax$/):
                return this.getNumber() / 100.0 * Math.max(viewPort.computeSize("x"), viewPort.computeSize("y"));
            case this.isString(/vw$/):
                return this.getNumber() / 100.0 * viewPort.computeSize("x");
            case this.isString(/vh$/):
                return this.getNumber() / 100.0 * viewPort.computeSize("y");
            case this.isString(/rem$/):
                return this.getNumber() * this.getRem();
            case this.isString(/em$/):
                return this.getNumber() * this.getEm();
            case this.isString(/ex$/):
                return this.getNumber() * this.getEm() / 2.0;
            case this.isString(/px$/):
                return this.getNumber();
            case this.isString(/pt$/):
                return this.getNumber() * this.getDpi() * (1.0 / 72.0);
            case this.isString(/pc$/):
                return this.getNumber() * 15;
            case this.isString(/cm$/):
                return this.getNumber() * this.getDpi() / 2.54;
            case this.isString(/mm$/):
                return this.getNumber() * this.getDpi() / 25.4;
            case this.isString(/in$/):
                return this.getNumber() * this.getDpi();
            case this.isString(/%$/) && isFontSize:
                return this.getNumber() * this.getEm();
            case this.isString(/%$/):
                return this.getNumber() * viewPort.computeSize(axis);
            default:
                var n = this.getNumber();
                if (processPercent && n < 1.0) return n * viewPort.computeSize(axis);
                return n;
        }
    }
    getMilliseconds() {
        if (!this.hasValue()) return 0;
        if (this.isString(/ms$/)) return this.getNumber();
        return this.getNumber() * 1000;
    }
    getRadians() {
        if (!this.hasValue()) return 0;
        switch(true){
            case this.isString(/deg$/):
                return this.getNumber() * (Math.PI / 180.0);
            case this.isString(/grad$/):
                return this.getNumber() * (Math.PI / 200.0);
            case this.isString(/rad$/):
                return this.getNumber();
            default:
                return this.getNumber() * (Math.PI / 180.0);
        }
    }
    getDefinition() {
        var asString = this.getString();
        var name = /#([^)'"]+)/.exec(asString);
        if (name) name = name[1];
        if (!name) name = asString;
        return this.document.definitions[name];
    }
    getFillStyleDefinition(element, opacity) {
        var def = this.getDefinition();
        if (!def) return null;
         // gradient
        if (typeof def.createGradient === "function") return def.createGradient(this.document.ctx, element, opacity);
         // pattern
        if (typeof def.createPattern === "function") {
            if (def.getHrefAttribute().hasValue()) {
                var patternTransform = def.getAttribute("patternTransform");
                def = def.getHrefAttribute().getDefinition();
                if (patternTransform.hasValue()) def.getAttribute("patternTransform", true).setValue(patternTransform.value);
            }
            return def.createPattern(this.document.ctx, element, opacity);
        }
        return null;
    }
    getTextBaseline() {
        if (!this.hasValue()) return null;
        return Property.textBaselineMapping[this.getString()];
    }
    addOpacity(opacity) {
        var value = this.getColor();
        var len = value.length;
        var commas = 0; // Simulate old RGBColor version, which can't parse rgba.
        for(var i = 0; i < len; i++){
            if (value[i] === ",") commas++;
            if (commas === 3) break;
        }
        if (opacity.hasValue() && this.isString() && commas !== 3) {
            var color = new (0, _rgbcolorDefault.default)(value);
            if (color.ok) {
                color.alpha = opacity.getNumber();
                value = color.toRGBA();
            }
        }
        return new Property(this.document, this.name, value);
    }
}
Property.textBaselineMapping = {
    "baseline": "alphabetic",
    "before-edge": "top",
    "text-before-edge": "top",
    "middle": "middle",
    "central": "middle",
    "after-edge": "bottom",
    "text-after-edge": "bottom",
    "ideographic": "ideographic",
    "alphabetic": "alphabetic",
    "hanging": "hanging",
    "mathematical": "alphabetic"
};
class ViewPort {
    constructor(){
        this.viewPorts = [];
    }
    clear() {
        this.viewPorts = [];
    }
    setCurrent(width, height) {
        this.viewPorts.push({
            width,
            height
        });
    }
    removeCurrent() {
        this.viewPorts.pop();
    }
    getCurrent() {
        var { viewPorts  } = this;
        return viewPorts[viewPorts.length - 1];
    }
    get width() {
        return this.getCurrent().width;
    }
    get height() {
        return this.getCurrent().height;
    }
    computeSize(d) {
        if (typeof d === "number") return d;
        if (d === "x") return this.width;
        if (d === "y") return this.height;
        return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
    }
}
class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    static parse(point) {
        var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var [x = defaultValue, y = defaultValue] = toNumbers(point);
        return new Point(x, y);
    }
    static parseScale(scale) {
        var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var [x = defaultValue, y = x] = toNumbers(scale);
        return new Point(x, y);
    }
    static parsePath(path) {
        var points = toNumbers(path);
        var len = points.length;
        var pathPoints = [];
        for(var i = 0; i < len; i += 2)pathPoints.push(new Point(points[i], points[i + 1]));
        return pathPoints;
    }
    angleTo(point) {
        return Math.atan2(point.y - this.y, point.x - this.x);
    }
    applyTransform(transform) {
        var { x , y  } = this;
        var xp = x * transform[0] + y * transform[2] + transform[4];
        var yp = x * transform[1] + y * transform[3] + transform[5];
        this.x = xp;
        this.y = yp;
    }
}
class Mouse {
    constructor(screen){
        this.screen = screen;
        this.working = false;
        this.events = [];
        this.eventElements = []; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.onClick = this.onClick.bind(this); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.onMouseMove = this.onMouseMove.bind(this);
    }
    isWorking() {
        return this.working;
    }
    start() {
        if (this.working) return;
        var { screen , onClick , onMouseMove  } = this;
        var canvas = screen.ctx.canvas;
        canvas.onclick = onClick;
        canvas.onmousemove = onMouseMove;
        this.working = true;
    }
    stop() {
        if (!this.working) return;
        var canvas = this.screen.ctx.canvas;
        this.working = false;
        canvas.onclick = null;
        canvas.onmousemove = null;
    }
    hasEvents() {
        return this.working && this.events.length > 0;
    }
    runEvents() {
        if (!this.working) return;
        var { screen: document1 , events , eventElements  } = this;
        var { style  } = document1.ctx.canvas;
        if (style) style.cursor = "";
        events.forEach((_ref, i)=>{
            var { run  } = _ref;
            var element = eventElements[i];
            while(element){
                run(element);
                element = element.parent;
            }
        }); // done running, clear
        this.events = [];
        this.eventElements = [];
    }
    checkPath(element, ctx) {
        if (!this.working || !ctx) return;
        var { events , eventElements  } = this;
        events.forEach((_ref2, i)=>{
            var { x , y  } = _ref2;
            if (!eventElements[i] && ctx.isPointInPath && ctx.isPointInPath(x, y)) eventElements[i] = element;
        });
    }
    checkBoundingBox(element, boundingBox) {
        if (!this.working || !boundingBox) return;
        var { events , eventElements  } = this;
        events.forEach((_ref3, i)=>{
            var { x , y  } = _ref3;
            if (!eventElements[i] && boundingBox.isPointInBox(x, y)) eventElements[i] = element;
        });
    }
    mapXY(x, y) {
        var { window: window1 , ctx  } = this.screen;
        var point = new Point(x, y);
        var element = ctx.canvas;
        while(element){
            point.x -= element.offsetLeft;
            point.y -= element.offsetTop;
            element = element.offsetParent;
        }
        if (window1.scrollX) point.x += window1.scrollX;
        if (window1.scrollY) point.y += window1.scrollY;
        return point;
    }
    onClick(event) {
        var { x , y  } = this.mapXY(event.clientX, event.clientY);
        this.events.push({
            type: "onclick",
            x,
            y,
            run (eventTarget) {
                if (eventTarget.onClick) eventTarget.onClick();
            }
        });
    }
    onMouseMove(event) {
        var { x , y  } = this.mapXY(event.clientX, event.clientY);
        this.events.push({
            type: "onmousemove",
            x,
            y,
            run (eventTarget) {
                if (eventTarget.onMouseMove) eventTarget.onMouseMove();
            }
        });
    }
}
var defaultWindow = typeof window !== "undefined" ? window : null;
var defaultFetch$1 = typeof fetch !== "undefined" ? fetch.bind(undefined) // `fetch` depends on context: `someObject.fetch(...)` will throw error.
 : null;
class Screen {
    constructor(ctx){
        var { fetch: fetch1 = defaultFetch$1 , window: window1 = defaultWindow  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        this.ctx = ctx;
        this.FRAMERATE = 30;
        this.MAX_VIRTUAL_PIXELS = 30000;
        this.CLIENT_WIDTH = 800;
        this.CLIENT_HEIGHT = 600;
        this.viewPort = new ViewPort();
        this.mouse = new Mouse(this);
        this.animations = [];
        this.waits = [];
        this.frameDuration = 0;
        this.isReadyLock = false;
        this.isFirstRender = true;
        this.intervalId = null;
        this.window = window1;
        this.fetch = fetch1;
    }
    wait(checker) {
        this.waits.push(checker);
    }
    ready() {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        if (!this.readyPromise) return Promise.resolve();
        return this.readyPromise;
    }
    isReady() {
        if (this.isReadyLock) return true;
        var isReadyLock = this.waits.every((_)=>_());
        if (isReadyLock) {
            this.waits = [];
            if (this.resolveReady) this.resolveReady();
        }
        this.isReadyLock = isReadyLock;
        return isReadyLock;
    }
    setDefaults(ctx) {
        // initial values and defaults
        ctx.strokeStyle = "rgba(0,0,0,0)";
        ctx.lineCap = "butt";
        ctx.lineJoin = "miter";
        ctx.miterLimit = 4;
    }
    setViewBox(_ref) {
        var { document: document1 , ctx , aspectRatio , width , desiredWidth , height , desiredHeight , minX =0 , minY =0 , refX , refY , clip =false , clipX =0 , clipY =0  } = _ref;
        // aspect ratio - http://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
        var cleanAspectRatio = compressSpaces(aspectRatio).replace(/^defer\s/, ""); // ignore defer
        var [aspectRatioAlign, aspectRatioMeetOrSlice] = cleanAspectRatio.split(" ");
        var align = aspectRatioAlign || "xMidYMid";
        var meetOrSlice = aspectRatioMeetOrSlice || "meet"; // calculate scale
        var scaleX = width / desiredWidth;
        var scaleY = height / desiredHeight;
        var scaleMin = Math.min(scaleX, scaleY);
        var scaleMax = Math.max(scaleX, scaleY);
        var finalDesiredWidth = desiredWidth;
        var finalDesiredHeight = desiredHeight;
        if (meetOrSlice === "meet") {
            finalDesiredWidth *= scaleMin;
            finalDesiredHeight *= scaleMin;
        }
        if (meetOrSlice === "slice") {
            finalDesiredWidth *= scaleMax;
            finalDesiredHeight *= scaleMax;
        }
        var refXProp = new Property(document1, "refX", refX);
        var refYProp = new Property(document1, "refY", refY);
        var hasRefs = refXProp.hasValue() && refYProp.hasValue();
        if (hasRefs) ctx.translate(-scaleMin * refXProp.getPixels("x"), -scaleMin * refYProp.getPixels("y"));
        if (clip) {
            var scaledClipX = scaleMin * clipX;
            var scaledClipY = scaleMin * clipY;
            ctx.beginPath();
            ctx.moveTo(scaledClipX, scaledClipY);
            ctx.lineTo(width, scaledClipY);
            ctx.lineTo(width, height);
            ctx.lineTo(scaledClipX, height);
            ctx.closePath();
            ctx.clip();
        }
        if (!hasRefs) {
            var isMeetMinY = meetOrSlice === "meet" && scaleMin === scaleY;
            var isSliceMaxY = meetOrSlice === "slice" && scaleMax === scaleY;
            var isMeetMinX = meetOrSlice === "meet" && scaleMin === scaleX;
            var isSliceMaxX = meetOrSlice === "slice" && scaleMax === scaleX;
            if (align.startsWith("xMid") && (isMeetMinY || isSliceMaxY)) ctx.translate(width / 2.0 - finalDesiredWidth / 2.0, 0);
            if (align.endsWith("YMid") && (isMeetMinX || isSliceMaxX)) ctx.translate(0, height / 2.0 - finalDesiredHeight / 2.0);
            if (align.startsWith("xMax") && (isMeetMinY || isSliceMaxY)) ctx.translate(width - finalDesiredWidth, 0);
            if (align.endsWith("YMax") && (isMeetMinX || isSliceMaxX)) ctx.translate(0, height - finalDesiredHeight);
        } // scale
        switch(true){
            case align === "none":
                ctx.scale(scaleX, scaleY);
                break;
            case meetOrSlice === "meet":
                ctx.scale(scaleMin, scaleMin);
                break;
            case meetOrSlice === "slice":
                ctx.scale(scaleMax, scaleMax);
                break;
        } // translate
        ctx.translate(-minX, -minY);
    }
    start(element) {
        var { enableRedraw =false , ignoreMouse =false , ignoreAnimation =false , ignoreDimensions =false , ignoreClear =false , forceRedraw , scaleWidth , scaleHeight , offsetX , offsetY  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var { FRAMERATE , mouse  } = this;
        var frameDuration = 1000 / FRAMERATE;
        this.frameDuration = frameDuration;
        this.readyPromise = new Promise((resolve)=>{
            this.resolveReady = resolve;
        });
        if (this.isReady()) this.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);
        if (!enableRedraw) return;
        var now = Date.now();
        var then = now;
        var delta = 0;
        var tick = ()=>{
            now = Date.now();
            delta = now - then;
            if (delta >= frameDuration) {
                then = now - delta % frameDuration;
                if (this.shouldUpdate(ignoreAnimation, forceRedraw)) {
                    this.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);
                    mouse.runEvents();
                }
            }
            this.intervalId = (0, _rafDefault.default)(tick);
        };
        if (!ignoreMouse) mouse.start();
        this.intervalId = (0, _rafDefault.default)(tick);
    }
    stop() {
        if (this.intervalId) {
            (0, _rafDefault.default).cancel(this.intervalId);
            this.intervalId = null;
        }
        this.mouse.stop();
    }
    shouldUpdate(ignoreAnimation, forceRedraw) {
        // need update from animations?
        if (!ignoreAnimation) {
            var { frameDuration  } = this;
            var shouldUpdate = this.animations.reduce((shouldUpdate, animation)=>animation.update(frameDuration) || shouldUpdate, false);
            if (shouldUpdate) return true;
        } // need update from redraw?
        if (typeof forceRedraw === "function" && forceRedraw()) return true;
        if (!this.isReadyLock && this.isReady()) return true;
         // need update from mouse events?
        if (this.mouse.hasEvents()) return true;
        return false;
    }
    render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY) {
        var { CLIENT_WIDTH , CLIENT_HEIGHT , viewPort , ctx , isFirstRender  } = this;
        var canvas = ctx.canvas;
        viewPort.clear();
        if (canvas.width && canvas.height) viewPort.setCurrent(canvas.width, canvas.height);
        else viewPort.setCurrent(CLIENT_WIDTH, CLIENT_HEIGHT);
        var widthStyle = element.getStyle("width");
        var heightStyle = element.getStyle("height");
        if (!ignoreDimensions && (isFirstRender || typeof scaleWidth !== "number" && typeof scaleHeight !== "number")) {
            // set canvas size
            if (widthStyle.hasValue()) {
                canvas.width = widthStyle.getPixels("x");
                if (canvas.style) canvas.style.width = "".concat(canvas.width, "px");
            }
            if (heightStyle.hasValue()) {
                canvas.height = heightStyle.getPixels("y");
                if (canvas.style) canvas.style.height = "".concat(canvas.height, "px");
            }
        }
        var cWidth = canvas.clientWidth || canvas.width;
        var cHeight = canvas.clientHeight || canvas.height;
        if (ignoreDimensions && widthStyle.hasValue() && heightStyle.hasValue()) {
            cWidth = widthStyle.getPixels("x");
            cHeight = heightStyle.getPixels("y");
        }
        viewPort.setCurrent(cWidth, cHeight);
        if (typeof offsetX === "number") element.getAttribute("x", true).setValue(offsetX);
        if (typeof offsetY === "number") element.getAttribute("y", true).setValue(offsetY);
        if (typeof scaleWidth === "number" || typeof scaleHeight === "number") {
            var viewBox = toNumbers(element.getAttribute("viewBox").getString());
            var xRatio = 0;
            var yRatio = 0;
            if (typeof scaleWidth === "number") {
                var _widthStyle = element.getStyle("width");
                if (_widthStyle.hasValue()) xRatio = _widthStyle.getPixels("x") / scaleWidth;
                else if (!isNaN(viewBox[2])) xRatio = viewBox[2] / scaleWidth;
            }
            if (typeof scaleHeight === "number") {
                var _heightStyle = element.getStyle("height");
                if (_heightStyle.hasValue()) yRatio = _heightStyle.getPixels("y") / scaleHeight;
                else if (!isNaN(viewBox[3])) yRatio = viewBox[3] / scaleHeight;
            }
            if (!xRatio) xRatio = yRatio;
            if (!yRatio) yRatio = xRatio;
            element.getAttribute("width", true).setValue(scaleWidth);
            element.getAttribute("height", true).setValue(scaleHeight);
            var transformStyle = element.getStyle("transform", true, true);
            transformStyle.setValue("".concat(transformStyle.getString(), " scale(").concat(1.0 / xRatio, ", ").concat(1.0 / yRatio, ")"));
        } // clear and render
        if (!ignoreClear) ctx.clearRect(0, 0, cWidth, cHeight);
        element.render(ctx);
        if (isFirstRender) this.isFirstRender = false;
    }
}
Screen.defaultWindow = defaultWindow;
Screen.defaultFetch = defaultFetch$1;
var { defaultFetch  } = Screen;
var DefaultDOMParser = typeof DOMParser !== "undefined" ? DOMParser : null;
class Parser {
    constructor(){
        var { fetch: fetch1 = defaultFetch , DOMParser: DOMParser1 = DefaultDOMParser  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        this.fetch = fetch1;
        this.DOMParser = DOMParser1;
    }
    parse(resource) {
        var _this = this;
        return (0, _asyncToGeneratorDefault.default)(function*() {
            if (resource.startsWith("<")) return _this.parseFromString(resource);
            return _this.load(resource);
        })();
    }
    parseFromString(xml) {
        var parser = new this.DOMParser();
        try {
            return this.checkDocument(parser.parseFromString(xml, "image/svg+xml"));
        } catch (err) {
            return this.checkDocument(parser.parseFromString(xml, "text/xml"));
        }
    }
    checkDocument(document1) {
        var parserError = document1.getElementsByTagName("parsererror")[0];
        if (parserError) throw new Error(parserError.textContent);
        return document1;
    }
    load(url) {
        var _this2 = this;
        return (0, _asyncToGeneratorDefault.default)(function*() {
            var response = yield _this2.fetch(url);
            var xml = yield response.text();
            return _this2.parseFromString(xml);
        })();
    }
}
class Translate {
    constructor(_, point){
        this.type = "translate";
        this.point = null;
        this.point = Point.parse(point);
    }
    apply(ctx) {
        var { x , y  } = this.point;
        ctx.translate(x || 0.0, y || 0.0);
    }
    unapply(ctx) {
        var { x , y  } = this.point;
        ctx.translate(-1 * x || 0.0, -1 * y || 0.0);
    }
    applyToPoint(point) {
        var { x , y  } = this.point;
        point.applyTransform([
            1,
            0,
            0,
            1,
            x || 0.0,
            y || 0.0
        ]);
    }
}
class Rotate {
    constructor(document1, rotate, transformOrigin){
        this.type = "rotate";
        this.angle = null;
        this.originX = null;
        this.originY = null;
        this.cx = 0;
        this.cy = 0;
        var numbers = toNumbers(rotate);
        this.angle = new Property(document1, "angle", numbers[0]);
        this.originX = transformOrigin[0];
        this.originY = transformOrigin[1];
        this.cx = numbers[1] || 0;
        this.cy = numbers[2] || 0;
    }
    apply(ctx) {
        var { cx , cy , originX , originY , angle  } = this;
        var tx = cx + originX.getPixels("x");
        var ty = cy + originY.getPixels("y");
        ctx.translate(tx, ty);
        ctx.rotate(angle.getRadians());
        ctx.translate(-tx, -ty);
    }
    unapply(ctx) {
        var { cx , cy , originX , originY , angle  } = this;
        var tx = cx + originX.getPixels("x");
        var ty = cy + originY.getPixels("y");
        ctx.translate(tx, ty);
        ctx.rotate(-1 * angle.getRadians());
        ctx.translate(-tx, -ty);
    }
    applyToPoint(point) {
        var { cx , cy , angle  } = this;
        var rad = angle.getRadians();
        point.applyTransform([
            1,
            0,
            0,
            1,
            cx || 0.0,
            cy || 0.0 // this.p.y
        ]);
        point.applyTransform([
            Math.cos(rad),
            Math.sin(rad),
            -Math.sin(rad),
            Math.cos(rad),
            0,
            0
        ]);
        point.applyTransform([
            1,
            0,
            0,
            1,
            -cx || 0.0,
            -cy || 0.0 // -this.p.y
        ]);
    }
}
class Scale {
    constructor(_, scale, transformOrigin){
        this.type = "scale";
        this.scale = null;
        this.originX = null;
        this.originY = null;
        var scaleSize = Point.parseScale(scale); // Workaround for node-canvas
        if (scaleSize.x === 0 || scaleSize.y === 0) {
            scaleSize.x = PSEUDO_ZERO;
            scaleSize.y = PSEUDO_ZERO;
        }
        this.scale = scaleSize;
        this.originX = transformOrigin[0];
        this.originY = transformOrigin[1];
    }
    apply(ctx) {
        var { scale: { x , y  } , originX , originY  } = this;
        var tx = originX.getPixels("x");
        var ty = originY.getPixels("y");
        ctx.translate(tx, ty);
        ctx.scale(x, y || x);
        ctx.translate(-tx, -ty);
    }
    unapply(ctx) {
        var { scale: { x , y  } , originX , originY  } = this;
        var tx = originX.getPixels("x");
        var ty = originY.getPixels("y");
        ctx.translate(tx, ty);
        ctx.scale(1.0 / x, 1.0 / y || x);
        ctx.translate(-tx, -ty);
    }
    applyToPoint(point) {
        var { x , y  } = this.scale;
        point.applyTransform([
            x || 0.0,
            0,
            0,
            y || 0.0,
            0,
            0
        ]);
    }
}
class Matrix {
    constructor(_, matrix, transformOrigin){
        this.type = "matrix";
        this.matrix = [];
        this.originX = null;
        this.originY = null;
        this.matrix = toNumbers(matrix);
        this.originX = transformOrigin[0];
        this.originY = transformOrigin[1];
    }
    apply(ctx) {
        var { originX , originY , matrix  } = this;
        var tx = originX.getPixels("x");
        var ty = originY.getPixels("y");
        ctx.translate(tx, ty);
        ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
        ctx.translate(-tx, -ty);
    }
    unapply(ctx) {
        var { originX , originY , matrix  } = this;
        var a = matrix[0];
        var b = matrix[2];
        var c = matrix[4];
        var d = matrix[1];
        var e = matrix[3];
        var f = matrix[5];
        var g = 0.0;
        var h = 0.0;
        var i = 1.0;
        var det = 1 / (a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g));
        var tx = originX.getPixels("x");
        var ty = originY.getPixels("y");
        ctx.translate(tx, ty);
        ctx.transform(det * (e * i - f * h), det * (f * g - d * i), det * (c * h - b * i), det * (a * i - c * g), det * (b * f - c * e), det * (c * d - a * f));
        ctx.translate(-tx, -ty);
    }
    applyToPoint(point) {
        point.applyTransform(this.matrix);
    }
}
class Skew extends Matrix {
    constructor(document1, skew, transformOrigin){
        super(document1, skew, transformOrigin);
        this.type = "skew";
        this.angle = null;
        this.angle = new Property(document1, "angle", skew);
    }
}
class SkewX extends Skew {
    constructor(document1, skew, transformOrigin){
        super(document1, skew, transformOrigin);
        this.type = "skewX";
        this.matrix = [
            1,
            0,
            Math.tan(this.angle.getRadians()),
            1,
            0,
            0
        ];
    }
}
class SkewY extends Skew {
    constructor(document1, skew, transformOrigin){
        super(document1, skew, transformOrigin);
        this.type = "skewY";
        this.matrix = [
            1,
            Math.tan(this.angle.getRadians()),
            0,
            1,
            0,
            0
        ];
    }
}
function parseTransforms(transform) {
    return compressSpaces(transform).trim().replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/);
}
function parseTransform(transform) {
    var [type, value] = transform.split("(");
    return [
        type.trim(),
        value.trim().replace(")", "")
    ];
}
class Transform {
    constructor(document1, transform, transformOrigin){
        this.document = document1;
        this.transforms = [];
        var data = parseTransforms(transform);
        data.forEach((transform)=>{
            if (transform === "none") return;
            var [type, value] = parseTransform(transform);
            var TransformType = Transform.transformTypes[type];
            if (typeof TransformType !== "undefined") this.transforms.push(new TransformType(this.document, value, transformOrigin));
        });
    }
    static fromElement(document1, element) {
        var transformStyle = element.getStyle("transform", false, true);
        var [transformOriginXProperty, transformOriginYProperty = transformOriginXProperty] = element.getStyle("transform-origin", false, true).split();
        var transformOrigin = [
            transformOriginXProperty,
            transformOriginYProperty
        ];
        if (transformStyle.hasValue()) return new Transform(document1, transformStyle.getString(), transformOrigin);
        return null;
    }
    apply(ctx) {
        var { transforms  } = this;
        var len = transforms.length;
        for(var i = 0; i < len; i++)transforms[i].apply(ctx);
    }
    unapply(ctx) {
        var { transforms  } = this;
        var len = transforms.length;
        for(var i = len - 1; i >= 0; i--)transforms[i].unapply(ctx);
    }
    applyToPoint(point) {
        var { transforms  } = this;
        var len = transforms.length;
        for(var i = 0; i < len; i++)transforms[i].applyToPoint(point);
    }
}
Transform.transformTypes = {
    translate: Translate,
    rotate: Rotate,
    scale: Scale,
    matrix: Matrix,
    skewX: SkewX,
    skewY: SkewY
};
class Element {
    constructor(document1, node){
        var captureTextNodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        this.document = document1;
        this.node = node;
        this.captureTextNodes = captureTextNodes;
        this.attributes = {};
        this.styles = {};
        this.stylesSpecificity = {};
        this.animationFrozen = false;
        this.animationFrozenValue = "";
        this.parent = null;
        this.children = [];
        if (!node || node.nodeType !== 1) // ELEMENT_NODE
        return;
         // add attributes
        Array.from(node.attributes).forEach((attribute)=>{
            var nodeName = normalizeAttributeName(attribute.nodeName);
            this.attributes[nodeName] = new Property(document1, nodeName, attribute.value);
        });
        this.addStylesFromStyleDefinition(); // add inline styles
        if (this.getAttribute("style").hasValue()) {
            var styles = this.getAttribute("style").getString().split(";").map((_)=>_.trim());
            styles.forEach((style)=>{
                if (!style) return;
                var [name, value] = style.split(":").map((_)=>_.trim());
                this.styles[name] = new Property(document1, name, value);
            });
        }
        var { definitions  } = document1;
        var id = this.getAttribute("id"); // add id
        if (id.hasValue()) {
            if (!definitions[id.getString()]) definitions[id.getString()] = this;
        }
        Array.from(node.childNodes).forEach((childNode)=>{
            if (childNode.nodeType === 1) this.addChild(childNode); // ELEMENT_NODE
            else if (captureTextNodes && (childNode.nodeType === 3 || childNode.nodeType === 4)) {
                var textNode = document1.createTextNode(childNode);
                if (textNode.getText().length > 0) this.addChild(textNode); // TEXT_NODE
            }
        });
    }
    getAttribute(name) {
        var createIfNotExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var attr = this.attributes[name];
        if (!attr && createIfNotExists) {
            var _attr = new Property(this.document, name, "");
            this.attributes[name] = _attr;
            return _attr;
        }
        return attr || Property.empty(this.document);
    }
    getHrefAttribute() {
        for(var key in this.attributes){
            if (key === "href" || key.endsWith(":href")) return this.attributes[key];
        }
        return Property.empty(this.document);
    }
    getStyle(name) {
        var createIfNotExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var skipAncestors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var style = this.styles[name];
        if (style) return style;
        var attr = this.getAttribute(name);
        if (attr !== null && attr !== void 0 && attr.hasValue()) {
            this.styles[name] = attr; // move up to me to cache
            return attr;
        }
        if (!skipAncestors) {
            var { parent  } = this;
            if (parent) {
                var parentStyle = parent.getStyle(name);
                if (parentStyle !== null && parentStyle !== void 0 && parentStyle.hasValue()) return parentStyle;
            }
        }
        if (createIfNotExists) {
            var _style = new Property(this.document, name, "");
            this.styles[name] = _style;
            return _style;
        }
        return style || Property.empty(this.document);
    }
    render(ctx) {
        // don't render display=none
        // don't render visibility=hidden
        if (this.getStyle("display").getString() === "none" || this.getStyle("visibility").getString() === "hidden") return;
        ctx.save();
        if (this.getStyle("mask").hasValue()) {
            // mask
            var mask = this.getStyle("mask").getDefinition();
            if (mask) {
                this.applyEffects(ctx);
                mask.apply(ctx, this);
            }
        } else if (this.getStyle("filter").getValue("none") !== "none") {
            // filter
            var filter = this.getStyle("filter").getDefinition();
            if (filter) {
                this.applyEffects(ctx);
                filter.apply(ctx, this);
            }
        } else {
            this.setContext(ctx);
            this.renderChildren(ctx);
            this.clearContext(ctx);
        }
        ctx.restore();
    }
    setContext(_) {}
    applyEffects(ctx) {
        // transform
        var transform = Transform.fromElement(this.document, this);
        if (transform) transform.apply(ctx);
         // clip
        var clipPathStyleProp = this.getStyle("clip-path", false, true);
        if (clipPathStyleProp.hasValue()) {
            var clip = clipPathStyleProp.getDefinition();
            if (clip) clip.apply(ctx);
        }
    }
    clearContext(_) {}
    renderChildren(ctx) {
        this.children.forEach((child)=>{
            child.render(ctx);
        });
    }
    addChild(childNode) {
        var child = childNode instanceof Element ? childNode : this.document.createElement(childNode);
        child.parent = this;
        if (!Element.ignoreChildTypes.includes(child.type)) this.children.push(child);
    }
    matchesSelector(selector) {
        var _node$getAttribute;
        var { node  } = this;
        if (typeof node.matches === "function") return node.matches(selector);
        var styleClasses = (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "class");
        if (!styleClasses || styleClasses === "") return false;
        return styleClasses.split(" ").some((styleClass)=>".".concat(styleClass) === selector);
    }
    addStylesFromStyleDefinition() {
        var { styles , stylesSpecificity  } = this.document;
        for(var selector in styles)if (!selector.startsWith("@") && this.matchesSelector(selector)) {
            var style = styles[selector];
            var specificity = stylesSpecificity[selector];
            if (style) for(var name in style){
                var existingSpecificity = this.stylesSpecificity[name];
                if (typeof existingSpecificity === "undefined") existingSpecificity = "000";
                if (specificity >= existingSpecificity) {
                    this.styles[name] = style[name];
                    this.stylesSpecificity[name] = specificity;
                }
            }
        }
    }
    removeStyles(element, ignoreStyles) {
        var toRestore = ignoreStyles.reduce((toRestore, name)=>{
            var styleProp = element.getStyle(name);
            if (!styleProp.hasValue()) return toRestore;
            var value = styleProp.getString();
            styleProp.setValue("");
            return [
                ...toRestore,
                [
                    name,
                    value
                ]
            ];
        }, []);
        return toRestore;
    }
    restoreStyles(element, styles) {
        styles.forEach((_ref)=>{
            var [name, value] = _ref;
            element.getStyle(name, true).setValue(value);
        });
    }
    isFirstChild() {
        var _this$parent;
        return ((_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.children.indexOf(this)) === 0;
    }
}
Element.ignoreChildTypes = [
    "title"
];
class UnknownElement extends Element {
    constructor(document1, node, captureTextNodes){
        super(document1, node, captureTextNodes);
    }
}
function wrapFontFamily(fontFamily) {
    var trimmed = fontFamily.trim();
    return /^('|")/.test(trimmed) ? trimmed : '"'.concat(trimmed, '"');
}
function prepareFontFamily(fontFamily) {
    return typeof process === "undefined" ? fontFamily : fontFamily.trim().split(",").map(wrapFontFamily).join(",");
}
/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
 * @param fontStyle
 * @returns CSS font style.
 */ function prepareFontStyle(fontStyle) {
    if (!fontStyle) return "";
    var targetFontStyle = fontStyle.trim().toLowerCase();
    switch(targetFontStyle){
        case "normal":
        case "italic":
        case "oblique":
        case "inherit":
        case "initial":
        case "unset":
            return targetFontStyle;
        default:
            if (/^oblique\s+(-|)\d+deg$/.test(targetFontStyle)) return targetFontStyle;
            return "";
    }
}
/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
 * @param fontWeight
 * @returns CSS font weight.
 */ function prepareFontWeight(fontWeight) {
    if (!fontWeight) return "";
    var targetFontWeight = fontWeight.trim().toLowerCase();
    switch(targetFontWeight){
        case "normal":
        case "bold":
        case "lighter":
        case "bolder":
        case "inherit":
        case "initial":
        case "unset":
            return targetFontWeight;
        default:
            if (/^[\d.]+$/.test(targetFontWeight)) return targetFontWeight;
            return "";
    }
}
class Font {
    constructor(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit){
        var inheritFont = inherit ? typeof inherit === "string" ? Font.parse(inherit) : inherit : {};
        this.fontFamily = fontFamily || inheritFont.fontFamily;
        this.fontSize = fontSize || inheritFont.fontSize;
        this.fontStyle = fontStyle || inheritFont.fontStyle;
        this.fontWeight = fontWeight || inheritFont.fontWeight;
        this.fontVariant = fontVariant || inheritFont.fontVariant;
    }
    static parse() {
        var font = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var inherit = arguments.length > 1 ? arguments[1] : undefined;
        var fontStyle = "";
        var fontVariant = "";
        var fontWeight = "";
        var fontSize = "";
        var fontFamily = "";
        var parts = compressSpaces(font).trim().split(" ");
        var set = {
            fontSize: false,
            fontStyle: false,
            fontWeight: false,
            fontVariant: false
        };
        parts.forEach((part)=>{
            switch(true){
                case !set.fontStyle && Font.styles.includes(part):
                    if (part !== "inherit") fontStyle = part;
                    set.fontStyle = true;
                    break;
                case !set.fontVariant && Font.variants.includes(part):
                    if (part !== "inherit") fontVariant = part;
                    set.fontStyle = true;
                    set.fontVariant = true;
                    break;
                case !set.fontWeight && Font.weights.includes(part):
                    if (part !== "inherit") fontWeight = part;
                    set.fontStyle = true;
                    set.fontVariant = true;
                    set.fontWeight = true;
                    break;
                case !set.fontSize:
                    if (part !== "inherit") [fontSize] = part.split("/");
                    set.fontStyle = true;
                    set.fontVariant = true;
                    set.fontWeight = true;
                    set.fontSize = true;
                    break;
                default:
                    if (part !== "inherit") fontFamily += part;
            }
        });
        return new Font(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit);
    }
    toString() {
        return [
            prepareFontStyle(this.fontStyle),
            this.fontVariant,
            prepareFontWeight(this.fontWeight),
            this.fontSize,
            prepareFontFamily(this.fontFamily)
        ].join(" ").trim();
    }
}
Font.styles = "normal|italic|oblique|inherit";
Font.variants = "normal|small-caps|inherit";
Font.weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";
class BoundingBox {
    constructor(){
        var x1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.NaN;
        var y1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.NaN;
        var x2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.NaN;
        var y2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Number.NaN;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.addPoint(x1, y1);
        this.addPoint(x2, y2);
    }
    get x() {
        return this.x1;
    }
    get y() {
        return this.y1;
    }
    get width() {
        return this.x2 - this.x1;
    }
    get height() {
        return this.y2 - this.y1;
    }
    addPoint(x, y) {
        if (typeof x !== "undefined") {
            if (isNaN(this.x1) || isNaN(this.x2)) {
                this.x1 = x;
                this.x2 = x;
            }
            if (x < this.x1) this.x1 = x;
            if (x > this.x2) this.x2 = x;
        }
        if (typeof y !== "undefined") {
            if (isNaN(this.y1) || isNaN(this.y2)) {
                this.y1 = y;
                this.y2 = y;
            }
            if (y < this.y1) this.y1 = y;
            if (y > this.y2) this.y2 = y;
        }
    }
    addX(x) {
        this.addPoint(x, null);
    }
    addY(y) {
        this.addPoint(null, y);
    }
    addBoundingBox(boundingBox) {
        if (!boundingBox) return;
        var { x1 , y1 , x2 , y2  } = boundingBox;
        this.addPoint(x1, y1);
        this.addPoint(x2, y2);
    }
    sumCubic(t, p0, p1, p2, p3) {
        return Math.pow(1 - t, 3) * p0 + 3 * Math.pow(1 - t, 2) * t * p1 + 3 * (1 - t) * Math.pow(t, 2) * p2 + Math.pow(t, 3) * p3;
    }
    bezierCurveAdd(forX, p0, p1, p2, p3) {
        var b = 6 * p0 - 12 * p1 + 6 * p2;
        var a = -3 * p0 + 9 * p1 - 9 * p2 + 3 * p3;
        var c = 3 * p1 - 3 * p0;
        if (a === 0) {
            if (b === 0) return;
            var t = -c / b;
            if (0 < t && t < 1) {
                if (forX) this.addX(this.sumCubic(t, p0, p1, p2, p3));
                else this.addY(this.sumCubic(t, p0, p1, p2, p3));
            }
            return;
        }
        var b2ac = Math.pow(b, 2) - 4 * c * a;
        if (b2ac < 0) return;
        var t1 = (-b + Math.sqrt(b2ac)) / (2 * a);
        if (0 < t1 && t1 < 1) {
            if (forX) this.addX(this.sumCubic(t1, p0, p1, p2, p3));
            else this.addY(this.sumCubic(t1, p0, p1, p2, p3));
        }
        var t2 = (-b - Math.sqrt(b2ac)) / (2 * a);
        if (0 < t2 && t2 < 1) {
            if (forX) this.addX(this.sumCubic(t2, p0, p1, p2, p3));
            else this.addY(this.sumCubic(t2, p0, p1, p2, p3));
        }
    }
    addBezierCurve(p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y) {
        this.addPoint(p0x, p0y);
        this.addPoint(p3x, p3y);
        this.bezierCurveAdd(true, p0x, p1x, p2x, p3x);
        this.bezierCurveAdd(false, p0y, p1y, p2y, p3y);
    }
    addQuadraticCurve(p0x, p0y, p1x, p1y, p2x, p2y) {
        var cp1x = p0x + 2 / 3 * (p1x - p0x); // CP1 = QP0 + 2/3 *(QP1-QP0)
        var cp1y = p0y + 2 / 3 * (p1y - p0y); // CP1 = QP0 + 2/3 *(QP1-QP0)
        var cp2x = cp1x + 1 / 3 * (p2x - p0x); // CP2 = CP1 + 1/3 *(QP2-QP0)
        var cp2y = cp1y + 1 / 3 * (p2y - p0y); // CP2 = CP1 + 1/3 *(QP2-QP0)
        this.addBezierCurve(p0x, p0y, cp1x, cp2x, cp1y, cp2y, p2x, p2y);
    }
    isPointInBox(x, y) {
        var { x1 , y1 , x2 , y2  } = this;
        return x1 <= x && x <= x2 && y1 <= y && y <= y2;
    }
}
class PathParser extends (0, _svgPathdata.SVGPathData) {
    constructor(path){
        super(path // Fix spaces after signs.
        .replace(/([+\-.])\s+/gm, "$1") // Remove invalid part.
        .replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, ""));
        this.control = null;
        this.start = null;
        this.current = null;
        this.command = null;
        this.commands = this.commands;
        this.i = -1;
        this.previousCommand = null;
        this.points = [];
        this.angles = [];
    }
    reset() {
        this.i = -1;
        this.command = null;
        this.previousCommand = null;
        this.start = new Point(0, 0);
        this.control = new Point(0, 0);
        this.current = new Point(0, 0);
        this.points = [];
        this.angles = [];
    }
    isEnd() {
        var { i , commands  } = this;
        return i >= commands.length - 1;
    }
    next() {
        var command = this.commands[++this.i];
        this.previousCommand = this.command;
        this.command = command;
        return command;
    }
    getPoint() {
        var xProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "x";
        var yProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "y";
        var point = new Point(this.command[xProp], this.command[yProp]);
        return this.makeAbsolute(point);
    }
    getAsControlPoint(xProp, yProp) {
        var point = this.getPoint(xProp, yProp);
        this.control = point;
        return point;
    }
    getAsCurrentPoint(xProp, yProp) {
        var point = this.getPoint(xProp, yProp);
        this.current = point;
        return point;
    }
    getReflectedControlPoint() {
        var previousCommand = this.previousCommand.type;
        if (previousCommand !== (0, _svgPathdata.SVGPathData).CURVE_TO && previousCommand !== (0, _svgPathdata.SVGPathData).SMOOTH_CURVE_TO && previousCommand !== (0, _svgPathdata.SVGPathData).QUAD_TO && previousCommand !== (0, _svgPathdata.SVGPathData).SMOOTH_QUAD_TO) return this.current;
         // reflect point
        var { current: { x: cx , y: cy  } , control: { x: ox , y: oy  }  } = this;
        var point = new Point(2 * cx - ox, 2 * cy - oy);
        return point;
    }
    makeAbsolute(point) {
        if (this.command.relative) {
            var { x , y  } = this.current;
            point.x += x;
            point.y += y;
        }
        return point;
    }
    addMarker(point, from, priorTo) {
        var { points , angles  } = this; // if the last angle isn't filled in because we didn't have this point yet ...
        if (priorTo && angles.length > 0 && !angles[angles.length - 1]) angles[angles.length - 1] = points[points.length - 1].angleTo(priorTo);
        this.addMarkerAngle(point, from ? from.angleTo(point) : null);
    }
    addMarkerAngle(point, angle) {
        this.points.push(point);
        this.angles.push(angle);
    }
    getMarkerPoints() {
        return this.points;
    }
    getMarkerAngles() {
        var { angles  } = this;
        var len = angles.length;
        for(var i = 0; i < len; i++)if (!angles[i]) {
            for(var j = i + 1; j < len; j++)if (angles[j]) {
                angles[i] = angles[j];
                break;
            }
        }
        return angles;
    }
}
class RenderedElement extends Element {
    constructor(){
        super(...arguments);
        this.modifiedEmSizeStack = false;
    }
    calculateOpacity() {
        var opacity = 1.0; // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this
        var element = this;
        while(element){
            var opacityStyle = element.getStyle("opacity", false, true); // no ancestors on style call
            if (opacityStyle.hasValue(true)) opacity *= opacityStyle.getNumber();
            element = element.parent;
        }
        return opacity;
    }
    setContext(ctx) {
        var fromMeasure = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (!fromMeasure) {
            // causes stack overflow when measuring text with gradients
            // fill
            var fillStyleProp = this.getStyle("fill");
            var fillOpacityStyleProp = this.getStyle("fill-opacity");
            var strokeStyleProp = this.getStyle("stroke");
            var strokeOpacityProp = this.getStyle("stroke-opacity");
            if (fillStyleProp.isUrlDefinition()) {
                var fillStyle = fillStyleProp.getFillStyleDefinition(this, fillOpacityStyleProp);
                if (fillStyle) ctx.fillStyle = fillStyle;
            } else if (fillStyleProp.hasValue()) {
                if (fillStyleProp.getString() === "currentColor") fillStyleProp.setValue(this.getStyle("color").getColor());
                var _fillStyle = fillStyleProp.getColor();
                if (_fillStyle !== "inherit") ctx.fillStyle = _fillStyle === "none" ? "rgba(0,0,0,0)" : _fillStyle;
            }
            if (fillOpacityStyleProp.hasValue()) {
                var _fillStyle2 = new Property(this.document, "fill", ctx.fillStyle).addOpacity(fillOpacityStyleProp).getColor();
                ctx.fillStyle = _fillStyle2;
            } // stroke
            if (strokeStyleProp.isUrlDefinition()) {
                var strokeStyle = strokeStyleProp.getFillStyleDefinition(this, strokeOpacityProp);
                if (strokeStyle) ctx.strokeStyle = strokeStyle;
            } else if (strokeStyleProp.hasValue()) {
                if (strokeStyleProp.getString() === "currentColor") strokeStyleProp.setValue(this.getStyle("color").getColor());
                var _strokeStyle = strokeStyleProp.getString();
                if (_strokeStyle !== "inherit") ctx.strokeStyle = _strokeStyle === "none" ? "rgba(0,0,0,0)" : _strokeStyle;
            }
            if (strokeOpacityProp.hasValue()) {
                var _strokeStyle2 = new Property(this.document, "stroke", ctx.strokeStyle).addOpacity(strokeOpacityProp).getString();
                ctx.strokeStyle = _strokeStyle2;
            }
            var strokeWidthStyleProp = this.getStyle("stroke-width");
            if (strokeWidthStyleProp.hasValue()) {
                var newLineWidth = strokeWidthStyleProp.getPixels();
                ctx.lineWidth = !newLineWidth ? PSEUDO_ZERO // browsers don't respect 0 (or node-canvas? :-)
                 : newLineWidth;
            }
            var strokeLinecapStyleProp = this.getStyle("stroke-linecap");
            var strokeLinejoinStyleProp = this.getStyle("stroke-linejoin");
            var strokeMiterlimitProp = this.getStyle("stroke-miterlimit"); // NEED TEST
            // const pointOrderStyleProp = this.getStyle('paint-order');
            var strokeDasharrayStyleProp = this.getStyle("stroke-dasharray");
            var strokeDashoffsetProp = this.getStyle("stroke-dashoffset");
            if (strokeLinecapStyleProp.hasValue()) ctx.lineCap = strokeLinecapStyleProp.getString();
            if (strokeLinejoinStyleProp.hasValue()) ctx.lineJoin = strokeLinejoinStyleProp.getString();
            if (strokeMiterlimitProp.hasValue()) ctx.miterLimit = strokeMiterlimitProp.getNumber();
             // NEED TEST
            // if (pointOrderStyleProp.hasValue()) {
            // 	// ?
            // 	ctx.paintOrder = pointOrderStyleProp.getValue();
            // }
            if (strokeDasharrayStyleProp.hasValue() && strokeDasharrayStyleProp.getString() !== "none") {
                var gaps = toNumbers(strokeDasharrayStyleProp.getString());
                if (typeof ctx.setLineDash !== "undefined") ctx.setLineDash(gaps);
                else if (typeof ctx.webkitLineDash !== "undefined") // @ts-expect-error Handle browser prefix.
                ctx.webkitLineDash = gaps;
                else if (typeof ctx.mozDash !== "undefined" && !(gaps.length === 1 && gaps[0] === 0)) // @ts-expect-error Handle browser prefix.
                ctx.mozDash = gaps;
                var offset = strokeDashoffsetProp.getPixels();
                if (typeof ctx.lineDashOffset !== "undefined") ctx.lineDashOffset = offset;
                else if (typeof ctx.webkitLineDashOffset !== "undefined") // @ts-expect-error Handle browser prefix.
                ctx.webkitLineDashOffset = offset;
                else if (typeof ctx.mozDashOffset !== "undefined") // @ts-expect-error Handle browser prefix.
                ctx.mozDashOffset = offset;
            }
        } // font
        this.modifiedEmSizeStack = false;
        if (typeof ctx.font !== "undefined") {
            var fontStyleProp = this.getStyle("font");
            var fontStyleStyleProp = this.getStyle("font-style");
            var fontVariantStyleProp = this.getStyle("font-variant");
            var fontWeightStyleProp = this.getStyle("font-weight");
            var fontSizeStyleProp = this.getStyle("font-size");
            var fontFamilyStyleProp = this.getStyle("font-family");
            var font = new Font(fontStyleStyleProp.getString(), fontVariantStyleProp.getString(), fontWeightStyleProp.getString(), fontSizeStyleProp.hasValue() ? "".concat(fontSizeStyleProp.getPixels(true), "px") : "", fontFamilyStyleProp.getString(), Font.parse(fontStyleProp.getString(), ctx.font));
            fontStyleStyleProp.setValue(font.fontStyle);
            fontVariantStyleProp.setValue(font.fontVariant);
            fontWeightStyleProp.setValue(font.fontWeight);
            fontSizeStyleProp.setValue(font.fontSize);
            fontFamilyStyleProp.setValue(font.fontFamily);
            ctx.font = font.toString();
            if (fontSizeStyleProp.isPixels()) {
                this.document.emSize = fontSizeStyleProp.getPixels();
                this.modifiedEmSizeStack = true;
            }
        }
        if (!fromMeasure) {
            // effects
            this.applyEffects(ctx); // opacity
            ctx.globalAlpha = this.calculateOpacity();
        }
    }
    clearContext(ctx) {
        super.clearContext(ctx);
        if (this.modifiedEmSizeStack) this.document.popEmSize();
    }
}
class PathElement extends RenderedElement {
    constructor(document1, node, captureTextNodes){
        super(document1, node, captureTextNodes);
        this.type = "path";
        this.pathParser = null;
        this.pathParser = new PathParser(this.getAttribute("d").getString());
    }
    path(ctx) {
        var { pathParser  } = this;
        var boundingBox = new BoundingBox();
        pathParser.reset();
        if (ctx) ctx.beginPath();
        while(!pathParser.isEnd())switch(pathParser.next().type){
            case PathParser.MOVE_TO:
                this.pathM(ctx, boundingBox);
                break;
            case PathParser.LINE_TO:
                this.pathL(ctx, boundingBox);
                break;
            case PathParser.HORIZ_LINE_TO:
                this.pathH(ctx, boundingBox);
                break;
            case PathParser.VERT_LINE_TO:
                this.pathV(ctx, boundingBox);
                break;
            case PathParser.CURVE_TO:
                this.pathC(ctx, boundingBox);
                break;
            case PathParser.SMOOTH_CURVE_TO:
                this.pathS(ctx, boundingBox);
                break;
            case PathParser.QUAD_TO:
                this.pathQ(ctx, boundingBox);
                break;
            case PathParser.SMOOTH_QUAD_TO:
                this.pathT(ctx, boundingBox);
                break;
            case PathParser.ARC:
                this.pathA(ctx, boundingBox);
                break;
            case PathParser.CLOSE_PATH:
                this.pathZ(ctx, boundingBox);
                break;
        }
        return boundingBox;
    }
    getBoundingBox(_) {
        return this.path();
    }
    getMarkers() {
        var { pathParser  } = this;
        var points = pathParser.getMarkerPoints();
        var angles = pathParser.getMarkerAngles();
        var markers = points.map((point, i)=>[
                point,
                angles[i]
            ]);
        return markers;
    }
    renderChildren(ctx) {
        this.path(ctx);
        this.document.screen.mouse.checkPath(this, ctx);
        var fillRuleStyleProp = this.getStyle("fill-rule");
        if (ctx.fillStyle !== "") {
            if (fillRuleStyleProp.getString("inherit") !== "inherit") ctx.fill(fillRuleStyleProp.getString());
            else ctx.fill();
        }
        if (ctx.strokeStyle !== "") {
            if (this.getAttribute("vector-effect").getString() === "non-scaling-stroke") {
                ctx.save();
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.stroke();
                ctx.restore();
            } else ctx.stroke();
        }
        var markers = this.getMarkers();
        if (markers) {
            var markersLastIndex = markers.length - 1;
            var markerStartStyleProp = this.getStyle("marker-start");
            var markerMidStyleProp = this.getStyle("marker-mid");
            var markerEndStyleProp = this.getStyle("marker-end");
            if (markerStartStyleProp.isUrlDefinition()) {
                var marker = markerStartStyleProp.getDefinition();
                var [point, angle] = markers[0];
                marker.render(ctx, point, angle);
            }
            if (markerMidStyleProp.isUrlDefinition()) {
                var _marker = markerMidStyleProp.getDefinition();
                for(var i = 1; i < markersLastIndex; i++){
                    var [_point, _angle] = markers[i];
                    _marker.render(ctx, _point, _angle);
                }
            }
            if (markerEndStyleProp.isUrlDefinition()) {
                var _marker2 = markerEndStyleProp.getDefinition();
                var [_point2, _angle2] = markers[markersLastIndex];
                _marker2.render(ctx, _point2, _angle2);
            }
        }
    }
    static pathM(pathParser) {
        var point = pathParser.getAsCurrentPoint();
        pathParser.start = pathParser.current;
        return {
            point
        };
    }
    pathM(ctx, boundingBox) {
        var { pathParser  } = this;
        var { point  } = PathElement.pathM(pathParser);
        var { x , y  } = point;
        pathParser.addMarker(point);
        boundingBox.addPoint(x, y);
        if (ctx) ctx.moveTo(x, y);
    }
    static pathL(pathParser) {
        var { current  } = pathParser;
        var point = pathParser.getAsCurrentPoint();
        return {
            current,
            point
        };
    }
    pathL(ctx, boundingBox) {
        var { pathParser  } = this;
        var { current , point  } = PathElement.pathL(pathParser);
        var { x , y  } = point;
        pathParser.addMarker(point, current);
        boundingBox.addPoint(x, y);
        if (ctx) ctx.lineTo(x, y);
    }
    static pathH(pathParser) {
        var { current , command  } = pathParser;
        var point = new Point((command.relative ? current.x : 0) + command.x, current.y);
        pathParser.current = point;
        return {
            current,
            point
        };
    }
    pathH(ctx, boundingBox) {
        var { pathParser  } = this;
        var { current , point  } = PathElement.pathH(pathParser);
        var { x , y  } = point;
        pathParser.addMarker(point, current);
        boundingBox.addPoint(x, y);
        if (ctx) ctx.lineTo(x, y);
    }
    static pathV(pathParser) {
        var { current , command  } = pathParser;
        var point = new Point(current.x, (command.relative ? current.y : 0) + command.y);
        pathParser.current = point;
        return {
            current,
            point
        };
    }
    pathV(ctx, boundingBox) {
        var { pathParser  } = this;
        var { current , point  } = PathElement.pathV(pathParser);
        var { x , y  } = point;
        pathParser.addMarker(point, current);
        boundingBox.addPoint(x, y);
        if (ctx) ctx.lineTo(x, y);
    }
    static pathC(pathParser) {
        var { current  } = pathParser;
        var point = pathParser.getPoint("x1", "y1");
        var controlPoint = pathParser.getAsControlPoint("x2", "y2");
        var currentPoint = pathParser.getAsCurrentPoint();
        return {
            current,
            point,
            controlPoint,
            currentPoint
        };
    }
    pathC(ctx, boundingBox) {
        var { pathParser  } = this;
        var { current , point , controlPoint , currentPoint  } = PathElement.pathC(pathParser);
        pathParser.addMarker(currentPoint, controlPoint, point);
        boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
        if (ctx) ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
    }
    static pathS(pathParser) {
        var { current  } = pathParser;
        var point = pathParser.getReflectedControlPoint();
        var controlPoint = pathParser.getAsControlPoint("x2", "y2");
        var currentPoint = pathParser.getAsCurrentPoint();
        return {
            current,
            point,
            controlPoint,
            currentPoint
        };
    }
    pathS(ctx, boundingBox) {
        var { pathParser  } = this;
        var { current , point , controlPoint , currentPoint  } = PathElement.pathS(pathParser);
        pathParser.addMarker(currentPoint, controlPoint, point);
        boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
        if (ctx) ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
    }
    static pathQ(pathParser) {
        var { current  } = pathParser;
        var controlPoint = pathParser.getAsControlPoint("x1", "y1");
        var currentPoint = pathParser.getAsCurrentPoint();
        return {
            current,
            controlPoint,
            currentPoint
        };
    }
    pathQ(ctx, boundingBox) {
        var { pathParser  } = this;
        var { current , controlPoint , currentPoint  } = PathElement.pathQ(pathParser);
        pathParser.addMarker(currentPoint, controlPoint, controlPoint);
        boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
        if (ctx) ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
    }
    static pathT(pathParser) {
        var { current  } = pathParser;
        var controlPoint = pathParser.getReflectedControlPoint();
        pathParser.control = controlPoint;
        var currentPoint = pathParser.getAsCurrentPoint();
        return {
            current,
            controlPoint,
            currentPoint
        };
    }
    pathT(ctx, boundingBox) {
        var { pathParser  } = this;
        var { current , controlPoint , currentPoint  } = PathElement.pathT(pathParser);
        pathParser.addMarker(currentPoint, controlPoint, controlPoint);
        boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
        if (ctx) ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
    }
    static pathA(pathParser) {
        var { current , command  } = pathParser;
        var { rX , rY , xRot , lArcFlag , sweepFlag  } = command;
        var xAxisRotation = xRot * (Math.PI / 180.0);
        var currentPoint = pathParser.getAsCurrentPoint(); // Conversion from endpoint to center parameterization
        // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
        // x1', y1'
        var currp = new Point(Math.cos(xAxisRotation) * (current.x - currentPoint.x) / 2.0 + Math.sin(xAxisRotation) * (current.y - currentPoint.y) / 2.0, -Math.sin(xAxisRotation) * (current.x - currentPoint.x) / 2.0 + Math.cos(xAxisRotation) * (current.y - currentPoint.y) / 2.0); // adjust radii
        var l = Math.pow(currp.x, 2) / Math.pow(rX, 2) + Math.pow(currp.y, 2) / Math.pow(rY, 2);
        if (l > 1) {
            rX *= Math.sqrt(l);
            rY *= Math.sqrt(l);
        } // cx', cy'
        var s = (lArcFlag === sweepFlag ? -1 : 1) * Math.sqrt((Math.pow(rX, 2) * Math.pow(rY, 2) - Math.pow(rX, 2) * Math.pow(currp.y, 2) - Math.pow(rY, 2) * Math.pow(currp.x, 2)) / (Math.pow(rX, 2) * Math.pow(currp.y, 2) + Math.pow(rY, 2) * Math.pow(currp.x, 2)));
        if (isNaN(s)) s = 0;
        var cpp = new Point(s * rX * currp.y / rY, s * -rY * currp.x / rX); // cx, cy
        var centp = new Point((current.x + currentPoint.x) / 2.0 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y, (current.y + currentPoint.y) / 2.0 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y); // initial angle
        var a1 = vectorsAngle([
            1,
            0
        ], [
            (currp.x - cpp.x) / rX,
            (currp.y - cpp.y) / rY
        ]); // θ1
        // angle delta
        var u = [
            (currp.x - cpp.x) / rX,
            (currp.y - cpp.y) / rY
        ];
        var v = [
            (-currp.x - cpp.x) / rX,
            (-currp.y - cpp.y) / rY
        ];
        var ad = vectorsAngle(u, v); // Δθ
        if (vectorsRatio(u, v) <= -1) ad = Math.PI;
        if (vectorsRatio(u, v) >= 1) ad = 0;
        return {
            currentPoint,
            rX,
            rY,
            sweepFlag,
            xAxisRotation,
            centp,
            a1,
            ad
        };
    }
    pathA(ctx, boundingBox) {
        var { pathParser  } = this;
        var { currentPoint , rX , rY , sweepFlag , xAxisRotation , centp , a1 , ad  } = PathElement.pathA(pathParser); // for markers
        var dir = 1 - sweepFlag ? 1.0 : -1;
        var ah = a1 + dir * (ad / 2.0);
        var halfWay = new Point(centp.x + rX * Math.cos(ah), centp.y + rY * Math.sin(ah));
        pathParser.addMarkerAngle(halfWay, ah - dir * Math.PI / 2);
        pathParser.addMarkerAngle(currentPoint, ah - dir * Math.PI);
        boundingBox.addPoint(currentPoint.x, currentPoint.y); // TODO: this is too naive, make it better
        if (ctx && !isNaN(a1) && !isNaN(ad)) {
            var r = rX > rY ? rX : rY;
            var sx = rX > rY ? 1 : rX / rY;
            var sy = rX > rY ? rY / rX : 1;
            ctx.translate(centp.x, centp.y);
            ctx.rotate(xAxisRotation);
            ctx.scale(sx, sy);
            ctx.arc(0, 0, r, a1, a1 + ad, Boolean(1 - sweepFlag));
            ctx.scale(1 / sx, 1 / sy);
            ctx.rotate(-xAxisRotation);
            ctx.translate(-centp.x, -centp.y);
        }
    }
    static pathZ(pathParser) {
        pathParser.current = pathParser.start;
    }
    pathZ(ctx, boundingBox) {
        PathElement.pathZ(this.pathParser);
        if (ctx) // only close path if it is not a straight line
        {
            if (boundingBox.x1 !== boundingBox.x2 && boundingBox.y1 !== boundingBox.y2) ctx.closePath();
        }
    }
}
class GlyphElement extends PathElement {
    constructor(document1, node, captureTextNodes){
        super(document1, node, captureTextNodes);
        this.type = "glyph";
        this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber();
        this.unicode = this.getAttribute("unicode").getString();
        this.arabicForm = this.getAttribute("arabic-form").getString();
    }
}
class TextElement extends RenderedElement {
    constructor(document1, node, captureTextNodes){
        super(document1, node, new.target === TextElement ? true : captureTextNodes);
        this.type = "text";
        this.x = 0;
        this.y = 0;
        this.measureCache = -1;
    }
    setContext(ctx) {
        var fromMeasure = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        super.setContext(ctx, fromMeasure);
        var textBaseline = this.getStyle("dominant-baseline").getTextBaseline() || this.getStyle("alignment-baseline").getTextBaseline();
        if (textBaseline) ctx.textBaseline = textBaseline;
    }
    initializeCoordinates() {
        this.x = 0;
        this.y = 0;
        this.leafTexts = [];
        this.textChunkStart = 0;
        this.minX = Number.POSITIVE_INFINITY;
        this.maxX = Number.NEGATIVE_INFINITY;
    }
    getBoundingBox(ctx) {
        if (this.type !== "text") return this.getTElementBoundingBox(ctx);
         // first, calculate child positions
        this.initializeCoordinates();
        this.adjustChildCoordinatesRecursive(ctx);
        var boundingBox = null; // then calculate bounding box
        this.children.forEach((_, i)=>{
            var childBoundingBox = this.getChildBoundingBox(ctx, this, this, i);
            if (!boundingBox) boundingBox = childBoundingBox;
            else boundingBox.addBoundingBox(childBoundingBox);
        });
        return boundingBox;
    }
    getFontSize() {
        var { document: document1 , parent  } = this;
        var inheritFontSize = Font.parse(document1.ctx.font).fontSize;
        var fontSize = parent.getStyle("font-size").getNumber(inheritFontSize);
        return fontSize;
    }
    getTElementBoundingBox(ctx) {
        var fontSize = this.getFontSize();
        return new BoundingBox(this.x, this.y - fontSize, this.x + this.measureText(ctx), this.y);
    }
    getGlyph(font, text, i) {
        var char = text[i];
        var glyph = null;
        if (font.isArabic) {
            var len = text.length;
            var prevChar = text[i - 1];
            var nextChar = text[i + 1];
            var arabicForm = "isolated";
            if ((i === 0 || prevChar === " ") && i < len - 1 && nextChar !== " ") arabicForm = "terminal";
            if (i > 0 && prevChar !== " " && i < len - 1 && nextChar !== " ") arabicForm = "medial";
            if (i > 0 && prevChar !== " " && (i === len - 1 || nextChar === " ")) arabicForm = "initial";
            if (typeof font.glyphs[char] !== "undefined") {
                // NEED TEST
                var maybeGlyph = font.glyphs[char];
                glyph = maybeGlyph instanceof GlyphElement ? maybeGlyph : maybeGlyph[arabicForm];
            }
        } else glyph = font.glyphs[char];
        if (!glyph) glyph = font.missingGlyph;
        return glyph;
    }
    getText() {
        return "";
    }
    getTextFromNode(node) {
        var textNode = node || this.node;
        var childNodes = Array.from(textNode.parentNode.childNodes);
        var index = childNodes.indexOf(textNode);
        var lastIndex = childNodes.length - 1;
        var text = compressSpaces(// || textNode.text
        textNode.textContent || "");
        if (index === 0) text = trimLeft(text);
        if (index === lastIndex) text = trimRight(text);
        return text;
    }
    renderChildren(ctx) {
        if (this.type !== "text") {
            this.renderTElementChildren(ctx);
            return;
        } // first, calculate child positions
        this.initializeCoordinates();
        this.adjustChildCoordinatesRecursive(ctx); // then render
        this.children.forEach((_, i)=>{
            this.renderChild(ctx, this, this, i);
        });
        var { mouse  } = this.document.screen; // Do not calc bounding box if mouse is not working.
        if (mouse.isWorking()) mouse.checkBoundingBox(this, this.getBoundingBox(ctx));
    }
    renderTElementChildren(ctx) {
        var { document: document1 , parent  } = this;
        var renderText = this.getText();
        var customFont = parent.getStyle("font-family").getDefinition();
        if (customFont) {
            var { unitsPerEm  } = customFont.fontFace;
            var ctxFont = Font.parse(document1.ctx.font);
            var fontSize = parent.getStyle("font-size").getNumber(ctxFont.fontSize);
            var fontStyle = parent.getStyle("font-style").getString(ctxFont.fontStyle);
            var scale = fontSize / unitsPerEm;
            var text = customFont.isRTL ? renderText.split("").reverse().join("") : renderText;
            var dx = toNumbers(parent.getAttribute("dx").getString());
            var len = text.length;
            for(var i = 0; i < len; i++){
                var glyph = this.getGlyph(customFont, text, i);
                ctx.translate(this.x, this.y);
                ctx.scale(scale, -scale);
                var lw = ctx.lineWidth;
                ctx.lineWidth = ctx.lineWidth * unitsPerEm / fontSize;
                if (fontStyle === "italic") ctx.transform(1, 0, .4, 1, 0, 0);
                glyph.render(ctx);
                if (fontStyle === "italic") ctx.transform(1, 0, -0.4, 1, 0, 0);
                ctx.lineWidth = lw;
                ctx.scale(1 / scale, -1 / scale);
                ctx.translate(-this.x, -this.y);
                this.x += fontSize * (glyph.horizAdvX || customFont.horizAdvX) / unitsPerEm;
                if (typeof dx[i] !== "undefined" && !isNaN(dx[i])) this.x += dx[i];
            }
            return;
        }
        var { x , y  } = this; // NEED TEST
        // if (ctx.paintOrder === 'stroke') {
        // 	if (ctx.strokeStyle) {
        // 		ctx.strokeText(renderText, x, y);
        // 	}
        // 	if (ctx.fillStyle) {
        // 		ctx.fillText(renderText, x, y);
        // 	}
        // } else {
        if (ctx.fillStyle) ctx.fillText(renderText, x, y);
        if (ctx.strokeStyle) ctx.strokeText(renderText, x, y);
         // }
    }
    applyAnchoring() {
        if (this.textChunkStart >= this.leafTexts.length) return;
         // This is basically the "Apply anchoring" part of https://www.w3.org/TR/SVG2/text.html#TextLayoutAlgorithm.
        // The difference is that we apply the anchoring as soon as a chunk is finished. This saves some extra looping.
        // Vertical text is not supported.
        var firstElement = this.leafTexts[this.textChunkStart];
        var textAnchor = firstElement.getStyle("text-anchor").getString("start");
        var isRTL = false; // we treat RTL like LTR
        var shift = 0;
        if (textAnchor === "start" && !isRTL || textAnchor === "end" && isRTL) shift = firstElement.x - this.minX;
        else if (textAnchor === "end" && !isRTL || textAnchor === "start" && isRTL) shift = firstElement.x - this.maxX;
        else shift = firstElement.x - (this.minX + this.maxX) / 2;
        for(var i = this.textChunkStart; i < this.leafTexts.length; i++)this.leafTexts[i].x += shift;
         // start new chunk
        this.minX = Number.POSITIVE_INFINITY;
        this.maxX = Number.NEGATIVE_INFINITY;
        this.textChunkStart = this.leafTexts.length;
    }
    adjustChildCoordinatesRecursive(ctx) {
        this.children.forEach((_, i)=>{
            this.adjustChildCoordinatesRecursiveCore(ctx, this, this, i);
        });
        this.applyAnchoring();
    }
    adjustChildCoordinatesRecursiveCore(ctx, textParent, parent, i) {
        var child = parent.children[i];
        if (child.children.length > 0) child.children.forEach((_, i)=>{
            textParent.adjustChildCoordinatesRecursiveCore(ctx, textParent, child, i);
        });
        else // only leafs are relevant
        this.adjustChildCoordinates(ctx, textParent, parent, i);
    }
    adjustChildCoordinates(ctx, textParent, parent, i) {
        var child = parent.children[i];
        if (typeof child.measureText !== "function") return child;
        ctx.save();
        child.setContext(ctx, true);
        var xAttr = child.getAttribute("x");
        var yAttr = child.getAttribute("y");
        var dxAttr = child.getAttribute("dx");
        var dyAttr = child.getAttribute("dy");
        var customFont = child.getStyle("font-family").getDefinition();
        var isRTL = Boolean(customFont) && customFont.isRTL;
        if (i === 0) {
            // First children inherit attributes from parent(s). Positional attributes
            // are only inherited from a parent to it's first child.
            if (!xAttr.hasValue()) xAttr.setValue(child.getInheritedAttribute("x"));
            if (!yAttr.hasValue()) yAttr.setValue(child.getInheritedAttribute("y"));
            if (!dxAttr.hasValue()) dxAttr.setValue(child.getInheritedAttribute("dx"));
            if (!dyAttr.hasValue()) dyAttr.setValue(child.getInheritedAttribute("dy"));
        }
        var width = child.measureText(ctx);
        if (isRTL) textParent.x -= width;
        if (xAttr.hasValue()) {
            // an "x" attribute marks the start of a new chunk
            textParent.applyAnchoring();
            child.x = xAttr.getPixels("x");
            if (dxAttr.hasValue()) child.x += dxAttr.getPixels("x");
        } else {
            if (dxAttr.hasValue()) textParent.x += dxAttr.getPixels("x");
            child.x = textParent.x;
        }
        textParent.x = child.x;
        if (!isRTL) textParent.x += width;
        if (yAttr.hasValue()) {
            child.y = yAttr.getPixels("y");
            if (dyAttr.hasValue()) child.y += dyAttr.getPixels("y");
        } else {
            if (dyAttr.hasValue()) textParent.y += dyAttr.getPixels("y");
            child.y = textParent.y;
        }
        textParent.y = child.y; // update the current chunk and it's bounds
        textParent.leafTexts.push(child);
        textParent.minX = Math.min(textParent.minX, child.x, child.x + width);
        textParent.maxX = Math.max(textParent.maxX, child.x, child.x + width);
        child.clearContext(ctx);
        ctx.restore();
        return child;
    }
    getChildBoundingBox(ctx, textParent, parent, i) {
        var child = parent.children[i]; // not a text node?
        if (typeof child.getBoundingBox !== "function") return null;
        var boundingBox = child.getBoundingBox(ctx);
        if (!boundingBox) return null;
        child.children.forEach((_, i)=>{
            var childBoundingBox = textParent.getChildBoundingBox(ctx, textParent, child, i);
            boundingBox.addBoundingBox(childBoundingBox);
        });
        return boundingBox;
    }
    renderChild(ctx, textParent, parent, i) {
        var child = parent.children[i];
        child.render(ctx);
        child.children.forEach((_, i)=>{
            textParent.renderChild(ctx, textParent, child, i);
        });
    }
    measureText(ctx) {
        var { measureCache  } = this;
        if (~measureCache) return measureCache;
        var renderText = this.getText();
        var measure = this.measureTargetText(ctx, renderText);
        this.measureCache = measure;
        return measure;
    }
    measureTargetText(ctx, targetText) {
        if (!targetText.length) return 0;
        var { parent  } = this;
        var customFont = parent.getStyle("font-family").getDefinition();
        if (customFont) {
            var fontSize = this.getFontSize();
            var text = customFont.isRTL ? targetText.split("").reverse().join("") : targetText;
            var dx = toNumbers(parent.getAttribute("dx").getString());
            var len = text.length;
            var _measure = 0;
            for(var i = 0; i < len; i++){
                var glyph = this.getGlyph(customFont, text, i);
                _measure += (glyph.horizAdvX || customFont.horizAdvX) * fontSize / customFont.fontFace.unitsPerEm;
                if (typeof dx[i] !== "undefined" && !isNaN(dx[i])) _measure += dx[i];
            }
            return _measure;
        }
        if (!ctx.measureText) return targetText.length * 10;
        ctx.save();
        this.setContext(ctx, true);
        var { width: measure  } = ctx.measureText(targetText);
        this.clearContext(ctx);
        ctx.restore();
        return measure;
    }
    /**
   * Inherits positional attributes from {@link TextElement} parent(s). Attributes
   * are only inherited from a parent to its first child.
   * @param name - The attribute name.
   * @returns The attribute value or null.
   */ getInheritedAttribute(name) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias,consistent-this
        var current = this;
        while(current instanceof TextElement && current.isFirstChild()){
            var parentAttr = current.parent.getAttribute(name);
            if (parentAttr.hasValue(true)) return parentAttr.getValue("0");
            current = current.parent;
        }
        return null;
    }
}
class TSpanElement extends TextElement {
    constructor(document1, node, captureTextNodes){
        super(document1, node, new.target === TSpanElement ? true : captureTextNodes);
        this.type = "tspan"; // if this node has children, then they own the text
        this.text = this.children.length > 0 ? "" : this.getTextFromNode();
    }
    getText() {
        return this.text;
    }
}
class TextNode extends TSpanElement {
    constructor(){
        super(...arguments);
        this.type = "textNode";
    }
}
class SVGElement extends RenderedElement {
    constructor(){
        super(...arguments);
        this.type = "svg";
        this.root = false;
    }
    setContext(ctx) {
        var _this$node$parentNode;
        var { document: document1  } = this;
        var { screen , window: window1  } = document1;
        var canvas = ctx.canvas;
        screen.setDefaults(ctx);
        if (canvas.style && typeof ctx.font !== "undefined" && window1 && typeof window1.getComputedStyle !== "undefined") {
            ctx.font = window1.getComputedStyle(canvas).getPropertyValue("font");
            var fontSizeProp = new Property(document1, "fontSize", Font.parse(ctx.font).fontSize);
            if (fontSizeProp.hasValue()) {
                document1.rootEmSize = fontSizeProp.getPixels("y");
                document1.emSize = document1.rootEmSize;
            }
        } // create new view port
        if (!this.getAttribute("x").hasValue()) this.getAttribute("x", true).setValue(0);
        if (!this.getAttribute("y").hasValue()) this.getAttribute("y", true).setValue(0);
        var { width , height  } = screen.viewPort;
        if (!this.getStyle("width").hasValue()) this.getStyle("width", true).setValue("100%");
        if (!this.getStyle("height").hasValue()) this.getStyle("height", true).setValue("100%");
        if (!this.getStyle("color").hasValue()) this.getStyle("color", true).setValue("black");
        var refXAttr = this.getAttribute("refX");
        var refYAttr = this.getAttribute("refY");
        var viewBoxAttr = this.getAttribute("viewBox");
        var viewBox = viewBoxAttr.hasValue() ? toNumbers(viewBoxAttr.getString()) : null;
        var clip = !this.root && this.getStyle("overflow").getValue("hidden") !== "visible";
        var minX = 0;
        var minY = 0;
        var clipX = 0;
        var clipY = 0;
        if (viewBox) {
            minX = viewBox[0];
            minY = viewBox[1];
        }
        if (!this.root) {
            width = this.getStyle("width").getPixels("x");
            height = this.getStyle("height").getPixels("y");
            if (this.type === "marker") {
                clipX = minX;
                clipY = minY;
                minX = 0;
                minY = 0;
            }
        }
        screen.viewPort.setCurrent(width, height); // Default value of transform-origin is center only for root SVG elements
        // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform-origin
        if (this.node // is not temporary SVGElement
         && (!this.parent || ((_this$node$parentNode = this.node.parentNode) === null || _this$node$parentNode === void 0 ? void 0 : _this$node$parentNode.nodeName) === "foreignObject") && this.getStyle("transform", false, true).hasValue() && !this.getStyle("transform-origin", false, true).hasValue()) this.getStyle("transform-origin", true, true).setValue("50% 50%");
        super.setContext(ctx);
        ctx.translate(this.getAttribute("x").getPixels("x"), this.getAttribute("y").getPixels("y"));
        if (viewBox) {
            width = viewBox[2];
            height = viewBox[3];
        }
        document1.setViewBox({
            ctx,
            aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
            width: screen.viewPort.width,
            desiredWidth: width,
            height: screen.viewPort.height,
            desiredHeight: height,
            minX,
            minY,
            refX: refXAttr.getValue(),
            refY: refYAttr.getValue(),
            clip,
            clipX,
            clipY
        });
        if (viewBox) {
            screen.viewPort.removeCurrent();
            screen.viewPort.setCurrent(width, height);
        }
    }
    clearContext(ctx) {
        super.clearContext(ctx);
        this.document.screen.viewPort.removeCurrent();
    }
    /**
   * Resize SVG to fit in given size.
   * @param width
   * @param height
   * @param preserveAspectRatio
   */ resize(width) {
        var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
        var preserveAspectRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var widthAttr = this.getAttribute("width", true);
        var heightAttr = this.getAttribute("height", true);
        var viewBoxAttr = this.getAttribute("viewBox");
        var styleAttr = this.getAttribute("style");
        var originWidth = widthAttr.getNumber(0);
        var originHeight = heightAttr.getNumber(0);
        if (preserveAspectRatio) {
            if (typeof preserveAspectRatio === "string") this.getAttribute("preserveAspectRatio", true).setValue(preserveAspectRatio);
            else {
                var preserveAspectRatioAttr = this.getAttribute("preserveAspectRatio");
                if (preserveAspectRatioAttr.hasValue()) preserveAspectRatioAttr.setValue(preserveAspectRatioAttr.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"));
            }
        }
        widthAttr.setValue(width);
        heightAttr.setValue(height);
        if (!viewBoxAttr.hasValue()) viewBoxAttr.setValue("0 0 ".concat(originWidth || width, " ").concat(originHeight || height));
        if (styleAttr.hasValue()) {
            var widthStyle = this.getStyle("width");
            var heightStyle = this.getStyle("height");
            if (widthStyle.hasValue()) widthStyle.setValue("".concat(width, "px"));
            if (heightStyle.hasValue()) heightStyle.setValue("".concat(height, "px"));
        }
    }
}
class RectElement extends PathElement {
    constructor(){
        super(...arguments);
        this.type = "rect";
    }
    path(ctx) {
        var x = this.getAttribute("x").getPixels("x");
        var y = this.getAttribute("y").getPixels("y");
        var width = this.getStyle("width", false, true).getPixels("x");
        var height = this.getStyle("height", false, true).getPixels("y");
        var rxAttr = this.getAttribute("rx");
        var ryAttr = this.getAttribute("ry");
        var rx = rxAttr.getPixels("x");
        var ry = ryAttr.getPixels("y");
        if (rxAttr.hasValue() && !ryAttr.hasValue()) ry = rx;
        if (ryAttr.hasValue() && !rxAttr.hasValue()) rx = ry;
        rx = Math.min(rx, width / 2.0);
        ry = Math.min(ry, height / 2.0);
        if (ctx) {
            var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
            ctx.beginPath(); // always start the path so we don't fill prior paths
            if (height > 0 && width > 0) {
                ctx.moveTo(x + rx, y);
                ctx.lineTo(x + width - rx, y);
                ctx.bezierCurveTo(x + width - rx + KAPPA * rx, y, x + width, y + ry - KAPPA * ry, x + width, y + ry);
                ctx.lineTo(x + width, y + height - ry);
                ctx.bezierCurveTo(x + width, y + height - ry + KAPPA * ry, x + width - rx + KAPPA * rx, y + height, x + width - rx, y + height);
                ctx.lineTo(x + rx, y + height);
                ctx.bezierCurveTo(x + rx - KAPPA * rx, y + height, x, y + height - ry + KAPPA * ry, x, y + height - ry);
                ctx.lineTo(x, y + ry);
                ctx.bezierCurveTo(x, y + ry - KAPPA * ry, x + rx - KAPPA * rx, y, x + rx, y);
                ctx.closePath();
            }
        }
        return new BoundingBox(x, y, x + width, y + height);
    }
    getMarkers() {
        return null;
    }
}
class CircleElement extends PathElement {
    constructor(){
        super(...arguments);
        this.type = "circle";
    }
    path(ctx) {
        var cx = this.getAttribute("cx").getPixels("x");
        var cy = this.getAttribute("cy").getPixels("y");
        var r = this.getAttribute("r").getPixels();
        if (ctx && r > 0) {
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2, false);
            ctx.closePath();
        }
        return new BoundingBox(cx - r, cy - r, cx + r, cy + r);
    }
    getMarkers() {
        return null;
    }
}
class EllipseElement extends PathElement {
    constructor(){
        super(...arguments);
        this.type = "ellipse";
    }
    path(ctx) {
        var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
        var rx = this.getAttribute("rx").getPixels("x");
        var ry = this.getAttribute("ry").getPixels("y");
        var cx = this.getAttribute("cx").getPixels("x");
        var cy = this.getAttribute("cy").getPixels("y");
        if (ctx && rx > 0 && ry > 0) {
            ctx.beginPath();
            ctx.moveTo(cx + rx, cy);
            ctx.bezierCurveTo(cx + rx, cy + KAPPA * ry, cx + KAPPA * rx, cy + ry, cx, cy + ry);
            ctx.bezierCurveTo(cx - KAPPA * rx, cy + ry, cx - rx, cy + KAPPA * ry, cx - rx, cy);
            ctx.bezierCurveTo(cx - rx, cy - KAPPA * ry, cx - KAPPA * rx, cy - ry, cx, cy - ry);
            ctx.bezierCurveTo(cx + KAPPA * rx, cy - ry, cx + rx, cy - KAPPA * ry, cx + rx, cy);
            ctx.closePath();
        }
        return new BoundingBox(cx - rx, cy - ry, cx + rx, cy + ry);
    }
    getMarkers() {
        return null;
    }
}
class LineElement extends PathElement {
    constructor(){
        super(...arguments);
        this.type = "line";
    }
    getPoints() {
        return [
            new Point(this.getAttribute("x1").getPixels("x"), this.getAttribute("y1").getPixels("y")),
            new Point(this.getAttribute("x2").getPixels("x"), this.getAttribute("y2").getPixels("y"))
        ];
    }
    path(ctx) {
        var [{ x: x0 , y: y0  }, { x: x1 , y: y1  }] = this.getPoints();
        if (ctx) {
            ctx.beginPath();
            ctx.moveTo(x0, y0);
            ctx.lineTo(x1, y1);
        }
        return new BoundingBox(x0, y0, x1, y1);
    }
    getMarkers() {
        var [p0, p1] = this.getPoints();
        var a = p0.angleTo(p1);
        return [
            [
                p0,
                a
            ],
            [
                p1,
                a
            ]
        ];
    }
}
class PolylineElement extends PathElement {
    constructor(document1, node, captureTextNodes){
        super(document1, node, captureTextNodes);
        this.type = "polyline";
        this.points = [];
        this.points = Point.parsePath(this.getAttribute("points").getString());
    }
    path(ctx) {
        var { points  } = this;
        var [{ x: x0 , y: y0  }] = points;
        var boundingBox = new BoundingBox(x0, y0);
        if (ctx) {
            ctx.beginPath();
            ctx.moveTo(x0, y0);
        }
        points.forEach((_ref)=>{
            var { x , y  } = _ref;
            boundingBox.addPoint(x, y);
            if (ctx) ctx.lineTo(x, y);
        });
        return boundingBox;
    }
    getMarkers() {
        var { points  } = this;
        var lastIndex = points.length - 1;
        var markers = [];
        points.forEach((point, i)=>{
            if (i === lastIndex) return;
            markers.push([
                point,
                point.angleTo(points[i + 1])
            ]);
        });
        if (markers.length > 0) markers.push([
            points[points.length - 1],
            markers[markers.length - 1][1]
        ]);
        return markers;
    }
}
class PolygonElement extends PolylineElement {
    constructor(){
        super(...arguments);
        this.type = "polygon";
    }
    path(ctx) {
        var boundingBox = super.path(ctx);
        var [{ x , y  }] = this.points;
        if (ctx) {
            ctx.lineTo(x, y);
            ctx.closePath();
        }
        return boundingBox;
    }
}
class PatternElement extends Element {
    constructor(){
        super(...arguments);
        this.type = "pattern";
    }
    createPattern(ctx, _, parentOpacityProp) {
        var width = this.getStyle("width").getPixels("x", true);
        var height = this.getStyle("height").getPixels("y", true); // render me using a temporary svg element
        var patternSvg = new SVGElement(this.document, null);
        patternSvg.attributes.viewBox = new Property(this.document, "viewBox", this.getAttribute("viewBox").getValue());
        patternSvg.attributes.width = new Property(this.document, "width", "".concat(width, "px"));
        patternSvg.attributes.height = new Property(this.document, "height", "".concat(height, "px"));
        patternSvg.attributes.transform = new Property(this.document, "transform", this.getAttribute("patternTransform").getValue());
        patternSvg.children = this.children;
        var patternCanvas = this.document.createCanvas(width, height);
        var patternCtx = patternCanvas.getContext("2d");
        var xAttr = this.getAttribute("x");
        var yAttr = this.getAttribute("y");
        if (xAttr.hasValue() && yAttr.hasValue()) patternCtx.translate(xAttr.getPixels("x", true), yAttr.getPixels("y", true));
        if (parentOpacityProp.hasValue()) this.styles["fill-opacity"] = parentOpacityProp;
        else Reflect.deleteProperty(this.styles, "fill-opacity");
         // render 3x3 grid so when we transform there's no white space on edges
        for(var x = -1; x <= 1; x++)for(var y = -1; y <= 1; y++){
            patternCtx.save();
            patternSvg.attributes.x = new Property(this.document, "x", x * patternCanvas.width);
            patternSvg.attributes.y = new Property(this.document, "y", y * patternCanvas.height);
            patternSvg.render(patternCtx);
            patternCtx.restore();
        }
        var pattern = ctx.createPattern(patternCanvas, "repeat");
        return pattern;
    }
}
class MarkerElement extends Element {
    constructor(){
        super(...arguments);
        this.type = "marker";
    }
    render(ctx, point, angle) {
        if (!point) return;
        var { x , y  } = point;
        var orient = this.getAttribute("orient").getString("auto");
        var markerUnits = this.getAttribute("markerUnits").getString("strokeWidth");
        ctx.translate(x, y);
        if (orient === "auto") ctx.rotate(angle);
        if (markerUnits === "strokeWidth") ctx.scale(ctx.lineWidth, ctx.lineWidth);
        ctx.save(); // render me using a temporary svg element
        var markerSvg = new SVGElement(this.document, null);
        markerSvg.type = this.type;
        markerSvg.attributes.viewBox = new Property(this.document, "viewBox", this.getAttribute("viewBox").getValue());
        markerSvg.attributes.refX = new Property(this.document, "refX", this.getAttribute("refX").getValue());
        markerSvg.attributes.refY = new Property(this.document, "refY", this.getAttribute("refY").getValue());
        markerSvg.attributes.width = new Property(this.document, "width", this.getAttribute("markerWidth").getValue());
        markerSvg.attributes.height = new Property(this.document, "height", this.getAttribute("markerHeight").getValue());
        markerSvg.attributes.overflow = new Property(this.document, "overflow", this.getAttribute("overflow").getValue());
        markerSvg.attributes.fill = new Property(this.document, "fill", this.getAttribute("fill").getColor("black"));
        markerSvg.attributes.stroke = new Property(this.document, "stroke", this.getAttribute("stroke").getValue("none"));
        markerSvg.children = this.children;
        markerSvg.render(ctx);
        ctx.restore();
        if (markerUnits === "strokeWidth") ctx.scale(1 / ctx.lineWidth, 1 / ctx.lineWidth);
        if (orient === "auto") ctx.rotate(-angle);
        ctx.translate(-x, -y);
    }
}
class DefsElement extends Element {
    constructor(){
        super(...arguments);
        this.type = "defs";
    }
    render() {}
}
class GElement extends RenderedElement {
    constructor(){
        super(...arguments);
        this.type = "g";
    }
    getBoundingBox(ctx) {
        var boundingBox = new BoundingBox();
        this.children.forEach((child)=>{
            boundingBox.addBoundingBox(child.getBoundingBox(ctx));
        });
        return boundingBox;
    }
}
class GradientElement extends Element {
    constructor(document1, node, captureTextNodes){
        super(document1, node, captureTextNodes);
        this.attributesToInherit = [
            "gradientUnits"
        ];
        this.stops = [];
        var { stops , children  } = this;
        children.forEach((child)=>{
            if (child.type === "stop") stops.push(child);
        });
    }
    getGradientUnits() {
        return this.getAttribute("gradientUnits").getString("objectBoundingBox");
    }
    createGradient(ctx, element, parentOpacityProp) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this
        var stopsContainer = this;
        if (this.getHrefAttribute().hasValue()) {
            stopsContainer = this.getHrefAttribute().getDefinition();
            this.inheritStopContainer(stopsContainer);
        }
        var { stops  } = stopsContainer;
        var gradient = this.getGradient(ctx, element);
        if (!gradient) return this.addParentOpacity(parentOpacityProp, stops[stops.length - 1].color);
        stops.forEach((stop)=>{
            gradient.addColorStop(stop.offset, this.addParentOpacity(parentOpacityProp, stop.color));
        });
        if (this.getAttribute("gradientTransform").hasValue()) {
            // render as transformed pattern on temporary canvas
            var { document: document1  } = this;
            var { MAX_VIRTUAL_PIXELS , viewPort  } = document1.screen;
            var [rootView] = viewPort.viewPorts;
            var rect = new RectElement(document1, null);
            rect.attributes.x = new Property(document1, "x", -MAX_VIRTUAL_PIXELS / 3.0);
            rect.attributes.y = new Property(document1, "y", -MAX_VIRTUAL_PIXELS / 3.0);
            rect.attributes.width = new Property(document1, "width", MAX_VIRTUAL_PIXELS);
            rect.attributes.height = new Property(document1, "height", MAX_VIRTUAL_PIXELS);
            var group = new GElement(document1, null);
            group.attributes.transform = new Property(document1, "transform", this.getAttribute("gradientTransform").getValue());
            group.children = [
                rect
            ];
            var patternSvg = new SVGElement(document1, null);
            patternSvg.attributes.x = new Property(document1, "x", 0);
            patternSvg.attributes.y = new Property(document1, "y", 0);
            patternSvg.attributes.width = new Property(document1, "width", rootView.width);
            patternSvg.attributes.height = new Property(document1, "height", rootView.height);
            patternSvg.children = [
                group
            ];
            var patternCanvas = document1.createCanvas(rootView.width, rootView.height);
            var patternCtx = patternCanvas.getContext("2d");
            patternCtx.fillStyle = gradient;
            patternSvg.render(patternCtx);
            return patternCtx.createPattern(patternCanvas, "no-repeat");
        }
        return gradient;
    }
    inheritStopContainer(stopsContainer) {
        this.attributesToInherit.forEach((attributeToInherit)=>{
            if (!this.getAttribute(attributeToInherit).hasValue() && stopsContainer.getAttribute(attributeToInherit).hasValue()) this.getAttribute(attributeToInherit, true).setValue(stopsContainer.getAttribute(attributeToInherit).getValue());
        });
    }
    addParentOpacity(parentOpacityProp, color) {
        if (parentOpacityProp.hasValue()) {
            var colorProp = new Property(this.document, "color", color);
            return colorProp.addOpacity(parentOpacityProp).getColor();
        }
        return color;
    }
}
class LinearGradientElement extends GradientElement {
    constructor(document1, node, captureTextNodes){
        super(document1, node, captureTextNodes);
        this.type = "linearGradient";
        this.attributesToInherit.push("x1", "y1", "x2", "y2");
    }
    getGradient(ctx, element) {
        var isBoundingBoxUnits = this.getGradientUnits() === "objectBoundingBox";
        var boundingBox = isBoundingBoxUnits ? element.getBoundingBox(ctx) : null;
        if (isBoundingBoxUnits && !boundingBox) return null;
        if (!this.getAttribute("x1").hasValue() && !this.getAttribute("y1").hasValue() && !this.getAttribute("x2").hasValue() && !this.getAttribute("y2").hasValue()) {
            this.getAttribute("x1", true).setValue(0);
            this.getAttribute("y1", true).setValue(0);
            this.getAttribute("x2", true).setValue(1);
            this.getAttribute("y2", true).setValue(0);
        }
        var x1 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("x1").getNumber() : this.getAttribute("x1").getPixels("x");
        var y1 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("y1").getNumber() : this.getAttribute("y1").getPixels("y");
        var x2 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("x2").getNumber() : this.getAttribute("x2").getPixels("x");
        var y2 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("y2").getNumber() : this.getAttribute("y2").getPixels("y");
        if (x1 === x2 && y1 === y2) return null;
        return ctx.createLinearGradient(x1, y1, x2, y2);
    }
}
class RadialGradientElement extends GradientElement {
    constructor(document1, node, captureTextNodes){
        super(document1, node, captureTextNodes);
        this.type = "radialGradient";
        this.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr");
    }
    getGradient(ctx, element) {
        var isBoundingBoxUnits = this.getGradientUnits() === "objectBoundingBox";
        var boundingBox = element.getBoundingBox(ctx);
        if (isBoundingBoxUnits && !boundingBox) return null;
        if (!this.getAttribute("cx").hasValue()) this.getAttribute("cx", true).setValue("50%");
        if (!this.getAttribute("cy").hasValue()) this.getAttribute("cy", true).setValue("50%");
        if (!this.getAttribute("r").hasValue()) this.getAttribute("r", true).setValue("50%");
        var cx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("cx").getNumber() : this.getAttribute("cx").getPixels("x");
        var cy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("cy").getNumber() : this.getAttribute("cy").getPixels("y");
        var fx = cx;
        var fy = cy;
        if (this.getAttribute("fx").hasValue()) fx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("fx").getNumber() : this.getAttribute("fx").getPixels("x");
        if (this.getAttribute("fy").hasValue()) fy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("fy").getNumber() : this.getAttribute("fy").getPixels("y");
        var r = isBoundingBoxUnits ? (boundingBox.width + boundingBox.height) / 2.0 * this.getAttribute("r").getNumber() : this.getAttribute("r").getPixels();
        var fr = this.getAttribute("fr").getPixels();
        return ctx.createRadialGradient(fx, fy, fr, cx, cy, r);
    }
}
class StopElement extends Element {
    constructor(document1, node, captureTextNodes){
        super(document1, node, captureTextNodes);
        this.type = "stop";
        var offset = Math.max(0, Math.min(1, this.getAttribute("offset").getNumber()));
        var stopOpacity = this.getStyle("stop-opacity");
        var stopColor = this.getStyle("stop-color", true);
        if (stopColor.getString() === "") stopColor.setValue("#000");
        if (stopOpacity.hasValue()) stopColor = stopColor.addOpacity(stopOpacity);
        this.offset = offset;
        this.color = stopColor.getColor();
    }
}
class AnimateElement extends Element {
    constructor(document1, node, captureTextNodes){
        super(document1, node, captureTextNodes);
        this.type = "animate";
        this.duration = 0;
        this.initialValue = null;
        this.initialUnits = "";
        this.removed = false;
        this.frozen = false;
        document1.screen.animations.push(this);
        this.begin = this.getAttribute("begin").getMilliseconds();
        this.maxDuration = this.begin + this.getAttribute("dur").getMilliseconds();
        this.from = this.getAttribute("from");
        this.to = this.getAttribute("to");
        this.values = new Property(document1, "values", null);
        var valuesAttr = this.getAttribute("values");
        if (valuesAttr.hasValue()) this.values.setValue(valuesAttr.getString().split(";"));
    }
    getProperty() {
        var attributeType = this.getAttribute("attributeType").getString();
        var attributeName = this.getAttribute("attributeName").getString();
        if (attributeType === "CSS") return this.parent.getStyle(attributeName, true);
        return this.parent.getAttribute(attributeName, true);
    }
    calcValue() {
        var { initialUnits  } = this;
        var { progress , from , to  } = this.getProgress(); // tween value linearly
        var newValue = from.getNumber() + (to.getNumber() - from.getNumber()) * progress;
        if (initialUnits === "%") newValue *= 100.0; // numValue() returns 0-1 whereas properties are 0-100
        return "".concat(newValue).concat(initialUnits);
    }
    update(delta) {
        var { parent  } = this;
        var prop = this.getProperty(); // set initial value
        if (!this.initialValue) {
            this.initialValue = prop.getString();
            this.initialUnits = prop.getUnits();
        } // if we're past the end time
        if (this.duration > this.maxDuration) {
            var fill = this.getAttribute("fill").getString("remove"); // loop for indefinitely repeating animations
            if (this.getAttribute("repeatCount").getString() === "indefinite" || this.getAttribute("repeatDur").getString() === "indefinite") this.duration = 0;
            else if (fill === "freeze" && !this.frozen) {
                this.frozen = true;
                parent.animationFrozen = true;
                parent.animationFrozenValue = prop.getString();
            } else if (fill === "remove" && !this.removed) {
                this.removed = true;
                prop.setValue(parent.animationFrozen ? parent.animationFrozenValue : this.initialValue);
                return true;
            }
            return false;
        }
        this.duration += delta; // if we're past the begin time
        var updated = false;
        if (this.begin < this.duration) {
            var newValue = this.calcValue(); // tween
            var typeAttr = this.getAttribute("type");
            if (typeAttr.hasValue()) {
                // for transform, etc.
                var type = typeAttr.getString();
                newValue = "".concat(type, "(").concat(newValue, ")");
            }
            prop.setValue(newValue);
            updated = true;
        }
        return updated;
    }
    getProgress() {
        var { document: document1 , values  } = this;
        var result = {
            progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
        };
        if (values.hasValue()) {
            var p = result.progress * (values.getValue().length - 1);
            var lb = Math.floor(p);
            var ub = Math.ceil(p);
            result.from = new Property(document1, "from", parseFloat(values.getValue()[lb]));
            result.to = new Property(document1, "to", parseFloat(values.getValue()[ub]));
            result.progress = (p - lb) / (ub - lb);
        } else {
            result.from = this.from;
            result.to = this.to;
        }
        return result;
    }
}
class AnimateColorElement extends AnimateElement {
    constructor(){
        super(...arguments);
        this.type = "animateColor";
    }
    calcValue() {
        var { progress , from , to  } = this.getProgress();
        var colorFrom = new (0, _rgbcolorDefault.default)(from.getColor());
        var colorTo = new (0, _rgbcolorDefault.default)(to.getColor());
        if (colorFrom.ok && colorTo.ok) {
            // tween color linearly
            var r = colorFrom.r + (colorTo.r - colorFrom.r) * progress;
            var g = colorFrom.g + (colorTo.g - colorFrom.g) * progress;
            var b = colorFrom.b + (colorTo.b - colorFrom.b) * progress; // ? alpha
            return "rgb(".concat(Math.floor(r), ", ").concat(Math.floor(g), ", ").concat(Math.floor(b), ")");
        }
        return this.getAttribute("from").getColor();
    }
}
class AnimateTransformElement extends AnimateElement {
    constructor(){
        super(...arguments);
        this.type = "animateTransform";
    }
    calcValue() {
        var { progress , from , to  } = this.getProgress(); // tween value linearly
        var transformFrom = toNumbers(from.getString());
        var transformTo = toNumbers(to.getString());
        var newValue = transformFrom.map((from, i)=>{
            var to = transformTo[i];
            return from + (to - from) * progress;
        }).join(" ");
        return newValue;
    }
}
class FontElement extends Element {
    constructor(document1, node, captureTextNodes){
        super(document1, node, captureTextNodes);
        this.type = "font";
        this.glyphs = {};
        this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber();
        var { definitions  } = document1;
        var { children  } = this;
        for (var child of children)switch(child.type){
            case "font-face":
                this.fontFace = child;
                var fontFamilyStyle = child.getStyle("font-family");
                if (fontFamilyStyle.hasValue()) definitions[fontFamilyStyle.getString()] = this;
                break;
            case "missing-glyph":
                this.missingGlyph = child;
                break;
            case "glyph":
                var glyph = child;
                if (glyph.arabicForm) {
                    this.isRTL = true;
                    this.isArabic = true;
                    if (typeof this.glyphs[glyph.unicode] === "undefined") this.glyphs[glyph.unicode] = {};
                    this.glyphs[glyph.unicode][glyph.arabicForm] = glyph;
                } else this.glyphs[glyph.unicode] = glyph;
                break;
        }
    }
    render() {}
}
class FontFaceElement extends Element {
    constructor(document1, node, captureTextNodes){
        super(document1, node, captureTextNodes);
        this.type = "font-face";
        this.ascent = this.getAttribute("ascent").getNumber();
        this.descent = this.getAttribute("descent").getNumber();
        this.unitsPerEm = this.getAttribute("units-per-em").getNumber();
    }
}
class MissingGlyphElement extends PathElement {
    constructor(){
        super(...arguments);
        this.type = "missing-glyph";
        this.horizAdvX = 0;
    }
}
class TRefElement extends TextElement {
    constructor(){
        super(...arguments);
        this.type = "tref";
    }
    getText() {
        var element = this.getHrefAttribute().getDefinition();
        if (element) {
            var firstChild = element.children[0];
            if (firstChild) return firstChild.getText();
        }
        return "";
    }
}
class AElement extends TextElement {
    constructor(document1, node, captureTextNodes){
        super(document1, node, captureTextNodes);
        this.type = "a";
        var { childNodes  } = node;
        var firstChild = childNodes[0];
        var hasText = childNodes.length > 0 && Array.from(childNodes).every((node)=>node.nodeType === 3);
        this.hasText = hasText;
        this.text = hasText ? this.getTextFromNode(firstChild) : "";
    }
    getText() {
        return this.text;
    }
    renderChildren(ctx) {
        if (this.hasText) {
            // render as text element
            super.renderChildren(ctx);
            var { document: document1 , x , y  } = this;
            var { mouse  } = document1.screen;
            var fontSize = new Property(document1, "fontSize", Font.parse(document1.ctx.font).fontSize); // Do not calc bounding box if mouse is not working.
            if (mouse.isWorking()) mouse.checkBoundingBox(this, new BoundingBox(x, y - fontSize.getPixels("y"), x + this.measureText(ctx), y));
        } else if (this.children.length > 0) {
            // render as temporary group
            var g = new GElement(this.document, null);
            g.children = this.children;
            g.parent = this;
            g.render(ctx);
        }
    }
    onClick() {
        var { window: window1  } = this.document;
        if (window1) window1.open(this.getHrefAttribute().getString());
    }
    onMouseMove() {
        var ctx = this.document.ctx;
        ctx.canvas.style.cursor = "pointer";
    }
}
function ownKeys$2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys$2(Object(source), true).forEach(function(key) {
            (0, _definePropertyDefault.default)(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys$2(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
class TextPathElement extends TextElement {
    constructor(document1, node, captureTextNodes){
        super(document1, node, captureTextNodes);
        this.type = "textPath";
        this.textWidth = 0;
        this.textHeight = 0;
        this.pathLength = -1;
        this.glyphInfo = null;
        this.letterSpacingCache = [];
        this.measuresCache = new Map([
            [
                "",
                0
            ]
        ]);
        var pathElement = this.getHrefAttribute().getDefinition();
        this.text = this.getTextFromNode();
        this.dataArray = this.parsePathData(pathElement);
    }
    getText() {
        return this.text;
    }
    path(ctx) {
        var { dataArray  } = this;
        if (ctx) ctx.beginPath();
        dataArray.forEach((_ref)=>{
            var { type , points  } = _ref;
            switch(type){
                case PathParser.LINE_TO:
                    if (ctx) ctx.lineTo(points[0], points[1]);
                    break;
                case PathParser.MOVE_TO:
                    if (ctx) ctx.moveTo(points[0], points[1]);
                    break;
                case PathParser.CURVE_TO:
                    if (ctx) ctx.bezierCurveTo(points[0], points[1], points[2], points[3], points[4], points[5]);
                    break;
                case PathParser.QUAD_TO:
                    if (ctx) ctx.quadraticCurveTo(points[0], points[1], points[2], points[3]);
                    break;
                case PathParser.ARC:
                    var [cx, cy, rx, ry, theta, dTheta, psi, fs] = points;
                    var r = rx > ry ? rx : ry;
                    var scaleX = rx > ry ? 1 : rx / ry;
                    var scaleY = rx > ry ? ry / rx : 1;
                    if (ctx) {
                        ctx.translate(cx, cy);
                        ctx.rotate(psi);
                        ctx.scale(scaleX, scaleY);
                        ctx.arc(0, 0, r, theta, theta + dTheta, Boolean(1 - fs));
                        ctx.scale(1 / scaleX, 1 / scaleY);
                        ctx.rotate(-psi);
                        ctx.translate(-cx, -cy);
                    }
                    break;
                case PathParser.CLOSE_PATH:
                    if (ctx) ctx.closePath();
                    break;
            }
        });
    }
    renderChildren(ctx) {
        this.setTextData(ctx);
        ctx.save();
        var textDecoration = this.parent.getStyle("text-decoration").getString();
        var fontSize = this.getFontSize();
        var { glyphInfo  } = this;
        var fill = ctx.fillStyle;
        if (textDecoration === "underline") ctx.beginPath();
        glyphInfo.forEach((glyph, i)=>{
            var { p0 , p1 , rotation , text: partialText  } = glyph;
            ctx.save();
            ctx.translate(p0.x, p0.y);
            ctx.rotate(rotation);
            if (ctx.fillStyle) ctx.fillText(partialText, 0, 0);
            if (ctx.strokeStyle) ctx.strokeText(partialText, 0, 0);
            ctx.restore();
            if (textDecoration === "underline") {
                if (i === 0) ctx.moveTo(p0.x, p0.y + fontSize / 8);
                ctx.lineTo(p1.x, p1.y + fontSize / 5);
            } // // To assist with debugging visually, uncomment following
        //
        // ctx.beginPath();
        // if (i % 2)
        // 	ctx.strokeStyle = 'red';
        // else
        // 	ctx.strokeStyle = 'green';
        // ctx.moveTo(p0.x, p0.y);
        // ctx.lineTo(p1.x, p1.y);
        // ctx.stroke();
        // ctx.closePath();
        });
        if (textDecoration === "underline") {
            ctx.lineWidth = fontSize / 20;
            ctx.strokeStyle = fill;
            ctx.stroke();
            ctx.closePath();
        }
        ctx.restore();
    }
    getLetterSpacingAt() {
        var idx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        return this.letterSpacingCache[idx] || 0;
    }
    findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, inputOffset, dy, c, charI) {
        var offset = inputOffset;
        var glyphWidth = this.measureText(ctx, c);
        if (c === " " && anchor === "justify" && textFullWidth < fullPathWidth) glyphWidth += (fullPathWidth - textFullWidth) / spacesNumber;
        if (charI > -1) offset += this.getLetterSpacingAt(charI);
        var splineStep = this.textHeight / 20;
        var p0 = this.getEquidistantPointOnPath(offset, splineStep, 0);
        var p1 = this.getEquidistantPointOnPath(offset + glyphWidth, splineStep, 0);
        var segment = {
            p0,
            p1
        };
        var rotation = p0 && p1 ? Math.atan2(p1.y - p0.y, p1.x - p0.x) : 0;
        if (dy) {
            var dyX = Math.cos(Math.PI / 2 + rotation) * dy;
            var dyY = Math.cos(-rotation) * dy;
            segment.p0 = _objectSpread$2(_objectSpread$2({}, p0), {}, {
                x: p0.x + dyX,
                y: p0.y + dyY
            });
            segment.p1 = _objectSpread$2(_objectSpread$2({}, p1), {}, {
                x: p1.x + dyX,
                y: p1.y + dyY
            });
        }
        offset += glyphWidth;
        return {
            offset,
            segment,
            rotation
        };
    }
    measureText(ctx, text) {
        var { measuresCache  } = this;
        var targetText = text || this.getText();
        if (measuresCache.has(targetText)) return measuresCache.get(targetText);
        var measure = this.measureTargetText(ctx, targetText);
        measuresCache.set(targetText, measure);
        return measure;
    }
    // If some font will be loaded after this method call, <textPath> will not be rendered correctly.
    // You need to call this method manually to update glyphs cache.
    setTextData(ctx) {
        if (this.glyphInfo) return;
        var renderText = this.getText();
        var chars = renderText.split("");
        var spacesNumber = renderText.split(" ").length - 1;
        var dx = this.parent.getAttribute("dx").split().map((_)=>_.getPixels("x"));
        var dy = this.parent.getAttribute("dy").getPixels("y");
        var anchor = this.parent.getStyle("text-anchor").getString("start");
        var thisSpacing = this.getStyle("letter-spacing");
        var parentSpacing = this.parent.getStyle("letter-spacing");
        var letterSpacing = 0;
        if (!thisSpacing.hasValue() || thisSpacing.getValue() === "inherit") letterSpacing = parentSpacing.getPixels();
        else if (thisSpacing.hasValue()) {
            if (thisSpacing.getValue() !== "initial" && thisSpacing.getValue() !== "unset") letterSpacing = thisSpacing.getPixels();
        } // fill letter-spacing cache
        var letterSpacingCache = [];
        var textLen = renderText.length;
        this.letterSpacingCache = letterSpacingCache;
        for(var i = 0; i < textLen; i++)letterSpacingCache.push(typeof dx[i] !== "undefined" ? dx[i] : letterSpacing);
        var dxSum = letterSpacingCache.reduce((acc, cur, i)=>i === 0 ? 0 : acc + cur || 0, 0);
        var textWidth = this.measureText(ctx);
        var textFullWidth = Math.max(textWidth + dxSum, 0);
        this.textWidth = textWidth;
        this.textHeight = this.getFontSize();
        this.glyphInfo = [];
        var fullPathWidth = this.getPathLength();
        var startOffset = this.getStyle("startOffset").getNumber(0) * fullPathWidth;
        var offset = 0;
        if (anchor === "middle" || anchor === "center") offset = -textFullWidth / 2;
        if (anchor === "end" || anchor === "right") offset = -textFullWidth;
        offset += startOffset;
        chars.forEach((char, i)=>{
            // Find such segment what distance between p0 and p1 is approx. width of glyph
            var { offset: nextOffset , segment , rotation  } = this.findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, offset, dy, char, i);
            offset = nextOffset;
            if (!segment.p0 || !segment.p1) return;
             // const width = this.getLineLength(
            // 	segment.p0.x,
            // 	segment.p0.y,
            // 	segment.p1.x,
            // 	segment.p1.y
            // );
            // Note: Since glyphs are rendered one at a time, any kerning pair data built into the font will not be used.
            // Can foresee having a rough pair table built in that the developer can override as needed.
            // Or use "dx" attribute of the <text> node as a naive replacement
            // const kern = 0;
            // placeholder for future implementation
            // const midpoint = this.getPointOnLine(
            // 	kern + width / 2.0,
            // 	segment.p0.x, segment.p0.y, segment.p1.x, segment.p1.y
            // );
            this.glyphInfo.push({
                // transposeX: midpoint.x,
                // transposeY: midpoint.y,
                text: chars[i],
                p0: segment.p0,
                p1: segment.p1,
                rotation
            });
        });
    }
    parsePathData(path) {
        this.pathLength = -1; // reset path length
        if (!path) return [];
        var pathCommands = [];
        var { pathParser  } = path;
        pathParser.reset(); // convert l, H, h, V, and v to L
        while(!pathParser.isEnd()){
            var { current  } = pathParser;
            var startX = current ? current.x : 0;
            var startY = current ? current.y : 0;
            var command = pathParser.next();
            var nextCommandType = command.type;
            var points = [];
            switch(command.type){
                case PathParser.MOVE_TO:
                    this.pathM(pathParser, points);
                    break;
                case PathParser.LINE_TO:
                    nextCommandType = this.pathL(pathParser, points);
                    break;
                case PathParser.HORIZ_LINE_TO:
                    nextCommandType = this.pathH(pathParser, points);
                    break;
                case PathParser.VERT_LINE_TO:
                    nextCommandType = this.pathV(pathParser, points);
                    break;
                case PathParser.CURVE_TO:
                    this.pathC(pathParser, points);
                    break;
                case PathParser.SMOOTH_CURVE_TO:
                    nextCommandType = this.pathS(pathParser, points);
                    break;
                case PathParser.QUAD_TO:
                    this.pathQ(pathParser, points);
                    break;
                case PathParser.SMOOTH_QUAD_TO:
                    nextCommandType = this.pathT(pathParser, points);
                    break;
                case PathParser.ARC:
                    points = this.pathA(pathParser);
                    break;
                case PathParser.CLOSE_PATH:
                    PathElement.pathZ(pathParser);
                    break;
            }
            if (command.type !== PathParser.CLOSE_PATH) pathCommands.push({
                type: nextCommandType,
                points,
                start: {
                    x: startX,
                    y: startY
                },
                pathLength: this.calcLength(startX, startY, nextCommandType, points)
            });
            else pathCommands.push({
                type: PathParser.CLOSE_PATH,
                points: [],
                pathLength: 0
            });
        }
        return pathCommands;
    }
    pathM(pathParser, points) {
        var { x , y  } = PathElement.pathM(pathParser).point;
        points.push(x, y);
    }
    pathL(pathParser, points) {
        var { x , y  } = PathElement.pathL(pathParser).point;
        points.push(x, y);
        return PathParser.LINE_TO;
    }
    pathH(pathParser, points) {
        var { x , y  } = PathElement.pathH(pathParser).point;
        points.push(x, y);
        return PathParser.LINE_TO;
    }
    pathV(pathParser, points) {
        var { x , y  } = PathElement.pathV(pathParser).point;
        points.push(x, y);
        return PathParser.LINE_TO;
    }
    pathC(pathParser, points) {
        var { point , controlPoint , currentPoint  } = PathElement.pathC(pathParser);
        points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
    }
    pathS(pathParser, points) {
        var { point , controlPoint , currentPoint  } = PathElement.pathS(pathParser);
        points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
        return PathParser.CURVE_TO;
    }
    pathQ(pathParser, points) {
        var { controlPoint , currentPoint  } = PathElement.pathQ(pathParser);
        points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
    }
    pathT(pathParser, points) {
        var { controlPoint , currentPoint  } = PathElement.pathT(pathParser);
        points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
        return PathParser.QUAD_TO;
    }
    pathA(pathParser) {
        var { rX , rY , sweepFlag , xAxisRotation , centp , a1 , ad  } = PathElement.pathA(pathParser);
        if (sweepFlag === 0 && ad > 0) ad -= 2 * Math.PI;
        if (sweepFlag === 1 && ad < 0) ad += 2 * Math.PI;
        return [
            centp.x,
            centp.y,
            rX,
            rY,
            a1,
            ad,
            xAxisRotation,
            sweepFlag
        ];
    }
    calcLength(x, y, commandType, points) {
        var len = 0;
        var p1 = null;
        var p2 = null;
        var t = 0;
        switch(commandType){
            case PathParser.LINE_TO:
                return this.getLineLength(x, y, points[0], points[1]);
            case PathParser.CURVE_TO:
                // Approximates by breaking curve into 100 line segments
                len = 0.0;
                p1 = this.getPointOnCubicBezier(0, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
                for(t = 0.01; t <= 1; t += 0.01){
                    p2 = this.getPointOnCubicBezier(t, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
                    len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                    p1 = p2;
                }
                return len;
            case PathParser.QUAD_TO:
                // Approximates by breaking curve into 100 line segments
                len = 0.0;
                p1 = this.getPointOnQuadraticBezier(0, x, y, points[0], points[1], points[2], points[3]);
                for(t = 0.01; t <= 1; t += 0.01){
                    p2 = this.getPointOnQuadraticBezier(t, x, y, points[0], points[1], points[2], points[3]);
                    len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                    p1 = p2;
                }
                return len;
            case PathParser.ARC:
                // Approximates by breaking curve into line segments
                len = 0.0;
                var start = points[4]; // 4 = theta
                var dTheta = points[5]; // 5 = dTheta
                var end = points[4] + dTheta;
                var inc = Math.PI / 180.0; // 1 degree resolution
                if (Math.abs(start - end) < inc) inc = Math.abs(start - end);
                 // Note: for purpose of calculating arc length, not going to worry about rotating X-axis by angle psi
                p1 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], start, 0);
                if (dTheta < 0) // clockwise
                for(t = start - inc; t > end; t -= inc){
                    p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                    len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                    p1 = p2;
                }
                else // counter-clockwise
                for(t = start + inc; t < end; t += inc){
                    p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                    len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                    p1 = p2;
                }
                p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], end, 0);
                len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                return len;
        }
        return 0;
    }
    getPointOnLine(dist, p1x, p1y, p2x, p2y) {
        var fromX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : p1x;
        var fromY = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : p1y;
        var m = (p2y - p1y) / (p2x - p1x + PSEUDO_ZERO);
        var run = Math.sqrt(dist * dist / (1 + m * m));
        if (p2x < p1x) run *= -1;
        var rise = m * run;
        var pt = null;
        if (p2x === p1x) // vertical line
        pt = {
            x: fromX,
            y: fromY + rise
        };
        else if ((fromY - p1y) / (fromX - p1x + PSEUDO_ZERO) === m) pt = {
            x: fromX + run,
            y: fromY + rise
        };
        else {
            var ix = 0;
            var iy = 0;
            var len = this.getLineLength(p1x, p1y, p2x, p2y);
            if (len < PSEUDO_ZERO) return null;
            var u = (fromX - p1x) * (p2x - p1x) + (fromY - p1y) * (p2y - p1y);
            u /= len * len;
            ix = p1x + u * (p2x - p1x);
            iy = p1y + u * (p2y - p1y);
            var pRise = this.getLineLength(fromX, fromY, ix, iy);
            var pRun = Math.sqrt(dist * dist - pRise * pRise);
            run = Math.sqrt(pRun * pRun / (1 + m * m));
            if (p2x < p1x) run *= -1;
            rise = m * run;
            pt = {
                x: ix + run,
                y: iy + rise
            };
        }
        return pt;
    }
    getPointOnPath(distance) {
        var fullLen = this.getPathLength();
        var cumulativePathLength = 0;
        var p = null;
        if (distance < -0.00005 || distance - 0.00005 > fullLen) return null;
        var { dataArray  } = this;
        for (var command of dataArray){
            if (command && (command.pathLength < 0.00005 || cumulativePathLength + command.pathLength + 0.00005 < distance)) {
                cumulativePathLength += command.pathLength;
                continue;
            }
            var delta = distance - cumulativePathLength;
            var currentT = 0;
            switch(command.type){
                case PathParser.LINE_TO:
                    p = this.getPointOnLine(delta, command.start.x, command.start.y, command.points[0], command.points[1], command.start.x, command.start.y);
                    break;
                case PathParser.ARC:
                    var start = command.points[4]; // 4 = theta
                    var dTheta = command.points[5]; // 5 = dTheta
                    var end = command.points[4] + dTheta;
                    currentT = start + delta / command.pathLength * dTheta;
                    if (dTheta < 0 && currentT < end || dTheta >= 0 && currentT > end) break;
                    p = this.getPointOnEllipticalArc(command.points[0], command.points[1], command.points[2], command.points[3], currentT, command.points[6]);
                    break;
                case PathParser.CURVE_TO:
                    currentT = delta / command.pathLength;
                    if (currentT > 1) currentT = 1;
                    p = this.getPointOnCubicBezier(currentT, command.start.x, command.start.y, command.points[0], command.points[1], command.points[2], command.points[3], command.points[4], command.points[5]);
                    break;
                case PathParser.QUAD_TO:
                    currentT = delta / command.pathLength;
                    if (currentT > 1) currentT = 1;
                    p = this.getPointOnQuadraticBezier(currentT, command.start.x, command.start.y, command.points[0], command.points[1], command.points[2], command.points[3]);
                    break;
            }
            if (p) return p;
            break;
        }
        return null;
    }
    getLineLength(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    }
    getPathLength() {
        if (this.pathLength === -1) this.pathLength = this.dataArray.reduce((length, command)=>command.pathLength > 0 ? length + command.pathLength : length, 0);
        return this.pathLength;
    }
    getPointOnCubicBezier(pct, p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y) {
        var x = p4x * CB1(pct) + p3x * CB2(pct) + p2x * CB3(pct) + p1x * CB4(pct);
        var y = p4y * CB1(pct) + p3y * CB2(pct) + p2y * CB3(pct) + p1y * CB4(pct);
        return {
            x,
            y
        };
    }
    getPointOnQuadraticBezier(pct, p1x, p1y, p2x, p2y, p3x, p3y) {
        var x = p3x * QB1(pct) + p2x * QB2(pct) + p1x * QB3(pct);
        var y = p3y * QB1(pct) + p2y * QB2(pct) + p1y * QB3(pct);
        return {
            x,
            y
        };
    }
    getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi) {
        var cosPsi = Math.cos(psi);
        var sinPsi = Math.sin(psi);
        var pt = {
            x: rx * Math.cos(theta),
            y: ry * Math.sin(theta)
        };
        return {
            x: cx + (pt.x * cosPsi - pt.y * sinPsi),
            y: cy + (pt.x * sinPsi + pt.y * cosPsi)
        };
    }
    buildEquidistantCache(inputStep, inputPrecision) {
        var fullLen = this.getPathLength();
        var precision = inputPrecision || 0.25; // accuracy vs performance
        var step = inputStep || fullLen / 100;
        if (!this.equidistantCache || this.equidistantCache.step !== step || this.equidistantCache.precision !== precision) {
            // Prepare cache
            this.equidistantCache = {
                step,
                precision,
                points: []
            }; // Calculate points
            var s = 0;
            for(var l = 0; l <= fullLen; l += precision){
                var p0 = this.getPointOnPath(l);
                var p1 = this.getPointOnPath(l + precision);
                if (!p0 || !p1) continue;
                s += this.getLineLength(p0.x, p0.y, p1.x, p1.y);
                if (s >= step) {
                    this.equidistantCache.points.push({
                        x: p0.x,
                        y: p0.y,
                        distance: l
                    });
                    s -= step;
                }
            }
        }
    }
    getEquidistantPointOnPath(targetDistance, step, precision) {
        this.buildEquidistantCache(step, precision);
        if (targetDistance < 0 || targetDistance - this.getPathLength() > 0.00005) return null;
        var idx = Math.round(targetDistance / this.getPathLength() * (this.equidistantCache.points.length - 1));
        return this.equidistantCache.points[idx] || null;
    }
}
var dataUriRegex = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
class ImageElement extends RenderedElement {
    constructor(document1, node, captureTextNodes){
        super(document1, node, captureTextNodes);
        this.type = "image";
        this.loaded = false;
        var href = this.getHrefAttribute().getString();
        if (!href) return;
        var isSvg = href.endsWith(".svg") || /^\s*data:image\/svg\+xml/i.test(href);
        document1.images.push(this);
        if (!isSvg) this.loadImage(href);
        else this.loadSvg(href);
        this.isSvg = isSvg;
    }
    loadImage(href) {
        var _this = this;
        return (0, _asyncToGeneratorDefault.default)(function*() {
            try {
                var image = yield _this.document.createImage(href);
                _this.image = image;
            } catch (err) {
                console.error('Error while loading image "'.concat(href, '":'), err);
            }
            _this.loaded = true;
        })();
    }
    loadSvg(href) {
        var _this2 = this;
        return (0, _asyncToGeneratorDefault.default)(function*() {
            var match = dataUriRegex.exec(href);
            if (match) {
                var data = match[5];
                if (match[4] === "base64") _this2.image = atob(data);
                else _this2.image = decodeURIComponent(data);
            } else try {
                var response = yield _this2.document.fetch(href);
                var svg = yield response.text();
                _this2.image = svg;
            } catch (err) {
                console.error('Error while loading image "'.concat(href, '":'), err);
            }
            _this2.loaded = true;
        })();
    }
    renderChildren(ctx) {
        var { document: document1 , image , loaded  } = this;
        var x = this.getAttribute("x").getPixels("x");
        var y = this.getAttribute("y").getPixels("y");
        var width = this.getStyle("width").getPixels("x");
        var height = this.getStyle("height").getPixels("y");
        if (!loaded || !image || !width || !height) return;
        ctx.save();
        ctx.translate(x, y);
        if (this.isSvg) {
            var subDocument = document1.canvg.forkString(ctx, this.image, {
                ignoreMouse: true,
                ignoreAnimation: true,
                ignoreDimensions: true,
                ignoreClear: true,
                offsetX: 0,
                offsetY: 0,
                scaleWidth: width,
                scaleHeight: height
            });
            subDocument.document.documentElement.parent = this;
            subDocument.render();
        } else {
            var _image = this.image;
            document1.setViewBox({
                ctx,
                aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
                width,
                desiredWidth: _image.width,
                height,
                desiredHeight: _image.height
            });
            if (this.loaded) {
                if (typeof _image.complete === "undefined" || _image.complete) ctx.drawImage(_image, 0, 0);
            }
        }
        ctx.restore();
    }
    getBoundingBox() {
        var x = this.getAttribute("x").getPixels("x");
        var y = this.getAttribute("y").getPixels("y");
        var width = this.getStyle("width").getPixels("x");
        var height = this.getStyle("height").getPixels("y");
        return new BoundingBox(x, y, x + width, y + height);
    }
}
class SymbolElement extends RenderedElement {
    constructor(){
        super(...arguments);
        this.type = "symbol";
    }
    render(_) {}
}
class SVGFontLoader {
    constructor(document1){
        this.document = document1;
        this.loaded = false;
        document1.fonts.push(this);
    }
    load(fontFamily, url) {
        var _this = this;
        return (0, _asyncToGeneratorDefault.default)(function*() {
            try {
                var { document: document1  } = _this;
                var svgDocument = yield document1.canvg.parser.load(url);
                var fonts = svgDocument.getElementsByTagName("font");
                Array.from(fonts).forEach((fontNode)=>{
                    var font = document1.createElement(fontNode);
                    document1.definitions[fontFamily] = font;
                });
            } catch (err) {
                console.error('Error while loading font "'.concat(url, '":'), err);
            }
            _this.loaded = true;
        })();
    }
}
class StyleElement extends Element {
    constructor(document1, node, captureTextNodes){
        super(document1, node, captureTextNodes);
        this.type = "style";
        var css = compressSpaces(Array.from(node.childNodes) // NEED TEST
        .map((_)=>_.textContent).join("").replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, "") // remove comments
        .replace(/@import.*;/g, "") // remove imports
        );
        var cssDefs = css.split("}");
        cssDefs.forEach((_)=>{
            var def = _.trim();
            if (!def) return;
            var cssParts = def.split("{");
            var cssClasses = cssParts[0].split(",");
            var cssProps = cssParts[1].split(";");
            cssClasses.forEach((_)=>{
                var cssClass = _.trim();
                if (!cssClass) return;
                var props = document1.styles[cssClass] || {};
                cssProps.forEach((cssProp)=>{
                    var prop = cssProp.indexOf(":");
                    var name = cssProp.substr(0, prop).trim();
                    var value = cssProp.substr(prop + 1, cssProp.length - prop).trim();
                    if (name && value) props[name] = new Property(document1, name, value);
                });
                document1.styles[cssClass] = props;
                document1.stylesSpecificity[cssClass] = getSelectorSpecificity(cssClass);
                if (cssClass === "@font-face") {
                    //  && !nodeEnv
                    var fontFamily = props["font-family"].getString().replace(/"|'/g, "");
                    var srcs = props.src.getString().split(",");
                    srcs.forEach((src)=>{
                        if (src.indexOf('format("svg")') > 0) {
                            var url = parseExternalUrl(src);
                            if (url) new SVGFontLoader(document1).load(fontFamily, url);
                        }
                    });
                }
            });
        });
    }
}
StyleElement.parseExternalUrl = parseExternalUrl;
class UseElement extends RenderedElement {
    constructor(){
        super(...arguments);
        this.type = "use";
    }
    setContext(ctx) {
        super.setContext(ctx);
        var xAttr = this.getAttribute("x");
        var yAttr = this.getAttribute("y");
        if (xAttr.hasValue()) ctx.translate(xAttr.getPixels("x"), 0);
        if (yAttr.hasValue()) ctx.translate(0, yAttr.getPixels("y"));
    }
    path(ctx) {
        var { element  } = this;
        if (element) element.path(ctx);
    }
    renderChildren(ctx) {
        var { document: document1 , element  } = this;
        if (element) {
            var tempSvg = element;
            if (element.type === "symbol") {
                // render me using a temporary svg element in symbol cases (http://www.w3.org/TR/SVG/struct.html#UseElement)
                tempSvg = new SVGElement(document1, null);
                tempSvg.attributes.viewBox = new Property(document1, "viewBox", element.getAttribute("viewBox").getString());
                tempSvg.attributes.preserveAspectRatio = new Property(document1, "preserveAspectRatio", element.getAttribute("preserveAspectRatio").getString());
                tempSvg.attributes.overflow = new Property(document1, "overflow", element.getAttribute("overflow").getString());
                tempSvg.children = element.children; // element is still the parent of the children
                element.styles.opacity = new Property(document1, "opacity", this.calculateOpacity());
            }
            if (tempSvg.type === "svg") {
                var widthStyle = this.getStyle("width", false, true);
                var heightStyle = this.getStyle("height", false, true); // if symbol or svg, inherit width/height from me
                if (widthStyle.hasValue()) tempSvg.attributes.width = new Property(document1, "width", widthStyle.getString());
                if (heightStyle.hasValue()) tempSvg.attributes.height = new Property(document1, "height", heightStyle.getString());
            }
            var oldParent = tempSvg.parent;
            tempSvg.parent = this;
            tempSvg.render(ctx);
            tempSvg.parent = oldParent;
        }
    }
    getBoundingBox(ctx) {
        var { element  } = this;
        if (element) return element.getBoundingBox(ctx);
        return null;
    }
    elementTransform() {
        var { document: document1 , element  } = this;
        return Transform.fromElement(document1, element);
    }
    get element() {
        if (!this.cachedElement) this.cachedElement = this.getHrefAttribute().getDefinition();
        return this.cachedElement;
    }
}
function imGet(img, x, y, width, _height, rgba) {
    return img[y * width * 4 + x * 4 + rgba];
}
function imSet(img, x, y, width, _height, rgba, val) {
    img[y * width * 4 + x * 4 + rgba] = val;
}
function m(matrix, i, v) {
    var mi = matrix[i];
    return mi * v;
}
function c(a, m1, m2, m3) {
    return m1 + Math.cos(a) * m2 + Math.sin(a) * m3;
}
class FeColorMatrixElement extends Element {
    constructor(document1, node, captureTextNodes){
        super(document1, node, captureTextNodes);
        this.type = "feColorMatrix";
        var matrix = toNumbers(this.getAttribute("values").getString());
        switch(this.getAttribute("type").getString("matrix")){
            // http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
            case "saturate":
                var s = matrix[0];
                /* eslint-disable array-element-newline */ matrix = [
                    0.213 + 0.787 * s,
                    0.715 - 0.715 * s,
                    0.072 - 0.072 * s,
                    0,
                    0,
                    0.213 - 0.213 * s,
                    0.715 + 0.285 * s,
                    0.072 - 0.072 * s,
                    0,
                    0,
                    0.213 - 0.213 * s,
                    0.715 - 0.715 * s,
                    0.072 + 0.928 * s,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                ];
                break;
            case "hueRotate":
                var a = matrix[0] * Math.PI / 180.0;
                /* eslint-disable array-element-newline */ matrix = [
                    c(a, 0.213, 0.787, -0.213),
                    c(a, 0.715, -0.715, -0.715),
                    c(a, 0.072, -0.072, 0.928),
                    0,
                    0,
                    c(a, 0.213, -0.213, 0.143),
                    c(a, 0.715, 0.285, 0.140),
                    c(a, 0.072, -0.072, -0.283),
                    0,
                    0,
                    c(a, 0.213, -0.213, -0.787),
                    c(a, 0.715, -0.715, 0.715),
                    c(a, 0.072, 0.928, 0.072),
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                ];
                break;
            case "luminanceToAlpha":
                /* eslint-disable array-element-newline */ matrix = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0.2125,
                    0.7154,
                    0.0721,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1
                ];
                break;
        }
        this.matrix = matrix;
        this.includeOpacity = this.getAttribute("includeOpacity").hasValue();
    }
    apply(ctx, _x, _y, width, height) {
        // assuming x==0 && y==0 for now
        var { includeOpacity , matrix  } = this;
        var srcData = ctx.getImageData(0, 0, width, height);
        for(var y = 0; y < height; y++)for(var x = 0; x < width; x++){
            var r = imGet(srcData.data, x, y, width, height, 0);
            var g = imGet(srcData.data, x, y, width, height, 1);
            var b = imGet(srcData.data, x, y, width, height, 2);
            var a = imGet(srcData.data, x, y, width, height, 3);
            var nr = m(matrix, 0, r) + m(matrix, 1, g) + m(matrix, 2, b) + m(matrix, 3, a) + m(matrix, 4, 1);
            var ng = m(matrix, 5, r) + m(matrix, 6, g) + m(matrix, 7, b) + m(matrix, 8, a) + m(matrix, 9, 1);
            var nb = m(matrix, 10, r) + m(matrix, 11, g) + m(matrix, 12, b) + m(matrix, 13, a) + m(matrix, 14, 1);
            var na = m(matrix, 15, r) + m(matrix, 16, g) + m(matrix, 17, b) + m(matrix, 18, a) + m(matrix, 19, 1);
            if (includeOpacity) {
                nr = 0;
                ng = 0;
                nb = 0;
                na *= a / 255;
            }
            imSet(srcData.data, x, y, width, height, 0, nr);
            imSet(srcData.data, x, y, width, height, 1, ng);
            imSet(srcData.data, x, y, width, height, 2, nb);
            imSet(srcData.data, x, y, width, height, 3, na);
        }
        ctx.clearRect(0, 0, width, height);
        ctx.putImageData(srcData, 0, 0);
    }
}
class MaskElement extends Element {
    constructor(){
        super(...arguments);
        this.type = "mask";
    }
    apply(ctx, element) {
        var { document: document1  } = this; // render as temp svg
        var x = this.getAttribute("x").getPixels("x");
        var y = this.getAttribute("y").getPixels("y");
        var width = this.getStyle("width").getPixels("x");
        var height = this.getStyle("height").getPixels("y");
        if (!width && !height) {
            var boundingBox = new BoundingBox();
            this.children.forEach((child)=>{
                boundingBox.addBoundingBox(child.getBoundingBox(ctx));
            });
            x = Math.floor(boundingBox.x1);
            y = Math.floor(boundingBox.y1);
            width = Math.floor(boundingBox.width);
            height = Math.floor(boundingBox.height);
        }
        var ignoredStyles = this.removeStyles(element, MaskElement.ignoreStyles);
        var maskCanvas = document1.createCanvas(x + width, y + height);
        var maskCtx = maskCanvas.getContext("2d");
        document1.screen.setDefaults(maskCtx);
        this.renderChildren(maskCtx); // convert mask to alpha with a fake node
        // TODO: refactor out apply from feColorMatrix
        new FeColorMatrixElement(document1, {
            nodeType: 1,
            childNodes: [],
            attributes: [
                {
                    nodeName: "type",
                    value: "luminanceToAlpha"
                },
                {
                    nodeName: "includeOpacity",
                    value: "true"
                }
            ]
        }).apply(maskCtx, 0, 0, x + width, y + height);
        var tmpCanvas = document1.createCanvas(x + width, y + height);
        var tmpCtx = tmpCanvas.getContext("2d");
        document1.screen.setDefaults(tmpCtx);
        element.render(tmpCtx);
        tmpCtx.globalCompositeOperation = "destination-in";
        tmpCtx.fillStyle = maskCtx.createPattern(maskCanvas, "no-repeat");
        tmpCtx.fillRect(0, 0, x + width, y + height);
        ctx.fillStyle = tmpCtx.createPattern(tmpCanvas, "no-repeat");
        ctx.fillRect(0, 0, x + width, y + height); // reassign mask
        this.restoreStyles(element, ignoredStyles);
    }
    render(_) {}
}
MaskElement.ignoreStyles = [
    "mask",
    "transform",
    "clip-path"
];
var noop = ()=>{};
class ClipPathElement extends Element {
    constructor(){
        super(...arguments);
        this.type = "clipPath";
    }
    apply(ctx) {
        var { document: document1  } = this;
        var contextProto = Reflect.getPrototypeOf(ctx);
        var { beginPath , closePath  } = ctx;
        if (contextProto) {
            contextProto.beginPath = noop;
            contextProto.closePath = noop;
        }
        Reflect.apply(beginPath, ctx, []);
        this.children.forEach((child)=>{
            if (typeof child.path === "undefined") return;
            var transform = typeof child.elementTransform !== "undefined" ? child.elementTransform() : null; // handle <use />
            if (!transform) transform = Transform.fromElement(document1, child);
            if (transform) transform.apply(ctx);
            child.path(ctx);
            if (contextProto) contextProto.closePath = closePath;
            if (transform) transform.unapply(ctx);
        });
        Reflect.apply(closePath, ctx, []);
        ctx.clip();
        if (contextProto) {
            contextProto.beginPath = beginPath;
            contextProto.closePath = closePath;
        }
    }
    render(_) {}
}
class FilterElement extends Element {
    constructor(){
        super(...arguments);
        this.type = "filter";
    }
    apply(ctx, element) {
        // render as temp svg
        var { document: document1 , children  } = this;
        var boundingBox = element.getBoundingBox(ctx);
        if (!boundingBox) return;
        var px = 0;
        var py = 0;
        children.forEach((child)=>{
            var efd = child.extraFilterDistance || 0;
            px = Math.max(px, efd);
            py = Math.max(py, efd);
        });
        var width = Math.floor(boundingBox.width);
        var height = Math.floor(boundingBox.height);
        var tmpCanvasWidth = width + 2 * px;
        var tmpCanvasHeight = height + 2 * py;
        if (tmpCanvasWidth < 1 || tmpCanvasHeight < 1) return;
        var x = Math.floor(boundingBox.x);
        var y = Math.floor(boundingBox.y);
        var ignoredStyles = this.removeStyles(element, FilterElement.ignoreStyles);
        var tmpCanvas = document1.createCanvas(tmpCanvasWidth, tmpCanvasHeight);
        var tmpCtx = tmpCanvas.getContext("2d");
        document1.screen.setDefaults(tmpCtx);
        tmpCtx.translate(-x + px, -y + py);
        element.render(tmpCtx); // apply filters
        children.forEach((child)=>{
            if (typeof child.apply === "function") child.apply(tmpCtx, 0, 0, tmpCanvasWidth, tmpCanvasHeight);
        }); // render on me
        ctx.drawImage(tmpCanvas, 0, 0, tmpCanvasWidth, tmpCanvasHeight, x - px, y - py, tmpCanvasWidth, tmpCanvasHeight);
        this.restoreStyles(element, ignoredStyles);
    }
    render(_) {}
}
FilterElement.ignoreStyles = [
    "filter",
    "transform",
    "clip-path"
];
class FeDropShadowElement extends Element {
    constructor(document1, node, captureTextNodes){
        super(document1, node, captureTextNodes);
        this.type = "feDropShadow";
        this.addStylesFromStyleDefinition();
    }
    apply(_, _x, _y, _width, _height) {}
}
class FeMorphologyElement extends Element {
    constructor(){
        super(...arguments);
        this.type = "feMorphology";
    }
    apply(_, _x, _y, _width, _height) {}
}
class FeCompositeElement extends Element {
    constructor(){
        super(...arguments);
        this.type = "feComposite";
    }
    apply(_, _x, _y, _width, _height) {}
}
class FeGaussianBlurElement extends Element {
    constructor(document1, node, captureTextNodes){
        super(document1, node, captureTextNodes);
        this.type = "feGaussianBlur";
        this.blurRadius = Math.floor(this.getAttribute("stdDeviation").getNumber());
        this.extraFilterDistance = this.blurRadius;
    }
    apply(ctx, x, y, width, height) {
        var { document: document1 , blurRadius  } = this;
        var body = document1.window ? document1.window.document.body : null;
        var canvas = ctx.canvas; // StackBlur requires canvas be on document
        canvas.id = document1.getUniqueId();
        if (body) {
            canvas.style.display = "none";
            body.appendChild(canvas);
        }
        (0, _stackblurCanvas.canvasRGBA)(canvas, x, y, width, height, blurRadius);
        if (body) body.removeChild(canvas);
    }
}
class TitleElement extends Element {
    constructor(){
        super(...arguments);
        this.type = "title";
    }
}
class DescElement extends Element {
    constructor(){
        super(...arguments);
        this.type = "desc";
    }
}
var elements = {
    "svg": SVGElement,
    "rect": RectElement,
    "circle": CircleElement,
    "ellipse": EllipseElement,
    "line": LineElement,
    "polyline": PolylineElement,
    "polygon": PolygonElement,
    "path": PathElement,
    "pattern": PatternElement,
    "marker": MarkerElement,
    "defs": DefsElement,
    "linearGradient": LinearGradientElement,
    "radialGradient": RadialGradientElement,
    "stop": StopElement,
    "animate": AnimateElement,
    "animateColor": AnimateColorElement,
    "animateTransform": AnimateTransformElement,
    "font": FontElement,
    "font-face": FontFaceElement,
    "missing-glyph": MissingGlyphElement,
    "glyph": GlyphElement,
    "text": TextElement,
    "tspan": TSpanElement,
    "tref": TRefElement,
    "a": AElement,
    "textPath": TextPathElement,
    "image": ImageElement,
    "g": GElement,
    "symbol": SymbolElement,
    "style": StyleElement,
    "use": UseElement,
    "mask": MaskElement,
    "clipPath": ClipPathElement,
    "filter": FilterElement,
    "feDropShadow": FeDropShadowElement,
    "feMorphology": FeMorphologyElement,
    "feComposite": FeCompositeElement,
    "feColorMatrix": FeColorMatrixElement,
    "feGaussianBlur": FeGaussianBlurElement,
    "title": TitleElement,
    "desc": DescElement
};
function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$1(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys$1(Object(source), true).forEach(function(key) {
            (0, _definePropertyDefault.default)(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys$1(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function createCanvas(width, height) {
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas;
}
function createImage(_x) {
    return _createImage.apply(this, arguments);
}
function _createImage() {
    _createImage = (0, _asyncToGeneratorDefault.default)(function*(src) {
        var anonymousCrossOrigin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var image = document.createElement("img");
        if (anonymousCrossOrigin) image.crossOrigin = "Anonymous";
        return new Promise((resolve, reject)=>{
            image.onload = ()=>{
                resolve(image);
            };
            image.onerror = (_event, _source, _lineno, _colno, error)=>{
                reject(error);
            };
            image.src = src;
        });
    });
    return _createImage.apply(this, arguments);
}
class Document {
    constructor(canvg){
        var { rootEmSize =12 , emSize =12 , createCanvas =Document.createCanvas , createImage =Document.createImage , anonymousCrossOrigin  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        this.canvg = canvg;
        this.definitions = {};
        this.styles = {};
        this.stylesSpecificity = {};
        this.images = [];
        this.fonts = [];
        this.emSizeStack = [];
        this.uniqueId = 0;
        this.screen = canvg.screen;
        this.rootEmSize = rootEmSize;
        this.emSize = emSize;
        this.createCanvas = createCanvas;
        this.createImage = this.bindCreateImage(createImage, anonymousCrossOrigin);
        this.screen.wait(this.isImagesLoaded.bind(this));
        this.screen.wait(this.isFontsLoaded.bind(this));
    }
    bindCreateImage(createImage, anonymousCrossOrigin) {
        if (typeof anonymousCrossOrigin === "boolean") return (source, forceAnonymousCrossOrigin)=>createImage(source, typeof forceAnonymousCrossOrigin === "boolean" ? forceAnonymousCrossOrigin : anonymousCrossOrigin);
        return createImage;
    }
    get window() {
        return this.screen.window;
    }
    get fetch() {
        return this.screen.fetch;
    }
    get ctx() {
        return this.screen.ctx;
    }
    get emSize() {
        var { emSizeStack  } = this;
        return emSizeStack[emSizeStack.length - 1];
    }
    set emSize(value) {
        var { emSizeStack  } = this;
        emSizeStack.push(value);
    }
    popEmSize() {
        var { emSizeStack  } = this;
        emSizeStack.pop();
    }
    getUniqueId() {
        return "canvg".concat(++this.uniqueId);
    }
    isImagesLoaded() {
        return this.images.every((_)=>_.loaded);
    }
    isFontsLoaded() {
        return this.fonts.every((_)=>_.loaded);
    }
    createDocumentElement(document1) {
        var documentElement = this.createElement(document1.documentElement);
        documentElement.root = true;
        documentElement.addStylesFromStyleDefinition();
        this.documentElement = documentElement;
        return documentElement;
    }
    createElement(node) {
        var elementType = node.nodeName.replace(/^[^:]+:/, "");
        var ElementType = Document.elementTypes[elementType];
        if (typeof ElementType !== "undefined") return new ElementType(this, node);
        return new UnknownElement(this, node);
    }
    createTextNode(node) {
        return new TextNode(this, node);
    }
    setViewBox(config) {
        this.screen.setViewBox(_objectSpread$1({
            document: this
        }, config));
    }
}
Document.createCanvas = createCanvas;
Document.createImage = createImage;
Document.elementTypes = elements;
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            (0, _definePropertyDefault.default)(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
/**
 * SVG renderer on canvas.
 */ class Canvg {
    /**
   * Main constructor.
   * @param ctx - Rendering context.
   * @param svg - SVG Document.
   * @param options - Rendering options.
   */ constructor(ctx, svg){
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        this.parser = new Parser(options);
        this.screen = new Screen(ctx, options);
        this.options = options;
        var document1 = new Document(this, options);
        var documentElement = document1.createDocumentElement(svg);
        this.document = document1;
        this.documentElement = documentElement;
    }
    /**
   * Create Canvg instance from SVG source string or URL.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */ static from(ctx, svg) {
        var _arguments = arguments;
        return (0, _asyncToGeneratorDefault.default)(function*() {
            var options = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : {};
            var parser = new Parser(options);
            var svgDocument = yield parser.parse(svg);
            return new Canvg(ctx, svgDocument, options);
        })();
    }
    /**
   * Create Canvg instance from SVG source string.
   * @param ctx - Rendering context.
   * @param svg - SVG source string.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */ static fromString(ctx, svg) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var parser = new Parser(options);
        var svgDocument = parser.parseFromString(svg);
        return new Canvg(ctx, svgDocument, options);
    }
    /**
   * Create new Canvg instance with inherited options.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */ fork(ctx, svg) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return Canvg.from(ctx, svg, _objectSpread(_objectSpread({}, this.options), options));
    }
    /**
   * Create new Canvg instance with inherited options.
   * @param ctx - Rendering context.
   * @param svg - SVG source string.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */ forkString(ctx, svg) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return Canvg.fromString(ctx, svg, _objectSpread(_objectSpread({}, this.options), options));
    }
    /**
   * Document is ready promise.
   * @returns Ready promise.
   */ ready() {
        return this.screen.ready();
    }
    /**
   * Document is ready value.
   * @returns Is ready or not.
   */ isReady() {
        return this.screen.isReady();
    }
    /**
   * Render only first frame, ignoring animations and mouse.
   * @param options - Rendering options.
   */ render() {
        var _arguments2 = arguments, _this = this;
        return (0, _asyncToGeneratorDefault.default)(function*() {
            var options = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : {};
            _this.start(_objectSpread({
                enableRedraw: true,
                ignoreAnimation: true,
                ignoreMouse: true
            }, options));
            yield _this.ready();
            _this.stop();
        })();
    }
    /**
   * Start rendering.
   * @param options - Render options.
   */ start() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var { documentElement , screen , options: baseOptions  } = this;
        screen.start(documentElement, _objectSpread(_objectSpread({
            enableRedraw: true
        }, baseOptions), options));
    }
    /**
   * Stop rendering.
   */ stop() {
        this.screen.stop();
    }
    /**
   * Resize SVG to fit in given size.
   * @param width
   * @param height
   * @param preserveAspectRatio
   */ resize(width) {
        var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
        var preserveAspectRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        this.documentElement.resize(width, height, preserveAspectRatio);
    }
}

},{"73bd10b5b0307ea1":"d5jf4","core-js/modules/es.promise.js":"9lvo1","@babel/runtime/helpers/asyncToGenerator":"jxKg8","core-js/modules/es.string.match.js":"dhI0U","core-js/modules/es.string.replace.js":"bE0gl","core-js/modules/es.string.starts-with.js":"jBAVV","core-js/modules/es.array.iterator.js":"dFlRN","core-js/modules/web.dom-collections.iterator.js":"3YhYU","@babel/runtime/helpers/defineProperty":"4x6r7","core-js/modules/es.array.reduce.js":"4JP9y","core-js/modules/es.string.ends-with.js":"jGTSU","core-js/modules/es.string.split.js":"c6es8","raf":"ba7ov","core-js/modules/es.string.trim.js":"8KjjF","rgbcolor":"iVlt2","core-js/modules/es.array.index-of.js":"jWtjc","core-js/modules/es.string.includes.js":"iQrGk","core-js/modules/es.array.reverse.js":"fcRaU","svg-pathdata":"8cZl0","core-js/modules/es.regexp.to-string.js":"8bEcW","stackblur-canvas":"imAgF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"9lvo1":[function(require,module,exports) {
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("67d280abd17de661");
require("caf47b8f64b5a7bf");
require("b238606969312a93");
require("f8a6b7e05e8f4dbe");
require("33db1f6c0c353a2e");
require("ff11f82a7c9025b");

},{"67d280abd17de661":"8nvrB","caf47b8f64b5a7bf":"15vbo","b238606969312a93":"3Vol0","f8a6b7e05e8f4dbe":"bayjl","33db1f6c0c353a2e":"2ZtJk","ff11f82a7c9025b":"7LyMi"}],"8nvrB":[function(require,module,exports) {
"use strict";
var $ = require("ef14bf533df80f3");
var IS_PURE = require("feb64bd8c64d8148");
var IS_NODE = require("7dd84cb3942b15f1");
var global = require("90f876c2321b7dfc");
var call = require("a6750988877f08a4");
var defineBuiltIn = require("38e81c9bbced912e");
var setPrototypeOf = require("511dff0b643354f3");
var setToStringTag = require("979b2374fcc08ca5");
var setSpecies = require("d5280b6ec2ef54cf");
var aCallable = require("12c69375f68dd433");
var isCallable = require("8e2cde74d1c8c9f5");
var isObject = require("e66581e5b123532e");
var anInstance = require("5642e699c596c3cf");
var speciesConstructor = require("1a19044c7742889f");
var task = require("c929e2406598b8d").set;
var microtask = require("5e8dccca0283666c");
var hostReportErrors = require("34b0ce9920b8209d");
var perform = require("8b5e97eab386eecb");
var Queue = require("c121e906fe866123");
var InternalStateModule = require("d2cc6124630ec3f8");
var NativePromiseConstructor = require("f7ab4d675fbd6ee4");
var PromiseConstructorDetection = require("5950451f49003409");
var newPromiseCapabilityModule = require("5cdd3dbd187e0c3a");
var PROMISE = "Promise";
var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var PromiseConstructor = NativePromiseConstructor;
var PromisePrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = "unhandledrejection";
var REJECTION_HANDLED = "rejectionhandled";
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
// helpers
var isThenable = function(it) {
    var then;
    return isObject(it) && isCallable(then = it.then) ? then : false;
};
var callReaction = function(reaction, state) {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var handler = ok ? reaction.ok : reaction.fail;
    var resolve = reaction.resolve;
    var reject = reaction.reject;
    var domain = reaction.domain;
    var result, then, exited;
    try {
        if (handler) {
            if (!ok) {
                if (state.rejection === UNHANDLED) onHandleUnhandled(state);
                state.rejection = HANDLED;
            }
            if (handler === true) result = value;
            else {
                if (domain) domain.enter();
                result = handler(value); // can throw
                if (domain) {
                    domain.exit();
                    exited = true;
                }
            }
            if (result === reaction.promise) reject(TypeError("Promise-chain cycle"));
            else if (then = isThenable(result)) call(then, result, resolve, reject);
            else resolve(result);
        } else reject(value);
    } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
    }
};
var notify = function(state, isReject) {
    if (state.notified) return;
    state.notified = true;
    microtask(function() {
        var reactions = state.reactions;
        var reaction;
        while(reaction = reactions.get())callReaction(reaction, state);
        state.notified = false;
        if (isReject && !state.rejection) onUnhandled(state);
    });
};
var dispatchEvent = function(name, promise, reason) {
    var event, handler;
    if (DISPATCH_EVENT) {
        event = document.createEvent("Event");
        event.promise = promise;
        event.reason = reason;
        event.initEvent(name, false, true);
        global.dispatchEvent(event);
    } else event = {
        promise: promise,
        reason: reason
    };
    if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global["on" + name])) handler(event);
    else if (name === UNHANDLED_REJECTION) hostReportErrors("Unhandled promise rejection", reason);
};
var onUnhandled = function(state) {
    call(task, global, function() {
        var promise = state.facade;
        var value = state.value;
        var IS_UNHANDLED = isUnhandled(state);
        var result;
        if (IS_UNHANDLED) {
            result = perform(function() {
                if (IS_NODE) process.emit("unhandledRejection", value, promise);
                else dispatchEvent(UNHANDLED_REJECTION, promise, value);
            });
            // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
            state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
            if (result.error) throw result.value;
        }
    });
};
var isUnhandled = function(state) {
    return state.rejection !== HANDLED && !state.parent;
};
var onHandleUnhandled = function(state) {
    call(task, global, function() {
        var promise = state.facade;
        if (IS_NODE) process.emit("rejectionHandled", promise);
        else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
};
var bind = function(fn, state, unwrap) {
    return function(value) {
        fn(state, value, unwrap);
    };
};
var internalReject = function(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify(state, true);
};
var internalResolve = function(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    try {
        if (state.facade === value) throw TypeError("Promise can't be resolved itself");
        var then = isThenable(value);
        if (then) microtask(function() {
            var wrapper = {
                done: false
            };
            try {
                call(then, value, bind(internalResolve, wrapper, state), bind(internalReject, wrapper, state));
            } catch (error) {
                internalReject(wrapper, error, state);
            }
        });
        else {
            state.value = value;
            state.state = FULFILLED;
            notify(state, false);
        }
    } catch (error) {
        internalReject({
            done: false
        }, error, state);
    }
};
// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise(executor) {
        anInstance(this, PromisePrototype);
        aCallable(executor);
        call(Internal, this);
        var state = getInternalPromiseState(this);
        try {
            executor(bind(internalResolve, state), bind(internalReject, state));
        } catch (error) {
            internalReject(state, error);
        }
    };
    PromisePrototype = PromiseConstructor.prototype;
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    Internal = function Promise(executor) {
        setInternalState(this, {
            type: PROMISE,
            done: false,
            notified: false,
            parent: false,
            reactions: new Queue(),
            rejection: false,
            state: PENDING,
            value: undefined
        });
    };
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    Internal.prototype = defineBuiltIn(PromisePrototype, "then", function then(onFulfilled, onRejected) {
        var state = getInternalPromiseState(this);
        var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
        state.parent = true;
        reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
        reaction.fail = isCallable(onRejected) && onRejected;
        reaction.domain = IS_NODE ? process.domain : undefined;
        if (state.state == PENDING) state.reactions.add(reaction);
        else microtask(function() {
            callReaction(reaction, state);
        });
        return reaction.promise;
    });
    OwnPromiseCapability = function() {
        var promise = new Internal();
        var state = getInternalPromiseState(promise);
        this.promise = promise;
        this.resolve = bind(internalResolve, state);
        this.reject = bind(internalReject, state);
    };
    newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
        return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };
    if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
        nativeThen = NativePromisePrototype.then;
        if (!NATIVE_PROMISE_SUBCLASSING) // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        defineBuiltIn(NativePromisePrototype, "then", function then(onFulfilled, onRejected) {
            var that = this;
            return new PromiseConstructor(function(resolve, reject) {
                call(nativeThen, that, resolve, reject);
            }).then(onFulfilled, onRejected);
        // https://github.com/zloirock/core-js/issues/640
        }, {
            unsafe: true
        });
        // make `.constructor === Promise` work for native promise-based APIs
        try {
            delete NativePromisePrototype.constructor;
        } catch (error) {}
        // make `instanceof Promise` work for native promise-based APIs
        if (setPrototypeOf) setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
}
$({
    global: true,
    constructor: true,
    wrap: true,
    forced: FORCED_PROMISE_CONSTRUCTOR
}, {
    Promise: PromiseConstructor
});
setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

},{"ef14bf533df80f3":"dIGt4","feb64bd8c64d8148":"5ZsyC","7dd84cb3942b15f1":"2Jcp4","90f876c2321b7dfc":"i8HOC","a6750988877f08a4":"d7JlP","38e81c9bbced912e":"6XwEX","511dff0b643354f3":"2EnFi","979b2374fcc08ca5":"ffT5i","d5280b6ec2ef54cf":"5UUiu","12c69375f68dd433":"gOMir","8e2cde74d1c8c9f5":"l3Kyn","e66581e5b123532e":"Z0pBo","5642e699c596c3cf":"6Eoyt","1a19044c7742889f":"cIK3T","c929e2406598b8d":"7jDg7","5e8dccca0283666c":"k7EbR","34b0ce9920b8209d":"ceTfg","8b5e97eab386eecb":"bNTN5","c121e906fe866123":"l5n6m","d2cc6124630ec3f8":"7AMlF","f7ab4d675fbd6ee4":"5gpdN","5950451f49003409":"hrijU","5cdd3dbd187e0c3a":"6NR6S"}],"dIGt4":[function(require,module,exports) {
var global = require("2302042baad768b1");
var getOwnPropertyDescriptor = require("c09cb562a3a29ad").f;
var createNonEnumerableProperty = require("86c5d6170a927c4e");
var defineBuiltIn = require("3f295d730e7e4715");
var defineGlobalProperty = require("569284ec11e86071");
var copyConstructorProperties = require("8fd6eca04656e97d");
var isForced = require("38d9ba455b454c62");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {});
    else target = (global[TARGET] || {}).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"2302042baad768b1":"i8HOC","c09cb562a3a29ad":"lk5NI","86c5d6170a927c4e":"8CL42","3f295d730e7e4715":"6XwEX","569284ec11e86071":"ggjnO","8fd6eca04656e97d":"9Z12i","38d9ba455b454c62":"6uTCZ"}],"i8HOC":[function(require,module,exports) {
var global = arguments[3];
var check = function(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();

},{}],"lk5NI":[function(require,module,exports) {
var DESCRIPTORS = require("3d3d1e44859fec5d");
var call = require("d3d7ed5f45c29e");
var propertyIsEnumerableModule = require("e1327f7c8ec3b887");
var createPropertyDescriptor = require("2869b4c61467e6cc");
var toIndexedObject = require("233abfe6b4671492");
var toPropertyKey = require("2071c372b7e4b32");
var hasOwn = require("4ff92461904ed3da");
var IE8_DOM_DEFINE = require("9de3813ec0d96c42");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"3d3d1e44859fec5d":"92ZIi","d3d7ed5f45c29e":"d7JlP","e1327f7c8ec3b887":"7SuiS","2869b4c61467e6cc":"1lpav","233abfe6b4671492":"jLWwQ","2071c372b7e4b32":"5XWKd","4ff92461904ed3da":"gC2Q5","9de3813ec0d96c42":"qS9uN"}],"92ZIi":[function(require,module,exports) {
var fails = require("409b206fcd44a9e7");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
});

},{"409b206fcd44a9e7":"hL6D2"}],"hL6D2":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"d7JlP":[function(require,module,exports) {
var NATIVE_BIND = require("b3c9f02f9aebd2ba");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"b3c9f02f9aebd2ba":"i16Dq"}],"i16Dq":[function(require,module,exports) {
var fails = require("c226a994f9c4f758");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});

},{"c226a994f9c4f758":"hL6D2"}],"7SuiS":[function(require,module,exports) {
"use strict";
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"1lpav":[function(require,module,exports) {
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"jLWwQ":[function(require,module,exports) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("8ca17ba78b54aaa0");
var requireObjectCoercible = require("f8afaa0816661555");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"8ca17ba78b54aaa0":"kPk5h","f8afaa0816661555":"fOR0B"}],"kPk5h":[function(require,module,exports) {
var uncurryThis = require("f7b25eca6a80c7b0");
var fails = require("f9b0bb70c41c2662");
var classof = require("bd825039b1b4057e");
var $Object = Object;
var split = uncurryThis("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) == "String" ? split(it, "") : $Object(it);
} : $Object;

},{"f7b25eca6a80c7b0":"7GlkT","f9b0bb70c41c2662":"hL6D2","bd825039b1b4057e":"bdfmm"}],"7GlkT":[function(require,module,exports) {
var NATIVE_BIND = require("17b2b63035f5484c");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"17b2b63035f5484c":"i16Dq"}],"bdfmm":[function(require,module,exports) {
var uncurryThis = require("d975f25ec47c05e4");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis("".slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"d975f25ec47c05e4":"7GlkT"}],"fOR0B":[function(require,module,exports) {
var isNullOrUndefined = require("efe1b47e464513e7");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
    return it;
};

},{"efe1b47e464513e7":"gM5ar"}],"gM5ar":[function(require,module,exports) {
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"5XWKd":[function(require,module,exports) {
var toPrimitive = require("7fac526df996124d");
var isSymbol = require("ff235e6f495a1f0b");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

},{"7fac526df996124d":"a2mK1","ff235e6f495a1f0b":"4aV4F"}],"a2mK1":[function(require,module,exports) {
var call = require("cbcb5c8fff23700e");
var isObject = require("9ef2cfa0ab3b2528");
var isSymbol = require("f6080b90d061a80f");
var getMethod = require("462c4c1536c7afdf");
var ordinaryToPrimitive = require("fdf8c66b8ea15802");
var wellKnownSymbol = require("57cfe255cd3e3639");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

},{"cbcb5c8fff23700e":"d7JlP","9ef2cfa0ab3b2528":"Z0pBo","f6080b90d061a80f":"4aV4F","462c4c1536c7afdf":"9Zfiw","fdf8c66b8ea15802":"7MME2","57cfe255cd3e3639":"gTwyA"}],"Z0pBo":[function(require,module,exports) {
var isCallable = require("6ac81e36a11917f0");
var $documentAll = require("3a86c3927794b3c5");
var documentAll = $documentAll.all;
module.exports = $documentAll.IS_HTMLDDA ? function(it) {
    return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
} : function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

},{"6ac81e36a11917f0":"l3Kyn","3a86c3927794b3c5":"5MHqB"}],"l3Kyn":[function(require,module,exports) {
var $documentAll = require("1328ffed080c5edb");
var documentAll = $documentAll.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
} : function(argument) {
    return typeof argument == "function";
};

},{"1328ffed080c5edb":"5MHqB"}],"5MHqB":[function(require,module,exports) {
var documentAll = typeof document == "object" && document.all;
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== undefined;
module.exports = {
    all: documentAll,
    IS_HTMLDDA: IS_HTMLDDA
};

},{}],"4aV4F":[function(require,module,exports) {
var getBuiltIn = require("6ba08eca1d19ea9c");
var isCallable = require("1a56df5201a604f4");
var isPrototypeOf = require("3ec39dabf849c3f0");
var USE_SYMBOL_AS_UID = require("8325920b89e58776");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"6ba08eca1d19ea9c":"6ZUSY","1a56df5201a604f4":"l3Kyn","3ec39dabf849c3f0":"3jtKQ","8325920b89e58776":"2Ye8Q"}],"6ZUSY":[function(require,module,exports) {
var global = require("3d34bf2d430458b");
var isCallable = require("68c7675f5382956e");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"3d34bf2d430458b":"i8HOC","68c7675f5382956e":"l3Kyn"}],"3jtKQ":[function(require,module,exports) {
var uncurryThis = require("be350887ecd40097");
module.exports = uncurryThis({}.isPrototypeOf);

},{"be350887ecd40097":"7GlkT"}],"2Ye8Q":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("72d8d2fc33214b2b");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

},{"72d8d2fc33214b2b":"8KyTD"}],"8KyTD":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("9a297407e9d3777");
var fails = require("b46d7f0358ff40b9");
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"9a297407e9d3777":"bjFlO","b46d7f0358ff40b9":"hL6D2"}],"bjFlO":[function(require,module,exports) {
var global = require("524e0994f939962a");
var userAgent = require("9897313d41af6a62");
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"524e0994f939962a":"i8HOC","9897313d41af6a62":"73xBt"}],"73xBt":[function(require,module,exports) {
module.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";

},{}],"9Zfiw":[function(require,module,exports) {
var aCallable = require("77a3cb1a8e11d8");
var isNullOrUndefined = require("98694eefdfd515a6");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"77a3cb1a8e11d8":"gOMir","98694eefdfd515a6":"gM5ar"}],"gOMir":[function(require,module,exports) {
var isCallable = require("f047ccb12e5779b1");
var tryToString = require("c7c5691f9d676258");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw $TypeError(tryToString(argument) + " is not a function");
};

},{"f047ccb12e5779b1":"l3Kyn","c7c5691f9d676258":"4O7d7"}],"4O7d7":[function(require,module,exports) {
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return "Object";
    }
};

},{}],"7MME2":[function(require,module,exports) {
var call = require("4b3a95ebb5563c0d");
var isCallable = require("27ca12e580299bf4");
var isObject = require("1225993e75242584");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw $TypeError("Can't convert object to primitive value");
};

},{"4b3a95ebb5563c0d":"d7JlP","27ca12e580299bf4":"l3Kyn","1225993e75242584":"Z0pBo"}],"gTwyA":[function(require,module,exports) {
var global = require("d04b50f215400142");
var shared = require("3169c2639ab6825d");
var hasOwn = require("2e14fbcc1ec14d1c");
var uid = require("8c555001e1bf6dd8");
var NATIVE_SYMBOL = require("596f81eacda2403c");
var USE_SYMBOL_AS_UID = require("2ccb5466e644adce");
var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol["for"] || Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name);
    return WellKnownSymbolsStore[name];
};

},{"d04b50f215400142":"i8HOC","3169c2639ab6825d":"i1mHK","2e14fbcc1ec14d1c":"gC2Q5","8c555001e1bf6dd8":"a3SEE","596f81eacda2403c":"8KyTD","2ccb5466e644adce":"2Ye8Q"}],"i1mHK":[function(require,module,exports) {
var IS_PURE = require("3ff72394c23f38c");
var store = require("fb24507fbd7c1a1b");
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
})("versions", []).push({
    version: "3.30.1",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE",
    source: "https://github.com/zloirock/core-js"
});

},{"3ff72394c23f38c":"5ZsyC","fb24507fbd7c1a1b":"l4ncH"}],"5ZsyC":[function(require,module,exports) {
module.exports = false;

},{}],"l4ncH":[function(require,module,exports) {
var global = require("d8caa9527398f656");
var defineGlobalProperty = require("1b7de91e605bf868");
var SHARED = "__core-js_shared__";
var store = global[SHARED] || defineGlobalProperty(SHARED, {});
module.exports = store;

},{"d8caa9527398f656":"i8HOC","1b7de91e605bf868":"ggjnO"}],"ggjnO":[function(require,module,exports) {
var global = require("9b768d9a7c86a063");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"9b768d9a7c86a063":"i8HOC"}],"gC2Q5":[function(require,module,exports) {
var uncurryThis = require("ba87a1958c17d587");
var toObject = require("61a1da2c54f0fbb2");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"ba87a1958c17d587":"7GlkT","61a1da2c54f0fbb2":"5cb35"}],"5cb35":[function(require,module,exports) {
var requireObjectCoercible = require("b621f61b0a6c017b");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"b621f61b0a6c017b":"fOR0B"}],"a3SEE":[function(require,module,exports) {
var uncurryThis = require("9d57b900a89fe70f");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

},{"9d57b900a89fe70f":"7GlkT"}],"qS9uN":[function(require,module,exports) {
var DESCRIPTORS = require("38a291e4e302998e");
var fails = require("5e9b27cca8541657");
var createElement = require("bd633bd206b82e58");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"38a291e4e302998e":"92ZIi","5e9b27cca8541657":"hL6D2","bd633bd206b82e58":"4bOHl"}],"4bOHl":[function(require,module,exports) {
var global = require("5c65668686d21360");
var isObject = require("a909720e0268a2ba");
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"5c65668686d21360":"i8HOC","a909720e0268a2ba":"Z0pBo"}],"8CL42":[function(require,module,exports) {
var DESCRIPTORS = require("c83509183e54a614");
var definePropertyModule = require("4969442e630df335");
var createPropertyDescriptor = require("974e289f276baaf4");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"c83509183e54a614":"92ZIi","4969442e630df335":"iJR4w","974e289f276baaf4":"1lpav"}],"iJR4w":[function(require,module,exports) {
var DESCRIPTORS = require("8dd267e46197c475");
var IE8_DOM_DEFINE = require("4241c3b6064201");
var V8_PROTOTYPE_DEFINE_BUG = require("58667cce45a47657");
var anObject = require("5b1241cb26545477");
var toPropertyKey = require("b11f4f8334d3f73e");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE = "configurable";
var WRITABLE = "writable";
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"8dd267e46197c475":"92ZIi","4241c3b6064201":"qS9uN","58667cce45a47657":"ka1Un","5b1241cb26545477":"4isCr","b11f4f8334d3f73e":"5XWKd"}],"ka1Un":[function(require,module,exports) {
var DESCRIPTORS = require("64a8302c5af6a034");
var fails = require("efc99ad4590a9515");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype != 42;
});

},{"64a8302c5af6a034":"92ZIi","efc99ad4590a9515":"hL6D2"}],"4isCr":[function(require,module,exports) {
var isObject = require("a4413ddcc7717f8d");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw $TypeError($String(argument) + " is not an object");
};

},{"a4413ddcc7717f8d":"Z0pBo"}],"6XwEX":[function(require,module,exports) {
var isCallable = require("befbe750d89b0d93");
var definePropertyModule = require("e8804197e41cf10b");
var makeBuiltIn = require("462501420686d9da");
var defineGlobalProperty = require("c2260193c2614c3e");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"befbe750d89b0d93":"l3Kyn","e8804197e41cf10b":"iJR4w","462501420686d9da":"cTB4k","c2260193c2614c3e":"ggjnO"}],"cTB4k":[function(require,module,exports) {
var uncurryThis = require("430f6b3cee87f161");
var fails = require("50d8d27b86783a76");
var isCallable = require("cf2365477fa5be46");
var hasOwn = require("b46c01f09665d042");
var DESCRIPTORS = require("502e579d021c3aac");
var CONFIGURABLE_FUNCTION_NAME = require("dbc8edb0e1a9184c").CONFIGURABLE;
var inspectSource = require("df1afc5741e5f379");
var InternalStateModule = require("16ae7b3208934860");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis("".slice);
var replace = uncurryThis("".replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn = module.exports = function(value, name, options) {
    if (stringSlice($String(name), 0, 7) === "Symbol(") name = "[" + replace($String(name), /^Symbol\(([^)]*)\)/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, "source")) state.source = join(TEMPLATE, typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, "toString");

},{"430f6b3cee87f161":"7GlkT","50d8d27b86783a76":"hL6D2","cf2365477fa5be46":"l3Kyn","b46c01f09665d042":"gC2Q5","502e579d021c3aac":"92ZIi","dbc8edb0e1a9184c":"l6Kgd","df1afc5741e5f379":"9jh7O","16ae7b3208934860":"7AMlF"}],"l6Kgd":[function(require,module,exports) {
var DESCRIPTORS = require("94149ac56eb71290");
var hasOwn = require("40875841f5464cb1");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"94149ac56eb71290":"92ZIi","40875841f5464cb1":"gC2Q5"}],"9jh7O":[function(require,module,exports) {
var uncurryThis = require("1cd4410b0aa8c9e3");
var isCallable = require("46f23fe54d7e56bf");
var store = require("3a0c4a18b54d3600");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"1cd4410b0aa8c9e3":"7GlkT","46f23fe54d7e56bf":"l3Kyn","3a0c4a18b54d3600":"l4ncH"}],"7AMlF":[function(require,module,exports) {
var NATIVE_WEAK_MAP = require("b7386ba18853839e");
var global = require("e1ed292957f34b7a");
var isObject = require("bca3e669e3b03247");
var createNonEnumerableProperty = require("b69868001450b007");
var hasOwn = require("3ca15103f41bb4de");
var shared = require("dbd8627a224be52");
var sharedKey = require("e6b758ba41f1605e");
var hiddenKeys = require("af31bf4f1f069e35");
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"b7386ba18853839e":"2PZTl","e1ed292957f34b7a":"i8HOC","bca3e669e3b03247":"Z0pBo","b69868001450b007":"8CL42","3ca15103f41bb4de":"gC2Q5","dbd8627a224be52":"l4ncH","e6b758ba41f1605e":"eAjGz","af31bf4f1f069e35":"661m4"}],"2PZTl":[function(require,module,exports) {
var global = require("88588d818e8600ae");
var isCallable = require("85222b1acf29316d");
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"88588d818e8600ae":"i8HOC","85222b1acf29316d":"l3Kyn"}],"eAjGz":[function(require,module,exports) {
var shared = require("af05a421df4a9a01");
var uid = require("4cad1bd72908a2e0");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"af05a421df4a9a01":"i1mHK","4cad1bd72908a2e0":"a3SEE"}],"661m4":[function(require,module,exports) {
module.exports = {};

},{}],"9Z12i":[function(require,module,exports) {
var hasOwn = require("4d25aaefad6e5742");
var ownKeys = require("ee0fdf87d40472d4");
var getOwnPropertyDescriptorModule = require("6c3a295274092a16");
var definePropertyModule = require("1c66e68919f95602");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"4d25aaefad6e5742":"gC2Q5","ee0fdf87d40472d4":"1CX1A","6c3a295274092a16":"lk5NI","1c66e68919f95602":"iJR4w"}],"1CX1A":[function(require,module,exports) {
var getBuiltIn = require("10be60e3802a2214");
var uncurryThis = require("9130658733f9670c");
var getOwnPropertyNamesModule = require("449bbe311e17d093");
var getOwnPropertySymbolsModule = require("c3c113051c10d3e0");
var anObject = require("647f903e8878c819");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"10be60e3802a2214":"6ZUSY","9130658733f9670c":"7GlkT","449bbe311e17d093":"fjY04","c3c113051c10d3e0":"4DWO3","647f903e8878c819":"4isCr"}],"fjY04":[function(require,module,exports) {
var internalObjectKeys = require("4ea122beae1b0933");
var enumBugKeys = require("194b0110e3c226f1");
var hiddenKeys = enumBugKeys.concat("length", "prototype");
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"4ea122beae1b0933":"hl5T1","194b0110e3c226f1":"9RnJm"}],"hl5T1":[function(require,module,exports) {
var uncurryThis = require("f3f6127a743b0bcc");
var hasOwn = require("8a0206b146312e1b");
var toIndexedObject = require("37aab35821fa32b7");
var indexOf = require("2d8f1debde8931c1").indexOf;
var hiddenKeys = require("4e05ac71f4b65400");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"f3f6127a743b0bcc":"7GlkT","8a0206b146312e1b":"gC2Q5","37aab35821fa32b7":"jLWwQ","2d8f1debde8931c1":"n5IsC","4e05ac71f4b65400":"661m4"}],"n5IsC":[function(require,module,exports) {
var toIndexedObject = require("32227657dcd6300b");
var toAbsoluteIndex = require("b3f2cd29cb23eeff");
var lengthOfArrayLike = require("11c75da0f97583c3");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"32227657dcd6300b":"jLWwQ","b3f2cd29cb23eeff":"5yh27","11c75da0f97583c3":"lY4mS"}],"5yh27":[function(require,module,exports) {
var toIntegerOrInfinity = require("d479d0708d3e0047");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"d479d0708d3e0047":"kLXGe"}],"kLXGe":[function(require,module,exports) {
var trunc = require("8e3231cfbcb8783a");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"8e3231cfbcb8783a":"7O8gb"}],"7O8gb":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"lY4mS":[function(require,module,exports) {
var toLength = require("a3906bde3287faf3");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"a3906bde3287faf3":"fU04N"}],"fU04N":[function(require,module,exports) {
var toIntegerOrInfinity = require("2eb1039ed35570f5");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"2eb1039ed35570f5":"kLXGe"}],"9RnJm":[function(require,module,exports) {
// IE8- don't enum bug keys
module.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];

},{}],"4DWO3":[function(require,module,exports) {
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"6uTCZ":[function(require,module,exports) {
var fails = require("4f0d1da98d504604");
var isCallable = require("18a2b2dc969c1744");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
module.exports = isForced;

},{"4f0d1da98d504604":"hL6D2","18a2b2dc969c1744":"l3Kyn"}],"2Jcp4":[function(require,module,exports) {
var process = require("a918399afb2f2bef");
var classof = require("d07b39e31a776859");
module.exports = typeof process != "undefined" && classof(process) == "process";

},{"a918399afb2f2bef":"d5jf4","d07b39e31a776859":"bdfmm"}],"2EnFi":[function(require,module,exports) {
/* eslint-disable no-proto -- safe */ var uncurryThisAccessor = require("41d392e0193dfd1");
var anObject = require("53c983bbda6af22");
var aPossiblePrototype = require("79e5329b1e07cc31");
// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
        setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
        setter(test, []);
        CORRECT_SETTER = test instanceof Array;
    } catch (error) {}
    return function setPrototypeOf(O, proto) {
        anObject(O);
        aPossiblePrototype(proto);
        if (CORRECT_SETTER) setter(O, proto);
        else O.__proto__ = proto;
        return O;
    };
}() : undefined);

},{"41d392e0193dfd1":"a0huE","53c983bbda6af22":"4isCr","79e5329b1e07cc31":"5X5vY"}],"a0huE":[function(require,module,exports) {
var uncurryThis = require("26e9cb02b005bd04");
var aCallable = require("2eaa1c124fd35f4f");
module.exports = function(object, key, method) {
    try {
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) {}
};

},{"26e9cb02b005bd04":"7GlkT","2eaa1c124fd35f4f":"gOMir"}],"5X5vY":[function(require,module,exports) {
var isCallable = require("94f3662e2d2833a1");
var $String = String;
var $TypeError = TypeError;
module.exports = function(argument) {
    if (typeof argument == "object" || isCallable(argument)) return argument;
    throw $TypeError("Can't set " + $String(argument) + " as a prototype");
};

},{"94f3662e2d2833a1":"l3Kyn"}],"ffT5i":[function(require,module,exports) {
var defineProperty = require("d3ade8dabbc6871").f;
var hasOwn = require("5f5b52e2f8c81173");
var wellKnownSymbol = require("5e6ab35e7241b449");
var TO_STRING_TAG = wellKnownSymbol("toStringTag");
module.exports = function(target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwn(target, TO_STRING_TAG)) defineProperty(target, TO_STRING_TAG, {
        configurable: true,
        value: TAG
    });
};

},{"d3ade8dabbc6871":"iJR4w","5f5b52e2f8c81173":"gC2Q5","5e6ab35e7241b449":"gTwyA"}],"5UUiu":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("8ec8b4d06422b8be");
var defineBuiltInAccessor = require("4859f1a92b136899");
var wellKnownSymbol = require("603abafb0d72926f");
var DESCRIPTORS = require("30d9eaa7b6c74f7c");
var SPECIES = wellKnownSymbol("species");
module.exports = function(CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) defineBuiltInAccessor(Constructor, SPECIES, {
        configurable: true,
        get: function() {
            return this;
        }
    });
};

},{"8ec8b4d06422b8be":"6ZUSY","4859f1a92b136899":"592rH","603abafb0d72926f":"gTwyA","30d9eaa7b6c74f7c":"92ZIi"}],"592rH":[function(require,module,exports) {
var makeBuiltIn = require("35184256158a0403");
var defineProperty = require("36729bf1c0936e01");
module.exports = function(target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, {
        getter: true
    });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, {
        setter: true
    });
    return defineProperty.f(target, name, descriptor);
};

},{"35184256158a0403":"cTB4k","36729bf1c0936e01":"iJR4w"}],"6Eoyt":[function(require,module,exports) {
var isPrototypeOf = require("381cfbdc3db15d63");
var $TypeError = TypeError;
module.exports = function(it, Prototype) {
    if (isPrototypeOf(Prototype, it)) return it;
    throw $TypeError("Incorrect invocation");
};

},{"381cfbdc3db15d63":"3jtKQ"}],"cIK3T":[function(require,module,exports) {
var anObject = require("bffbe69b5959d825");
var aConstructor = require("255860e66fe66cd1");
var isNullOrUndefined = require("d330b50cf0aa525b");
var wellKnownSymbol = require("3381098e66942915");
var SPECIES = wellKnownSymbol("species");
// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function(O, defaultConstructor) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
};

},{"bffbe69b5959d825":"4isCr","255860e66fe66cd1":"laU2E","d330b50cf0aa525b":"gM5ar","3381098e66942915":"gTwyA"}],"laU2E":[function(require,module,exports) {
var isConstructor = require("3148b5d7b344ff8d");
var tryToString = require("40e7697adfcca5e");
var $TypeError = TypeError;
// `Assert: IsConstructor(argument) is true`
module.exports = function(argument) {
    if (isConstructor(argument)) return argument;
    throw $TypeError(tryToString(argument) + " is not a constructor");
};

},{"3148b5d7b344ff8d":"iVgSy","40e7697adfcca5e":"4O7d7"}],"iVgSy":[function(require,module,exports) {
var uncurryThis = require("1e64a77d36f9364e");
var fails = require("c173b99e028572bf");
var isCallable = require("605e64a60acf838a");
var classof = require("523b94114e347ad0");
var getBuiltIn = require("73f1ef2ed9bdf166");
var inspectSource = require("28a548e4030f5871");
var noop = function() {};
var empty = [];
var construct = getBuiltIn("Reflect", "construct");
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
var isConstructorModern = function isConstructor(argument) {
    if (!isCallable(argument)) return false;
    try {
        construct(noop, empty, argument);
        return true;
    } catch (error) {
        return false;
    }
};
var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable(argument)) return false;
    switch(classof(argument)){
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
            return false;
    }
    try {
        // we can't check .prototype since constructors produced by .bind haven't it
        // `Function#toString` throws on some built-it function in some legacy engines
        // (for example, `DOMQuad` and similar in FF41-)
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
    } catch (error) {
        return true;
    }
};
isConstructorLegacy.sham = true;
// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function() {
    var called;
    return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
        called = true;
    }) || called;
}) ? isConstructorLegacy : isConstructorModern;

},{"1e64a77d36f9364e":"7GlkT","c173b99e028572bf":"hL6D2","605e64a60acf838a":"l3Kyn","523b94114e347ad0":"dKT7A","73f1ef2ed9bdf166":"6ZUSY","28a548e4030f5871":"9jh7O"}],"dKT7A":[function(require,module,exports) {
var TO_STRING_TAG_SUPPORT = require("c919b2ad733e6c8f");
var isCallable = require("89cda61450c59b3d");
var classofRaw = require("b344cdf7a96a53a8");
var wellKnownSymbol = require("315e52a306524203");
var TO_STRING_TAG = wellKnownSymbol("toStringTag");
var $Object = Object;
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function() {
    return arguments;
}()) == "Arguments";
// fallback for IE11 Script Access Denied error
var tryGet = function(it, key) {
    try {
        return it[key];
    } catch (error) {}
};
// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
    var O, tag, result;
    return it === undefined ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && isCallable(O.callee) ? "Arguments" : result;
};

},{"c919b2ad733e6c8f":"3Do6Z","89cda61450c59b3d":"l3Kyn","b344cdf7a96a53a8":"bdfmm","315e52a306524203":"gTwyA"}],"3Do6Z":[function(require,module,exports) {
var wellKnownSymbol = require("b7bf3e08e0fbc51f");
var TO_STRING_TAG = wellKnownSymbol("toStringTag");
var test = {};
test[TO_STRING_TAG] = "z";
module.exports = String(test) === "[object z]";

},{"b7bf3e08e0fbc51f":"gTwyA"}],"7jDg7":[function(require,module,exports) {
var global = require("ccfc925ec602b184");
var apply = require("e85c33c97ce4170f");
var bind = require("13893e3e79446cbb");
var isCallable = require("bde8c200f0194f6a");
var hasOwn = require("feb38dd04f14a881");
var fails = require("1d2c827ad2ee09d5");
var html = require("5342b3e482147607");
var arraySlice = require("ea8f66419be9a990");
var createElement = require("99edd4a958b0a83a");
var validateArgumentsLength = require("efcfba23c351f4af");
var IS_IOS = require("ceb97aec4b0c9747");
var IS_NODE = require("25bd11c2302030bf");
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location, defer, channel, port;
fails(function() {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global.location;
});
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var eventListener = function(event) {
    run(event.data);
};
var globalPostMessageDefer = function(id) {
    // old engines have not location.origin
    global.postMessage(String(id), $location.protocol + "//" + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = eventListener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && $location && $location.protocol !== "file:" && !fails(globalPostMessageDefer)) {
        defer = globalPostMessageDefer;
        global.addEventListener("message", eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"ccfc925ec602b184":"i8HOC","e85c33c97ce4170f":"148ka","13893e3e79446cbb":"7vpmS","bde8c200f0194f6a":"l3Kyn","feb38dd04f14a881":"gC2Q5","1d2c827ad2ee09d5":"hL6D2","5342b3e482147607":"2pze4","ea8f66419be9a990":"RsFXo","99edd4a958b0a83a":"4bOHl","efcfba23c351f4af":"b9O3D","ceb97aec4b0c9747":"bzGah","25bd11c2302030bf":"2Jcp4"}],"148ka":[function(require,module,exports) {
var NATIVE_BIND = require("77b7055f46f90b88");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"77b7055f46f90b88":"i16Dq"}],"7vpmS":[function(require,module,exports) {
var uncurryThis = require("56420d12f4416bcb");
var aCallable = require("7845c86b6b84151c");
var NATIVE_BIND = require("2257fc5081eb4b34");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"56420d12f4416bcb":"5Hioa","7845c86b6b84151c":"gOMir","2257fc5081eb4b34":"i16Dq"}],"5Hioa":[function(require,module,exports) {
var classofRaw = require("ed5d6ee33fb96e89");
var uncurryThis = require("490541f84b22342f");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === "Function") return uncurryThis(fn);
};

},{"ed5d6ee33fb96e89":"bdfmm","490541f84b22342f":"7GlkT"}],"2pze4":[function(require,module,exports) {
var getBuiltIn = require("c1a956252f70eb97");
module.exports = getBuiltIn("document", "documentElement");

},{"c1a956252f70eb97":"6ZUSY"}],"RsFXo":[function(require,module,exports) {
var uncurryThis = require("1fec09aa514fd490");
module.exports = uncurryThis([].slice);

},{"1fec09aa514fd490":"7GlkT"}],"b9O3D":[function(require,module,exports) {
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw $TypeError("Not enough arguments");
    return passed;
};

},{}],"bzGah":[function(require,module,exports) {
var userAgent = require("7ab3f8dc7fcc9be9");
// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"7ab3f8dc7fcc9be9":"73xBt"}],"k7EbR":[function(require,module,exports) {
var global = require("927371760ecf5f8a");
var bind = require("21375c396863bee2");
var getOwnPropertyDescriptor = require("f2c24eefd1d7c52d").f;
var macrotask = require("990a55761ee0adf7").set;
var Queue = require("bc63a959b1f69872");
var IS_IOS = require("827f32120a13e341");
var IS_IOS_PEBBLE = require("c6b1c448fa8ebcb2");
var IS_WEBOS_WEBKIT = require("5226bed451b3280e");
var IS_NODE = require("6ff21700d70a28d1");
var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, "queueMicrotask");
var microtask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var notify, toggle, node, promise, then;
// modern engines have queueMicrotask method
if (!microtask) {
    var queue = new Queue();
    var flush = function() {
        var parent, fn;
        if (IS_NODE && (parent = process.domain)) parent.exit();
        while(fn = queue.get())try {
            fn();
        } catch (error) {
            if (queue.head) notify();
            throw error;
        }
        if (parent) parent.enter();
    };
    // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
    if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
        toggle = true;
        node = document.createTextNode("");
        new MutationObserver(flush).observe(node, {
            characterData: true
        });
        notify = function() {
            node.data = toggle = !toggle;
        };
    // environments with maybe non-completely correct, but existent Promise
    } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
        // Promise.resolve without an argument throws an error in LG WebOS 2
        promise = Promise.resolve(undefined);
        // workaround of WebKit ~ iOS Safari 10.1 bug
        promise.constructor = Promise;
        then = bind(promise.then, promise);
        notify = function() {
            then(flush);
        };
    // Node.js without promises
    } else if (IS_NODE) notify = function() {
        process.nextTick(flush);
    };
    else {
        // `webpack` dev server bug on IE global methods - use bind(fn, global)
        macrotask = bind(macrotask, global);
        notify = function() {
            macrotask(flush);
        };
    }
    microtask = function(fn) {
        if (!queue.head) notify();
        queue.add(fn);
    };
}
module.exports = microtask;

},{"927371760ecf5f8a":"i8HOC","21375c396863bee2":"7vpmS","f2c24eefd1d7c52d":"lk5NI","990a55761ee0adf7":"7jDg7","bc63a959b1f69872":"l5n6m","827f32120a13e341":"bzGah","c6b1c448fa8ebcb2":"3vcSK","5226bed451b3280e":"hNkGY","6ff21700d70a28d1":"2Jcp4"}],"l5n6m":[function(require,module,exports) {
var Queue = function() {
    this.head = null;
    this.tail = null;
};
Queue.prototype = {
    add: function(item) {
        var entry = {
            item: item,
            next: null
        };
        var tail = this.tail;
        if (tail) tail.next = entry;
        else this.head = entry;
        this.tail = entry;
    },
    get: function() {
        var entry = this.head;
        if (entry) {
            var next = this.head = entry.next;
            if (next === null) this.tail = null;
            return entry.item;
        }
    }
};
module.exports = Queue;

},{}],"3vcSK":[function(require,module,exports) {
var userAgent = require("3959b690b53a59c5");
module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != "undefined";

},{"3959b690b53a59c5":"73xBt"}],"hNkGY":[function(require,module,exports) {
var userAgent = require("2221d6fe717bbbb1");
module.exports = /web0s(?!.*chrome)/i.test(userAgent);

},{"2221d6fe717bbbb1":"73xBt"}],"ceTfg":[function(require,module,exports) {
module.exports = function(a, b) {
    try {
        // eslint-disable-next-line no-console -- safe
        arguments.length == 1 ? console.error(a) : console.error(a, b);
    } catch (error) {}
};

},{}],"bNTN5":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return {
            error: false,
            value: exec()
        };
    } catch (error) {
        return {
            error: true,
            value: error
        };
    }
};

},{}],"5gpdN":[function(require,module,exports) {
var global = require("c986fe1bc30233c6");
module.exports = global.Promise;

},{"c986fe1bc30233c6":"i8HOC"}],"hrijU":[function(require,module,exports) {
var global = require("ee39fc9ecefa48c0");
var NativePromiseConstructor = require("7a77ac1f5d828fed");
var isCallable = require("e73cef9d5f26ff26");
var isForced = require("490f38d0208c33b2");
var inspectSource = require("ad5ba73d709584a8");
var wellKnownSymbol = require("4da112fb42aa1c44");
var IS_BROWSER = require("dd23e94167448bcc");
var IS_DENO = require("7be7eba09582e7b8");
var IS_PURE = require("f1c05696b0f76425");
var V8_VERSION = require("904bdc146a25ce07");
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var SPECIES = wellKnownSymbol("species");
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);
var FORCED_PROMISE_CONSTRUCTOR = isForced("Promise", function() {
    var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
    var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
    // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
    if (IS_PURE && !(NativePromisePrototype["catch"] && NativePromisePrototype["finally"])) return true;
    // We can't use @@species feature detection in V8 since it causes
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679
    if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
        // Detect correctness of subclassing with @@species support
        var promise = new NativePromiseConstructor(function(resolve) {
            resolve(1);
        });
        var FakePromise = function(exec) {
            exec(function() {}, function() {});
        };
        var constructor = promise.constructor = {};
        constructor[SPECIES] = FakePromise;
        SUBCLASSING = promise.then(function() {}) instanceof FakePromise;
        if (!SUBCLASSING) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    }
    return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT;
});
module.exports = {
    CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
    REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
    SUBCLASSING: SUBCLASSING
};

},{"ee39fc9ecefa48c0":"i8HOC","7a77ac1f5d828fed":"5gpdN","e73cef9d5f26ff26":"l3Kyn","490f38d0208c33b2":"6uTCZ","ad5ba73d709584a8":"9jh7O","4da112fb42aa1c44":"gTwyA","dd23e94167448bcc":"kbn7u","7be7eba09582e7b8":"f6yKb","f1c05696b0f76425":"5ZsyC","904bdc146a25ce07":"bjFlO"}],"kbn7u":[function(require,module,exports) {
var IS_DENO = require("92013902d141b15f");
var IS_NODE = require("83af1a1f9cccb2b0");
module.exports = !IS_DENO && !IS_NODE && typeof window == "object" && typeof document == "object";

},{"92013902d141b15f":"f6yKb","83af1a1f9cccb2b0":"2Jcp4"}],"f6yKb":[function(require,module,exports) {
/* global Deno -- Deno case */ module.exports = typeof Deno == "object" && Deno && typeof Deno.version == "object";

},{}],"6NR6S":[function(require,module,exports) {
"use strict";
var aCallable = require("74ae6e537abeb7a");
var $TypeError = TypeError;
var PromiseCapability = function(C) {
    var resolve, reject;
    this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw $TypeError("Bad Promise constructor");
        resolve = $$resolve;
        reject = $$reject;
    });
    this.resolve = aCallable(resolve);
    this.reject = aCallable(reject);
};
// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function(C) {
    return new PromiseCapability(C);
};

},{"74ae6e537abeb7a":"gOMir"}],"15vbo":[function(require,module,exports) {
"use strict";
var $ = require("f107ff30d4572433");
var call = require("e86db2a985b04393");
var aCallable = require("34f234ef54d1d35a");
var newPromiseCapabilityModule = require("4fb07755188526e7");
var perform = require("d26841f1deb92ed2");
var iterate = require("6d667abf350318e4");
var PROMISE_STATICS_INCORRECT_ITERATION = require("dc942f80d2229a56");
// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$({
    target: "Promise",
    stat: true,
    forced: PROMISE_STATICS_INCORRECT_ITERATION
}, {
    all: function all(iterable) {
        var C = this;
        var capability = newPromiseCapabilityModule.f(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
            var $promiseResolve = aCallable(C.resolve);
            var values = [];
            var counter = 0;
            var remaining = 1;
            iterate(iterable, function(promise) {
                var index = counter++;
                var alreadyCalled = false;
                remaining++;
                call($promiseResolve, C, promise).then(function(value) {
                    if (alreadyCalled) return;
                    alreadyCalled = true;
                    values[index] = value;
                    --remaining || resolve(values);
                }, reject);
            });
            --remaining || resolve(values);
        });
        if (result.error) reject(result.value);
        return capability.promise;
    }
});

},{"f107ff30d4572433":"dIGt4","e86db2a985b04393":"d7JlP","34f234ef54d1d35a":"gOMir","4fb07755188526e7":"6NR6S","d26841f1deb92ed2":"bNTN5","6d667abf350318e4":"4OXGm","dc942f80d2229a56":"87LO2"}],"4OXGm":[function(require,module,exports) {
var bind = require("a22faa73efa50ec0");
var call = require("f961ea54e4e12098");
var anObject = require("514a3126506766bd");
var tryToString = require("4e3a981a19e68e10");
var isArrayIteratorMethod = require("82ac8ca87574edc6");
var lengthOfArrayLike = require("c039a0933379529d");
var isPrototypeOf = require("7e597b37777ffde4");
var getIterator = require("a7eb8abe23fec97a");
var getIteratorMethod = require("fdca3ac6086e5aa5");
var iteratorClose = require("6b16e46c44b70922");
var $TypeError = TypeError;
var Result = function(stopped, result) {
    this.stopped = stopped;
    this.result = result;
};
var ResultPrototype = Result.prototype;
module.exports = function(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_RECORD = !!(options && options.IS_RECORD);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;
    var stop = function(condition) {
        if (iterator) iteratorClose(iterator, "normal", condition);
        return new Result(true, condition);
    };
    var callFn = function(value) {
        if (AS_ENTRIES) {
            anObject(value);
            return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }
        return INTERRUPTED ? fn(value, stop) : fn(value);
    };
    if (IS_RECORD) iterator = iterable.iterator;
    else if (IS_ITERATOR) iterator = iterable;
    else {
        iterFn = getIteratorMethod(iterable);
        if (!iterFn) throw $TypeError(tryToString(iterable) + " is not iterable");
        // optimisation for array iterators
        if (isArrayIteratorMethod(iterFn)) {
            for(index = 0, length = lengthOfArrayLike(iterable); length > index; index++){
                result = callFn(iterable[index]);
                if (result && isPrototypeOf(ResultPrototype, result)) return result;
            }
            return new Result(false);
        }
        iterator = getIterator(iterable, iterFn);
    }
    next = IS_RECORD ? iterable.next : iterator.next;
    while(!(step = call(next, iterator)).done){
        try {
            result = callFn(step.value);
        } catch (error) {
            iteratorClose(iterator, "throw", error);
        }
        if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
    }
    return new Result(false);
};

},{"a22faa73efa50ec0":"7vpmS","f961ea54e4e12098":"d7JlP","514a3126506766bd":"4isCr","4e3a981a19e68e10":"4O7d7","82ac8ca87574edc6":"l33Z9","c039a0933379529d":"lY4mS","7e597b37777ffde4":"3jtKQ","a7eb8abe23fec97a":"hjwee","fdca3ac6086e5aa5":"d8BiC","6b16e46c44b70922":"hs7nW"}],"l33Z9":[function(require,module,exports) {
var wellKnownSymbol = require("11d815d38a177640");
var Iterators = require("57a7c46722cc8a53");
var ITERATOR = wellKnownSymbol("iterator");
var ArrayPrototype = Array.prototype;
// check on default Array iterator
module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

},{"11d815d38a177640":"gTwyA","57a7c46722cc8a53":"30XHR"}],"30XHR":[function(require,module,exports) {
module.exports = {};

},{}],"hjwee":[function(require,module,exports) {
var call = require("23c7745a41686078");
var aCallable = require("358ba80fe5dc0f72");
var anObject = require("e7e3d1b628712524");
var tryToString = require("50ed73c8ccd8365d");
var getIteratorMethod = require("53d1b9f19f09c180");
var $TypeError = TypeError;
module.exports = function(argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
    if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
    throw $TypeError(tryToString(argument) + " is not iterable");
};

},{"23c7745a41686078":"d7JlP","358ba80fe5dc0f72":"gOMir","e7e3d1b628712524":"4isCr","50ed73c8ccd8365d":"4O7d7","53d1b9f19f09c180":"d8BiC"}],"d8BiC":[function(require,module,exports) {
var classof = require("14a46afd8f84590e");
var getMethod = require("a0b0b184d4ec0072");
var isNullOrUndefined = require("fdb92559aae2b812");
var Iterators = require("c03a3d411a99a04a");
var wellKnownSymbol = require("31f3abaa213b6c82");
var ITERATOR = wellKnownSymbol("iterator");
module.exports = function(it) {
    if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
};

},{"14a46afd8f84590e":"dKT7A","a0b0b184d4ec0072":"9Zfiw","fdb92559aae2b812":"gM5ar","c03a3d411a99a04a":"30XHR","31f3abaa213b6c82":"gTwyA"}],"hs7nW":[function(require,module,exports) {
var call = require("fb1055a757a79039");
var anObject = require("17f6e7e0aab8fa02");
var getMethod = require("fdc966dca415caf9");
module.exports = function(iterator, kind, value) {
    var innerResult, innerError;
    anObject(iterator);
    try {
        innerResult = getMethod(iterator, "return");
        if (!innerResult) {
            if (kind === "throw") throw value;
            return value;
        }
        innerResult = call(innerResult, iterator);
    } catch (error) {
        innerError = true;
        innerResult = error;
    }
    if (kind === "throw") throw value;
    if (innerError) throw innerResult;
    anObject(innerResult);
    return value;
};

},{"fb1055a757a79039":"d7JlP","17f6e7e0aab8fa02":"4isCr","fdc966dca415caf9":"9Zfiw"}],"87LO2":[function(require,module,exports) {
var NativePromiseConstructor = require("b6794d7b53ae39ae");
var checkCorrectnessOfIteration = require("c1710a3c347173e0");
var FORCED_PROMISE_CONSTRUCTOR = require("5586f927632eb0e7").CONSTRUCTOR;
module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function(iterable) {
    NativePromiseConstructor.all(iterable).then(undefined, function() {});
});

},{"b6794d7b53ae39ae":"5gpdN","c1710a3c347173e0":"a6bt4","5586f927632eb0e7":"hrijU"}],"a6bt4":[function(require,module,exports) {
var wellKnownSymbol = require("c77dd8b4f9f74e39");
var ITERATOR = wellKnownSymbol("iterator");
var SAFE_CLOSING = false;
try {
    var called = 0;
    var iteratorWithReturn = {
        next: function() {
            return {
                done: !!called++
            };
        },
        "return": function() {
            SAFE_CLOSING = true;
        }
    };
    iteratorWithReturn[ITERATOR] = function() {
        return this;
    };
    // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function() {
        throw 2;
    });
} catch (error) {}
module.exports = function(exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
        var object = {};
        object[ITERATOR] = function() {
            return {
                next: function() {
                    return {
                        done: ITERATION_SUPPORT = true
                    };
                }
            };
        };
        exec(object);
    } catch (error) {}
    return ITERATION_SUPPORT;
};

},{"c77dd8b4f9f74e39":"gTwyA"}],"3Vol0":[function(require,module,exports) {
"use strict";
var $ = require("57de1ad7e10d3737");
var IS_PURE = require("b2f618c495321e1c");
var FORCED_PROMISE_CONSTRUCTOR = require("590f551c66b8ae26").CONSTRUCTOR;
var NativePromiseConstructor = require("45254109a05fb483");
var getBuiltIn = require("fec7f1113c6acb34");
var isCallable = require("70b51cfc07ea4846");
var defineBuiltIn = require("e6409a21bf762c98");
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$({
    target: "Promise",
    proto: true,
    forced: FORCED_PROMISE_CONSTRUCTOR,
    real: true
}, {
    "catch": function(onRejected) {
        return this.then(undefined, onRejected);
    }
});
// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
    var method = getBuiltIn("Promise").prototype["catch"];
    if (NativePromisePrototype["catch"] !== method) defineBuiltIn(NativePromisePrototype, "catch", method, {
        unsafe: true
    });
}

},{"57de1ad7e10d3737":"dIGt4","b2f618c495321e1c":"5ZsyC","590f551c66b8ae26":"hrijU","45254109a05fb483":"5gpdN","fec7f1113c6acb34":"6ZUSY","70b51cfc07ea4846":"l3Kyn","e6409a21bf762c98":"6XwEX"}],"bayjl":[function(require,module,exports) {
"use strict";
var $ = require("fc87efe5b2570571");
var call = require("6b5ec6790a3dea43");
var aCallable = require("f97de10414fa9d72");
var newPromiseCapabilityModule = require("edda8295926a7b8d");
var perform = require("d334f2e7f80e334b");
var iterate = require("7b5061b1f26bcb02");
var PROMISE_STATICS_INCORRECT_ITERATION = require("65e601bb031cd649");
// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$({
    target: "Promise",
    stat: true,
    forced: PROMISE_STATICS_INCORRECT_ITERATION
}, {
    race: function race(iterable) {
        var C = this;
        var capability = newPromiseCapabilityModule.f(C);
        var reject = capability.reject;
        var result = perform(function() {
            var $promiseResolve = aCallable(C.resolve);
            iterate(iterable, function(promise) {
                call($promiseResolve, C, promise).then(capability.resolve, reject);
            });
        });
        if (result.error) reject(result.value);
        return capability.promise;
    }
});

},{"fc87efe5b2570571":"dIGt4","6b5ec6790a3dea43":"d7JlP","f97de10414fa9d72":"gOMir","edda8295926a7b8d":"6NR6S","d334f2e7f80e334b":"bNTN5","7b5061b1f26bcb02":"4OXGm","65e601bb031cd649":"87LO2"}],"2ZtJk":[function(require,module,exports) {
"use strict";
var $ = require("99df6cf00dd95953");
var call = require("d5f3eaea277bdf25");
var newPromiseCapabilityModule = require("77bdce71519a0716");
var FORCED_PROMISE_CONSTRUCTOR = require("6e71ae267ed5f0b0").CONSTRUCTOR;
// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$({
    target: "Promise",
    stat: true,
    forced: FORCED_PROMISE_CONSTRUCTOR
}, {
    reject: function reject(r) {
        var capability = newPromiseCapabilityModule.f(this);
        call(capability.reject, undefined, r);
        return capability.promise;
    }
});

},{"99df6cf00dd95953":"dIGt4","d5f3eaea277bdf25":"d7JlP","77bdce71519a0716":"6NR6S","6e71ae267ed5f0b0":"hrijU"}],"7LyMi":[function(require,module,exports) {
"use strict";
var $ = require("3470935e218fe3e1");
var getBuiltIn = require("d093f3c88bb26cb5");
var IS_PURE = require("957738736275fadd");
var NativePromiseConstructor = require("fdb3ef5cdd0d6109");
var FORCED_PROMISE_CONSTRUCTOR = require("1cb2287408e841de").CONSTRUCTOR;
var promiseResolve = require("5215a8f461ce3aad");
var PromiseConstructorWrapper = getBuiltIn("Promise");
var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;
// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$({
    target: "Promise",
    stat: true,
    forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR
}, {
    resolve: function resolve(x) {
        return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
    }
});

},{"3470935e218fe3e1":"dIGt4","d093f3c88bb26cb5":"6ZUSY","957738736275fadd":"5ZsyC","fdb3ef5cdd0d6109":"5gpdN","1cb2287408e841de":"hrijU","5215a8f461ce3aad":"42FWx"}],"42FWx":[function(require,module,exports) {
var anObject = require("6f6758d4d911bda0");
var isObject = require("e1142dd2f90a1a76");
var newPromiseCapability = require("e29fae3ebe2b2559");
module.exports = function(C, x) {
    anObject(C);
    if (isObject(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
};

},{"6f6758d4d911bda0":"4isCr","e1142dd2f90a1a76":"Z0pBo","e29fae3ebe2b2559":"6NR6S"}],"jxKg8":[function(require,module,exports) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"dhI0U":[function(require,module,exports) {
"use strict";
var call = require("ec6289a673cecdb2");
var fixRegExpWellKnownSymbolLogic = require("aa0047e8b364cdd6");
var anObject = require("1d841e8e56acf8f4");
var isNullOrUndefined = require("f37a333dbdb0ede6");
var toLength = require("6572ba119e8ebb00");
var toString = require("b4fa0ca723b5a5a2");
var requireObjectCoercible = require("df664c078808d15b");
var getMethod = require("73368987320833c0");
var advanceStringIndex = require("75f08ef4809b1da3");
var regExpExec = require("cff557cf1273acc0");
// @@match logic
fixRegExpWellKnownSymbolLogic("match", function(MATCH, nativeMatch, maybeCallNative) {
    return [
        // `String.prototype.match` method
        // https://tc39.es/ecma262/#sec-string.prototype.match
        function match(regexp) {
            var O = requireObjectCoercible(this);
            var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
            return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
        },
        // `RegExp.prototype[@@match]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
        function(string) {
            var rx = anObject(this);
            var S = toString(string);
            var res = maybeCallNative(nativeMatch, rx, S);
            if (res.done) return res.value;
            if (!rx.global) return regExpExec(rx, S);
            var fullUnicode = rx.unicode;
            rx.lastIndex = 0;
            var A = [];
            var n = 0;
            var result;
            while((result = regExpExec(rx, S)) !== null){
                var matchStr = toString(result[0]);
                A[n] = matchStr;
                if (matchStr === "") rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                n++;
            }
            return n === 0 ? null : A;
        }
    ];
});

},{"ec6289a673cecdb2":"d7JlP","aa0047e8b364cdd6":"82MZ8","1d841e8e56acf8f4":"4isCr","f37a333dbdb0ede6":"gM5ar","6572ba119e8ebb00":"fU04N","b4fa0ca723b5a5a2":"a1yl4","df664c078808d15b":"fOR0B","73368987320833c0":"9Zfiw","75f08ef4809b1da3":"hEviL","cff557cf1273acc0":"5jYjC"}],"82MZ8":[function(require,module,exports) {
"use strict";
// TODO: Remove from `core-js@4` since it's moved to entry points
require("fa7ef54d64f4ecc4");
var uncurryThis = require("c09b4e524ffc3c31");
var defineBuiltIn = require("be347e5e447f8712");
var regexpExec = require("8684b7f39dad6e21");
var fails = require("60dd7d935d29af1b");
var wellKnownSymbol = require("3dc4ec0e042d9d17");
var createNonEnumerableProperty = require("f23d4211e14584aa");
var SPECIES = wellKnownSymbol("species");
var RegExpPrototype = RegExp.prototype;
module.exports = function(KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol(KEY);
    var DELEGATES_TO_SYMBOL = !fails(function() {
        // String methods call symbol-named RegEp methods
        var O = {};
        O[SYMBOL] = function() {
            return 7;
        };
        return ""[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function() {
        // Symbol-named RegExp methods call .exec
        var execCalled = false;
        var re = /a/;
        if (KEY === "split") {
            // We can't use real regex here since it causes deoptimization
            // and serious performance degradation in V8
            // https://github.com/zloirock/core-js/issues/306
            re = {};
            // RegExp[@@split] doesn't call the regex's exec method, but first creates
            // a new one. We need to return the patched regex when creating the new one.
            re.constructor = {};
            re.constructor[SPECIES] = function() {
                return re;
            };
            re.flags = "";
            re[SYMBOL] = /./[SYMBOL];
        }
        re.exec = function() {
            execCalled = true;
            return null;
        };
        re[SYMBOL]("");
        return !execCalled;
    });
    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
        var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
        var methods = exec(SYMBOL, ""[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
            var uncurriedNativeMethod = uncurryThis(nativeMethod);
            var $exec = regexp.exec;
            if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
                if (DELEGATES_TO_SYMBOL && !forceStringMethod) // The native String method already delegates to @@method (this
                // polyfilled function), leasing to infinite recursion.
                // We avoid it by directly calling the native @@method method.
                return {
                    done: true,
                    value: uncurriedNativeRegExpMethod(regexp, str, arg2)
                };
                return {
                    done: true,
                    value: uncurriedNativeMethod(str, regexp, arg2)
                };
            }
            return {
                done: false
            };
        });
        defineBuiltIn(String.prototype, KEY, methods[0]);
        defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
    }
    if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], "sham", true);
};

},{"fa7ef54d64f4ecc4":"pNALB","c09b4e524ffc3c31":"5Hioa","be347e5e447f8712":"6XwEX","8684b7f39dad6e21":"1iqnJ","60dd7d935d29af1b":"hL6D2","3dc4ec0e042d9d17":"gTwyA","f23d4211e14584aa":"8CL42"}],"pNALB":[function(require,module,exports) {
"use strict";
var $ = require("982dc43aa050d7ba");
var exec = require("5c7f7aa75f677a18");
// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({
    target: "RegExp",
    proto: true,
    forced: /./.exec !== exec
}, {
    exec: exec
});

},{"982dc43aa050d7ba":"dIGt4","5c7f7aa75f677a18":"1iqnJ"}],"1iqnJ":[function(require,module,exports) {
"use strict";
/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */ /* eslint-disable regexp/no-useless-quantifier -- testing */ var call = require("2b53377f3b13ff5e");
var uncurryThis = require("ac1e52312699cab7");
var toString = require("dd9d11603b402fbc");
var regexpFlags = require("9a931f1fee5c01aa");
var stickyHelpers = require("b521ee18f63a6a6f");
var shared = require("875123b958baed2d");
var create = require("1dbcd8412a9d3da");
var getInternalState = require("75c3d37058f38b26").get;
var UNSUPPORTED_DOT_ALL = require("3390abba4fd4df8f");
var UNSUPPORTED_NCG = require("3b362e93540a285c");
var nativeReplace = shared("native-string-replace", String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis("".charAt);
var indexOf = uncurryThis("".indexOf);
var replace = uncurryThis("".replace);
var stringSlice = uncurryThis("".slice);
var UPDATES_LAST_INDEX_WRONG = function() {
    var re1 = /a/;
    var re2 = /b*/g;
    call(nativeExec, re1, "a");
    call(nativeExec, re2, "a");
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();
var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;
// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec("")[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;
if (PATCH) patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;
    if (raw) {
        raw.lastIndex = re.lastIndex;
        result = call(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
    }
    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;
    if (sticky) {
        flags = replace(flags, "y", "");
        if (indexOf(flags, "g") === -1) flags += "g";
        strCopy = stringSlice(str, re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== "\n")) {
            source = "(?: " + source + ")";
            strCopy = " " + strCopy;
            charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp("^(?:" + source + ")", flags);
    }
    if (NPCG_INCLUDED) reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match = call(nativeExec, sticky ? reCopy : re, strCopy);
    if (sticky) {
        if (match) {
            match.input = stringSlice(match.input, charsAdded);
            match[0] = stringSlice(match[0], charsAdded);
            match.index = re.lastIndex;
            re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    if (NPCG_INCLUDED && match && match.length > 1) // Fix browsers whose `exec` methods don't consistently return `undefined`
    // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
    call(nativeReplace, match[0], reCopy, function() {
        for(i = 1; i < arguments.length - 2; i++)if (arguments[i] === undefined) match[i] = undefined;
    });
    if (match && groups) {
        match.groups = object = create(null);
        for(i = 0; i < groups.length; i++){
            group = groups[i];
            object[group[0]] = match[group[1]];
        }
    }
    return match;
};
module.exports = patchedExec;

},{"2b53377f3b13ff5e":"d7JlP","ac1e52312699cab7":"7GlkT","dd9d11603b402fbc":"a1yl4","9a931f1fee5c01aa":"9bz1x","b521ee18f63a6a6f":"dG6kl","875123b958baed2d":"i1mHK","1dbcd8412a9d3da":"duSQE","75c3d37058f38b26":"7AMlF","3390abba4fd4df8f":"7w3XA","3b362e93540a285c":"j2d9g"}],"a1yl4":[function(require,module,exports) {
var classof = require("6437a498630cda84");
var $String = String;
module.exports = function(argument) {
    if (classof(argument) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
    return $String(argument);
};

},{"6437a498630cda84":"dKT7A"}],"9bz1x":[function(require,module,exports) {
"use strict";
var anObject = require("a5d188b8b187d706");
// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function() {
    var that = anObject(this);
    var result = "";
    if (that.hasIndices) result += "d";
    if (that.global) result += "g";
    if (that.ignoreCase) result += "i";
    if (that.multiline) result += "m";
    if (that.dotAll) result += "s";
    if (that.unicode) result += "u";
    if (that.unicodeSets) result += "v";
    if (that.sticky) result += "y";
    return result;
};

},{"a5d188b8b187d706":"4isCr"}],"dG6kl":[function(require,module,exports) {
var fails = require("3fd7ba789051dd6a");
var global = require("3d7b8e3f16d6dff");
// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;
var UNSUPPORTED_Y = fails(function() {
    var re = $RegExp("a", "y");
    re.lastIndex = 2;
    return re.exec("abcd") != null;
});
// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function() {
    return !$RegExp("a", "y").sticky;
});
var BROKEN_CARET = UNSUPPORTED_Y || fails(function() {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp("^r", "gy");
    re.lastIndex = 2;
    return re.exec("str") != null;
});
module.exports = {
    BROKEN_CARET: BROKEN_CARET,
    MISSED_STICKY: MISSED_STICKY,
    UNSUPPORTED_Y: UNSUPPORTED_Y
};

},{"3fd7ba789051dd6a":"hL6D2","3d7b8e3f16d6dff":"i8HOC"}],"duSQE":[function(require,module,exports) {
/* global ActiveXObject -- old IE, WSH */ var anObject = require("3400f0cf473b6a4");
var definePropertiesModule = require("49c67164ebe2d8e6");
var enumBugKeys = require("649e2b4c7c656c22");
var hiddenKeys = require("6fc7d65d11b32ec3");
var html = require("c566995cd0d5be6");
var documentCreateElement = require("9315069e58b5a346");
var sharedKey = require("fc2b2d708c0ef20d");
var GT = ">";
var LT = "<";
var PROTOTYPE = "prototype";
var SCRIPT = "script";
var IE_PROTO = sharedKey("IE_PROTO");
var EmptyConstructor = function() {};
var scriptTag = function(content) {
    return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
};
// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function(activeXDocument) {
    activeXDocument.write(scriptTag(""));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
};
// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement("iframe");
    var JS = "java" + SCRIPT + ":";
    var iframeDocument;
    iframe.style.display = "none";
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag("document.F=Object"));
    iframeDocument.close();
    return iframeDocument.F;
};
// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function() {
    try {
        activeXDocument = new ActiveXObject("htmlfile");
    } catch (error) {}
    NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
     : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys.length;
    while(length--)delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
};
hiddenKeys[IE_PROTO] = true;
// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

},{"3400f0cf473b6a4":"4isCr","49c67164ebe2d8e6":"duA6W","649e2b4c7c656c22":"9RnJm","6fc7d65d11b32ec3":"661m4","c566995cd0d5be6":"2pze4","9315069e58b5a346":"4bOHl","fc2b2d708c0ef20d":"eAjGz"}],"duA6W":[function(require,module,exports) {
var DESCRIPTORS = require("e3cf512d54ef64dc");
var V8_PROTOTYPE_DEFINE_BUG = require("44e9ae6dbec76ea");
var definePropertyModule = require("abb79fe52b7480db");
var anObject = require("e4ed6b152518dc31");
var toIndexedObject = require("5359b81bde3d5af3");
var objectKeys = require("8d928ab64cd8d9b8");
// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var props = toIndexedObject(Properties);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while(length > index)definePropertyModule.f(O, key = keys[index++], props[key]);
    return O;
};

},{"e3cf512d54ef64dc":"92ZIi","44e9ae6dbec76ea":"ka1Un","abb79fe52b7480db":"iJR4w","e4ed6b152518dc31":"4isCr","5359b81bde3d5af3":"jLWwQ","8d928ab64cd8d9b8":"kzBf4"}],"kzBf4":[function(require,module,exports) {
var internalObjectKeys = require("c0bf99615410961e");
var enumBugKeys = require("4030d1032bacc23c");
// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys);
};

},{"c0bf99615410961e":"hl5T1","4030d1032bacc23c":"9RnJm"}],"7w3XA":[function(require,module,exports) {
var fails = require("3da64d81823bdb6");
var global = require("64569bccabbef6f9");
// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;
module.exports = fails(function() {
    var re = $RegExp(".", "s");
    return !(re.dotAll && re.exec("\n") && re.flags === "s");
});

},{"3da64d81823bdb6":"hL6D2","64569bccabbef6f9":"i8HOC"}],"j2d9g":[function(require,module,exports) {
var fails = require("91c5d6a6d8513351");
var global = require("d0314ba292fc1ccf");
// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;
module.exports = fails(function() {
    var re = $RegExp("(?<a>b)", "g");
    return re.exec("b").groups.a !== "b" || "b".replace(re, "$<a>c") !== "bc";
});

},{"91c5d6a6d8513351":"hL6D2","d0314ba292fc1ccf":"i8HOC"}],"hEviL":[function(require,module,exports) {
"use strict";
var charAt = require("5c8102035f2fe2b2").charAt;
// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function(S, index, unicode) {
    return index + (unicode ? charAt(S, index).length : 1);
};

},{"5c8102035f2fe2b2":"gGTTm"}],"gGTTm":[function(require,module,exports) {
var uncurryThis = require("cac6b754f3ea8d32");
var toIntegerOrInfinity = require("6bf95e0be94f9e06");
var toString = require("d2c83e4263abf606");
var requireObjectCoercible = require("7a1dc28e1e6d77da");
var charAt = uncurryThis("".charAt);
var charCodeAt = uncurryThis("".charCodeAt);
var stringSlice = uncurryThis("".slice);
var createMethod = function(CONVERT_TO_STRING) {
    return function($this, pos) {
        var S = toString(requireObjectCoercible($this));
        var position = toIntegerOrInfinity(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : undefined;
        first = charCodeAt(S, position);
        return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
};
module.exports = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true)
};

},{"cac6b754f3ea8d32":"7GlkT","6bf95e0be94f9e06":"kLXGe","d2c83e4263abf606":"a1yl4","7a1dc28e1e6d77da":"fOR0B"}],"5jYjC":[function(require,module,exports) {
var call = require("4cfa8d2a5ebb4225");
var anObject = require("50425936367aece");
var isCallable = require("9001278f032dede2");
var classof = require("effe21a9fa5313e9");
var regexpExec = require("9fe0ef6a27cd8122");
var $TypeError = TypeError;
// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function(R, S) {
    var exec = R.exec;
    if (isCallable(exec)) {
        var result = call(exec, R, S);
        if (result !== null) anObject(result);
        return result;
    }
    if (classof(R) === "RegExp") return call(regexpExec, R, S);
    throw $TypeError("RegExp#exec called on incompatible receiver");
};

},{"4cfa8d2a5ebb4225":"d7JlP","50425936367aece":"4isCr","9001278f032dede2":"l3Kyn","effe21a9fa5313e9":"bdfmm","9fe0ef6a27cd8122":"1iqnJ"}],"bE0gl":[function(require,module,exports) {
"use strict";
var apply = require("db8c5fb079676f48");
var call = require("46bc69a26b0455bb");
var uncurryThis = require("ea9c27f2d5b919b1");
var fixRegExpWellKnownSymbolLogic = require("93680f80010c988a");
var fails = require("ee9c44aadb415504");
var anObject = require("d80a240401811c3e");
var isCallable = require("2f2bdcaec9f9aa67");
var isNullOrUndefined = require("ec13efc20aedebdc");
var toIntegerOrInfinity = require("cae36243b0cf276");
var toLength = require("7fae9b0e0b732e0e");
var toString = require("289cf336e15a267e");
var requireObjectCoercible = require("6b85929392d9a903");
var advanceStringIndex = require("b39a8204efbbb853");
var getMethod = require("72f44a076330514a");
var getSubstitution = require("a96da488adb72027");
var regExpExec = require("a7bdd626eddf7e5f");
var wellKnownSymbol = require("edc3d47ae9438133");
var REPLACE = wellKnownSymbol("replace");
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis("".indexOf);
var stringSlice = uncurryThis("".slice);
var maybeToString = function(it) {
    return it === undefined ? it : String(it);
};
// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = function() {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return "a".replace(/./, "$0") === "$0";
}();
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function() {
    if (/./[REPLACE]) return /./[REPLACE]("a", "$0") === "";
    return false;
}();
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
    var re = /./;
    re.exec = function() {
        var result = [];
        result.groups = {
            a: "7"
        };
        return result;
    };
    // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
    return "".replace(re, "$<a>") !== "7";
});
// @@replace logic
fixRegExpWellKnownSymbolLogic("replace", function(_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
    return [
        // `String.prototype.replace` method
        // https://tc39.es/ecma262/#sec-string.prototype.replace
        function replace(searchValue, replaceValue) {
            var O = requireObjectCoercible(this);
            var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
            return replacer ? call(replacer, searchValue, O, replaceValue) : call(nativeReplace, toString(O), searchValue, replaceValue);
        },
        // `RegExp.prototype[@@replace]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
        function(string, replaceValue) {
            var rx = anObject(this);
            var S = toString(string);
            if (typeof replaceValue == "string" && stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf(replaceValue, "$<") === -1) {
                var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
                if (res.done) return res.value;
            }
            var functionalReplace = isCallable(replaceValue);
            if (!functionalReplace) replaceValue = toString(replaceValue);
            var global = rx.global;
            if (global) {
                var fullUnicode = rx.unicode;
                rx.lastIndex = 0;
            }
            var results = [];
            while(true){
                var result = regExpExec(rx, S);
                if (result === null) break;
                push(results, result);
                if (!global) break;
                var matchStr = toString(result[0]);
                if (matchStr === "") rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            }
            var accumulatedResult = "";
            var nextSourcePosition = 0;
            for(var i = 0; i < results.length; i++){
                result = results[i];
                var matched = toString(result[0]);
                var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
                var captures = [];
                // NOTE: This is equivalent to
                //   captures = result.slice(1).map(maybeToString)
                // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
                // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
                // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
                for(var j = 1; j < result.length; j++)push(captures, maybeToString(result[j]));
                var namedCaptures = result.groups;
                if (functionalReplace) {
                    var replacerArgs = concat([
                        matched
                    ], captures, position, S);
                    if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
                    var replacement = toString(apply(replaceValue, undefined, replacerArgs));
                } else replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                if (position >= nextSourcePosition) {
                    accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
                    nextSourcePosition = position + matched.length;
                }
            }
            return accumulatedResult + stringSlice(S, nextSourcePosition);
        }
    ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

},{"db8c5fb079676f48":"148ka","46bc69a26b0455bb":"d7JlP","ea9c27f2d5b919b1":"7GlkT","93680f80010c988a":"82MZ8","ee9c44aadb415504":"hL6D2","d80a240401811c3e":"4isCr","2f2bdcaec9f9aa67":"l3Kyn","ec13efc20aedebdc":"gM5ar","cae36243b0cf276":"kLXGe","7fae9b0e0b732e0e":"fU04N","289cf336e15a267e":"a1yl4","6b85929392d9a903":"fOR0B","b39a8204efbbb853":"hEviL","72f44a076330514a":"9Zfiw","a96da488adb72027":"1vLvA","a7bdd626eddf7e5f":"5jYjC","edc3d47ae9438133":"gTwyA"}],"1vLvA":[function(require,module,exports) {
var uncurryThis = require("acb2d52bbf96221b");
var toObject = require("23a4c4387226b161");
var floor = Math.floor;
var charAt = uncurryThis("".charAt);
var replace = uncurryThis("".replace);
var stringSlice = uncurryThis("".slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;
// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
        namedCaptures = toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace(replacement, symbols, function(match, ch) {
        var capture;
        switch(charAt(ch, 0)){
            case "$":
                return "$";
            case "&":
                return matched;
            case "`":
                return stringSlice(str, 0, position);
            case "'":
                return stringSlice(str, tailPos);
            case "<":
                capture = namedCaptures[stringSlice(ch, 1, -1)];
                break;
            default:
                var n = +ch;
                if (n === 0) return match;
                if (n > m) {
                    var f = floor(n / 10);
                    if (f === 0) return match;
                    if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
                    return match;
                }
                capture = captures[n - 1];
        }
        return capture === undefined ? "" : capture;
    });
};

},{"acb2d52bbf96221b":"7GlkT","23a4c4387226b161":"5cb35"}],"jBAVV":[function(require,module,exports) {
"use strict";
var $ = require("e909b7d32be43197");
var uncurryThis = require("7794a6b0785cf4a9");
var getOwnPropertyDescriptor = require("8073e03bbd66f607").f;
var toLength = require("6b4577ae280b4fb7");
var toString = require("339ec45fa3765a54");
var notARegExp = require("35589a9396a3bf05");
var requireObjectCoercible = require("48666bf412d81c96");
var correctIsRegExpLogic = require("bd1db173a84acf6c");
var IS_PURE = require("b7a202ca632601e4");
// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var nativeStartsWith = uncurryThis("".startsWith);
var stringSlice = uncurryThis("".slice);
var min = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic("startsWith");
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function() {
    var descriptor = getOwnPropertyDescriptor(String.prototype, "startsWith");
    return descriptor && !descriptor.writable;
}();
// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({
    target: "String",
    proto: true,
    forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
}, {
    startsWith: function startsWith(searchString /* , position = 0 */ ) {
        var that = toString(requireObjectCoercible(this));
        notARegExp(searchString);
        var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
        var search = toString(searchString);
        return nativeStartsWith ? nativeStartsWith(that, search, index) : stringSlice(that, index, index + search.length) === search;
    }
});

},{"e909b7d32be43197":"dIGt4","7794a6b0785cf4a9":"5Hioa","8073e03bbd66f607":"lk5NI","6b4577ae280b4fb7":"fU04N","339ec45fa3765a54":"a1yl4","35589a9396a3bf05":"1iV8t","48666bf412d81c96":"fOR0B","bd1db173a84acf6c":"1eMAl","b7a202ca632601e4":"5ZsyC"}],"1iV8t":[function(require,module,exports) {
var isRegExp = require("1f379634a8aebc3b");
var $TypeError = TypeError;
module.exports = function(it) {
    if (isRegExp(it)) throw $TypeError("The method doesn't accept regular expressions");
    return it;
};

},{"1f379634a8aebc3b":"hR496"}],"hR496":[function(require,module,exports) {
var isObject = require("98fa37e687d71408");
var classof = require("6f25135c8c213e51");
var wellKnownSymbol = require("c0bfc907bafb99f4");
var MATCH = wellKnownSymbol("match");
// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function(it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == "RegExp");
};

},{"98fa37e687d71408":"Z0pBo","6f25135c8c213e51":"bdfmm","c0bfc907bafb99f4":"gTwyA"}],"1eMAl":[function(require,module,exports) {
var wellKnownSymbol = require("682bc01a7671fc7b");
var MATCH = wellKnownSymbol("match");
module.exports = function(METHOD_NAME) {
    var regexp = /./;
    try {
        "/./"[METHOD_NAME](regexp);
    } catch (error1) {
        try {
            regexp[MATCH] = false;
            return "/./"[METHOD_NAME](regexp);
        } catch (error2) {}
    }
    return false;
};

},{"682bc01a7671fc7b":"gTwyA"}],"dFlRN":[function(require,module,exports) {
"use strict";
var toIndexedObject = require("bc290b7bc5b10291");
var addToUnscopables = require("6c5b4d221a5c54d7");
var Iterators = require("fc1919654d6d1b60");
var InternalStateModule = require("50b6c64a0fb0e399");
var defineProperty = require("8896400d3b130f26").f;
var defineIterator = require("e41964a5f6aa40c4");
var createIterResultObject = require("8b3df6719d4e954f");
var IS_PURE = require("709604fd29919dfa");
var DESCRIPTORS = require("e77a23c514926617");
var ARRAY_ITERATOR = "Array Iterator";
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, "Array", function(iterated, kind) {
    setInternalState(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated),
        index: 0,
        kind: kind // kind
    });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function() {
    var state = getInternalState(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
        state.target = undefined;
        return createIterResultObject(undefined, true);
    }
    if (kind == "keys") return createIterResultObject(index, false);
    if (kind == "values") return createIterResultObject(target[index], false);
    return createIterResultObject([
        index,
        target[index]
    ], false);
}, "values");
// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables("keys");
addToUnscopables("values");
addToUnscopables("entries");
// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== "values") try {
    defineProperty(values, "name", {
        value: "values"
    });
} catch (error) {}

},{"bc290b7bc5b10291":"jLWwQ","6c5b4d221a5c54d7":"jx7ej","fc1919654d6d1b60":"30XHR","50b6c64a0fb0e399":"7AMlF","8896400d3b130f26":"iJR4w","e41964a5f6aa40c4":"i2KIH","8b3df6719d4e954f":"5DJos","709604fd29919dfa":"5ZsyC","e77a23c514926617":"92ZIi"}],"jx7ej":[function(require,module,exports) {
var wellKnownSymbol = require("f254b021d3b7daab");
var create = require("91f84e50afc36165");
var defineProperty = require("35ce3643611fab54").f;
var UNSCOPABLES = wellKnownSymbol("unscopables");
var ArrayPrototype = Array.prototype;
// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
});
// add a key to Array.prototype[@@unscopables]
module.exports = function(key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
};

},{"f254b021d3b7daab":"gTwyA","91f84e50afc36165":"duSQE","35ce3643611fab54":"iJR4w"}],"i2KIH":[function(require,module,exports) {
"use strict";
var $ = require("d0f83d1a98c282c5");
var call = require("ede83ae2b445e56d");
var IS_PURE = require("20620b6d7cdc1069");
var FunctionName = require("ca42db3f9172611a");
var isCallable = require("b40bb075791de01f");
var createIteratorConstructor = require("c71190b55e3a391b");
var getPrototypeOf = require("5432b8c3789c7e83");
var setPrototypeOf = require("1433ae3794735bd6");
var setToStringTag = require("85acd058368d1ef7");
var createNonEnumerableProperty = require("8d5e83a130067af1");
var defineBuiltIn = require("d268f0b6f7276527");
var wellKnownSymbol = require("c03f764a6654d29f");
var Iterators = require("52d7200b4235c5d3");
var IteratorsCore = require("9cfda7a8d639b255");
var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol("iterator");
var KEYS = "keys";
var VALUES = "values";
var ENTRIES = "entries";
var returnThis = function() {
    return this;
};
module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);
    var getIterationMethod = function(KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
        switch(KIND){
            case KEYS:
                return function keys() {
                    return new IteratorConstructor(this, KIND);
                };
            case VALUES:
                return function values() {
                    return new IteratorConstructor(this, KIND);
                };
            case ENTRIES:
                return function entries() {
                    return new IteratorConstructor(this, KIND);
                };
        }
        return function() {
            return new IteratorConstructor(this);
        };
    };
    var TO_STRING_TAG = NAME + " Iterator";
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;
    // fix native
    if (anyNativeIterator) {
        CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
        if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                if (setPrototypeOf) setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
            }
            // Set @@toStringTag to native iterators
            setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
            if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
        }
    }
    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) createNonEnumerableProperty(IterablePrototype, "name", VALUES);
        else {
            INCORRECT_VALUES_NAME = true;
            defaultIterator = function values() {
                return call(nativeIterator, this);
            };
        }
    }
    // export additional methods
    if (DEFAULT) {
        methods = {
            values: getIterationMethod(VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
            entries: getIterationMethod(ENTRIES)
        };
        if (FORCED) {
            for(KEY in methods)if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
        } else $({
            target: NAME,
            proto: true,
            forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
        }, methods);
    }
    // define iterator
    if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, {
        name: DEFAULT
    });
    Iterators[NAME] = defaultIterator;
    return methods;
};

},{"d0f83d1a98c282c5":"dIGt4","ede83ae2b445e56d":"d7JlP","20620b6d7cdc1069":"5ZsyC","ca42db3f9172611a":"l6Kgd","b40bb075791de01f":"l3Kyn","c71190b55e3a391b":"gdIwf","5432b8c3789c7e83":"2wazs","1433ae3794735bd6":"2EnFi","85acd058368d1ef7":"ffT5i","8d5e83a130067af1":"8CL42","d268f0b6f7276527":"6XwEX","c03f764a6654d29f":"gTwyA","52d7200b4235c5d3":"30XHR","9cfda7a8d639b255":"1oRO7"}],"gdIwf":[function(require,module,exports) {
"use strict";
var IteratorPrototype = require("6e918a96e0a6904").IteratorPrototype;
var create = require("d796f94db82b362");
var createPropertyDescriptor = require("68a1fd54d4a934de");
var setToStringTag = require("b071833f0eda17cd");
var Iterators = require("fb6fe3335eab867c");
var returnThis = function() {
    return this;
};
module.exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + " Iterator";
    IteratorConstructor.prototype = create(IteratorPrototype, {
        next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next)
    });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
    Iterators[TO_STRING_TAG] = returnThis;
    return IteratorConstructor;
};

},{"6e918a96e0a6904":"1oRO7","d796f94db82b362":"duSQE","68a1fd54d4a934de":"1lpav","b071833f0eda17cd":"ffT5i","fb6fe3335eab867c":"30XHR"}],"1oRO7":[function(require,module,exports) {
"use strict";
var fails = require("b2d89eeeccc2c82");
var isCallable = require("e3ed2983069b237a");
var isObject = require("84bc282315796e1b");
var create = require("5e6a520a84081893");
var getPrototypeOf = require("bc11e7a2829f90f6");
var defineBuiltIn = require("c50ac96bc9a8eea4");
var wellKnownSymbol = require("a0a4c45e3dbdfa88");
var IS_PURE = require("a1ef6bb6be43a6e");
var ITERATOR = wellKnownSymbol("iterator");
var BUGGY_SAFARI_ITERATORS = false;
// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
/* eslint-disable es/no-array-prototype-keys -- safe */ if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
    else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
    }
}
var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function() {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype[ITERATOR].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) defineBuiltIn(IteratorPrototype, ITERATOR, function() {
    return this;
});
module.exports = {
    IteratorPrototype: IteratorPrototype,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

},{"b2d89eeeccc2c82":"hL6D2","e3ed2983069b237a":"l3Kyn","84bc282315796e1b":"Z0pBo","5e6a520a84081893":"duSQE","bc11e7a2829f90f6":"2wazs","c50ac96bc9a8eea4":"6XwEX","a0a4c45e3dbdfa88":"gTwyA","a1ef6bb6be43a6e":"5ZsyC"}],"2wazs":[function(require,module,exports) {
var hasOwn = require("11917122193837");
var isCallable = require("630dfc8e7a57825e");
var toObject = require("bd93ab820556142d");
var sharedKey = require("e6f9598552ae751d");
var CORRECT_PROTOTYPE_GETTER = require("52921b952b96b3f3");
var IE_PROTO = sharedKey("IE_PROTO");
var $Object = Object;
var ObjectPrototype = $Object.prototype;
// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
    var object = toObject(O);
    if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable(constructor) && object instanceof constructor) return constructor.prototype;
    return object instanceof $Object ? ObjectPrototype : null;
};

},{"11917122193837":"gC2Q5","630dfc8e7a57825e":"l3Kyn","bd93ab820556142d":"5cb35","e6f9598552ae751d":"eAjGz","52921b952b96b3f3":"i8nB5"}],"i8nB5":[function(require,module,exports) {
var fails = require("9e48385af0817927");
module.exports = !fails(function() {
    function F() {}
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
});

},{"9e48385af0817927":"hL6D2"}],"5DJos":[function(require,module,exports) {
// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function(value, done) {
    return {
        value: value,
        done: done
    };
};

},{}],"3YhYU":[function(require,module,exports) {
var global = require("7a64566f71e5cc17");
var DOMIterables = require("4d976648815dae1b");
var DOMTokenListPrototype = require("fe05a3d19be81e69");
var ArrayIteratorMethods = require("19e3f2198195043c");
var createNonEnumerableProperty = require("f6b7df68965fea0f");
var wellKnownSymbol = require("ccd5ee6060c5edd0");
var ITERATOR = wellKnownSymbol("iterator");
var TO_STRING_TAG = wellKnownSymbol("toStringTag");
var ArrayValues = ArrayIteratorMethods.values;
var handlePrototype = function(CollectionPrototype, COLLECTION_NAME) {
    if (CollectionPrototype) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
            createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
        } catch (error) {
            CollectionPrototype[ITERATOR] = ArrayValues;
        }
        if (!CollectionPrototype[TO_STRING_TAG]) createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
        if (DOMIterables[COLLECTION_NAME]) for(var METHOD_NAME in ArrayIteratorMethods){
            // some Chrome versions have non-configurable methods on DOMTokenList
            if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
                createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
            } catch (error) {
                CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
            }
        }
    }
};
for(var COLLECTION_NAME in DOMIterables)handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
handlePrototype(DOMTokenListPrototype, "DOMTokenList");

},{"7a64566f71e5cc17":"i8HOC","4d976648815dae1b":"iy1lG","fe05a3d19be81e69":"cIqNV","19e3f2198195043c":"dFlRN","f6b7df68965fea0f":"8CL42","ccd5ee6060c5edd0":"gTwyA"}],"iy1lG":[function(require,module,exports) {
// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
};

},{}],"cIqNV":[function(require,module,exports) {
// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = require("c08440088e5be2ac");
var classList = documentCreateElement("span").classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;
module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;

},{"c08440088e5be2ac":"4bOHl"}],"4x6r7":[function(require,module,exports) {
var toPropertyKey = require("b1ae85a347b03a0e");
function _defineProperty(obj, key, value) {
    key = toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"b1ae85a347b03a0e":"5P3X5"}],"5P3X5":[function(require,module,exports) {
var _typeof = require("e4d6234c8a9d397")["default"];
var toPrimitive = require("a4ad2dfe78b6afab");
function _toPropertyKey(arg) {
    var key = toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"e4d6234c8a9d397":"jgQjt","a4ad2dfe78b6afab":"eJCHQ"}],"eJCHQ":[function(require,module,exports) {
var _typeof = require("145c9996072e7729")["default"];
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"145c9996072e7729":"jgQjt"}],"4JP9y":[function(require,module,exports) {
"use strict";
var $ = require("61e1cbf23c0fa79d");
var $reduce = require("68d505ffd951e302").left;
var arrayMethodIsStrict = require("c275e2bc56d9c8fd");
var CHROME_VERSION = require("f998ffda1bd5a38a");
var IS_NODE = require("7624ef41287d908f");
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict("reduce");
// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({
    target: "Array",
    proto: true,
    forced: FORCED
}, {
    reduce: function reduce(callbackfn /* , initialValue */ ) {
        var length = arguments.length;
        return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
    }
});

},{"61e1cbf23c0fa79d":"dIGt4","68d505ffd951e302":"dY5a2","c275e2bc56d9c8fd":"7oKGa","f998ffda1bd5a38a":"bjFlO","7624ef41287d908f":"2Jcp4"}],"dY5a2":[function(require,module,exports) {
var aCallable = require("be5da16afd39369e");
var toObject = require("749ba5d1498b5e9f");
var IndexedObject = require("615cfd8870144ec4");
var lengthOfArrayLike = require("a2bd4ad3f70d6377");
var $TypeError = TypeError;
// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function(IS_RIGHT) {
    return function(that, callbackfn, argumentsLength, memo) {
        aCallable(callbackfn);
        var O = toObject(that);
        var self = IndexedObject(O);
        var length = lengthOfArrayLike(O);
        var index = IS_RIGHT ? length - 1 : 0;
        var i = IS_RIGHT ? -1 : 1;
        if (argumentsLength < 2) while(true){
            if (index in self) {
                memo = self[index];
                index += i;
                break;
            }
            index += i;
            if (IS_RIGHT ? index < 0 : length <= index) throw $TypeError("Reduce of empty array with no initial value");
        }
        for(; IS_RIGHT ? index >= 0 : length > index; index += i)if (index in self) memo = callbackfn(memo, self[index], index, O);
        return memo;
    };
};
module.exports = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: createMethod(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod(true)
};

},{"be5da16afd39369e":"gOMir","749ba5d1498b5e9f":"5cb35","615cfd8870144ec4":"kPk5h","a2bd4ad3f70d6377":"lY4mS"}],"7oKGa":[function(require,module,exports) {
"use strict";
var fails = require("c13ad8eeb74fef68");
module.exports = function(METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails(function() {
        // eslint-disable-next-line no-useless-call -- required for testing
        method.call(null, argument || function() {
            return 1;
        }, 1);
    });
};

},{"c13ad8eeb74fef68":"hL6D2"}],"jGTSU":[function(require,module,exports) {
"use strict";
var $ = require("14f86a1370edac83");
var uncurryThis = require("6bace90372831de5");
var getOwnPropertyDescriptor = require("1410189c2d8a2468").f;
var toLength = require("ecdc5cbb7414ee13");
var toString = require("3588f1b2c874fa50");
var notARegExp = require("3b4760d0a8832e0c");
var requireObjectCoercible = require("7d39abc1b7816d6d");
var correctIsRegExpLogic = require("c5d4771445d974a6");
var IS_PURE = require("8dd22be3132d09c5");
// eslint-disable-next-line es/no-string-prototype-endswith -- safe
var nativeEndsWith = uncurryThis("".endsWith);
var slice = uncurryThis("".slice);
var min = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic("endsWith");
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function() {
    var descriptor = getOwnPropertyDescriptor(String.prototype, "endsWith");
    return descriptor && !descriptor.writable;
}();
// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
$({
    target: "String",
    proto: true,
    forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
}, {
    endsWith: function endsWith(searchString /* , endPosition = @length */ ) {
        var that = toString(requireObjectCoercible(this));
        notARegExp(searchString);
        var endPosition = arguments.length > 1 ? arguments[1] : undefined;
        var len = that.length;
        var end = endPosition === undefined ? len : min(toLength(endPosition), len);
        var search = toString(searchString);
        return nativeEndsWith ? nativeEndsWith(that, search, end) : slice(that, end - search.length, end) === search;
    }
});

},{"14f86a1370edac83":"dIGt4","6bace90372831de5":"5Hioa","1410189c2d8a2468":"lk5NI","ecdc5cbb7414ee13":"fU04N","3588f1b2c874fa50":"a1yl4","3b4760d0a8832e0c":"1iV8t","7d39abc1b7816d6d":"fOR0B","c5d4771445d974a6":"1eMAl","8dd22be3132d09c5":"5ZsyC"}],"c6es8":[function(require,module,exports) {
"use strict";
var apply = require("13f05279661f173f");
var call = require("215ca6634b4b9f76");
var uncurryThis = require("40435376aa44554f");
var fixRegExpWellKnownSymbolLogic = require("6221dc8974a5b133");
var anObject = require("4846a5b8b5e13785");
var isNullOrUndefined = require("bcd9fd895be65ab9");
var isRegExp = require("85c7ed19bdf64590");
var requireObjectCoercible = require("f97f7a8ac80cd8a4");
var speciesConstructor = require("51570666e03ff30d");
var advanceStringIndex = require("3ae753e752d9fc2a");
var toLength = require("926dbc17f9f57047");
var toString = require("7124296cd283fd01");
var getMethod = require("52cb67556fefeba8");
var arraySlice = require("2bac4b9bde679d29");
var callRegExpExec = require("8562283f03c49e6d");
var regexpExec = require("605a2b2b4cc62687");
var stickyHelpers = require("248236f27df95a6d");
var fails = require("7c8af8df6644a02f");
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis(/./.exec);
var push = uncurryThis($push);
var stringSlice = uncurryThis("".slice);
// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function() {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function() {
        return originalExec.apply(this, arguments);
    };
    var result = "ab".split(re);
    return result.length !== 2 || result[0] !== "a" || result[1] !== "b";
});
// @@split logic
fixRegExpWellKnownSymbolLogic("split", function(SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;
    if ("abbc".split(/(b)*/)[1] == "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
    "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    ".".split(/()()/).length > 1 || "".split(/.?/).length) // based on es5-shim implementation, need to rework it
    internalSplit = function(separator, limit) {
        var string = toString(requireObjectCoercible(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [
            string
        ];
        // If `separator` is not a regex, use native split
        if (!isRegExp(separator)) return call(nativeSplit, string, separator, lim);
        var output = [];
        var flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.unicode ? "u" : "") + (separator.sticky ? "y" : "");
        var lastLastIndex = 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + "g");
        var match, lastIndex, lastLength;
        while(match = call(regexpExec, separatorCopy, string)){
            lastIndex = separatorCopy.lastIndex;
            if (lastIndex > lastLastIndex) {
                push(output, stringSlice(string, lastLastIndex, match.index));
                if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
                lastLength = match[0].length;
                lastLastIndex = lastIndex;
                if (output.length >= lim) break;
            }
            if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }
        if (lastLastIndex === string.length) {
            if (lastLength || !exec(separatorCopy, "")) push(output, "");
        } else push(output, stringSlice(string, lastLastIndex));
        return output.length > lim ? arraySlice(output, 0, lim) : output;
    };
    else if ("0".split(undefined, 0).length) internalSplit = function(separator, limit) {
        return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
    else internalSplit = nativeSplit;
    return [
        // `String.prototype.split` method
        // https://tc39.es/ecma262/#sec-string.prototype.split
        function split(separator, limit) {
            var O = requireObjectCoercible(this);
            var splitter = isNullOrUndefined(separator) ? undefined : getMethod(separator, SPLIT);
            return splitter ? call(splitter, separator, O, limit) : call(internalSplit, toString(O), separator, limit);
        },
        // `RegExp.prototype[@@split]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
        //
        // NOTE: This cannot be properly polyfilled in engines that don't support
        // the 'y' flag.
        function(string, limit) {
            var rx = anObject(this);
            var S = toString(string);
            var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
            if (res.done) return res.value;
            var C = speciesConstructor(rx, RegExp);
            var unicodeMatching = rx.unicode;
            var flags = (rx.ignoreCase ? "i" : "") + (rx.multiline ? "m" : "") + (rx.unicode ? "u" : "") + (UNSUPPORTED_Y ? "g" : "y");
            // ^(? + rx + ) is needed, in combination with some S slicing, to
            // simulate the 'y' flag.
            var splitter = new C(UNSUPPORTED_Y ? "^(?:" + rx.source + ")" : rx, flags);
            var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
            if (lim === 0) return [];
            if (S.length === 0) return callRegExpExec(splitter, S) === null ? [
                S
            ] : [];
            var p = 0;
            var q = 0;
            var A = [];
            while(q < S.length){
                splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
                var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
                var e;
                if (z === null || (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) q = advanceStringIndex(S, q, unicodeMatching);
                else {
                    push(A, stringSlice(S, p, q));
                    if (A.length === lim) return A;
                    for(var i = 1; i <= z.length - 1; i++){
                        push(A, z[i]);
                        if (A.length === lim) return A;
                    }
                    q = p = e;
                }
            }
            push(A, stringSlice(S, p));
            return A;
        }
    ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

},{"13f05279661f173f":"148ka","215ca6634b4b9f76":"d7JlP","40435376aa44554f":"7GlkT","6221dc8974a5b133":"82MZ8","4846a5b8b5e13785":"4isCr","bcd9fd895be65ab9":"gM5ar","85c7ed19bdf64590":"hR496","f97f7a8ac80cd8a4":"fOR0B","51570666e03ff30d":"cIK3T","3ae753e752d9fc2a":"hEviL","926dbc17f9f57047":"fU04N","7124296cd283fd01":"a1yl4","52cb67556fefeba8":"9Zfiw","2bac4b9bde679d29":"gF6nm","8562283f03c49e6d":"5jYjC","605a2b2b4cc62687":"1iqnJ","248236f27df95a6d":"dG6kl","7c8af8df6644a02f":"hL6D2"}],"gF6nm":[function(require,module,exports) {
var toAbsoluteIndex = require("8f2b7f231b848f5d");
var lengthOfArrayLike = require("1457d85b27eec806");
var createProperty = require("a4389688c5f93d0d");
var $Array = Array;
var max = Math.max;
module.exports = function(O, start, end) {
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = $Array(max(fin - k, 0));
    for(var n = 0; k < fin; k++, n++)createProperty(result, n, O[k]);
    result.length = n;
    return result;
};

},{"8f2b7f231b848f5d":"5yh27","1457d85b27eec806":"lY4mS","a4389688c5f93d0d":"76HND"}],"76HND":[function(require,module,exports) {
"use strict";
var toPropertyKey = require("71ce7a847565b4b2");
var definePropertyModule = require("e3259741bce1ec6a");
var createPropertyDescriptor = require("3eb5f85648ed5d7e");
module.exports = function(object, key, value) {
    var propertyKey = toPropertyKey(key);
    if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
};

},{"71ce7a847565b4b2":"5XWKd","e3259741bce1ec6a":"iJR4w","3eb5f85648ed5d7e":"1lpav"}],"ba7ov":[function(require,module,exports) {
var global = arguments[3];
var now = require("807b6a47bdf1dfe6"), root = typeof window === "undefined" ? global : window, vendors = [
    "moz",
    "webkit"
], suffix = "AnimationFrame", raf = root["request" + suffix], caf = root["cancel" + suffix] || root["cancelRequest" + suffix];
for(var i = 0; !raf && i < vendors.length; i++){
    raf = root[vendors[i] + "Request" + suffix];
    caf = root[vendors[i] + "Cancel" + suffix] || root[vendors[i] + "CancelRequest" + suffix];
}
// Some versions of FF have rAF but not cAF
if (!raf || !caf) {
    var last = 0, id = 0, queue = [], frameDuration = 1000 / 60;
    raf = function(callback) {
        if (queue.length === 0) {
            var _now = now(), next = Math.max(0, frameDuration - (_now - last));
            last = next + _now;
            setTimeout(function() {
                var cp = queue.slice(0);
                // Clear queue here to prevent
                // callbacks from appending listeners
                // to the current frame's queue
                queue.length = 0;
                for(var i = 0; i < cp.length; i++){
                    if (!cp[i].cancelled) try {
                        cp[i].callback(last);
                    } catch (e) {
                        setTimeout(function() {
                            throw e;
                        }, 0);
                    }
                }
            }, Math.round(next));
        }
        queue.push({
            handle: ++id,
            callback: callback,
            cancelled: false
        });
        return id;
    };
    caf = function(handle) {
        for(var i = 0; i < queue.length; i++)if (queue[i].handle === handle) queue[i].cancelled = true;
    };
}
module.exports = function(fn) {
    // Wrap in a new function to prevent
    // `cancel` potentially being assigned
    // to the native rAF function
    return raf.call(root, fn);
};
module.exports.cancel = function() {
    caf.apply(root, arguments);
};
module.exports.polyfill = function(object) {
    if (!object) object = root;
    object.requestAnimationFrame = raf;
    object.cancelAnimationFrame = caf;
};

},{"807b6a47bdf1dfe6":"7cqVO"}],"7cqVO":[function(require,module,exports) {
var process = require("d3ffafa72aa71a48");
// Generated by CoffeeScript 1.12.2
(function() {
    var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
    if (typeof performance !== "undefined" && performance !== null && performance.now) module.exports = function() {
        return performance.now();
    };
    else if (typeof process !== "undefined" && process !== null && process.hrtime) {
        module.exports = function() {
            return (getNanoSeconds() - nodeLoadTime) / 1e6;
        };
        hrtime = process.hrtime;
        getNanoSeconds = function() {
            var hr;
            hr = hrtime();
            return hr[0] * 1e9 + hr[1];
        };
        moduleLoadTime = getNanoSeconds();
        upTime = process.uptime() * 1e9;
        nodeLoadTime = moduleLoadTime - upTime;
    } else if (Date.now) {
        module.exports = function() {
            return Date.now() - loadTime;
        };
        loadTime = Date.now();
    } else {
        module.exports = function() {
            return new Date().getTime() - loadTime;
        };
        loadTime = new Date().getTime();
    }
}).call(this);

},{"d3ffafa72aa71a48":"d5jf4"}],"8KjjF":[function(require,module,exports) {
"use strict";
var $ = require("f79ec490b38fee4");
var $trim = require("8931e6b7d7a1280").trim;
var forcedStringTrimMethod = require("4fe12dde4446faf0");
// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({
    target: "String",
    proto: true,
    forced: forcedStringTrimMethod("trim")
}, {
    trim: function trim() {
        return $trim(this);
    }
});

},{"f79ec490b38fee4":"dIGt4","8931e6b7d7a1280":"lIBHn","4fe12dde4446faf0":"l81KZ"}],"lIBHn":[function(require,module,exports) {
var uncurryThis = require("395840398b8c6bb6");
var requireObjectCoercible = require("90a7f21c4cc4e311");
var toString = require("1758b99920c9b89b");
var whitespaces = require("63175276f96954d7");
var replace = uncurryThis("".replace);
var ltrim = RegExp("^[" + whitespaces + "]+");
var rtrim = RegExp("(^|[^" + whitespaces + "])[" + whitespaces + "]+$");
// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function(TYPE) {
    return function($this) {
        var string = toString(requireObjectCoercible($this));
        if (TYPE & 1) string = replace(string, ltrim, "");
        if (TYPE & 2) string = replace(string, rtrim, "$1");
        return string;
    };
};
module.exports = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod(3)
};

},{"395840398b8c6bb6":"7GlkT","90a7f21c4cc4e311":"fOR0B","1758b99920c9b89b":"a1yl4","63175276f96954d7":"6zEfU"}],"6zEfU":[function(require,module,exports) {
// a string of all valid unicode whitespaces
module.exports = "	\n\v\f\r \xa0              　\u2028\u2029\uFEFF";

},{}],"l81KZ":[function(require,module,exports) {
var PROPER_FUNCTION_NAME = require("634031d91826089c").PROPER;
var fails = require("bc25dca9ea62540f");
var whitespaces = require("a888b03ae524dac6");
var non = "​\x85᠎";
// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function(METHOD_NAME) {
    return fails(function() {
        return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME;
    });
};

},{"634031d91826089c":"l6Kgd","bc25dca9ea62540f":"hL6D2","a888b03ae524dac6":"6zEfU"}],"iVlt2":[function(require,module,exports) {
/*
	Based on rgbcolor.js by Stoyan Stefanov <sstoo@gmail.com>
	http://www.phpied.com/rgb-color-parser-in-javascript/
*/ module.exports = function(color_string) {
    this.ok = false;
    this.alpha = 1.0;
    // strip any leading #
    if (color_string.charAt(0) == "#") color_string = color_string.substr(1, 6);
    color_string = color_string.replace(/ /g, "");
    color_string = color_string.toLowerCase();
    // before getting into regexps, try simple matches
    // and overwrite the input
    var simple_colors = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "00ffff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000000",
        blanchedalmond: "ffebcd",
        blue: "0000ff",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "00ffff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dodgerblue: "1e90ff",
        feldspar: "d19275",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "ff00ff",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgrey: "d3d3d3",
        lightgreen: "90ee90",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslateblue: "8470ff",
        lightslategray: "778899",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "00ff00",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "ff00ff",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370d8",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "d87093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "ff0000",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        violetred: "d02090",
        wheat: "f5deb3",
        white: "ffffff",
        whitesmoke: "f5f5f5",
        yellow: "ffff00",
        yellowgreen: "9acd32"
    };
    color_string = simple_colors[color_string] || color_string;
    // emd of simple type-in colors
    // array of color definition objects
    var color_defs = [
        {
            re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
            example: [
                "rgba(123, 234, 45, 0.8)",
                "rgba(255,234,245,1.0)"
            ],
            process: function(bits) {
                return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3]),
                    parseFloat(bits[4])
                ];
            }
        },
        {
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: [
                "rgb(123, 234, 45)",
                "rgb(255,234,245)"
            ],
            process: function(bits) {
                return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3])
                ];
            }
        },
        {
            re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            example: [
                "#00ff00",
                "336699"
            ],
            process: function(bits) {
                return [
                    parseInt(bits[1], 16),
                    parseInt(bits[2], 16),
                    parseInt(bits[3], 16)
                ];
            }
        },
        {
            re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            example: [
                "#fb0",
                "f0f"
            ],
            process: function(bits) {
                return [
                    parseInt(bits[1] + bits[1], 16),
                    parseInt(bits[2] + bits[2], 16),
                    parseInt(bits[3] + bits[3], 16)
                ];
            }
        }
    ];
    // search through the definitions to find a match
    for(var i = 0; i < color_defs.length; i++){
        var re = color_defs[i].re;
        var processor = color_defs[i].process;
        var bits = re.exec(color_string);
        if (bits) {
            var channels = processor(bits);
            this.r = channels[0];
            this.g = channels[1];
            this.b = channels[2];
            if (channels.length > 3) this.alpha = channels[3];
            this.ok = true;
        }
    }
    // validate/cleanup values
    this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r;
    this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g;
    this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b;
    this.alpha = this.alpha < 0 ? 0 : this.alpha > 1.0 || isNaN(this.alpha) ? 1.0 : this.alpha;
    // some getters
    this.toRGB = function() {
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    };
    this.toRGBA = function() {
        return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
    };
    this.toHex = function() {
        var r = this.r.toString(16);
        var g = this.g.toString(16);
        var b = this.b.toString(16);
        if (r.length == 1) r = "0" + r;
        if (g.length == 1) g = "0" + g;
        if (b.length == 1) b = "0" + b;
        return "#" + r + g + b;
    };
    // help
    this.getHelpXML = function() {
        var examples = new Array();
        // add regexps
        for(var i = 0; i < color_defs.length; i++){
            var example = color_defs[i].example;
            for(var j = 0; j < example.length; j++)examples[examples.length] = example[j];
        }
        // add type-in colors
        for(var sc in simple_colors)examples[examples.length] = sc;
        var xml = document.createElement("ul");
        xml.setAttribute("id", "rgbcolor-examples");
        for(var i = 0; i < examples.length; i++)try {
            var list_item = document.createElement("li");
            var list_color = new RGBColor(examples[i]);
            var example_div = document.createElement("div");
            example_div.style.cssText = "margin: 3px; border: 1px solid black; background:" + list_color.toHex() + "; " + "color:" + list_color.toHex();
            example_div.appendChild(document.createTextNode("test"));
            var list_item_value = document.createTextNode(" " + examples[i] + " -> " + list_color.toRGB() + " -> " + list_color.toHex());
            list_item.appendChild(example_div);
            list_item.appendChild(list_item_value);
            xml.appendChild(list_item);
        } catch (e) {}
        return xml;
    };
};

},{}],"jWtjc":[function(require,module,exports) {
"use strict";
/* eslint-disable es/no-array-prototype-indexof -- required for testing */ var $ = require("e58855c5e3090ff6");
var uncurryThis = require("7e49cd1dedd7c5bf");
var $indexOf = require("d0e3d5df588c01bb").indexOf;
var arrayMethodIsStrict = require("2caaff671c5fc511");
var nativeIndexOf = uncurryThis([].indexOf);
var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([
    1
], 1, -0) < 0;
var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict("indexOf");
// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({
    target: "Array",
    proto: true,
    forced: FORCED
}, {
    indexOf: function indexOf(searchElement /* , fromIndex = 0 */ ) {
        var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
        return NEGATIVE_ZERO ? nativeIndexOf(this, searchElement, fromIndex) || 0 : $indexOf(this, searchElement, fromIndex);
    }
});

},{"e58855c5e3090ff6":"dIGt4","7e49cd1dedd7c5bf":"5Hioa","d0e3d5df588c01bb":"n5IsC","2caaff671c5fc511":"7oKGa"}],"iQrGk":[function(require,module,exports) {
"use strict";
var $ = require("e005488273d1abf9");
var uncurryThis = require("f863f77839a97b18");
var notARegExp = require("e957e1f8a5c43be6");
var requireObjectCoercible = require("f885365e0c48d392");
var toString = require("bf6086fddcbd8be0");
var correctIsRegExpLogic = require("b33c91534f353ef0");
var stringIndexOf = uncurryThis("".indexOf);
// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({
    target: "String",
    proto: true,
    forced: !correctIsRegExpLogic("includes")
}, {
    includes: function includes(searchString /* , position = 0 */ ) {
        return !!~stringIndexOf(toString(requireObjectCoercible(this)), toString(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"e005488273d1abf9":"dIGt4","f863f77839a97b18":"7GlkT","e957e1f8a5c43be6":"1iV8t","f885365e0c48d392":"fOR0B","bf6086fddcbd8be0":"a1yl4","b33c91534f353ef0":"1eMAl"}],"fcRaU":[function(require,module,exports) {
"use strict";
var $ = require("c653ff000f070a49");
var uncurryThis = require("b187107ee85a8c1");
var isArray = require("ce50350d47d3f730");
var nativeReverse = uncurryThis([].reverse);
var test = [
    1,
    2
];
// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({
    target: "Array",
    proto: true,
    forced: String(test) === String(test.reverse())
}, {
    reverse: function reverse() {
        // eslint-disable-next-line no-self-assign -- dirty hack
        if (isArray(this)) this.length = this.length;
        return nativeReverse(this);
    }
});

},{"c653ff000f070a49":"dIGt4","b187107ee85a8c1":"7GlkT","ce50350d47d3f730":"iZ18O"}],"iZ18O":[function(require,module,exports) {
var classof = require("20367ef9a863b6ee");
// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
    return classof(argument) == "Array";
};

},{"20367ef9a863b6ee":"bdfmm"}],"8cZl0":[function(require,module,exports) {
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "COMMAND_ARG_COUNTS", ()=>N);
parcelHelpers.export(exports, "SVGPathData", ()=>_);
parcelHelpers.export(exports, "SVGPathDataParser", ()=>f);
parcelHelpers.export(exports, "SVGPathDataTransformer", ()=>u);
parcelHelpers.export(exports, "encodeSVGPath", ()=>e);
var t = function(r, e) {
    return (t = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(t, r) {
        t.__proto__ = r;
    } || function(t, r) {
        for(var e in r)Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
    })(r, e);
};
function r(r, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    function i() {
        this.constructor = r;
    }
    t(r, e), r.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i);
}
function e(t) {
    var r = "";
    Array.isArray(t) || (t = [
        t
    ]);
    for(var e = 0; e < t.length; e++){
        var i = t[e];
        if (i.type === _.CLOSE_PATH) r += "z";
        else if (i.type === _.HORIZ_LINE_TO) r += (i.relative ? "h" : "H") + i.x;
        else if (i.type === _.VERT_LINE_TO) r += (i.relative ? "v" : "V") + i.y;
        else if (i.type === _.MOVE_TO) r += (i.relative ? "m" : "M") + i.x + " " + i.y;
        else if (i.type === _.LINE_TO) r += (i.relative ? "l" : "L") + i.x + " " + i.y;
        else if (i.type === _.CURVE_TO) r += (i.relative ? "c" : "C") + i.x1 + " " + i.y1 + " " + i.x2 + " " + i.y2 + " " + i.x + " " + i.y;
        else if (i.type === _.SMOOTH_CURVE_TO) r += (i.relative ? "s" : "S") + i.x2 + " " + i.y2 + " " + i.x + " " + i.y;
        else if (i.type === _.QUAD_TO) r += (i.relative ? "q" : "Q") + i.x1 + " " + i.y1 + " " + i.x + " " + i.y;
        else if (i.type === _.SMOOTH_QUAD_TO) r += (i.relative ? "t" : "T") + i.x + " " + i.y;
        else {
            if (i.type !== _.ARC) throw new Error('Unexpected command type "' + i.type + '" at index ' + e + ".");
            r += (i.relative ? "a" : "A") + i.rX + " " + i.rY + " " + i.xRot + " " + +i.lArcFlag + " " + +i.sweepFlag + " " + i.x + " " + i.y;
        }
    }
    return r;
}
function i(t, r) {
    var e = t[0], i = t[1];
    return [
        e * Math.cos(r) - i * Math.sin(r),
        e * Math.sin(r) + i * Math.cos(r)
    ];
}
function a() {
    for(var t = [], r = 0; r < arguments.length; r++)t[r] = arguments[r];
    for(var e = 0; e < t.length; e++)if ("number" != typeof t[e]) throw new Error("assertNumbers arguments[" + e + "] is not a number. " + typeof t[e] + " == typeof " + t[e]);
    return !0;
}
var n = Math.PI;
function o(t, r, e) {
    t.lArcFlag = 0 === t.lArcFlag ? 0 : 1, t.sweepFlag = 0 === t.sweepFlag ? 0 : 1;
    var a = t.rX, o = t.rY, s = t.x, u = t.y;
    a = Math.abs(t.rX), o = Math.abs(t.rY);
    var h = i([
        (r - s) / 2,
        (e - u) / 2
    ], -t.xRot / 180 * n), c = h[0], y = h[1], p = Math.pow(c, 2) / Math.pow(a, 2) + Math.pow(y, 2) / Math.pow(o, 2);
    1 < p && (a *= Math.sqrt(p), o *= Math.sqrt(p)), t.rX = a, t.rY = o;
    var m = Math.pow(a, 2) * Math.pow(y, 2) + Math.pow(o, 2) * Math.pow(c, 2), O = (t.lArcFlag !== t.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(a, 2) * Math.pow(o, 2) - m) / m)), l = a * y / o * O, T = -o * c / a * O, v = i([
        l,
        T
    ], t.xRot / 180 * n);
    t.cX = v[0] + (r + s) / 2, t.cY = v[1] + (e + u) / 2, t.phi1 = Math.atan2((y - T) / o, (c - l) / a), t.phi2 = Math.atan2((-y - T) / o, (-c - l) / a), 0 === t.sweepFlag && t.phi2 > t.phi1 && (t.phi2 -= 2 * n), 1 === t.sweepFlag && t.phi2 < t.phi1 && (t.phi2 += 2 * n), t.phi1 *= 180 / n, t.phi2 *= 180 / n;
}
function s(t, r, e) {
    a(t, r, e);
    var i = t * t + r * r - e * e;
    if (0 > i) return [];
    if (0 === i) return [
        [
            t * e / (t * t + r * r),
            r * e / (t * t + r * r)
        ]
    ];
    var n = Math.sqrt(i);
    return [
        [
            (t * e + r * n) / (t * t + r * r),
            (r * e - t * n) / (t * t + r * r)
        ],
        [
            (t * e - r * n) / (t * t + r * r),
            (r * e + t * n) / (t * t + r * r)
        ]
    ];
}
var u, h = Math.PI / 180;
function c(t, r, e) {
    return (1 - e) * t + e * r;
}
function y(t, r, e, i) {
    return t + Math.cos(i / 180 * n) * r + Math.sin(i / 180 * n) * e;
}
function p(t, r, e, i) {
    var a = 1e-6, n = r - t, o = e - r, s = 3 * n + 3 * (i - e) - 6 * o, u = 6 * (o - n), h = 3 * n;
    return Math.abs(s) < a ? [
        -h / u
    ] : function(t, r, e) {
        void 0 === e && (e = 1e-6);
        var i = t * t / 4 - r;
        if (i < -e) return [];
        if (i <= e) return [
            -t / 2
        ];
        var a = Math.sqrt(i);
        return [
            -t / 2 - a,
            -t / 2 + a
        ];
    }(u / s, h / s, a);
}
function m(t, r, e, i, a) {
    var n = 1 - a;
    return t * (n * n * n) + r * (3 * n * n * a) + e * (3 * n * a * a) + i * (a * a * a);
}
!function(t) {
    function r() {
        return u(function(t, r, e) {
            return t.relative && (void 0 !== t.x1 && (t.x1 += r), void 0 !== t.y1 && (t.y1 += e), void 0 !== t.x2 && (t.x2 += r), void 0 !== t.y2 && (t.y2 += e), void 0 !== t.x && (t.x += r), void 0 !== t.y && (t.y += e), t.relative = !1), t;
        });
    }
    function e() {
        var t = NaN, r = NaN, e = NaN, i = NaN;
        return u(function(a, n, o) {
            return a.type & _.SMOOTH_CURVE_TO && (a.type = _.CURVE_TO, t = isNaN(t) ? n : t, r = isNaN(r) ? o : r, a.x1 = a.relative ? n - t : 2 * n - t, a.y1 = a.relative ? o - r : 2 * o - r), a.type & _.CURVE_TO ? (t = a.relative ? n + a.x2 : a.x2, r = a.relative ? o + a.y2 : a.y2) : (t = NaN, r = NaN), a.type & _.SMOOTH_QUAD_TO && (a.type = _.QUAD_TO, e = isNaN(e) ? n : e, i = isNaN(i) ? o : i, a.x1 = a.relative ? n - e : 2 * n - e, a.y1 = a.relative ? o - i : 2 * o - i), a.type & _.QUAD_TO ? (e = a.relative ? n + a.x1 : a.x1, i = a.relative ? o + a.y1 : a.y1) : (e = NaN, i = NaN), a;
        });
    }
    function n() {
        var t = NaN, r = NaN;
        return u(function(e, i, a) {
            if (e.type & _.SMOOTH_QUAD_TO && (e.type = _.QUAD_TO, t = isNaN(t) ? i : t, r = isNaN(r) ? a : r, e.x1 = e.relative ? i - t : 2 * i - t, e.y1 = e.relative ? a - r : 2 * a - r), e.type & _.QUAD_TO) {
                t = e.relative ? i + e.x1 : e.x1, r = e.relative ? a + e.y1 : e.y1;
                var n = e.x1, o = e.y1;
                e.type = _.CURVE_TO, e.x1 = ((e.relative ? 0 : i) + 2 * n) / 3, e.y1 = ((e.relative ? 0 : a) + 2 * o) / 3, e.x2 = (e.x + 2 * n) / 3, e.y2 = (e.y + 2 * o) / 3;
            } else t = NaN, r = NaN;
            return e;
        });
    }
    function u(t) {
        var r = 0, e = 0, i = NaN, a = NaN;
        return function(n) {
            if (isNaN(i) && !(n.type & _.MOVE_TO)) throw new Error("path must start with moveto");
            var o = t(n, r, e, i, a);
            return n.type & _.CLOSE_PATH && (r = i, e = a), void 0 !== n.x && (r = n.relative ? r + n.x : n.x), void 0 !== n.y && (e = n.relative ? e + n.y : n.y), n.type & _.MOVE_TO && (i = r, a = e), o;
        };
    }
    function O(t, r, e, i, n, o) {
        return a(t, r, e, i, n, o), u(function(a, s, u, h) {
            var c = a.x1, y = a.x2, p = a.relative && !isNaN(h), m = void 0 !== a.x ? a.x : p ? 0 : s, O = void 0 !== a.y ? a.y : p ? 0 : u;
            function l(t) {
                return t * t;
            }
            a.type & _.HORIZ_LINE_TO && 0 !== r && (a.type = _.LINE_TO, a.y = a.relative ? 0 : u), a.type & _.VERT_LINE_TO && 0 !== e && (a.type = _.LINE_TO, a.x = a.relative ? 0 : s), void 0 !== a.x && (a.x = a.x * t + O * e + (p ? 0 : n)), void 0 !== a.y && (a.y = m * r + a.y * i + (p ? 0 : o)), void 0 !== a.x1 && (a.x1 = a.x1 * t + a.y1 * e + (p ? 0 : n)), void 0 !== a.y1 && (a.y1 = c * r + a.y1 * i + (p ? 0 : o)), void 0 !== a.x2 && (a.x2 = a.x2 * t + a.y2 * e + (p ? 0 : n)), void 0 !== a.y2 && (a.y2 = y * r + a.y2 * i + (p ? 0 : o));
            var T = t * i - r * e;
            if (void 0 !== a.xRot && (1 !== t || 0 !== r || 0 !== e || 1 !== i)) {
                if (0 === T) delete a.rX, delete a.rY, delete a.xRot, delete a.lArcFlag, delete a.sweepFlag, a.type = _.LINE_TO;
                else {
                    var v = a.xRot * Math.PI / 180, f = Math.sin(v), N = Math.cos(v), x = 1 / l(a.rX), d = 1 / l(a.rY), E = l(N) * x + l(f) * d, A = 2 * f * N * (x - d), C = l(f) * x + l(N) * d, M = E * i * i - A * r * i + C * r * r, R = A * (t * i + r * e) - 2 * (E * e * i + C * t * r), g = E * e * e - A * t * e + C * t * t, I = (Math.atan2(R, M - g) + Math.PI) % Math.PI / 2, S = Math.sin(I), L = Math.cos(I);
                    a.rX = Math.abs(T) / Math.sqrt(M * l(L) + R * S * L + g * l(S)), a.rY = Math.abs(T) / Math.sqrt(M * l(S) - R * S * L + g * l(L)), a.xRot = 180 * I / Math.PI;
                }
            }
            return void 0 !== a.sweepFlag && 0 > T && (a.sweepFlag = +!a.sweepFlag), a;
        });
    }
    function l() {
        return function(t) {
            var r = {};
            for(var e in t)r[e] = t[e];
            return r;
        };
    }
    t.ROUND = function(t) {
        function r(r) {
            return Math.round(r * t) / t;
        }
        return void 0 === t && (t = 1e13), a(t), function(t) {
            return void 0 !== t.x1 && (t.x1 = r(t.x1)), void 0 !== t.y1 && (t.y1 = r(t.y1)), void 0 !== t.x2 && (t.x2 = r(t.x2)), void 0 !== t.y2 && (t.y2 = r(t.y2)), void 0 !== t.x && (t.x = r(t.x)), void 0 !== t.y && (t.y = r(t.y)), void 0 !== t.rX && (t.rX = r(t.rX)), void 0 !== t.rY && (t.rY = r(t.rY)), t;
        };
    }, t.TO_ABS = r, t.TO_REL = function() {
        return u(function(t, r, e) {
            return t.relative || (void 0 !== t.x1 && (t.x1 -= r), void 0 !== t.y1 && (t.y1 -= e), void 0 !== t.x2 && (t.x2 -= r), void 0 !== t.y2 && (t.y2 -= e), void 0 !== t.x && (t.x -= r), void 0 !== t.y && (t.y -= e), t.relative = !0), t;
        });
    }, t.NORMALIZE_HVZ = function(t, r, e) {
        return void 0 === t && (t = !0), void 0 === r && (r = !0), void 0 === e && (e = !0), u(function(i, a, n, o, s) {
            if (isNaN(o) && !(i.type & _.MOVE_TO)) throw new Error("path must start with moveto");
            return r && i.type & _.HORIZ_LINE_TO && (i.type = _.LINE_TO, i.y = i.relative ? 0 : n), e && i.type & _.VERT_LINE_TO && (i.type = _.LINE_TO, i.x = i.relative ? 0 : a), t && i.type & _.CLOSE_PATH && (i.type = _.LINE_TO, i.x = i.relative ? o - a : o, i.y = i.relative ? s - n : s), i.type & _.ARC && (0 === i.rX || 0 === i.rY) && (i.type = _.LINE_TO, delete i.rX, delete i.rY, delete i.xRot, delete i.lArcFlag, delete i.sweepFlag), i;
        });
    }, t.NORMALIZE_ST = e, t.QT_TO_C = n, t.INFO = u, t.SANITIZE = function(t) {
        void 0 === t && (t = 0), a(t);
        var r = NaN, e = NaN, i = NaN, n = NaN;
        return u(function(a, o, s, u, h) {
            var c = Math.abs, y = !1, p = 0, m = 0;
            if (a.type & _.SMOOTH_CURVE_TO && (p = isNaN(r) ? 0 : o - r, m = isNaN(e) ? 0 : s - e), a.type & (_.CURVE_TO | _.SMOOTH_CURVE_TO) ? (r = a.relative ? o + a.x2 : a.x2, e = a.relative ? s + a.y2 : a.y2) : (r = NaN, e = NaN), a.type & _.SMOOTH_QUAD_TO ? (i = isNaN(i) ? o : 2 * o - i, n = isNaN(n) ? s : 2 * s - n) : a.type & _.QUAD_TO ? (i = a.relative ? o + a.x1 : a.x1, n = a.relative ? s + a.y1 : a.y2) : (i = NaN, n = NaN), a.type & _.LINE_COMMANDS || a.type & _.ARC && (0 === a.rX || 0 === a.rY || !a.lArcFlag) || a.type & _.CURVE_TO || a.type & _.SMOOTH_CURVE_TO || a.type & _.QUAD_TO || a.type & _.SMOOTH_QUAD_TO) {
                var O = void 0 === a.x ? 0 : a.relative ? a.x : a.x - o, l = void 0 === a.y ? 0 : a.relative ? a.y : a.y - s;
                p = isNaN(i) ? void 0 === a.x1 ? p : a.relative ? a.x : a.x1 - o : i - o, m = isNaN(n) ? void 0 === a.y1 ? m : a.relative ? a.y : a.y1 - s : n - s;
                var T = void 0 === a.x2 ? 0 : a.relative ? a.x : a.x2 - o, v = void 0 === a.y2 ? 0 : a.relative ? a.y : a.y2 - s;
                c(O) <= t && c(l) <= t && c(p) <= t && c(m) <= t && c(T) <= t && c(v) <= t && (y = !0);
            }
            return a.type & _.CLOSE_PATH && c(o - u) <= t && c(s - h) <= t && (y = !0), y ? [] : a;
        });
    }, t.MATRIX = O, t.ROTATE = function(t, r, e) {
        void 0 === r && (r = 0), void 0 === e && (e = 0), a(t, r, e);
        var i = Math.sin(t), n = Math.cos(t);
        return O(n, i, -i, n, r - r * n + e * i, e - r * i - e * n);
    }, t.TRANSLATE = function(t, r) {
        return void 0 === r && (r = 0), a(t, r), O(1, 0, 0, 1, t, r);
    }, t.SCALE = function(t, r) {
        return void 0 === r && (r = t), a(t, r), O(t, 0, 0, r, 0, 0);
    }, t.SKEW_X = function(t) {
        return a(t), O(1, 0, Math.atan(t), 1, 0, 0);
    }, t.SKEW_Y = function(t) {
        return a(t), O(1, Math.atan(t), 0, 1, 0, 0);
    }, t.X_AXIS_SYMMETRY = function(t) {
        return void 0 === t && (t = 0), a(t), O(-1, 0, 0, 1, t, 0);
    }, t.Y_AXIS_SYMMETRY = function(t) {
        return void 0 === t && (t = 0), a(t), O(1, 0, 0, -1, 0, t);
    }, t.A_TO_C = function() {
        return u(function(t, r, e) {
            return _.ARC === t.type ? function(t, r, e) {
                var a, n, s, u;
                t.cX || o(t, r, e);
                for(var y = Math.min(t.phi1, t.phi2), p = Math.max(t.phi1, t.phi2) - y, m = Math.ceil(p / 90), O = new Array(m), l = r, T = e, v = 0; v < m; v++){
                    var f = c(t.phi1, t.phi2, v / m), N = c(t.phi1, t.phi2, (v + 1) / m), x = N - f, d = 4 / 3 * Math.tan(x * h / 4), E = [
                        Math.cos(f * h) - d * Math.sin(f * h),
                        Math.sin(f * h) + d * Math.cos(f * h)
                    ], A = E[0], C = E[1], M = [
                        Math.cos(N * h),
                        Math.sin(N * h)
                    ], R = M[0], g = M[1], I = [
                        R + d * Math.sin(N * h),
                        g - d * Math.cos(N * h)
                    ], S = I[0], L = I[1];
                    O[v] = {
                        relative: t.relative,
                        type: _.CURVE_TO
                    };
                    var H = function(r, e) {
                        var a = i([
                            r * t.rX,
                            e * t.rY
                        ], t.xRot), n = a[0], o = a[1];
                        return [
                            t.cX + n,
                            t.cY + o
                        ];
                    };
                    a = H(A, C), O[v].x1 = a[0], O[v].y1 = a[1], n = H(S, L), O[v].x2 = n[0], O[v].y2 = n[1], s = H(R, g), O[v].x = s[0], O[v].y = s[1], t.relative && (O[v].x1 -= l, O[v].y1 -= T, O[v].x2 -= l, O[v].y2 -= T, O[v].x -= l, O[v].y -= T), l = (u = [
                        O[v].x,
                        O[v].y
                    ])[0], T = u[1];
                }
                return O;
            }(t, t.relative ? 0 : r, t.relative ? 0 : e) : t;
        });
    }, t.ANNOTATE_ARCS = function() {
        return u(function(t, r, e) {
            return t.relative && (r = 0, e = 0), _.ARC === t.type && o(t, r, e), t;
        });
    }, t.CLONE = l, t.CALCULATE_BOUNDS = function() {
        var t = function(t) {
            var r = {};
            for(var e in t)r[e] = t[e];
            return r;
        }, i = r(), a = n(), h = e(), c = u(function(r, e, n) {
            var u = h(a(i(t(r))));
            function O(t) {
                t > c.maxX && (c.maxX = t), t < c.minX && (c.minX = t);
            }
            function l(t) {
                t > c.maxY && (c.maxY = t), t < c.minY && (c.minY = t);
            }
            if (u.type & _.DRAWING_COMMANDS && (O(e), l(n)), u.type & _.HORIZ_LINE_TO && O(u.x), u.type & _.VERT_LINE_TO && l(u.y), u.type & _.LINE_TO && (O(u.x), l(u.y)), u.type & _.CURVE_TO) {
                O(u.x), l(u.y);
                for(var T = 0, v = p(e, u.x1, u.x2, u.x); T < v.length; T++)0 < (w = v[T]) && 1 > w && O(m(e, u.x1, u.x2, u.x, w));
                for(var f = 0, N = p(n, u.y1, u.y2, u.y); f < N.length; f++)0 < (w = N[f]) && 1 > w && l(m(n, u.y1, u.y2, u.y, w));
            }
            if (u.type & _.ARC) {
                O(u.x), l(u.y), o(u, e, n);
                for(var x = u.xRot / 180 * Math.PI, d = Math.cos(x) * u.rX, E = Math.sin(x) * u.rX, A = -Math.sin(x) * u.rY, C = Math.cos(x) * u.rY, M = u.phi1 < u.phi2 ? [
                    u.phi1,
                    u.phi2
                ] : -180 > u.phi2 ? [
                    u.phi2 + 360,
                    u.phi1 + 360
                ] : [
                    u.phi2,
                    u.phi1
                ], R = M[0], g = M[1], I = function(t) {
                    var r = t[0], e = t[1], i = 180 * Math.atan2(e, r) / Math.PI;
                    return i < R ? i + 360 : i;
                }, S = 0, L = s(A, -d, 0).map(I); S < L.length; S++)(w = L[S]) > R && w < g && O(y(u.cX, d, A, w));
                for(var H = 0, U = s(C, -E, 0).map(I); H < U.length; H++){
                    var w;
                    (w = U[H]) > R && w < g && l(y(u.cY, E, C, w));
                }
            }
            return r;
        });
        return c.minX = 1 / 0, c.maxX = -1 / 0, c.minY = 1 / 0, c.maxY = -1 / 0, c;
    };
}(u || (u = {}));
var O, l = function() {
    function t() {}
    return t.prototype.round = function(t) {
        return this.transform(u.ROUND(t));
    }, t.prototype.toAbs = function() {
        return this.transform(u.TO_ABS());
    }, t.prototype.toRel = function() {
        return this.transform(u.TO_REL());
    }, t.prototype.normalizeHVZ = function(t, r, e) {
        return this.transform(u.NORMALIZE_HVZ(t, r, e));
    }, t.prototype.normalizeST = function() {
        return this.transform(u.NORMALIZE_ST());
    }, t.prototype.qtToC = function() {
        return this.transform(u.QT_TO_C());
    }, t.prototype.aToC = function() {
        return this.transform(u.A_TO_C());
    }, t.prototype.sanitize = function(t) {
        return this.transform(u.SANITIZE(t));
    }, t.prototype.translate = function(t, r) {
        return this.transform(u.TRANSLATE(t, r));
    }, t.prototype.scale = function(t, r) {
        return this.transform(u.SCALE(t, r));
    }, t.prototype.rotate = function(t, r, e) {
        return this.transform(u.ROTATE(t, r, e));
    }, t.prototype.matrix = function(t, r, e, i, a, n) {
        return this.transform(u.MATRIX(t, r, e, i, a, n));
    }, t.prototype.skewX = function(t) {
        return this.transform(u.SKEW_X(t));
    }, t.prototype.skewY = function(t) {
        return this.transform(u.SKEW_Y(t));
    }, t.prototype.xSymmetry = function(t) {
        return this.transform(u.X_AXIS_SYMMETRY(t));
    }, t.prototype.ySymmetry = function(t) {
        return this.transform(u.Y_AXIS_SYMMETRY(t));
    }, t.prototype.annotateArcs = function() {
        return this.transform(u.ANNOTATE_ARCS());
    }, t;
}(), T = function(t) {
    return " " === t || "	" === t || "\r" === t || "\n" === t;
}, v = function(t) {
    return "0".charCodeAt(0) <= t.charCodeAt(0) && t.charCodeAt(0) <= "9".charCodeAt(0);
}, f = function(t) {
    function e() {
        var r = t.call(this) || this;
        return r.curNumber = "", r.curCommandType = -1, r.curCommandRelative = !1, r.canParseCommandOrComma = !0, r.curNumberHasExp = !1, r.curNumberHasExpDigits = !1, r.curNumberHasDecimal = !1, r.curArgs = [], r;
    }
    return r(e, t), e.prototype.finish = function(t) {
        if (void 0 === t && (t = []), this.parse(" ", t), 0 !== this.curArgs.length || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
        return t;
    }, e.prototype.parse = function(t, r) {
        var e = this;
        void 0 === r && (r = []);
        for(var i = function(t) {
            r.push(t), e.curArgs.length = 0, e.canParseCommandOrComma = !0;
        }, a = 0; a < t.length; a++){
            var n = t[a], o = !(this.curCommandType !== _.ARC || 3 !== this.curArgs.length && 4 !== this.curArgs.length || 1 !== this.curNumber.length || "0" !== this.curNumber && "1" !== this.curNumber), s = v(n) && ("0" === this.curNumber && "0" === n || o);
            if (!v(n) || s) {
                if ("e" !== n && "E" !== n) {
                    if ("-" !== n && "+" !== n || !this.curNumberHasExp || this.curNumberHasExpDigits) {
                        if ("." !== n || this.curNumberHasExp || this.curNumberHasDecimal || o) {
                            if (this.curNumber && -1 !== this.curCommandType) {
                                var u = Number(this.curNumber);
                                if (isNaN(u)) throw new SyntaxError("Invalid number ending at " + a);
                                if (this.curCommandType === _.ARC) {
                                    if (0 === this.curArgs.length || 1 === this.curArgs.length) {
                                        if (0 > u) throw new SyntaxError('Expected positive number, got "' + u + '" at index "' + a + '"');
                                    } else if ((3 === this.curArgs.length || 4 === this.curArgs.length) && "0" !== this.curNumber && "1" !== this.curNumber) throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + a + '"');
                                }
                                this.curArgs.push(u), this.curArgs.length === N[this.curCommandType] && (_.HORIZ_LINE_TO === this.curCommandType ? i({
                                    type: _.HORIZ_LINE_TO,
                                    relative: this.curCommandRelative,
                                    x: u
                                }) : _.VERT_LINE_TO === this.curCommandType ? i({
                                    type: _.VERT_LINE_TO,
                                    relative: this.curCommandRelative,
                                    y: u
                                }) : this.curCommandType === _.MOVE_TO || this.curCommandType === _.LINE_TO || this.curCommandType === _.SMOOTH_QUAD_TO ? (i({
                                    type: this.curCommandType,
                                    relative: this.curCommandRelative,
                                    x: this.curArgs[0],
                                    y: this.curArgs[1]
                                }), _.MOVE_TO === this.curCommandType && (this.curCommandType = _.LINE_TO)) : this.curCommandType === _.CURVE_TO ? i({
                                    type: _.CURVE_TO,
                                    relative: this.curCommandRelative,
                                    x1: this.curArgs[0],
                                    y1: this.curArgs[1],
                                    x2: this.curArgs[2],
                                    y2: this.curArgs[3],
                                    x: this.curArgs[4],
                                    y: this.curArgs[5]
                                }) : this.curCommandType === _.SMOOTH_CURVE_TO ? i({
                                    type: _.SMOOTH_CURVE_TO,
                                    relative: this.curCommandRelative,
                                    x2: this.curArgs[0],
                                    y2: this.curArgs[1],
                                    x: this.curArgs[2],
                                    y: this.curArgs[3]
                                }) : this.curCommandType === _.QUAD_TO ? i({
                                    type: _.QUAD_TO,
                                    relative: this.curCommandRelative,
                                    x1: this.curArgs[0],
                                    y1: this.curArgs[1],
                                    x: this.curArgs[2],
                                    y: this.curArgs[3]
                                }) : this.curCommandType === _.ARC && i({
                                    type: _.ARC,
                                    relative: this.curCommandRelative,
                                    rX: this.curArgs[0],
                                    rY: this.curArgs[1],
                                    xRot: this.curArgs[2],
                                    lArcFlag: this.curArgs[3],
                                    sweepFlag: this.curArgs[4],
                                    x: this.curArgs[5],
                                    y: this.curArgs[6]
                                })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
                            }
                            if (!T(n)) {
                                if ("," === n && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;
                                else if ("+" !== n && "-" !== n && "." !== n) {
                                    if (s) this.curNumber = n, this.curNumberHasDecimal = !1;
                                    else {
                                        if (0 !== this.curArgs.length) throw new SyntaxError("Unterminated command at index " + a + ".");
                                        if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + n + '" at index ' + a + ". Command cannot follow comma");
                                        if (this.canParseCommandOrComma = !1, "z" !== n && "Z" !== n) {
                                            if ("h" === n || "H" === n) this.curCommandType = _.HORIZ_LINE_TO, this.curCommandRelative = "h" === n;
                                            else if ("v" === n || "V" === n) this.curCommandType = _.VERT_LINE_TO, this.curCommandRelative = "v" === n;
                                            else if ("m" === n || "M" === n) this.curCommandType = _.MOVE_TO, this.curCommandRelative = "m" === n;
                                            else if ("l" === n || "L" === n) this.curCommandType = _.LINE_TO, this.curCommandRelative = "l" === n;
                                            else if ("c" === n || "C" === n) this.curCommandType = _.CURVE_TO, this.curCommandRelative = "c" === n;
                                            else if ("s" === n || "S" === n) this.curCommandType = _.SMOOTH_CURVE_TO, this.curCommandRelative = "s" === n;
                                            else if ("q" === n || "Q" === n) this.curCommandType = _.QUAD_TO, this.curCommandRelative = "q" === n;
                                            else if ("t" === n || "T" === n) this.curCommandType = _.SMOOTH_QUAD_TO, this.curCommandRelative = "t" === n;
                                            else {
                                                if ("a" !== n && "A" !== n) throw new SyntaxError('Unexpected character "' + n + '" at index ' + a + ".");
                                                this.curCommandType = _.ARC, this.curCommandRelative = "a" === n;
                                            }
                                        } else r.push({
                                            type: _.CLOSE_PATH
                                        }), this.canParseCommandOrComma = !0, this.curCommandType = -1;
                                    }
                                } else this.curNumber = n, this.curNumberHasDecimal = "." === n;
                            }
                        } else this.curNumber += n, this.curNumberHasDecimal = !0;
                    } else this.curNumber += n;
                } else this.curNumber += n, this.curNumberHasExp = !0;
            } else this.curNumber += n, this.curNumberHasExpDigits = this.curNumberHasExp;
        }
        return r;
    }, e.prototype.transform = function(t) {
        return Object.create(this, {
            parse: {
                value: function(r, e) {
                    void 0 === e && (e = []);
                    for(var i = 0, a = Object.getPrototypeOf(this).parse.call(this, r); i < a.length; i++){
                        var n = a[i], o = t(n);
                        Array.isArray(o) ? e.push.apply(e, o) : e.push(o);
                    }
                    return e;
                }
            }
        });
    }, e;
}(l), _ = function(t) {
    function i(r) {
        var e = t.call(this) || this;
        return e.commands = "string" == typeof r ? i.parse(r) : r, e;
    }
    return r(i, t), i.prototype.encode = function() {
        return i.encode(this.commands);
    }, i.prototype.getBounds = function() {
        var t = u.CALCULATE_BOUNDS();
        return this.transform(t), t;
    }, i.prototype.transform = function(t) {
        for(var r = [], e = 0, i = this.commands; e < i.length; e++){
            var a = t(i[e]);
            Array.isArray(a) ? r.push.apply(r, a) : r.push(a);
        }
        return this.commands = r, this;
    }, i.encode = function(t) {
        return e(t);
    }, i.parse = function(t) {
        var r = new f, e = [];
        return r.parse(t, e), r.finish(e), e;
    }, i.CLOSE_PATH = 1, i.MOVE_TO = 2, i.HORIZ_LINE_TO = 4, i.VERT_LINE_TO = 8, i.LINE_TO = 16, i.CURVE_TO = 32, i.SMOOTH_CURVE_TO = 64, i.QUAD_TO = 128, i.SMOOTH_QUAD_TO = 256, i.ARC = 512, i.LINE_COMMANDS = i.LINE_TO | i.HORIZ_LINE_TO | i.VERT_LINE_TO, i.DRAWING_COMMANDS = i.HORIZ_LINE_TO | i.VERT_LINE_TO | i.LINE_TO | i.CURVE_TO | i.SMOOTH_CURVE_TO | i.QUAD_TO | i.SMOOTH_QUAD_TO | i.ARC, i;
}(l), N = ((O = {})[_.MOVE_TO] = 2, O[_.LINE_TO] = 2, O[_.HORIZ_LINE_TO] = 1, O[_.VERT_LINE_TO] = 1, O[_.CLOSE_PATH] = 0, O[_.QUAD_TO] = 4, O[_.SMOOTH_QUAD_TO] = 2, O[_.CURVE_TO] = 6, O[_.SMOOTH_CURVE_TO] = 4, O[_.ARC] = 7, O);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8bEcW":[function(require,module,exports) {
"use strict";
var PROPER_FUNCTION_NAME = require("58c483c968296564").PROPER;
var defineBuiltIn = require("a3d1391de0d8eafe");
var anObject = require("1af2036e15c42d09");
var $toString = require("d588b328dd8e19d7");
var fails = require("b2aecce11070e14a");
var getRegExpFlags = require("804cac8fa6ed356a");
var TO_STRING = "toString";
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];
var NOT_GENERIC = fails(function() {
    return nativeToString.call({
        source: "a",
        flags: "b"
    }) != "/a/b";
});
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;
// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) defineBuiltIn(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return "/" + pattern + "/" + flags;
}, {
    unsafe: true
});

},{"58c483c968296564":"l6Kgd","a3d1391de0d8eafe":"6XwEX","1af2036e15c42d09":"4isCr","d588b328dd8e19d7":"a1yl4","b2aecce11070e14a":"hL6D2","804cac8fa6ed356a":"h22kD"}],"h22kD":[function(require,module,exports) {
var call = require("8f7c62f87670a76e");
var hasOwn = require("e7d9bc386145c26d");
var isPrototypeOf = require("4c567c0b9a002fb8");
var regExpFlags = require("a9544268847865c4");
var RegExpPrototype = RegExp.prototype;
module.exports = function(R) {
    var flags = R.flags;
    return flags === undefined && !("flags" in RegExpPrototype) && !hasOwn(R, "flags") && isPrototypeOf(RegExpPrototype, R) ? call(regExpFlags, R) : flags;
};

},{"8f7c62f87670a76e":"d7JlP","e7d9bc386145c26d":"gC2Q5","4c567c0b9a002fb8":"3jtKQ","a9544268847865c4":"9bz1x"}],"imAgF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BlurStack", ()=>BlurStack);
parcelHelpers.export(exports, "canvasRGB", ()=>processCanvasRGB);
parcelHelpers.export(exports, "canvasRGBA", ()=>processCanvasRGBA);
parcelHelpers.export(exports, "image", ()=>processImage);
parcelHelpers.export(exports, "imageDataRGB", ()=>processImageDataRGB);
parcelHelpers.export(exports, "imageDataRGBA", ()=>processImageDataRGBA);
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj) {
        return typeof obj;
    };
    else _typeof = function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
/* eslint-disable no-bitwise -- used for calculations */ /* eslint-disable unicorn/prefer-query-selector -- aiming at
  backward-compatibility */ /**
* StackBlur - a fast almost Gaussian Blur For Canvas
*
* In case you find this class useful - especially in commercial projects -
* I am not totally unhappy for a small donation to my PayPal account
* mario@quasimondo.de
*
* Or support me on flattr:
* {@link https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript}.
*
* @module StackBlur
* @author Mario Klingemann
* Contact: mario@quasimondo.com
* Website: {@link http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html}
* Twitter: @quasimondo
*
* @copyright (c) 2010 Mario Klingemann
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/ var mulTable = [
    512,
    512,
    456,
    512,
    328,
    456,
    335,
    512,
    405,
    328,
    271,
    456,
    388,
    335,
    292,
    512,
    454,
    405,
    364,
    328,
    298,
    271,
    496,
    456,
    420,
    388,
    360,
    335,
    312,
    292,
    273,
    512,
    482,
    454,
    428,
    405,
    383,
    364,
    345,
    328,
    312,
    298,
    284,
    271,
    259,
    496,
    475,
    456,
    437,
    420,
    404,
    388,
    374,
    360,
    347,
    335,
    323,
    312,
    302,
    292,
    282,
    273,
    265,
    512,
    497,
    482,
    468,
    454,
    441,
    428,
    417,
    405,
    394,
    383,
    373,
    364,
    354,
    345,
    337,
    328,
    320,
    312,
    305,
    298,
    291,
    284,
    278,
    271,
    265,
    259,
    507,
    496,
    485,
    475,
    465,
    456,
    446,
    437,
    428,
    420,
    412,
    404,
    396,
    388,
    381,
    374,
    367,
    360,
    354,
    347,
    341,
    335,
    329,
    323,
    318,
    312,
    307,
    302,
    297,
    292,
    287,
    282,
    278,
    273,
    269,
    265,
    261,
    512,
    505,
    497,
    489,
    482,
    475,
    468,
    461,
    454,
    447,
    441,
    435,
    428,
    422,
    417,
    411,
    405,
    399,
    394,
    389,
    383,
    378,
    373,
    368,
    364,
    359,
    354,
    350,
    345,
    341,
    337,
    332,
    328,
    324,
    320,
    316,
    312,
    309,
    305,
    301,
    298,
    294,
    291,
    287,
    284,
    281,
    278,
    274,
    271,
    268,
    265,
    262,
    259,
    257,
    507,
    501,
    496,
    491,
    485,
    480,
    475,
    470,
    465,
    460,
    456,
    451,
    446,
    442,
    437,
    433,
    428,
    424,
    420,
    416,
    412,
    408,
    404,
    400,
    396,
    392,
    388,
    385,
    381,
    377,
    374,
    370,
    367,
    363,
    360,
    357,
    354,
    350,
    347,
    344,
    341,
    338,
    335,
    332,
    329,
    326,
    323,
    320,
    318,
    315,
    312,
    310,
    307,
    304,
    302,
    299,
    297,
    294,
    292,
    289,
    287,
    285,
    282,
    280,
    278,
    275,
    273,
    271,
    269,
    267,
    265,
    263,
    261,
    259
];
var shgTable = [
    9,
    11,
    12,
    13,
    13,
    14,
    14,
    15,
    15,
    15,
    15,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24
];
/**
 * @param {string|HTMLImageElement} img
 * @param {string|HTMLCanvasElement} canvas
 * @param {Float} radius
 * @param {boolean} blurAlphaChannel
 * @param {boolean} useOffset
 * @param {boolean} skipStyles
 * @returns {undefined}
 */ function processImage(img, canvas, radius, blurAlphaChannel, useOffset, skipStyles) {
    if (typeof img === "string") img = document.getElementById(img);
    if (!img || !("naturalWidth" in img)) return;
    var dimensionType = useOffset ? "offset" : "natural";
    var w = img[dimensionType + "Width"];
    var h = img[dimensionType + "Height"];
    if (typeof canvas === "string") canvas = document.getElementById(canvas);
    if (!canvas || !("getContext" in canvas)) return;
    if (!skipStyles) {
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
    }
    canvas.width = w;
    canvas.height = h;
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, w, h);
    context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, w, h);
    if (isNaN(radius) || radius < 1) return;
    if (blurAlphaChannel) processCanvasRGBA(canvas, 0, 0, w, h, radius);
    else processCanvasRGB(canvas, 0, 0, w, h, radius);
}
/**
 * @param {string|HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @throws {Error|TypeError}
 * @returns {ImageData} See {@link https://html.spec.whatwg.org/multipage/canvas.html#imagedata}
 */ function getImageDataFromCanvas(canvas, topX, topY, width, height) {
    if (typeof canvas === "string") canvas = document.getElementById(canvas);
    if (!canvas || _typeof(canvas) !== "object" || !("getContext" in canvas)) throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
    var context = canvas.getContext("2d");
    try {
        return context.getImageData(topX, topY, width, height);
    } catch (e) {
        throw new Error("unable to access image data: " + e);
    }
}
/**
 * @param {HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {undefined}
 */ function processCanvasRGBA(canvas, topX, topY, width, height, radius) {
    if (isNaN(radius) || radius < 1) return;
    radius |= 0;
    var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
    imageData = processImageDataRGBA(imageData, topX, topY, width, height, radius);
    canvas.getContext("2d").putImageData(imageData, topX, topY);
}
/**
 * @param {ImageData} imageData
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {ImageData}
 */ function processImageDataRGBA(imageData, topX, topY, width, height, radius) {
    var pixels = imageData.data;
    var div = 2 * radius + 1; // const w4 = width << 2;
    var widthMinus1 = width - 1;
    var heightMinus1 = height - 1;
    var radiusPlus1 = radius + 1;
    var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
    var stackStart = new BlurStack();
    var stack = stackStart;
    var stackEnd;
    for(var i = 1; i < div; i++){
        stack = stack.next = new BlurStack();
        if (i === radiusPlus1) stackEnd = stack;
    }
    stack.next = stackStart;
    var stackIn = null, stackOut = null, yw = 0, yi = 0;
    var mulSum = mulTable[radius];
    var shgSum = shgTable[radius];
    for(var y = 0; y < height; y++){
        stack = stackStart;
        var pr = pixels[yi], pg = pixels[yi + 1], pb = pixels[yi + 2], pa = pixels[yi + 3];
        for(var _i = 0; _i < radiusPlus1; _i++){
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack.a = pa;
            stack = stack.next;
        }
        var rInSum = 0, gInSum = 0, bInSum = 0, aInSum = 0, rOutSum = radiusPlus1 * pr, gOutSum = radiusPlus1 * pg, bOutSum = radiusPlus1 * pb, aOutSum = radiusPlus1 * pa, rSum = sumFactor * pr, gSum = sumFactor * pg, bSum = sumFactor * pb, aSum = sumFactor * pa;
        for(var _i2 = 1; _i2 < radiusPlus1; _i2++){
            var p = yi + ((widthMinus1 < _i2 ? widthMinus1 : _i2) << 2);
            var r = pixels[p], g = pixels[p + 1], b = pixels[p + 2], a = pixels[p + 3];
            var rbs = radiusPlus1 - _i2;
            rSum += (stack.r = r) * rbs;
            gSum += (stack.g = g) * rbs;
            bSum += (stack.b = b) * rbs;
            aSum += (stack.a = a) * rbs;
            rInSum += r;
            gInSum += g;
            bInSum += b;
            aInSum += a;
            stack = stack.next;
        }
        stackIn = stackStart;
        stackOut = stackEnd;
        for(var x = 0; x < width; x++){
            var paInitial = aSum * mulSum >> shgSum;
            pixels[yi + 3] = paInitial;
            if (paInitial !== 0) {
                var _a2 = 255 / paInitial;
                pixels[yi] = (rSum * mulSum >> shgSum) * _a2;
                pixels[yi + 1] = (gSum * mulSum >> shgSum) * _a2;
                pixels[yi + 2] = (bSum * mulSum >> shgSum) * _a2;
            } else pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
            rSum -= rOutSum;
            gSum -= gOutSum;
            bSum -= bOutSum;
            aSum -= aOutSum;
            rOutSum -= stackIn.r;
            gOutSum -= stackIn.g;
            bOutSum -= stackIn.b;
            aOutSum -= stackIn.a;
            var _p = x + radius + 1;
            _p = yw + (_p < widthMinus1 ? _p : widthMinus1) << 2;
            rInSum += stackIn.r = pixels[_p];
            gInSum += stackIn.g = pixels[_p + 1];
            bInSum += stackIn.b = pixels[_p + 2];
            aInSum += stackIn.a = pixels[_p + 3];
            rSum += rInSum;
            gSum += gInSum;
            bSum += bInSum;
            aSum += aInSum;
            stackIn = stackIn.next;
            var _stackOut = stackOut, _r = _stackOut.r, _g = _stackOut.g, _b = _stackOut.b, _a = _stackOut.a;
            rOutSum += _r;
            gOutSum += _g;
            bOutSum += _b;
            aOutSum += _a;
            rInSum -= _r;
            gInSum -= _g;
            bInSum -= _b;
            aInSum -= _a;
            stackOut = stackOut.next;
            yi += 4;
        }
        yw += width;
    }
    for(var _x = 0; _x < width; _x++){
        yi = _x << 2;
        var _pr = pixels[yi], _pg = pixels[yi + 1], _pb = pixels[yi + 2], _pa = pixels[yi + 3], _rOutSum = radiusPlus1 * _pr, _gOutSum = radiusPlus1 * _pg, _bOutSum = radiusPlus1 * _pb, _aOutSum = radiusPlus1 * _pa, _rSum = sumFactor * _pr, _gSum = sumFactor * _pg, _bSum = sumFactor * _pb, _aSum = sumFactor * _pa;
        stack = stackStart;
        for(var _i3 = 0; _i3 < radiusPlus1; _i3++){
            stack.r = _pr;
            stack.g = _pg;
            stack.b = _pb;
            stack.a = _pa;
            stack = stack.next;
        }
        var yp = width;
        var _gInSum = 0, _bInSum = 0, _aInSum = 0, _rInSum = 0;
        for(var _i4 = 1; _i4 <= radius; _i4++){
            yi = yp + _x << 2;
            var _rbs = radiusPlus1 - _i4;
            _rSum += (stack.r = _pr = pixels[yi]) * _rbs;
            _gSum += (stack.g = _pg = pixels[yi + 1]) * _rbs;
            _bSum += (stack.b = _pb = pixels[yi + 2]) * _rbs;
            _aSum += (stack.a = _pa = pixels[yi + 3]) * _rbs;
            _rInSum += _pr;
            _gInSum += _pg;
            _bInSum += _pb;
            _aInSum += _pa;
            stack = stack.next;
            if (_i4 < heightMinus1) yp += width;
        }
        yi = _x;
        stackIn = stackStart;
        stackOut = stackEnd;
        for(var _y = 0; _y < height; _y++){
            var _p2 = yi << 2;
            pixels[_p2 + 3] = _pa = _aSum * mulSum >> shgSum;
            if (_pa > 0) {
                _pa = 255 / _pa;
                pixels[_p2] = (_rSum * mulSum >> shgSum) * _pa;
                pixels[_p2 + 1] = (_gSum * mulSum >> shgSum) * _pa;
                pixels[_p2 + 2] = (_bSum * mulSum >> shgSum) * _pa;
            } else pixels[_p2] = pixels[_p2 + 1] = pixels[_p2 + 2] = 0;
            _rSum -= _rOutSum;
            _gSum -= _gOutSum;
            _bSum -= _bOutSum;
            _aSum -= _aOutSum;
            _rOutSum -= stackIn.r;
            _gOutSum -= stackIn.g;
            _bOutSum -= stackIn.b;
            _aOutSum -= stackIn.a;
            _p2 = _x + ((_p2 = _y + radiusPlus1) < heightMinus1 ? _p2 : heightMinus1) * width << 2;
            _rSum += _rInSum += stackIn.r = pixels[_p2];
            _gSum += _gInSum += stackIn.g = pixels[_p2 + 1];
            _bSum += _bInSum += stackIn.b = pixels[_p2 + 2];
            _aSum += _aInSum += stackIn.a = pixels[_p2 + 3];
            stackIn = stackIn.next;
            _rOutSum += _pr = stackOut.r;
            _gOutSum += _pg = stackOut.g;
            _bOutSum += _pb = stackOut.b;
            _aOutSum += _pa = stackOut.a;
            _rInSum -= _pr;
            _gInSum -= _pg;
            _bInSum -= _pb;
            _aInSum -= _pa;
            stackOut = stackOut.next;
            yi += width;
        }
    }
    return imageData;
}
/**
 * @param {HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {undefined}
 */ function processCanvasRGB(canvas, topX, topY, width, height, radius) {
    if (isNaN(radius) || radius < 1) return;
    radius |= 0;
    var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
    imageData = processImageDataRGB(imageData, topX, topY, width, height, radius);
    canvas.getContext("2d").putImageData(imageData, topX, topY);
}
/**
 * @param {ImageData} imageData
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {ImageData}
 */ function processImageDataRGB(imageData, topX, topY, width, height, radius) {
    var pixels = imageData.data;
    var div = 2 * radius + 1; // const w4 = width << 2;
    var widthMinus1 = width - 1;
    var heightMinus1 = height - 1;
    var radiusPlus1 = radius + 1;
    var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
    var stackStart = new BlurStack();
    var stack = stackStart;
    var stackEnd;
    for(var i = 1; i < div; i++){
        stack = stack.next = new BlurStack();
        if (i === radiusPlus1) stackEnd = stack;
    }
    stack.next = stackStart;
    var stackIn = null;
    var stackOut = null;
    var mulSum = mulTable[radius];
    var shgSum = shgTable[radius];
    var p, rbs;
    var yw = 0, yi = 0;
    for(var y = 0; y < height; y++){
        var pr = pixels[yi], pg = pixels[yi + 1], pb = pixels[yi + 2], rOutSum = radiusPlus1 * pr, gOutSum = radiusPlus1 * pg, bOutSum = radiusPlus1 * pb, rSum = sumFactor * pr, gSum = sumFactor * pg, bSum = sumFactor * pb;
        stack = stackStart;
        for(var _i5 = 0; _i5 < radiusPlus1; _i5++){
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack = stack.next;
        }
        var rInSum = 0, gInSum = 0, bInSum = 0;
        for(var _i6 = 1; _i6 < radiusPlus1; _i6++){
            p = yi + ((widthMinus1 < _i6 ? widthMinus1 : _i6) << 2);
            rSum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - _i6);
            gSum += (stack.g = pg = pixels[p + 1]) * rbs;
            bSum += (stack.b = pb = pixels[p + 2]) * rbs;
            rInSum += pr;
            gInSum += pg;
            bInSum += pb;
            stack = stack.next;
        }
        stackIn = stackStart;
        stackOut = stackEnd;
        for(var x = 0; x < width; x++){
            pixels[yi] = rSum * mulSum >> shgSum;
            pixels[yi + 1] = gSum * mulSum >> shgSum;
            pixels[yi + 2] = bSum * mulSum >> shgSum;
            rSum -= rOutSum;
            gSum -= gOutSum;
            bSum -= bOutSum;
            rOutSum -= stackIn.r;
            gOutSum -= stackIn.g;
            bOutSum -= stackIn.b;
            p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
            rInSum += stackIn.r = pixels[p];
            gInSum += stackIn.g = pixels[p + 1];
            bInSum += stackIn.b = pixels[p + 2];
            rSum += rInSum;
            gSum += gInSum;
            bSum += bInSum;
            stackIn = stackIn.next;
            rOutSum += pr = stackOut.r;
            gOutSum += pg = stackOut.g;
            bOutSum += pb = stackOut.b;
            rInSum -= pr;
            gInSum -= pg;
            bInSum -= pb;
            stackOut = stackOut.next;
            yi += 4;
        }
        yw += width;
    }
    for(var _x2 = 0; _x2 < width; _x2++){
        yi = _x2 << 2;
        var _pr2 = pixels[yi], _pg2 = pixels[yi + 1], _pb2 = pixels[yi + 2], _rOutSum2 = radiusPlus1 * _pr2, _gOutSum2 = radiusPlus1 * _pg2, _bOutSum2 = radiusPlus1 * _pb2, _rSum2 = sumFactor * _pr2, _gSum2 = sumFactor * _pg2, _bSum2 = sumFactor * _pb2;
        stack = stackStart;
        for(var _i7 = 0; _i7 < radiusPlus1; _i7++){
            stack.r = _pr2;
            stack.g = _pg2;
            stack.b = _pb2;
            stack = stack.next;
        }
        var _rInSum2 = 0, _gInSum2 = 0, _bInSum2 = 0;
        for(var _i8 = 1, yp = width; _i8 <= radius; _i8++){
            yi = yp + _x2 << 2;
            _rSum2 += (stack.r = _pr2 = pixels[yi]) * (rbs = radiusPlus1 - _i8);
            _gSum2 += (stack.g = _pg2 = pixels[yi + 1]) * rbs;
            _bSum2 += (stack.b = _pb2 = pixels[yi + 2]) * rbs;
            _rInSum2 += _pr2;
            _gInSum2 += _pg2;
            _bInSum2 += _pb2;
            stack = stack.next;
            if (_i8 < heightMinus1) yp += width;
        }
        yi = _x2;
        stackIn = stackStart;
        stackOut = stackEnd;
        for(var _y2 = 0; _y2 < height; _y2++){
            p = yi << 2;
            pixels[p] = _rSum2 * mulSum >> shgSum;
            pixels[p + 1] = _gSum2 * mulSum >> shgSum;
            pixels[p + 2] = _bSum2 * mulSum >> shgSum;
            _rSum2 -= _rOutSum2;
            _gSum2 -= _gOutSum2;
            _bSum2 -= _bOutSum2;
            _rOutSum2 -= stackIn.r;
            _gOutSum2 -= stackIn.g;
            _bOutSum2 -= stackIn.b;
            p = _x2 + ((p = _y2 + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
            _rSum2 += _rInSum2 += stackIn.r = pixels[p];
            _gSum2 += _gInSum2 += stackIn.g = pixels[p + 1];
            _bSum2 += _bInSum2 += stackIn.b = pixels[p + 2];
            stackIn = stackIn.next;
            _rOutSum2 += _pr2 = stackOut.r;
            _gOutSum2 += _pg2 = stackOut.g;
            _bOutSum2 += _pb2 = stackOut.b;
            _rInSum2 -= _pr2;
            _gInSum2 -= _pg2;
            _bInSum2 -= _pb2;
            stackOut = stackOut.next;
            yi += width;
        }
    }
    return imageData;
}
/**
 *
 */ var BlurStack = /**
 * Set properties.
 */ function BlurStack() {
    _classCallCheck(this, BlurStack);
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 0;
    this.next = null;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9sbld"], null, "parcelRequire2549")

//# sourceMappingURL=index.es.e6d65bb7.js.map
