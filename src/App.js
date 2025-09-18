import { Routes,Route } from "react-router-dom";
import BackgroundAnimation from "./BackgroundAnimation";
import Portfolio from "./portfolio/portfolio";
import Content from "./portfolio/content";
function App() {
  return(
    <>
    <BackgroundAnimation/>
    <Routes>
      <Route path="/" element={<Portfolio/>}></Route>
      <Route path="/content" element={<Content/>}></Route>
    </Routes>
    </>
  );
  
}
export default App;