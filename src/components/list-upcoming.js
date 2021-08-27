class ListUpcoming extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class='list-upcoming'>
      <h3>Movie Upcoming</h3>
      <hr>
    </div>
    `;
  }
}

customElements.define('list-upcoming', ListUpcoming);
