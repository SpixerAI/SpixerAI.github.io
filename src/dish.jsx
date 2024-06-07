import './main.css';

import {Header} from './header';
import {api} from './library';
import {getExecutionStatusText, isEqual} from './utils'
import {DEFAULT_FOOD_IMAGE} from './configs';
import {DeleteConfirmation} from "./utils"


import React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader'

import IconButton from '@mui/material/IconButton';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import RotateRightIcon from '@mui/icons-material/RotateRight';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import Alert from '@mui/material/Alert';

import { CardMedia, Menu, MenuItem, Stack } from '@mui/material';



export function Dish({dishId}) {

  const [stepsList, setStepsList] = React.useState([])
  const [stepIdCounter, setStepIdCounter] = React.useState(1)
  const [nameInfo, setNameInfo] = React.useState({})
  const [executionInfo, setExecutionInfo] = React.useState({
      status: "NOT_DONE",
      steps_progress: {}})
  const [duration, setDuration] = React.useState(0)
  const [headerInfo, setHeaderInfo] = React.useState(null)

  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null)

  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false)
  const [isEdit, setIsEdit] = React.useState(false)

  console.log(`e.status = ${executionInfo.status}`)

  const prepInstructions = stepsList.filter(step => step.type == "DISPENSE_BOX")

  let executionInfoTimerLoop = null

  const openMenu = (event) => { setMenuAnchorEl(event.currentTarget); }

  const closeMenu = () => { setMenuAnchorEl(null); }

  const deleteDish = function() {
    console.log("deleteDish")
  }

  const executionInfoTimerLoopFunc = function(execution_info) {
    if (execution_info.status != "DONE" && execution_info.status != "ABORTED") {
      executionInfoTimerLoop = setTimeout(function() {
        api("/get_execution_info", {dish_id: dishId}, function(result) {
          // setExecutionInfo(einfo => isEqual(result.execution_info, einfo) ? einfo : result.execution_info)
          setExecutionInfo(result.execution_info)
          executionInfoTimerLoopFunc(result.execution_info)
        })
      }, 500)
    }
  }

  const getDuration = function(steps) {
    return steps.length > 0 ? steps[steps.length - 1].time : 0
  }

  React.useEffect(function() {
    api("/get_dish", {dish_id: dishId}, function(result) {
      if ("dish" in result) {
        setStepIdCounter(result.dish.id_counter)
        setStepsList(result.dish.steps)
        const {name, description, image} = result.dish
        setNameInfo({name, description, image})
        setDuration(getDuration(result.dish.steps))
      }
      if ("execution_info" in result) {
        setExecutionInfo(result.execution_info)
        executionInfoTimerLoopFunc(result.execution_info)
      }
    })
    return () => clearTimeout(executionInfoTimerLoop)
  }, [])

  const updateDishStepsApi = function(updatedValues) {
    api("/edit_dish", {
      dish_id: dishId,
      dish: {
        steps: stepsList,
        id_counter: stepIdCounter, ...nameInfo, ...updatedValues}})
  }

  const onStepChange = function(step) {
    const newListBefore = stepsList.filter(x => ((x.time <= step.time) && (x.id != step.id)))
    const newListAfter = stepsList.filter(x => ((x.time > step.time) && (x.id != step.id)))
    const newSteps = [...newListBefore, step, ...newListAfter]
    setDuration(getDuration(newSteps))
    setStepsList(newSteps)
    updateDishStepsApi({steps: newSteps})
  }

  const onStepDelete = function(step_id) {
    const newSteps = stepsList.filter(step => step.id != step_id)
    setDuration(getDuration(newSteps))
    setStepsList(newSteps)
    updateDishStepsApi({steps: newSteps})
  }

  const addStep = function() {
    const time = stepsList.length == 0 ? 0 : stepsList[stepsList.length-1].time
    const newStep = {time: time, id: stepIdCounter, type: "NOP", is_edit: true}
    const newSteps = [...stepsList, newStep]
    setDuration(getDuration(newSteps))
    setStepsList(newSteps)
    setStepIdCounter(x => x+1)
  }

  const createCopy = function() {
    api("/copy_dish", {dish_id: dishId}, function(result) {
      window.location.href = '#/dish/' + result.new_dish_id
    })
  }

  const startExecution = function() {
    api("/start_execution", {dish_id: dishId,
                             local_start_time: (Date.now() / 1000)}, function(result) {
      window.location.href = '#/dish/' + result.new_dish_id
    })
  }

  const abortExecution = function() {
    api("/abort_execution", {dish_id: dishId}, function(result) {
    })
  }

  return (<>
    <Header dishId={dishId} execStatus={executionInfo.status} startTime={executionInfo.local_start_time} duration={duration} />

    <div style={{margin: "15px"}} >

      { (executionInfo.status == "DONE" || executionInfo.status == "ABORTED" || executionInfo.status == "DOING") && (
      <Alert icon={executionInfo.status == "DOING" ? <RotateRightIcon className="rotating-icon" /> : undefined} severity="success" style={{margin: "10px 0px"}} >
        Cooking {getExecutionStatusText(executionInfo.status)}
        <div>Started on {executionInfo.start_time_str}</div>
        {(executionInfo.status == "DONE" || executionInfo.status == "ABORTED") && (
          <div>Finished on {executionInfo.end_time_str}</div>
        )}
      </Alert>
      )}

      <Stack 
        direction="row" 
        justifyContent="space-between" 
        alignItems="center" 
        spacing={2}
        sx={{ width: '100%', margin: "20px 0px" }}
      >
        <Typography variant="h6">
          <Typography>
            <Typography variant="h5" component="div">
              {nameInfo.name}
            </Typography>
            <Typography variant="body2" style={{marginBottom: "7px"}} color="text.secondary">
              {nameInfo.description}
            </Typography>
          </Typography>


        </Typography>
        <IconButton edge="end" onClick={ openMenu } >
          <MoreVertIcon />
        </IconButton>
      </Stack>


      <Card>


        {false && (
          <CardHeader
            sx={{paddingBottom: "0px", marginBottom: "0px"}}
            avatar={

              <Typography>
                <Typography variant="h5" component="div">
                  {nameInfo.name}
                </Typography>
                <Typography variant="body2" style={{marginBottom: "7px"}} color="text.secondary">
                  {nameInfo.description}
                </Typography>
              </Typography>

            }
            action={
              <IconButton aria-label="settings"
                          onClick={ openMenu }  >
                <MoreVertIcon />
              </IconButton>
            }
          />
        )}

        <Menu
          anchorEl={menuAnchorEl}
          keepMounted
          open={Boolean(menuAnchorEl)}
          onClose={closeMenu}
        >
          <MenuItem onClick={() => {closeMenu(); setIsEdit(true); }}>Edit</MenuItem>
          <MenuItem onClick={() => { closeMenu(); setDeleteDialogOpen(true); }}>Delete</MenuItem>
          <MenuItem onClick={() => { closeMenu(); createCopy(); }}>Copy</MenuItem>
        </Menu>

      <DeleteConfirmation open={deleteDialogOpen} setOpen={setDeleteDialogOpen} onDelete={deleteDish} deleteText={"Confirm deleting `" + nameInfo.name + "`"} />

        <CardMedia
          component="img"
          height="180"
          image={nameInfo.image || DEFAULT_FOOD_IMAGE}
          alt={nameInfo.name}
        />
      </Card>

      {isEdit && (
        <Dialog open={isEdit} onClose={() => {setIsEdit(false)}} >
          <DialogContent>
          </DialogContent>
        </Dialog>
      )}

      {prepInstructions.length > 0 && (
        <div style={{marginTop: "20px"}} >
          <Typography variant="h6" style={{margin: "5px 0px"}} >
            Preparation:
          </Typography>
          {prepInstructions.map((step, index) => (
            <Typography style={{margin: "3px 0px"}} >{index+1}. Fill Box{step.box_number} with {step.name}.</Typography>
          ))}
        </div>
      )}

      <div style={{marginTop: "30px"}} >
        
        { (executionInfo.status == "NOT_DONE" || executionInfo.status == "DONE" || executionInfo.status == "ABORTED") && (
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            endIcon={<PlayArrowIcon />}
            onClick={startExecution}
          >
            Start {executionInfo.status == "NOT_DONE" ? "" : "Again"}
          </Button>
        )}

        { executionInfo.status == "DOING" && (
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            endIcon={<CancelIcon />}
            onClick={abortExecution}
          >
            Abort
          </Button>
        )}
      </div>

      <div>
        {stepsList.map((step, step_index) => (
          <div key={step.id} style={{margin:"40px 0px"}} >
          </div>
        ))}
      </div>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<AddIcon />}
        onClick={addStep}
      >
        Add Step
      </Button>
    </div>
  </>
  );
}

