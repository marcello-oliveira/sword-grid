import React from 'react'

import { SwordGrid } from 'sword-grid'
import 'sword-grid/dist/index.css'

const App = () => {
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

export default App
