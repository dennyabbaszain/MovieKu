/* eslint-disable accessor-pairs */
import '../styles/__search.scss';
class Search extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set eventSubmit(event) {
    this._eventSubmit = event;
  }

  get searchValue() {
    return this.querySelector('.search-form').value;
  }

  render() {
    this.innerHTML = `
    <div class='search-app'>
    <form >
    <input type='text' class='search-form' placeholder='Movie...'/>
    <button type='submit' class='btn-submit'> <i class="bi bi-search"></i></button>
    </form>
    </div>
    <div class='result-text'>
     <h3>Result : </h3>
      <hr>
    </div>
    `;
    const btn = this.querySelector('.btn-submit');
    btn.addEventListener('click', (e) => this._eventSubmit(e));
  }
}

customElements.define('app-search', Search);
