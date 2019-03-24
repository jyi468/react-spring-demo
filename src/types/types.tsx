export interface AppProps {
    classes: any;
}

export interface AppState {
    dashboard: Dashboard;
}

export interface Dashboard {
    currentCoinName: string;
    currency: string;
    sidebar: SideBar;
    minuteData: MarketData[];
}

export interface SideBar {
    coins: CoinData[];
    isOpen: boolean;
}

export interface CoinData {
    id: string;
    name: string;
    fullName: string;
    price: number;
    symbol: string;
}

export interface CoinApi {
    Data: Object[]
}

export interface MinuteApiData {
    Data: MarketData[];
}

export interface MarketData {
    time: number;
    close: number;
    high: number;
    low: number;
    volumefrom: number;
    volumeto: number;
}