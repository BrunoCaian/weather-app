import { useState } from 'react'
import Footer from './components/Footer';
import RoutesComponent from './routes/Routes';
import { GlobalStyle } from './globalStyles';
import Layout from './layout';


function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
    return (
      <>
        <GlobalStyle/>
        <Layout>
        <RoutesComponent apiKey={apiKey} />
        </Layout>
      </>
    )
}

export default App
