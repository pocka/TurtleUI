import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/web-components";
import * as lit from "lit";
import { state } from "lit/decorators/state.js";
import { html, nothing } from "lit-html";
import { config } from "storybook-addon-designs";

import { disableControls } from "../.storybook/helpers";

import { TurtleCommandPalette } from "./turtle-command-palette";
import { TurtleCommandPaletteListbox } from "./turtle-command-palette-listbox";
import { TurtleCommandPaletteOption } from "./turtle-command-palette-option";

interface Args {
  placeholder: string;
  options: boolean;
}

export default {
  title: "Components/" + TurtleCommandPalette.defaultTagName,
  component: TurtleCommandPalette.defaultTagName,
  subcomponents: {
    [TurtleCommandPaletteListbox.defaultTagName]:
      TurtleCommandPaletteListbox.defaultTagName,
    [TurtleCommandPaletteOption.defaultTagName]:
      TurtleCommandPaletteOption.defaultTagName,
  },
  parameters: {
    design: config({
      type: "figma",
      url: "https://www.figma.com/file/EsEiiv4Z7wKUop0NNzTpVq/Turtle-%F0%9F%90%A2-UI-(Community)?node-id=402%3A1071",
    }),
  },
  args: {
    placeholder: "",
    options: true,
  },
  argTypes: {
    ...disableControls([]),
  },
} as Meta<Args>;

const Template: Story<Args> = ({ placeholder, options }) => html`
  <turtle-command-palette @cancel=${action("cancel")}>
    <input slot="search" type="text" placeholder="Placeholder" />
    <turtle-command-palette-listbox
      slot="listbox"
      id="demo_list"
      aria-label="List of commands"
    >
      ${options
        ? html`
            <turtle-command-palette-option
              id="open_file"
              @selectoption=${action("open_file#selectoption")}
            >
              Open file

              <p slot="description">
                Open a file on your computer and activate text editor.
              </p>
            </turtle-command-palette-option>
            <turtle-command-palette-option
              id="view_version"
              @selectoption=${action("view_version#selectoption")}
            >
              View version history
            </turtle-command-palette-option>
          `
        : nothing}
    </turtle-command-palette-listbox>
    ${placeholder ? html`<p slot="placeholder">${placeholder}</p>` : nothing}
  </turtle-command-palette>
`;

export const Default = Template.bind({});

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "No results found.",
  options: false,
};

interface DemoOption {
  id: string;
  name: string;
  description: string;
  alias: string[];
}

const options: readonly DemoOption[] = [
  {
    id: "show_help",
    name: "Show help",
    description: "Opens an application help.",
    alias: ["help", "?", "how to use"],
  },
  {
    id: "add_compressor_node",
    name: "Add compressor node",
    description: "Add a compressor node to the current position.",
    alias: ["compressor"],
  },
  {
    id: "mute_track",
    name: "Mute track",
    description: "Mute current track.",
    alias: ["mute", "silent", "silence"],
  },
  {
    id: "solo_mode",
    name: "Solo mode",
    description: "Mute other tracks.",
    alias: ["solo", "mute"],
  },
];

function doesMatch(text: string, o: DemoOption): boolean {
  if (!text) {
    return true;
  }

  const text_ = text.toLowerCase();

  if (o.name.toLowerCase().indexOf(text_) === 0) {
    return true;
  }

  if (o.description.toLowerCase().includes(text_)) {
    return true;
  }

  if (o.alias.some((a) => a.toLowerCase().indexOf(text_) === 0)) {
    return true;
  }

  return false;
}

class TurtleCommandPaletteDemo extends lit.LitElement {
  @state()
  query: string = "";

  override render() {
    return lit.html`
  <turtle-command-palette
    @cancel=${action("cancel")}
    @selectoption=${(ev: Event) =>
      action("selectoption")((ev.target as Element).id)}
  >
    <input
      slot="search"
      type="text"
      placeholder="Placeholder"
      @input=${(ev: InputEvent) => {
        this.query = (ev.currentTarget as HTMLInputElement).value;
      }}
      @keydown=${(ev: Event) => {
        // Prevent Storybook shortcut
        ev.stopPropagation();
      }}
    />
    <turtle-command-palette-listbox
      slot="listbox"
      id="demo_list"
      aria-label="Track commands"
    >
      ${options
        .filter((option) => doesMatch(this.query, option))
        .map(
          (option) => lit.html`
            <turtle-command-palette-option id=${option.id}>
              ${option.name}

              <p slot="description">${option.description}</p>
            </turtle-command-palette-option>
          `
        )}
    </turtle-command-palette-listbox>
    <p slot="placeholder">No commands found. Type "help" to show help.</p>
  </turtle-command-palette>
    `;
  }
}

customElements.define("turtle-command-palette-demo", TurtleCommandPaletteDemo);

export const InteractiveDemo: Story = () => html`
  <turtle-command-palette-demo></turtle-command-palette-demo>
`;
