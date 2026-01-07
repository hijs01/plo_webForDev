import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  // 화면 크기 감지
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
      setIsSmallMobile(window.innerWidth < 640); // sm breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  
  // 현재 경로 확인 함수
  const isActive = (path) => {
    if (path === "/about") {
      // /about과 /home은 같은 페이지
      return location.pathname === "/about" || location.pathname === "/home";
    }
    return location.pathname === path;
  };
  // 화면 크기에 따른 동적 클래스
  const headerHeight = isSmallMobile ? "h-14" : "h-16";
  const logoTextSize = isSmallMobile ? "text-lg" : isMobile ? "text-xl" : "text-2xl";
  const logoSubtextSize = isSmallMobile ? "text-[9px]" : "text-xs";
  const navGap = isSmallMobile ? "gap-0.5" : isMobile ? "gap-1" : "gap-4";
  const navTextSize = isSmallMobile ? "text-[10px]" : isMobile ? "text-xs" : "text-base";
  const navPadding = isSmallMobile ? "px-1" : isMobile ? "px-2" : "px-4";
  const buttonTextSize = isSmallMobile ? "text-[10px]" : isMobile ? "text-xs" : "text-sm";
  const buttonPadding = isSmallMobile ? "px-2" : isMobile ? "px-3" : "px-4";
  const containerPadding = isSmallMobile ? "px-2" : isMobile ? "px-4" : "px-8";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-black/70 backdrop-blur-md border-b border-neutral-800 ${headerHeight}`}>
      <div className={`mx-auto max-w-7xl ${containerPadding}`}>
        <div className={`flex ${headerHeight} items-center justify-between`}>
          {/* 좌측 로고 */}
          <Link
            to="/home"
            className={`flex flex-col items-start hover:opacity-80 transition-opacity duration-200 min-w-0 flex-shrink-0 ${isSmallMobile ? "max-w-[80px]" : ""}`}>
            <h1 className={`${logoTextSize} font-bold text-white tracking-tight leading-tight`}>
              CUCO
            </h1>
            <span className={`${logoSubtextSize} text-neutral-400 font-normal tracking-wide ${isSmallMobile ? "hidden" : "block"}`}>
              Code Union Community
            </span>
          </Link>

          {/* 중앙 네비게이션 메뉴 - 반응형 */}
          <NavigationMenu className="flex justify-self-center">
            <NavigationMenuList className={`flex ${navGap}`}>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/about"
                    className={`relative ${navPadding} py-1 sm:py-2 transition-all duration-300 ${navTextSize} ${
                      isActive("/about")
                        ? "text-white font-semibold"
                        : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    About
                    {isActive("/about") && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-400 via-rose-500 to-blue-400 rounded-full" />
                    )}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/developers"
                    className={`relative ${navPadding} py-1 sm:py-2 transition-all duration-300 ${navTextSize} ${
                      isActive("/developers")
                        ? "text-white font-semibold"
                        : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    {isSmallMobile ? "Devs" : "Developers"}
                    {isActive("/developers") && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-400 via-rose-500 to-blue-400 rounded-full" />
                    )}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/projects"
                    className={`relative ${navPadding} py-1 sm:py-2 transition-all duration-300 ${navTextSize} ${
                      isActive("/projects")
                        ? "text-white font-semibold"
                        : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    Projects
                    {isActive("/projects") && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-400 via-rose-500 to-blue-400 rounded-full" />
                    )}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* 우측 버튼 영역 */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-shrink-0">
            <Button
              className={`bg-neutral-50 text-black font-medium ${buttonTextSize} hover:bg-neutral-200 transition ${buttonPadding} py-1 sm:py-2`}
              onClick={() => navigate("/signup")}>
              {isSmallMobile ? "Join" : "Join Us"}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;