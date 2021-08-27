import '../styles/__search.scss';
class Search extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class='search-app'>
    <form >
    <input type='text' class='search-form' placeholder='movie...'/>
    <button type='submit' class='btn-submit'> <i class="bi bi-search"></i></button>
    </form>
    </div>
    `;
  }
}

customElements.define('app-search', Search);
