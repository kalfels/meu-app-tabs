import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, Text as RNText } from 'react-native';

import { colors, globalStyles } from '@/app/styles';
import { useNotifications } from '@/components/NotificationsContext';
import { Text, View } from '@/components/Themed';

export default function NotificationsScreen() {
  const { count, notify, markAllAsRead } = useNotifications();

  return (
    <View style={globalStyles.notificationsContainer}>
      <View style={globalStyles.notificationsRow}>
        <Ionicons name="notifications" size={24} color={colors.primary} />
        <Text style={globalStyles.notificationsText}>
          {count} {count === 1 ? 'não lida' : 'não lidas'}
        </Text>
      </View>

      <Pressable style={globalStyles.button} onPress={notify}>
        <RNText style={globalStyles.buttonText}>Notificar</RNText>
      </Pressable>
      <Pressable style={globalStyles.button} onPress={markAllAsRead}>
        <RNText style={globalStyles.buttonText}>Marcar todas como lidas</RNText>
      </Pressable>
    </View>
  );
}
