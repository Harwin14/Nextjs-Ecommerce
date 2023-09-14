import { useSession } from "next-auth/react";

import { useState } from "react";
import LoginForm from "./LoginForm";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  const [hide, setHide] = useState(false);
  const { data: session } = useSession();

  const toggleButton = () => {
    setHide(!hide);
  };
  if (!session) {
    return (
      <div>
        <div className="bg-gray-300 w-screen h-screen flex items-center">
          <div className="text-center w-full">
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-grey min-h-screen h-screen overflow-hidden relative">
      <div className="flex">
        <Sidebar hide={hide} />
        <section id="content">
          <Navbar onToggleButtonClick={toggleButton} session={session} />
          <main>{children}</main>
        </section>
      </div>
    </div>
  );
}
