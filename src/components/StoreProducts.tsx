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
      'zudio': {
        name: 'Zudio',
        category: 'Fashion & Apparel',
        deliveryTime: '15 min',
        products: [
          { id: 'zudio-1', name: 'Men\'s Cotton T-Shirt', price: 399, originalPrice: 599, weight: 'M Size', image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '33% OFF' },
          { id: 'zudio-2', name: 'Women\'s Denim Jeans', price: 799, originalPrice: 1299, weight: '30 Size', image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '38% OFF' },
          { id: 'zudio-3', name: 'Casual Shirt', price: 599, originalPrice: 899, weight: 'L Size', image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '33% OFF' },
          { id: 'zudio-4', name: 'Summer Dress', price: 899, originalPrice: 1499, weight: 'M Size', image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '40% OFF' },
          { id: 'zudio-5', name: 'Sports Shoes', price: 1299, originalPrice: 1999, weight: '8 Size', image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '35% OFF' },
          { id: 'zudio-6', name: 'Leather Belt', price: 299, originalPrice: 499, weight: '32 Size', image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '40% OFF' },
          { id: 'zudio-7', name: 'Winter Jacket', price: 1599, originalPrice: 2499, weight: 'L Size', image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '36% OFF' },
          { id: 'zudio-8', name: 'Cotton Shorts', price: 399, originalPrice: 599, weight: 'M Size', image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '33% OFF' },
          { id: 'zudio-9', name: 'Formal Trousers', price: 799, originalPrice: 1199, weight: '32 Size', image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '33% OFF' },
          { id: 'zudio-10', name: 'Polo T-Shirt', price: 499, originalPrice: 799, weight: 'L Size', image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '38% OFF' },
          { id: 'zudio-11', name: 'Sneakers', price: 999, originalPrice: 1599, weight: '9 Size', image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '38% OFF' },
          { id: 'zudio-12', name: 'Hoodie', price: 899, originalPrice: 1399, weight: 'M Size', image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '36% OFF' },
          { id: 'zudio-13', name: 'Chinos', price: 699, originalPrice: 999, weight: '30 Size', image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '30% OFF' },
          { id: 'zudio-14', name: 'Tank Top', price: 299, originalPrice: 499, weight: 'S Size', image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '40% OFF' },
          { id: 'zudio-15', name: 'Cardigan', price: 799, originalPrice: 1299, weight: 'L Size', image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '38% OFF' },
          { id: 'zudio-16', name: 'Joggers', price: 599, originalPrice: 899, weight: 'M Size', image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '33% OFF' },
          { id: 'zudio-17', name: 'Blazer', price: 1999, originalPrice: 2999, weight: 'L Size', image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '33% OFF' },
          { id: 'zudio-18', name: 'Scarf', price: 199, originalPrice: 399, weight: 'One Size', image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '50% OFF' },
          { id: 'zudio-19', name: 'Cap', price: 299, originalPrice: 499, weight: 'One Size', image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '40% OFF' },
          { id: 'zudio-20', name: 'Socks Pack', price: 199, originalPrice: 299, weight: '3 Pairs', image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=200', discount: '33% OFF' }
        ]
      },
      'nandini': {
        name: 'Nandini Dairy',
        category: 'Dairy Products',
        deliveryTime: '10 min',
        products: [
          { id: 'nandini-1', name: 'Nandini Full Cream Milk', price: 28, weight: '500 ml', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-2', name: 'Nandini Toned Milk', price: 25, weight: '500 ml', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-3', name: 'Nandini Curd', price: 30, weight: '400 g', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-4', name: 'Nandini Buttermilk', price: 15, weight: '200 ml', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-5', name: 'Nandini Paneer', price: 80, weight: '200 g', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-6', name: 'Nandini Ghee', price: 250, weight: '500 ml', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-7', name: 'Nandini Butter', price: 45, weight: '100 g', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-8', name: 'Nandini Cheese Slice', price: 60, weight: '200 g', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-9', name: 'Nandini Lassi', price: 20, weight: '200 ml', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-10', name: 'Nandini Ice Cream', price: 35, weight: '100 ml', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-11', name: 'Nandini Milk Powder', price: 180, weight: '500 g', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-12', name: 'Nandini Flavored Milk', price: 25, weight: '200 ml', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-13', name: 'Nandini Cream', price: 40, weight: '200 ml', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-14', name: 'Nandini Kheer', price: 30, weight: '200 ml', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-15', name: 'Nandini Yogurt Drink', price: 18, weight: '200 ml', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-16', name: 'Nandini Cottage Cheese', price: 70, weight: '200 g', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-17', name: 'Nandini Milk Cake', price: 120, weight: '250 g', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-18', name: 'Nandini Badam Milk', price: 35, weight: '200 ml', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-19', name: 'Nandini Shrikhand', price: 50, weight: '200 g', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'nandini-20', name: 'Nandini Malai', price: 25, weight: '100 g', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200' }
        ]
      },
      'ganesh-kirana': {
        name: 'Ganesh Kirana Store',
        category: 'Grocery & Essentials',
        deliveryTime: '18 min',
        products: [
          { id: 'ganesh-1', name: 'Basmati Rice', price: 120, weight: '1 kg', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'ganesh-2', name: 'Wheat Flour', price: 45, weight: '1 kg', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'ganesh-3', name: 'Sugar', price: 42, weight: '1 kg', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'ganesh-4', name: 'Cooking Oil', price: 140, weight: '1 L', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'ganesh-5', name: 'Turmeric Powder', price: 80, weight: '200 g', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'ganesh-6', name: 'Red Chili Powder', price: 90, weight: '200 g', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'ganesh-7', name: 'Cumin Seeds', price: 120, weight: '100 g', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'ganesh-8', name: 'Mustard Seeds', price: 60, weight: '100 g', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'ganesh-9', name: 'Black Pepper', price: 200, weight: '100 g', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'ganesh-10', name: 'Cardamom', price: 300, weight: '50 g', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'ganesh-11', name: 'Cinnamon Sticks', price: 80, weight: '50 g', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'ganesh-12', name: 'Bay Leaves', price: 40, weight: '20 g', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'ganesh-13', name: 'Garam Masala', price: 60, weight: '100 g', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'ganesh-14', name: 'Coriander Seeds', price: 50, weight: '100 g', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'ganesh-15', name: 'Fenugreek Seeds', price: 40, weight: '100 g', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'ganesh-16', name: 'Asafoetida', price: 150, weight: '50 g', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'ganesh-17', name: 'Tamarind', price: 30, weight: '200 g', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'ganesh-18', name: 'Jaggery', price: 50, weight: '500 g', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'ganesh-19', name: 'Rock Salt', price: 25, weight: '1 kg', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'ganesh-20', name: 'Baking Soda', price: 20, weight: '100 g', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=200' }
        ]
      },
      'book-palace': {
        name: 'Book Palace',
        category: 'Books & Stationery',
        deliveryTime: '14 min',
        products: [
          { id: 'book-1', name: 'Notebook A4', price: 45, weight: '200 pages', image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'book-2', name: 'Ball Pen Set', price: 25, weight: '5 pens', image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'book-3', name: 'Pencil Box', price: 80, weight: '1 piece', image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'book-4', name: 'Eraser Pack', price: 15, weight: '5 pieces', image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'book-5', name: 'Ruler Set', price: 30, weight: '3 pieces', image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'book-6', name: 'Geometry Box', price: 120, weight: '1 set', image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'book-7', name: 'Color Pencils', price: 60, weight: '12 colors', image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'book-8', name: 'Sketch Book', price: 35, weight: '50 pages', image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'book-9', name: 'Marker Set', price: 90, weight: '10 colors', image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'book-10', name: 'Stapler', price: 75, weight: '1 piece', image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'book-11', name: 'Paper Clips', price: 20, weight: '100 pieces', image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'book-12', name: 'Sticky Notes', price: 40, weight: '4 pads', image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'book-13', name: 'File Folder', price: 25, weight: '1 piece', image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'book-14', name: 'Calculator', price: 150, weight: '1 piece', image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'book-15', name: 'Highlighter Set', price: 50, weight: '4 colors', image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'book-16', name: 'Diary 2024', price: 80, weight: '365 pages', image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'book-17', name: 'Whiteboard Marker', price: 35, weight: '2 pieces', image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'book-18', name: 'Correction Tape', price: 25, weight: '1 piece', image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'book-19', name: 'Compass Set', price: 45, weight: '1 set', image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=200' },
          { id: 'book-20', name: 'Glue Stick', price: 18, weight: '1 piece', image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=200' }
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
            <h1 className="text-xl font-bold text-gray-900">{store.name}</h1>
            <p className="text-sm text-gray-600">{store.category} • {store.deliveryTime}</p>
          </div>
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