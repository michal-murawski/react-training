import React from 'react';
import { useModalState, FeatureModal } from './Modal';
import { Button } from './Button';

export const Nested = () => {
  const { open, close, modalState } = useModalState();

  return (
    <div>
      <FeatureModal>
        Custom content <button onClick={close}>Close</button>
      </FeatureModal>
      Nested <Button onClick={open} text={'OPEN'} />
      {String(modalState.open)}
    </div>
  );
};
