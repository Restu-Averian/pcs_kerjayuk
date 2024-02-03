import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./page/Home"));

const Routing = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </Suspense>
  );
};
export default Routing;
