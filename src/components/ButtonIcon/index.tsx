import React from 'react';

type Props = {
  children: React.ReactNode
  onClick: (value: any) => void
}

const ButtonIcon = ({children, onClick}: Props) => {
  return (
    <button 
      className="btn btn-primary btn-icon bg-gray-200 hover:bg-gray-400 text-red-600 dark:bg-slate-500 dark:hover:bg-slate-600 dark:text-amber-400 rounded-full p-1" 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonIcon;