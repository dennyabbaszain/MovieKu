class ListTopRated extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class='list-toprated'>
      <h3>Movie Top Rated</h3>
      <hr>
    </div>
    `;
  }
}

customElements.define('list-toprated', ListTopRated);
