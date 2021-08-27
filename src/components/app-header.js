import logo from '../public/logo.png';
import './../styles/__header.scss';

class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = ` 
      <nav>
          <div class='app-header'>
          <div class='logo-wrap'>
          <img src=${logo} alt='logo-web'/>
          <p>MovieKu</p>
          </div>
          <ul>
          <li><i class="bi bi-house"></i>Home</li>
          <li><i class="bi bi-file-person"></i>About</li>
          </ul>
          </div>     
      </nav>`;
  }
}
customElements.define('app-header', Header);
