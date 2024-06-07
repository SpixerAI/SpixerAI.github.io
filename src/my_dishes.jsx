import './main.css';

import {Header} from './header';
import {TextPromptDialog} from "./utils"
import {DishCards} from './dish_cards'
import {api} from './library';

import React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

export function MyDishes() {

  const [openDishNamePrompt, setOpenDishNamePrompt] = React.useState(false)
  const [dishes, setDishes] = React.useState([])

  const createDish = function(name) {
    api("/create_new_dish", {name: name}, function(result) {
      setDishes([{...result.dish, dish_id: result.dish_id}, ...dishes])
    })
  }

  React.useEffect(function() {
    api("/get_all_dishes", {"owner": "me"}, function(result) {
      setDishes(result.dishes)
    })
  }, [])

  return (<>
    <Header />
    <div style={{margin: "20px"}} >
      <Typography variant="h4" component="h4" >My Dishes</Typography>
      <TextPromptDialog open={openDishNamePrompt} setOpen={setOpenDishNamePrompt} promptText={"Dish Name"} onEnter={createDish} yesButtonText="Create" />
      <div style={{marginTop: "30px"}} >
        <DishCards dishes={dishes} />
      </div>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<AddIcon />}
        onClick={() => setOpenDishNamePrompt(true)}
      >
        Create New Dish
      </Button>

    </div>
  </>
  );
}
