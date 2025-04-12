
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SearchFilters from '../components/search/SearchFilters';
import ItemCard, { ItemProps } from '../components/items/ItemCard';

// Mock data for found items
const mockItems: ItemProps[] = [
  {
    id: '1',
    title: 'Black iPhone 13 with Blue Case',
    image: '/placeholder.svg',
    category: 'Electronics',
    location: 'Library, 2nd Floor',
    date: '2025-04-10',
    status: 'found'
  },
  {
    id: '2',
    title: 'Silver MacBook Pro',
    image: '/placeholder.svg',
    category: 'Electronics',
    location: 'Student Center',
    date: '2025-04-09',
    status: 'found'
  },
  {
    id: '3',
    title: 'Blue Hydroflask Water Bottle',
    image: '/placeholder.svg',
    category: 'Accessories',
    location: 'Gym',
    date: '2025-04-11',
    status: 'found'
  },
  {
    id: '4',
    title: 'Student ID Card - Jason Smith',
    image: '/placeholder.svg',
    category: 'IDs & Cards',
    location: 'Cafeteria',
    date: '2025-04-08',
    status: 'found'
  },
  {
    id: '5',
    title: 'Black Umbrella with University Logo',
    image: '/placeholder.svg',
    category: 'Others',
    location: 'Engineering Building',
    date: '2025-04-07',
    status: 'found'
  },
  {
    id: '6',
    title: 'Physics Textbook',
    image: '/placeholder.svg',
    category: 'Books',
    location: 'Science Building',
    date: '2025-04-06',
    status: 'found'
  }
];

const FoundItems = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedDate, setSelectedDate] = useState('');
  
  // Filter items based on search and filters
  const filteredItems = mockItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || item.category === selectedCategory;
    const matchesLocation = selectedLocation === 'All Locations' || item.location.includes(selectedLocation);
    const matchesDate = !selectedDate || item.date === selectedDate;
    
    return matchesSearch && matchesCategory && matchesLocation && matchesDate;
  });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Found Items</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through items that have been found on campus. If you recognize something as yours, you can claim it.
          </p>
        </div>
        
        <SearchFilters
          onSearch={setSearchQuery}
          onCategoryChange={setSelectedCategory}
          onLocationChange={setSelectedLocation}
          onDateChange={setSelectedDate}
        />
        
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map(item => (
              <ItemCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default FoundItems;
