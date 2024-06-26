import Tools from './Tools'
import OverviewFlow from './OverviewFlow'
import React from 'react'
import { Flex } from '@chakra-ui/react'

const MainComponent = () => {
  return (
    <Flex flexDirection="column" h="100vh">
      <Tools />
      <OverviewFlow />
    </Flex>
  )
}

export default MainComponent
