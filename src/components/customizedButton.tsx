import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface CustomizedButtonProps {
  onPressFunction: () => void;
  text: string;
  stylesProps: StyleProp<ViewStyle>;
}

export const CustomizedButton = ({
  onPressFunction,
  text,
  stylesProps,
}: CustomizedButtonProps) => {
  return (
    <TouchableOpacity style={[ stylesProps, styles.button ]} onPress={() => onPressFunction()}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#40e6cf',
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
  },
});
