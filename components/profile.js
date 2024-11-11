export default function Profile(){
    return(
        <>
        <div classname="container small-container mt-5">
  <h1 classname="my-3">User Profile</h1>
  <form onsubmit="submitHandler(event)">
    <div classname="mb-3">
      <label for="name" classname="form-label">Name</label>
      <input type="text" classname="form-control" id="name" placeholder="Enter your name" required/>
    </div>
    
    <div classname="mb-3">
      <label for="email" classname="form-label">Email</label>
      <input type="email" classname="form-control" id="email" placeholder="Enter your email" required/>
    </div>
    
    <div classname="mb-3">
      <label for="password" classname="form-label">Password</label>
      <input type="password" classname="form-control" id="password" placeholder="Enter a new password"/>
    </div>
    
    <div classname="mb-3">
      <label for="confirmPassword" classname="form-label">Confirm Password</label>
      <input type="password" classname="form-control" id="confirmPassword" placeholder="Confirm your password"/>
    </div>
    
    <div classname="mb-3">
      <button type="submit" classname="btn btn-primary" id="updateButton">Update</button>
      <div id="loadingBox" classname="spinner-border text-primary ms-2" style={{display: "none;"}} role="status">
        <span classname="visually-hidden">Loading...</span>
      </div>
    </div>
  </form>
</div>
        </>
    )
}