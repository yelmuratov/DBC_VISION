import { Container, Flex, FlexProps, Text, VStack } from '@chakra-ui/react';

interface HeroProps extends Omit<FlexProps, 'title'> {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  titleHeight?: string; // Optional prop to reserve space for the title
}

export const Hero = ({ title, description, titleHeight = '80px', children, ...rest }: HeroProps) => {
  return (
    <Flex py="20" alignItems="center" {...rest}>
      <Container>
        <VStack spacing={[4, null, 8]} alignItems="flex-start">
          <Text
            as="h1"
            textStyle="h1"
            textAlign="left"
            minHeight={titleHeight} // Fixed height to reserve space
            height={titleHeight} // Ensure height is fixed
            overflow="hidden" // Prevent content from pushing beyond the height
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            {title}
          </Text>
          <Text
            as="div"
            textStyle="subtitle"
            align="left"
            color="gray.500"
            _dark={{ color: 'gray.400' }}
            mt={4} // Consistent spacing
            position="relative" // Ensure description stays in place
            top={0} // Prevent shifting
          >
            {description}
          </Text>
        </VStack>
        {children}
      </Container>
    </Flex>
  );
};