import thunk,{logger,crashReporter} from './../middleware/thunk';

const middleware = [
    thunk,logger,crashReporter
];
export default middleware;
