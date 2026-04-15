import type { SliderPlugin } from '@andresclua/sliderkit'
import type { SliderInstance } from '@andresclua/sliderkit'

export interface AutoHeightOptions {
  animationDuration?: number
}

export function autoHeight(options: AutoHeightOptions = {}): SliderPlugin {
  const { animationDuration = 300 } = options

  let slider: SliderInstance | null = null

  function update(): void {
    if (!slider) return
    const activeSlide = slider.slides[slider.activeIndex]
    if (!activeSlide) return
    const h = activeSlide.offsetHeight
    slider.wrapper.style.transition = `height ${animationDuration}ms ease`
    slider.wrapper.style.height = `${h}px`
  }

  return {
    name: 'autoHeight',

    install(sliderInstance: SliderInstance) {
      slider = sliderInstance
      update()
      slider.on('afterSlideChange', update as () => void)
    },

    destroy() {
      slider?.off('afterSlideChange', update as () => void)
      if (slider) slider.wrapper.style.height = ''
      slider = null
    },
  }
}
