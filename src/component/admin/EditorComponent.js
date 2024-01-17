// EditorComponent.js

import React, { useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const EditorComponent = () => {
  const [editorData, setEditorData] = useState('');

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
  };

  return (
    <div>
      <h2>Éditeur de texte CKEditor</h2>
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onChange={handleEditorChange}
      />
      <div>
        <h3>Aperçu :</h3>
        <div dangerouslySetInnerHTML={{ __html: editorData }}></div>
      </div>
    </div>
  );
};

export default EditorComponent;
