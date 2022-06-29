const Header = (props) => {
  return (
    <header>
      <h1>Expensive Tracker</h1>
      <nav>
        {props.isAuthenticated && (
          <button onClick={props.onLogout}>Logout</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
