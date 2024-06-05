import { Container, Box, Text, VStack, HStack, Button, Image, IconButton, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="gray.800" color="white" py={4}>
        <HStack justifyContent="space-between" px={8}>
          <Text fontSize="2xl" fontWeight="bold">
            StrikeWild
          </Text>
          <HStack spacing={4}>
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#contact">Contact</Link>
          </HStack>
        </HStack>
      </Box>

      <Box id="home" bg="blue.700" color="white" py={20} textAlign="center">
        <VStack spacing={4}>
          <Text fontSize="4xl" fontWeight="bold">
            Welcome to StrikeWild
          </Text>
          <Text fontSize="xl">Your adventure starts here</Text>
          <Button colorScheme="teal" size="lg">
            Get Started
          </Button>
        </VStack>
      </Box>

      <Box id="about" py={20} textAlign="center">
        <VStack spacing={4}>
          <Text fontSize="3xl" fontWeight="bold">
            About Us
          </Text>
          <Text fontSize="lg" maxW="600px">
            We are a team of passionate adventurers dedicated to bringing you the best outdoor experiences. Join us for unforgettable journeys and adventures.
          </Text>
          <Image src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmV8ZW58MHx8fHwxNzE3NjA0MzE4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Adventure" borderRadius="md" />
        </VStack>
      </Box>

      <Box id="services" bg="gray.100" py={20} textAlign="center">
        <VStack spacing={4}>
          <Text fontSize="3xl" fontWeight="bold">
            Our Services
          </Text>
          <HStack spacing={8} justifyContent="center">
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Text fontSize="2xl" fontWeight="bold">
                Hiking
              </Text>
              <Text>Explore the best hiking trails with our expert guides.</Text>
            </Box>
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Text fontSize="2xl" fontWeight="bold">
                Camping
              </Text>
              <Text>Experience the great outdoors with our camping packages.</Text>
            </Box>
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Text fontSize="2xl" fontWeight="bold">
                Kayaking
              </Text>
              <Text>Enjoy thrilling kayaking adventures on beautiful rivers.</Text>
            </Box>
          </HStack>
        </VStack>
      </Box>

      <Box id="contact" py={20} textAlign="center">
        <VStack spacing={4}>
          <Text fontSize="3xl" fontWeight="bold">
            Contact Us
          </Text>
          <Text fontSize="lg">Have questions? Get in touch with us!</Text>
          <Button colorScheme="teal" size="lg">
            Contact
          </Button>
        </VStack>
      </Box>

      <Box bg="gray.800" color="white" py={4}>
        <HStack justifyContent="space-between" px={8}>
          <Text>&copy; 2023 StrikeWild. All rights reserved.</Text>
          <HStack spacing={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          </HStack>
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;
