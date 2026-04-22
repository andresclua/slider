import gsap from 'gsap'
import { Slider } from '@andresclua/sliderkit'
import { arrows, pagination, hooks } from '@andresclua/sliderkit-plugins'
import { fadeEffect } from '@andresclua/sliderkit-effects'

new Slider('#demo-hooks-direction', {
  items: 1,
  loop: true,
  speed: 600,
  plugins: [
    arrows(),
    pagination({ type: 'dots', clickable: true }),
    fadeEffect({ duration: 600, easing: 'ease-in-out' }),
    hooks({
      onInit({ slides }) {
        gsap.from(slides[0].querySelectorAll('.fade-tag, .fade-title, .fade-sub'), {
          x: 40, autoAlpha: 0, stagger: 0.09, duration: 0.5, ease: 'power3.out', clearProps: 'all',
        })
      },
      beforeChange({ incoming, direction }) {
        const sign = direction === 'forward' ? 1 : -1
        gsap.from(incoming.querySelectorAll('.fade-tag, .fade-title, .fade-sub'), {
          x: sign * 50, autoAlpha: 0, stagger: 0.09, duration: 0.5, ease: 'power3.out', delay: 0.2, clearProps: 'all',
        })
      },
    }),
  ],
})
