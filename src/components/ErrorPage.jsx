import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">404: Page Not Found</h1>
                <p className="text-lg text-gray-600 mb-8">We couldn't find the page you were looking for.</p>
                <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Go back to the homepage
                </Link>
            </div>
        </div>
    );
}