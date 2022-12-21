import React from 'react';
import { GlobalStyle } from './components/styles/GlobalStyles';
import { UserProvider } from './contexts/UserContext';
import { RoutesMain } from './routes';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <GlobalStyle/>
      <UserProvider>
        <RoutesMain/>
      </UserProvider>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
