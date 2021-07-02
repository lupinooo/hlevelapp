import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Category extends Component {
    render() {
        return (
            <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd',borderRadius: 10,
            backgroundColor: '#FFFFFF',
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2, }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: 80, height: 80, resizeMode: 'cover' ,alignSelf:'center'}}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft:10 ,fontFamily:"Gill Sans",alignItems:'center' }}>
                    <Text style={{fontFamily:"Gill Sans"}}>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,fontFamily:"Gill Sans",
        alignItems: 'center',
        justifyContent: 'center'
    }
});