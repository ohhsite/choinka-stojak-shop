
import React, { useState, useRef, useEffect } from 'react';
import { Edit2, Check, X } from 'lucide-react';

interface EditableHeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  onSave?: (newText: string) => void;
}

const EditableHeading: React.FC<EditableHeadingProps> = ({ 
  level, 
  children, 
  className = '',
  onSave 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(children?.toString() || '');
  const [originalText, setOriginalText] = useState(children?.toString() || '');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleEdit = () => {
    setOriginalText(text);
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    if (onSave) {
      onSave(text);
    }
  };

  const handleCancel = () => {
    setText(originalText);
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  if (isEditing) {
    return (
      <div className="relative group">
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyPress}
          className={`${className} bg-white border-2 border-blue-500 rounded px-2 py-1 w-full`}
        />
        <div className="absolute right-0 top-full mt-1 flex space-x-1">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white p-1 rounded hover:bg-blue-700"
          >
            <Check className="w-4 h-4" />
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-600 text-white p-1 rounded hover:bg-gray-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <HeadingTag className={className}>
        {text}
      </HeadingTag>
      <button
        onClick={handleEdit}
        className="absolute -right-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-600 text-white p-1 rounded hover:bg-gray-700"
      >
        <Edit2 className="w-3 h-3" />
      </button>
    </div>
  );
};

export default EditableHeading;
