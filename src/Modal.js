import React, { createContext, useReducer, useContext, useCallback } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const initialState = { open: false };
export const ModalContext = createContext(initialState);

export const FeatureModal = ({ children }) => {
  const { modalState } = useModalState();

  return (
    <ReactModal style={customStyles} isOpen={modalState.open} contentLabel="Example Modal">
      {children}
    </ReactModal>
  );
};

export const MODAL_ACTIONS = {
  OPEN: 'OPEN',
  CLOSE: 'CLOSE',
};
function modalReducer(state, action) {
  switch (action.type) {
    case MODAL_ACTIONS.OPEN:
      return { ...state, open: true };
    case MODAL_ACTIONS.CLOSE:
      return { ...state, open: false };
    default:
      throw new Error('Wrong type, ' + action.type);
  }
}

export const ModalState = ({ children }) => {
  const [modalState, dispatch] = useReducer(modalReducer, initialState);

  const open = useCallback(() => {
    dispatch({ type: 'OPEN' });
  }, []);

  const close = useCallback(() => {
    dispatch({ type: 'CLOSE' });
  }, []);

  return <ModalContext.Provider value={{ modalState, open, close }}>{children}</ModalContext.Provider>;
};

export const useModalState = () => {
  return useContext(ModalContext);
};
