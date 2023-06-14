
export const Replace_html = stringhtml => {
    let strReplace = stringhtml.replaceAll('h1', 'h2');
    let strReplace1 = strReplace.replaceAll('h2', 'h3');
    let strReplace2 = strReplace1.replaceAll('h5', 'h4');
  return strReplace2;
};