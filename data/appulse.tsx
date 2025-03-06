import { Flex, Image, Text, useColorModeValue } from '@chakra-ui/react'

export const Logo = ({ ...rest }) => {
  const logoSrc = useColorModeValue('/static/images/icon.png', '/static/images/icon.png'); // Adjust paths as necessary

  return (
    <Flex align="center" {...rest}>
      <Image src={logoSrc} alt="DBCVision Logo" boxSize="40px" mr={2} />
      <Text fontSize="xl" fontWeight="bold" color={useColorModeValue('gray.800', 'white')}>
        DBCVision
      </Text>
    </Flex>
  )
}