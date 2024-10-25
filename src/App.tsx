import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./configs/api";
import { router } from "./router";
import { theme } from "./theme";

import "./App.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <MantineProvider theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </ApolloProvider>
  );
}

export default App;
