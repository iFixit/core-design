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
import { addEventListener, removeEventListener } from "../../utils/helpers";
import { labelPositionProps } from "../../assets/script/global";

@Component({
  tag: "core-radio",
  styleUrl: "core-radio.less",
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

    const radioGroup = (this.radioGroup = this.el.closest("core-radio-group"));

    if (radioGroup) {
      this.updateState();
      addEventListener(radioGroup, "change", this.updateState);
    }
  }

  disconnectedCallback() {
    const radioGroup = this.radioGroup;

    if (radioGroup) {
      removeEventListener(radioGroup, "change", this.updateState);
      this.radioGroup = null;
    }
  }

  private updateState = () => {
    if (this.radioGroup) {
      this.checked = this.radioGroup.value === this.value;
    }
  };

  private onFocus = () => {
    this.focusEvent.emit();
  };

  private onBlur = () => {
    this.blurEvent.emit();
  };

  /**
   * Handle Trigger click action
   */
  private handleClick = (): void => {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  };

  render() {
    const { checked, disabled, inputId, radioTabindex } = this;

    return (
      <Host
        aria-checked={`${checked}`}
        aria-disabled={disabled ? "true" : null}
        onClick={this.handleClick}
        role="radio"
        tabindex={radioTabindex}
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
