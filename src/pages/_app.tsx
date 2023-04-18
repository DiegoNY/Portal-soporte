import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Login from './login';

import { Provider } from 'react-redux'
import store from '@/libs/redux/store/store';
import Layout from '@/components/Layout';
import Header from '@/components/Header/Header';
import Main from '@/components/Main';


export default function App({ Component, pageProps }: AppProps) {
  // const t = false;
  // if (t == false) {
  //   return <Login />
  // }
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Header />
          <Main>
            <Component {...pageProps} />
          </Main>
        </Layout>
      </Provider>
    </>
  )
}
