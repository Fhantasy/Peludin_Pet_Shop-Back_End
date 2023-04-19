import { ComponentLoader } from "adminjs";

const componentLoader = new ComponentLoader();

const Components = {
  Dashboard: componentLoader.add("Dashboard", "./Dashboard.tsx"),
};

export { Components, componentLoader };
