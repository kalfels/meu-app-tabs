import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { globalStyles } from '@/app/styles';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[globalStyles.header, { paddingTop: insets.top + 12 }]}>
      <Text style={globalStyles.headerTitle}>{title}</Text>
    </View>
  );
}

