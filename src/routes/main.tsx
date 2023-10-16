import React from 'react'
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";


import Footer from '../Component/Footer'
import Error from '../pages/Error'
import Apropos from '../pages/Apropos';
import '../sass/main.scss'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Main from '../pages/Main'
import Logement from '../pages/Logement';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={
        <>
          <ScrollToTop />
          <main>
            <Main />
          </main>
          <Footer />
        </>
      } />
      <Route path="/:id" element={
        <>
          <ScrollToTop />
          <main>
            <Logement />
          </main>
          <Footer />
        </>
      } />
      <Route path="/apropos" element={
        <>
          <ScrollToTop />
          <main>
           <Apropos/>
          </main>
          <Footer />
        </>
      } />
      <Route path="*" element={
        <>
          <ScrollToTop />
          <main>
            <Error />
          </main>
          <Footer />
        </>
      } />

    </>
  )
);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
