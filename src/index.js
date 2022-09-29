import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import store from "./redux/store";
import { Provider } from "react-redux";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = QueryClient;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <QueryClientProvider client={queryClient}> */}
    {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    <App />
    {/* </QueryClientProvider> */}
  </Provider>
);

reportWebVitals();
