import { IPlayerDetailsIdentifier } from "../interfaces/IPlayerDetailsIdentifier";
import { IBasketballTeamManagerState } from "../interfaces/IBasketballTeamManagerState";

export const createTeamManagerInstance = (): IBasketballTeamManagerState => ({
    players: [] as Array<IPlayerDetailsIdentifier>
})