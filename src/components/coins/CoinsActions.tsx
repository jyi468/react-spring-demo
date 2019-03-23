import * as constants from '../../constants/constants';

export interface HandleDrawerClose {
    type: constants.HANDLE_DRAWER_CLOSE;
}

export function handleDrawerClose(): HandleDrawerClose {
    return {
        type: constants.HANDLE_DRAWER_CLOSE
    }
}