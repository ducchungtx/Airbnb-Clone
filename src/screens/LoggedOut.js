import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import colors from '../styles/colors';
import RoundedButton from '../components/buttons/RoundedButton';
class LoggedOut extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.welcomeWrapper}>
                    <Image
                        source={require('../img/airbnb-logo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.welcomeText}>Welcome to Airbnb</Text>
                    <RoundedButton
                        text="Countinue with Facebook"
                        textColor={colors.green01}
                        background={colors.white}
                        icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon}/>}
                    />
                </View>               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.green01
    },
    welcomeWrapper: {
        flex: 1,
        display: 'flex',
        marginTop: 30,
        padding: 20
    },
    welcomeText: {
        fontSize: 30,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 50,
        marginBottom: 40
    },
    facebookButtonIcon: {

    }
})

export default LoggedOut;