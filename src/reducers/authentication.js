import {
    STEP_INCREMENT,
    STEP_DECREMENT,
    FORM_CHANGED
} from "../actions/authentication"


const initialState = {
	activeStep: 0,
	form: {}
}
export default (state=initialState, action) => {
	switch(action.type){
		case STEP_INCREMENT:
			return Object.assign({},{
				activeStep: state.activeStep + 1,
				form: {...state.form},
			});
		case STEP_DECREMENT:
			return Object.assign({},{
				activeStep: state.activeStep - 1,
				form: {...state.form},
			});
		case FORM_CHANGED:
			return Object.assign({},{
				...state,
				form: {
					...state.form,
					[action.key]: action.value,
				}
			})
		default:
			return state;
	}
}
