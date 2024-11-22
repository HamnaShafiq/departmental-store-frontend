import Link from "next/link";

const Home = () => {
    return (
        <div className="container py-5 bg-light border border-4">
            <h2 className="text-center mb-4">Project name: Departmental store</h2>
            <h2 className="text-center mb-4">Team members:</h2>
            <div className="text-center mb-5">
                <p className="h5">Hamna Shafiq</p>
                <p className="h5">Nimra Ghafoor</p>
                <p className="h5">Shanza Arshad</p>
            </div>

            <div className="text-center">
                <Link href={'/shop'} className="btn btn-primary btn-lg">
                    Visit site
                </Link>
            </div>
        </div>
    );
}

export default Home;
