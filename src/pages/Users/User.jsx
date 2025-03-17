import { useState } from "react";
import { ShoppingCart, CreditCard, Clock, PlusCircle } from "lucide-react";

export default function ServiceSelection() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [userCars, setUserCars] = useState([]);
  const [newCar, setNewCar] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [paymentMode, setPaymentMode] = useState("");
  const [cart, setCart] = useState([]);

  const services = [
    { id: 1, name: "Oil Change", price: "$40" },
    { id: 2, name: "Car Wash", price: "$20" },
    { id: 3, name: "Brake Inspection", price: "$50" },
    { id: 4, name: "Tire Rotation", price: "$30" },
    { id: 5, name: "Battery Check", price: "$25" },
  ];

  const addCar = () => {
    if (newCar && !userCars.includes(newCar)) {
      setUserCars([...userCars, newCar]);
      setNewCar("");
    }
  };

  const addToCart = (service) => {
    setCart([...cart, service]);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4 space-y-4">
        <h2 className="text-xl font-bold">My Cars</h2>
        <input
          type="text"
          placeholder="Add Car Model"
          value={newCar}
          onChange={(e) => setNewCar(e.target.value)}
          className="w-full p-2 rounded border"
        />
        <button 
          onClick={addCar} 
          className="mt-2 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Add Car
        </button>
        <select
          className="w-full p-2 rounded border mt-4"
          onChange={(e) => setSelectedCar(e.target.value)}
        >
          <option value="">Select Car</option>
          {userCars.map((car, index) => (
            <option key={index} value={car}>{car}</option>
          ))}
        </select>
        {selectedCar && (
          <div className="mt-4 p-2 bg-white rounded shadow">
            <h3 className="text-lg font-semibold">Service History</h3>
            <p className="text-gray-600">Next Service Due: 12/06/2025</p>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Select Services for {selectedCar || "your car"}</h1>
        <div className="grid grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-4 cursor-pointer border rounded-lg shadow-md hover:bg-blue-50"
            >
              <h3 className="text-lg font-semibold">{service.name}</h3>
              <p className="text-gray-600">{service.price}</p>
              <button
                className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => addToCart(service)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart Section */}
        {cart.length > 0 && (
          <div className="mt-6 p-4 border-t relative">
            <h2 className="text-lg font-semibold">Your Selected Services</h2>
            <ul className="mt-2">
              {cart.map((item, index) => (
                <li key={index} className="p-2 bg-white rounded shadow my-2">
                  {item.name} - {item.price}
                </li>
              ))}
            </ul>
            <h2 className="text-lg font-semibold mt-4">Payment Options</h2>
            <div className="flex flex-wrap space-x-4 mt-2">
              <button 
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 mt-2"
                onClick={() => setPaymentMode("online")}
              >
                Pay Online
              </button>
              <button 
                className="px-4 py-2 border rounded-lg hover:bg-gray-200 mt-2"
                onClick={() => setPaymentMode("after-service")}
              >
                Pay After Service
              </button>
            </div>
            {paymentMode && (
              <p className="mt-4 text-green-600">Selected Payment Mode: {paymentMode}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
