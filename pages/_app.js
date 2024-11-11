import Layout from '../components/layout/layout';
import {ProductCategoryProvider} from '../components/ProductCategoryContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ProductCategoryProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductCategoryProvider>
  );
}

export default MyApp;
