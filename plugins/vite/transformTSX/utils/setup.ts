import { splitStringAtIndex } from "./common";

// 生成setup函数
export function generateSetupFunction(src: string) {
  const match = src.match(/return/g);
  if (match) {
    const lastIndex = src.lastIndexOf("return");
    return splitStringAtIndex(src, lastIndex + 6).join(` ()=> `); ;
  } else {
    return src;
  }
}

// 获取setup函数
export function getSetupFunction(str: string) {
  const regex = /(function\s+([^\(\s]+)\s*\(([^)]*)\)\s*{([\s\S]*)})|(\(\s*([^)]*)\s*\)\s*=>\s*{([\s\S]*)})\s*$/g;
  let match: null | any = null;
  let lastIndex = -1;
  // eslint-disable-next-line no-cond-assign
  while ((match = regex.exec(str)) !== null) {
    lastIndex = regex.lastIndex;
  }
  regex.lastIndex = 0; // 重置正则表达式的匹配位置

  match = regex.exec(str);
  let body: string | null = null;
  let name: string | null = null;

  if (match) {
    name = match[2] || match[6]; // 如果是常规函数则使用第二个捕获组，如果是箭头函数则使用第六个捕获组
    body = `${match[2] ? `(${match[3]})` : `(${match[5]})`} {${match[4] || match[7]}}`; // 构建函数签名和函数体
  }

  return { body, name, start: match.index, end: lastIndex };
}
