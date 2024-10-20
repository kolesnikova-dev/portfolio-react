import { Outlet } from 'react-router-dom';

import { NavBar, Footer } from '../components/index';


export const Layout = () => {
  return (
    <div>

    {/* main section */}
        <main>
            <Outlet />
        </main>

        {/* navigation bar */}
        <nav>
            <NavBar />
        </nav>
        
        {/* footer */}
        <footer>
            <Footer />
        </footer>

     </div>
  )
}
