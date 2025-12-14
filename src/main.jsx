import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import Root from "./Root";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const quericlient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={quericlient}>
      <BrowserRouter>
        <Root />
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
