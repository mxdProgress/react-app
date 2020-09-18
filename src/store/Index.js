import { createStore, combineReducers } from 'redux';
//reducer
import configReducer from './reducer/ConfigReducer';
import departMentReducer from './reducer/DepartMentReducer';
import jobRedecer from './reducer/JobRedecer';


const allReducer = {
    config: configReducer,
    depart: departMentReducer,
    job: jobRedecer
}

const rootReducer = combineReducers(allReducer);

const store = createStore(rootReducer);

export default store