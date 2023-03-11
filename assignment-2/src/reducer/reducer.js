import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const addTodo = createAsyncThunk(
    'todo/addTodo',
  async (todoData, thunkAPI) => {
            let data = await fetch('http://localhost:3006/Todo',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({...todoData,"status":false})
            });
            data = await data.json();
    return data;
  }
)   
const deleteTodo = createAsyncThunk(
  'todo/deleteTodo',
async (id) => {
          await fetch(`http://localhost:3006/Todo/${id}`,{
          method:'DELETE',
          }).then(res => res.json())
}
)  
const doneTodo = createAsyncThunk(
  'todo/done',
async (id,content) => {
          let data = await fetch(`http://localhost:3006/Todo/${id}`,{
          method:'PATCH',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify({"status":true})
          });
          data = await data.json();
  return id;
}
)   
const notdoneTodo = createAsyncThunk(
  'todo/notdone',
async (id,content) => {
          let data = await fetch(`http://localhost:3006/Todo/${id}`,{
          method:'PATCH',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify({"status":false})
          });
          data = await data.json();
  return id;
}
)   

const getTodoIndexById = (arr,id) =>{
  let i=arr.length;
  while(i--){
      if(arr[i]&& arr[i].id == id)
      return i;
  }
  return -1;
}

const todoReducers = createSlice({
    name: 'todo',
    initialState: {todo:[]},
    reducers: {
        invokeStore(state,action){
          state.todo = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addTodo.fulfilled, (state, action) => {
          console.log(state.todo)
        })
        builder.addCase(deleteTodo.fulfilled,(state,action)=>{
          console.log(state.todo)
        })
        builder.addCase(doneTodo.fulfilled,(state,action)=>{
          const id = getTodoIndexById(state.todo,action.payload);
          state.todo[id].status=true;
        })
        builder.addCase(notdoneTodo.fulfilled,(state,action)=>{
          
          const id = getTodoIndexById(state.todo,action.payload);
          state.todo[id].status=false;
        })
      },
  })

  const {actions,reducer}=todoReducers;
  const {invokeStore} =actions;
  export {addTodo,deleteTodo,doneTodo,notdoneTodo,invokeStore};
  export default reducer;