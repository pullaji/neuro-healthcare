import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tag } from 'lucide-react';

// Sample blog data (same as in Blog.tsx - in a real app, this would come from an API)
const blogPosts = [
  {
    id: 1,
    title: "Understanding Stroke Recovery: A Comprehensive Guide",
    excerpt: "Learn about the latest advances in stroke rehabilitation and recovery techniques that are helping patients regain independence faster.",
    content: `
      <h2>Introduction to Stroke Recovery</h2>
      <p>Stroke recovery is a complex process that requires a multidisciplinary approach. Our team of neurologists, physiotherapists, and occupational therapists work together to create personalized recovery plans for each patient. Recent advances in neuroplasticity research have shown that the brain has remarkable ability to rewire itself after injury.</p>
      
      <h3>The Science Behind Neuroplasticity</h3>
      <p>Neuroplasticity, or brain plasticity, refers to the brain's ability to reorganize itself by forming new neural connections throughout life. This phenomenon is particularly important in stroke recovery, as it allows undamaged areas of the brain to take over functions previously controlled by damaged areas.</p>
      
      <h3>Early Intervention is Key</h3>
      <p>Research has consistently shown that early intervention following a stroke significantly improves outcomes. The first 3-6 months after a stroke are often referred to as the "golden period" for recovery, as this is when the brain is most responsive to rehabilitation.</p>
      
      <h3>Comprehensive Rehabilitation Approach</h3>
      <p>Our stroke recovery program includes:</p>
      <ul>
        <li><strong>Physical Therapy:</strong> Focus on improving motor function, balance, and coordination</li>
        <li><strong>Occupational Therapy:</strong> Help patients regain independence in daily activities</li>
        <li><strong>Speech Therapy:</strong> Address communication and swallowing difficulties</li>
        <li><strong>Psychological Support:</strong> Mental health care for patients and families</li>
      </ul>
      
      <h3>Technology in Stroke Recovery</h3>
      <p>Modern technology plays a crucial role in stroke rehabilitation. We utilize:</p>
      <ul>
        <li>Robotic-assisted therapy for improved motor recovery</li>
        <li>Virtual reality systems for engaging rehabilitation exercises</li>
        <li>Brain-computer interfaces for severe cases</li>
        <li>Telemedicine for remote monitoring and support</li>
      </ul>
      
      <h3>Success Stories</h3>
      <p>Our patients have achieved remarkable recoveries through our comprehensive approach. Many have returned to work, resumed their hobbies, and regained their independence. The key is persistence, proper medical care, and a strong support system.</p>
      
      <h3>Conclusion</h3>
      <p>Stroke recovery is a journey that requires patience, dedication, and expert medical care. With the right approach and support, many stroke survivors can achieve significant improvements in their quality of life. If you or a loved one has experienced a stroke, don't hesitate to reach out to our team for a comprehensive evaluation and personalized treatment plan.</p>
    `,
    author: "Dr. Sarah Johnson",
    authorRole: "Senior Neurologist",
    authorBio: "Dr. Sarah Johnson is a board-certified neurologist with over 15 years of experience in stroke care and rehabilitation. She has published numerous research papers on neuroplasticity and stroke recovery.",
    authorImage: "/src/assets/images/dr-sarah-johnson.jpg",
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
    content: `
      <h2>Understanding Epilepsy</h2>
      <p>Epilepsy affects millions of people worldwide, but with proper management, most patients can lead normal, productive lives. Our epilepsy center offers comprehensive care including advanced EEG monitoring, medication optimization, and when necessary, surgical interventions.</p>
      
      <h3>Types of Epilepsy</h3>
      <p>Epilepsy is not a single condition but a group of neurological disorders characterized by recurrent seizures. The main types include:</p>
      <ul>
        <li><strong>Focal Epilepsy:</strong> Seizures that start in one area of the brain</li>
        <li><strong>Generalized Epilepsy:</strong> Seizures that affect both sides of the brain</li>
        <li><strong>Unknown Onset:</strong> When the origin of seizures is unclear</li>
      </ul>
      
      <h3>Modern Treatment Approaches</h3>
      <p>Treatment for epilepsy has evolved significantly in recent years. Our approach includes:</p>
      
      <h4>Medication Management</h4>
      <p>Anti-epileptic drugs (AEDs) are the first line of treatment for most patients. We carefully monitor medication effectiveness and adjust dosages to minimize side effects while maximizing seizure control.</p>
      
      <h4>Lifestyle Modifications</h4>
      <p>Certain lifestyle factors can significantly impact seizure frequency:</p>
      <ul>
        <li>Maintaining regular sleep patterns</li>
        <li>Managing stress through relaxation techniques</li>
        <li>Avoiding alcohol and recreational drugs</li>
        <li>Following a ketogenic diet when appropriate</li>
      </ul>
      
      <h4>Surgical Options</h4>
      <p>For patients who don't respond to medication, surgical options may be considered:</p>
      <ul>
        <li><strong>Resective Surgery:</strong> Removal of the seizure focus</li>
        <li><strong>Vagus Nerve Stimulation:</strong> Implantable device to reduce seizures</li>
        <li><strong>Responsive Neurostimulation:</strong> Advanced device that detects and stops seizures</li>
      </ul>
      
      <h3>Advanced Monitoring</h3>
      <p>Our epilepsy monitoring unit provides continuous EEG monitoring to:</p>
      <ul>
        <li>Characterize seizure types and frequency</li>
        <li>Evaluate medication effectiveness</li>
        <li>Prepare for potential surgical intervention</li>
        <li>Provide patient and family education</li>
      </ul>
      
      <h3>Living with Epilepsy</h3>
      <p>With proper treatment and support, people with epilepsy can lead fulfilling lives. Our team provides comprehensive care including education, counseling, and support groups for patients and families.</p>
    `,
    author: "Dr. Michael Chen",
    authorRole: "Epilepsy Specialist",
    authorBio: "Dr. Michael Chen is a fellowship-trained epileptologist with expertise in complex epilepsy cases and surgical evaluation. He has been instrumental in developing our epilepsy monitoring program.",
    authorImage: "/src/assets/images/dr-michael-chen.jpg",
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
    content: `
      <h2>Understanding Parkinson's Disease</h2>
      <p>Parkinson's disease is a progressive neurological disorder that affects movement. Early detection and intervention can significantly improve outcomes. Our movement disorder specialists use advanced diagnostic tools and offer comprehensive treatment plans including medication management, physical therapy, and deep brain stimulation.</p>
      
      <h3>Early Signs and Symptoms</h3>
      <p>Recognizing early signs of Parkinson's disease is crucial for timely intervention:</p>
      <ul>
        <li><strong>Tremor:</strong> Shaking that begins in a limb, often the hand or fingers</li>
        <li><strong>Bradykinesia:</strong> Slowed movement and difficulty initiating movement</li>
        <li><strong>Rigidity:</strong> Muscle stiffness that can occur in any part of the body</li>
        <li><strong>Postural Instability:</strong> Impaired balance and coordination</li>
      </ul>
      
      <h3>Diagnostic Approaches</h3>
      <p>Our comprehensive diagnostic process includes:</p>
      <ul>
        <li>Detailed neurological examination</li>
        <li>Movement disorder assessment</li>
        <li>Advanced imaging studies (MRI, PET scans)</li>
        <li>Neuropsychological testing</li>
      </ul>
      
      <h3>Treatment Strategies</h3>
      <p>We offer a multidisciplinary approach to Parkinson's management:</p>
      
      <h4>Medication Management</h4>
      <p>Carefully tailored medication regimens to manage symptoms and slow disease progression.</p>
      
      <h4>Physical Therapy</h4>
      <p>Specialized exercises to improve mobility, balance, and quality of life.</p>
      
      <h4>Deep Brain Stimulation (DBS)</h4>
      <p>Advanced surgical treatment for patients with advanced Parkinson's disease.</p>
      
      <h3>Living with Parkinson's</h3>
      <p>With proper management, many people with Parkinson's disease can maintain active, fulfilling lives. Our team provides ongoing support and education for patients and families.</p>
    `,
    author: "Dr. Emily Rodriguez",
    authorRole: "Movement Disorder Specialist",
    authorBio: "Dr. Emily Rodriguez is a board-certified neurologist specializing in movement disorders with over 12 years of experience in Parkinson's disease management.",
    authorImage: "/src/assets/images/dr-emily-rodriguez.jpg",
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
    content: `
      <h2>Pediatric Neurological Care</h2>
      <p>Children with neurological conditions require specialized care that considers their unique developmental needs. Our pediatric neurology team works closely with families to provide comprehensive care for conditions such as cerebral palsy, epilepsy, and developmental delays.</p>
      
      <h3>Common Pediatric Neurological Conditions</h3>
      <p>We treat a wide range of neurological conditions in children:</p>
      <ul>
        <li><strong>Cerebral Palsy:</strong> Movement and posture disorders</li>
        <li><strong>Epilepsy:</strong> Seizure disorders in children</li>
        <li><strong>Developmental Delays:</strong> Motor, cognitive, or speech delays</li>
        <li><strong>Headaches:</strong> Migraines and tension headaches</li>
        <li><strong>Genetic Disorders:</strong> Inherited neurological conditions</li>
      </ul>
      
      <h3>Family-Centered Care</h3>
      <p>Our approach emphasizes family involvement and support:</p>
      <ul>
        <li>Comprehensive family education</li>
        <li>Collaborative treatment planning</li>
        <li>Ongoing support and counseling</li>
        <li>Connection to community resources</li>
      </ul>
      
      <h3>Early Intervention</h3>
      <p>Early diagnosis and intervention can significantly improve outcomes for children with neurological conditions. We provide:</p>
      <ul>
        <li>Developmental assessments</li>
        <li>Therapy services</li>
        <li>Educational support</li>
        <li>Family training</li>
      </ul>
      
      <h3>Supporting Your Child's Development</h3>
      <p>We work with families to create supportive environments that promote optimal development and quality of life for children with neurological conditions.</p>
    `,
    author: "Dr. Lisa Thompson",
    authorRole: "Pediatric Neurologist",
    authorBio: "Dr. Lisa Thompson is a fellowship-trained pediatric neurologist with expertise in developmental disorders and family-centered care.",
    authorImage: "/src/assets/images/dr-lisa-thompson.jpg",
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
    content: `
      <h2>Advanced Neurodiagnostic Services</h2>
      <p>Accurate diagnosis is the foundation of effective neurological treatment. Our neurodiagnostics center is equipped with state-of-the-art imaging equipment and testing facilities. We offer comprehensive diagnostic services including advanced MRI, CT scans, EEG, and neuropsychological assessments.</p>
      
      <h3>Imaging Technologies</h3>
      <p>We utilize the latest imaging technologies for precise diagnosis:</p>
      <ul>
        <li><strong>High-Resolution MRI:</strong> Detailed brain and spine imaging</li>
        <li><strong>Functional MRI (fMRI):</strong> Brain activity mapping</li>
        <li><strong>CT Scans:</strong> Rapid imaging for emergency cases</li>
        <li><strong>PET Scans:</strong> Metabolic brain imaging</li>
      </ul>
      
      <h3>Electrophysiological Testing</h3>
      <p>Advanced electrical testing of the nervous system:</p>
      <ul>
        <li><strong>EEG:</strong> Brain wave monitoring</li>
        <li><strong>EMG:</strong> Muscle and nerve function testing</li>
        <li><strong>Nerve Conduction Studies:</strong> Peripheral nerve assessment</li>
        <li><strong>Evoked Potentials:</strong> Sensory pathway testing</li>
      </ul>
      
      <h3>Neuropsychological Assessment</h3>
      <p>Comprehensive cognitive and behavioral evaluation:</p>
      <ul>
        <li>Memory and attention testing</li>
        <li>Language and communication assessment</li>
        <li>Executive function evaluation</li>
        <li>Personality and mood assessment</li>
      </ul>
      
      <h3>Precision Diagnosis</h3>
      <p>Our multidisciplinary team combines advanced technology with clinical expertise to provide accurate, timely diagnoses that guide effective treatment planning.</p>
    `,
    author: "Dr. James Wilson",
    authorRole: "Neurodiagnostics Specialist",
    authorBio: "Dr. James Wilson is a board-certified neurologist with specialized training in neuroimaging and diagnostic technologies.",
    authorImage: "/src/assets/images/dr-james-wilson.jpg",
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
    content: `
      <h2>Neurocritical Care Excellence</h2>
      <p>Neurocritical care is a specialized field that focuses on the treatment of patients with life-threatening neurological conditions. Our neurocritical care unit is staffed 24/7 by experienced neurologists and critical care specialists who provide immediate intervention for conditions such as traumatic brain injury, stroke, and status epilepticus.</p>
      
      <h3>Critical Conditions We Treat</h3>
      <p>Our neurocritical care team manages:</p>
      <ul>
        <li><strong>Traumatic Brain Injury:</strong> Severe head trauma requiring intensive monitoring</li>
        <li><strong>Stroke:</strong> Acute ischemic and hemorrhagic strokes</li>
        <li><strong>Status Epilepticus:</strong> Prolonged or repeated seizures</li>
        <li><strong>Brain Hemorrhage:</strong> Intracranial bleeding</li>
        <li><strong>Spinal Cord Injury:</strong> Acute spinal trauma</li>
      </ul>
      
      <h3>Advanced Monitoring</h3>
      <p>State-of-the-art monitoring systems:</p>
      <ul>
        <li>Continuous EEG monitoring</li>
        <li>Intracranial pressure monitoring</li>
        <li>Cerebral blood flow assessment</li>
        <li>Advanced hemodynamic monitoring</li>
      </ul>
      
      <h3>Life-Saving Interventions</h3>
      <p>Immediate interventions available:</p>
      <ul>
        <li>Emergency neurosurgical procedures</li>
        <li>Thrombolytic therapy for stroke</li>
        <li>Advanced airway management</li>
        <li>Hypothermia therapy</li>
      </ul>
      
      <h3>Multidisciplinary Team</h3>
      <p>Our neurocritical care team includes neurologists, neurosurgeons, critical care nurses, and respiratory therapists working together to provide the highest level of care for critically ill neurological patients.</p>
    `,
    author: "Dr. Robert Kim",
    authorRole: "Neurocritical Care Specialist",
    authorBio: "Dr. Robert Kim is a fellowship-trained neurointensivist with expertise in managing complex neurological emergencies and critical care.",
    authorImage: "/src/assets/images/dr-robert-kim.jpg",
    date: "2024-01-03",
    readTime: "6 min read",
    category: "Critical Care",
    image: "/src/assets/images/Neurocritical .jpg",
    tags: ["Critical Care", "Emergency", "ICU", "Life Support"]
  }
];

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/blog">
            <Button variant="ghost" className="text-teal-600 hover:text-teal-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Category Badge */}
          <Badge className="mb-4 bg-teal-100 text-teal-800">
            {post.category}
          </Badge>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 pb-8 border-b">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop&crop=center";
              }}
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Author Card */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-16 h-16 rounded-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face";
                  }}
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {post.author}
                  </h3>
                  <p className="text-teal-600 font-medium mb-2">
                    {post.authorRole}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.authorBio}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>


        </motion.div>
      </article>
    </div>
  );
};

export default BlogDetail;
