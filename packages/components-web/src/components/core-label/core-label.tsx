/* eslint-disable @stencil/strict-boolean-conditions */
import { Component, ComponentInterface, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "core-label",
  styleUrl: "core-label.less",
  shadow: true,
})
export class Label implements ComponentInterface {
  /**
   * Optional color of the label.
   * Use any `@color` in [core-primitives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`.
   */
  @Prop({ reflect: true }) color?:
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "white"
    | "black"
    | "blue-light-4"
    | "blue-light-3"
    | "blue-light-2"
    | "blue-light-1"
    | "blue-dark-1"
    | "blue-dark-2"
    | "blue-dark-3"
    | "blue-dark-4"
    | "green-light-4"
    | "green-light-3"
    | "green-light-2"
    | "green-light-1"
    | "green-dark-1"
    | "green-dark-2"
    | "green-dark-3"
    | "green-dark-4"
    | "yellow-light-4"
    | "yellow-light-3"
    | "yellow-light-2"
    | "yellow-light-1"
    | "yellow-dark-1"
    | "yellow-dark-2"
    | "yellow-dark-3"
    | "yellow-dark-4"
    | "red-light-4"
    | "red-light-3"
    | "red-light-2"
    | "red-light-1"
    | "red-dark-1"
    | "red-dark-2"
    | "red-dark-3"
    | "red-dark-4"
    | "gray-1"
    | "gray-2"
    | "gray-3"
    | "gray-4"
    | "gray-5"
    | "gray-6"
    | "gray-7"
    | "gray-8"
    | string;

  /**
   * If `true`, the user cannot interact with the nested element (typically core-input).
   */
  @Prop() disabled = false;

  /**
   * The display determines where and how the label behaves inside an item.
   */
  @Prop({ reflect: true }) display?: "inline" | "block" = "block";

  /**
   * Applies the provided URL to the helpIcon href.
   */
  @Prop() helpurl?: string | undefined;

  render() {
    return (
      <Host aria-disabled={this.disabled ? "true" : null}>
        <label class="native-element">
          <div class="label-inner">
            <slot name="label-left" />
            <slot />
            <slot name="label-right">
              {this.helpurl ? (
                <a class="help-url" href={this.helpurl}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="16" height="16" rx="8" fill="currentColor" />
                    <path
                      d="M5.24786 4.394C5.40819 4.25967 5.58153 4.134 5.76786 4.017C5.95853 3.9 6.16219 3.79817 6.37886 3.7115C6.59553 3.6205 6.82736 3.55117 7.07436 3.5035C7.32569 3.4515 7.59653 3.4255 7.88686 3.4255C8.29419 3.4255 8.66036 3.47967 8.98536 3.588C9.31469 3.69633 9.59419 3.85233 9.82386 4.056C10.0535 4.25533 10.229 4.498 10.3504 4.784C10.476 5.06567 10.5389 5.37983 10.5389 5.7265C10.5389 6.06017 10.4934 6.34617 10.4024 6.5845C10.3114 6.82283 10.1944 7.03083 10.0514 7.2085C9.91269 7.38617 9.75886 7.54 9.58986 7.67C9.42519 7.79567 9.26703 7.91483 9.11536 8.0275C8.96803 8.14017 8.83803 8.25067 8.72536 8.359C8.61703 8.46733 8.54986 8.58867 8.52386 8.723L8.34186 9.633H6.96386L6.82086 8.5865C6.81653 8.5605 6.81219 8.5345 6.80786 8.5085C6.80786 8.4825 6.80786 8.4565 6.80786 8.4305C6.80786 8.23983 6.85336 8.073 6.94436 7.93C7.03536 7.787 7.15019 7.657 7.28886 7.54C7.42753 7.41867 7.57703 7.30383 7.73736 7.1955C7.89769 7.08283 8.04719 6.96367 8.18586 6.838C8.32453 6.708 8.43936 6.565 8.53036 6.409C8.62136 6.24867 8.66686 6.06017 8.66686 5.8435C8.66686 5.5835 8.58019 5.37767 8.40686 5.226C8.23786 5.07 8.00386 4.992 7.70486 4.992C7.47519 4.992 7.28236 5.01583 7.12636 5.0635C6.97469 5.11117 6.84253 5.16533 6.72986 5.226C6.62153 5.28233 6.52619 5.33433 6.44386 5.382C6.36153 5.42967 6.27919 5.4535 6.19686 5.4535C6.01053 5.4535 5.87186 5.37333 5.78086 5.213L5.24786 4.394ZM6.44386 11.9795C6.44386 11.8235 6.47203 11.6783 6.52836 11.544C6.58903 11.4097 6.66919 11.2927 6.76886 11.193C6.87286 11.0933 6.99419 11.0153 7.13286 10.959C7.27153 10.8983 7.42319 10.868 7.58786 10.868C7.74819 10.868 7.89769 10.8983 8.03636 10.959C8.17503 11.0153 8.29636 11.0933 8.40036 11.193C8.50436 11.2927 8.58453 11.4097 8.64086 11.544C8.70153 11.6783 8.73186 11.8235 8.73186 11.9795C8.73186 12.1355 8.70153 12.2828 8.64086 12.4215C8.58453 12.5558 8.50436 12.6728 8.40036 12.7725C8.29636 12.8722 8.17503 12.9502 8.03636 13.0065C7.89769 13.0628 7.74819 13.091 7.58786 13.091C7.42319 13.091 7.27153 13.0628 7.13286 13.0065C6.99419 12.9502 6.87286 12.8722 6.76886 12.7725C6.66919 12.6728 6.58903 12.5558 6.52836 12.4215C6.47203 12.2828 6.44386 12.1355 6.44386 11.9795Z"
                      fill="white"
                    />
                  </svg>
                </a>
              ) : (
                undefined
              )}
            </slot>
          </div>
          <slot name="label-input" />
        </label>
      </Host>
    );
  }
}
