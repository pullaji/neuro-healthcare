import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Sample blog data with professional neurological content
const blogPosts = [
  {
    id: 1,
    title: "Understanding Stroke Recovery: A Comprehensive Guide",
    excerpt: "Learn about the latest advances in stroke rehabilitation and recovery techniques that are helping patients regain independence faster.",
    content: "Stroke recovery is a complex process that requires a multidisciplinary approach. Our team of neurologists, physiotherapists, and occupational therapists work together to create personalized recovery plans for each patient. Recent advances in neuroplasticity research have shown that the brain has remarkable ability to rewire itself after injury...",
    author: "Dr. Sarah Johnson",
    authorRole: "Senior Neurologist",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Stroke Care",
    image: "/src/assets/images/stroke.jpg",
    tags: ["Stroke", "Recovery", "Rehabilitation", "Neuroplasticity"]
  },
  {
    id: 2,
    title: "Epilepsy Management: Modern Treatment Approaches",
    excerpt: "Explore the latest treatment options for epilepsy, including medication management, lifestyle modifications, and advanced surgical techniques.",
    content: "Epilepsy affects millions of people worldwide, but with proper management, most patients can lead normal, productive lives. Our epilepsy center offers comprehensive care including advanced EEG monitoring, medication optimization, and when necessary, surgical interventions...",
    author: "Dr. Michael Chen",
    authorRole: "Epilepsy Specialist",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Epilepsy Care",
    image: "/src/assets/images/epliepsy.jpg",
    tags: ["Epilepsy", "Treatment", "EEG", "Medication"]
  },
  {
    id: 3,
    title: "Parkinson's Disease: Early Detection and Management",
    excerpt: "Discover the importance of early diagnosis in Parkinson's disease and the latest treatment strategies to improve quality of life.",
    content: "Parkinson's disease is a progressive neurological disorder that affects movement. Early detection and intervention can significantly improve outcomes. Our movement disorder specialists use advanced diagnostic tools and offer comprehensive treatment plans including medication management, physical therapy, and deep brain stimulation...",
    author: "Dr. Emily Rodriguez",
    authorRole: "Movement Disorder Specialist",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Parkinson's Care",
    image: "/src/assets/images/Parkinson.jpg",
    tags: ["Parkinson's", "Movement Disorders", "DBS", "Early Detection"]
  },
  {
    id: 4,
    title: "Pediatric Neurology: Caring for Children with Neurological Conditions",
    excerpt: "Learn about specialized care for children with neurological conditions and how early intervention can make a significant difference.",
    content: "Children with neurological conditions require specialized care that considers their unique developmental needs. Our pediatric neurology team works closely with families to provide comprehensive care for conditions such as cerebral palsy, epilepsy, and developmental delays...",
    author: "Dr. Lisa Thompson",
    authorRole: "Pediatric Neurologist",
    date: "2024-01-08",
    readTime: "9 min read",
    category: "Pediatric Care",
    image: "/src/assets/images/Pediatric.jpg",
    tags: ["Pediatric", "Children", "Development", "Family Care"]
  },
  {
    id: 5,
    title: "Neurodiagnostics: Advanced Imaging and Testing",
    excerpt: "Explore the latest diagnostic technologies in neurology, from advanced MRI techniques to neuropsychological assessments.",
    content: "Accurate diagnosis is the foundation of effective neurological treatment. Our neurodiagnostics center is equipped with state-of-the-art imaging equipment and testing facilities. We offer comprehensive diagnostic services including advanced MRI, CT scans, EEG, and neuropsychological assessments...",
    author: "Dr. James Wilson",
    authorRole: "Neurodiagnostics Specialist",
    date: "2024-01-05",
    readTime: "5 min read",
    category: "Diagnostics",
    image: "/src/assets/images/neurodiagnostics.jpg",
    tags: ["Diagnostics", "MRI", "EEG", "Imaging"]
  },
  {
    id: 6,
    title: "Neurocritical Care: Life-Saving Interventions",
    excerpt: "Understand the critical role of neurocritical care in treating life-threatening neurological emergencies and conditions.",
    content: "Neurocritical care is a specialized field that focuses on the treatment of patients with life-threatening neurological conditions. Our neurocritical care unit is staffed 24/7 by experienced neurologists and critical care specialists who provide immediate intervention for conditions such as traumatic brain injury, stroke, and status epilepticus...",
    author: "Dr. Robert Kim",
    authorRole: "Neurocritical Care Specialist",
    date: "2024-01-03",
    readTime: "6 min read",
    category: "Critical Care",
    image: "/src/assets/images/Neurocritical .jpg",
    tags: ["Critical Care", "Emergency", "ICU", "Life Support"]
  }
];

const categories = ["All", "Stroke Care", "Epilepsy Care", "Parkinson's Care", "Pediatric Care", "Diagnostics", "Critical Care"];

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-3 sm:mb-4 bg-teal-100 text-teal-800 hover:bg-teal-200 text-xs sm:text-sm">
              Health & Wellness Blog
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Latest Insights in
              <span className="block sm:inline bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"> Neurological Care</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Stay informed with expert insights, latest research, and practical advice from our team of neurological specialists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-6 sm:py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between">
            <div className="relative flex-1 w-full sm:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full text-sm sm:text-base"
              />
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Filter className="h-4 w-4 text-gray-500 flex-shrink-0" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48 text-sm sm:text-base">
                  <SelectValue placeholder="Filter by category" />
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
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.id}`}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 sm:h-44 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to a placeholder if image doesn't exist
                        e.currentTarget.src = "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center";
                      }}
                    />
                  </div>
                  <CardHeader className="pb-2 sm:pb-3 px-3 sm:px-6">
                    <CardTitle className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base text-gray-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                   <CardContent className="pt-0 px-3 sm:px-6 pb-4 sm:pb-6">
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <User className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">{post.author}</p>
                        <p className="text-xs text-gray-500 truncate">{post.authorRole}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs px-2 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full text-xs sm:text-sm group-hover:bg-teal-50 group-hover:border-teal-200 group-hover:text-teal-600 transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-8 sm:py-12">
              <p className="text-gray-500 text-base sm:text-lg px-4">No articles found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default Blog;
