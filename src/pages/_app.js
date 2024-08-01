// pages/_app.js
import Layout from '@/componets/Layout';
import '../styles/Home.module.css';
import '../styles/globals.css';
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { ToastProvider } from 'react-toast-notifications';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect,useState } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

 const [products1, setProducts1] = useState({ pixelId: "" });

  useEffect(() => {
    fetchProducts1();
  }, []);
  const fetchProducts1 = async () => {
    try {
      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      };

      const response = await fetch('/api/upichange', {
        method: 'GET',
        headers: headersList,
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("upi", data.upi.upi)
        setProducts1(data.pixelId);
      } else {
      }
    } catch (error) {
    }

  };
  return (
      <Layout data={products1}>
    <ToastProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </ToastProvider>
      </Layout>
  );
}

export default MyApp;
