import {AppAction} from "../actions/actions";
import {AppState, CoinData} from "../types/types";
import * as constants from "../constants/constants";

export function app(state: AppState, action: AppAction) {
    switch (action.type) {
        case constants.RECEIVE_COIN_LIST:
            let data: any = action.json.Data;
            let coins: CoinData[] = data.map((coin: any) => ({
                id: coin.CoinInfo.Id,
                name: coin.CoinInfo.Name,
                fullName: coin.CoinInfo.FullName,
                price: coin.RAW.USD.PRICE
            }));

            return {...state, coins: coins};
        case constants.RECEIVE_MINUTE_DATA:
            return state;
    }
    return state;
}

