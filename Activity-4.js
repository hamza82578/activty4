import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View, Button } from 'react-native';
import Header from './Header';
import Footer from './Footer';

const vehicleModels = ['Toyota Avalon', 'Toyota Camry', 'Toyota Corolla', 'Toyota Passo', 'Toyota Hiace', 'Toyota Prius', 'Toyota Yaris', 'Toyota Fortuner', 'Toyota Hilux', 'Honda City', 'Honda Civic', 'Honda Grace', 'Honda Fit', 'Honda Accord', 'Honda Vezel', 'Suzuki Mehran', 'Suzuki Khyber', 'Suzuki Swift', 'Suzuki Alto', 'Suzuki Bolan', 'Suzuki Liana', 'Suzuki Cultus', 'Suzuki Wagon-R', 'Daihatsu Cuore', 'Daihatsu Mira', 'Daihatsu Hijet', 'Daihatsu Move'];

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'gold',
  },
  header: {
    padding: 20,
    fontSize: 30,
    textAlign: 'center',
  },
  subheader: {
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  scrollView: {
    padding: 20,
    backgroundColor: 'beige',
  },
  vehicleText: {
    fontSize: 22,
  },
  feedbackInput: {
    height: 100,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 20,
  },
  submitButton: {
    margin: 20,
  },
  footerContainer: {
    flex: 0.075,
  },
  footerText: {
    textAlign: 'auto',
  },
  footerItalicText: {
    fontStyle: 'italic',
  },
};

export default function App() {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (text) => {
    setFeedback(text);
  };

  const handleFeedbackSubmit = () => {
    // Handle feedback submission logic here
    console.log('Submitting feedback:', feedback);
  };

  return (
    <View style={styles.container}>
      <Header headerStyle={styles.header} subheaderStyle={styles.subheader} />

      <ScrollView
        indicatorStyle={'white'}
        horizontal={false}
        style={styles.scrollView}
      >
        {vehicleModels.map((item, index) => (
          <Text key={index} style={styles.vehicleText}>{index + 1} - {item}</Text>
        ))}

        <TextInput
          style={styles.feedbackInput}
          multiline
          placeholder="Enter your feedback..."
          value={feedback}
          onChangeText={handleFeedbackChange}
        />

        <Button
          title="Submit"
          onPress={handleFeedbackSubmit}
          style={styles.submitButton}
        />
      </ScrollView>

      <Footer
        containerStyle={styles.footerContainer}
        textStyle={styles.footerText}
        italicTextStyle={styles.footerItalicText}
      />
    </View>
  );
}
