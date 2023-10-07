import React from 'react'
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

import Header from './Component/Header'
import Banner from './Component/Banner'
import Card from './Component/Card'
import Footer from './Component/Footer'
import PageID from './Component/Page-id'
import Error404 from './Component/Error404'

import './index.scss'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={
        <section className="container">
          <main>
            <Header />
            <Banner />
            <Card />
          </main>
          <Footer />
        </section>
      } />
      <Route path="/:id" element={
        <section className="container">
          <main>
            <Header />
            <PageID />
          </main>
          <Footer />
        </section>
      } />
      <Route path="*" element={
        <section className="container">
          <main>
            <Header />
            <Error404 />
          </main>
          <Footer />
        </section>
      } />

    </>
  )
);
;
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

  ,
)
