import { useState, useCallback, useEffect } from 'react';

interface EditableContentState {
  [key: string]: {
    content: string;
    file: string;
    component: string;
    originalContent: string;
  };
}

export const useEditableContent = () => {
  const [editableContent, setEditableContent] = useState<EditableContentState>({});
  const [isEditMode, setIsEditMode] = useState(false);

  // Załaduj zapisane treści z localStorage przy starcie
  useEffect(() => {
    const savedContent = localStorage.getItem('editableContent');
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent);
        setEditableContent(parsed);
      } catch (error) {
        console.error('Failed to load saved content:', error);
      }
    }
  }, []);
  
  const registerContent = useCallback((
    id: string,
    content: string,
    file: string,
    component: string
  ) => {
    setEditableContent((prev) => {
      // Nie rejestruj ponownie jeśli już istnieje
      if (prev[id]) return prev;
      
      return {
        ...prev,
        [id]: {
          content,
          file,
          component,
          originalContent: content,
        },
      };
    });
  }, []);

  const updateContent = useCallback((id: string, newContent: string) => {
    setEditableContent((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        content: newContent,
      },
    }));
  }, []);

  const getContentChanges = () => {
    return Object.entries(editableContent)
      .filter(([_, data]) => data.content !== data.originalContent)
      .map(([id, data]) => ({
        id,
        newContent: data.content,
        file: data.file,
        component: data.component,
        originalContent: data.originalContent,
      }));
  };

  const saveChanges = async () => {
    const changes = getContentChanges();
    try {
      // Zapisz zmiany do localStorage zamiast wysyłania na serwer
      const savedContent = JSON.stringify(editableContent);
      localStorage.setItem('editableContent', savedContent);
      
      // Update original content after successful save
      setEditableContent((prev) => {
        const updated = { ...prev };
        changes.forEach(({ id }) => {
          updated[id] = {
            ...updated[id],
            originalContent: updated[id].content,
          };
        });
        return updated;
      });

      return true;
    } catch (error) {
      console.error('Failed to save changes:', error);
      return false;
    }
  };

  return {
    registerContent,
    updateContent,
    getContentChanges,
    saveChanges,
    isEditMode,
    setIsEditMode,
    editableContent,
  };
};