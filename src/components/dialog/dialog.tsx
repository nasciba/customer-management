import {
  Button,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface DialogProps {
  customerToDelete?: string;
  open: boolean;
  text: string;
  title: string;
  handleClose: () => void;
  handleSubmit: () => Promise<void>;
}
const Dialog = ({
  open,
  text,
  title,
  handleClose,
  handleSubmit,
}: DialogProps) => {
  return (
    <MuiDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
          autoFocus
        >
          Confirm
        </Button>
      </DialogActions>
    </MuiDialog>
  );
};
export default Dialog;
