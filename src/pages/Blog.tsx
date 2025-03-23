
import React from 'react';
import BlogList from '@/components/BlogList';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <BlogList />
      </main>
      <Footer />
    </>
  );
};

export default Blog;
