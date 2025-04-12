
import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const categories = [
  "Electronics",
  "Books",
  "Clothing",
  "Accessories",
  "Keys",
  "IDs & Cards",
  "Others"
];

const locations = [
  "Library",
  "Student Center",
  "Science Building",
  "Engineering Building",
  "Cafeteria",
  "Gym",
  "Dormitories",
  "Outdoor Areas",
  "Unknown"
];

const LostItems = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    toast({
      title: "Report submitted",
      description: "We'll notify you if someone finds your item.",
      duration: 5000,
    });
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Report a Lost Item</h1>
          <p className="text-lg text-gray-600">
            Provide details about your lost item so our community can help you find it.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Item Name/Title</Label>
              <Input 
                id="title" 
                placeholder="E.g. Blue Backpack with Math Textbooks" 
                required 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select required>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastSeen">Last Seen Date</Label>
                <Input id="lastSeen" type="date" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="location">Last Known Location</Label>
                <Select required>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contact">Contact Email</Label>
                <Input id="contact" type="email" placeholder="your.email@example.com" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Item Description</Label>
              <Textarea 
                id="description" 
                placeholder="Please provide a detailed description of your item including color, brand, distinguishing features, etc."
                className="min-h-[120px]"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="image">Upload Image (if available)</Label>
              <Input id="image" type="file" accept="image/*" />
              <p className="text-sm text-gray-500">
                An image can help others identify your item more easily.
              </p>
            </div>
            
            <div className="pt-4">
              <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600">
                Submit Lost Item Report
              </Button>
              <p className="text-sm text-gray-500 text-center mt-4">
                We'll notify you via email if someone reports finding an item matching your description.
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LostItems;
