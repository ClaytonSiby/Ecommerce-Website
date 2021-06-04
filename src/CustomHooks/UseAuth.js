import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const useAuth = props => {
    const { currentUser } = useSelector(mapState);
    useEffect(() => {
        if(!currentUser) {
            props.history.push('/login');
        }
    }, [currentUser])
    console.log(currentUser);
    return currentUser;
}

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser
    }
}

export default useAuth;
