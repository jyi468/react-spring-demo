import {Action} from 'redux';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {AppState, CoinData, MarketData} from '../../types/types';
import MinuteData from './MinuteData';

// We will use connect function that will take original App component and turn it into a container using
// mapStateToProps - changes the data from current store to to shape our component needs - mapper
// mapDispatchToProps - creates callback props to pump actions to our store using a given dispatch function

export const mapStateToProps = (state: AppState) => ({
    data: state.dashboard.minuteData,
    name: state.dashboard.currentCoinName
});

// Takes in a dispatcher function. Dispatcher functions can pass actions to our store for updates
// Create callbacks that will call the dispatcher as necessary
export function mapDispatchToProps(dispatch: ThunkDispatch<AppState, void, Action>) {
    return {};
}

// Connect will take mapStateToProps amd mapDispatchToProps and return another function we can use to wrap our component
export default connect(mapStateToProps, mapDispatchToProps)(MinuteData);