import {ADD_PROJECT,
        FORM_PROJECT, 
        GET_PROJECTS, 
        SHOW_ERR_FORM,
        CURRENT_PROJECT,
        DELETE_PROJECT
    } from '../types'

export default (state, action) => {
    switch(action.type) {
        case FORM_PROJECT:
            return {
                ...state,
                formulario: true
            }
        case GET_PROJECTS:
            return {
                ...state,
                proyectos: action.payload
            }
        case ADD_PROJECT:
            return {
                ...state,
                proyectos : [...state.proyectos, action.payload],
                formulario: false,
                errorform: false 
            }
        case SHOW_ERR_FORM:
            return{
                ...state,
                errorform: true
            }
        case CURRENT_PROJECT:
            return {
                ...state,
                proyecto: state.proyectos.filter(proyecto => proyecto.id === action.payload )
            }
        case DELETE_PROJECT:
            return {
                ...state,
                proyectos: state.proyectos.filter(proyecto => proyecto.id !== action.payload ),
                proyecto: null
            }
        default:
            return state;
    }
}