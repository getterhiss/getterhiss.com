const EmailForm = () => {

  // https://reactjs.org/docs/forms.html
  // https://github.com/tailwindlabs/tailwindcss-forms
  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert('Testing this!')
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 className="inline text-2xl font-thin tracking-tight text-gray-900 sm:block sm:text-2xl">
        Want product news and updates?
      </h2>
      <p className="inline text-2xl font-thin tracking-tight text-indigo-600 sm:block sm:text-2xl">
        Sign up for our newsletter.
      </p>
      <form className="mt-8 sm:flex" onSubmit={handleSubmit}>
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md"
          placeholder="Enter your email"
        />
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Notify me
          </button>
        </div>
      </form>
    </div>
  )
}
export default EmailForm;