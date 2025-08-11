import { createHomeStyles } from '@/assets/styles/home.styles';
import { api } from '@/convex/_generated/api';
import useTheme from '@/hooks/use-theme';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos);
  const completedTodos = todos?.filter((todo) => todo.isCompleted).length || 0;
  const totalTodos = todos?.length || 0;
  const completionRate = totalTodos ? (completedTodos / totalTodos) * 100 : 0;

  return (
    <View style={homeStyles.header}>
      <View style={homeStyles.titleContainer}>
        <LinearGradient
          colors={colors.gradients.primary}
          style={homeStyles.iconContainer}
        >
          <Ionicons name="flash-outline" size={28} color={'#fff'} />
        </LinearGradient>
        <View style={homeStyles.titleTextContainer}>
          <Text style={homeStyles.title}>Today&apos;s Tasks 👀</Text>
          <Text style={homeStyles.subtitle}>
            {completedTodos} of {totalTodos} completed
          </Text>
        </View>
      </View>
      <View style={homeStyles.progressContainer}>
        <View style={homeStyles.progressBarContainer}>
          <View style={homeStyles.progressBar}>
            <LinearGradient
              colors={colors.gradients.success}
              style={[homeStyles.progressFill, { width: `${completionRate}%` }]}
            />
          </View>
          <Text style={homeStyles.progressText}>
            {Math.round(completionRate)}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export { Header };
