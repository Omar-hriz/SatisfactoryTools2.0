import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
import { Dimensions } from 'react-native';

const screenDimensions = Dimensions.get('screen');

export default class RecepieTable extends Component {
  constructor(props) {
    super(props);
    const elementFood = (uri, name) => (
      <View style={styles.elementcontainer}>
        <Image
          source={{ uri: uri }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.imageText}>{name}</Text>
      </View>
    );
    
    const tableData = [];
    for (let i = 0; i < props.content.length; i += 1) {
      const rowData = [];
      for (let j = 0; j < 3; j += 1) {
        if (j == 0) {
          rowData.push(elementFood(props.content[i].uri, props.content[i].name));
        }
        if(j==1) {
          rowData.push(props.content[i].max);
        }else{
          rowData.push(props.content[i].seconds);
        }
      }
      tableData.push(rowData);
    }
    this.state = {
      tableHead: ['Food', 'Max', 'Time'],
    }
  }

  render() {
    const state = this.state;
    const tableData = [];

    const elementFood = (uri, name) => (
      <View style={styles.elementcontainer}>
        <Image
          source={{ uri: uri }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.imageText}>{name}</Text>
      </View>
    );

    for (let i = 0; i < this.props.content.length; i += 1) {
      const rowData = [];
      for (let j = 0; j < 3; j += 1) {
        if (j == 0) {
          rowData.push(elementFood(this.props.content[i].uri, this.props.content[i].name));
        }
        else if(j==1) {
          rowData.push(this.props.content[i].max);
        }else{
          rowData.push(this.props.content[i].seconds);
        }
      }
      tableData.push(rowData);
    }

    return (
      <View style={styles.container}>
        <View>
          <Table borderStyle={{ borderWidth: 1, borderColor: '#E57A44' }}>
            <Row data={state.tableHead} flexArr={[2, 1, 1]} style={styles.header} textStyle={styles.topText} />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#E3D985' }}>
              {
                tableData.map((rowData, index) => (
                  <Row
                    flexArr={[2, 1, 1]}
                    key={index}
                    data={rowData}
                    style={[styles.row]}
                    textStyle={styles.text}
                  />
                ))
              }
            </Table>
          </ScrollView>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#E3D985'
  },
  elementcontainer: {
    flexDirection: "row",
  },
  header: {
    height: screenDimensions.height * 0.065,
    width: screenDimensions.width * 0.9,
    backgroundColor: '#E57A44'
  },
  text: {
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: screenDimensions.width * 0.06,
    color: '#7EB488',
  },
  imageText: {
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: screenDimensions.width * 0.055,
    color: '#7EB488',
  },
  image: {
    height: screenDimensions.height * 0.04,
    width: screenDimensions.width * 0.08,
  },
  topText: {
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: screenDimensions.width * 0.09,
    color: '#7EB488',
  },
  dataWrapper: {
    marginTop: -1
  },
  row: {
    height: screenDimensions.height * 0.065,
    backgroundColor: '#E3D985'
  }
});