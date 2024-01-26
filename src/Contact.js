import logo from "./logo.svg";
import igIcon from "./instagram-logo.svg";
import devineIcon from "./images/Devine-logo.svg";
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
          <a className="hover:text hover:border-b-2 border-black mx-2 text-sm">
            REVIEWS
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

      <div className="w-full mb-11">
        <h1 className="my-11 mx-5 text-3xl">Inquire</h1>
        <p className="mx-5">
          Let us know what's on your mind! Wether its help budgeting or planning
          our team is here to help you!
        </p>
        <form>
          <div className="grid grid-cols-2 gap-2 mb-6 my-11 justify-center">
            <div class="w-full md:w-[100%] px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div class="w-full md:w-[100%] px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div class="w-full md:w-[100%] px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Message
            </label>
            <input
              class="appearance-none block w-full h-[300px] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Type Message ..."
            />
          </div>

          <button className="m-11">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
