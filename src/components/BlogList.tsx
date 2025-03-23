
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, categories } from '@/data/blogPosts';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Clock } from 'lucide-react';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="container px-6 mx-auto py-16">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Microgreens Blog</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our articles on microgreen growing tips, nutritional benefits, delicious recipes, and sustainability practices.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveCategory}>
        <div className="flex justify-center mb-6">
          <TabsList className="bg-card">
            <TabsTrigger value="all">All Posts</TabsTrigger>
            {categories.map(category => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <Card key={post.id} className="overflow-hidden h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="bg-sprout-50 text-sprout-700">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <CalendarIcon size={12} className="mr-1" />
                      {formatDate(post.date)}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold line-clamp-2">{post.title}</h3>
                </CardHeader>
                <CardContent className="pb-4 flex-grow">
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link to={`/blog/${post.id}`} className="w-full">
                    <Button variant="outline" className="w-full">Read Article</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {categories.map(category => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map(post => (
                <Card key={post.id} className="overflow-hidden h-full flex flex-col">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="bg-sprout-50 text-sprout-700">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <CalendarIcon size={12} className="mr-1" />
                        {formatDate(post.date)}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold line-clamp-2">{post.title}</h3>
                  </CardHeader>
                  <CardContent className="pb-4 flex-grow">
                    <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link to={`/blog/${post.id}`} className="w-full">
                      <Button variant="outline" className="w-full">Read Article</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Pagination className="mt-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default BlogList;
