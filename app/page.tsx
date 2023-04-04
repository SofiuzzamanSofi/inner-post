"use client";
import { NextPage } from 'next'
import Header from './components.js/Header/Header'
 
import { ThemeProvider, Button } from "@material-tailwind/react";

export { ThemeProvider, Button };

const Page: NextPage = () => {
  return (
    <div>
      <div>
       <Header/>
      </div>
      <div>
        bodyyy
      </div>
      <div>
        Footer
      </div>
    </div>
  )
}

export default Page
