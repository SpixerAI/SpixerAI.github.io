import React from 'react';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import FormControl from '@mui/material/FormControl';

import { TextField } from '@mui/material';


export function secondsToTimeStr(seconds) {
  const minutes_str = Math.floor(seconds / 60).toString().padStart(2, 0)
  const seconds_str = (seconds % 60).toString().padStart(2, 0)
  return `${minutes_str}:${seconds_str}`
}

export function getExecutionStatusText(execStatus) {
  if (execStatus == "DONE") return "Finished"
  if (execStatus == "ABORTED") return "Aborted"
  if (execStatus == "DOING") return "In Process"
  throw `Invalid execStatus = ${execStatus}`
}

export const isEqual = (value1, value2) => {
  if (value1 === value2) {
    return true;
  }

  if (value1 === null || value2 === null || typeof value1 !== 'object' || typeof value2 !== 'object') {
    return false;
  }

  if (Array.isArray(value1) !== Array.isArray(value2)) {
    return false;
  }

  const keys1 = Object.keys(value1);
  const keys2 = Object.keys(value2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key) || !isEqual(value1[key], value2[key])) {
      return false;
    }
  }
  return true;
}


export function DeleteConfirmation({open, setOpen, onDelete, deleteText}) {

  deleteText = deleteText || "Confirm Deleting"

  const handleClose = () => { setOpen(false); }

  return (
      <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
        <DialogContent>
          <DialogContentText>
            {deleteText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {handleClose() ; onDelete(); }}>Yes, Delete</Button>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
  );
}


export function TextPromptDialog({open, setOpen, onEnter, promptText, yesButtonText}) {

  const handleClose = () => { setOpen(false); }

  const [text, setText] = React.useState("")

  const onConfirm = () => { handleClose() ; onEnter(text); setText(""); }

  return (
      <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
        <form onSubmit={onConfirm} >
          <DialogContent>
            <DialogContentText>
              <div>
                  <FormControl sx={{ m: 0, }}>
                    <TextField sx={{}} label={promptText}
                      variant="outlined" value={text}
                      onChange={e => setText(e.target.value)} />
                  </FormControl>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button type="submit" >{yesButtonText}</Button>
            <Button onClick={handleClose} autoFocus>
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Dialog>
  );
}
