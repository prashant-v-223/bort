// pages/_app.js
import '../styles/Home.module.css';
import '../styles/globals.css';
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { ToastProvider } from 'react-toast-notifications';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ToastProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </ToastProvider>
  );
}

export default MyApp;
