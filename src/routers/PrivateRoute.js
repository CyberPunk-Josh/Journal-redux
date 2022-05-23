import { Redirect } from 'react-router-dom';

export const PrivateRoute = ({isAuth, children}) => {
    return isAuth ? children : <Redirect to="/auth/login" />;
};