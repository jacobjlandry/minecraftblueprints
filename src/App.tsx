import React, { useState } from 'react'
import { BlueprintGrid } from './components/BlueprintGrid'
import MaterialSelector from './components/MaterialSelector'
import type { MaterialType } from './types/minecraft'
import './App.css'

function App() {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialType>('oak_planks')

  return (
    <div className="app">
      <h1>Minecraft Blueprint Creator</h1>
      <MaterialSelector
        selectedMaterial={selectedMaterial}
        onMaterialSelect={setSelectedMaterial}
      />
      <BlueprintGrid selectedMaterial={selectedMaterial} />
      </div>
  )
}

export default App
