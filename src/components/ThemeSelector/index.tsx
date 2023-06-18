import React, {useState, useEffect} from 'react';
import Switch from 'react-switch';
import { Moon, Sun } from 'react-feather';
import ThemeContext from '@/context/themeContext';


const ThemeSelector = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  useEffect(() => {
    if(document.body.classList.contains('dark')){
      setIsDarkMode(true);
    }
    else{
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if(isDarkMode){
      setIsDarkMode(false);
      document.body.classList.remove('dark');
      return;
    }
    setIsDarkMode(true);
    document.body.classList.add('dark');
  };

  return (
    <ThemeContext.Provider value={{isDarkMode}}>
      <div className="self-end flex flex-row gap-1 justify-self-end mr-4">
        <Sun
          size={16}
        />
        <Switch
          checked={isDarkMode}
          onChange={toggleTheme}
          offHandleColor='#FFF'
          onHandleColor='#000'
          onColor='#E0E0E0'
          width={24}
          height={16}
          uncheckedIcon={false}
          checkedIcon={false}
        />
        <Moon 
          size={16}
        />
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeSelector;