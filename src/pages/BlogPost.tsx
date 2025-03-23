
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import { CalendarIcon, ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find the current post
  const post = blogPosts.find(post => post.id === id);
  
  // Get the index of the current post
  const currentIndex = post ? blogPosts.indexOf(post) : -1;
  
  // Get previous and next posts
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  
  useEffect(() => {
    // Scroll to top when post changes
    window.scrollTo(0, 0);
    
    // If post doesn't exist, redirect to blog list
    if (!post && id) {
      navigate('/blog');
    }
  }, [id, navigate, post]);
  
  if (!post) {
    return null;
  }
  
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <div className="container px-6 mx-auto py-10">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blog">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>{post.title}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <article className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <span className="flex items-center">
                  <CalendarIcon size={16} className="mr-1" />
                  {formatDate(post.date)}
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  {post.author.name}
                </span>
              </div>
            </div>
            
            <div className="mb-10 rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div 
              className="prose prose-green max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="border-t border-border pt-8 mt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                {prevPost ? (
                  <Link to={`/blog/${prevPost.id}`} className="flex-1">
                    <Button variant="outline" className="w-full md:w-auto">
                      <ArrowLeft size={16} className="mr-2" />
                      Previous Article
                    </Button>
                  </Link>
                ) : <div className="flex-1" />}
                
                <Link to="/blog">
                  <Button variant="outline">
                    View All Posts
                  </Button>
                </Link>
                
                {nextPost ? (
                  <Link to={`/blog/${nextPost.id}`} className="flex-1 text-right">
                    <Button variant="outline" className="w-full md:w-auto">
                      Next Article
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                ) : <div className="flex-1" />}
              </div>
            </div>
          </article>
          
          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts
                .filter(relatedPost => 
                  relatedPost.category === post.category && relatedPost.id !== post.id
                )
                .slice(0, 3)
                .map(relatedPost => (
                  <Card key={relatedPost.id} className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardContent className="pt-4">
                      <Badge variant="outline" className="mb-2">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="font-semibold mb-2 line-clamp-2">
                        <Link to={`/blog/${relatedPost.id}`} className="hover:text-primary">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <Link to={`/blog/${relatedPost.id}`}>
                        <Button variant="outline" size="sm">Read More</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
