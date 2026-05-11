import AccordionList from "./AccordianList";
import { useState } from "react";
const MenuAccordion = ({ data, showItems, setShowIndex }) => {
  // we will not have this here to understand the concept of lifting the state up. Parents are responsible for passing the state to the child components. as here, every time we click on the title, we are toggling the state individually child. but we want if one item is expanded, other collapse.
  //   const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setShowIndex();
  };
  return (
    <div className="mt-10 px-3 bg-gray-100 border-b border-gray-300">
      <div className="flex justify-between " onClick={handleToggle}>
        <span className="text-xl font-bold py-5  w-full ">
          {data.title} {"(" + data.itemCards.length + ")"}
        </span>
        {!showItems && (
          <span className="font-bold text-xl py-5 border-b border-gray-300">
            +
          </span>
        )}
        {showItems && (
          <span className="font-bold text-xl py-5 border-b border-gray-300">
            -
          </span>
        )}
      </div>

      {showItems && <AccordionList items={data.itemCards} />}
    </div>
  );
};

export default MenuAccordion;

/**lifting the state up - passing the state to the parent component. In this, we are passing the state to the parent component via toggle function */

/** Controlled Component - A component whose state is managed by the parent component, and the parent component is responsible for updating the state, eg check the state passed by parent component., but uncontrolled Component - A component whose state is managed by the browser, and the browser is responsible for updating the state, eg wen we were managing state here. */
