import { UseAuth } from './../CustomHooks';
import { withRouter } from 'react-router-dom';

const WithAuth = (props) => UseAuth(props) && props.children;

export default withRouter(WithAuth);
