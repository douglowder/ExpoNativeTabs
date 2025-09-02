import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { reactNativeInfo } from '@/constants/ReactNativeInfo';
import { scale } from 'react-native-size-matters';
import { ExternalLink } from '@/components/ExternalLink';

export default function Modal() {
  const styles = useModalStyles();
  const { expoVersion, rnVersion, routerVersion } = reactNativeInfo;
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#A1CEDC' }}
      headerImage={
        <Ionicons
          size={scale(120)}
          name="logo-react"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.container}>
        <ThemedText style={{ marginBottom: scale(10) }} type="title">
          About this demo
        </ThemedText>
        <ThemedText>{`expo: ${expoVersion}`}</ThemedText>
        <ThemedText>{`expo-router: ${routerVersion}`}</ThemedText>
        <ThemedText>{`react-native-tvos: ${rnVersion}`}</ThemedText>
        <ExternalLink href="https://github.com/react-native-tvos/SkiaMultiplatform">
          <ThemedView style={{ flexDirection: 'row', alignItems: 'center' }}>
            <ThemedText style={{ marginRight: scale(10) }}>
              Repository:
            </ThemedText>
            <ThemedText type="link">
              https://github.com/react-native-tvos/SkiaMultiplatform
            </ThemedText>
          </ThemedView>
        </ExternalLink>
      </ThemedView>
      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
      <Link href="../" asChild>
        <Pressable>
          {({ focused }) => (
            <ThemedText
              type="defaultSemiBold"
              style={{ opacity: focused ? 0.6 : 1.0 }}
            >
              Dismiss
            </ThemedText>
          )}
        </Pressable>
      </Link>
    </ParallaxScrollView>
  );
}

const useModalStyles = () => {
  return {
    container: {
      flex: 1,
      gap: scale(8),
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
    },
    stepContainer: {
      gap: scale(8),
      marginBottom: scale(8),
    },
    headerImage: {
      color: '#1D3D47',
    },
  };
};
