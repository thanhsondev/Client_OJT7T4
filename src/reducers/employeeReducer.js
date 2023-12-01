export const productReducer = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case 'EMP_LOADED_SUCCESS':
            return {
                ...state,
                products: payload,
                isLoading: false
            }
        case 'EMP_LOADED_FAIL':
            return {
                ...state,
                payload: [],
                isLoading: false
            }
        case 'EMP_CREATED_SUCCESS':
           return {
                ...state,
                employees: [...state.employees, payload]
            }
        case 'DELETE_EMP':
            return {
                 ...state,
                 employees: state.employees.filter(employee => employee._id !== payload)
            }
        case 'FIND_EMP':
            return { ...state, employee: payload }
        case 'UPDATE_EMP':
            const newEmployee = state.employees.map(employee =>
                employee._id === payload._id ? payload : employee
            )
            return {
                ...state,
                employees: newEmployee
            }

        default:
            return state
    }
}