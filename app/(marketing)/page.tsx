'use client'
import '../../global.css'
import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
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
  FiCode,
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
  
} from 'react-icons/fi'
import { BiPlusMedical } from "react-icons/bi";
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

const typingHeaders = [
  "Turn Every Visit into Actionable Insights",
  "Recognize, Analyze, Optimize – Smarter Customer Tracking",
  "Know Your Customers. Grow Your Business.",
  "Real-Time Visitor Analytics for Smarter Retail",
  "Recognize Returning Customers, Maximize Loyalty",
  "Your Store, Your Data, Your Advantage",
  "See More Than Numbers—Understand Your Customers",
  "Not Just Faces—Future Customers",
  "Know Your Customers – Not Just Your Faces",
  "We See the Difference – Employees Aren’t Customers.",
  "No More Fake Data. Just Real Customer Insights.",
];

const HeroSection: React.FC = () => {
  const [currentHeaderIndex, setCurrentHeaderIndex] = React.useState(0);
  const [displayedText, setDisplayedText] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(true);
  const [flicker, setFlicker] = React.useState(false); // For thunder flicker effect

  React.useEffect(() => {
    const currentHeader = typingHeaders[currentHeaderIndex];
    let index = 0;
    let interval: NodeJS.Timeout;

    if (isTyping) {
      // Trigger flicker effect at the start of typing
      setFlicker(true);
      interval = setInterval(() => {
        if (index <= currentHeader.length) {
          setDisplayedText(currentHeader.slice(0, index));
          index++;
          // Randomly trigger flicker during typing for dramatic effect
          if (Math.random() > 0.8) {
            setFlicker(true);
          }
        } else {
          clearInterval(interval);
          setTimeout(() => setIsTyping(false), 1000); // Pause before erasing
        }
      }, 100); // Typing speed
    } else {
      interval = setInterval(() => {
        setFlicker(true); // Flicker while erasing
        if (index >= 0) {
          setDisplayedText(currentHeader.slice(0, index));
          index--;
        } else {
          clearInterval(interval);
          setCurrentHeaderIndex((prev) => (prev + 1) % typingHeaders.length);
          setIsTyping(true); // Start typing the next header
        }
      }, 50); // Erasing speed
    }

    return () => clearInterval(interval); // Cleanup on unmount or re-run
  }, [currentHeaderIndex, isTyping]);

  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container 
        maxW={{ base: "container.xl", lg: "container.2xl" }} 
        pt={{ base: 40, lg: 60 }} 
        pb="40"
      >
        <Stack 
          direction={{ base: 'column', lg: 'row' }} 
          alignItems="center"
          justifyContent="center"
          spacing={{ base: 8, lg: 12 }}
          marginBottom={{ base: 30 }}
        >
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            minH="600px"
            display="flex"
            flexDirection="column"
            alignItems={{ base: "center", lg: "flex-start" }}
            textAlign={{ base: "center", lg: "left" }}
            title={
              <Box
                as="span"
                fontSize={{ base: "2xl", lg: "4xl" }}
                fontWeight="bold"
                minHeight="180px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                className={flicker ? "thunder-flicker thunder-shake" : ""} // Apply thunder effects
              >
                DBCVISION- {displayedText}
              </Box>
            }
            description={
              <Box fontWeight="medium">
                DBCVision turns every store visit into precise, AI-driven insights—helping you track real customers, analyze trends, and make data-backed decisions that drive growth.
              </Box>
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
            display={{ base: 'none', lg: 'block' }}
            flexShrink={0}
            width={{ lg: "600px", xl: "700px" }}
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%" marginTop={{ base: 0, lg: 20 }}>
                <Image
                  src="/static/images/dashboard.png"
                  width={1200}
                  height={762}
                  alt="DBCVision Dashboard Screenshot"
                  quality="75"
                  priority
                  style={{ objectFit: 'contain' }}
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
            title: 'Smarter AI, Sharper Insights',
            icon: FiSmile,
            description: 'Leverage advanced AI to track real customer behavior with unmatched accuracy.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Built to Scale, Ready to Grow',
            icon: FiSliders,
            description: "Our system adapts effortlessly, whether you're running one store or a nationwide chain.",
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Data That Works for You',
            icon: FiGrid,
            description: 'Transform raw visitor data into powerful insights that fuel smarter decisions.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Efficiency Redefined',
            icon: FiThumbsUp,
            description: 'Streamline operations, cut unnecessary costs, and boost performance—fast.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
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

        <Stack direction={{ base: 'column', lg: 'row' }} spacing="8">
          <Box
            flex="1"
            p="8"
            bg="white"
            _dark={{ bg: 'gray.800' }}
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
                    borderColor="gray.300"
                    _placeholder={{ color: 'gray.500' }}
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
                  colorScheme="purple"
                  size="lg"
                  w={{ base: 'full', md: 'auto' }}
                >
                  Send Message
                </Button>
              </VStack>
            </VStack>
          </Box>

          <Box flex="1">
            <Box
              borderRadius="lg"
              overflow="hidden"
              mb="4"
              height="500px"
              bg="gray.200"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.432610126551!2d69.21321217667075!3d41.23413360548623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61001f19c4d5%3A0x464fe6a3808df354!2sAralTech!5e0!3m2!1sen!2s!4v1741266837620!5m2!1sen!2s" 
                width="600" 
                height="750" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
            <VStack align="start" spacing="2">
              <Heading fontSize="xl">DBC VISION</Heading>
              <Text color="muted">
                Ulitsa YANGI SERGELI 12, Tashkent, Uzbekistan
              </Text>
            </VStack>
          </Box>
        </Stack>

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

const HighlightsSection = () => {
  return (
    <Highlights id="highlights">
      <HighlightsItem colSpan={[1, null, 2]} title="AI-Powered Vision, Smarter Retail">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
          Unlock the full potential of <Em>AI-driven</Em> analytics with DBCVision. Track real customer behavior, visualize trends instantly, and make data-driven decisions that boost your business.
          </Text>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Why DBCVision?">
        <Text color="muted" fontSize="lg">
        We seamlessly integrate advanced AI into your existing systems, ensuring accurate customer tracking—not miscounted employees. Identify returning clients, analyze real visitor trends, and optimize your operations to drive growth and efficiency.
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
          Beyond Counting. 
          <Br /> Real Vision.
        </Heading>
      }
      description={
        <>
          DBCVision transforms store visits into actionable insights, helping you track real customers, analyze trends, and optimize operations with precision.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Instant Insights',
          icon: FiBox,
          description: 'Process real-time visual data for smarter, faster decisions.',
          variant: 'inline',
        },
        {
          title: 'AI That Knows More',
          icon: FiLock,
          description: 'Recognize returning customers, detect trends, and eliminate false counts.',
          variant: 'inline',
        },
        {
          title: 'Custom Reports',
          icon: FiSearch,
          description: 'Tailored analytics to refine strategy and drive growth.',
          variant: 'inline',
        },
        {
          title: 'Effortless Integration',
          icon: FiUserPlus,
          description: 'Connect seamlessly with your existing systems or deploy on our secure cloud.',
          variant: 'inline',
        },
        {
          title: 'Scalable & Future-Ready',
          icon: FiFlag,
          description: 'Handles growing data effortlessly, keeping your business ahead.',
          variant: 'inline',
        },
        {
          title: 'Smart Alerts',
          icon: FiTerminal,
          description: 'Get notified instantly about key customer trends and critical changes.',
          variant: 'inline',
        },
        {
          title: 'Designed for You',
          icon: FiToggleLeft,
          description: 'Interactive dashboards in light & dark mode for a seamless experience.',
          variant: 'inline',
        },
        {
          title: 'Backed by AI Experts',
          icon: FiCode,
          description: 'Built for precision, supported for success.',
          variant: 'inline',
        },
        {
          title: 'Efficiency Boost', // Kept this as the 9th item since you provided 8
          icon: FiTrendingUp,
          description: 'Optimize workflows and reduce costs with automated vision analytics.',
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
              Track real customers, analyze shopping patterns, and optimize store performance with AI-powered visitor insights—not false employee counts.
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
            <Icon as={BiPlusMedical} boxSize="6" color="primary.500" />
            <Text fontWeight="bold" fontSize="xl" mb="2">
              Clinics & Pharmacies
            </Text>
            <Text color="muted">
              Understand foot traffic trends, identify peak hours, and improve customer service efficiency with real-time analytics.
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
              Coffee Shops & Cafés
            </Text>
            <Text color="muted">
              Know if customers are first-time buyers or returning regulars. Enhance loyalty strategies and personalize customer engagement.
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
            <Icon as={FiBox} boxSize="6" color="primary.500" /> {/* Replaced FiStore with FiBox */}
            <Text fontWeight="bold" fontSize="xl" mb="2">
              Offline Retailers
            </Text>
            <Text color="muted">
              From boutique stores to supermarkets, gain deep insights into visitor behavior, busiest hours, and returning customers to drive better sales.
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