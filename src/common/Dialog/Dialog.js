import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const ResponsiveDialog = ({ title, description, isButton, href='#', btn_content='', open, setOpen }) => {
    
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {description}
                </DialogContentText>
            </DialogContent>
            {isButton && (
                <DialogActions>
                    <Button autoFocus component='a' href={href}>
                        {btn_content}
                    </Button>
                </DialogActions>
            )}
        </Dialog>
    );
}
