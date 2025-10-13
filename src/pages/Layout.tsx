import { Suspense, lazy, memo } from "react";
import { Outlet } from "react-router-dom";

import { Footer, ThemeToggle } from "../components";
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
        {/* ToggleTheme section */}
        <div className="display-flex flex-center right pd-inline-15rem">
          <ThemeToggle />
        </div>

        {/* Main section */}
        <Outlet />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};
