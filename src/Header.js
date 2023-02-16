const Header = (props) => {
  return (
    <h1>
      Hi, my name {props.name} <br></br>
      Kerja {props.jobs}
    </h1>
  );
};
// Fungsi Header akan mengembalikan JSX element header
export default Header;
