import React, {createContext, useContext, useState, ReactNode} from 'react';

interface ModalContextType {
  isModalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({children}) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{isModalVisible, setModalVisible}}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
