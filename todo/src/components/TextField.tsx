import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';

interface TextFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  mode?: 'outlined' | 'flat';
  secure?: boolean;
  error?: string | null;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  onFocus,
  onBlur,
  mode = 'outlined',
  secure = false,
  error = null,
}) => {
  const [isPassword, setIsPassword] = useState<boolean>(secure);
  const handleSecure = () => {
    setIsPassword(!isPassword);
  };
  return (
    <View>
      <TextInput
        label={label}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        secureTextEntry={isPassword}
        mode={mode}
        style={styles.margin}
        error={!!error}
        right={
          secure && (
            <TextInput.Icon
              icon={isPassword ? 'eye' : 'eye-off'}
              onPress={handleSecure}
            />
          )
        }
      />
      {error && (
        <HelperText type="error" visible={!!error}>
          {error}
        </HelperText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  margin: {marginBottom: 8},
});

export default TextField;
