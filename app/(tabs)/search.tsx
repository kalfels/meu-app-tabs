import { globalStyles } from '@/app/styles';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function SearchScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Search</Text>
      <View style={globalStyles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/search.tsx" />
    </View>
  );
}
