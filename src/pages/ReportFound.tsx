
import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Camera } from 'lucide-react';

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

const ReportFound = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    toast({
      title: "Report submitted",
      description: "Thank you for reporting a found item. The owner will be notified if they search for it.",
      duration: 5000,
    });
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Report a Found Item</h1>
          <p className="text-lg text-gray-600">
            Help someone find their lost belongings by reporting what you've found on campus.
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
                <Label htmlFor="foundDate">Date Found</Label>
                <Input id="foundDate" type="date" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="location">Where Found</Label>
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
                <Label htmlFor="contact">Your Contact Email</Label>
                <Input id="contact" type="email" placeholder="your.email@example.com" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Item Description</Label>
              <Textarea 
                id="description" 
                placeholder="Please provide a detailed description of the item including color, brand, distinguishing features, etc."
                className="min-h-[120px]"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="image">Upload Image</Label>
              <div className="flex items-center gap-2">
                <Input id="image" type="file" accept="image/*" />
                <Button type="button" variant="outline" size="icon">
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                A clear image will help the owner identify their item more easily.
              </p>
            </div>
            
            <div className="pt-4">
              <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600">
                Submit Found Item Report
              </Button>
              <p className="text-sm text-gray-500 text-center mt-4">
                The item will be listed in our database for 30 days. The owner will be able to search and claim it.
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ReportFound;
