import { Routes,Route } from "react-router-dom";
import BackgroundAnimation from "./BackgroundAnimation";
import Portfolio from "./portfolio/portfolio";
function App() {
  return(
    <>
    <BackgroundAnimation/>
    <Routes>
      <Route path="/" element={<Portfolio/>}></Route>
    </Routes>
    </>
  );
  
}
export default App;