import React from 'react';
import { ArrowLeft, Plus, Minus } from 'lucide-react';
import { CartItem } from '../App';

interface StoreProductsProps {
  storeId: string;
  onBack: () => void;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  getItemQuantity: (id: string) => number;
  updateQuantity: (id: string, quantity: number) => void;
}

export const StoreProducts: React.FC<StoreProductsProps> = ({ 
  storeId, 
  onBack, 
  addToCart, 
  getItemQuantity, 
  updateQuantity 
}) => {
  const getStoreData = (storeId: string) => {
    const storeData: { [key: string]: any } = {
      'zara': {
        name: 'Zara',
        category: 'Jewellery & Accessories',
        deliveryTime: '15 min',
        products: [
          { id: 'zara-1', name: 'Gold Plated Earrings', price: 899, originalPrice: 1299, weight: '1 pair', image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '31% OFF' },
          { id: 'zara-2', name: 'Silver Chain Necklace', price: 1299, originalPrice: 1899, weight: '1 piece', image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '32% OFF' },
          { id: 'zara-3', name: 'Diamond Ring', price: 2999, originalPrice: 4999, weight: '1 piece', image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '40% OFF' },
          { id: 'zara-4', name: 'Pearl Bracelet', price: 799, originalPrice: 1199, weight: '1 piece', image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '33% OFF' },
          { id: 'zara-5', name: 'Fashion Watch', price: 1599, originalPrice: 2499, weight: '1 piece', image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '36% OFF' },
          { id: 'zara-6', name: 'Pendant Set', price: 1099, originalPrice: 1699, weight: '1 set', image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '35% OFF' }
        ]
      },
      'zudio': {
        name: 'Zudio',
        category: 'Fashion & Clothing',
        deliveryTime: '18 min',
        products: [
          { id: 'zudio-1', name: 'Men\'s Cotton T-Shirt', price: 399, originalPrice: 599, weight: 'M Size', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '33% OFF' },
          { id: 'zudio-2', name: 'Women\'s Denim Jeans', price: 799, originalPrice: 1299, weight: '30 Size', image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '38% OFF' },
          { id: 'zudio-3', name: 'Casual Shirt', price: 599, originalPrice: 899, weight: 'L Size', image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '33% OFF' },
          { id: 'zudio-4', name: 'Summer Dress', price: 899, originalPrice: 1499, weight: 'M Size', image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '40% OFF' },
          { id: 'zudio-5', name: 'Sports Shoes', price: 1299, originalPrice: 1999, weight: '8 Size', image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '35% OFF' },
          { id: 'zudio-6', name: 'Leather Belt', price: 299, originalPrice: 499, weight: '32 Size', image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '40% OFF' }
        ]
      },
      'mayuri-bakery': {
        name: 'Mayuri Bakery',
        category: 'Bakery & Sweets',
        deliveryTime: '12 min',
        products: [
          { id: 'mayuri-1', name: 'Chocolate Cake', price: 450, weight: '500g', image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'mayuri-2', name: 'Vanilla Cupcakes', price: 180, weight: '6 pieces', image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'mayuri-3', name: 'Fresh Croissants', price: 120, weight: '4 pieces', image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'mayuri-4', name: 'Gulab Jamun', price: 200, weight: '1 kg', image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'mayuri-5', name: 'Rasgulla', price: 180, weight: '1 kg', image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'mayuri-6', name: 'Samosa', price: 60, weight: '6 pieces', image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=200' }
        ]
      },
      'nandini': {
        name: 'Nandini Milk Parlour',
        category: 'Dairy Products',
        deliveryTime: '10 min',
        products: [
          { id: 'nandini-1', name: 'Nandini Full Cream Milk', price: 28, weight: '500 ml', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-2', name: 'Nandini Toned Milk', price: 25, weight: '500 ml', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-3', name: 'Nandini Curd', price: 30, weight: '400 g', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-4', name: 'Nandini Buttermilk', price: 15, weight: '200 ml', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-5', name: 'Nandini Paneer', price: 80, weight: '200 g', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-6', name: 'Nandini Ghee', price: 250, weight: '500 ml', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' }
        ]
      },
      'medplus': {
        name: 'MedPlus',
        category: 'Pharmacy & Health',
        deliveryTime: '20 min',
        products: [
          { id: 'medplus-1', name: 'Paracetamol Tablets', price: 25, weight: '10 tablets', image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'medplus-2', name: 'Vitamin C Tablets', price: 120, weight: '30 tablets', image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'medplus-3', name: 'Hand Sanitizer', price: 80, weight: '100 ml', image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'medplus-4', name: 'Face Mask', price: 150, weight: '50 pieces', image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'medplus-5', name: 'Thermometer', price: 350, weight: '1 piece', image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'medplus-6', name: 'Bandages', price: 45, weight: '10 pieces', image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=200' }
        ]
      },
      'karachi-bakery': {
        name: 'Karachi Bakery',
        category: 'Bakery & Biscuits',
        deliveryTime: '16 min',
        products: [
          { id: 'karachi-1', name: 'Fruit Biscuits', price: 180, weight: '400g', image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'karachi-2', name: 'Osmania Biscuits', price: 120, weight: '200g', image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'karachi-3', name: 'Dilkush Biscuits', price: 150, weight: '300g', image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'karachi-4', name: 'Butter Cookies', price: 200, weight: '250g', image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'karachi-5', name: 'Chocolate Cookies', price: 220, weight: '250g', image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'karachi-6', name: 'Coconut Cookies', price: 190, weight: '250g', image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=200' }
        ]
      }
    };

    return storeData[storeId] || { name: 'Store', category: 'General', deliveryTime: '15 min', products: [] };
  };

  const store = getStoreData(storeId);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      store: store.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      weight: product.weight
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-4 py-4">
        <div className="flex items-center space-x-4 mb-3">
          <button onClick={onBack} className="p-1">
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              amazon <span className="text-blue-600 font-normal italic">now</span>
            </h1>
            <p className="text-sm text-gray-600">{store.name}</p>
          </div>
        </div>
        <div className="bg-blue-50 px-3 py-2 rounded-lg">
          <p className="text-sm text-blue-800">
            <span className="font-medium">{store.name}</span> • {store.category} • Delivery in {store.deliveryTime}
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 py-4 pb-20">
        <div className="grid grid-cols-3 gap-2">
          {store.products.map((product: any) => {
            const quantity = getItemQuantity(product.id);
            return (
              <div key={product.id} className="bg-white rounded-lg p-2 border border-gray-200">
                <div className="relative mb-2">
                  {product.discount && (
                    <div className="absolute top-1 left-1 bg-orange-500 text-white px-1 py-0.5 rounded text-xs font-bold z-10">
                      {product.discount}
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-20 object-cover rounded-md"
                  />
                </div>
                
                <div className="mb-1">
                  <h3 className="text-xs font-medium text-gray-900 line-clamp-2 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-600">{product.weight}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-500 line-through">₹{product.originalPrice}</span>
                    )}
                  </div>
                  
                  {quantity > 0 ? (
                    <div className="flex items-center bg-yellow-400 rounded-full text-xs">
                      <button 
                        className="p-0.5"
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                      >
                        <Minus className="h-3 w-3 text-black" />
                      </button>
                      <span className="px-2 py-0.5 text-black font-bold">{quantity}</span>
                      <button 
                        className="p-0.5"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                      >
                        <Plus className="h-3 w-3 text-black" />
                      </button>
                    </div>
                  ) : (
                    <button 
                      className="bg-yellow-400 text-black p-1.5 rounded-full hover:bg-yellow-500"
                      onClick={() => handleAddToCart(product)}
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};