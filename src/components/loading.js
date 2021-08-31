import '../styles/__loading.scss';
class Loading extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class='loading'>
    <div class="box">
    <div class="container-box">
      <span class="circle"></span>
      <span class="circle"></span>
      <span class="circle"></span>
      <span class="circle"></span>
    </div>
</div>

    </div>
    `;
  }
}

customElements.define('loading-animate', Loading);
