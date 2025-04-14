import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components";

const ParticlesCanvas = lazy(() => import("../components/ParticlesCanvas"));

export const Layout: React.FC = () => {
  return (
    <>
      {/* canvas -- start */}
      <Suspense fallback={null}>
        <ParticlesCanvas />
      </Suspense>
      {/* canvas -- end */}

      {/* layout */}
      <div className="dark-paper">
        <div className="App">
          {/* Main section */}
          <Outlet />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};
