import './App.css';
import Body from './components/Pages/Body';
import Footer from './components/Pages/Footer';
import Header from './components/Pages/Header';

import { useSelector } from 'react-redux'
import { selectTheme } from './store/features/theme/themeSlice'

function App() {

  const theme = useSelector(selectTheme)

  return (
    <div className={`App ${theme}`}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
