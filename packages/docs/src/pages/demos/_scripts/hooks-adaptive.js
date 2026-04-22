import gsap from 'gsap'
import { Slider } from '@andresclua/sliderkit'
import { arrows, pagination, hooks } from '@andresclua/sliderkit-plugins'
import { fadeEffect } from '@andresclua/sliderkit-effects'

let track, inner, overflow

function setHeight(h, animate) {
  const els = [track, inner, overflow]
  if (animate) gsap.to(els, { height: h, duration: 0.4, ease: 'power2.inOut', overwrite: true })
  else els.forEach(el => el && (el.style.height = h + 'px'))
}

new Slider('#demo-hooks-gsap-long', {
  items: 1,
  loop: true,
  speed: 600,
  plugins: [
    arrows(),
    pagination({ type: 'dots', clickable: true }),
    fadeEffect({ duration: 600, easing: 'ease-in-out', adaptiveHeight: true }),
    hooks({
      onInit({ slider, slides }) {
        track    = slider.container
        inner    = slider.innerWrapper
        overflow = inner.parentElement
        setHeight(slides[0].offsetHeight, false)
        gsap.from(slides[0].querySelectorAll('.fade-tag, .fade-title, .fade-sub'), {
          y: 28, autoAlpha: 0, stagger: 0.1, duration: 0.55, ease: 'power3.out', clearProps: 'all',
        })
      },
      beforeChange({ incoming }) {
        setHeight(incoming.offsetHeight, true)
        gsap.from(incoming.querySelectorAll('.fade-tag, .fade-title, .fade-sub'), {
          y: 28, autoAlpha: 0, stagger: 0.1, duration: 0.55, ease: 'power3.out', delay: 0.25, clearProps: 'all',
        })
      },
    }),
  ],
})
