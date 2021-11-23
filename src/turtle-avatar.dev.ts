import { html, render, nothing } from "lit";

import { suite } from "../devtool/devtool";

export default suite({
  displayName: "<turtle-avatar>",
  render(container, { image, bordered, label }) {
    render(
      html`<turtle-avatar ?bordered=${bordered}
          >${image
            ? html`<img src=${image} alt="Demo" />`
            : nothing}</turtle-avatar
        >
        <p>${label}</p> `,
      container
    );

    return () => {
      container.innerHTML = "";
    };
  },
  matrix: {
    image: ["https://avatars.githubusercontent.com/u/13316015?v=4", null],
    bordered: [true, false],
    label: ["foo", "bar", "baz"],
  },
});
