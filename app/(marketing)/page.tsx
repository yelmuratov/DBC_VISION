'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Text,
  VStack,
  useClipboard,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react'
import { FiSettings } from 'react-icons/fi'
import { Br, Link as SaasLink } from '@saas-ui/react'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
  FiTruck,
} from 'react-icons/fi'
import * as React from 'react'
import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import { Highlights, HighlightsItem } from '#components/highlights'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Em } from '#components/typography'
import faq from '#data/faq'


export default function Home() {
  return (
    <Box>
      <HeroSection />
      <HighlightsSection />
      <FeaturesSection />
      <SolutionsSection />
      <HowItWorksSection />
      <FaqSection />
      <ContactSection />
    </Box>
  )
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    companyName: '',
    telephoneNumber: '',
    message: '',
  })
  const [errors, setErrors] = React.useState({
    name: '',
    companyName: '',
    telephoneNumber: '',
    message: '',
  })
  const toast = useToast()

  const validateForm = () => {
    let isValid = true
    const newErrors = { name: '', companyName: '', telephoneNumber: '', message: '' }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      isValid = false
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required'
      isValid = false
    }

    if (!formData.telephoneNumber.trim()) {
      newErrors.telephoneNumber = 'Telephone number is required'
      isValid = false
    } else if (!/^\+?[\d\s-]{9,}$/.test(formData.telephoneNumber)) {
      newErrors.telephoneNumber = 'Invalid telephone number (e.g., +998901234567)'
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      try {
        const response = await fetch('/api/send-to-telegram', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          toast({
            title: 'Success',
            description: 'Message sent to Telegram successfully!',
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
          setFormData({ name: '', companyName: '', telephoneNumber: '', message: '' })
        } else {
          throw new Error('Failed to send message')
        }
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to send message. Please try again.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
    }
  }

  return (
    <Box py="20" id="contact">
      <Container maxW="container.xl">
        <VStack spacing="4" mb="12">
          <Heading fontSize={['2xl', null, '4xl']} textAlign="center">
            Contact Us
          </Heading>
          <Text fontSize="lg" color="muted" textAlign="center">
            Have a question? We’d love to hear from you.
          </Text>
        </VStack>

        {/* Main Content: Form and Map */}
        <Stack direction={{ base: 'column', lg: 'row' }} spacing="8">
          {/* Contact Form */}
          <Box
            flex="1"
            p="8"
            bg="white" // Original white background
            _dark={{ bg: 'gray.800' }} // Original dark mode background
            borderRadius="lg"
            boxShadow="md"
          >
            <VStack align="start" spacing="6" as="form" onSubmit={handleSubmit}>
              <Heading fontSize="2xl">Contact Form</Heading>
              <Text color="muted">
                Fill out the form below to reach us
              </Text>
              <VStack spacing="4" w="full">
                <FormControl isInvalid={!!errors.name}>
                  <FormLabel>Name (First Name, Last Name)</FormLabel>
                  <Input
                    placeholder="Enter your name"
                    variant="outline"
                    size="lg"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    borderColor="gray.300" // Original border color
                    _placeholder={{ color: 'gray.500' }} // Original placeholder color
                  />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.companyName}>
                  <FormLabel>Company Name</FormLabel>
                  <Input
                    placeholder="Enter your company name"
                    variant="outline"
                    size="lg"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    borderColor="gray.300"
                    _placeholder={{ color: 'gray.500' }}
                  />
                  <FormErrorMessage>{errors.companyName}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.telephoneNumber}>
                  <FormLabel>Telephone Number</FormLabel>
                  <Input
                    placeholder="Enter your telephone (e.g., +998901234567)"
                    variant="outline"
                    size="lg"
                    value={formData.telephoneNumber}
                    onChange={(e) => setFormData({ ...formData, telephoneNumber: e.target.value })}
                    borderColor="gray.300"
                    _placeholder={{ color: 'gray.500' }}
                  />
                  <FormErrorMessage>{errors.telephoneNumber}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.message}>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    placeholder="Your message"
                    variant="outline"
                    size="lg"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    borderColor="gray.300"
                    _placeholder={{ color: 'gray.500' }}
                    rows={5}
                  />
                  <FormErrorMessage>{errors.message}</FormErrorMessage>
                </FormControl>
                <Button
                  type="submit"
                  colorScheme="purple" // Original button color
                  size="lg"
                  w={{ base: 'full', md: 'auto' }}
                >
                  Send Message
                </Button>
              </VStack>
            </VStack>
          </Box>

          {/* Map and Location */}
          <Box flex="1">
            <Box
              borderRadius="lg"
              overflow="hidden"
              mb="4"
              height="500px"
              bg="gray.200"
            >
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.432610126551!2d69.21321217667075!3d41.23413360548623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61001f19c4d5%3A0x464fe6a3808df354!2sAralTech!5e0!3m2!1sen!2s!4v1741266837620!5m2!1sen!2s" width="600" height="750" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Box>
            <VStack align="start" spacing="2">
              <Heading fontSize="xl">DBC VISION</Heading>
              <Text color="muted">
                Ulitsa YANGI SERGELI 12, Tashkent, Uzbekistan
              </Text>
            </VStack>
          </Box>
        </Stack>

        {/* Bottom Banner */}
        <Box
          mt="12"
          py="6"
          px="8"
          bg="purple.600"
          borderRadius="lg"
          textAlign="center"
        >
          <HStack justify="space-between" align="center">
            <Text fontSize="xl" fontWeight="bold" color="white">
              Talk to Our Team of Experts
            </Text>
            <Button
              as={SaasLink}
              href="#contact"
              variant="outline"
              colorScheme="white"
              size="lg"
              borderColor="white"
              color="white"
              _hover={{ bg: 'white', color: 'purple.600' }}
            >
              Book a Demo
            </Button>
          </HStack>
        </Box>
      </Container>
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Unlock the Power of
                <Br /> Intelligent Vision
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                DBCVision delivers cutting-edge <Em>AI-powered analytics</Em>
                <Br /> to transform your business operations and decision-making,
                <Br /> enabling smarter insights and accelerated growth.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8"></HStack>
              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="#contact">
                  Get Started
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="#contact"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  Request Demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/images/dashboard.png"
                  width={1200}
                  height={762}
                  alt="DBCVision Dashboard Screenshot"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'AI-driven',
            icon: FiSmile,
            description: 'Harness advanced artificial intelligence for precise, real-time analytics.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Scalable',
            icon: FiSliders,
            description: 'Solutions designed to seamlessly scale with your business.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Actionable Insights',
            icon: FiGrid,
            description: 'Turn data into actionable decisions that drive results.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Efficient',
            icon: FiThumbsUp,
            description: 'Optimize operations, reduce costs, and enhance productivity rapidly.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  return (
    <Highlights id="highlights">
      <HighlightsItem colSpan={[1, null, 2]} title="Advanced Vision Analytics">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Discover the power of <Em>AI-driven analytics</Em> with DBCVision.
            Gain real-time insights, streamline operations, and improve decision-making with intuitive visual data analysis.
          </Text>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Why DBCVision?">
        <Text color="muted" fontSize="lg">
          We integrate advanced artificial intelligence with your existing systems to ensure you get the most from your data, accelerating growth and maximizing operational efficiency.
        </Text>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Beyond Basic Analytics.
          <Br /> Vision That Drives Results.
        </Heading>
      }
      description={
        <>
          DBCVision delivers powerful AI-driven tools to turn visual data
          <Br />
          into insights that enhance efficiency and fuel business growth.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Real-Time Insights.',
          icon: FiBox,
          description: 'Process and analyze visual data instantly to make faster, smarter decisions.',
          variant: 'inline',
        },
        {
          title: 'AI-Powered Detection.',
          icon: FiLock,
          description: 'Advanced algorithms identify patterns and anomalies with pinpoint accuracy.',
          variant: 'inline',
        },
        {
          title: 'Actionable Reports.',
          icon: FiSearch,
          description: 'Detailed, customizable reports designed to guide your strategic planning.',
          variant: 'inline',
        },
        {
          title: 'Seamless Integration.',
          icon: FiUserPlus,
          description: 'Easily connect with your existing systems or deploy on our secure cloud platform.',
          variant: 'inline',
        },
        {
          title: 'Scalable Performance.',
          icon: FiFlag,
          description: 'Handles growing data volumes effortlessly, keeping your operations smooth.',
          variant: 'inline',
        },
        {
          title: 'Efficiency Boost.',
          icon: FiTrendingUp,
          description: 'Optimize workflows and reduce costs with automated vision analytics.',
          variant: 'inline',
        },
        {
          title: 'Custom Dashboards.',
          icon: FiToggleLeft,
          description: 'Intuitive interfaces tailored to your needs, available in light and dark modes.',
          variant: 'inline',
        },
        {
          title: 'Smart Alerts.',
          icon: FiTerminal,
          description: 'Get instant notifications about critical events to stay proactive.',
          variant: 'inline',
        },
        {
          title: 'Expert-Backed.',
          icon: FiCode,
          description: (
            <>
              Built by vision AI specialists with full support to ensure your success.
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}

const SolutionsSection = () => {
  return (
    <Box py="20" bg="gray.50" _dark={{ bg: 'gray.900' }} id="solutions">
      <Container maxW="container.xl">
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="center"
          mb="12"
        >
          Solutions for Every Industry
        </Heading>
        <Stack direction={{ base: 'column', lg: 'row' }} spacing="8">
          <VStack
            p="6"
            bg="white"
            _dark={{ bg: 'gray.800' }}
            borderRadius="lg"
            boxShadow="md"
            align="start"
            flex="1"
          >
            <Icon as={FiBox} boxSize="6" color="primary.500" />
            <Text fontWeight="bold" fontSize="xl" mb="2">
              Retail
            </Text>
            <Text color="muted">
              Monitor inventory, optimize stock levels, and enhance customer experiences with real-time vision analytics.
            </Text>
          </VStack>
          <VStack
            p="6"
            bg="white"
            _dark={{ bg: 'gray.800' }}
            borderRadius="lg"
            boxShadow="md"
            align="start"
            flex="1"
          >
            <Icon as={FiTruck} boxSize="6" color="primary.500" />
            <Text fontWeight="bold" fontSize="xl" mb="2">
              Logistics
            </Text>
            <Text color="muted">
              Track shipments, detect issues, and streamline operations with AI-powered visual monitoring.
            </Text>
          </VStack>
          <VStack
            p="6"
            bg="white"
            _dark={{ bg: 'gray.800' }}
            borderRadius="lg"
            boxShadow="md"
            align="start"
            flex="1"
          >
            <Icon as={FiSettings} boxSize="6" color="primary.500" />
            <Text fontWeight="bold" fontSize="xl" mb="2">
              Manufacturing
            </Text>
            <Text color="muted">
              Improve quality control and reduce downtime with precise anomaly detection and reporting.
            </Text>
          </VStack>
        </Stack>
      </Container>
    </Box>
  )
}

const HowItWorksSection = () => {
  return (
    <Box py="20" id="how-it-works">
      <Container maxW="container.xl">
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="center"
          mb="12"
        >
          How DBCVision Works
        </Heading>
        <Stack direction={{ base: 'column', md: 'row' }} spacing="8">
          <VStack align="start" flex="1">
            <Text fontSize="2xl" fontWeight="bold" color="primary.500">
              1
            </Text>
            <Text fontWeight="bold" fontSize="xl" mb="2">
              Capture Data
            </Text>
            <Text color="muted">
              Integrate cameras or upload visual data directly into our platform.
            </Text>
          </VStack>
          <VStack align="start" flex="1">
            <Text fontSize="2xl" fontWeight="bold" color="primary.500">
              2
            </Text>
            <Text fontWeight="bold" fontSize="xl" mb="2">
              Analyze with AI
            </Text>
            <Text color="muted">
              Our advanced AI processes the data in real-time to detect patterns and insights.
            </Text>
          </VStack>
          <VStack align="start" flex="1">
            <Text fontSize="2xl" fontWeight="bold" color="primary.500">
              3
            </Text>
            <Text fontWeight="bold" fontSize="xl" mb="2">
              Act on Insights
            </Text>
            <Text color="muted">
              Use custom dashboards and reports to make informed decisions fast.
            </Text>
          </VStack>
        </Stack>
        <Flex justify="center" mt="12">
          <ButtonLink colorScheme="primary" size="lg" href="#contact">
            Start Now
          </ButtonLink>
        </Flex>
      </Container>
    </Box>
  )
}

const FaqSection = () => {
  return <Faq {...faq} id="faq" />
}