export default function SignUp(){
    return(
        <>
        <div class="container small-container my-5" style={{max: '500px'}}>
    <h1 class="my-3">Sign Up</h1>
    <form action="your-action-url" method="POST">
      {/* <!-- Name Input --> */}
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" name="name" required/>
      </div>
      
      {/* <!-- Email Input --> */}
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" name="email" required/>
      </div>
      
      {/* <!-- Password Input --> */}
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" name="password" required/>
      </div>
      
      {/* <!-- Confirm Password Input --> */}
      <div class="mb-3">
        <label for="confirmPassword" class="form-label">Confirm Password</label>
        <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" required/>
      </div>
{/*       
      <!-- Submit Button --> */}
      <div class="mb-3">
        <button type="submit" class="btn btn-primary">Sign Up</button>
      </div>
      
      {/* <!-- Sign In Link --> */}
      <div class="mb-3">
        Already have an account? <a href="http://localhost:3000/sign-in">Sign In</a>
      </div>
    </form>
  </div>
        </>
    )
}