import { useContext } from "react";
import Faqs from "../faq";
import LightDarkMode from "../lightdarkmode";
import RandomColor from "../randomcolor";
import TicTacToe from "../tictacttoe";
import TreeView from "../treeview";
import { FeatureFlagsContext } from "./context";
import menus from "../treeview/data";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Faqs />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data!</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
