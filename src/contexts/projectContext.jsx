import { createContext, useReducer, useState } from "react";
import { projectReducer } from "../reducers/projectReducer"
import { apiUrl } from "./constants";
import axios from "axios";

export const ProjectContext = createContext();

const ProjectContextProvider = ({ children }) => { 
    const [projectState, dispatch] = useReducer(projectReducer, {
        project: null,
        projects: [],
        employeesInProject: [],
        isLoading: true
    });

    const [addProjectModal, setAddProjecrModal] = useState(false);
    const [addEmployeeModal, setAddEmployeeModal] = useState(false);
    const [employeeDetailsModal, setEmployeeDetailsModal] = useState(false);

    

    const getProjects = async () => {
        try {
        const response = await axios.get(`${apiUrl}/projects`)
        if (response.status === 200) {
            dispatch({type: 'PRO_LOADED_SUCCESS', payload: response.data.projects});
        }
        } catch (error) {
            console.log(error);
            dispatch({type: 'PRO_LOADED_FAIL'});
        }
    }

    const findProject = projectId => {
		const project = projectState.projects.find(pro => pro._id === projectId)
		dispatch({ type: 'FIND_PRO', payload: project })
	}

    const createProject = async newProject => {
        try {
            const response = await axios.post(`${apiUrl}/projects/create`, newProject)
            if (response.data.success) {
                dispatch({type: 'PRO_CREATED_SUCCESS', payload: response.data.projects})
                return response.data
            }
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: "Server error" };
        }
    }

    const closeProject = async projectId => {
		try {
			const response = await axios.patch(`${apiUrl}/projects/close/${projectId}`)
			if (response.data.success)
				dispatch({ type: 'CLOSE_PROJECT' })
		} catch (error) {
			console.log(error)
		}
	}

	const updateProject = async (updatedProject, projectId) => {
		try {
			const response = await axios.patch(`${apiUrl}/projects/update/${projectId}`, updatedProject)
			if (response.data.success) {
				dispatch({ type: 'UPDATE_PRO', payload: response.data.project })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
		}
	}

    const getProjectById = async (projectId) => {
        try {
            const response = await axios.get(`${apiUrl}/projects/${projectId}`);
            if (response.status === 200) {
                dispatch({ type: 'PRODETAILS_LOADED_SUCCESS', payload: response.data });
            }
        } catch (error) {
            console.log(error);
            dispatch({ type: 'PRODETAILS_LOADED_FAIL' });
        }
    }

    const getEmployeesInProject = async (projectId) => {
        try {
            const response = await axios.get(`${apiUrl}/projects/getEmployees/${projectId}`);
            if (response.status === 200) {
                dispatch({ type: 'EMPINPRO_LOADED_SUCCESS', payload: response.data.employees });
            }
        }catch (error) {
            console.log(error);
            dispatch({ type: 'EMPINPRO_LOADED_FAIL' });
        }
    }

    const addEmployeeToProject = async employee => {
        console.log(employee);
        try {
            const response = await axios.post(`${apiUrl}/projects/addemp`, employee)
            if (response.data.success) {
                dispatch({type: 'EMP_ADDED_SUCCESS', payload: response.data.employees})
                return response.data
            }
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: "Server error" };
        }
    }

    const removeEmployeeFromProject = async employeeInProjectId => {
		try {
			const response = await axios.patch(`${apiUrl}/projects/removeemp/${employeeInProjectId}`)
			if (response.data.success)
				dispatch({ type: 'REMOVED_EMP' })
		} catch (error) {
			console.log(error)
		}
	}

    const projectContextData = {
        projectState,
        getProjects,
        findProject,
        createProject,
        closeProject,
        updateProject,
        getProjectById,
        getEmployeesInProject,
        addEmployeeToProject,
        removeEmployeeFromProject,
        addProjectModal,
        setAddProjecrModal,
        addEmployeeModal,
        setAddEmployeeModal,
        employeeDetailsModal,
        setEmployeeDetailsModal,
    }

   return (
      <ProjectContext.Provider value={projectContextData}>
        {children}
    </ProjectContext.Provider>
   );
};

export default ProjectContextProvider;
