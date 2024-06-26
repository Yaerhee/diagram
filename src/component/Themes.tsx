import { Flex, Text } from '@chakra-ui/react'

const Themes = () => {
  return (
    <Flex
      w="20%"
      flexDirection="column"
      borderWidth="1px"
      borderColor="gray.300"
    >
      <Flex px={4} bgColor="gray.200" justifyContent="center">
        <Text py={1} fontSize="md">
          Themes
        </Text>
      </Flex>
    </Flex>
  )
}

export default Themes
