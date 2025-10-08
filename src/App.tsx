import { Outlet, useLocation } from "react-router";
import "./App.css";
import CommonLayout from "./components/layouts/CommonLayout";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <CommonLayout>
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </CommonLayout>
    </>
  );
}

export default App;
