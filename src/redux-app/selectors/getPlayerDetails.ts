import { IPlayerDetailsIdentifier } from "../interfaces/IPlayerDetailsIdentifier";
import { IBasketballTeamManagerGlobalState } from "../interfaces/IBasketballTeamManagerGlobalState";

export const getPlayerDetails = (state: IBasketballTeamManagerGlobalState): Array<IPlayerDetailsIdentifier> => {
    return state.domain.players;
}