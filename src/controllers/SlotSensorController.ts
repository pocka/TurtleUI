import type { ReactiveController, ReactiveControllerHost } from "lit";

export type SlotSensorControllerHost = ReactiveControllerHost & {
  shadowRoot: ShadowRoot | null;
};

export class SlotSensorController implements ReactiveController {
  host: SlotSensorControllerHost;
  slotName: string;
  assigned: boolean = false;

  constructor(host: SlotSensorControllerHost, slotName: string = "") {
    host.addController(this);

    this.host = host;
    this.slotName = slotName;
  }

  hostConnected() {
    if (!this.host.shadowRoot) {
      return;
    }

    this.host.shadowRoot.addEventListener("slotchange", this.#updateSlotted);
  }

  hostDisconnected() {
    this.host.shadowRoot?.removeEventListener(
      "slotchange",
      this.#updateSlotted
    );
  }

  #updateSlotted = () => {
    if (!this.host.shadowRoot) {
      return;
    }

    const query = this.slotName
      ? `slot[name="${this.slotName}"]`
      : `slot:not([name])`;
    const slot = this.host.shadowRoot.querySelector(
      query
    ) as HTMLSlotElement | null;

    this.assigned = !!slot && slot.assignedNodes().length > 0;
    this.host.requestUpdate();
  };
}
