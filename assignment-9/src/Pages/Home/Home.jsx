import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";
import Market from "./Market";
import Quote from "./quote";
import OurProduct from "../../components/OurProduct/OurProduct";
import OrderForm from "../../components/OrderForm/OrderForm";
// import OurProductDetails from "../../components/OurProductDetails/OurProductDetails";

const Home = () => {
    const cards = useLoaderData()
    // console.log(cards)
    return (
        <div>
             {/* <OrderForm></OrderForm> */}
            <h2 className="text-3xl text-center">WHO WE SERVE</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {
                cards?.map(card => <Cards key={card.id} card={card}></Cards>)
            }
            </div>
            <div>
                <Market></Market>
            </div>
            <div>
                <OurProduct></OurProduct>
            </div>
            <div className="my-10">
                <OrderForm></OrderForm>
            </div>
        </div>
    );
};

export default Home;