import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, TextInput, Button, Provider as PaperProvider } from 'react-native-paper';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
}

function SignInScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleSignIn = () => {
    if (/^\d{10}$/.test(phoneNumber)) { // Giả sử số điện thoại hợp lệ là 10 chữ số
      navigation.navigate('Home');
    } else {
      alert('Vui lòng nhập số điện thoại hợp lệ.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In Screen</Text>
      <TextInput
        mode="outlined"
        label="Nhập số điện thoại"
        keyboardType="numeric"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSignIn} style={styles.button}>
        Sign In
      </Button>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    paddingVertical: 10,
  },
});

export default App;
