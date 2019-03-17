export interface AppState {
    currentCoinId: string;
    currency: string;
    coins: CoinData[];
    minuteData: MarketData[];
}

export interface AppProps {

}

export interface CoinData {
    id: string;
    name: string;
    fullName: string;
    price: number;
}

export interface CoinApi {
    Data: Object[]
}

export interface MarketData {
    time: number;
    close: number;
    high: number;
    low: number;
    volumefrom: number;
    volumeto: number;
}