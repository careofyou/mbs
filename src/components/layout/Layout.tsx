import { ReactNode, useEffect, useState } from "react";

import { useRouter } from "next/router";

import Footer from "@/components/layout/Footer";
import MobileNavigation from "@/components/navigation/MobileNavigation";
import NavBar from "@/components/navigation/NavBar";
import { useScrollBlock } from "@/hooks/useScrollBlock";

import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  const router = useRouter();

  const mobileNavigationHandler = (): void => {
    if (showMobileNavigation) {
      setShowMobileNavigation(false);
      allowScroll();
    } else {
      window.scrollTo({ top: 0 });
      setShowMobileNavigation(true);
      blockScroll();
    }
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setShowMobileNavigation(false);
      allowScroll();
    });
  }, [allowScroll, router.events]);

  return (
    <>
      <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <NavBar
          showMobileNavigation={showMobileNavigation}
          handleClick={mobileNavigationHandler}
        />
        {showMobileNavigation && <MobileNavigation />}
        <div className="background-gradient mx-auto my-8 max-w-4xl flex-auto px-4 md:my-12">
          {children}
        </div>
        {!showMobileNavigation && <Footer />}
      </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </>
  );
};

export default Layout;
