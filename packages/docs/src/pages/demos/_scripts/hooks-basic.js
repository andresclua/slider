import { Slider } from '@andresclua/sliderkit'
import { arrows, hooks } from '@andresclua/sliderkit-plugins'

const log = document.getElementById('demo-hooks-log')

new Slider('#demo-hooks-basic', {
  items: 1,
  loop: true,
  speed: 300,
  plugins: [
    arrows(),
    hooks({
      onInit({ slides }) {
        if (log) log.textContent = 'onInit — ' + slides.length + ' slides ready'
      },
      beforeChange({ outgoing, incoming, direction }) {
        if (outgoing) outgoing.style.opacity = '0.3'
        if (log) log.textContent = 'beforeChange → ' + direction
      },
      afterChange({ slide }) {
        slide.style.opacity = '1'
        if (log) log.textContent = 'afterChange — now showing slide ' + slide.textContent.trim()
      },
      onDragStart() { if (log) log.textContent = 'onDragStart' },
      onDragEnd()   { if (log) log.textContent = 'onDragEnd'   },
    }),
  ],
})
