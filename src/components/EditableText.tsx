import React, { useState, useEffect, useContext, memo, useCallback } from 'react';
import { EditableContentContext } from '../context/EditableContentContext';

interface EditableTextProps {
  id: string;
  initialText: string;
  component: string;
  file: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  placeholder?: string;
}

const EditableText: React.FC<EditableTextProps> = ({
  id,
  initialText,
  component,
  file,
  className = '',
  as = 'div',
  placeholder = 'Kliknij aby edytować...'
}) => {
  const context = useContext(EditableContentContext);
  const [isEditing, setIsEditing] = useState(false);
  const [currentText, setCurrentText] = useState(initialText);

  // Jeśli kontekst nie istnieje, renderuj zwykły tekst
  if (!context) {
    const Tag = as;
    return (
      <Tag className={className}>
        {initialText}
      </Tag>
    );
  }

  const { registerContent, updateContent, isEditMode, editableContent } = context;
  
  // Używaj zapisanej treści jeśli istnieje, w przeciwnym razie initialText
  const savedContent = editableContent[id]?.content;
  const displayText = savedContent || initialText;

  useEffect(() => {
    registerContent(id, initialText, file, component);
  }, [id, initialText, file, component, registerContent]);

  // Aktualizuj currentText gdy zmieni się zapisana treść
  useEffect(() => {
    setCurrentText(displayText);
  }, [displayText]);

  const handleClick = () => {
    if (isEditMode && !isEditing) {
      setIsEditing(true);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
    updateContent(id, currentText);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleBlur();
    }
    if (e.key === 'Escape') {
      setCurrentText(displayText);
      setIsEditing(false);
    }
  };

  const Tag = as;

  if (isEditMode && isEditing) {
    return (
      <textarea
        value={currentText}
        onChange={(e) => setCurrentText(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={`${className} border-2 border-blue-500 bg-blue-50 resize-none min-h-[2em]`}
        placeholder={placeholder}
        autoFocus
        style={{ width: '100%' }}
      />
    );
  }

  return (
    <Tag
      className={`${className} ${isEditMode ? 'cursor-pointer hover:bg-blue-50 hover:border hover:border-blue-300 rounded px-1 transition-all duration-200' : ''}`}
      onClick={handleClick}
      title={isEditMode ? 'Kliknij aby edytować' : undefined}
    >
      {displayText || placeholder}
    </Tag>
  );
};

export default memo(EditableText);