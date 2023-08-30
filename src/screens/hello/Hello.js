import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/button/Button';

import ratios from '../../styles/ratios';
let {
  widthPixel,
  heightPixel,
  fontPixel
} = ratios;



const Hello = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        // resizeMode='contain'
        imageStyle={{ borderRadius: 40 }}
        style={styles.bgImage}
        source={require("../../assets/images/helloFull.png")}
      >



        <View style={styles.loginContainer}>
          <Text style={styles.hello}>Hello!</Text>
          <Text style={styles.hello}>I’m Becove</Text>
          <Text style={styles.para}>Track your time in the </Text>
          <Text style={styles.para}>coolest possible way</Text>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', top: "63%" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Onboarding")}>
            <Button title="Continue" fontSize={fontPixel(25)} />
          </TouchableOpacity>
        </View>







        {/* <View style={{ top:"5%", backgroundColor: "green", justifyContent: 'center', alignItems: 'center', }}>

          <Text style={styles.hello}>Hello!</Text>
          <Text style={styles.hello}>I’m Becove</Text>
          <Text style={styles.para}>Track your time in the coolest possible way</Text>
        </View>

        <TouchableOpacity onPress={()=>navigation.navigate("Onboarding")} style={{ top:"22%", backgroundColor: "yellow",  alignItems:'center' }}>
        <Button title="Continue"/>
        </TouchableOpacity> */}


        {/* <View style={{ backgroundColor: "red", position: 'absolute', marginTop: 300, justifyContent: 'center', alignSelf: 'center' }}>
        <Text style={styles.hello}>Hello!</Text>
        <Text style={styles.hello}>I’m Becove</Text>
        <Text style={styles.para}>Track your time in the coolest possible way</Text>
        <View style={{marginTop:94}}>
        <Button title="Continue"/>
        </View>
      </View> */}

      </ImageBackground>

    </View>
  )
}

export default Hello;

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
    alignItems:'center',
    top: "40%",
  },
  loginText: {
    textAlign: 'center'
  },
  hello: {
    color: "#FFFFFF",
    fontFamily: "AlegreyaSans-Bold",
    fontSize: fontPixel(40),
  },
  para: {
    color: "rgba(255, 255, 255, 0.50)",
    fontFamily: "AlegreyaSans-Regular",
    fontSize: fontPixel(22),
    textAlign: 'center',
  },
})