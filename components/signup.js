export default function SignUp() {
  return (
    <>
      <div classname="container small-container my-5" style={{ max: '500px' }}>
        <h1 classname="my-3  text-center">Sign Up</h1>
        <form action="your-action-url" method="POST">
          {/* <!-- Name Input --> */}
          <div classname="mb-3">
            <label for="name" classname="form-label">Name</label>
            <input type="text" classname="form-control" id="name" name="name" required />
          </div>

          {/* <!-- Email Input --> */}
          <div classname="mb-3">
            <label for="email" classname="form-label">Email</label>
            <input type="email" classname="form-control" id="email" name="email" required />
          </div>  

          {/* <!-- Password Input --> */}
          <div classname="mb-3">
            <label for="password" classname="form-label">Password</label>
            <input type="password" classname="form-control" id="password" name="password" required />
          </div>

          {/* <!-- Confirm Password Input --> */}
          <div classname="mb-3">
            <label for="confirmPassword" classname="form-label">Confirm Password</label>
            <input type="password" classname="form-control" id="confirmPassword" name="confirmPassword" required />
          </div>
          {/*       
      <!-- Submit Button --> */}
          <div classname="mb-3">
            <button type="submit" classname="btn btn-primary">Sign Up</button>
          </div>

          {/* <!-- Sign In Link --> */}
          <div classname="mb-3">
            Already have an account? <a href="http://localhost:3000/sign-in">Sign In</a>
          </div>
        </form>
      </div>
    </>
  )
}