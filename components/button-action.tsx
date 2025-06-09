import { Pressable, Text, View } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome6';
type Props = {
  icon: string;
  label: string;
  onPress: () => void;
  badge?: string;
};

export const ButtonAction = ({ icon, label, onPress, badge }: Props) => {
  return (
    <Pressable onPress={onPress} className="w-24 mx-1">
      <View className="bg-gray-100 size-24 rounded-full justify-center items-center">
        <Icon name={icon} size={24} color="black" />
      </View>
      {badge && (
        <View className="h-7 -mt-6 bg-nubank p-1 rounded items-center justify-center">
          <Text className="text-white text-center font-semibold">{badge}</Text>
        </View>
      )}
      <Text className="mt-4 text-md font-semibold  text-center">{label}</Text>
    </Pressable>
  );
};
