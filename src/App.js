
import './App.css';
import NewsApp from './components/Index';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NewPage from './components/newPage'
function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
        <Route path='' element={<NewsApp/>}/>
        <Route path='news/:name' element={<NewPage/>}/>
    </Routes>
   </BrowserRouter>
    
   </>
  );
}

export default App;
