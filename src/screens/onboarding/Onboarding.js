import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/button/Button';

import ratios from '../../styles/ratios';
let {
  widthPixel,
  heightPixel,
  fontPixel
} = ratios;



const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{ borderRadius: 40 }}
        // resizeMode='contain'
        style={styles.bgImage}
        source={require("../../assets/images/onboarding.png")}
      >

        {/* <View style={{ justifyContent: 'center', alignItems: 'center', top: "30%" }}>

          <Text style={styles.hello}>Welcome to Becove!</Text>

          <Text style={styles.para}>continue without creating an account</Text>
        </View> */}


        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>
            <Text style={styles.hello}>Welcome to</Text>{' '}
            <Text style={styles.becova}>Becove!</Text>
          </Text>
          <Text style={styles.para}>continue without creating an account</Text>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', top: "63%" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Button title="Sign in with Apple"  fontSize={fontPixel(18)}/>
          </TouchableOpacity>

          <View style={{ marginTop: 21 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Button title="Sign in with Google" fontSize={fontPixel(18)}  />
            </TouchableOpacity>


          </View>
        </View>









      </ImageBackground>

    </View>
  )
}

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    borderRadius: 40,
    width: "100%",
    height: "100%",
  },
  loginContainer: {
    // flex: 0.2,
    justifyContent: 'center',
    top: "30%" ,
  },
  loginText: {
  textAlign:'center'
  },
  hello: {
    color: "#E5E5E5",
    fontFamily: "AlegreyaSans-Regular",
    fontSize: fontPixel(30),
  },
  becova:{
    color: "#FFFFFF",
    fontFamily: "AlegreyaSans-Bold",
    fontSize: fontPixel(30),
  },
  para: {
    color: "rgba(255, 255, 255, 0.50)",
    fontFamily: "AlegreyaSans-Regular",
    fontSize: fontPixel(16),
    textAlign:'center',
  },


 
 

})