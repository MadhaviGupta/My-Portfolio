import Typewriter from "typewriter-effect";
export default function Home(props) {
  return (
    <div>
      <div className="flex w-full justify-between">
        <div className="pl-80">
          <div className="flex text-[#fa6c5f] justify-start text-7xl font-bold m-2 w-full pt-56">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Hey there! I'm Madhavi.").start();
              }}
            />
          </div>
          <div className="flex justify-start font-bold text-3xl text-[#689775]  m-2 mt-4">
            A front-end developer and a tech enthusiast.
          </div>
          <div className="my-12"></div>
          <div className="flex justify-start">
            <button
              className="flex border-2 text-[#fa6c5f] border-[#ffffff] hover:text-[#689775] p-3 rounded-lg transition-all duration-500 ease-in-out mx-5 font-bold hover:shadow-lg hover:shadow-green-600/50"
              onClick={() => {
                props.setContent("socials");
              }}
            >
              Connect with Me
            </button>
            <button className="flex border-2 text-[#fa6c5f] border-[#ffffff] hover:text-[#689775] p-3 rounded-lg transition-all duration-500 ease-in-out mx-5 font-bold  hover:shadow-lg hover:shadow-green-600/50">
              <a href="/MadhaviGuptaResume.pdf" download>
                Download my Resume
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="text-[160px] blur-sm font-extrabold text-gray-500/25 pl-80 -mt-80 -z-10 absolute">
        Madhavi <br />
        Gupta
      </div>
    </div>
  );
}
