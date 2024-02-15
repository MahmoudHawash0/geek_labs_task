import { Home } from "./component/Home";
import { LeftColumn } from "./component/LeftColumn";
import { Navbar } from "./component/Navbar";
import { RightColumn } from "./component/RightColumn";
import { Sidebar } from "./component/Sidebar";
import { Test } from "./component/test";

function App() {
  return (
    <div className="flex bg-zinc-900 ">
      <Sidebar />
      {/* <Test /> */}

      <div className="flex flex-col flex-1 relative">
        <div className="grid md:grid-cols-3 grid-cols-1 w-full">
          <div className="col-span-2">
            <LeftColumn />
          </div>
          <div className="w-full">
            <RightColumn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
