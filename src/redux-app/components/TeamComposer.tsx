import * as React from 'react';
import {
    Button,
    Checkbox,
    FormControl,
    Input,
    InputLabel,
    ListItemText,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Positions } from '../enums';
import { StyledTeamComposerWrapper } from './Style';
import { ITeamComposerProps } from '../interfaces/ITeamComposerProps';

export const TeamComposer = (props: ITeamComposerProps): React.ReactElement => {
    const [firstName, setFirstName] = React.useState<string>('');
    const [lastName, setLastName] = React.useState<string>('');
    const [height, setHeight] = React.useState<number | string>('');
    const [positions, setPositions] = React.useState<Array<Positions>>([] as Array<Positions>);
    const [heightError, setHeightError] = React.useState<boolean>(false);
    const [blankError, setBlankError] = React.useState<boolean>(false);

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setBlankError(false);
        setFirstName(event.target.value);
    }
    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setBlankError(false);
        setLastName(event.target.value);
    }
    const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setBlankError(false);
        const numbers: RegExp = /^[0-9\b]+$/;
        if (event.target.value === '' || numbers.test(event.target.value)) {
            setHeight(event.target.value);
            setHeightError(false);
        }
        else setHeightError(true);
    }
    const handlePositionChange = (event: React.ChangeEvent<{ value: unknown }>): void => {
        setBlankError(false);
        setPositions(event.target.value as Array<Positions>);
    }
    const handleSubmitClick = (): void => {
        if (firstName && lastName && height && positions.length !== 0) {
            props.onAddButtonClick({
                firstName,
                lastName,
                height: Number(height),
                position: positions

            });
            setFirstName('');
            setLastName('');
            setHeight('');
            setPositions([] as Array<Positions>);
            setBlankError(false);
        }
        else {
            setBlankError(true);
        }
        props.showFirstQuarterTab(props.players);
    }

    const renderTable = (): React.ReactElement => (
        <TableContainer className="tableWrapper">
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Height</TableCell>
                        <TableCell align="left">Position(s)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.players.map((player) => (
                        <TableRow key={player.id}>
                            <TableCell align="left">{`${player.firstName} ${player.lastName}`}</TableCell>
                            <TableCell align="left">{player.height}</TableCell>
                            <TableCell align="left">{player.position.join(', ')}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

    return (
        <StyledTeamComposerWrapper container direction="column" justify="center" alignItems="center">
            <TextField required id="firstName" className="inputFields" error={blankError} label="First Name" value={firstName} onChange={handleFirstNameChange} />
            <TextField required id="lastName" className="inputFields" error={blankError} label="Last Name" value={lastName} onChange={handleLastNameChange} />
            <TextField required id="height" className="inputFields" error={heightError || blankError} helperText={heightError && 'Height must be a number'} label="Height" value={height} onChange={handleHeightChange} />
            <FormControl className="inputFields" error={blankError}>
                <InputLabel id="position-name-label">Position</InputLabel>
                <Select
                    labelId="position-label"
                    id="position"
                    multiple
                    value={positions}
                    onChange={handlePositionChange}
                    input={<Input />}
                    renderValue={(selected) => (selected as string[]).join(', ')}
                >
                    {Object.values(Positions).map((position) => (
                        <MenuItem key={position} value={position}>
                            <Checkbox checked={positions.indexOf(position) > -1} />
                            <ListItemText primary={position} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button variant="contained" color="primary" className="addButton" onClick={handleSubmitClick}>
                Add Player
            </Button>
            {blankError && <Alert className="inputFields" severity="error">Please, fill all the details!</Alert>}
            {renderTable()}
        </StyledTeamComposerWrapper>
    )
}