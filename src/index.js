import reactDom from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from './reduxF/store'

reactDom.render
    (<Provider store={store}>
        <App></App>
    </Provider>, document.getElementById('root'))