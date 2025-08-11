import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, StatusBar } from 'react-native';

import { createHomeStyles } from '@/assets/styles/home.styles';
import { AddTodo, Header } from '@/components';
import useTheme from '@/hooks/use-theme';

export default function Index() {
  const { colors } = useTheme();
  const styles = createHomeStyles(colors);
  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={styles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={styles.safeArea}>
        <Header />
        <AddTodo />
      </SafeAreaView>
    </LinearGradient>
  );
}
