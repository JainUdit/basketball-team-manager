import styled from '@emotion/styled';
import { Grid } from '@material-ui/core';

export const StyledTeamManagerWrapper = styled(Grid)`
    height: 100%;
`

export const StyledTeamComposerWrapper = styled(Grid)`
    height: 100%;

    .inputFields{
        margin: 10px;
        width: 250px;
    }
    .addButton {
        margin: 20px;
    }
    .tableWrapper {
        height: 100%;
        overflow: auto;
        max-height: 250px;
    }
`

export const StyledFirstQuarter = styled(Grid)`
    height: 100%;

    .positionElements {
        border: 1px solid #ccc;
        border-radius: 16px;
        margin: 40px 0px;
        height: 30px;
        padding-top: 5px;
        padding-left: 15px;
    }

    .saveButton {
        margin: 50px 0px;
    }
`