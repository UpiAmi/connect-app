import { IconUser, IconUserCog } from "@tabler/icons-react";

export default function UsersPage() {
return (
    <div id="container" className="flex h-[100vh]">
        <section id="navigation" className="bg-gray-400 p-4 w-[200px]">
        <h1 className="text-3xl font-bold text-center">Connect</h1>
        <div className="flex flex-col gap-2 mt-4">
            <button> <IconUser /> Users</button>
            <button> <IconUserCog/> Hak Akses</button>
            <button>Logout</button>
        </div>
        </section>
        <section id="content">
            <input type="text" placeholder="cari users" className="p-3 w-500" />
            <div id="list users"></div>
        </section>
    </div>
 );
}
