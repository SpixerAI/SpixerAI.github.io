import Example1 from './example1';
import Example2 from './example2';
import Example3 from './example3';
import {Main} from './main';
import {Dish} from './dish';
import {MyDishes} from './my_dishes'
import Try from './try';
import {Try2} from './try2';
import {Try3} from './try3';
import {Routes, Route, HashRouter} from "react-router-dom"
import React from 'react';

import {spixerTheme} from './configs'
import { ThemeProvider } from '@mui/material/styles';

import { useParams } from 'react-router-dom';

function paramsWrapper(func) {
  const Comp = () => {
    return <>{func(useParams())}</>
  }
  return <Comp />
}

function MainFunc() {
  return (
    <ThemeProvider theme={spixerTheme} >
      <HashRouter>
        <Routes>
          <Route >
            <Route path="/" element={<Main />} />
            <Route path="/dish/:dish_id" element={
                paramsWrapper(({dish_id}) => <Dish key={dish_id} dishId={parseInt(dish_id)} />)} />
            <Route path="/try2" element={<Try2 />} />
            <Route path="/try3" element={<Try3 />} />
            <Route path="/my_dishes" element={<MyDishes />} />

            <Route path="/example1" element={<Example1 />} />
            <Route path="/example2" element={<Example2 />} />
            <Route path="/example3" element={<Example3 />} />
            <Route path="/try" element={<Try />} />
            <Route path="*" element={<h1>Invalid</h1>} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
    );
}

export default MainFunc;
