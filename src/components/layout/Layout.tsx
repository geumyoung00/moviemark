import { type ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import ClientSidebar from "./Sidebar/ClientSidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="h-screen flex flex-col overflow-hidden bg-gray-900 bg-main-gradient bg-cover bg-top bg-no-repeat bg-fixed">
			<Header />
			<ClientSidebar />
			<main className="flex flex-col flex-1 overflow-hidden container mx-auto px-4 py-8">
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
