import React, { useState, useEffect } from 'react';
import { Box, Heading, Button, Text, Table, Tbody, Tr, Th, Td, Alert, AlertIcon, CircularProgress, Thead } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons';

function ProfilePage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [showInsights, setShowInsights] = useState(false);
  const [showTrainingPlan, setShowTrainingPlan] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (showNotification) {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
        setShowInsights(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  const nutritionInsights = [
    {
      title: "Caffeine Metabolism",
      description: "Based on your results, you have a variant of the CYP1A2 gene, which affects caffeine metabolism. Consider reducing your caffeine intake to support optimal health."
    },
    {
      title: "Inflammation Risk",
      description: "Your genetic profile suggests a predisposition to inflammation due to variations in the TNF-alpha gene. Incorporate anti-inflammatory foods like turmeric, ginger, and fatty fish into your diet."
    },
    {
      title: "Obesity Risk",
      description: "With a variant of the FTO gene associated with obesity risk, focus on portion control and include plenty of fiber-rich foods like fruits, vegetables, and whole grains in your meals."
    },
    {
      title: "Methylation Support",
      description: "The presence of the MTHFR gene variant indicates potential issues with methylation. Increase intake of folate-rich foods such as leafy greens, lentils, and beans to support methylation processes in your body."
    }
  ];

  const trainingPlan = [
    {
      day: "Monday",
      exercise: "30-minute Run",
      beforeExercise: "Banana and peanut butter",
      afterExercise: "Grilled chicken salad with avocado"
    },
    {
      day: "Tuesday",
      exercise: "1-hour Swim",
      beforeExercise: "Oatmeal with berries",
      afterExercise: "Salmon with quinoa and steamed vegetables"
    },
    {
      day: "Wednesday",
      exercise: "2-hour Trail Hike",
      beforeExercise: "Whole grain toast with almond butter",
      afterExercise: "Turkey wrap with vegetables"
    },
    {
      day: "Thursday",
      exercise: "45-minute Cycling",
      beforeExercise: "Greek yogurt with honey",
      afterExercise: "Tofu stir fry with brown rice"
    },
    {
      day: "Friday",
      exercise: "Rest Day",
      beforeExercise: "N/A",
      afterExercise: "N/A"
    },
    {
      day: "Saturday",
      exercise: "45-minute HIIT Workout",
      beforeExercise: "Smoothie with spinach and protein powder",
      afterExercise: "Grilled shrimp with quinoa and roasted vegetables"
    },
    {
      day: "Sunday",
      exercise: "1-hour Yoga",
      beforeExercise: "Chia seed pudding",
      afterExercise: "Egg scramble with vegetables"
    }
  ];

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Selected file:", selectedFile);
      setShowNotification(true);
    } else {
      console.log("Please select a file.");
    }
  };

  const handleTrainingPlan = () => {
    setShowTrainingPlan(true);
    console.log("Training plan button clicked.");
  };

  return (
    <Box bgGradient="linear(to-r, #7928CA, #FF0080)" minHeight="100vh" overflow="hidden" p="4">
      <Box textAlign="left" pt="5%">
        <Heading as="h1" size="2xl" color="white" mb="4">
          Your Nutrigenomic Profile
        </Heading>
        <Text color="white" fontSize="lg" mb="4">
          Nutrigenomic testing examines how your genes interact with the foods you eat and how they may influence your health and nutritional needs. Upload your nutrigenomic report below to get personalized insights and recommendations.
        </Text>
      </Box>
      <Box bg="white" p="4" borderRadius="md" boxShadow="md">
        <Heading as="h2" size="lg" mb="2">
          Upload Document
        </Heading>
        <input type="file" onChange={handleFileChange} accept=".pdf" />
        <Text mt="2" fontSize="sm" color="gray.500">
          Please select a PDF file.
        </Text>
        <Button mt="2" colorScheme="yellow" onClick={handleUpload}>
          Upload
        </Button>
      </Box>
      {showNotification && (
        <Alert status="success" mt="4">
          <AlertIcon />
          Thank you! Your test results were successfully uploaded.
        </Alert>
      )}
      {loading && (
        <Box textAlign="center" mt="4">
          <CircularProgress isIndeterminate color="teal" />
          <Text mt="2" color="white" fontSize="lg">
            Loading...
          </Text>
        </Box>
      )}
      {showInsights && (
        <Box bg="white" p="4" borderRadius="md" boxShadow="md" mt="4">
          <Heading as="h2" size="lg" mb="2" color="teal">
            Your Nutrition Insights
          </Heading>
          {nutritionInsights.map((insight, index) => (
            <Box key={index} mb="4">
              <Text fontSize="md" color="gray.700" fontWeight="bold" mb="2">{insight.title}</Text>
              <Text fontSize="md" color="gray.700">{insight.description}</Text>
            </Box>
          ))}
        </Box>
      )}
      {!loading && showInsights && (
        <Box mt="4">
          {!showTrainingPlan && (
            <Button colorScheme="blue" leftIcon={<FontAwesomeIcon icon={faRunning} />} onClick={handleTrainingPlan}>
              My Training Plan
            </Button>
          )}
          {showTrainingPlan && (
            <Box bg="white" p="4" borderRadius="md" boxShadow="md" mt="4">
              <Heading as="h2" size="lg" mb="2" color="teal">
                Your Training Plan
              </Heading>
              <Table variant="striped" colorScheme="teal">
                <Thead>
                  <Tr>
                    <Th>Day</Th>
                    <Th>Exercise</Th>
                    <Th>Before Exercise</Th>
                    <Th>After Exercise</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {trainingPlan.map((dayPlan, index) => (
                    <Tr key={index}>
                      <Td>{dayPlan.day}</Td>
                      <Td>{dayPlan.exercise}</Td>
                      <Td>{dayPlan.beforeExercise}</Td>
                      <Td>{dayPlan.afterExercise}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}

export default ProfilePage;
