import { Flex, Image, Text, useColorModeValue, HTMLChakraProps } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'img'>> = (props) => {
  const logoSrc = useColorModeValue('/static/images/icon.png', '/static/images/icon.png')

  return (
    <Flex align="center" {...props}>
      <Image src={logoSrc} alt="DBCVision Logo" boxSize="40px" mr={2} />
      <Text fontSize="xl" fontWeight="bold" color={useColorModeValue('gray.800', 'white')}>
        DBCVision
      </Text>
    </Flex>
  )
}