import React from 'react';

interface LocalStoresProps {
  onStoreSelect: (storeId: string) => void;
}

export const LocalStores: React.FC<LocalStoresProps> = ({ onStoreSelect }) => {
  const localStores = [
    {
      id: 'zudio',
      name: 'Zudio',
      logo: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'Fashion'
    },
    {
      id: 'zara',
      name: 'Zara',
      logo: 'https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'Fashion'
    },
    {
      id: 'nandini',
      name: 'Nandini',
      logo: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'Dairy'
    },
    {
      id: 'amul',
      name: 'Amul',
      logo: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'Dairy'
    },
    {
      id: 'ganesh-kirana',
      name: 'Ganesh Kirana',
      logo: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'Grocery'
    },
    {
      id: 'fresh-fruits',
      name: 'Fresh Fruits Corner',
      logo: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'Fruits'
    },
    {
      id: 'book-palace',
      name: 'Book Palace',
      logo: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'Books'
    },
    {
      id: 'cera-sanitaryware',
      name: 'Cera',
      logo: 'https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'Hardware'
    }
  ];

  return (
    <div className="px-4 py-6 bg-white">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Your local favourite shops</h3>
      <div className="grid grid-cols-4 gap-4">
        {localStores.map((store) => (
          <button
            key={store.id}
            onClick={() => onStoreSelect(store.id)}
            className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-gray-200">
              <img
                src={store.logo}
                alt={store.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-medium text-gray-900 text-center">{store.name}</span>
            <span className="text-xs text-gray-500">{store.category}</span>
          </button>
        ))}
      </div>
    </div>
  );
};