import React, { createContext, useContext } from 'react';
import { useEditableContent } from '../hooks/use-editable-content';

export const EditableContentContext = createContext<ReturnType<typeof useEditableContent> | null>(null);

export const EditableContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const editableContent = useEditableContent();

  return (
    <EditableContentContext.Provider value={editableContent}>
      {children}
    </EditableContentContext.Provider>
  );
};

export const useEditableContentContext = () => {
  const context = useContext(EditableContentContext);
  if (!context) {
    throw new Error('useEditableContentContext must be used within a EditableContentProvider');
  }
  return context;
};