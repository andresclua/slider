import gsap from 'gsap'
import { Slider } from '@andresclua/sliderkit'
import { arrows, hooks } from '@andresclua/sliderkit-plugins'

let sliderInst = null

new Slider('#demo-hooks-cards', {
  items: 3,
  gutter: 24,
  slideBy: 'page',
  loop: true,
  speed: 400,
  plugins: [
    arrows(),
    hooks({
      onInit({ slider, slides }) {
        sliderInst = slider
        const active = slides.filter(s =>
          s.classList.contains('sliderkit__item--active') &&
          !s.classList.contains('sliderkit__item--clone')
        )
        active.forEach((card, i) => {
          const d = i * 0.1
          gsap.from(card, { x: 48, autoAlpha: 0, duration: 0.45, ease: 'power3.out', delay: d, clearProps: 'all' })
          gsap.from(card.querySelectorAll('.hc-num, .hc-title, .hc-text, .hc-cta'), {
            y: 18, autoAlpha: 0, stagger: 0.07, duration: 0.38, ease: 'power2.out', delay: d + 0.1, clearProps: 'all',
          })
        })
      },
      beforeChange() {
        if (!sliderInst) return
        sliderInst.slides.forEach(s => {
          if (s.classList.contains('sliderkit__item--active'))
            gsap.set(s, { opacity: 0 })
        })
      },
      afterChange({ slide, direction }) {
        if (!sliderInst) return
        const sign = direction === 'forward' ? 1 : -1
        const track = slide.parentElement

        sliderInst.slides.forEach(s => {
          if (!s.classList.contains('sliderkit__item--active'))
            gsap.set(s, { clearProps: 'opacity' })
        })

        const animateCards = (cards) => {
          cards.forEach((card, i) => {
            const d = i * 0.1
            gsap.fromTo(card,
              { opacity: 0, x: sign * 48 },
              { opacity: 1, x: 0, duration: 0.45, ease: 'power3.out', delay: d, clearProps: 'all' }
            )
            gsap.from(card.querySelectorAll('.hc-num, .hc-title, .hc-text, .hc-cta'), {
              y: sign * 18, autoAlpha: 0, stagger: 0.07, duration: 0.38,
              ease: 'power2.out', delay: d + 0.1, clearProps: 'all',
            })
          })
        }

        const active = [...track.querySelectorAll('.sliderkit__item--active:not(.sliderkit__item--clone)')]

        if (active.length > 0) {
          animateCards(active)
        } else {
          requestAnimationFrame(() => {
            animateCards([...track.querySelectorAll('.sliderkit__item--active:not(.sliderkit__item--clone)')])
          })
        }
      },
    }),
  ],
})
