import React, { useState } from 'react';
import { useEditableContentContext } from '../context/EditableContentContext';
import { Button } from './ui/button';
import { useAdminAuth } from '../hooks/use-admin-auth';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";

export const EditController: React.FC = () => {
  const { isEditMode, setIsEditMode, saveChanges, getContentChanges } = useEditableContentContext();
  const { isAdmin, checkPassword, setAdmin } = useAdminAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (checkPassword(password)) {
      setAdmin(true);
      setIsLoginOpen(false);
      setPassword('');
      setError('');
    } else {
      setError('Nieprawidłowe hasło');
    }
  };

  const handleLogout = () => {
    setAdmin(false);
    setIsEditMode(false);
  };

  const handleToggleEdit = () => {
    if (!isAdmin) {
      setIsLoginOpen(true);
      return;
    }
    setIsEditMode(!isEditMode);
  };

  const handleSave = async () => {
    const changes = getContentChanges();
    if (changes.length === 0) {
      alert('Brak zmian do zapisania');
      return;
    }

    const success = await saveChanges();
    if (success) {
      alert('Zmiany zostały zapisane do localStorage');
      setIsEditMode(false);
    } else {
      alert('Nie udało się zapisać zmian');
    }
  };

  const handleExportChanges = () => {
    const changes = getContentChanges();
    if (changes.length === 0) {
      alert('Brak zmian do eksportu');
      return;
    }

    const exportData = {
      timestamp: new Date().toISOString(),
      changes: changes
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `content-changes-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Logowanie administratora</DialogTitle>
            <DialogDescription>
              Wprowadź hasło aby uzyskać dostęp do edycji treści.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Input
              type="password"
              placeholder="Hasło"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button onClick={handleLogin}>Zaloguj</Button>
          </div>
        </DialogContent>
      </Dialog>
      
      <div className="fixed bottom-4 right-4 flex gap-2 bg-white p-2 rounded-lg shadow-lg">
        {isAdmin && (
          <Button
            variant="outline"
            onClick={handleLogout}
          >
            Wyloguj
          </Button>
        )}
        <Button
          variant={isEditMode ? "destructive" : "default"}
          onClick={handleToggleEdit}
        >
          {isEditMode ? 'Zakończ edycję' : 'Edytuj treść'}
        </Button>
        {isEditMode && (
          <>
            <Button
              variant="default"
              onClick={handleSave}
            >
              Zapisz do localStorage
            </Button>
            <Button
              variant="outline"
              onClick={handleExportChanges}
            >
              Eksportuj zmiany
            </Button>
          </>
        )}
      </div>
    </>
  );
};