import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  active?: boolean;
}

const NavLink = ({ to, children, active }: NavLinkProps) => (
  <div className="flex min-h-10 flex-col overflow-hidden items-stretch justify-center rounded-[100px]">
    <Link
      to={to}
      className={cn(
        "flex w-full items-center gap-2 justify-center h-full px-3 py-2.5",
        active ? "text-[#AA3700]" : "opacity-[0.38]",
      )}
    >
      {children}
    </Link>
  </div>
);

export const Navbar = () => {
  return (
    <div className="bg-white flex min-h-[72px] w-full items-center gap-[40px_100px] text-sm font-medium whitespace-nowrap tracking-[0.1px] leading-none justify-between flex-wrap h-[72px] px-7 py-4 max-md:max-w-full max-md:px-5">
      <Link
        to="/"
        className="self-stretch flex min-w-60 min-h-9 items-center gap-1 text-[27px] text-[#AA3700] font-bold tracking-[-1.08px] leading-none my-auto"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b50fe682d4084777a8c814359725a696/c1cc0aa78e5a342af12ab57ed52ffe6c3974c6d7?placeholderIfAbsent=true"
          alt="1000XRewards Logo"
          className="aspect-[1] object-contain w-9 self-stretch shrink-0 my-auto"
        />
        <div className="self-stretch w-[209px] my-auto">1000XRewards</div>
      </Link>

      <nav className="self-stretch flex min-w-60 gap-[34px] text-[#271813] text-center my-auto max-md:max-w-full">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/help" active>
          Help
        </NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/legal">Legal</NavLink>
      </nav>

      <div className="self-stretch flex items-center gap-2 text-center my-auto">
        <Link
          to="/login"
          className="border self-stretch flex min-h-10 flex-col overflow-hidden items-stretch text-[#AA3700] justify-center w-[86px] my-auto rounded-[100px] border-[#8E7067] border-solid px-6 py-2.5 hover:bg-[#AA3700]/5"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-[#AA3700] self-stretch flex min-h-10 flex-col overflow-hidden items-stretch text-white justify-center w-[97px] my-auto rounded-[100px] px-6 py-2.5 hover:bg-[#AA3700]/90"
        >
          Register
        </Link>
      </div>
    </div>
  );
};
