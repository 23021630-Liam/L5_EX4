import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, SectionList, Image, Button } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import RNPickerSelect from "react-native-picker-select";

const datasource = [
  {
    data: [
      { song: 'Therapy', img: require('./img/therapy.jpg') },
      { song: 'Dear Maria, Count Me In', img: require('./img/dearmaria.jpg') },
      { song: 'For Baltimore', img: require('./img/baltimore.jpg') },
    ],
    icon: "skull",
    title: "All Time Low ",
    bgColor: 'yellow',
    textColor: "black"

  },
  {
    data: [
      { song: 'Disenchanted', img: require('./img/disenchanted.jpg') },
      { song: 'Cancer', img: require('./img/cancer.jpg') },
      { song: 'Im Not Okay (I Promise)', img: require('./img/not ok.jpg') },
    ],
    icon: "heart-broken",
    title: "My Chemical Romance ",
    bgColor: 'darkgrey',
    textColor: "black"
  },
  {
    data: [
      { song: 'Basket Case', img: require('./img/basketcase.jpg') },
      { song: 'Jesus of Suburbia', img: require('./img/suburbia.jpg') },
      { song: '21 Guns', img: require('./img/21.jpg') },
    ],
    icon: "dizzy",
    title: "Green Day ",
    bgColor: 'red',
    textColor: "white"
  }
];

const styles = StyleSheet.create({
  opacityStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 2,
    borderColor: 'grey',
    marginBottom: 5,
    backgroundColor: 'white',
  },
  textStyle: {
    fontSize: 20,
    flex: 1,
    textAlign: 'left',
    justifyContent: "space-evenly",
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  headerText: {
    fontSize: 21,
    marginLeft: 10,
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',

  },
  imageStyle: {
    width: 150,
    height: 209,
    marginLeft: 10,
  }
});

const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.opacityStyle}>
      <Text style={styles.textStyle}>{item.song}</Text>
      {item.img && (
          <Image
              source={item.img}
              style={styles.imageStyle}
              resizeMode="contain"
          />
      )}
    </TouchableOpacity>
);

const App = () => {
    const [q1, setQ1] = useState(''); // Added state for setQ1
    return (
        <View style={{ marginBottom: 50, margin: 10 }}>
            <Text></Text>
            <Text></Text>
            <Button title="Add song"/>
            <StatusBar hidden={true} />
            <Text>Select favourite song</Text>
            <RNPickerSelect
                onValueChange={(value) => setQ1(value)}
                items={[
                    { label: 'Therapy', value: 'Therapy' },
                    { label: 'Dear Maria, Count Me In', value: 'Dear Maria, Count Me In' },
                    { label: 'For Baltimore', value: 'For Baltimore' },
                    { label: 'Disenchanted', value: 'Disenchanted' },
                    { label: 'Cancer', value: 'Cancer' },
                    { label: 'Im Not Okay (I Promise)', value: 'Im Not Okay (I Promise)' },
                    { label: 'Basket Case', value: 'Basket Case' },
                    { label: 'Jesus of Suburbia', value: 'Jesus of Suburbia' },
                    { label: '21 Guns', value: '21 Guns' }
                ]}

            />


            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgColor, icon, textColor } }) => (
                    <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
                        <Icon name={icon} size={20} color={textColor} style={{ marginRight: 5 }} />
                        <Text style={[styles.headerText, { color: textColor }]}>{title}</Text>
                        <Icon name={icon} size={20} color={textColor} style={{ marginLeft: 5 }} />
                    </View>
                )}
            />
        </View>
    )};

export default App;
