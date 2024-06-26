import React from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import MainComponent from './component/MainComponent'
import { ReactFlowProvider } from 'reactflow'

function App() {
  return (
    <ChakraProvider>
      <ReactFlowProvider>
        <MainComponent />
      </ReactFlowProvider>
    </ChakraProvider>
  )
}

export default App
