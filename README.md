# App-Nubank

Um aplicativo mobile inspirado na interface do Nubank, desenvolvido com **React Native** e **Expo**. O projeto utiliza **Tailwind CSS com NativeWind** para estilização via `className`, e conta com componentes personalizados que simulam uma experiência bancária moderna, com foco em design intuitivo e responsivo.

## 📱 Funcionalidades

- Tela principal com saudação e saldo
- Ações rápidas como Pix, Pagar, Transferir, etc.
- Cartões interativos com informações de conta e crédito
- Seção de empréstimo simulada
- Componentes reutilizáveis como:
  - `Header`
  - `ButtonCard`
  - `ButtonAction`
  - `ButtonGeneral`
  - `CustomButton`
  - `ButtonIcon`
  - `ProfileIcon`

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS com NativeWind](https://www.nativewind.dev/)
- [FontAwesome6](https://fontawesome.com/)

## 🚀 Instalação e execução

1. Clone o repositório:

```bash
git clone https://github.com/tscouto/app-Nubank.git
cd app-Nubank
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o projeto com o Expo:

```bash
npx expo start
```

> É necessário ter o **Expo CLI** instalado globalmente. Caso ainda não tenha:
> 
```bash
npm install -g expo-cli
```

4. Escaneie o QR Code com o aplicativo **Expo Go** no seu celular.

## 📁 Estrutura de pastas

```
app-Nubank/
├── components/
│   ├── header.tsx
│   ├── button-card.tsx
│   ├── button-action.tsx
│   ├── button-general.tsx
│   ├── button-icon.tsx
│   ├── profile-icon.tsx
│   └── ...
├── screens/
│   └── Screen.tsx
├── App.tsx
└── ...
```

## ✨ Inspiração

Projeto inspirado na UI do aplicativo **Nubank**, com fins educativos e de portfólio.

---

Feito com 💜 por [Tiago da Silva Couto](https://github.com/tscouto)