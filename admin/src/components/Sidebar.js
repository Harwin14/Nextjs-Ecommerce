import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import Logo from "./Logo";
import { sidebarLinks } from "constants";

export default function Sidebar({ hide }) {
  const router = useRouter();
  const pathname = usePathname();

  const logout = async () => {
    router.push("/");
    await signOut();
  };
  return (
    <aside id="sidebar" className={hide ? " hide" : ""}>
      <Logo />
      <ul className="side-menu top">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <li className={isActive && " active"}>
              <Link href={link.route} key={link.label}>
                {" "}
                <i class={link.icon}></i>
                <span class="text">{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* <ul className="side-menu top">
        <li className={pathname === "/" ? " active" : ""}>
          <Link href={"/"}>
            <i class="bx bxs-store"></i>
            <span class="text">Dashboard</span>
          </Link>
        </li>
        <li
          className={pathname.includes("/products") ? " active" : ""}
        >
          <Link href={"/products"}>
            <i class="bx bxs-package"></i>
            <span class="text">Products</span>
          </Link>
        </li>
        <li
          className={
            pathname.includes("/categories") ? " active" : ""
          }
        >
          <Link href={"/categories"}>
            <i class="bx bxs-category-alt"></i>
            <span class="text">Categories</span>
          </Link>
        </li>
        <li
          className={pathname.includes("/orders") ? " active" : ""}
        >
          <Link href={"/orders"}>
            <i class="bx bxs-shopping-bags"></i>
            <span class="text">Orders</span>
          </Link>
        </li>
      </ul> */}
      
      <ul className="side-menu">
        <li className={pathname.includes("/settings") ? " active" : ""}>
          <Link href={"/settings"}>
            <i class="bx bxs-cog"></i>
            <span class="text">Settings</span>
          </Link>
        </li>
        <li>
          <button className="logout" onClick={logout}>
            <i class="bx bxs-log-out-circle"></i>
            <span class="text">Logout</span>
          </button>
        </li>
      </ul>
    </aside>
  );
}
