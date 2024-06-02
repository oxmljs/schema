import { OxmlLeafTextElement } from "./OxmlLeafTextElement";
import { OxmlPartRootElement, OxmlStandaloneValues } from "./OxmlPartRootElement";
import { OxmlUnknownElement } from "./OxmlUnknownElement";
class XmlError extends Error {
  constructor(e) {
    super(e);
  }
}
function indexOfAny(str, chars, pos) {
  let len = str.length;
  for (let i = pos; i < len; ++i) {
    const p = chars.indexOf(str[i]);
    if (p > -1)
      return { index: i, char: chars[p] };
  }
  return { index: -1, char: "" };
}
function indexOfOthers(str, chars, pos) {
  let len = str.length;
  for (let i = pos; i < len; ++i) {
    const char = str[i];
    const p = chars.indexOf(char);
    if (p === -1)
      return { index: i, char };
  }
  return { index: -1, char: "" };
}
function oxmlParse(xml, rootConstructor) {
  let i = 0;
  const stack = [];
  const len = xml.length;
  let version;
  let encoding;
  let standalone;
  let root;
  if (xml.startsWith("<?xml")) {
    i = xml.indexOf("?>");
    if (i === -1)
      throw new XmlError("decl_end_miss");
    i += 2;
    const decl = xml.substring(0, i);
    const iterator = decl.matchAll(/\s(\w+)\s*=\s*"([\w\-]+)"/g);
    do {
      const arg = iterator.next();
      if (arg.done)
        break;
      const name = arg.value[2];
      if (name === "version")
        version = arg.value[2];
      else if (name === "encoding")
        encoding = arg.value[2];
      else if (name === "standalone")
        standalone = arg.value[2];
    } while (true);
  }
  while (i < len) {
    const tagStartIndex = xml.indexOf("<", i);
    if (tagStartIndex === -1)
      throw new XmlError("tag_start_miss");
    const closingTag = xml.charAt(tagStartIndex + 1) === "/";
    if (closingTag) {
      const tagEndIndex = xml.indexOf(">", tagStartIndex + 1);
      if (tagEndIndex === -1)
        throw new XmlError("tag_end_miss");
      const tagName2 = xml.substring(tagStartIndex + 2, tagEndIndex);
      const currentNode = stack.pop();
      if (currentNode instanceof OxmlLeafTextElement) {
        currentNode.text = xml.substring(i, tagStartIndex);
      }
      const expectedClosingTag = currentNode.qualifiedName;
      if (tagName2 !== expectedClosingTag)
        throw new XmlError("tag_close_inv");
      i = tagEndIndex + 1;
      continue;
    }
    const { index: tagNameEndIndex, char: tagNameEndChar } = indexOfAny(xml, " >/\r\n	", tagStartIndex + 1);
    if (tagNameEndIndex === -1)
      throw new XmlError("tag_name_end_miss");
    const tagName = xml.substring(tagStartIndex + 1, tagNameEndIndex);
    if (!tagName)
      throw new XmlError("tag_name_miss");
    let tagClosed = false;
    let selfClosing = false;
    if (tagNameEndChar === "/") {
      if (xml[tagNameEndIndex + 1] !== ">")
        throw new XmlError("tag_sc_end_miss");
      selfClosing = true;
      tagClosed = true;
      i = tagNameEndIndex + 2;
    } else if (tagNameEndChar === ">") {
      tagClosed = true;
      i = tagNameEndIndex + 1;
    } else {
      i = tagNameEndIndex;
    }
    const parent = stack[stack.length - 1];
    let ctr = parent ? parent.constructor._C[tagName] : rootConstructor;
    const node = ctr ? new ctr(tagName) : new OxmlUnknownElement(tagName);
    while (!tagClosed) {
      const { index: nonSpaceIndex, char: nonSpaceChar } = indexOfOthers(xml, " \r\n	", i);
      if (nonSpaceChar === "/") {
        if (xml[nonSpaceIndex + 1] !== ">")
          throw new XmlError("tag_sc_end_miss");
        i = nonSpaceIndex + 2;
        selfClosing = true;
        tagClosed = true;
        break;
      }
      if (nonSpaceChar === ">") {
        i = nonSpaceIndex + 1;
        tagClosed = true;
        break;
      }
      const equalIndex = xml.indexOf("=", nonSpaceIndex);
      if (equalIndex === -1)
        throw new XmlError("attr_equal_miss");
      const attrName = xml.substring(nonSpaceIndex, equalIndex).trim();
      if (!attrName)
        throw new XmlError("attr_name_miss");
      const quoteStartIndex = xml.indexOf('"', equalIndex + 1);
      if (quoteStartIndex === -1)
        throw new XmlError("attr_quote_start_miss");
      const quoteEndIndex = xml.indexOf('"', quoteStartIndex + 1);
      if (quoteEndIndex === -1)
        throw new XmlError("attr_quote_end_miss");
      node.parseAttr(attrName, xml.substring(quoteStartIndex + 1, quoteEndIndex));
      i = quoteEndIndex + 1;
    }
    if (root) {
      parent.addChild(node);
    } else {
      if (!(node instanceof OxmlPartRootElement))
        throw new XmlError("tag_not_root");
      root = node;
      root.xmlVersion = version || "1.0";
      root.xmlStandalone = standalone || OxmlStandaloneValues.Yes;
      root.xmlEncoding = encoding || "utf-8";
    }
    if (!selfClosing) {
      stack.push(node);
    }
  }
  if (!root)
    throw new XmlError("root_miss");
  return root;
}
export {
  oxmlParse
};
