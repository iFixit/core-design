import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Method,
  Prop,
  State,
  h,
} from "@stencil/core";
import { RadioGroupChangeEventDetail } from "../core-radio-group/radio-group-interface";
import { addEventListener, removeEventListener } from "../../utils/helpers";
import { labelPositionProps } from "../../assets/script/global";

@Component({
  tag: "core-radio",
  styleUrl: "core-radio.css",
  shadow: true,
})
export class Radio implements ComponentInterface {
  private inputId = `radio-${radioIds++}`;
  private radioGroup: HTMLCoreRadioGroupElement | null = null;

  @Element() el!: HTMLCoreRadioElement;

  /**
   * If `true`, the radio is selected.
   */
  @State() checked = false;

  /**
   * The tabindex of the radio.
   * @internal
   */
  @State() radioTabindex = -1;

  /**
   * If applied, the user cannot interact with the element.
   */
  @Prop() disabled = false;

  /**
   * The integrated label element associated with the element.
   */
  @Prop() label: string | undefined;

  /**
   * The integrated label element position.
   */
  @Prop({ reflect: true }) labelPosition?: labelPositionProps = "right";

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * If applied, the user must fill in a value before submitting a form containing this element.
   */
  @Prop() required = false;

  /**
   * Apply the pre-defined large element size styling.
   */
  @Prop() size?: "default" | "large" = "default";

  /**
   * the value of the radio.
   */
  @Prop() value?: any | null;

  /**
   * Emitted when the radio button has focus.
   */
  @Event() focusEvent!: EventEmitter<void>;

  /**
   * Emitted when the radio button loses focus.
   */
  @Event() blurEvent!: EventEmitter<void>;

  /** @internal */
  @Method()
  async setFocus(ev: any) {
    ev.stopPropagation();
    ev.preventDefault();

    this.el.focus();
  }

  /** @internal */
  @Method()
  async setRadioTabindex(value: number) {
    this.radioTabindex = value;
  }

  connectedCallback() {
    if (this.value === undefined) {
      this.value = this.inputId;
    }

    this.radioGroup = this.el.closest("core-radio-group");

    if (this.radioGroup) {
      addEventListener(this.radioGroup, "valueChange", this.updateState);
    }
  }

  disconnectedCallback() {
    if (this.radioGroup) {
      removeEventListener(this.radioGroup, "valueChange", this.updateState);
    }
  }

  private updateState = (event: CustomEvent<RadioGroupChangeEventDetail>) => {
    if (event.detail) {
      this.checked = event.detail.value === this.value;
    }
  };

  private onFocus = () => {
    this.focusEvent.emit();
  };

  private onBlur = () => {
    this.blurEvent.emit();
  };

  render() {
    const { checked, disabled, inputId, radioTabindex, value } = this;

    return (
      <Host
        aria-checked={checked}
        aria-disabled={disabled ? "true" : null}
        role="radio"
        tabindex={radioTabindex}
        value={value}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      >
        <div class="radio-outer">
          <input
            id={inputId}
            class="native-element"
            checked={this.checked}
            disabled={this.disabled}
            required={this.required}
            tabindex="-1"
            type="radio"
          />
          {this.label && <label htmlFor={inputId}>{this.label}</label>}
        </div>
      </Host>
    );
  }
}

let radioIds = 0;
