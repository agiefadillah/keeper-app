import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Note from './Note';

import notes from '../notes';

function App() {
  return (
    <div>
      <Header />
      <Footer />

      {notes.map((notesIsi) => (
        <Note key={notesIsi.key} title={notesIsi.title} content={notesIsi.content} />
      ))}
    </div>
  );
}

export default App;
