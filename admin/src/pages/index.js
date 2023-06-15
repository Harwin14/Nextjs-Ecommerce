import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import { Poppins } from "next/font/google";

const font = Poppins({ weight: "400", subsets: ["latin"] });

export default function Home() {
    const { data: session } = useSession();
    return (
        <Layout>
            <div
                className={`text-blue-900 flex justify-between ${font.className}`}
            >
                <h2>
                    Hello, <b>{session?.user?.name}</b>
                </h2>
                <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
                    <img
                        className="w-6 h-6"
                        src={session?.user?.image}
                        alt="user"
                    />
                    <span className="px-2">{session?.user?.name}</span>
                </div>
            </div>
        </Layout>
    );
}
