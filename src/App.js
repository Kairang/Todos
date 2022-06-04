import Header from './components/Header/header';
import Input from './components/Input/input';
import Button from './components/Button/addBtn';
import Line from './components/Line/line';
import Todos from './components/Lists/todos';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='Input-box'>
        <Input />
        <Button />
      </div>
      <Line />
      <Todos />
      <Line />
      <Pagination />
    </div>
  )
}

export default App;
