
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, MapPinIcon, TagIcon, ArrowLeft, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock data for a single item
const mockItem = {
  id: '1',
  title: 'Black iPhone 13 with Blue Case',
  image: '/placeholder.svg',
  category: 'Electronics',
  location: 'Library, 2nd Floor',
  date: 'April 10, 2025',
  status: 'found',
  description: 'iPhone 13 with a blue silicone case. The lock screen has a picture of a mountain landscape. Found on a study table near the windows in the main reading area.',
  reportedBy: 'Campus Security',
  contactEmail: 'security@college.edu'
};

const ItemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  // In a real app, you would fetch the item data based on the ID
  // For now, we'll just use the mock data
  const item = mockItem;
  
  const handleClaimClick = () => {
    toast({
      title: "Claim initiated",
      description: "We've sent you an email with next steps to verify and claim this item.",
      duration: 5000,
    });
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-6">
          <Link to="/found-items" className="text-purple-600 hover:text-purple-700 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Found Items
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h2 className="text-sm font-medium text-gray-500">Reported By</h2>
                  <div className="flex items-center mt-1">
                    <User className="h-5 w-5 text-gray-400 mr-2" />
                    <span>{item.reportedBy}</span>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-sm font-medium text-gray-500">Date Found</h2>
                  <div className="flex items-center mt-1">
                    <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span>{item.date}</span>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-sm font-medium text-gray-500">Location Found</h2>
                  <div className="flex items-center mt-1">
                    <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span>{item.location}</span>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-sm font-medium text-gray-500">Category</h2>
                  <div className="flex items-center mt-1">
                    <TagIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span>{item.category}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gray-50 border-l border-gray-100">
              <div className="mb-2 flex items-center justify-between">
                <Badge className="bg-green-500">{item.status === 'found' ? 'Found' : 'Lost'}</Badge>
                <div className="text-sm text-gray-500">Item ID: #{item.id}</div>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h1>
              
              <div className="mb-6">
                <h2 className="text-lg font-medium text-gray-900 mb-2">Description</h2>
                <p className="text-gray-700">{item.description}</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-lg font-medium text-gray-900 mb-2">Is this your item?</h2>
                <p className="text-gray-700 mb-4">
                  If you believe this is your lost item, you can initiate a claim. You'll need to provide details that confirm this belongs to you.
                </p>
                <Button 
                  onClick={handleClaimClick}
                  className="w-full bg-purple-500 hover:bg-purple-600"
                >
                  Claim This Item
                </Button>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-lg font-medium text-gray-900 mb-2">Not Your Item?</h2>
                <p className="text-gray-700 mb-4">
                  Help your friends by sharing this found item with them.
                </p>
                <div className="flex space-x-2">
                  <Button variant="outline" className="flex-1">
                    Share
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <Link to="/lost-items">Report Your Lost Item</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
