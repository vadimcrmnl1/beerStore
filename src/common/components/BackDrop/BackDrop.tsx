import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {useAppSelector} from "app/store";
import {selectIsLoading} from "app/selectors";

export const SimpleBackdrop = () => {
    const isLoading = useAppSelector(selectIsLoading)

    return (
        <div>
            <Backdrop
                sx={{color: 'red', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={isLoading}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
        </div>
    );
}
