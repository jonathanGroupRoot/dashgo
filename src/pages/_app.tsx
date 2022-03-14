import { AppProps } from "next/app";

import { theme } from "../styles/theme";

import { ChakraProvider } from "@chakra-ui/react";
import { SidebarDrawerProvider } from "../context/SidebarDrawerContext";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

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
