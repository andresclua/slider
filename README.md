# SliderKit

[![npm version](https://img.shields.io/npm/v/@andresclua/sliderkit)](https://www.npmjs.com/package/@andresclua/sliderkit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Sponsor](https://img.shields.io/badge/Sponsor-%E2%9D%A4-red)](https://github.com/sponsors/andresclua)

A modern, accessible, TypeScript-first slider library with WebGL effects, CSS transitions, and a rich plugin system.

## Packages

| Package | Description | Size |
|---|---|---|
| [`@andresclua/sliderkit`](packages/core) | Core slider engine | ~7kb gzipped |
| [`@andresclua/sliderkit-plugins`](packages/plugins) | UI plugins (pagination, arrows, autoplay…) | ~4kb gzipped |
| [`@andresclua/sliderkit-effects`](packages/effects) | CSS transition effects | ~2kb gzipped |
| [`@andresclua/sliderkit-webgl`](packages/webgl) | WebGL renderer (OGL) + effects | ~4kb gzipped |

## Quick Start

```bash
npm install @andresclua/sliderkit @andresclua/sliderkit-plugins
```

```typescript
import { Slider } from '@andresclua/sliderkit'
import { pagination, autoplay, arrows } from '@andresclua/sliderkit-plugins'

const slider = new Slider('#my-slider', {
  slidesPerPage: 3,
  gutter: 16,
  loop: true,
  plugins: [
    pagination({ type: 'dots' }),
    autoplay({ delay: 3000 }),
    arrows(),
  ],
})
```

## Documentation

Visit [sliderkit.andresclua.com](https://sliderkit.andresclua.com) for full documentation and demos.

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start docs
pnpm dev
```

## Support this project

If SliderKit is useful to you, consider [sponsoring the development](https://github.com/sponsors/andresclua).

## License

MIT © [Andres Clua](https://github.com/andresclua)
