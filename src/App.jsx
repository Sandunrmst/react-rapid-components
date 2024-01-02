import "./App.css";
import ModalTest from "./components/custommodal/modalitem";
import TabItem from "./components/customtabs/tabitem";
import Faqs from "./components/faq";
import FeatureFlags from "./components/featureflag";
import FeatureFlagGlobalState from "./components/featureflag/context";
import GithubProfileFinder from "./components/githubprofilefinder";
import ImageSlider from "./components/imsgeslider";
import LightDarkMode from "./components/lightdarkmode";
import LoadMore from "./components/loadmore";
import QRCodeGenerator from "./components/qrcodegenerator";
import RandomColor from "./components/randomcolor";
import ScrollToSection from "./components/scroll-to-sections";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollIndicator from "./components/scrollindicator";
import SearchAutocomplete from "./components/searchautocomplete";
import StarRating from "./components/starrating";
import TicTacToe from "./components/tictacttoe";
import TreeView from "./components/treeview";
import menu from "./components/treeview/data";
import UseOnclickOutsideTest from "./components/useOutsideClick/test";
import UseWindowResizeTest from "./components/useWindowResize/test";
import UseFetchHookTest from "./components/usefetch/test";
import Weather from "./weatherapp/components/weather";

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

      {/* <TabItem /> */}

      {/* <ModalTest /> */}

      {/* <GithubProfileFinder /> */}

      {/* <SearchAutocomplete /> */}

      {/* <TicTacToe /> */}
      {/* 
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* <UseFetchHookTest /> */}

      {/* <UseOnclickOutsideTest /> */}

      {/* <UseWindowResizeTest /> */}

      {/* <ScrollToTopAndBottom /> */}

      {/* <ScrollToSection /> */}

      <Weather />
    </>
  );
}

export default App;
