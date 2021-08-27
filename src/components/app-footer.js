import '../styles/__footer.scss';
class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <p class='footer'>&copy;2021 made by Denny Abbas zain &hearts; </p>
`;
  }
}
customElements.define('app-footer', Footer);
