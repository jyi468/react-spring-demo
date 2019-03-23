import * as constants from '../constants/constants';
import {Dispatch} from "redux";
import {CoinApi} from "../types/types";
import {HandleDrawerOpen} from "../components/headerBar/HeaderBarActions";
import {HandleDrawerClose} from "../components/coins/CoinsActions";

const apiString = '&api_key=f0c3a82f98f5d0c98d84f5ac3e8660bb36e503c8dfca28a74d458871c2db1d24';

export type AppAction = DashboardAction;
export type DashboardAction = DashboardApiAction | DashboardUiAction;
export type DashboardApiAction = ReceiveCoinList | ReceiveMinuteData;
export type DashboardUiAction = HandleDrawerOpen | HandleDrawerClose;

export interface ReceiveCoinList {
    type: constants.RECEIVE_COIN_LIST;
    json: CoinApi;
}

export interface ReceiveMinuteData {
    type: constants.RECEIVE_MINUTE_DATA;
    json: object;
}

/**
 * Minute historical Data (goes back max of 7 days)
 *
 * @returns {(dispatch: Dispatch) => any}
 */
export function fetchMinuteData(coin: string) {
    return (dispatch: Dispatch) => {
        return fetch(`https://min-api.cryptocompare.com/data/histominute?fsym='${coin}&tsym=GBP&limit=100${apiString}`)
            .then(response => response.json())
            .then((json) => {
                dispatch(receiveMinuteData(json))
            });
    }
}

export function receiveCoinList(json: CoinApi): ReceiveCoinList {
    return {
        type: constants.RECEIVE_COIN_LIST,
        json
    }
}

export function receiveMinuteData(json: Object): ReceiveMinuteData {
    return {
        type: constants.RECEIVE_MINUTE_DATA,
        json
    };
}

/**
 * Fetch top 100 coins by Market Cap
 *
 * @returns {(dispatch: Dispatch) => any}
 */
export function fetchCoinList() {
    return (dispatch: Dispatch) => {
        return fetch(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD${apiString}`)
            .then(response => response.json())
            .then((json) => {
                dispatch(receiveCoinList(json))
            });
    }
}
