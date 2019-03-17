import {AppState, CoinData, MarketData} from "../types/types";

export class AppStateImpl implements AppState {
    currentCoinId: string;
    currency: string;
    coins: CoinData[];
    minuteData: MarketData[];

    constructor(currentCoinId="1182", currency="USD", coins=[], minuteData=[]) {
        this.currentCoinId = currentCoinId;
        this.currency = currency;
        this.coins = coins;
        this.minuteData = minuteData;
    }
}