import React, {memo, useMemo, useState} from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import styles from './index.style';
import {InputFieldInterface} from '../../../utils/interfaces';
import {
  responsiveHeightWrtScreen,
  responsiveWidthWrtScreen,
} from '../../../utils/responsiveHelper';
import Colors from '../../../utils/colors';

export function InputField(props: InputFieldInterface) {
  const [parentHeight, setParentHeight] = useState(0);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const handleLayout = (event: any) => {
    const {height} = event.nativeEvent.layout;
    setParentHeight(height);
  };

  return (
    <View
      onLayout={handleLayout}
      style={[
        // styles.inputFieldContainer,
        {marginBottom: responsiveHeightWrtScreen(props.errors ? 0.01 : 1)},
      ]}>
      <TextInput
        outlineColor={Colors.white}
        theme={{
          colors: {
            primary: Colors.white,
          },
          roundness: 12,
        }}
        label={<Text style={styles.textLabel}>{props.label}</Text>}
        value={props.value.toString()}
        mode="outlined"
        // secureTextEntry={secureTextEntry}
        right={
          props.rightIcon === 'eye' && <TextInput.Icon icon={props.rightIcon} />
        }
        outlineStyle={styles.outlineStyle}
        keyboardType={props.isNumField ? 'numeric' : 'default'}
        onChangeText={props.handleChange(props.name)}
        style={[
          styles.inputField,
          {
            width: responsiveWidthWrtScreen(props.width ? props.width : 80),
            height: responsiveHeightWrtScreen(props.height ? props.height : 6),
          },
        ]}
      />
      {props.errors && (
        <Text style={styles.error}> {props.errors as string}</Text>
      )}
    </View>
  );
}
