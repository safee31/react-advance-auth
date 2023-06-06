import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PublicRoutes from "./Routing/Public";
import PrivateRoutes from "./Routing/Private";
import { lazy } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
const Home = lazy(() => import("./Pages"));

function App() {
  const reactQC = new QueryClient();
  return (
    <QueryClientProvider client={reactQC}>
      <Router>
        <Suspense fallback={<div className="loading"></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<PublicRoutes />} />
            <Route path="/admin/*" element={<PrivateRoutes />} />
          </Routes>
        </Suspense>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
