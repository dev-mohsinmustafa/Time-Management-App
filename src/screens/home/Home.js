import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ratios from '../../styles/ratios';
import DrawerNavigator from '../../navigation/DrawerNavigator';
let {
  widthPixel,
  heightPixel,
  fontPixel
} = ratios;



const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <DrawerNavigator />

      <ScrollView style={{ flex: 1 }}>


        <Image
          // resizeMode='contain'
          // imageStyle={{ borderTopLeftRadius: 40, borderTopRightRadius: 40, }}
          style={styles.bgImage}
          source={require("../../assets/images/1.png")}
        />

        <View style={styles.img}>
          <Image source={require("../../assets/images/becovaImg.png")} />
        </View>


        <View style={styles.loginContainer}>
          <Text style={styles.becova}>B E C O V E</Text>
        </View>

        <View style={styles.paragraphContainer}>

          <Text style={styles.text}>Change Ambiance</Text>
          <Text style={styles.para}>enjoy the energy of Light mode & the elegance of Dark mode</Text>
        </View>



        <View style={styles.alertContainer}>

          <Text style={styles.text}>Alert Settings</Text>
          <Text style={styles.para}>change how frequently you would like to get alerts about your timer</Text>
        </View>





        {/* <View style={{width:"90%",position:'absolute',marginTop: heightPixel(238), alignSelf:'center',}}>
  <Image source={require("../../assets/images/box.png")}/>
</View> */}


        {/* <View style={styles.boxContainer}>
</View> */}


        <View style={styles.cardImageContainer}>
          <Image
            style={{ width: "100%", borderRadius:20 }}
            source={require("../../assets/images/card1.png")} />


          <View style={styles.cardImageContainer2}>
            <View style={{ marginTop: widthPixel(13), backgroundColor: 'red' }}>
              <Text style={styles.text1}>Join our grup!</Text>
            </View>
            <View style={{ marginTop: widthPixel(8), backgroundColor: "pink" }}>
              <Text style={styles.text2}>Let’s open up to the thing that</Text>
              <Text style={styles.text2}>matters amoung the people</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: widthPixel(19), alignItems: 'center' }}>
              <TouchableOpacity>
                <Text style={styles.text3}>Join Now</Text>
              </TouchableOpacity>
              <Image
                style={{ alignSelf: 'center', }}
                source={require("../../assets/images/music.png")} />
            </View>
          </View>

        </View>






        <View style={styles.cardImageContainer}>
          <Image
            style={{ width: "100%", borderRadius:20 }}
            source={require("../../assets/images/card2.png")} />


          <View style={styles.cardImageContainer2}>
            <View style={{ marginTop: widthPixel(13), backgroundColor: 'red' }}>
              <Text style={styles.text1}>Chat with us!</Text>
            </View>
            <View style={{ marginTop: widthPixel(8), backgroundColor: "pink" }}>
              <Text style={styles.text2}>Time management is the most</Text>
              <Text style={styles.text2}>important thing that matters to you.</Text>
              <Text style={styles.text2}>Feel free to ask us for tips &</Text>
            </View>
            {/* <View style={{ flexDirection: 'row', marginTop: widthPixel(19), alignItems: 'center' }}>
              <TouchableOpacity>
                <Text style={styles.text3}>Join Now</Text>
              </TouchableOpacity>
              <Image
                style={{ alignSelf: 'center', }}
                source={require("../../assets/images/music.png")} />
            </View> */}
          </View>

        </View>






        <View style={{ alignItems: 'center', width:"100%" }}>
          <Image source={require("../../assets/images/card2.png")} />
        </View>










      </ScrollView>

    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    // borderRadius: 40,
    width: "100%",
    // height: "50%",
    height: widthPixel(406)

  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    // top: "5%",
    marginTop: widthPixel(55),
    position: 'absolute',
    alignSelf: 'center'
  },
  loginContainer: {
    // flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    // top: "15%",
    marginTop: widthPixel(130)
  },
  loginText: {
    textAlign: 'center'
  },
  becova: {
    color: "#371B34",
    fontFamily: "AlegreyaSans-Bold",
    fontSize: fontPixel(30),
  },
  text: {
    color: "#371B34",
    fontFamily: "AlegreyaSans-Regular",
    fontSize: fontPixel(22),
  },
  para: {
    // color: "rgba(255, 255, 255, 0.50)",
    color: "rgba(0, 0, 0, 0.50)",
    fontFamily: "AlegreyaSans-Regular",
    fontSize: fontPixel(13),
  },
  paragraphContainer: {
    marginTop: widthPixel(188),
    // top: "25%",
    position: 'absolute',
    alignSelf: 'center'
  },
  boxContainer: {
    // width:"90%",
    height: 51,
    backgroundColor: "#14213D",
    marginHorizontal: 27,
    // position:'absolute',
    // top:"50%",
    // marginTop:widthPixel(238),
    // zIndex:-10
  },
  alertContainer: {
    marginTop: widthPixel(306),
    // top: "25%",
    position: 'absolute',
    alignSelf: 'center'
  },
  cardImageContainer: {
    // backgroundColor: "gray",
    marginHorizontal: 25,
    marginTop: heightPixel(14)
  },
  cardImageContainer2: {
    flexDirection: 'column',
    position: 'absolute',
    marginLeft: 25,
  },
  text1: {
    color: "#FFFFFF",
    fontFamily: "AlegreyaSans-Medium",
    fontSize: fontPixel(25),
  },
  text2: {
    color: "#371B34",
    fontFamily: "AlegreyaSans-Light",
    fontSize: fontPixel(15),
  },
  text3: {
    color: "#371B34",
    fontFamily: "AlegreyaSans-Bold",
    fontSize: fontPixel(20),
    paddingRight: 10
  },
})