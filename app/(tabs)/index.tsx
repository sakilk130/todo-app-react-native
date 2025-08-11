import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, StatusBar, Text } from 'react-native';

import { createHomeStyles } from '@/assets/styles/home.styles';
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
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </SafeAreaView>
    </LinearGradient>
  );
}
