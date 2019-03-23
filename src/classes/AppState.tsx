import {AppState, CoinData, Dashboard, MarketData} from "../types/types";

export class AppStateImpl implements AppState {
    dashboard: Dashboard;

    constructor(dashboard = {currentCoinId: "1182", currency: "USD", coins: [], minuteData: []}) {
        this.dashboard = dashboard;
    }
}