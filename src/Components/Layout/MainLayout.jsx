import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const MainLayout = ({children}) => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
           <div className="max-w-[1200px] mx-auto w-full">
           <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">Navbar Title</div>
            <div className="flex-none hidden lg:block">
              <div className="flex gap-5">
                {/* Navbar menu content here */}
                <NavLink to="/about" className={({isActive}) => isActive ? 'btn btn-primary bts-sm' : 'btn btn-ghost bts-sm'}>About</NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? 'btn btn-primary bts-sm' : 'btn btn-ghost bts-sm'}>Contact</NavLink>
                <NavLink to="/Login" className={({isActive}) => isActive ? 'btn btn-primary bts-sm' : 'btn btn-ghost bts-sm'}>Login</NavLink>
                <NavLink to="/register" className={({isActive}) => isActive ? 'btn btn-primary bts-sm' : 'btn btn-ghost bts-sm'}>Register</NavLink>
              </div>
            </div>
           </div>
          </div>
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <NavLink to="/about" className={({isActive}) => isActive ? 'btn btn-primary' : 'btn btn-ghost bts-sm'}>About</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'btn btn-primary' : 'btn btn-ghost bts-sm'}>Contact</NavLink>
            <NavLink to="/login" className={({isActive}) => isActive ? 'btn btn-primary' : 'btn btn-ghost bts-sm'}>Login</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
    children: PropTypes.node,
};

export default MainLayout;
