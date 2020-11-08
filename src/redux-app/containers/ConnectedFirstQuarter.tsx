import { connect } from 'react-redux';
import { FirstQuarter } from "../components/FirstQuarter";
import { getPlayerDetails } from "../selectors/getPlayerDetails";
import { IPlayerDetailsIdentifier } from "../interfaces/IPlayerDetailsIdentifier";
import { IBasketballTeamManagerGlobalState } from "../interfaces/IBasketballTeamManagerGlobalState";

interface IStateProps {
    players: Array<IPlayerDetailsIdentifier>;
}

const mapStateToProps = (state: IBasketballTeamManagerGlobalState): IStateProps => ({
    players: getPlayerDetails(state)
})

export const ConnectedFirstQuarter = connect(mapStateToProps)(FirstQuarter);