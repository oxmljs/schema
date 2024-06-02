import { OxmlLeafTextElement } from "../../../framework/OxmlLeafTextElement";
class List extends OxmlLeafTextElement {
  static _Q = "x12ac:list";
}
function initOffice2010ExcelAcNamespace() {
  return {
    prefix: "x12ac",
    xmlns: "http://schemas.microsoft.com/office/spreadsheetml/2011/1/ac"
  };
}
export {
  List,
  initOffice2010ExcelAcNamespace
};
