import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { ProductGrid } from './components/ProductGrid';
import { LocalStores } from './components/LocalStores';
import { StoreProducts } from './components/StoreProducts';
import { SearchResults } from './components/SearchResults';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Payment } from './components/Payment';
import { OrderTracking } from './components/OrderTracking';
import { BottomCart } from './components/BottomCart';

export interface CartItem {
  id: string;
  name: string;
  store: string;
  price: number;
  originalPrice?: number;
  image: string;
  weight: string;
  quantity: number;
}

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStore, setSelectedStore] = useState('');
  const [currentView, setCurrentView] = useState<'home' | 'cart' | 'checkout' | 'payment' | 'tracking'>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orderDetails, setOrderDetails] = useState<any>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedStore('');
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery('');
    setSelectedStore('');
  };

  const handleStoreSelect = (storeId: string) => {
    setSelectedStore(storeId);
    setSearchQuery('');
    setSelectedCategory('');
  };

  const handleBackToHome = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedStore('');
    setCurrentView('home');
  };

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const getItemQuantity = (id: string) => {
    return cartItems.find(item => item.id === id)?.quantity || 0;
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleViewCart = () => {
    setCurrentView('cart');
  };

  const handleCheckout = () => {
    setCurrentView('checkout');
  };

  const handlePayment = (checkoutData: any) => {
    setOrderDetails(checkoutData);
    setCurrentView('payment');
  };

  const handlePaymentComplete = () => {
    setCurrentView('tracking');
    setCartItems([]); // Clear cart after successful payment
  };

  if (currentView === 'cart') {
    return (
      <Cart
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onBack={handleBackToHome}
        onCheckout={handleCheckout}
        totalAmount={getTotalAmount()}
      />
    );
  }

  if (currentView === 'checkout') {
    return (
      <Checkout
        items={cartItems}
        totalAmount={getTotalAmount()}
        onBack={() => setCurrentView('cart')}
        onProceedToPayment={handlePayment}
      />
    );
  }

  if (currentView === 'payment') {
    return (
      <Payment
        orderDetails={orderDetails}
        onBack={() => setCurrentView('checkout')}
        onPaymentComplete={handlePaymentComplete}
      />
    );
  }

  if (currentView === 'tracking') {
    return (
      <OrderTracking
        orderDetails={orderDetails}
        onBackToHome={handleBackToHome}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={handleSearch} searchQuery={searchQuery} />
      
      {!searchQuery && !selectedCategory && !selectedStore && (
        <>
          <Hero />
          <Categories onCategorySelect={handleCategorySelect} />
          <ProductGrid 
            addToCart={addToCart}
            getItemQuantity={getItemQuantity}
            updateQuantity={updateQuantity}
          />
          <LocalStores onStoreSelect={handleStoreSelect} />
        </>
      )}
      
      {selectedStore && (
        <StoreProducts 
          storeId={selectedStore}
          onBack={handleBackToHome}
          addToCart={addToCart}
          getItemQuantity={getItemQuantity}
          updateQuantity={updateQuantity}
        />
      )}
      
      {(searchQuery || selectedCategory) && !selectedStore && (
        <SearchResults 
          query={searchQuery} 
          category={selectedCategory}
          onClearSearch={handleBackToHome}
          addToCart={addToCart}
          getItemQuantity={getItemQuantity}
          updateQuantity={updateQuantity}
        />
      )}
      
      {getTotalItems() > 0 && currentView === 'home' && (
        <BottomCart 
          totalAmount={getTotalAmount()}
          totalItems={getTotalItems()}
          onViewCart={handleViewCart}
        />
      )}
    </div>
  );
}

export default App;