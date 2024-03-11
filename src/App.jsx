import Counter from "./components/counter";
import Task from "./components/task";

const App = () => {
  const newItemsArr = [
    { name: "Jackets", rating: 4 },
    { name: "Shirts", rating: 3.5 },
    { name: "Caps", rating: 4.1 },
    { name: "Jeans", rating: 4.2 },
  ];
  return (
    <div>
      {newItemsArr.map((clothingItem, index) => {
        return <Counter key={index} item={clothingItem} />;
      })}
    </div>
  );
};

export default App;
