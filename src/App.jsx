import "./App.css";
import TabItem from "./components/customtabs/tabitem";
import Faqs from "./components/faq";
import ImageSlider from "./components/imsgeslider";
import LightDarkMode from "./components/lightdarkmode";
import LoadMore from "./components/loadmore";
import QRCodeGenerator from "./components/qrcodegenerator";
import RandomColor from "./components/randomcolor";
import ScrollIndicator from "./components/scrollindicator";
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

      {/* <TreeView menus={menu} /> */}

      {/* <QRCodeGenerator /> */}

      {/* <LightDarkMode /> */}

      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      <TabItem />
    </>
  );
}

export default App;
