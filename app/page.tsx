import { Input } from "@/components/ui/input";
import { LayoutPanelLeft, Package, Tag } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <div className="flex flex-row gap-3">
        <aside className="h-screen w-64 bg-white border-r border-slate-300 flex flex-col justify-between items-start px-3 fixed left-1">
          <div className="flex flex-col gap-3 items-center pt-5">
            <Image
              alt="logo"
              src={"/logo-sample.jpg"}
              width={100}
              height={100}
            />
            <Input type="search" className="my-5" />
          </div>
          <div className="flex-1 w-full flex flex-col">
            <label htmlFor="menu" className="text-label">
              menu
            </label>
            <article className="article-block">
              <LayoutPanelLeft size={20} color="#64748b" />
              <p className="text-sidebar">dashboard</p>
            </article>
            <article className="article-block">
              <Package size={20} color="#64748b" />
              <p className="text-sidebar">inventory</p>
            </article>
            <article className="article-block">
              <Tag size={20} color="#64748b" />
              <p className="text-sidebar">ticket</p>
            </article>
            {/* inventory - collapse */}
            {/* tickets */}
            {/* history */}
            {/* stats */}
            {/* chats */}
            <label htmlFor="settings" className="text-label">
              settings
            </label>
            {/* settings */}
          </div>
          <div>
            {/* theme toggle */}
            {/* profile */}
          </div>
        </aside>
        <div className="flex-grow flex flex-col w-full p-3">
          <nav className="w-full flex justify-end items-center">
            {/* Notification */}
          </nav>
          <div></div>
        </div>
      </div>
    </main>
  );
}
