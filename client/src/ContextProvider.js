import React, {useReducer} from 'react';

import AppContext from "./contexts/appContext";
import reducer from "./store/reducer";
import {initialState} from "./store/store";

const ContextProvider = props => {

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider value={{state, dispatch}}>
			{props.children}
		</AppContext.Provider>
	);
};

export default ContextProvider;