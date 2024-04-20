export function generateComponent(options) {
    return `
    const ${options.name} = defineComponent({
      name:"${options.name}",
      ${options.props ? `props:${options.props},` : ""}
      setup${options.setup},
    });
  `;
}
