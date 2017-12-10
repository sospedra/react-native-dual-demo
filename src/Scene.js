import React from 'react'
import { Button, View, Text } from 'react-native'

export default (props) => (
  <View stlye={{ flex: 1, backgroundColor: 'red' }}>
    <View style={styles.header}>
      <View style={{ marginLeft: -8}}>
        <Button title='Back' onPress={props.goBack} />
      </View>
      <Text style={{ fontSize: 18 }}>demo of {props.name}</Text>
    </View>
    {props.children}
  </View>
)

const styles = {
  header: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#7f8c8d',
    marginBottom: 16,
    justifyContent: 'space-between'
  }
}
