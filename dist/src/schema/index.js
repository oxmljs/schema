var SpaceProcessingModeValues = /* @__PURE__ */ ((SpaceProcessingModeValues2) => {
  SpaceProcessingModeValues2["Default"] = "default";
  SpaceProcessingModeValues2["Preserve"] = "preserve";
  return SpaceProcessingModeValues2;
})(SpaceProcessingModeValues || {});
const SpaceProcessingModeValuesArray = [
  "default" /* Default */,
  "preserve" /* Preserve */
];
function initNamespace() {
  return {
    prefix: "xml",
    xmlns: "http://www.w3.org/XML/1998/namespace"
  };
}
export {
  SpaceProcessingModeValues,
  SpaceProcessingModeValuesArray,
  initNamespace
};
