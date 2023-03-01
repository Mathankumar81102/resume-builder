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
languages:["English"],
educationList:[{ school: "", degree: "", field: "", startYear: "", endYear: "",marks:"" },{ school: "", degree: "", field: "", startYear: "", endYear: "",marks:"" }],
hobbies:[""],
coActivities:[""],
profilePhoto:""
}


export const dataSlice=createSlice({
name:'userData',
initialState,
reducers:{
    setName:(state,action)=>{  state.name=action.payload},
    setEmail:(state,action)=>{state.email=action.payload},
    setPhone:(state,action)=>{state.phone=action.payload},
    setAddress:(state,action)=>{state.address=action.payload},
    setDate:(state,action)=>{state.date=action.payload},
    setGender:(state,action)=>{state.gender=action.payload},
    setAge:(state,action)=>{state.age=action.payload},
    setFatherName:(state,action)=>{state.fatherName=action.payload},
    setMotherTongue:(state,action)=>{state.motherTongue=action.payload},
    setLanguages:(state,action)=>{state.languages=action.payload},
    nextStep:(state)=>{state.step+=1},
    prevStep:(state)=>{state.step-=1},
    setHobbies:(state,action)=>{state.hobbies=action.payload},
    setCoActivities:(state,action)=>{state.coActivities=action.payload},
    setProfilePhoto:(state,action)=>{state.profilePhoto=action.payload},
    setEducationList:(state,action)=>{state.educationList=action.payload},

}


})

export default dataSlice.reducer;
export const { setName,setAddress,setAge,setDate,setEmail,setFatherName,setGender,setLanguages,setMotherTongue,setPhone,nextStep,prevStep,setHobbies,setCoActivities,setProfilePhoto,setEducationList } = dataSlice.actions