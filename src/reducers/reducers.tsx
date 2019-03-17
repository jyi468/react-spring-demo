import {AppAction} from "../actions/actions";
import {AppState} from "../types/types";
import * as constants from "../constants/constants";

export function app(state: AppState, action: AppAction) {
    switch (action.type) {
        case constants.RECEIVE_COIN_LIST:
            return state;
        case constants.RECEIVE_MINUTE_DATA:
            return state;
    }
    return state;
}

