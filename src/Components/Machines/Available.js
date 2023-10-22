import { Fragment, useState } from "react";
import { Route, useParams } from "react-router-dom/cjs/react-router-dom.min";
import AvailableList from "./AvailableList";
import MoreInfo from "./MoreInfo";

const Available = () => {
  const params = useParams();

  const [item, setItem] = useState(undefined);

  const onAdd = (data) => {
    setItem(data);
  };

  const cancelHandler = () => {
    setItem(undefined);
  };

  const data = [
    {
      id: "soil-cultivation",
      items: [
        {
          id: "disc-harrow",
          fullName: "TRACTOR DRIVEN Polished Carbon Steel Trailing Disc Harrow",
          Brand: "BHOOR",
          Location: "Mysore",
          Price: 1000,
          Contact: "987 - 789 - 986",
          image:
            "https://agriculturalmachinery.weebly.com/uploads/1/3/2/2/132264880/harrows_orig.jpg",
          MOQ: "1 Piece",
          Type: "Disc Harrow, Trailing",
          Material: "Carbon Steel, BORON STEEL",
          Certification: "ISO 9001:2008 Certified",
          Application: "Agriculture, Cultivation",
          "Supply Type": "Manufacturer, Exporter, Supplier",
        },
        {
          id: "folding-cultivator",
          fullName: "Folding Cultivator",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2022/4/QR/KA/IB/11057108/gfg-500x500.png",
          Brand: "Sonalika",
          Location: "Mysore",
          Price: 800,
          Contact: "9432 - 343 - 434",
          Application: "Agriculture",
          Weight: "200-400kg",
          "Ground Clearance": "400-450mm",
          "Number of Blade": 12 - 16,
          "Tractor Power": "125-150 HP",
          "Supply Type": "Manufacturer, Exporter, Supplier",
        },
      ],
    },
    {
      id: "f-p-dispenser",
      items: [
        {
          id: "manure-spreader",
          fullName: "Guruv Steel Manure Spreader",
          image:
            "https://www.pikrite.com/wp-content/uploads/2022/03/IMG_2648-1.jpg",
          Brand: "Sonalika",
          Location: "Bangalore",
          Price: 2000,
          Contact: "9432 - 343 - 434",
          MOQ: "1 Piece",
          Type: "Manure Spreader",
          "Power Source": "Electricity",
          "Spreading Width": "1000-2000mn",
          Application: "Agriculture, Spreader",
          "Supply Type": "Exporter, Supplier, Importer, Trader",
        },
        {
          id: "sprayer",
          fullName: "Tractor Operated Sprayer",
          image:
            "https://www.shaktimanagro.com/wp-content/uploads/2017/02/Rakshak_1.png",
          Brand: "Germinef",
          Location: "Mangalore",
          Price: 2000,
          Contact: "9432 - 343 - 434",
          Material: "Metal",
          Condition: "New",
          Application: "Agricultural Use",
          Feature: "Best Quality, Crack Proof, Durable, Highly Efficient",
          "Supply Type": "Manufacturer, Exporter, Supplier",
        },
      ],
    },
    {
      id: "harvester",
      items: [
        {
          id: "combine-harvester",
          fullName: "Self Propelled Combine Harvester",
          image:
            "https://www.mechanicalpower.net/wp-content/uploads/2023/05/Combine-Harvester.jpg",
          Brand: "Sonalika",
          Location: "Mysore",
          Price: 1000,
          Contact: "9432 - 343 - 434",
          MOQ: "1 Bag(s)",
          Type: "Combine Harvester",
          Application: "Harvest",
          Color: "Green",
          Condition: "New",
          "Driven Type": "Hydraulic",
          "Supply Type": "Manufacturer, Exporter, Supplier",
        },
        {
          id: "potato-harvester",
          fullName: "Tractor mounted Manual Potato Harvester",
          image:
            "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_848,h_565/https://www.futurefarming.com/app/uploads/2022/09/IMG_groenewold-1-848x565.jpg",
          Brand: "John Dheere",
          Location: "Gadag",
          Price: 1200,
          Contact: "9432 - 343 - 434",
          Application: "Agriculture, Harvesting",
          Certification: "CE Certified, ISO 9001:2008 Certified",
          Weight: "1800kg",
          Condition: "New",
          Feature: "Best Quality, Crack Proof, Durable, Highly Efficient",
          "Supply Type": "Manufacturer, Exporter, Supplier",
        },
      ],
    },
    {
      id: "loaders",
      items: [
        {
          id: "sugarcane-loader",
          fullName: "Sugarcane Grabber Cum Loader",
          image:
            "https://www.deere.asia/assets/images/region-1/products/cane-loaders/1850-1366x766.png",
          Brand: "John Dheere",
          Location: "Mysore",
          Price: 1500,
          Contact: "9432 - 343 - 434",
          MOQ: "1 Piece(s)",
          "Max. Grabbing Radius": "5300mm",
          "Max. Height of Snatch": "5400mm",
          Revolution: "40 to 60 Liter",
          Voltage: "220V",
          "Walking Speed": "30KM/H",
          "Supply Type": "Manufacturer, Exporter, Supplier",
        },
        {
          id: "mud-loader",
          fullName: "Hydraulic Mud Loader",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2022/3/HO/NT/YL/10302411/mud-loader-500x500.jpg",
          Brand: "Sonalika",
          Location: "Mysore",
          Price: 3000,
          Contact: "9432 - 343 - 434",
          Application: "Agriculture, Loading",
          Certification: "ISO Certified",
          Weight: "2000kg",
          Feature: "Best Quality, Crack Proof, Durable, Highly Efficient",
          "Supply Type": "Manufacturer, Exporter, Supplier",
        },
      ],
    },
  ];

  const res = data.filter((item) => {
    return item.id === params.id;
  });

  return (
    <Fragment>
      {!item && (
        <div className="my-5">
          <h1 align="center" className="mt-5">
            Available Machines
          </h1>
          <div
            className="mx-3 my-4"
            align="center"
            style={{
              display: "flex",
              gap: "3rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {res[0].items.map((items) => (
              <AvailableList
                key={Math.random().toString()}
                pid={res[0].id}
                items={items}
                onChoosing={onAdd}
              />
            ))}
          </div>
        </div>
      )}
      {item && (
        <Route path={`/machines/${item.pid}/${item.id}`} exact>
          <MoreInfo item={item.item} onCancel={cancelHandler} />
        </Route>
      )}
    </Fragment>
  );
};

export default Available;
