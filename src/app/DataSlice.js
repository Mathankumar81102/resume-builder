import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    step: 1,
    name: "",
    phone: "",
    regno: "",
    address: "",
    email: "",
    date: "",
    gender: "",
    age: "",
    fatherName: "",
    motherTongue: "",
    languages: ["English"],
    educationList: [{ school: "", degree: "", board: "", startYear: "", endYear: "", marks: "" }, { school: "", degree: "XII", board: "", startYear: "", endYear: "", marks: "" }, { school: "", degree: "", board: "", startYear: "", endYear: "", marks: "" },],
    hobbies: [""],
    profilePhoto: "",
    coCurricularActivities: [""],
    extraCurricularActivities: [""],
    achievements: [""],
    professionalObjective: "",
    projectList: [{ name: "", description: "", link: "" }],
    programmingLanguages: [""],
    toolsAndTechnologies: [""],
    areasOfInterest: [""],
}


export const dataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setName: (state, action) => { state.name = action.payload },
        setEmail: (state, action) => { state.email = action.payload },
        setPhone: (state, action) => { state.phone = action.payload },
        setRegno: (state, action) => { state.regno = action.payload },
        setAddress: (state, action) => { state.address = action.payload },
        setDate: (state, action) => { state.date = action.payload },
        setGender: (state, action) => { state.gender = action.payload },
        setAge: (state, action) => { state.age = action.payload },
        setFatherName: (state, action) => { state.fatherName = action.payload },
        setMotherTongue: (state, action) => { state.motherTongue = action.payload },
        setLanguages: (state, action) => { state.languages = action.payload },
        nextStep: (state) => { state.step += 1 },
        prevStep: (state) => { state.step -= 1 },
        setHobbies: (state, action) => { state.hobbies = action.payload },
        setProfilePhoto: (state, action) => { state.profilePhoto = action.payload },
        setEducationList: (state, action) => { state.educationList = action.payload },
        setCoCurricularActivities: (state, action) => { state.coCurricularActivities = action.payload },
        setExtraCurricularActivities: (state, action) => { state.extraCurricularActivities = action.payload },
        setAchievements: (state, action) => { state.achievements = action.payload },
        setProfessionalObjective: (state, action) => { state.professionalObjective = action.payload },
        setProjectList: (state, action) => { state.projectList = action.payload },
        setProgrammingLanguages: (state, action) => { state.programmingLanguages = action.payload },
        setToolsAndTechnologies: (state, action) => { state.toolsAndTechnologies = action.payload },
        setAreasOfInterest: (state, action) => { state.areasOfInterest = action.payload },
    }
})

export default dataSlice.reducer;
export const { setName, setAddress, setAge, setRegno, setDate, setEmail, setProgrammingLanguages, setAreasOfInterest, setToolsAndTechnologies, setProjectList, setFatherName, setGender, setLanguages, setMotherTongue, setPhone, nextStep, prevStep, setHobbies, setProfilePhoto, setEducationList, setCoCurricularActivities, setExtraCurricularActivities, setAchievements, setProfessionalObjective } = dataSlice.actions