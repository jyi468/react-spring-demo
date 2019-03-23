import * as constants from '../../constants/constants';

export interface HandleDrawerOpen {
    type: constants.HANDLE_DRAWER_OPEN;
}

export function handleDrawerOpen(): HandleDrawerOpen {
    return {
        type: constants.HANDLE_DRAWER_OPEN
    }
}