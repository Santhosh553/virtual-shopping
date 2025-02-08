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
    color: "Orange",
    annotations: [
      {
        title: "Spacious Work Surface",
        slot: "hotspot-1",
        position: "0.0116m 0.5745m -0.1384m",
        normal: "0.0283m 0.2137m 0.9765m",
        orbit: "10.89188deg 119.9775deg 0.0354m",
        target: "-0.1054m 0.0161m 0.1076m"
      },
      {
        title: "Storage Drawer",
        slot: "hotspot-2",
        position: "0.1188m 0.3513m 0.8659m",
        normal: "-0.3099m 0.9508m -0.0046m",
        orbit: "10.89188deg 119.9775deg 0.0354m",
        target: "-0.1054m 0.0161m 0.1076m"
      },
    ]
  },
  {
    id: 2,
    name: "Sheen Chair",
    price: 3000,
    modelSrc: sheenchair,
    iOSSrc: ioschair,
    category: "Furniture",
    color: "Orange",
    annotations: [
      {
        title: "comfortable-back",
        slot: "hotspot-1",
        position: "0.0116m 0.5745m -0.1384m",
        normal: "0.0283m 0.2137m 0.9765m",
        orbit: "10.89188deg 119.9775deg 0.0354m",
        target: "-0.1054m 0.0161m 0.1076m"
      },
      {
        title: "comfortable-seat",
        slot: "hotspot-2",
        position: "0.0088m 0.3513m 0.1659m",
        normal: "-0.3099m 0.9508m -0.0046m",
        orbit: "10.89188deg 119.9775deg 0.0354m",
        target: "-0.1054m 0.0161m 0.1076m"
      },
    ]
  },
  {
    id: 3,
    name: "Office Chair",
    price: 1549,
    modelSrc: OfficeChair,
    iOSSrc: OfficeChairUsdz,
    category: "Furniture",
    color: "black",
    annotations: [
      {
        title: "comfortable-back",
        slot: "hotspot-1",
        position: "0.0116m 0.5745m -0.1384m",
        normal: "0.0283m 0.2137m 0.9765m",
        orbit: "10.89188deg 119.9775deg 0.0354m",
        target: "-0.1054m 0.0161m 0.1076m"
      },
      {
        title: "comfortable-seat",
        slot: "hotspot-2",
        position: "0.0088m 0.3513m 0.1659m",
        normal: "-0.3099m 0.9508m -0.0046m",
        orbit: "10.89188deg 119.9775deg 0.0354m",
        target: "-0.1054m 0.0161m 0.1076m"
      },
    ]
  },
  {
    id: 4,
    name: "pot",
    price: 200,
    modelSrc: pot,
    iOSSrc: potUsdz,
    category: "Environment",
    color: "Red",
    annotations: [
      {
        title: "pot-structure",
        slot: "hotspot-1",
        position: "0.0088m 0.3513m 0.1659m",
        normal: "-0.3099m 0.9508m -0.0046m",
        orbit: "10.89188deg 119.9775deg 0.0354m",
        target: "-0.1054m 0.0161m 0.1076m"
      }
    ]
  },
  {
    id: 5,
    name: "Painting",
    price: 1000,
    modelSrc: painting,
    iOSSrc: iospainting,
    category: "Art",
    color: "Brown",
    annotations: [
      {
        title: "wooden-frame",
        slot: "hotspot-1",
        position: "0.0116m 0.5745m -0.1384m",
        normal: "0.0283m 0.2137m 0.9765m",
        orbit: "10.89188deg 119.9775deg 0.0354m",
        target: "-0.1054m 0.0161m 0.1076m"
      },
      {
        title: "pure-canvas",
        slot: "hotspot-2",
        position: "0.0088m 0.3513m 0.1659m",
        normal: "-0.3099m 0.9508m -0.0046m",
        orbit: "10.89188deg 119.9775deg 0.0354m",
        target: "-0.1054m 0.0161m 0.1076m"
      },
    ]
  },
  {
    id: 6,
    color: "Blue",
    price: 2000,
    annotations: [
      {
        title: "plastic-structure",
        slot: "hotspot-1",
        position: "-0.0036662781627494825m 0.11165170707633758m 0.07931578568217246m",
        normal: "-0.007882343763611447m 0.9530143214961644m 0.30282267365571863m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }, {
        title: "glossy-color",
        slot: "hotspot-2",
        position: "-0.09202904871903242m 0.05133736629679797m 0.0013477452825590153m",
        normal: "-0.9976942525197127m 0.061837681663106964m 0.027969261979253417m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
    ]
  },
  {
    id: 7,
    name: "Sport Car",
    price: 1199,
    modelSrc: car1,
    iOSSrc: ioscar1,
    category: "Vehicle",
    color: "Red",
    annotations: [
      {
        title: "plastic-structure",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }, {
        title: "glossy-color",
        slot: "hotspot-2",
        position: "0.008754174027053235m 0.3513235856998005m 0.1658749505478343m",
        normal: "-0.30988561688489596m 0.9507625837296717m -0.004627507703580716m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
    ]
  },
  {
    id: 8,
    name: "IPhone 16",
    price: 69999,
    modelSrc: iphone16,
    iOSSrc: iosiphone16,
    category: "Electronics",
    color: "Teal",
    annotations: [
        {
            title: "teal-body",
            slot: "hotspot-1",
            position: "1.010m 0.300m -0.100m",
            normal: "0.250m 0.300m 0.920m",
            orbit: "15.000deg 105.000deg 0.040m",
            target: "-0.080m 0.015m 0.050m"
        },
        {
            title: "camera-module",
            slot: "hotspot-2",
            position: "2.005m 4.500m 3.190m", 
            normal: "-0.300m 0.950m -0.005m",
            orbit: "20.000deg 110.000deg 0.045m",
            target: "-0.085m 0.020m 0.065m"
        },
    ]
},
];
export default productItems;
