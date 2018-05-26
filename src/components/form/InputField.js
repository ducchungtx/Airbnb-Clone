import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

class InputField extends Component {
    render() {
        const {labelText, labelTextSize, labelColor, textColor, borderBottomColor, inputType, customStyle} = this.props;
        const fontSize = labelTextSize || 14;
        const color = labelColor || colors.white;
        const inputColor = textColor || colors.white;
        const borderBottom = borderBottomColor || 'transparent';

        return (
            <View style={styles.wrapper}>
                <Text style={[{fontSize, color}, styles.label]}>{labelText}</Text>
                <TextInput
                    autoCorrect={false}
                    style={[{color: inputColor, borderBottomColor: borderBottom}, styles.inputField]}
                    secureTextEntry={inputType === 'password'}
                />
            </View>
        );
    }
}

InputField.propTypes = {
    labelText: PropTypes.string.isRequired,
    labelTextSize: PropTypes.number,
    textColor: PropTypes.string,
    borderBottomColor: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    customStyle: PropTypes.object
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex'
    },
    label: {
        fontWeight: '700',
        marginBottom: 10
    },
    inputField: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5
    }
});

export default InputField;