import * as React from 'react';
import {
    Grid,
    MenuItem,
    Button,
    FormControl,
    InputLabel,
    Select
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Positions } from '../enums';
import { StyledFirstQuarter } from './Style';
import { IFirstQuarterProps } from '../interfaces/IFirstQuarterProps';


interface IPlayersData {
    position: Positions;
    playerId: number;
}

export const FirstQuarter = (props: IFirstQuarterProps): React.ReactElement => {
    const [playersFinalised, setPlayersFinalised] = React.useState<boolean>(false);
    const [selectAllPlayersWarning, setSelectAllPlayersWarning] = React.useState<boolean>(false);
    const [error, setError] = React.useState<Array<Positions>>([] as Array<Positions>);
    const [playersList, setPlayersList] = React.useState<Array<IPlayersData>>([] as Array<IPlayersData>);

    const handleError = (): void => {
        const playerIdList: Array<number> = playersList.map(player => player.playerId);
        const duplicateId: number | undefined = playerIdList.find((playerId, index) => playerIdList.indexOf(playerId) !== index);

        if (duplicateId) {
            const redundantData: Array<Positions> = [] as Array<Positions>;
            playersList.forEach(player => {
                player.playerId === duplicateId && redundantData.push(player.position)
            });
            redundantData && setError(redundantData);
        } else {
            setError([] as Array<Positions>);
        }
    }

    const addPlayers = (
        playerId: number,
        position: Positions,
        playersData: Array<IPlayersData>
    ): Array<IPlayersData> => {
        for (let index = 0; index < playersList.length; index++) {
            if (playersData[index].position === position) {
                playersData.splice(index, 1, { playerId, position });
                return playersData;
            }
        }
        playersData.push({ playerId, position })
        return playersData;
    }

    const handlePlayerChange = (event: React.ChangeEvent<{ value: unknown }>, position: Positions): void => {
        const playerId: number = event.target.value as number;
        let playersData: Array<IPlayersData> = playersList;

        if (playersList.length === 0) {
            playersData.push({
                playerId,
                position
            });
        } else {
            playersData = addPlayers(playerId, position, playersData);
        }
        setPlayersList(playersData);
        setPlayersFinalised(false);
        setSelectAllPlayersWarning(false);
        //Error Handling
        handleError();
    }

    const handleSaveButtonClick = (): void => {
        if (playersList.length === 5) {
            setPlayersFinalised(true);
            setSelectAllPlayersWarning(false);
        } else {
            setSelectAllPlayersWarning(true);
            setPlayersFinalised(false)
        }
    }

    return (
        <StyledFirstQuarter container direction="column" justify="center" alignItems="center">
            <Grid container direction="row" justify="space-evenly" alignItems="center">
                {Object.values(Positions).map((position, index) => (
                    <Grid container direction="column" key={`${position}_wrapper`} item sm={2}>
                        <span className="positionElements">{position}</span>
                        <FormControl>
                            <InputLabel id={`${position}-name-label`}>{`Player ${index + 1}`}</InputLabel>
                            <Select
                                id={position}
                                defaultValue=""
                                error={error.includes(position)}
                                onChange={(event) => handlePlayerChange(event, position)}
                            >
                                {props.players.map(player => (
                                    player.position.includes(position) && <MenuItem key={player.id} value={player.id}> {`${player.firstName} ${player.lastName}`}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                ))}
            </Grid>
            <Button variant="contained" color="primary" className="saveButton" onClick={handleSaveButtonClick}>
                Save
            </Button>
            {error.length !== 0 && <Alert severity="error">Player can be selected only once.</Alert>}
            {selectAllPlayersWarning && <Alert severity="warning">Please, select all the players before moving forward.</Alert>}
            {playersFinalised && <Alert severity="success">Teams selection done for first quarter. All the best!</Alert>}
        </StyledFirstQuarter>
    )
}