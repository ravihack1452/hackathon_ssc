import React from 'react';
import { Clock } from 'lucide-react';

interface LocalStoresProps {
  onStoreSelect: (storeId: string) => void;
}

export const LocalStores: React.FC<LocalStoresProps> = ({ onStoreSelect }) => {
  const localStores = [
    {
      id: 'zudio',
      name: 'Zudio',
      logo: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=150',
      category: 'Fashion',
      deliveryTime: '15 mins'
    },
    {
      id: 'zara',
      name: 'Zara',
      logo: 'https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&w=150',
      category: 'Fashion',
      deliveryTime: '18 mins'
    },
    {
      id: 'nandini',
      name: 'Nandini',
      logo: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=150',
      category: 'Dairy',
      deliveryTime: '10 mins'
    },
    {
      id: 'amul',
      name: 'Amul',
      logo: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=150',
      category: 'Dairy',
      deliveryTime: '12 mins'
    },
    {
      id: 'ganesh-kirana',
      name: 'Ganesh Kirana',
      logo: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=150',
      category: 'Grocery',
      deliveryTime: '18 mins'
    },
    {
      id: 'fresh-fruits',
      name: 'Fresh Fruits Corner',
      logo: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=150',
      category: 'Fruits',
      deliveryTime: '14 mins'
    },
    {
      id: 'book-palace',
      name: 'Book Palace',
      logo: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=150',
      category: 'Books',
      deliveryTime: '16 mins'
    },
    {
      id: 'cera-sanitaryware',
      name: 'Cera',
      logo: 'https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=150',
      category: 'Hardware',
      deliveryTime: '25 mins'
    }
  ];

  return (
    <div className="px-4 py-6 bg-white">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Your local favourite shops within 1 to 2 kms</h3>
      <div className="grid grid-cols-4 gap-4">
        {localStores.map((store) => (
          <button
            key={store.id}
            onClick={() => onStoreSelect(store.id)}
            className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="w-16 h-12 rounded-md overflow-hidden mb-2 border border-gray-200">
              <img
                src={store.logo}
                alt={store.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-medium text-gray-900 text-center mb-1">{store.name}</span>
            <span className="text-xs text-gray-500 mb-1">{store.category}</span>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3 text-green-600" />
              <span className="text-xs text-green-600 font-medium">in {store.deliveryTime}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};