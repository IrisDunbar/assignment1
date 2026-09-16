import { ScrollView, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { PageHeader } from './components/PageHeader';

export default function App() {
  return (
    <SafeAreaProvider style={{ flexGrow: 1 }}>
      <SafeAreaView style={{ flexGrow: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View>
            <PageHeader />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};





