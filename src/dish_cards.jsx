import './main.css'
import {Header} from './header'
import React from 'react'
import {api} from './library'
import {DEFAULT_FOOD_IMAGE} from './configs'
import {getExecutionStatusText} from './utils'


import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

import CardHeader from '@mui/material/CardHeader'

import { Container, Paper, Grid, Card, CardMedia, CardContent, Typography, Link, AppBar,
         Toolbar, IconButton, TextField, InputAdornment, Menu, MenuItem
       } from '@mui/material';


export function DishCards({dishes}) {
  return (<>
    <Grid container spacing={4} justifyContent="left">
      {dishes.map((dish, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} style={{marginBottom: "20px"}}>
          <Link href={"#/dish/" + dish.dish_id}
                underline="none"
                style={{ textDecoration: 'none' }} >
            <Card>

              { dish.execution_info && (<>
                <CardHeader
                  avatar={
                    <Typography style={{fontSize: "14px"}} >
                      <b>{getExecutionStatusText(dish.execution_info.status)}:</b>
                      <span style={{marginLeft: "5px"}} >Started on {dish.execution_info.start_time_str}</span>
                    </Typography>
                  }
                  />
              </>)}


              <CardMedia
                component="img"
                height="180"
                image={dish.image || DEFAULT_FOOD_IMAGE}
                alt={dish.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {dish.name}
                </Typography>
                <Typography sx={{marginTop: "5px"}} variant="body2" color="text.secondary">
                  {dish.description}
                </Typography>

              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  </>
  );
}

