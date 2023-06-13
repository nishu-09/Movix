import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState:{
    url:{},
    generes:{},
  },
  reducers: {
    getApiConfigration:(state,action)=>{
       state.url=action.payload
    },
    getGeneres:(state,action)=>{
        state.generes=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {getApiConfigration,getGeneres } = homeSlice.actions

export default homeSlice.reducer