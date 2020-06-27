# sword-grid

> high performance react grids

[![NPM](https://img.shields.io/npm/v/sword-grid.svg)](https://www.npmjs.com/package/sword-grid) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save sword-grid
```

## Usage

```tsx
import React, { Component } from 'react'

import SwordGrid from 'sword-grid'
import 'sword-grid/dist/index.css'

class Example extends Component {
  render() {
    return <SwordGrid
      columnDefs={[
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" }
      ]}
      rowData={[
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
      ]}
    />
  }
}
```

## License

MIT © [marcello-oliveira](https://github.com/marcello-oliveira)
