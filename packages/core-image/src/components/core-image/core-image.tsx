import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'core-image',
  styleUrl: 'core-image.css',
  shadow: true,
})
export class Image {
  /**
   * The image alt tag. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt)
   */
  @Prop() alt: string;

  /**
   * The intrinsic height of the image, in pixels. Must be an integer without a unit. Overwritten with `height: auto` by default, but should be included.
   */
  @Prop() height: number;

  /**
   * Controls the native img `loading` attribute. Be mindful there is a cost associated if the image is within the viewport and `lazy` is applied.
   */
  @Prop() lazy: 'lazy' | 'auto' | 'eager' = 'auto';

  /**
   * The image path without file extension. On browsers supporting `srcset`, `src` is treated as the fallback image with a 1x pixel density.
   */
  @Prop() src: string;

  /**
   * The intrinsic width of the image, in pixels. Must be an integer without a unit.
   */
  @Prop() width: number;

  render() {
    const { alt, height, lazy, src, width } = this;
    const imageOptions = {
      types: ['avif', 'webp', 'jpg'],
    };

    return (
      <picture>
        {imageOptions.types.map(type => (
          <source
            srcSet={`
                ${src}/${type}/ps5_300w.${type} 300w,
                ${src}/${type}/ps5_592w.${type} 592w,
                ${src}/${type}/ps5_800w.${type} 800w,
                ${src}/${type}/ps5_1600w.${type} 1600w,
              `}
            type={`image/${type}`}
          />
        ))}
        <img
          src={`${src}/jpg/ps5_1600w.jpg`}
          srcSet={`
            ${src}/jpg/ps5_300w.jpg 300w,
            ${src}/jpg/ps5_592w.jpg 592w,
            ${src}/jpg/ps5_800w.jpg 800w,
            ${src}/jpg/ps5_1600w.jpg 1600w,
          `}
          width={width}
          height={height}
          alt={alt}
          decoding="async"
          loading={lazy}
        />
      </picture>
    );
  }
}
