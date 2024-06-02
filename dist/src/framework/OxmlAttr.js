class OxmlAttr {
  /**
   * @param q Attribute's qualified name (like `w:pPr`)
   * @param t Attribute's data type
   * @param e Attribute's enum values
   */
  constructor(q, t, e) {
    this.q = q;
    this.t = t;
    this.e = e;
  }
}
export {
  OxmlAttr
};
