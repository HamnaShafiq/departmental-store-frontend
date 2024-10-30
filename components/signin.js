export default function LogIn() {
    return (
        <>
            <div class="container small-container mt-5" style={{ max: '500px'}}>
                <h1 class="my-3 text-center">Sign In</h1>
                <form id="signInForm">
                    <div class="form-group mb-3">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div class="form-group mb-3">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            id="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div class="d-grid gap-2 mb-3">
                        <button type="button" id="signInButton" class="btn btn-primary btn-block">
                            Sign In
                        </button>
                    </div>
                    <div class="text-center">
                        New customer? <a href="signup.html">Create your account</a>
                    </div>
                </form>
            </div>
        </>
    )
}