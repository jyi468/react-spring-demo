import {Action} from 'redux';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {AppState} from '../../types/types';
import Coins from './Coins';
import {handleDrawerClose} from "./CoinsActions";
import {handleDrawerOpen} from "../headerBar/HeaderBarActions";
import {fetchMinuteData} from "../../actions/actions";

// We will use connect function that will take original App component and turn it into a container using
// mapStateToProps - changes the data from current store to to shape our component needs - mapper
// mapDispatchToProps - creates callback props to pump actions to our store using a given dispatch function

export const mapStateToProps = (state: AppState) => ({
    isOpen: state.dashboard.sidebar.isOpen,
    coins: state.dashboard.sidebar.coins
});

// Takes in a dispatcher function. Dispatcher functions can pass actions to our store for updates
// Create callbacks that will call the dispatcher as necessary
export function mapDispatchToProps(dispatch: ThunkDispatch<AppState, void, Action>) {
    return {
        fetchMinuteData: (name: string) => dispatch(fetchMinuteData(name)),
        handleDrawerClose: () => dispatch(handleDrawerClose()),
        handleDrawerOpen: () => dispatch(handleDrawerOpen())
    };
}

// Connect will take mapStateToProps amd mapDispatchToProps and return another function we can use to wrap our component
export default connect(mapStateToProps, mapDispatchToProps)(Coins);