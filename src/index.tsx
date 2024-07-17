import "./i18n/index";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { PDFViewer } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
import CV from "./CV";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const tw = createTw({})
root.render(
  <React.StrictMode>
    <PDFViewer style={tw('h-screen w-full')}>
      <CV />
    </PDFViewer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
