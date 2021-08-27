class listPopular extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class='list-popular-title'>
      <h3>Movie Popular</h3>
      <hr>
    </div>
    `;
  }
}

customElements.define('list-popular', listPopular);
