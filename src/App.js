import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";
import { GalleryDetail, Home } from "./routes";
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
      <PageWrapper title="Fotogaléria">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery/:id" element={<GalleryDetail />} />
        </Routes>
      </PageWrapper>
    </QueryClientProvider>
  );
}

export default App;
