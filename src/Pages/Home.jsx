import imagesBa from "../assets/Images/intro.jpg";
const Home = () => {
  return (
    <div className="w-full max-w-[1200px] px-[19px] mx-auto">
      <div className="flex my-32">
        <div className="flex-1 flex flex-col justify-between space-y-5">
          <h2 className="text-7xl font-bold">Quality Cleaning <br /><span className="text-primary">for Your Home</span></h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus, dolores beatae iusto quis atque facere veritatis
            nostrum labore voluptate quia.
          </p>
          <div className="flex gap-2">
            <button className="btn btn-primary">Book A Service</button>
            <button className="btn btn-ghost">Read More</button>
          </div>
          <div className="divider"></div>
          <div className="">
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="w-12 bg-neutral text-neutral-content">
                  <span>+99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[600px] rounded-lg">
          <img src={imagesBa} className="w-full h-full object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
