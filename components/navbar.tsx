import Image from "next/image";
import Link from "next/link";
import logo from "../img/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import  ThemeToggler  from "./theme-toggler";

const Navbar = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">



      <Link href={"/"}>
        <Image src={logo} alt="Logo" width={40} />
      </Link>

      <div className="flex items-center">

        <ThemeToggler />

        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Avatar>
              <AvatarImage alt="shadcn" src="https://github.com/shadcn.png" />
              <AvatarFallback className="text-black">CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={'/profile'}>
                  Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={'/auth'}>
                  Logout
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

    </div>
  );
};

export default Navbar;
