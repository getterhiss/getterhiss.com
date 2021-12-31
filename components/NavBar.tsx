import EmailAddress from 'components/EmailAddress';

const NavBar = () => {
  return (
    <nav className="md:pb-12 space-y-2 lg:space-y-0 lg:space-x-12">
      <EmailAddress className="link" name="gh" domain="getter" tld="dev" />
      <a className="link" href="tel:+1 616 883 0158">
        +1 616 883 0158
      </a>
      <a
        className="link underline"
        href="https://www.linkedin.com/in/getterhiss"
        rel="noreferrer"
        target="_blank"
      >
        LinkedIn
      </a>
      <a
        className="link underline"
        href="https://github.com/getterhiss"
        rel="noreferrer"
        target="_blank"
      >
        Github
      </a>
    </nav>
  );
};
export default NavBar;
