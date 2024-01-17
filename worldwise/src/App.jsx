// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
export default function App() {
  return (
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
            element={<p>List</p>}
          />
          <Route
            path="cities"
            element={<p>Cities</p>}
          />
          <Route
            path="countries"
            element={<p>Countries</p>}
          />
          <Route
            path="form"
            element={<p>form</p>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
