import { useEffect } from 'react';
import './App.css';
import DashboardComponent from './components/DashboardComponent';
import Header from './components/Header';
import { useAtom } from 'jotai';
import { shoppingListAtom } from './store/atoms';
import mockData from './mock/mockData.json';

const App: React.FC = () => {

  const [, setShoppingList] = useAtom(shoppingListAtom);

  useEffect(() => {
    /* Initialize data */
    // Ideally and API call should be initialized here but for local data,
    // I am using mock JSON here
    setShoppingList(mockData)
  }, [])

  return (
    <>
      <Header />
      <DashboardComponent />
    </>
  )
}

export default App
