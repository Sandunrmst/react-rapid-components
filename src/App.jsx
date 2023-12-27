import "./App.css";
import Faqs from "./components/faq";
import ImageSlider from "./components/imsgeslider";
import LoadMore from "./components/loadmore";
import RandomColor from "./components/randomcolor";
import StarRating from "./components/starrating";
import TreeView from "./components/treeview";
import menu from "./components/treeview/data";

function App() {
  return (
    <>
      {/* <Faqs/> */}

      {/* <RandomColor/> */}

      {/* <StarRating noofStars={8}/> */}

      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={6}/> */}

      {/* <LoadMore /> */}

      <TreeView menus={menu} />
    </>
  );
}

export default App;
