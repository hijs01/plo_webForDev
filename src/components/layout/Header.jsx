import React from "react";
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
  
  // 현재 경로 확인 함수
  const isActive = (path) => {
    if (path === "/about") {
      // /about과 /home은 같은 페이지
      return location.pathname === "/about" || location.pathname === "/home";
    }
    return location.pathname === path;
  };
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/70 backdrop-blur-md border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid h-16 grid-cols-3 items-center">
          {/* 좌측 로고 */}
          <Link
            to="/home"
            className="flex flex-col items-center justify-self-start hover:opacity-80 transition-opacity duration-200">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              CUCO
            </h1>
            <span className="text-xs text-neutral-400 font-normal tracking-wide">
              Code Union Community
            </span>
          </Link>

          {/* 중앙 네비게이션 메뉴 */}
          <NavigationMenu className="justify-self-center">
            <NavigationMenuList className="flex gap-8">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/about"
                    className={`relative px-4 py-2 transition-all duration-300 ${
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
                    className={`relative px-4 py-2 transition-all duration-300 ${
                      isActive("/developers")
                        ? "text-white font-semibold"
                        : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    Developers
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
                    className={`relative px-4 py-2 transition-all duration-300 ${
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
          <div className="justify-self-end flex items-center gap-3">
            <Button
              className="bg-neutral-50 text-black font-medium text-sm hover:bg-neutral-200 transition" onClick={() => navigate("/signup")}>
              Join Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;