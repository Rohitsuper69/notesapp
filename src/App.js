import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NotePage from './pages/NotePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App text-center font-sans bg-gray-900 m-5">
        <Header />
        <Routes>
          <Route path='/' element={<NotesListPage />}></Route>
          <Route path='note/:id' element={<NotePage />}></Route>
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
