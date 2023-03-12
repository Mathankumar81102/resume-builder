import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Login'
import Templates from './components/Templates';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Example } from './components/Example';
import Hero from './components/Hero';
import UserForm from './components/UserForm';
import store from './app/store';
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Home" element={<App />} >
            <Route index element={<Hero />}></Route>
            <Route path="Templates" element={<Templates />} />
            <Route path="UserForm" element={<UserForm />} />
          </Route>


        </Routes>
      </BrowserRouter>

      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </Provider>
  </QueryClientProvider>
);


