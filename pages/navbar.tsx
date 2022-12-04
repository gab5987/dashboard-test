const Navbar = () => {
    return(
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className=" flex flex-wrap items-center justify-between mx-auto">
                <a className="flex items-center">
                    <img src="https://img.icons8.com/material-outlined/24/9ca3af/dashboard-layout.png" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-gray-400">Lorem Ipsum</span>
                </a>
            </div>
        </nav>
    );
};
export default Navbar;