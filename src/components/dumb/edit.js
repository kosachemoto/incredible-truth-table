class EditComponent {
  constructor({onInputCalback}) {
    this.initTemplate();
    
    this.template.addEventListener("input", onInputCalback);
  }

  initTemplate() {
    this.template = document.createElement("input");
    this.template.classList.add("edit-component");
  }
}

export { EditComponent };