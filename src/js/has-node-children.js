const cleanText = txt => txt.trim(' ').replace(/^\s*[\r\n]/gm, '');

const hasNodeChildren = (oFra, includeNotEmptyText = false) => {
  if (oFra.hasChildNodes()) {
    const nodeTypes = [1];
    if (includeNotEmptyText) {
      nodeTypes.push(3);
    }
    const children = oFra.childNodes;
    for (let i = 0; i < children.length; i++) {
      if (nodeTypes.indexOf(children[i].nodeType) > -1) {
        if ((children[i].textContent && cleanText(children[i].textContent)) || children[i].innerHTML) {
          return true;
        }
      }
    }
  }
  return false;
};

export default hasNodeChildren;
