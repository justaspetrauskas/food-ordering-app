import React from "react";
import { Tab } from "../../../pages/home";
interface TabOptionsProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}
const TabOptions = ({ activeTab, setActiveTab }: TabOptionsProps) => {
  return <div>TabOptions</div>;
};

export default TabOptions;
