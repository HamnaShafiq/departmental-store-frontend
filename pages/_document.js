import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
                {/* Font Awesome */}
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
                    rel="stylesheet"
                />
                {/* Libraries Stylesheet */}
                {/*<link href="lib/animate/animate.min.css" rel="stylesheet" />*/}
                {/*<link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />*/}
                {/* Customized Bootstrap Stylesheet */}
                {/*<link href="css/style.css" rel="stylesheet" />*/}
            </Head>
            <body>
            <Main />
            <NextScript />
            {/* JavaScript Libraries */}
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
            {/*<script src="lib/easing/easing.min.js"></script>*/}
            {/*<script src="lib/owlcarousel/owl.carousel.min.js"></script>*/}
            {/* Contact JavaScript File */}
            {/*<script src="mail/jqBootstrapValidation.min.js"></script>*/}
            {/*<script src="mail/contact.js"></script>*/}
            {/* Template JavaScript */}
            {/*<script src="js/main.js"></script>*/}
            </body>
        </Html>
    );
}
