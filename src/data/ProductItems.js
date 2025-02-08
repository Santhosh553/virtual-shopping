import sheenchair from "../assets/models/sheenchair.glb";
import ioschair from "../assets/models/sheenchair.usdz";
import painting from "../assets/models/Painting.glb";
import iospainting from "../assets/models/Painting.usdz";
import car from "../assets/models/car.glb";
import ioscar from "../assets/models/car.usdz";
import car1 from "../assets/models/Car1.glb";
import ioscar1 from "../assets/models/Car1.usdz";
import OfficeChair from "../assets/models/OfficeChair.glb";
import OfficeChairUsdz from "../assets/models/OfficeChair.usdz";
import pot from "../assets/models/pot.glb";
import potUsdz from "../assets/models/pot.usdz";
import iphone16 from "../assets/models/iphone16.glb";
import iosiphone16 from "../assets/models/iphone16.usdz";
import officetable from "../assets/models/office_table_desk.glb";
import iosofficetable from "../assets/models/office_table_desk.usdz";

const productItems = [
  {
    id: 1,
    name: "Office Table Desk",
    price: 2000,
    description: "Modern and stylish table perfect for office or home office.",
    modelSrc: officetable,
    iOSSrc: iosofficetable,
    category: "Furniture",
    color: "Orange"
  },
  {
    id: 2,
    name: "Sheen Chair",
    price: 3000,
    description: "Ergonomic chair with a sleek, modern design for added comfort.",
    modelSrc: sheenchair,
    iOSSrc: ioschair,
    category: "Furniture",
    color: "Orange"
  },
  {
    id: 3,
    name: "Office Chair",
    description: "Comfortable office chair with a sturdy and supportive backrest.",
    price: 1549,
    modelSrc: OfficeChair,
    iOSSrc: OfficeChairUsdz,
    category: "Furniture",
    color: "black"
  },
  {
    id: 4,
    name: "pot",
    description: "Elegant decorative pot to enhance indoor or outdoor spaces.",
    price: 200,
    modelSrc: pot,
    iOSSrc: potUsdz,
    category: "Environment",
    color: "Red"
  },
  {
    id: 5,
    name: "Painting",
    price: 1000,
    description: "Beautiful canvas painting with a wooden frame for artistic appeal.",
    modelSrc: painting,
    iOSSrc: iospainting,
    category: "Art",
    color: "Brown"
  },
  {
    id: 6,
    name: "Sport Car",
    price: 1199,
    description: "Stylish and dynamic sports car with a sleek design.",
    modelSrc: car1,
    iOSSrc: ioscar1,
    category: "Vehicle",
    color: "Red"
  },
  {
    id: 7,
    name: "IPhone 16",
    price: 69999,
    description: "Premium smartphone with cutting-edge technology and design.",
    modelSrc: iphone16,
    iOSSrc: iosiphone16,
    category: "Electronics",
    color: "Teal"
},
{
  id: 8,
  name: "Car",
  price: 2500,
  description: "Compact and versatile car designed for everyday travel.",
  modelSrc: car,
  iOSSrc: ioscar,
  category: "Vehicle",
  color: "Blue"
}
];
export default productItems;
