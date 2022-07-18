import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Routes, Route } from "react-router-dom";
import { GalleryDetail, Home, InvalidPage } from "./routes";
import { PageWrapper } from "./components";
import "./App.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageWrapper title="photo_gallery">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery/:id" element={<GalleryDetail />} />
          <Route path="*" element={<InvalidPage />} />
        </Routes>
      </PageWrapper>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
