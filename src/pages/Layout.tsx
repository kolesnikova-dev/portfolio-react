import { Suspense, lazy, memo } from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "../components";
import { useThemePalette } from "../useTheme";

const ParticlesCanvas = lazy(() => import("../components/ParticlesCanvas"));
// Create a memoized version
const MemoizedParticlesCanvas = memo(ParticlesCanvas);

export const Layout: React.FC = () => {
  const { themePalette } = useThemePalette();
  return (
    <div>
      {/* canvas -- start */}
      <Suspense fallback={null}>
        <MemoizedParticlesCanvas />
      </Suspense>
      {/* canvas -- end */}

      {/* layout */}
      <div className={`App ${themePalette === "light" ? "light" : "dark"}`}>
        {/* Main section */}
        <Outlet />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};
