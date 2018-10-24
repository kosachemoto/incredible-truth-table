import style from "./main.css";
import { MainComponent } from "./components/smart/main";

const root = document.querySelector("#root");
const main = new MainComponent();

root.appendChild(main.template);

document.body.appendChild(root);