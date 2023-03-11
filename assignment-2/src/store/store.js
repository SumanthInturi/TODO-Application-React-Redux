import {configureStore} from '@reduxjs/toolkit';
import todoreducer from '../reducer/reducer'
const store = configureStore({
    reducer:{
           todo:todoreducer
    }
})
export default store;