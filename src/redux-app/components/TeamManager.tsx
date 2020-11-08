import * as React from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import { StyledTeamManagerWrapper } from './Style';
import { ConnectedTeamComposer } from '../containers/ConnectedTeamComposer';
import { ConnectedFirstQuarter } from '../containers/ConnectedFirstQuarter';
import { IPlayerDetailsIdentifier } from '../interfaces/IPlayerDetailsIdentifier';

export const TeamManager = (): React.ReactElement => {
    const [tabValue, setTabValue] = React.useState<number>(0);
    const [disable, setDisable] = React.useState<boolean>(true);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setTabValue(newValue);
    };

    const handleFirstQuarterTab = (players: Array<IPlayerDetailsIdentifier>) => {
        if (players.length >= 4) {
            setDisable(false);
        }
    }

    return (
        <StyledTeamManagerWrapper container direction="column" justify="center" alignItems="center">
            <AppBar position="static">
                <Tabs value={tabValue} onChange={handleChange}>
                    <Tab id="composeTeamTab" label="Compose Team" />
                    <Tab id="firstQuarterTab" label="First Quarter" disabled={disable} />
                </Tabs>
            </AppBar>
            {tabValue === 0
                ? <ConnectedTeamComposer showFirstQuarterTab={handleFirstQuarterTab} />
                : <ConnectedFirstQuarter />
            }
        </StyledTeamManagerWrapper>
    )
};