import React, {useState, useEffect} from 'react';
import Switch from 'react-switch';
import { Moon, Sun } from 'react-feather';



const ThemeSelector = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.body.classList.add('dark');
    }
  }, []);

  const toogleMode = () => {
    if(isDarkMode){
      setIsDarkMode(false);
      document.body.classList.remove('dark');
      return;
    }
    setIsDarkMode(true);
    document.body.classList.add('dark');
  };

  return (
    <div className="self-end flex flex-row gap-1 justify-self-end mr-4">
      <Sun
        size={16}
      />
      <Switch
        checked={isDarkMode}
        onChange={toogleMode}
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
  );
};

export default ThemeSelector;