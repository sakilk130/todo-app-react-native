import { Ionicons } from '@expo/vector-icons';
import { useMutation } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Alert, TextInput, TouchableOpacity, View } from 'react-native';

import { createHomeStyles } from '@/assets/styles/home.styles';
import { api } from '@/convex/_generated/api';
import useTheme from '@/hooks/use-theme';

const AddTodo = () => {
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);

  const [newTodo, setNewTodo] = useState('');
  const addTodo = useMutation(api.todos.addTodo);

  const handleAddTodo = async () => {
    try {
      if (newTodo.trim()) {
        await addTodo({ text: newTodo });
        setNewTodo('');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Could not add todo');
    }
  };

  return (
    <View style={homeStyles.inputSection}>
      <View style={homeStyles.inputWrapper}>
        <TextInput
          style={homeStyles.input}
          placeholder="What needs to be done?"
          value={newTodo}
          onChangeText={setNewTodo}
          multiline
          placeholderTextColor={colors.textMuted}
          onSubmitEditing={handleAddTodo}
        />
        <TouchableOpacity
          onPress={handleAddTodo}
          activeOpacity={0.8}
          disabled={!newTodo.trim()}
        >
          <LinearGradient
            colors={
              newTodo.trim() ? colors.gradients.primary : colors.gradients.muted
            }
            style={[
              homeStyles.addButton,
              !newTodo.trim() && homeStyles.addButtonDisabled,
            ]}
          >
            <Ionicons name="add" size={24} color="#ffffff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { AddTodo };
