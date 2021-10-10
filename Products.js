import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    FlatList
} from "react-native";

class Products extends Component {
    renderProducts = (products) => {
        console.log('tata',products)
        return products.map((item, index) => {
            return (
                <View key={index} style={{ padding: 20 }}>
                    <Button onPress={() => this.props.onPress(item)} title={item.name + " - " + item.price} />
                    <Image source={{uri: item.imagem}} style={{width: 200,height:100}}/>
                </View>
            )
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderProducts(this.props.products)}
            </View>
        );
    }
}
export default Products;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});



/*
import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import axios from 'axios';

import { Card } from 'react-native-paper';

export default function App() {
  const [armas, SetArmas] = useState();
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMyIsImlhdCI6MTYzMzIxNjc5NywiZXhwIjoxNjM1ODA4Nzk3fQ.mQYlIxAkKLaAJ_KsYpHjnEar8TNRLGONG7qGesYWy_E';
  const api = axios.create({
    baseURL: 'http://192.0.0.1:3000/produtos',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });

  async function load() {
    try {
      const response = await api.get('/?categoriaID=11');
      SetArmas(response.data);
      console.log(SetArmas);
    } catch (error) {
      console.log(error);
      const { data } = error.response;
    }
  }

  return (
    <View style={styles.container}>
      <Button onPress={() => load()} title="Refetch" />
      <Text style={styles.paragraph}>{armas}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    marginTop: 8,
    fontFamily: 'Monospace',
  },
});
*/