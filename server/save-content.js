const fs = require('fs');
const path = require('path');

// Endpoint do zapisywania zmian w plikach
const saveContent = async (req, res) => {
  try {
    const { changes } = req.body;
    
    for (const change of changes) {
      const { file, id, newContent, component } = change;
      const filePath = path.join(__dirname, '..', file);
      
      // Czytaj plik
      let fileContent = fs.readFileSync(filePath, 'utf8');
      
      // Znajdź i zastąp treść (to jest uproszczona wersja)
      // W rzeczywistości potrzebny byłby bardziej zaawansowany parser
      fileContent = fileContent.replace(
        /initialText="[^"]*"/g, 
        `initialText="${newContent}"`
      );
      
      // Zapisz plik
      fs.writeFileSync(filePath, fileContent);
    }
    
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving content:', error);
    res.status(500).json({ error: 'Failed to save content' });
  }
};

module.exports = { saveContent };