import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Home from './Component/CreateCard';
import About from './Component/Students';
import View from './Component/View';
import Students from './Component/Students';
import StudentList from './Component/StudentList';
import CreateCard from './Component/CreateCard';
function App() {
  return (
    <Router>
  
  <Routes>
      <Route exact path='/' element = {<CreateCard/>}></Route>
      <Route exact path="/students/:id" component={<View />} />
     <Route  exact path='/list' element={<StudentList />} ></Route>
    </Routes>

    
      </Router>
      
  );
}

export default App;
