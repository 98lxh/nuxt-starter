// 按照索引位置分割字符串
export function splitStringAtIndex(str, index) {
    if (index < 0 || index > str.length) {
        return [str, ""]; // 如果索引无效，返回原始字符串和空字符串
    }
    return [str.substring(0, index), str.substring(index)];
}
// 获取文件后缀名
export function getFileSuffix(id) {
    const chunks = (id || "").split(".");
    return chunks[chunks.length - 1] ?? "";
}
// 字符串内容替换
export function replace(options) {
    const { range, original, replacement } = options;
    const [startIndex, endIndex] = range;
    if (startIndex < 0 || endIndex < startIndex || endIndex > original.length) {
        return original; // 如果索引无效，返回原字符串
    }
    const part1 = original.substring(0, startIndex);
    const part3 = original.substring(endIndex);
    return part1 + replacement + part3;
}
