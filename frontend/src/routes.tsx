import {
  createBrowserRouter,
} from "react-router-dom";

// PAGE
import { Home } from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
]);

export default router;