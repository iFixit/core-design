import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "core-color-grid",
  styleUrl: "core-color-grid.less",
  shadow: true,
})
export class ColorGrid implements ComponentInterface {
  render() {
    const colorList = [
      { name: "color-blue", hex: "#1975F1" },
      { name: "color-green", hex: "#33B464" },
      { name: "color-yellow", hex: "#F9C03E" },
      { name: "color-red", hex: "#F34E46" },
      { name: "color-white", hex: "#FFFFFF" },
      { name: "color-black", hex: "#11161A" },
      { name: "color-blue-light-4", hex: "#EDF6FF" },
      { name: "color-blue-light-3", hex: "#BDDCFF" },
      { name: "color-blue-light-2", hex: "#77B5FF" },
      { name: "color-blue-light-1", hex: "#3B95FF" },
      { name: "color-blue-dark-1", hex: "#085FD9" },
      { name: "color-blue-dark-2", hex: "#004AB3" },
      { name: "color-blue-dark-3", hex: "#00368C" },
      { name: "color-blue-dark-4", hex: "#002466" },
      { name: "color-green-light-4", hex: "#E8FAEE" },
      { name: "color-green-light-3", hex: "#B7ECC8" },
      { name: "color-green-light-2", hex: "#89DCA5" },
      { name: "color-green-light-1", hex: "#5DC984" },
      { name: "color-green-dark-1", hex: "#269C55" },
      { name: "color-green-dark-2", hex: "#1B8246" },
      { name: "color-green-dark-3", hex: "#126637" },
      { name: "color-green-dark-4", hex: "#0A4927" },
      { name: "color-yellow-light-4", hex: "#FFF8E9" },
      { name: "color-yellow-light-3", hex: "#FFE9B9" },
      { name: "color-yellow-light-2", hex: "#FFDB8C" },
      { name: "color-yellow-light-1", hex: "#FFCD63" },
      { name: "color-yellow-dark-1", hex: "#D99B2E" },
      { name: "color-yellow-dark-2", hex: "#B37820" },
      { name: "color-yellow-dark-3", hex: "#8C5715" },
      { name: "color-yellow-dark-4", hex: "#66390C" },
      { name: "color-red-light-4", hex: "#FFEDED" },
      { name: "color-red-light-3", hex: "#FFB8B3" },
      { name: "color-red-light-2", hex: "#FF8B85" },
      { name: "color-red-light-1", hex: "#FF6860" },
      { name: "color-red-dark-1", hex: "#D93531" },
      { name: "color-red-dark-2", hex: "#B3201F" },
      { name: "color-red-dark-3", hex: "#8C1113" },
      { name: "color-red-dark-4", hex: "#66070B" },
      { name: "color-gray-1", hex: "#F7F9FA" },
      { name: "color-gray-2", hex: "#E3E8ED" },
      { name: "color-gray-3", hex: "#D2DADF" },
      { name: "color-gray-4", hex: "#AFBBC4" },
      { name: "color-gray-5", hex: "#828D96" },
      { name: "color-gray-6", hex: "#525D66" },
      { name: "color-gray-7", hex: "#39444D" },
      { name: "color-gray-8", hex: "#242C33" },
    ];

    return (
      <Host class={{ "core-color-grid": true }}>
        {colorList.map((color) => (
          <div class="color">
            <div class="color-swatch" style={{ background: color.hex }}></div>
            <div class="color-name">{color.name}</div>
            <div class="color-hex">{color.hex}</div>
          </div>
        ))}
      </Host>
    );
  }
}
