interface IComponentOptions {
  setup: string;
  name: string;
  props?: string;
}

export function generateComponent(options: IComponentOptions) {
  return `
    const ${options.name} = defineComponent({
      name:"${options.name}",
      ${options.props ? `props:${options.props},` : ""}
      setup${options.setup},
    });
  `;
}
