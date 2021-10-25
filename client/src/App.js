import React from 'react';
import {Box} from '@material-ui/core';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

//components
import Header from './components/Header.jsx'
import Home from './components/home/Home.jsx'
import DetailView from './components/post/DetailView.jsx';
import CreateView from './components/post/CreateView.jsx';
import UpdateView from './components/post/UpdateView.jsx';  


function App() {
  return (
      <BrowserRouter>
      <Header />
      <Box style={{margin: 64}}>
        <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/details/:id' component={DetailView} />
      <Route exact path='/create' component={CreateView} />
      <Route exact path='/update/:id' component={UpdateView} />
      </Switch>
      </Box>
      </BrowserRouter>
  );
}

export default App;
