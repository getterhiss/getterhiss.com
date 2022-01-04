import EmailAddress from 'components/EmailAddress';
import {
  MailIcon,
  ChatIcon,
  CodeIcon,
  UserCircleIcon,
} from '@heroicons/react/solid';

const NavBar = () => {
  return (
    <nav className="space-y-2 lg:space-y-0 lg:space-x-12">
      <div className="link">
        <MailIcon className="link-icon" />
        <EmailAddress className="" name="gh" domain="getter" tld="dev" />
      </div>

      <a className="link" href="sms:+1 646 883 0158">
        <ChatIcon className="link-icon" />
        +1 646 883 0158
      </a>
      <a
        className="link underline"
        href="https://www.linkedin.com/in/getterhiss"
        rel="noreferrer"
        target="_blank"
      >
        <UserCircleIcon className="link-icon" />
        LinkedIn
      </a>
      <a
        className="link underline"
        href="https://github.com/getterhiss"
        rel="noreferrer"
        target="_blank"
      >
        <CodeIcon className="link-icon" />
        Github
      </a>
    </nav>
  );
};
export default NavBar;
