import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  // const data = [
  //   {
  //     id: 1,
  //     title: "somethuing",
  //     img: "https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     img2: "https://images.pexels.com/photos/1105058/pexels-photo-1105058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },

  //   {
  //     id: 2,
  //     title: "another",
  //     isNew: true,
  //     img: "https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     img2: "https://images.pexels.com/photos/1549974/pexels-photo-1549974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     oldPrice: 69,
  //     price: 42,
  //   },
  //   {
  //     id: 3,
  //     title: "don't know",
  //     img: "https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     img2: "https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     oldPrice: 29,
  //     price: 21,
  //   },
  //   {
  //     id: 4,
  //     title: "last cart",
  //     img: "https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     img2: "https://images.pexels.com/photos/1374509/pexels-photo-1374509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     oldPrice: 11,
  //     price: 15,
  //   },
  // ];

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(
  //         process.env.REACT_APP_API_URL +
  //           `/products?populate=*&[filters][type][$eq]=${type}`,
  //         {
  //           headers: {
  //             Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
  //           },
  //         }
  //       );
  //       setData(res.data.data);
  //       console.log(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  console.log(data);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          pariatur earum! Esse, laboriosam iure et molestiae placeat fugit autem
          qui hic adipisci dolorum at maiores unde, voluptatem quo labore
          itaque?
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong"
          : loading
          ? "Compionent is loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
