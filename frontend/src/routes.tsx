import {
  createBrowserRouter,
} from "react-router-dom";

// PAGE
import { Home } from './pages/Home';
import Overheads from "./pages/Overheads";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/overheads",
    element: <Overheads />
  }
]);

export default router;