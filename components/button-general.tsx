import { Pressable, Text, View } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome6';
import { ReactNode } from 'react';

type Props = {
  onPress: () => void;
  children: ReactNode;
};

export const ButtonGeneral = ({ onPress, children }: Props) => {
  return (
    <Pressable onPress={onPress} className="bg-gray-100 rounded-xl p-5">
      {children}
    </Pressable>
  );
};
