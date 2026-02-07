import { Suspense, lazy, memo } from "react";
import { Outlet } from "react-router-dom";

import { useThemePalette } from "../useTheme";

const ParticlesCanvas = lazy(() => import("../components/ParticlesCanvas"));
const MemoizedParticlesCanvas = memo(ParticlesCanvas);

export const Layout: React.FC = () => {
  const { themePalette } = useThemePalette();
  return (
    <div className="relative w-full min-h-full">
      {/* Canvas */}
      <Suspense fallback={null}>
        <MemoizedParticlesCanvas />
      </Suspense>
      {/* Layout */}
      <div className={`App ${themePalette === "light" ? "light" : "dark"}`}>
        <Outlet />
      </div>
    </div>
  );
};
