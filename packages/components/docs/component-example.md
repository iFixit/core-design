## High Level Component Example

```tsx
@Component({
  tag: "core-component",
  styleUrls: {
    ios: "component.ios.css",
    md: "component.md.css",
    wp: "component.wp.css",
  },
})
export class Component {
  /**
   * 1. Own Properties
   * Always set the type if a default value has not
   * been set. If a default value is being set, then type
   * is already inferred. List the own properties in
   * alphabetical order. Note that because these properties
   * do not have the @Prop() decorator, they will not be exposed
   * publicly on the host element, but only used internally.
   */
  num: number;
  someText = "default";

  /**
   * 2. Reference to host HTML element.
   * Inlined decorator
   */
  @Element() el: HTMLElement;

  /**
   * 3. State() variables
   * Inlined decorator, alphabetical order.
   */
  @State() isValidated: boolean;
  @State() status = 0;

  /**
   * 4. Public Property API
   * Inlined decorator, alphabetical order. These are
   * different than "own properties" in that public props
   * are exposed as properties and attributes on the host element.
   * Requires JSDocs for public API documentation.
   */
  @Prop() content: string;
  @Prop() enabled: boolean;
  @Prop() menuId: string;
  @Prop() type = "overlay";

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   * This makes sense since both statements are strongly connected.
   * - If renaming the instance variable name you must also update the name in @Watch()
   * - Code is easier to follow and maintain.
   */
  @Prop() swipeEnabled = true;

  @Watch("swipeEnabled")
  swipeEnabledChanged(newSwipeEnabled: boolean, oldSwipeEnabled: boolean) {
    this.updateState();
  }

  /**
   * 5. Events section
   * Inlined decorator, alphabetical order.
   * Requires JSDocs for public API documentation.
   */
  @Event() coreClose: EventEmitter;
  @Event() coreDrag: EventEmitter;
  @Event() coreOpen: EventEmitter;

  /**
   * 6. Component lifecycle events
   * Ordered by their natural call order, for example
   * WillLoad should go before DidLoad.
   */
  componentWillLoad() {}
  componentDidLoad() {}
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentDidUnload() {}

  /**
   * 7. Listeners
   * It is ok to place them in a different location
   * if makes more sense in the context. Recommend
   * starting a listener method with "on".
   * Always use two lines.
   */
  @Listen("click", { enabled: false })
  onClick(ev: UIEvent) {
    console.log("hi!");
  }

  /**
   * 8. Public methods API
   * These methods are exposed on the host element.
   * Always use two lines.
   * Public Methods must be async.
   * Requires JSDocs for public API documentation.
   */
  @Method()
  async open(): Promise<boolean> {
    // ...
    return true;
  }

  @Method()
  async close(): Promise<void> {
    // ...
  }

  /**
   * 9. Local methods
   * Internal business logic. These methods cannot be
   * called from the host element.
   */
  prepareAnimation(): Promise<void> {
    // ...
  }

  updateState() {
    // ...
  }

  /**
   * 10. render() function
   * Always the last one in the class.
   */
  render() {
    return (
      <Host
        attribute="navigation"
        side={this.isRightSide ? "right" : "left"}
        type={this.type}
        class={{
          "core-is-animating": this.isAnimating,
        }}
      >
        <div class="menu-inner page-inner">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
```
