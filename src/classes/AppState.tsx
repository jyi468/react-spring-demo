import {AppState, Dashboard} from "../types/types";

export class AppStateImpl implements AppState {
    dashboard: Dashboard;

    constructor(dashboard = {
        currentCoinId: "1182",
        currency: "USD",
        minuteData: [],
        sidebar: {coins: [], isOpen: false}
    }) {
        this.dashboard = dashboard;
    }
}