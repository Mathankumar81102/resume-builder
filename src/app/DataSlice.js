import { createSlice } from "@reduxjs/toolkit"

const initialState ={
step:1,
name:"",
phone:"",
address:"",
date:"",
gender:"",
age:20,
fatherName:"",
motherTongue:"",
languages:"",
}


export const dataSlice=createSlice({
name:'userData',
initialState,
reducers:{
    setName:(state,action)=>{  state.name=action.payload     }
    ,setEmail:(state,action)=>{state.email=action.payload}
    ,setPhone:(state,action)=>{state.phone=action.payload}
    ,setAddress:(state,action)=>{state.address=action.payload}
    ,setDate:(state,action)=>{state.date=action.payload}
    ,setGender:(state,action)=>{state.gender=action.payload}
    ,setAge:(state,action)=>{state.age=action.payload}
    ,setFatherName:(state,action)=>{state.fatherName=action.payload}
    ,setMotherTongue:(state,action)=>{state.motherTongue=action.payload}
    ,setLanguages:(state,action)=>{state.languages=action.payload}
    ,nextStep:(state)=>{state.step+=1}
    ,prevStep:(state)=>{state.step-=1}

}


})

export default dataSlice.reducer;
export const { setName,setAddress,setAge,setDate,setEmail,setFatherName,setGender,setLanguages,setMotherTongue,setPhone,nextStep,prevStep } = dataSlice.actions