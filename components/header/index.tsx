import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';

import { createHomeStyles } from '@/assets/styles/home.styles';
import { Id } from '@/convex/_generated/dataModel';
import useTheme from '@/hooks/use-theme';

interface HeaderProps {
  todos: {
    _id: Id<'todos'>;
    _creationTime: number;
    text: string;
    isCompleted: boolean;
  }[];
}

const Header = ({ todos }: HeaderProps) => {
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);

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
