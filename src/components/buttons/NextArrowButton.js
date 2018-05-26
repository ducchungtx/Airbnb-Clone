import React, { Component } from 'react';
import {
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';

class NextArrowButton extends Component {
    render() {
        return (
            <TouchableHighlight>
                <Icon
                    name="angle-right"
                    color={colors.green01}
                    size={32}
                    style={styles.icon}
                />
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        marginRight: -2,
        marginTop: -2
    }
})

export default NextArrowButton;