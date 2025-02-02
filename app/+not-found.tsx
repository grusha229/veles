import { Link, Stack } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Text >Такого экрана не существует</Text>
        <Link href="/" style={styles.link}>
          <Text >Назад на главную</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
