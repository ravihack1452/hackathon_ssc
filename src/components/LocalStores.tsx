import React from 'react';
import { Clock } from 'lucide-react';

interface LocalStoresProps {
  onStoreSelect: (storeId: string) => void;
}

export const LocalStores: React.FC<LocalStoresProps> = ({ onStoreSelect }) => {
  const localStores = [
    {
      id: 'zudio',
      name: 'Fashion Store',
      logo: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Fashion & Apparel',
      deliveryTime: '15 mins'
    },
    {
      id: 'zara',
      name: 'Trendy Boutique',
      logo: 'https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Fashion & Style',
      deliveryTime: '18 mins'
    },
    {
      id: 'nandini',
      name: 'Fresh Dairy',
      logo: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Dairy Products',
      deliveryTime: '10 mins'
    },
    {
      id: 'amul',
      name: 'Milk Corner',
      logo: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Dairy & Beverages',
      deliveryTime: '12 mins'
    },
    {
      id: 'ganesh-kirana',
      name: 'Grocery Mart',
      logo: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Grocery & Essentials',
      deliveryTime: '18 mins'
    },
    {
      id: 'fresh-fruits',
      name: 'Fresh Market',
      logo: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Fruits & Vegetables',
      deliveryTime: '14 mins'
    },
    {
      id: 'book-palace',
      name: 'Stationery Hub',
      logo: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Books & Stationery',
      deliveryTime: '16 mins'
    },
    {
      id: 'cera-sanitaryware',
      name: 'Hardware Store',
      logo: 'https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Hardware & Tools',
      deliveryTime: '25 mins'
    }
  ];

  return (
    <div className="px-4 py-6 bg-white">
      <h3 className="text-lg font-bold text-gray-900 mb-6">🏪 Discover Local Stores Near You</h3>
      <div className="grid grid-cols-2 gap-4">
        {localStores.map((store) => (
          <button
            key={store.id}
            onClick={() => onStoreSelect(store.id)}
            className="bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 group"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-16 rounded-lg overflow-hidden mb-3 border border-gray-100 group-hover:scale-105 transition-transform duration-200">
                <img
                  src={store.logo}
                  alt={store.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-sm font-semibold text-gray-900 text-center mb-1 group-hover:text-blue-600">
                {store.name}
              </h4>
              <p className="text-xs text-gray-500 mb-2 text-center">{store.category}</p>
              <div className="flex items-center space-x-1 bg-green-50 px-2 py-1 rounded-full">
                <Clock className="h-3 w-3 text-green-600" />
                <span className="text-xs text-green-600 font-medium">{store.deliveryTime}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};