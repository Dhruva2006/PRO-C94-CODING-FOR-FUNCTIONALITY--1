import React, { Component } from "react";
import {View, StyleSheet, Text, FlatList, TouchableOpacity, Image,} from "react-native";

export default class Dictionary extends Component {
    constructor(){
        super();
        this.state = {
            word: ""
        };

    }

    Display = () => {
        return(
            <View style={{ flex: 0.95 }}>
            <Text style={styles.label}>Word</Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Word"}
              maxLength={30}
              onChangeText={text => {
                this.setState({
                  Word: text
                });
              }}
              />
              </View>
            
        )
    };
}

async function Word() {
  var response = await("https://www.dictionaryapi.com/api/v3/references/sd4/json/baseball?key=your-api-key");

}




