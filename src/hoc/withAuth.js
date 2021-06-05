import { useAuth } from './../CustomHooks';

// get access to the history of the react-router
import { withRouter } from 'react-router-dom';

// if user is registered, return the page.
const WithAuth = props => useAuth(props) && (props.children);

export default withRouter(WithAuth);
