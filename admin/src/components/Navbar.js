
export default function Navbar({ onToggleButtonClick, session }) {
  return (
    <nav>
      <i class="bx bx-menu" onClick={onToggleButtonClick}></i>
      <form action="#">
        <div class="form-input-search">
          <input type="search" placeholder="Search... " />
          <button type="submit" class="search-btn">
            <i class="bx bx-search"></i>
          </button>
        </div>
      </form>
      <a href="#" class="notification">
        <i class="bx bxs-bell"></i>
        <span class="num">8</span>
      </a>
      <a href="#" class="profile">
        <img className="w-8 h-8" src={session?.user?.image} alt="user" />
        <span className="px-2">{session?.user?.name}</span>
      </a>
    </nav>
  );
}
