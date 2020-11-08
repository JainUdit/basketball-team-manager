import { Positions } from "../enums";
/**
 * This interface defines player details
 */
export interface IPlayerDetails {
    firstName: string;
    lastName: string;
    height: number;
    position: Array<Positions>;
}