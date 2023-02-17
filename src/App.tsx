import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Store from './components/Store';
import { PATHS } from './constants';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={PATHS.STORE} element={<Store />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
