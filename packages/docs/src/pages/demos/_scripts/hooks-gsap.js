import gsap from 'gsap'
import { Slider } from '@andresclua/sliderkit'
import { arrows, pagination, hooks } from '@andresclua/sliderkit-plugins'
import { fadeEffect } from '@andresclua/sliderkit-effects'

new Slider('#demo-hooks-gsap', {
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
          y: 28, autoAlpha: 0, stagger: 0.1, duration: 0.55, ease: 'power3.out', clearProps: 'all',
        })
      },
      beforeChange({ incoming }) {
        gsap.from(incoming.querySelectorAll('.fade-tag, .fade-title, .fade-sub'), {
          y: 28, autoAlpha: 0, stagger: 0.1, duration: 0.55, ease: 'power3.out', delay: 0.25, clearProps: 'all',
        })
      },
    }),
  ],
})
