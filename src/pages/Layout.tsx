import { Suspense, lazy, memo } from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "../components";
import { useThemePalette } from "../useTheme";

const ParticlesCanvas = lazy(() => import("../components/ParticlesCanvas"));
const MemoizedParticlesCanvas = memo(ParticlesCanvas);

export const Layout: React.FC = () => {
  const { themePalette } = useThemePalette();
  return (
    <div>
      {/* Canvas */}
      <Suspense fallback={null}>
        <MemoizedParticlesCanvas />
      </Suspense>
      {/* Layout */}
      <div className={`App ${themePalette === "light" ? "light" : "dark"}`}>
        <Outlet />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};
