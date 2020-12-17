import React from 'react';
import {
  BrowserRouter as Router,
  
  Route,
} from "react-router-dom";
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import Navigation from './components/Navigation';
import NoteList from './components/NoteList';


function App() {
  return (
    <Router>
      
        <Navigation/>
        <Route exact path = '/' component= {NoteList}/>
        <Route exact path='/edit/:id' component={CreateNote}/>
        <Route exact path='/create' component = {CreateNote}/>
        <Route exact path ='/user' component={CreateUser}/>
      
    </Router>
  );
}

export default App;
