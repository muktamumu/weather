import React, { useState  } from 'react'
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 

export default function SearchBar({ fetchWeatherData }) {

    const [cityName, setCityName] = useState('');

    return (
        <View style={styles.searchBar}>
            <TextInput 
                placeholder='                                                        Enter City name'
                value={cityName}
                onChangeText={(text) => setCityName(text)}
            />
            <EvilIcons name="search" size={30} color="black"  onPress={() => fetchWeatherData(cityName)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
       
        marginTop: 20,
        borderWidth: 10,
        marginLeft:40,
        marginRight:50,
        width: Dimensions.get('screen'),
        flexDirection: 'row',
        borderRadius: 25,
        alignItems: 'center',
        paddingHorizontal: 100,
   
    
        backgroundColor: 'lightgray',
        borderColor: 'lightgray'
    }
})