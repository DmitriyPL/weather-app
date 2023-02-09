import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";

import { Layout } from "../layouts/Layout";
import { Home } from "../pages/Home/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/weather-app" element={ <Layout /> } >
      <Route index element={ <Home /> } />
    </Route>
  )
);