import { BaseAction } from "./BaseAction";
import { ADD_PLAYER } from "../constants";
import { IPlayerDetails } from "../interfaces/IPlayerDetails";
import { IPlayerDetailsIdentifier } from "../interfaces/IPlayerDetailsIdentifier";

/**
 * These interfaces defines type for actions.
 */
export interface IAddPlayer extends BaseAction<IPlayerDetailsIdentifier> { }

let playerId: number = 0;
export const addPlayer: (playerDetails: IPlayerDetails) => IAddPlayer = (playerDetails) => ({
    type: ADD_PLAYER,
    payload: { id: ++playerId, firstName: playerDetails.firstName, lastName: playerDetails.lastName, height: playerDetails.height, position: playerDetails.position }
});
