import { Pressable, Text, View } from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
};

export default function CustomButton({ label, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-white h-12 w-full  my-2 justify-center items-center rounded-2xl"
    >
      <Text className="font_bold text-lg text-blue-700">{label}</Text>
    </Pressable>
  );
}
