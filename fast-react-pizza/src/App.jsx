import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Order from "./features/order/Order";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/order/:orderId",
    element: <Order />,
  },
  { path: "/cart", element: <Cart /> },
  {
    path: "/order/new",
    element: <CreateOrder />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
