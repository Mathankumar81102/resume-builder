import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nextStep, prevStep, setProjectList, setProgrammingLanguages, setAreasOfInterest, setToolsAndTechnologies } from '../app/DataSlice'

import DeleteIcon from '../assets/delete.png'
import AddIcon from '../assets/add.png'
import ListInput from './ListInput'


function Projects() {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const { projectList, programmingLanguages, toolsAndTechnologies, areasOfInterest } = useSelector((state) => state.userData);

    const handleInputChange = (event, index) => {
        const { name, value } = event.target;
        if (name === 'programmingLanguages') {
            const list = [...programmingLanguages];
            list[index] = value
            dispatch(setProgrammingLanguages(list));
        }
        else if (name === 'toolsAndTechnologies') {
            const list = [...toolsAndTechnologies];
            list[index] = value
            dispatch(setToolsAndTechnologies(list));
        }
        else if (name === 'areasOfInterest') {
            const list = [...areasOfInterest];
            list[index] = value
            dispatch(setAreasOfInterest(list));
        }
        else {
            const list = [...projectList];
            list[index] = { ...list[index], [name]: value };
            dispatch(setProjectList(list));
            console.log(projectList)
        }
    };

    const handleAddItem = (event) => {
        const eventName = event.target.name;
        if (eventName === 'programmingLanguages') {
            dispatch(setProgrammingLanguages([...programmingLanguages, ""]));
        }
        else if (eventName === 'toolsAndTechnologies') {
            dispatch(setToolsAndTechnologies([...toolsAndTechnologies, ""]));
        }
        else if (eventName === 'areasOfInterest') {
            dispatch(setAreasOfInterest([...areasOfInterest, ""]));
        }
        else {
            dispatch(setProjectList([
                ...projectList,
                { name: "", description: "", link: "" },
            ]));
        }
    };

    const handleRemoveItem = (name, index) => {
        if (name === 'programmingLanguages') {
            const list = [...programmingLanguages];
            list.splice(index, 1);
            dispatch(setProgrammingLanguages(list));
        }
        else if (name === 'toolsAndTechnologies') {
            const list = [...toolsAndTechnologies];
            list.splice(index, 1);
            dispatch(setToolsAndTechnologies(list));
        }
        else if (name === 'areasOfInterest') {
            const list = [...areasOfInterest];
            list.splice(index, 1);
            dispatch(setAreasOfInterest(list));
        }
        else {
            const list = [...projectList];
            list.splice(index, 1);
            dispatch(setProjectList(list));
        }
    };


    return (
        <div className="p-10 pt-20 max-w-4xl ">
            <form onSubmit={handleSubmit}
                className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
            >
                <h1 className="mb-6 change-font pl-10 text-blue-700 font-extraboldbold text-3xl">
                    Skills and Projects
                </h1>

                <ListInput label="programmingLanguages" list={programmingLanguages} handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem} handleInputChange={handleInputChange} />

                <ListInput label="toolsAndTechnologies" list={toolsAndTechnologies} handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem} handleInputChange={handleInputChange} />

                <ListInput label="areasOfInterest" list={areasOfInterest} handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem} handleInputChange={handleInputChange} />

                <div className="mb-6 px-10">
                    {projectList.map((project, index) => (

                        <div key={index}>
                            {(index !== 0) && (<hr className="border-t-neutral-400 solid mt-8" />)}
                            <div className="text-lg text-gray-700 font-bold mb-6 mt-6 flex justify-between">
                                Project Details - {index + 1}
                                {index !== 0 && <button type="button" >
                                    <img alt="delete" name="project" onClick={() => handleRemoveItem(index)} className="w-5 " src={DeleteIcon} />
                                </button>}
                            </div>
                            <label className="my-6">
                                Project Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder='Enter Project Title'
                                className="my-2 bg-zinc-50 shadow-xl focus:outline-slate-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                                value={project.name}
                                onChange={(e) => handleInputChange(e, index)}
                            />

                            <label className="my-6">
                                Project Link
                            </label>
                            <input
                                type="text"
                                name="link"
                                placeholder='Enter Project Link'
                                className="my-2 bg-zinc-50 shadow-xl focus:outline-slate-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                                value={project.link}
                                onChange={(e) => handleInputChange(e, index)}
                            />

                            <label className="my-6">
                                Project Description
                            </label>
                            <textarea rows={4}
                                className="my-2 bg-zinc-50 shadow-xl border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                name="description"
                                placeholder='Enter Project Title'
                                value={project.description}
                                onChange={(e) => handleInputChange(e, index)}
                            />



                            {index === projectList.length - 1 && (
                                <button type="button" name='projects' className="mt-14 mx-auto px-6 pb-3 bg-slate-200  flex justify-center space-x-3 items-baseline" onClick={(e) => { handleAddItem(e) }}>
                                    <div ><img alt="add" name="projects" className="w-5 mt-5" src={AddIcon} /></div>
                                    <div className="text-lg font-light"> Add project</div>
                                </button>
                            )}

                        </div>
                    ))}
                </div>


                <div className="mt-10 flex items-center justify-between pb-7 pt-5 ">
                    <button
                        className=" bg-zinc-500 ml-10 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        onClick={() => dispatch(prevStep())}
                    >
                        Back
                    </button>
                    <button
                        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        onClick={() => dispatch(nextStep())}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Projects