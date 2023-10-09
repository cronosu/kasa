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
import CardComponent from './Component/CardComponent'
import './index.scss'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
            <Header />
            <Banner
              content="Chez vous, partout et ailleurs"
            />

            <Card />
          </main>
          <Footer />
        </>
      } />
      <Route path="/:id" element={
        <>
          <ScrollToTop />
          <main>
            <Header />
            <PageID />
          </main>
          <Footer />
        </>
      } />
      <Route path="/apropos" element={
        <>
          <ScrollToTop />
          <main>
            <Header />
            <Banner
              backgroundImage="fond1"
            />
            <div className='container-cardComponent'>
              <CardComponent
                titre="Fiabilité"
                content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
                régulièrement vérifiées par nos équipes." />
              <CardComponent
                titre="Respect"
                content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                perturbation du voisinage entraînera une exclusion de notre plateforme." />
              <CardComponent
                titre="Service"
                content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                perturbation du voisinage entraînera une exclusion de notre plateforme." />
              <CardComponent
                titre="Sécurité"
                content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>
          </main>
          <Footer />
        </>
      } />
      <Route path="*" element={
        <>
          <ScrollToTop />
          <main>
            <Header />
            <Error404 />
          </main>
          <Footer />
        </>
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
