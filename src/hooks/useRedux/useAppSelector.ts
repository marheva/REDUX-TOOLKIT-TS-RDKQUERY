import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppStatePropsType } from '../../redux/rootReducer';

export const useAppSelector: TypedUseSelectorHook<AppStatePropsType> = useSelector;
