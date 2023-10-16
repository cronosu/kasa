import Banner from "../Component/Banner";
import Cards from "../Component/Cards";
import Header from "../Component/Header";

function Main() {
    return (
        <>
            <Header />
            <Banner
                content="Chez vous, partout et ailleurs"
            />
            <Cards />
        </>)
}

export default Main