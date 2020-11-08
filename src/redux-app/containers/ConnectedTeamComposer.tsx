import { Dispatch } from "redux";
import { connect } from 'react-redux';
import { TeamComposer } from "../components/TeamComposer";
import { addPlayer } from "../actions/TeamManagerActions";
import { IPlayerDetails } from "../interfaces/IPlayerDetails";
import { getPlayerDetails } from "../selectors/getPlayerDetails";
import { IPlayerDetailsIdentifier } from "../interfaces/IPlayerDetailsIdentifier";
import { IBasketballTeamManagerGlobalState } from "../interfaces/IBasketballTeamManagerGlobalState";

interface IStateProps {
    players: Array<IPlayerDetailsIdentifier>;
}

interface IDispatchProps {
    onAddButtonClick: (playerDetails: IPlayerDetails) => void;
}

interface IOwnProps {
    showFirstQuarterTab: (players: Array<IPlayerDetailsIdentifier>) => void;
}

const mapStateToProps = (state: IBasketballTeamManagerGlobalState): IStateProps => ({
    players: getPlayerDetails(state)
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IOwnProps): IDispatchProps & IOwnProps => ({
    onAddButtonClick: (playerDetails: IPlayerDetails) => dispatch(addPlayer(playerDetails)),
    showFirstQuarterTab: (players: Array<IPlayerDetailsIdentifier>) => ownProps.showFirstQuarterTab(players)
})

export const ConnectedTeamComposer = connect(mapStateToProps, mapDispatchToProps)(TeamComposer);