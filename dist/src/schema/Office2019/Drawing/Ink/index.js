var ExtendedBrushPropertyName = /* @__PURE__ */ ((ExtendedBrushPropertyName2) => {
  ExtendedBrushPropertyName2["InkEffects"] = "inkEffects";
  ExtendedBrushPropertyName2["AnchorX"] = "anchorX";
  ExtendedBrushPropertyName2["AnchorY"] = "anchorY";
  ExtendedBrushPropertyName2["ScaleFactor"] = "scaleFactor";
  return ExtendedBrushPropertyName2;
})(ExtendedBrushPropertyName || {});
const ExtendedBrushPropertyNameArray = [
  "inkEffects" /* InkEffects */,
  "anchorX" /* AnchorX */,
  "anchorY" /* AnchorY */,
  "scaleFactor" /* ScaleFactor */
];
var InkEffectsType = /* @__PURE__ */ ((InkEffectsType2) => {
  InkEffectsType2["None"] = "none";
  InkEffectsType2["Pencil"] = "pencil";
  InkEffectsType2["Rainbow"] = "rainbow";
  InkEffectsType2["Galaxy"] = "galaxy";
  InkEffectsType2["Gold"] = "gold";
  InkEffectsType2["Silver"] = "silver";
  InkEffectsType2["Lava"] = "lava";
  InkEffectsType2["Ocean"] = "ocean";
  InkEffectsType2["Rosegold"] = "rosegold";
  InkEffectsType2["Bronze"] = "bronze";
  return InkEffectsType2;
})(InkEffectsType || {});
const InkEffectsTypeArray = [
  "none" /* None */,
  "pencil" /* Pencil */,
  "rainbow" /* Rainbow */,
  "galaxy" /* Galaxy */,
  "gold" /* Gold */,
  "silver" /* Silver */,
  "lava" /* Lava */,
  "ocean" /* Ocean */,
  "rosegold" /* Rosegold */,
  "bronze" /* Bronze */
];
function initOffice2019DrawingInkNamespace() {
  return {
    prefix: "aink",
    xmlns: "http://schemas.microsoft.com/office/drawing/2016/ink"
  };
}
export {
  ExtendedBrushPropertyName,
  ExtendedBrushPropertyNameArray,
  InkEffectsType,
  InkEffectsTypeArray,
  initOffice2019DrawingInkNamespace
};
