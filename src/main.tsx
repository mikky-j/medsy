import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Index.tsx";
import "./index.css";

// const router = createBrowserRouter([
//   { path: "/medsy/", element: <App />, errorElement: <div>404</div> },
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
