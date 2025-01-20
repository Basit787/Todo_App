// src/contexts/SnackbarContext.tsx
import React, {createContext, useState, ReactNode} from 'react';
import {Snackbar} from 'react-native-paper';

interface SnackbarContextType {
  showSnackbar: (message: string) => void;
}

export const SnackbarContext = createContext<SnackbarContextType>({
  showSnackbar: () => {}, // Default implementation
});

export const SnackbarProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  const showSnackbar = (msg: string) => {
    setMessage(msg);
    setVisible(true);
    setTimeout(() => setVisible(false), 3000); // Dismiss after 3 seconds
  };

  return (
    <SnackbarContext.Provider value={{showSnackbar}}>
      {children}
      {visible && (
        <Snackbar
          visible={visible}
          onDismiss={() => setVisible(false)}
          duration={3000}>
          {message}
        </Snackbar>
      )}
    </SnackbarContext.Provider>
  );
};
