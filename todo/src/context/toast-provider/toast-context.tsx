import React, {createContext, useContext} from 'react';
import {Snackbar} from 'react-native-paper';
import {useToast} from '../../hooks/use-toast';

const ToastContext = createContext<any>(null);

export const ToastProvider = ({children}: {children: React.ReactNode}) => {
  const {visible, message, showToast, hideToast} = useToast();

  return (
    <ToastContext.Provider value={{showToast}}>
      {children}
      <Snackbar
        visible={visible}
        onDismiss={hideToast}
        action={{
          label: 'OK',
          onPress: hideToast,
        }}>
        {message}
      </Snackbar>
    </ToastContext.Provider>
  );
};

export const useToastContext = () => useContext(ToastContext);
