import { AppProps } from "next/app";

import { theme } from "../styles/theme";

import { ChakraProvider } from "@chakra-ui/react";
import { SidebarDrawerProvider } from "../context/SidebarDrawerContext";
import { QueryClientProvider, QueryClient } from "react-query";
import { makeServer } from "../services/mirage";

const queryClient = new QueryClient();

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
