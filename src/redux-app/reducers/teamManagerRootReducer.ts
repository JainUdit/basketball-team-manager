import { Reducer } from "redux";
import { ADD_PLAYER } from "../constants";
import { BaseAction } from "../actions/BaseAction";
import { createTeamManagerInstance } from "../service/createTeamManagerInstance";
import { IPlayerDetailsIdentifier } from "../interfaces/IPlayerDetailsIdentifier";
import { IBasketballTeamManagerState } from "../interfaces/IBasketballTeamManagerState";

export const teamManagerRootReducer: Reducer<IBasketballTeamManagerState, BaseAction<any>> = (
    state: IBasketballTeamManagerState = createTeamManagerInstance(),
    action: BaseAction<any>
): IBasketballTeamManagerState => {
    switch (action.type) {
        case ADD_PLAYER:
            const players: Array<IPlayerDetailsIdentifier> = state.players.concat(action.payload);
            return { ...state, players };

        default:
            return state;
    }
}