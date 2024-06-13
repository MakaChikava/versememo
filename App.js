import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native';

export default function App() {
  
  return (
    // View = div & safeAreaView = div & keeps content within viewing rang IOS
    <SafeAreaView style={styles.container}> 
    {/* numberOfLines = how many lines for the text. onPress = like onClick in react */}
      <Text>hello Maka!</Text>
      {/* image gets images. need source.| require = for local static images | syntax for images on the web source={{height:200, width:300, uri: url_link_from_web}}*/}
      {/* props for this are: blurRadius, loadingIndicatorSource */}
      <Image source={require('./assets/tick-badge.png')} style={styles.icon}/>
      {/* TouchableWithoutFeedback tag, TouchableOpacity, TouchableHighlight */}
      {/* Alert.alert or Alert.prompt */}
      <Button
        color="blue"
        title='click me'/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    
  },
  icon:{
    height:50,
    width:50
  }
});
