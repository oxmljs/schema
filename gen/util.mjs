/** @param {string} ns */
export function csNamepaceToTsPath(ns) {
    return ns.replace('DocumentFormat.OpenXml', '').replace(/\./g, '/').replace(/^\//, '').replace('//', '/');
}


/**  @param {string} name */
export function decap(name) {
    return name[0].toLowerCase() + name.substring(1);
}

/**  @param {string} name */
export function cap(name) {
    return name[0].toUpperCase() + name.substring(1);
}