import { ScrollView, View, StyleSheet} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { PageHeader } from './components/PageHeader';
import { PostCards } from './components/PostCards';

export default function App() {
  return (
    <SafeAreaProvider style={{ flexGrow: 1 }}>
      <SafeAreaView style={{ flexGrow: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <PageHeader />
            <PostCards />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});