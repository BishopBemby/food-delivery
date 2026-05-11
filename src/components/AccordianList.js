import { constants } from "../utils/constants";

const AccordionList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div className="py-14 flex justify-between border-r-0 border-b border-gray-300" key={item.card.info.id}>
          <div className="flex flex-col">
            <span className="font-bold text-lg">{item.card.info.name}</span>
            <span className="font-bold text-sm py-2">
              Rs. {item.card.info.price / 100}
            </span>
            <span className="text-xs py-2">{item.card.info.description}</span>
          </div>
          <div className="w-32 h-24 ml-6">
            <img
              src={constants.FETCH_IMG_URL + item.card.info.imageId}
              alt="item"
              className="w-full h-full object-cover"
            />
            <button className="bg-orange-500 py-2 px-5 text-white left-12 relative mt-2 rounded-xl hover:bg-orange-200 hover:text-black">Add +</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionList;
