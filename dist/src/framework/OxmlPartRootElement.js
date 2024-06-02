import { OxmlCompositeElement } from "./OxmlCompositeElement";
var OxmlStandaloneValues = /* @__PURE__ */ ((OxmlStandaloneValues2) => {
  OxmlStandaloneValues2["No"] = "no";
  OxmlStandaloneValues2["Yes"] = "yes";
  return OxmlStandaloneValues2;
})(OxmlStandaloneValues || {});
class OxmlPartRootElement extends OxmlCompositeElement {
  xmlVersion = "1.0";
  xmlEncoding = "utf-8";
  xmlStandalone = "yes" /* Yes */;
}
export {
  OxmlPartRootElement,
  OxmlStandaloneValues
};
