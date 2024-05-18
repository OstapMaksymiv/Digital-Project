import { Outlet } from 'react-router-dom';
import Header from './component/HeaderFolder/Header';
import Footer from './component/Footer/Footer'

export function Layout() {
    

    return (
        <>
            {/* <Header /> */}
            <main>
                <Outlet />
            </main>
            {/* <Footer/> */}
        </>
    );
}

