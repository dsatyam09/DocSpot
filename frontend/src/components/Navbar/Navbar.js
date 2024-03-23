const Navbar = () => {
  return (
    <div className="w-4/5 flex items-center justify-center h-32 bg-grey-100 rounded-full">
      <div className="w-full max-w-screen-xl text-white">
        <div className="flex items-center justify-between mx-auto h-full px-4">
          <div>A</div>
          <div className="flex">
            <div className="mr-2">B</div>
            <div>Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
