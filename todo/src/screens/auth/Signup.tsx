import {zodResolver} from '@hookform/resolvers/zod';
import React, {useContext} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Card, Divider} from 'react-native-paper';
import TextField from '../../components/TextField';
import {SignupFormData, signupSchema} from '../../zod/SignupValidation';
import ApiInstance from '../../apis/request';
import {storeToken} from '../../utils/tokenHandler';
import {SnackbarContext} from '../../components/Snackbar';

const Signup = ({navigation}: {navigation: any}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const {showSnackbar} = useContext(SnackbarContext);
  const onSubmit = async (data: SignupFormData) => {
    try {
      const result = await ApiInstance.post('/user/createUser', data);
      await storeToken(result.data.token);
      navigation.navigate('Home');
      showSnackbar(`Welcome ${data.name}`);
    } catch (error: any) {
      if (error.response) {
        console.log('Error data:', error.response.data);
        showSnackbar('User already exists');
        console.log('Error status:', error.response.status);
      } else if (error.request) {
        console.log('Request error:', error.request);
      } else {
        console.log('Error message:', error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>Signup</Text>
        <View style={styles.form}>
          {/* Name Input */}
          <Controller
            name="name"
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextField
                label="Name"
                placeholder="Enter your Name"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors.name?.message || null}
              />
            )}
          />

          {/* Email Input */}
          <Controller
            name="email"
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextField
                label="Email"
                placeholder="Enter your Email"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors.email?.message || null}
              />
            )}
          />

          {/* Password Input */}
          <Controller
            name="password"
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextField
                label="Password"
                placeholder="Enter your Password"
                secure
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors.password?.message || null}
              />
            )}
          />

          {/* Confirm Password Input */}
          <Controller
            name="confirmPassword"
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextField
                label="Confirm Password"
                placeholder="Re-enter your Password"
                secure
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors.confirmPassword?.message || null}
              />
            )}
          />

          {/* Signup Button */}
          <Button
            mode="contained"
            onPress={handleSubmit(onSubmit)}
            style={styles.button}>
            Signup
          </Button>

          <Divider style={styles.divider} />

          {/* Signin Link */}
          <Text style={styles.signinText}>
            Already have an account?{' '}
            <Text
              style={styles.signinLink}
              onPress={() => navigation.navigate('Signin')}>
              Signin
            </Text>
          </Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    padding: 20,
    borderRadius: 8,
    elevation: 4,
  },
  title: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 30,
    marginBottom: 20,
  },
  form: {
    gap: 16,
  },
  button: {
    marginTop: 16,
  },
  divider: {
    marginVertical: 16,
  },
  signinText: {
    textAlign: 'center',
    fontSize: 16,
  },
  signinLink: {
    color: '#6851a4',
    fontWeight: 'bold',
  },
});

export default Signup;
