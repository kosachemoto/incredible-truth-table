import { EditComponent } from "./../dumb/edit";

let props =
{onInputCalback:() => {console.log("this is callback from smart component lol")}};

class MainComponent {
  constructor() {
    this.initTemplate();

    this.edit = new EditComponent(props);
    this.header = document.createElement("h1");
    this.header.innerHTML = "Incredible Truth Table";

    this.template.appendChild(this.header);
    this.template.appendChild(this.edit.template);
  }

  initTemplate() {
    this.template = document.createElement("div");
    this.template.classList.add("main-component");
  }
}

export { MainComponent };