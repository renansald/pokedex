import React, {createContext} from 'react';

type ThemeContextType = {
  isDarkMode: boolean | undefined,
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: undefined,
});

export default ThemeContext;