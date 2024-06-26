import { chakra, Divider, Flex } from '@chakra-ui/react'
import { FaHome, FaSave } from 'react-icons/fa'
import { RiArrowGoBackLine, RiArrowGoForwardLine } from 'react-icons/ri'
import { getRectOfNodes, getTransformForBounds, useReactFlow } from 'reactflow'
import { toPng } from 'html-to-image'

const Tools = () => {
  const { getNodes } = useReactFlow()
  const HomeIcon = chakra(FaHome)
  const SaveIcon = chakra(FaSave)
  const BackIcon = chakra(RiArrowGoBackLine)
  const ForwardIcon = chakra(RiArrowGoForwardLine)

  const imageWidth = 1024
  const imageHeight = 768

  const processDownloadImage = (dataUrl: string) => {
    const link = document.createElement('a')
    link.setAttribute('download', 'reactflow.png')
    link.setAttribute('href', dataUrl)
    link.click()
  }

  const downloadImage = () => {
    const nodesBounds = getRectOfNodes(getNodes())
    const transform = getTransformForBounds(
      nodesBounds,
      imageWidth,
      imageHeight,
      0.5,
      2,
    )

    toPng(document.querySelector('.react-flow__viewport') as HTMLElement, {
      backgroundColor: '#1a365d',
      width: imageWidth,
      height: imageHeight,
      style: {
        width: imageWidth + 'px',
        height: imageHeight + 'px',
        transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
      },
    }).then(processDownloadImage)
  }
  return (
    <>
      <Flex
        w="full"
        h={12}
        px={4}
        alignItems="center"
        gap={4}
        bgColor="gray.200"
      >
        <HomeIcon
          boxSize={6}
          cursor="pointer"
          onClick={() => (window.location.href = '/')}
        />
        <Divider
          orientation="vertical"
          borderColor="gray.400"
          borderWidth="2px"
          height="2rem"
          opacity="0.4"
        />
        <SaveIcon boxSize={5} cursor="pointer" onClick={downloadImage} />
        <BackIcon boxSize={5} />
        <ForwardIcon boxSize={5} />
        <Divider
          orientation="vertical"
          borderColor="gray.400"
          borderWidth="2px"
          height="2rem"
          opacity="0.4"
        />
      </Flex>
    </>
  )
}

export default Tools
