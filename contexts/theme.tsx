import { createContext, ReactNode, useState } from 'react';

type ThemeContextType = null | {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType>(null);

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  //   const [data, setData] = useState('Ciclano');
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
