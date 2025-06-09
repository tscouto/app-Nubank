import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileIcon } from './profile-icon';
import { ButtonIcon } from './button-icon';

export const Header = () => {
  return (
    <SafeAreaView className="bg-nubank text-white ">
      <View className="flex-row justify-between mt-4 pr-3 pl-4">
        <ProfileIcon />
        <View className="flex-row ">
          <ButtonIcon icon="eye-slash" onPress={() => {}} />
          <ButtonIcon icon="circle-question" onPress={() => {}} />
          <ButtonIcon icon="message" onPress={() => {}} />
        </View>
      </View>
      <View className="px-4 py-7">
        <Text className="text-white font-bold text-2xl">Olá, Tiago</Text>
      </View>
    </SafeAreaView>
  );
};
