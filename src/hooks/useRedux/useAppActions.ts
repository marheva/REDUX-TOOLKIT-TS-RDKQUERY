import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { githubActions } from '../../redux/githubReducer/github.slice';

const appActions = {
    ...githubActions,
};

export const useAppActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(appActions, dispatch);
};
