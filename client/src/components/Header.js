import logo from "./adopt a dog logo.jpg";

const Header = () => {
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <img class="h-24" src={logo}></img>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a>Test</a>
          </li>
          <li>
            <a>Breeds</a>
          </li>
          <li>
            <a>Images</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
