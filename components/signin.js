export default function SignIn() {
    const login = {}
    return (
        <>
            <div classname="container small-container mt-5" style={{ max: '500px'}}>
                <h1 classname="my-3 text-center">Sign In</h1>
                <form id="signInForm">
                    <div classname="form-group mb-3">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            classname="form-control"
                            id="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div classname="form-group mb-3">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            classname="form-control"
                            id="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div classname="d-grid gap-2 mb-3">
                        <button type="button" id="signInButton" classname="btn btn-primary btn-block">
                            Sign In
                        </button>
                    </div>
                    <div classname="text-center">
                        New customer? <a href="/sign-up">Create your account</a>
                    </div>
                </form>
            </div>
        </>
    )
}