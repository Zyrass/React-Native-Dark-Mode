import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';

export default function App() {

  // State
  const [theme, setTheme] = useState(true)
  
  // functions
  const switchClickedHandler = () => setTheme( currentTheme => !currentTheme )

  return (
    <View
      style = {{ 
        ...styles.container,
        backgroundColor: theme
          ? "#f9f900"
          : "#1f1f1f",
      }}
    >
      <Image 
        source = { 
          theme 
            ? require("./assets/images/sun.png") 
            : require("./assets/images/moon.png")
        }
        style = {{
          width: 350,
          height: 350,
          marginBottom: 30
        }}
      />
      <Button 
        title={ 
          theme
            ? "Bonjour - React Native"
            : "Bonne nuit - React Native"
        }
        onPress={switchClickedHandler}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
