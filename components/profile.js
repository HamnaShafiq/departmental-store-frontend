export default function Profile(){
    return(
        <>
        <div class="container small-container mt-5">
  <h1 class="my-3">User Profile</h1>
  <form onsubmit="submitHandler(event)">
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Enter your name" required/>
    </div>
    
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" placeholder="Enter your email" required/>
    </div>
    
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" placeholder="Enter a new password"/>
    </div>
    
    <div class="mb-3">
      <label for="confirmPassword" class="form-label">Confirm Password</label>
      <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm your password"/>
    </div>
    
    <div class="mb-3">
      <button type="submit" class="btn btn-primary" id="updateButton">Update</button>
      <div id="loadingBox" class="spinner-border text-primary ms-2" style={{display: "none;"}} role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </form>
</div>
        </>
    )
}