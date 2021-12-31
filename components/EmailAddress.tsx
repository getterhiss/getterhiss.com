import he from 'he';

type EmailAddressProps = {
  className: string;
  name: string;
  domain: string;
  tld: string;
};

const EmailAddress = ({ className, name, domain, tld }: EmailAddressProps) => {
  const tmpl = `
    <a
      class="${className}"
      href="${he.encode(`mailto:${name}@${domain}.${tld}`, {
        encodeEverything: true,
      })}" 
      target="_blank"
    >
      ${he.encode(`${name}@${domain}.${tld}`, { encodeEverything: true })}
    </a>`;

  return <div className="inline" dangerouslySetInnerHTML={{ __html: tmpl }} />;
};
export default EmailAddress;
