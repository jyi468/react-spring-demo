import {CoinData} from '../../types/types';
import * as React from 'react';

interface CoinsProps {
    coins: CoinData[]
}

export const Coins: React.FC<CoinsProps> = ({coins: CoinData}) => {
    return (
        <div></div>
    );
};