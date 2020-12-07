import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Prop,
  Watch,
  h,
} from "@stencil/core";
import { RadioGroupChangeEventDetail } from "./radio-group-interface";

@Component({
  tag: "core-radio-group",
  styleUrl: "core-radio-group.less",
})
export class RadioGroup implements ComponentInterface {
  private inputId = `radio-group-${radioGroupIds++}`;

  @Element() el: HTMLCoreRadioGroupElement;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * Display the radio group as a row or column (via flexbox).
   * Child `core-radio` margin is set to 16px as a default. The
   * core-radio-group`is not a shadow element, feel free to
   * overwrite with CSS as-needed.
   */
  @Prop({ reflect: true }) display: "row" | "column" = "column";

  /**
   * The value of the radio group.
   */
  @Prop({ mutable: true }) value?: any | null;

  @Watch("value")
  valueChanged(value: any | undefined) {
    this.setRadioTabindex(value);
    this.emitChange.emit({ value });
  }

  /**
   * Emitted when the value has changed.
   */
  @Event() emitChange!: EventEmitter<RadioGroupChangeEventDetail>;

  componentDidLoad() {
    this.setRadioTabindex(this.value);
  }

  private setRadioTabindex = (value: any | undefined) => {
    const radios = this.getRadios();

    // Get the first checked radio that is not disabled
    const first = radios.find((radio) => !radio.disabled);
    const checked = radios.find(
      (radio) => radio.value === value && !radio.disabled
    );

    if (!first && !checked) {
      return;
    }

    // If an enabled checked radio exists, set it to be the focusable radio
    // otherwise we default to focus the first radio
    const focusable = checked || first;

    for (const radio of radios) {
      const tabindex = radio === focusable ? 0 : -1;

      radio.setRadioTabindex(tabindex);
    }
  };

  private getRadios(): HTMLCoreRadioElement[] {
    return Array.from(this.el.querySelectorAll("core-radio"));
  }

  private onClick = (ev: Event) => {
    ev.preventDefault();

    const selectedRadio =
      ev.target && (ev.target as HTMLElement).closest("core-radio");

    if (selectedRadio) {
      const currentValue = this.value;
      const newValue = selectedRadio.value;
      if (newValue !== currentValue) {
        this.value = newValue;
      }
    }
  };

  @Listen("keydown", { target: "document" })
  onKeydown(ev: any) {
    if (ev.target && !this.el.contains(ev.target)) {
      return;
    }

    // Get all radios inside of the radio group and filter out disabled radios
    const radios = Array.from(this.el.querySelectorAll("core-radio")).filter(
      (radio) => !radio.disabled
    );

    // Only move the radio if the current focus is in the radio group
    if (ev.target && radios.includes(ev.target)) {
      const index = radios.findIndex((radio) => radio === ev.target);

      let next;

      // If hitting arrow down or arrow right, move to the next radio
      // If we're on the last radio, move to the first radio
      if (["ArrowDown", "ArrowRight"].includes(ev.code)) {
        next = index === radios.length - 1 ? radios[0] : radios[index + 1];
      }

      // If hitting arrow up or arrow left, move to the previous radio
      // If we're on the first radio, move to the last radio
      if (["ArrowUp", "ArrowLeft"].includes(ev.code)) {
        next = index === 0 ? radios[radios.length - 1] : radios[index - 1];
      }

      if (next && radios.includes(next)) {
        next.setFocus(ev);
      }
    }
  }

  render() {
    return <Host role="radiogroup" onClick={this.onClick}></Host>;
  }
}

let radioGroupIds = 0;
