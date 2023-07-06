import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";

import { Poppins } from "next/font/google";

const font = Poppins({ weight: "400", subsets: ["latin"] });

export default function Layout({ children }) {
    const { data: session } = useSession();
    if (!session) {
        return (
            <div>
                <div className="bg-gray-200 w-screen h-screen flex items-center">
                    <div className="text-center w-full">
                        <button
                            onClick={() => signIn("google")}
                            className="bg-white p-2 px-4 rounded-lg"
                        >
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="bg-gray-200 min-h-screen  flex">
            <Nav />
            <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
                {children}
               
            </div>
        </div>
    );
}
