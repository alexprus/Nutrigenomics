// ProfilePage.js

import React, { useState } from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

function ProfilePage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    if (selectedFile) {
      // You can implement your file upload functionality here
      console.log("Selected file:", selectedFile);
    } else {
      console.log("Please select a file.");
    }
  };

  return (
    <Box bgGradient="linear(to-r, blue.500, red.500)" minHeight="100vh" overflow="hidden">
      <Box textAlign="left" pt="5%" pl="4">
        <Heading as="h1" size="2xl" color="white">
          Your Nutrigenomic Profile
        </Heading>
      </Box>
      <Box p="4" mt="4" bg="white" borderRadius="md" boxShadow="md">
        <Heading as="h2" size="lg" mb="2">
          Upload Document
        </Heading>
        <input type="file" onChange={handleFileChange} accept=".pdf" />
        <Text mt="2" fontSize="sm" color="gray.500">
          Please select a PDF file.
        </Text>
        <Button mt="2" colorScheme="teal" onClick={handleUpload}>
          Upload
        </Button>
      </Box>
    </Box>
  );
}

export default ProfilePage;
