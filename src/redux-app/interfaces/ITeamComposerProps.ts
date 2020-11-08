import { IPlayerDetails } from "./IPlayerDetails";
import { IPlayerDetailsIdentifier } from "./IPlayerDetailsIdentifier";
/**
 * This interface defines props for TeamComposer component.
 */
export interface ITeamComposerProps {
    players: Array<IPlayerDetailsIdentifier>;
    onAddButtonClick: (playerDetails: IPlayerDetails) => void;
    showFirstQuarterTab: (players: Array<IPlayerDetailsIdentifier>) => void;
}