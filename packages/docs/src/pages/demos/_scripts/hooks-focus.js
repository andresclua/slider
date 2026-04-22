import gsap from 'gsap'
import { Slider } from '@andresclua/sliderkit'
import { arrows, hooks } from '@andresclua/sliderkit-plugins'

const ORIG = '.sliderkit__item:not(.sliderkit__item--clone)'

function applyFocus(track) {
  track.querySelectorAll(ORIG).forEach(s =>
    gsap.to(s, { opacity: 0.5, scale: 0.92, duration: 0.35, ease: 'power2.out', overwrite: true })
  )
  track.querySelectorAll('.sliderkit__item--clone').forEach(s =>
    gsap.set(s, { opacity: 0.5, scale: 0.92 })
  )
  const active = [...track.querySelectorAll('.sliderkit__item--active')]
  if (active[1])
    gsap.to(active[1], { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out', overwrite: true })
}

new Slider('#demo-hooks-focus', {
  items: 3,
  gutter: 16,
  slideBy: 1,
  loop: true,
  speed: 350,
  plugins: [
    arrows(),
    hooks({
      onInit({ slider }) { applyFocus(slider.container) },
      afterChange({ slide }) {
        requestAnimationFrame(() => applyFocus(slide.parentElement))
      },
    }),
  ],
})
