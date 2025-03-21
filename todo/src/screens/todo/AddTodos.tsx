import {zodResolver} from '@hookform/resolvers/zod';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Button, HelperText, RadioButton} from 'react-native-paper';
import TextField from '../../components/TextField';
import {TodoFormValues, todoSchema} from '../../zod/AddTodoForm';
import styles from './AddTodoStyles';

const AddTodoForm = ({navigation}: {navigation: any}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<TodoFormValues>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: '',
      description: '',
      priority: 'L',
      deadline: '',
    },
  });

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const onSubmit = async (data: TodoFormValues) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.heading}>Fill up the form to add Todos</Text>

        {/* Task Title */}
        <Controller
          name="title"
          control={control}
          render={({field: {onChange, value, onBlur}}) => (
            <TextField
              label="Title"
              placeholder="Enter your title"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.title?.message || null}
            />
          )}
        />

        {/* Task Description */}
        <Controller
          name="description"
          control={control}
          render={({field: {onChange, value, onBlur}}) => (
            <TextField
              label="Description"
              placeholder="Enter your description"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.description?.message || null}
            />
          )}
        />

        {/* Priority */}
        <Text style={styles.label}>Priority</Text>
        <Controller
          name="priority"
          control={control}
          render={({field: {onChange, value}}) => (
            <RadioButton.Group onValueChange={onChange} value={value}>
              <View style={styles.radioGroup}>
                <View style={styles.radioItem}>
                  <RadioButton value="H" />
                  <Text>High</Text>
                </View>
                <View style={styles.radioItem}>
                  <RadioButton value="M" />
                  <Text>Medium</Text>
                </View>
                <View style={styles.radioItem}>
                  <RadioButton value="L" />
                  <Text>Low</Text>
                </View>
              </View>
            </RadioButton.Group>
          )}
        />

        {/* Deadline Date Picker */}
        <Text style={styles.label}>Deadline</Text>
        <Controller
          name="deadline"
          control={control}
          render={({field: {onChange}}) => (
            <>
              <TextField
                label="Select Deadline"
                value={date.toLocaleDateString()}
                mode="outlined"
                onFocus={() => setOpen(true)}
              />
              {open && (
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  onConfirm={(dates: Date) => {
                    setOpen(false);
                    setDate(dates);
                    onChange(dates.toISOString());
                  }}
                  onCancel={() => setOpen(false)}
                />
              )}
              {errors.deadline && (
                <HelperText type="error">{errors.deadline.message}</HelperText>
              )}
            </>
          )}
        />
      </View>

      {/* Submit Button */}
      <Button
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        style={styles.button}>
        Add Task
      </Button>
    </View>
  );
};

export default AddTodoForm;
