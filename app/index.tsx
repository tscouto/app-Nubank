import { ScrollView } from 'react-native-gesture-handler';
import { Header } from '../components/header';
import { ButtonCard } from '../components/button-card';
import { Text, View } from 'react-native';
import { ButtonAction } from '../components/button-action';
import { ButtonGeneral } from '../components/button-general';
import Icon from '@expo/vector-icons/FontAwesome6';

export default function Screen() {
  return (
    <ScrollView className="h-screen bg-white">
      <Header />
      <ButtonCard title="Conto" onPress={() => {}}>
        <Text className="text-2xl font-semibold pl-4">R$ 1.356,98</Text>
      </ButtonCard>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ButtonAction icon="pix" label="Pix" onPress={() => {}} />
        <ButtonAction icon="barcode" label="Pagar" onPress={() => {}} />
        <ButtonAction
          icon="hand-holding-dollar"
          label="Pegar emprestado"
          badge="R$ 12.300"
          onPress={() => {}}
        />
        <ButtonAction
          icon="money-bill-transfer"
          label="Tranferir"
          onPress={() => {}}
        />
        <ButtonAction icon="receip" label="Pix" onPress={() => {}} />
      </ScrollView>
      <View className="px-4 py-6">
        <ButtonGeneral onPress={() => {}}>
          <View className="flex-row items-center">
            <Icon name="credit-card" size={28} color="black" />
            <Text className="ml-4 text-lg font-semibold">Meus cartões</Text>
          </View>
        </ButtonGeneral>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="px-4"
      >
        <View className="w-72 mr-4">
          <ButtonGeneral onPress={() => {}}>
            <View className="flex-row flex-wrap gap-x-1">
              <Text className="text-lg">Você tem</Text>
              <Text className=" text-lg font-semibold">R$ 12.300,00 </Text>
              <Text className="text-lg">
                Você tem R$ 12.300,00 disponível para emprestimo
              </Text>
            </View>
          </ButtonGeneral>
        </View>

        <View className="w-72">
          <ButtonGeneral onPress={() => {}}>
            <Text className="font-semibold text-lg text-nubank">
              Guarde seu dinheiro aqui
            </Text>
            <Text className="text-lg">Toque para saber mais</Text>
          </ButtonGeneral>
        </View>
      </ScrollView>
      <View className="h-1 bg-gray-200 mt-8"></View>
      <ButtonCard title="Cartão de crédito" onPress={() => {}}>
        <View className="">
          <Text className="text-xl ml-4 text-gray-500 ">Fatura atual</Text>
          <Text className="text-2xl ml-4 font-semibold">R$ 1.094,00</Text>
          <Text className="text-xl ml-4 text-gray-500">
            Limite disponivel: R$ 5.000,00
          </Text>
        </View>
      </ButtonCard>
    </ScrollView>
  );
}
