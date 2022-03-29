import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthorForm from'./components/AuthorForm';
import DisplayAllAuthors from'./components/DisplayAllAuthors';
import DisplayOneAuthor from './components/DisplayOneAuthor';
import UpdateAuthor from './components/UpdateAuthor';



const App = () => {
  const [authorList, setAuthorList] = useState([]);
  const removeFromDom = authorId => {
    setAuthorList(authorList.filter(author => author._id != authorId));
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<AuthorForm/>} path="/new" />
          <Route element={<DisplayAllAuthors removeFromDom={removeFromDom} authorList={authorList} setAuthorList={setAuthorList} />} path="/" />
          <Route element={<DisplayOneAuthor />} path="/api/authors/:id"/>
          <Route element={<UpdateAuthor/>} path="/api/authors/edit/:id" />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
