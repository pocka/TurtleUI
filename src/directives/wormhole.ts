import { noChange } from "lit";
import {
  directive,
  DirectiveParameters,
  Part,
  PartInfo,
  PartType,
} from "lit/directive.js";
import { AsyncDirective } from "lit/async-directive.js";

type LightDOMHandler = (el: Element) => (() => void) | void;

class Wormhole extends AsyncDirective {
  #cleanupSlotListener: (() => void) | null = null;
  #cleanupElementsHandler: (() => void)[] = [];

  constructor(partInfo: PartInfo) {
    super(partInfo);

    if (
      partInfo.type !== PartType.CHILD &&
      partInfo.type !== PartType.ELEMENT
    ) {
      throw new Error(
        "The `wormhole` directive must be used in either the child or the element position."
      );
    }
  }

  override update(part: Part, [handler]: DirectiveParameters<Wormhole>) {
    this.#cleanupSlotListener?.();

    // TypeScript's poorly designed "control-flow analysis" overrides variable type annotation with wrongly narrowed type,
    // even the type annotation syntax is explicit/intended one in general. In this case, even with
    // ```
    // const el: Node | Element | HTMLElement = ...
    // ```
    // TypeScript assigns `Node` to `el`. If ReScript supported tagged template literal...
    const el = ("parentNode" in part ? part.parentNode : part.element) as
      | Node
      | Element
      | HTMLElement;

    if (!("tagName" in el) || el.tagName !== "SLOT") {
      throw new Error(
        "The `wormhole` directive must be used with <slot> element."
      );
    }

    const onSlotChange = () => {
      this.#cleanupElementsHandler.forEach((fn) => fn());

      const elements = (el as HTMLSlotElement).assignedElements();
      this.#cleanupElementsHandler = elements
        .map(handler)
        .filter((f): f is Exclude<void, typeof f> => !!f);
    };

    el.addEventListener("slotchange", onSlotChange);

    this.#cleanupSlotListener = () => {
      el.removeEventListener("slotchange", onSlotChange);
    };

    return this.render(handler);
  }

  override render(handler: LightDOMHandler) {
    return noChange;
  }

  override disconnected() {
    this.#cleanupSlotListener?.();
    this.#cleanupSlotListener = null;
    this.#cleanupElementsHandler.forEach((fn) => fn());
    this.#cleanupElementsHandler = [];
  }
}

/**
 * This directive opens a wormhole on Shadow DOM to Light DOM.
 * A handler recieves an assigned (slotted) element as a parameter and do something,
 * then returns cleanup function or does not. The cleanup function runs right before
 * the handler will be run again after `slotchange` event is fired, or directive is
 * disconnected.
 * The boundary exists for reasons. Use this with caution.
 * @param handler A function runs against slotted elements.
 */
export const wormhole = directive(Wormhole);
