import { Provider } from 'react-redux';
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route,RouterProvider,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import TodoList from './components/TodoList';
import store from './store/store' 
import Todo from './components/Todo';
import { useDispatch } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { invokeStore } from './reducer/reducer';
import Main from './components/Main';
import Todoedit from './components/Todoedit';
const loader =async ()=>{
  let data = await fetch('http://localhost:3006/Todo');
  data = await data.json();
  return data;
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
              <Route path='/' loader={loader} element={<Home/>} >
                    <Route path='TodoList' element={<TodoList/>}/> 
                    <Route index element={<Main/>}/> 
                    <Route path='Todo/:id'  element={<Todo/>}/>    
                    <Route path='Todoedit/:id'  element={<Todoedit/>}/>    
                    <Route path='Profile' element={<Profile/>}/>
                    <Route path='ProfileEdit' element={<ProfileEdit/>} />
              </Route>  
    </>
  )
)

function App() {  
  return (
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
  );
}

export default App;
