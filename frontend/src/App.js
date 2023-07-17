import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Header />
            <Container>
                <main className="py-3">
                    <h1>Welcome to E-Commerce app</h1>
                </main>
            </Container>
            <Footer />
        </>
    );
};

export default App;
