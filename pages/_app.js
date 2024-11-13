import { store } from '@/redux/store';
import Layout from '../components/layout/layout';
import { ProductCategoryProvider } from '../components/ProductCategoryContext';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ProductCategoryProvider>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer position="top-right" autoClose={3000} />
        </Layout>
      </ProductCategoryProvider>
    </Provider>
  );
}

export default MyApp;
