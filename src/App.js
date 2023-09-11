import React, { useEffect, useState }  from "react";
import { useRoutes } from "react-router";
import routes from "./routes"
import Header from "./components/header/Header"
export default function App() {

const router = useRoutes (routes)
  return (
    
    <div dir="rtl" >
    <Header/>
     {router}
  
    </div>


  )
}
