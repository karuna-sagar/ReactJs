// import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CityList from "./Components/CityList";
import CountryList from "./Components/CountryList";
import City from "./Components/City";
import Form from "./Components/Form";
import { CitiesProvider } from "./Contexts/CitiesContext";
import { AuthProvider } from "./Contexts/fakeAuthContext";
export default function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={<HomePage />}
            />
            <Route
              path="product"
              element={<Product />}
            />

            <Route
              path="pricing"
              element={<Pricing />}
            />
            <Route
              path="login"
              element={<Login />}
            />

            <Route
              path="*"
              element={<PageNotFound />}
            />
            <Route
              path="app"
              element={<AppLayout />}
            >
              <Route
                index
                element={
                  <Navigate
                    replace
                    to="cities"
                  />
                }
              />
              <Route
                path="cities"
                element={<CityList />}
              />
              <Route
                path="cities/:id"
                element={<City />}
              />
              <Route
                path="countries"
                element={<CountryList />}
              />
              <Route
                path="form"
                element={<Form />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}
