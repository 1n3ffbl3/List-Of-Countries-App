import Link from 'next/link';


const linkStyle = {
  marginRight: 15,
};


const Header = () => (
  <div>
    <h1>List of Countries</h1>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/eu">
      <a style={linkStyle}>Eu</a>
    </Link>
    <Link href="/search">
      <a style={linkStyle}>Search</a>
    </Link>
  </div>
);


export default Header;