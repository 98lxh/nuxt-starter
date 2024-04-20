import { getFileSuffix, replace } from "./utils/common";
import { generateSetupFunction, getSetupFunction } from "./utils/setup";
import { convertToPropsDeclaration, getPropsDeclaration } from "./utils/props";
import { generateComponent } from "./utils/component";

export function transformTSX() {
  return {
    name: "transformTSX",
    transform(content: string, id: string) {
      const suffix = getFileSuffix(id);
      if (suffix.toLowerCase() !== "tsx") {
        return content;
      }

      const { body: setup, name, start, end } = getSetupFunction(content);
      if (!setup || !name) {
        return content;
      }

      const component = generateComponent({
        name,
        props: convertToPropsDeclaration(getPropsDeclaration(content)),
        setup: generateSetupFunction(setup),
      });

      const target = replace({
        range: [start, end],
        original: content,
        replacement: component
      });

      return target
    },
  };
}
