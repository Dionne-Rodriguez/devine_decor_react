import logo from "./logo.svg";
import igIcon from "./instagram-logo.svg";
import devineIcon from "./images/Devine-logo.svg";
import aboutImg from "./images/IMG_2454.jpg";
import "./App.css";

function App() {
  const hoverCount = 0;
  function increment() {
    hoverCount++;
  }

  return (
    <div className="bg-[#fdf0eb]">
      <header className="h-16 bg-[#fdf0eb] items-center flex flex-row">
        <div className="w-1/4 flex justify-start">
          <a
            href="/"
            className="hover:text hover:border-b-2 border-black mx-2 text-sm"
          >
            HOME
          </a>
          <a className="hover:text hover:border-b-2 border-black mx-2 text-sm">
            PORTFOLIO
          </a>

          <a
            href="/contact"
            className="hover:text hover:border-b-2 border-black mx-2 text-sm"
          >
            CONTACT
          </a>
        </div>

        <div className="w-1/2 flex justify-center">
          <img className="" src={devineIcon} />
        </div>

        <div className="w-1/4 flex items-center justify-center">
          <a href="https://www.instagram.com/devinedecor__" className="mx-2">
            <img src={igIcon} />
          </a>
          <a className="mx-2">
            <img src={logo} />
          </a>
        </div>
      </header>

      <div>
        <div className="z-10 absolute w-full top-[40%]">
          <h2 className="text-center text-4xl">
            Your Ideas Become Devine Events
          </h2>
          <p className="border-t-2 border-[#fdf0eb] w-1/2 mx-auto"></p>
          <p className="text-center text-lg">
            prioritize attention to detail, ensuring flawless and personalized
            balloon arrangements that reflect your individual style.
          </p>
        </div>
        <img
          className="h-screen w-full z-0"
          src={require("./images/main-background.jpeg")}
        />
      </div>

      <div>
        <div className="flex flex-row m-[3%] h-[800px]">
          <div className="w-1/2">
            <img className="w-full h-[80%]" src={aboutImg} />
          </div>
          <div className="w-1/2 flex flex-col space-y-10 text-center">
            <h2 className="text-4xl">About</h2>
            <p className="my-[2%] ml-[5%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
