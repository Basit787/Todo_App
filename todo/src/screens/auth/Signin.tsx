import {zodResolver} from '@hookform/resolvers/zod';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Divider, Text} from 'react-native-paper';
import TextField from '../../components/TextField';
import {SigninFormData, signInSchema} from '../../zod/SigninValidation';

const Signin = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SigninFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SigninFormData) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>Signin</Text>
        <View style={styles.form}>
          {/* Email Field */}
          <Controller
            name="email"
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextField
                label="Email"
                placeholder="Enter your email"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors.email?.message || null}
              />
            )}
          />

          {/* Password Field */}
          <Controller
            name="password"
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextField
                label="Password"
                placeholder="Enter your password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secure
                error={errors.password?.message || null}
              />
            )}
          />

          {/* Submit Button */}
          <Button
            mode="contained"
            onPress={handleSubmit(onSubmit)}
            style={styles.button}>
            Signin
          </Button>

          <Divider />

          {/* Signup Link */}
          <Text style={styles.signinText}>
            New user!{' '}
            <Text style={styles.signinLink} onPress={() => {}}>
              Signup
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
  title: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 30,
    marginBottom: 20,
  },
  card: {
    padding: 20,
    borderRadius: 8,
    elevation: 4,
  },
  form: {
    gap: 16,
  },
  button: {
    marginTop: 16,
  },
  signup: {
    marginTop: 8,
    alignSelf: 'center',
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

export default Signin;
