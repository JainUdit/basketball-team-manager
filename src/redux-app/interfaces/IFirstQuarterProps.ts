import { IPlayerDetails } from "./IPlayerDetails";
import { IPlayerDetailsIdentifier } from "./IPlayerDetailsIdentifier";
/**
 * This interface defines props for FirstQuarter component.
 */
export interface IFirstQuarterProps {
    players: Array<IPlayerDetailsIdentifier>;
    onSaveButtonClick: (playerDetails: IPlayerDetails) => void;
}