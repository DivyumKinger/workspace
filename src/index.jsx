import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
