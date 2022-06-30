import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

function Button({title, disabled, style, onPress}: any) {
  return (
    <>
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.5}
        style={[
          styles.buttonContainer,
          style,
          {
            opacity: disabled ? 0.5 : 1,
          },
        ]}
        onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 14 : 12,
    backgroundColor: '#7F18D0',
    borderRadius: 6,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});

Button.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.any,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  title: 'Submit',
  disabled: false,
  onPress: () => {},
};

export default Button;
