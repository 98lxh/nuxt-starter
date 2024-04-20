// 获取props声明
export function getPropsDeclaration(code) {
  const regex = /type\s+IDefineProps\s*=\s*{([\s\S]*?)}/g;
  const match = regex.exec(code);

  if (match) {
    const typeDeclaration = match[1].trim();
    return typeDeclaration;
  } else {
    return null;
  }
}

export function convertToPropsDeclaration(typeDeclaration) {
  if (!typeDeclaration) {
    return undefined;
  }
  let props = "";
  const lines = typeDeclaration.split("\n");


  lines.forEach((line) => {
    const [name, value] = (line).split(":");

    if (props.length === 0) {
      props += "[";
    }

    props += `'${(name || "").trim()}',`;
  });


  if (props.length > 0) {
    props += "]";
  }

  console.log(props);
  return props;
}
