import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/resources/js/pages/posting/view.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=c5a979db"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "D:/Laravel/solar/resources/js/pages/posting/view.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import AppLayout from "/resources/js/layouts/app-layout.tsx";
import __vite__cjsImport4_react from "/node_modules/.vite/deps/react.js?v=c5a979db"; const useState = __vite__cjsImport4_react["useState"];
import { FaFilter, FaPlus } from "/node_modules/.vite/deps/react-icons_fa.js?v=c5a979db";
import ActionDropdown from "/resources/js/components/posting/ActionDropdown.tsx";
import PostCard from "/resources/js/components/posting/PostCard.tsx";
export default function ViewPost({ postings }) {
  _s();
  const [activeAction, setActiveAction] = useState(null);
  return /* @__PURE__ */ jsxDEV(AppLayout, { children: /* @__PURE__ */ jsxDEV("div", { className: "container", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "container-header", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "header-title", children: "Daftar Postingan" }, void 0, false, {
        fileName: "D:/Laravel/solar/resources/js/pages/posting/view.tsx",
        lineNumber: 27,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "header-tool", children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            className: "filter-button",
            onClick: () => setActiveAction("filter"),
            children: /* @__PURE__ */ jsxDEV(FaFilter, {}, void 0, false, {
              fileName: "D:/Laravel/solar/resources/js/pages/posting/view.tsx",
              lineNumber: 34,
              columnNumber: 29
            }, this)
          },
          void 0,
          false,
          {
            fileName: "D:/Laravel/solar/resources/js/pages/posting/view.tsx",
            lineNumber: 30,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            className: "add-button",
            onClick: () => setActiveAction("add"),
            children: /* @__PURE__ */ jsxDEV(FaPlus, {}, void 0, false, {
              fileName: "D:/Laravel/solar/resources/js/pages/posting/view.tsx",
              lineNumber: 41,
              columnNumber: 29
            }, this)
          },
          void 0,
          false,
          {
            fileName: "D:/Laravel/solar/resources/js/pages/posting/view.tsx",
            lineNumber: 37,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, true, {
        fileName: "D:/Laravel/solar/resources/js/pages/posting/view.tsx",
        lineNumber: 29,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "D:/Laravel/solar/resources/js/pages/posting/view.tsx",
      lineNumber: 26,
      columnNumber: 17
    }, this),
    activeAction && /* @__PURE__ */ jsxDEV(ActionDropdown, { onClose: () => setActiveAction(null), children: [
      activeAction === "filter" && /* @__PURE__ */ jsxDEV("p", { children: "Filter Content" }, void 0, false, {
        fileName: "D:/Laravel/solar/resources/js/pages/posting/view.tsx",
        lineNumber: 48,
        columnNumber: 55
      }, this),
      activeAction === "add" && /* @__PURE__ */ jsxDEV("p", { children: "Add Content" }, void 0, false, {
        fileName: "D:/Laravel/solar/resources/js/pages/posting/view.tsx",
        lineNumber: 49,
        columnNumber: 52
      }, this)
    ] }, void 0, true, {
      fileName: "D:/Laravel/solar/resources/js/pages/posting/view.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "post-grid", children: postings.map(
      (post) => /* @__PURE__ */ jsxDEV(PostCard, { post }, post.id_posting, false, {
        fileName: "D:/Laravel/solar/resources/js/pages/posting/view.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this)
    ) }, void 0, false, {
      fileName: "D:/Laravel/solar/resources/js/pages/posting/view.tsx",
      lineNumber: 53,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "D:/Laravel/solar/resources/js/pages/posting/view.tsx",
    lineNumber: 25,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "D:/Laravel/solar/resources/js/pages/posting/view.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
_s(ViewPost, "FMzRDa5ORSoWqzI6YmkhDyRkHEQ=");
_c = ViewPost;
var _c;
$RefreshReg$(_c, "ViewPost");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("D:/Laravel/solar/resources/js/pages/posting/view.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("D:/Laravel/solar/resources/js/pages/posting/view.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBMEJvQjsyQkExQnBCO0FBQWdCLE1BQU0scUJBQXNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzVDLFNBQVNBLGdCQUFnQjtBQUN6QixTQUFTQyxVQUFVQyxjQUFjO0FBQ2pDLE9BQU9DLG9CQUFvQjtBQUMzQixPQUFPQyxjQUFjO0FBZXJCLHdCQUF3QkMsU0FBUyxFQUFFQyxTQUF3QixHQUFHO0FBQUFDLEtBQUE7QUFDMUQsUUFBTSxDQUFDQyxjQUFjQyxlQUFlLElBQUlULFNBQWtDLElBQUk7QUFFOUUsU0FDSSx1QkFBQyxhQUNHLGlDQUFDLFNBQUksV0FBVSxhQUNYO0FBQUEsMkJBQUMsU0FBSSxXQUFVLG9CQUNYO0FBQUEsNkJBQUMsUUFBRyxXQUFVLGdCQUFlLGdDQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTZDO0FBQUEsTUFFN0MsdUJBQUMsU0FBSSxXQUFVLGVBQ1g7QUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0csV0FBVTtBQUFBLFlBQ1YsU0FBUyxNQUFNUyxnQkFBZ0IsUUFBUTtBQUFBLFlBRXZDLGlDQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUztBQUFBO0FBQUEsVUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFLQTtBQUFBLFFBRUE7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNHLFdBQVU7QUFBQSxZQUNWLFNBQVMsTUFBTUEsZ0JBQWdCLEtBQUs7QUFBQSxZQUVwQyxpQ0FBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQU87QUFBQTtBQUFBLFVBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBS0E7QUFBQSxXQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFjQTtBQUFBLFNBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FrQkE7QUFBQSxJQUVDRCxnQkFDRyx1QkFBQyxrQkFBZSxTQUFTLE1BQU1DLGdCQUFnQixJQUFJLEdBQzlDRDtBQUFBQSx1QkFBaUIsWUFBWSx1QkFBQyxPQUFFLDhCQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBaUI7QUFBQSxNQUM5Q0EsaUJBQWlCLFNBQVMsdUJBQUMsT0FBRSwyQkFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWM7QUFBQSxTQUY3QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBR0E7QUFBQSxJQUdKLHVCQUFDLFNBQUksV0FBVSxhQUNWRixtQkFBU0k7QUFBQUEsTUFBSSxDQUFDQyxTQUNYLHVCQUFDLFlBQStCLFFBQWpCQSxLQUFLQyxZQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTJDO0FBQUEsSUFDOUMsS0FITDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSUE7QUFBQSxPQWhDSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBaUNBLEtBbENKO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FtQ0E7QUFFUjtBQUFDTCxHQXpDdUJGLFVBQVE7QUFBQVEsS0FBUlI7QUFBUSxJQUFBUTtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsidXNlU3RhdGUiLCJGYUZpbHRlciIsIkZhUGx1cyIsIkFjdGlvbkRyb3Bkb3duIiwiUG9zdENhcmQiLCJWaWV3UG9zdCIsInBvc3RpbmdzIiwiX3MiLCJhY3RpdmVBY3Rpb24iLCJzZXRBY3RpdmVBY3Rpb24iLCJtYXAiLCJwb3N0IiwiaWRfcG9zdGluZyIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInZpZXcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIkAvbGF5b3V0cy9hcHAtbGF5b3V0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZhRmlsdGVyLCBGYVBsdXMgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IEFjdGlvbkRyb3Bkb3duIGZyb20gXCJAL2NvbXBvbmVudHMvcG9zdGluZy9BY3Rpb25Ecm9wZG93blwiO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9wb3N0aW5nL1Bvc3RDYXJkXCI7XHJcblxyXG5pbnRlcmZhY2UgUG9zdCB7XHJcbiAgICBpZF9wb3N0aW5nOiBudW1iZXI7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgY3JlYXRlZF9hdDogc3RyaW5nO1xyXG4gICAgY2F0ZWdvcnk6IHN0cmluZztcclxuICAgIHVzZXI6IGFueTtcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFZpZXdQb3N0UHJvcHMge1xyXG4gICAgcG9zdGluZ3M6IFBvc3RbXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld1Bvc3QoeyBwb3N0aW5ncyB9OiBWaWV3UG9zdFByb3BzKSB7XHJcbiAgICBjb25zdCBbYWN0aXZlQWN0aW9uLCBzZXRBY3RpdmVBY3Rpb25dID0gdXNlU3RhdGU8XCJmaWx0ZXJcIiB8IFwiYWRkXCIgfCBudWxsPihudWxsKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+RGFmdGFyIFBvc3RpbmdhbjwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRvb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVBY3Rpb24oXCJmaWx0ZXJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUZpbHRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlQWN0aW9uKFwiYWRkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFQbHVzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge2FjdGl2ZUFjdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEFjdGlvbkRyb3Bkb3duIG9uQ2xvc2U9eygpID0+IHNldEFjdGl2ZUFjdGlvbihudWxsKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVBY3Rpb24gPT09IFwiZmlsdGVyXCIgJiYgPHA+RmlsdGVyIENvbnRlbnQ8L3A+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZlQWN0aW9uID09PSBcImFkZFwiICYmIDxwPkFkZCBDb250ZW50PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICA8L0FjdGlvbkRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwb3N0aW5ncy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RDYXJkIGtleT17cG9zdC5pZF9wb3N0aW5nfSBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG4iXSwiZmlsZSI6IkQ6L0xhcmF2ZWwvc29sYXIvcmVzb3VyY2VzL2pzL3BhZ2VzL3Bvc3Rpbmcvdmlldy50c3gifQ==