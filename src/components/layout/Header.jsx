import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/70 backdrop-blur-md border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid h-16 grid-cols-3 items-center">
          {/* 좌측 로고 */}
          <h1 className="text-3xl font-semibold text-white tracking-tight">
            <Link
              to="/home">
              PLO <span className="text-neutral-400 text-lg">Devs</span>
            </Link>
          </h1>

          {/* 중앙 네비게이션 메뉴 */}
          <NavigationMenu className="justify-self-center">
            <NavigationMenuList className="flex gap-8">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/about"
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/developers"
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    Developers
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/projects"
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    Projects
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