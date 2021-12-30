import EmailAddress from '../components/EmailAddress'

const Header = () => {
  return (
    <header className="pb-10">
      <EmailAddress 
        className="font-sans text-brand"
        name='gh'
        domain='getter'
        tld='dev' 
      />
    </header>
  )
}
export default Header
