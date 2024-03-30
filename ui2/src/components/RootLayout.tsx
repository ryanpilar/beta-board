import { ReactNode } from "react";
// Project Imports
import Navbar from "./Navbar";
import Footer from "./Footer";

/** ================================|| Root Layout ||=================================== **/

// When passing props, you need to define an interface. It's required to make typescript work. 
// Its kinda synonymous with a mongo model, we are defining the 'types' 
interface RootLayoutProps {
    children: ReactNode
}

function RootLayout({ children }: RootLayoutProps) {
    return (
        <div className="min-h-full min-w-full">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default RootLayout;


<RootLayout>
    <Footer />
</RootLayout>



