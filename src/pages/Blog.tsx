import { useState } from 'react';
import { Search, Calendar, User, ArrowRight, BookOpen, Leaf, Heart, Brain, Shield, X, Clock, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Import blog images
import blog100 from '@/assets/blog/100.jpg';
import blog101 from '@/assets/blog/101.jpg';
import blog102 from '@/assets/blog/102.jpg';
import blog103 from '@/assets/blog/103.jpg';
import blog104 from '@/assets/blog/104.jpg';
import blog105 from '@/assets/blog/105.jpg';
import blog106 from '@/assets/blog/106.jpg';
import blog107 from '@/assets/blog/107.jpg';
import blog108 from '@/assets/blog/108.jpg';
import blog109 from '@/assets/blog/109.jpg';
import blog110 from '@/assets/blog/110.jpg';
import blog112 from '@/assets/blog/112.jpg';
import blog113 from '@/assets/blog/113.jpg';
import blog114 from '@/assets/blog/114.jpg';
import blog115 from '@/assets/blog/115.jpg';
import blog116 from '@/assets/blog/116.jpg';
import blog117 from '@/assets/blog/117.jpg';
import blog118 from '@/assets/blog/118.jpg';
import blog119 from '@/assets/blog/119.jpg';
import blog120 from '@/assets/blog/120.jpg';
import blog121 from '@/assets/blog/121.jpg';
import blog122 from '@/assets/blog/122.jpg';
import blog123 from '@/assets/blog/123.jpg';
import blog124 from '@/assets/blog/124.jpg';
import blog125 from '@/assets/blog/125.jpg';
import blog126 from '@/assets/blog/126.jpg';
import blog127 from '@/assets/blog/127.jpg';
import blog128 from '@/assets/blog/128.jpg';
import blog129 from '@/assets/blog/129.jpg';
import blog130 from '@/assets/blog/130.jpg';
import blog131 from '@/assets/blog/131.jpg';
import blog132 from '@/assets/blog/132.jpg';
import blog133 from '@/assets/blog/133.jpg';
import blog134 from '@/assets/blog/134.jpg';
import blog135 from '@/assets/blog/135.jpg';
import blog136 from '@/assets/blog/136.jpg';
import blog137 from '@/assets/blog/137.jpg';
import blog138 from '@/assets/blog/138.jpg';
import blog139 from '@/assets/blog/139.jpg';
import blog140 from '@/assets/blog/140.jpg';
import blog141 from '@/assets/blog/141.jpg';
import blog142 from '@/assets/blog/142.jpg';
import blog143 from '@/assets/blog/143.jpg';
import blog144 from '@/assets/blog/144.jpg';
import blog145 from '@/assets/blog/145.jpg';
import blog146 from '@/assets/blog/146.jpg';
import blog147 from '@/assets/blog/147.jpg';
import blog148 from '@/assets/blog/148.jpg';
import blog149 from '@/assets/blog/149.jpg';
import blog150 from '@/assets/blog/150.jpg';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles', count: 50 },
    { id: 'ayurveda', name: 'Ayurveda Basics', count: 15 },
    { id: 'herbs', name: 'Herbs & Ingredients', count: 12 },
    { id: 'wellness', name: 'Wellness Tips', count: 10 },
    { id: 'recipes', name: 'Recipes', count: 8 },
    { id: 'lifestyle', name: 'Lifestyle', count: 5 },
  ];

  const featuredArticles = [
    {
      id: 1,
      title: "The Complete Guide to Ayurvedic Herbal Medicine",
      excerpt: "Discover the ancient wisdom of Ayurvedic herbal medicine and learn how these powerful natural remedies can transform your health and wellness journey.",
      category: "ayurveda",
      author: "Dr. Priya Fernando",
      date: "2024-01-15",
      readTime: "12 min read",
      image: blog100,
      featured: true,
      tags: ["Herbal Medicine", "Ayurveda", "Natural Healing"],
    },
    {
      id: 2,
      title: "Mastering the Art of Ayurvedic Cooking",
      excerpt: "Learn the secrets of Ayurvedic cooking techniques that balance your doshas and promote optimal health through delicious, nourishing meals.",
      category: "recipes",
      author: "Dr. Rajesh Kumar",
      date: "2024-01-12",
      readTime: "10 min read",
      image: blog101,
      featured: true,
      tags: ["Cooking", "Doshas", "Nutrition"],
    },
    {
      id: 3,
      title: "Understanding Your Body Constitution: The Three Doshas",
      excerpt: "Discover your unique body constitution and learn how to balance Vata, Pitta, and Kapha for optimal health and well-being.",
      category: "ayurveda",
      author: "Dr. Anjali Perera",
      date: "2024-01-10",
      readTime: "8 min read",
      image: blog102,
      featured: true,
      tags: ["Doshas", "Body Constitution", "Health"],
    },
  ];

  const regularArticles = [
    {
      id: 4,
      title: "The Healing Power of Turmeric: Beyond the Kitchen",
      excerpt: "Explore the medicinal properties of turmeric and learn how this golden spice can boost your immunity and reduce inflammation naturally.",
      category: "herbs",
      author: "Dr. Priya Fernando",
      date: "2024-01-08",
      readTime: "7 min read",
      image: blog103,
      featured: false,
      tags: ["Turmeric", "Immunity", "Anti-inflammatory"],
    },
    {
      id: 5,
      title: "Ayurvedic Morning Routines for Optimal Health",
      excerpt: "Start your day the Ayurvedic way with these simple yet powerful morning rituals that can enhance your energy and well-being.",
      category: "lifestyle",
      author: "Dr. Rajesh Kumar",
      date: "2024-01-05",
      readTime: "6 min read",
      image: blog104,
      featured: false,
      tags: ["Morning Routine", "Wellness", "Daily Habits"],
    },
    {
      id: 6,
      title: "Managing Stress with Ancient Ayurvedic Techniques",
      excerpt: "Simple and effective Ayurvedic methods to reduce stress and promote mental well-being using time-tested practices.",
      category: "wellness",
      author: "Dr. Anjali Perera",
      date: "2024-01-03",
      readTime: "8 min read",
      image: blog105,
      featured: false,
      tags: ["Stress", "Mental Health", "Relaxation"],
    },
    {
      id: 7,
      title: "The Science Behind Ayurvedic Massage Therapy",
      excerpt: "Understanding how traditional Ayurvedic massage techniques promote healing, relaxation, and overall well-being.",
      category: "ayurveda",
      author: "Dr. Priya Fernando",
      date: "2024-01-01",
      readTime: "9 min read",
      image: blog106,
      featured: false,
      tags: ["Massage", "Therapy", "Healing"],
    },
    {
      id: 8,
      title: "Building Immunity with Natural Ayurvedic Ingredients",
      excerpt: "Strengthen your immune system using time-tested Ayurvedic principles and powerful natural ingredients.",
      category: "wellness",
      author: "Dr. Rajesh Kumar",
      date: "2023-12-28",
      readTime: "6 min read",
      image: blog107,
      featured: false,
      tags: ["Immunity", "Natural", "Health"],
    },
    {
      id: 9,
      title: "Ayurvedic Skincare: Ancient Wisdom for Modern Beauty",
      excerpt: "Discover natural skincare routines based on Ayurvedic principles for healthy, glowing skin that radiates from within.",
      category: "lifestyle",
      author: "Dr. Anjali Perera",
      date: "2023-12-25",
      readTime: "8 min read",
      image: blog108,
      featured: false,
      tags: ["Skincare", "Beauty", "Natural"],
    },
    {
      id: 10,
      title: "Essential Oils in Ayurveda: Aromatherapy for Healing",
      excerpt: "Learn about the therapeutic properties of essential oils and how they can enhance your Ayurvedic wellness journey.",
      category: "herbs",
      author: "Dr. Priya Fernando",
      date: "2023-12-22",
      readTime: "7 min read",
      image: blog109,
      featured: false,
      tags: ["Essential Oils", "Aromatherapy", "Healing"],
    },
    {
      id: 11,
      title: "Ayurvedic Detox: Cleansing Your Body Naturally",
      excerpt: "Discover safe and effective Ayurvedic detox methods to cleanse your body and restore balance to your system.",
      category: "wellness",
      author: "Dr. Rajesh Kumar",
      date: "2023-12-20",
      readTime: "9 min read",
      image: blog110,
      featured: false,
      tags: ["Detox", "Cleansing", "Balance"],
    },
    {
      id: 12,
      title: "The Art of Ayurvedic Meditation and Mindfulness",
      excerpt: "Explore meditation techniques rooted in Ayurvedic tradition for deeper spiritual connection and mental clarity.",
      category: "lifestyle",
      author: "Dr. Anjali Perera",
      date: "2023-12-18",
      readTime: "10 min read",
      image: blog112,
      featured: false,
      tags: ["Meditation", "Mindfulness", "Spirituality"],
    },
    {
      id: 13,
      title: "Understanding Ayurvedic Pulse Diagnosis",
      excerpt: "Learn about the ancient art of pulse diagnosis and how it reveals your body's current state of health and balance.",
      category: "ayurveda",
      author: "Dr. Priya Fernando",
      date: "2023-12-15",
      readTime: "11 min read",
      image: blog113,
      featured: false,
      tags: ["Pulse Diagnosis", "Diagnosis", "Health Assessment"],
    },
    {
      id: 14,
      title: "Seasonal Eating According to Ayurveda",
      excerpt: "Discover how to align your diet with seasonal changes to maintain optimal health and energy throughout the year.",
      category: "recipes",
      author: "Dr. Rajesh Kumar",
      date: "2023-12-12",
      readTime: "8 min read",
      image: blog114,
      featured: false,
      tags: ["Seasonal Eating", "Nutrition", "Balance"],
    },
    {
      id: 15,
      title: "The Power of Ayurvedic Herbal Teas",
      excerpt: "Explore the healing properties of various herbal teas and learn how to prepare them for maximum therapeutic benefit.",
      category: "herbs",
      author: "Dr. Anjali Perera",
      date: "2023-12-10",
      readTime: "6 min read",
      image: blog115,
      featured: false,
      tags: ["Herbal Tea", "Healing", "Beverages"],
    },
    {
      id: 16,
      title: "Ayurvedic Approaches to Sleep and Rest",
      excerpt: "Learn how to improve your sleep quality using Ayurvedic principles and natural remedies for better rest and recovery.",
      category: "wellness",
      author: "Dr. Priya Fernando",
      date: "2023-12-08",
      readTime: "7 min read",
      image: blog116,
      featured: false,
      tags: ["Sleep", "Rest", "Recovery"],
    },
    {
      id: 17,
      title: "The Role of Spices in Ayurvedic Medicine",
      excerpt: "Discover how common kitchen spices can be powerful medicines when used according to Ayurvedic principles.",
      category: "herbs",
      author: "Dr. Rajesh Kumar",
      date: "2023-12-05",
      readTime: "8 min read",
      image: blog117,
      featured: false,
      tags: ["Spices", "Medicine", "Kitchen Remedies"],
    },
    {
      id: 18,
      title: "Ayurvedic Yoga: Movement for Balance",
      excerpt: "Learn how to practice yoga according to your dosha type for maximum health benefits and inner balance.",
      category: "lifestyle",
      author: "Dr. Anjali Perera",
      date: "2023-12-03",
      readTime: "9 min read",
      image: blog118,
      featured: false,
      tags: ["Yoga", "Movement", "Balance"],
    },
    {
      id: 19,
      title: "Understanding Agni: The Digestive Fire",
      excerpt: "Explore the concept of Agni in Ayurveda and learn how to strengthen your digestive fire for optimal health.",
      category: "ayurveda",
      author: "Dr. Priya Fernando",
      date: "2023-12-01",
      readTime: "10 min read",
      image: blog119,
      featured: false,
      tags: ["Agni", "Digestion", "Metabolism"],
    },
    {
      id: 20,
      title: "Ayurvedic Remedies for Common Cold and Flu",
      excerpt: "Discover natural Ayurvedic treatments for cold and flu symptoms that boost immunity and speed recovery.",
      category: "wellness",
      author: "Dr. Rajesh Kumar",
      date: "2023-11-28",
      readTime: "6 min read",
      image: blog120,
      featured: false,
      tags: ["Cold", "Flu", "Immunity"],
    },
    {
      id: 21,
      title: "The Healing Properties of Ashwagandha",
      excerpt: "Learn about the powerful adaptogenic herb Ashwagandha and its benefits for stress, energy, and overall vitality.",
      category: "herbs",
      author: "Dr. Anjali Perera",
      date: "2023-11-25",
      readTime: "7 min read",
      image: blog121,
      featured: false,
      tags: ["Ashwagandha", "Adaptogen", "Stress Relief"],
    },
    {
      id: 22,
      title: "Ayurvedic Principles for Healthy Aging",
      excerpt: "Discover how Ayurvedic practices can help you age gracefully and maintain vitality throughout your life.",
      category: "lifestyle",
      author: "Dr. Priya Fernando",
      date: "2023-11-22",
      readTime: "9 min read",
      image: blog122,
      featured: false,
      tags: ["Aging", "Longevity", "Vitality"],
    },
    {
      id: 23,
      title: "The Art of Ayurvedic Cooking: Spices and Flavors",
      excerpt: "Master the art of using spices and flavors in Ayurvedic cooking to create meals that heal and nourish.",
      category: "recipes",
      author: "Dr. Rajesh Kumar",
      date: "2023-11-20",
      readTime: "8 min read",
      image: blog123,
      featured: false,
      tags: ["Cooking", "Spices", "Flavors"],
    },
    {
      id: 24,
      title: "Understanding Pitta Dosha: The Fire Element",
      excerpt: "Learn about Pitta dosha characteristics, imbalances, and how to maintain balance for optimal health and energy.",
      category: "ayurveda",
      author: "Dr. Anjali Perera",
      date: "2023-11-18",
      readTime: "8 min read",
      image: blog124,
      featured: false,
      tags: ["Pitta", "Fire Element", "Balance"],
    },
    {
      id: 25,
      title: "Ayurvedic Hair Care: Natural Solutions for Healthy Hair",
      excerpt: "Discover natural Ayurvedic treatments and practices for maintaining healthy, strong, and beautiful hair.",
      category: "lifestyle",
      author: "Dr. Priya Fernando",
      date: "2023-11-15",
      readTime: "7 min read",
      image: blog125,
      featured: false,
      tags: ["Hair Care", "Natural", "Beauty"],
    },
    {
      id: 26,
      title: "The Healing Power of Ginger in Ayurveda",
      excerpt: "Explore the medicinal properties of ginger and learn how to use it effectively for various health conditions.",
      category: "herbs",
      author: "Dr. Rajesh Kumar",
      date: "2023-11-12",
      readTime: "6 min read",
      image: blog126,
      featured: false,
      tags: ["Ginger", "Digestion", "Healing"],
    },
    {
      id: 27,
      title: "Ayurvedic Approaches to Mental Health",
      excerpt: "Learn how Ayurvedic principles can support mental health and emotional well-being naturally.",
      category: "wellness",
      author: "Dr. Anjali Perera",
      date: "2023-11-10",
      readTime: "9 min read",
      image: blog127,
      featured: false,
      tags: ["Mental Health", "Emotional Wellness", "Balance"],
    },
    {
      id: 28,
      title: "Understanding Vata Dosha: The Air Element",
      excerpt: "Discover Vata dosha characteristics, common imbalances, and natural ways to maintain balance and stability.",
      category: "ayurveda",
      author: "Dr. Priya Fernando",
      date: "2023-11-08",
      readTime: "8 min read",
      image: blog128,
      featured: false,
      tags: ["Vata", "Air Element", "Stability"],
    },
    {
      id: 29,
      title: "Ayurvedic Smoothie Recipes for Every Dosha",
      excerpt: "Learn to create delicious and nutritious smoothies tailored to your dosha type for optimal health benefits.",
      category: "recipes",
      author: "Dr. Rajesh Kumar",
      date: "2023-11-05",
      readTime: "5 min read",
      image: blog129,
      featured: false,
      tags: ["Smoothies", "Doshas", "Nutrition"],
    },
    {
      id: 30,
      title: "The Benefits of Ayurvedic Oil Massage",
      excerpt: "Discover the therapeutic benefits of Abhyanga (oil massage) and learn how to practice it at home.",
      category: "wellness",
      author: "Dr. Anjali Perera",
      date: "2023-11-03",
      readTime: "7 min read",
      image: blog130,
      featured: false,
      tags: ["Oil Massage", "Abhyanga", "Self-Care"],
    },
    {
      id: 31,
      title: "Understanding Kapha Dosha: The Earth Element",
      excerpt: "Learn about Kapha dosha characteristics, imbalances, and natural ways to maintain balance and energy.",
      category: "ayurveda",
      author: "Dr. Priya Fernando",
      date: "2023-11-01",
      readTime: "8 min read",
      image: blog131,
      featured: false,
      tags: ["Kapha", "Earth Element", "Energy"],
    },
    {
      id: 32,
      title: "Ayurvedic Remedies for Digestive Issues",
      excerpt: "Explore natural Ayurvedic solutions for common digestive problems and learn to maintain gut health.",
      category: "wellness",
      author: "Dr. Rajesh Kumar",
      date: "2023-10-29",
      readTime: "8 min read",
      image: blog132,
      featured: false,
      tags: ["Digestion", "Gut Health", "Natural Remedies"],
    },
    {
      id: 33,
      title: "The Healing Properties of Holy Basil (Tulsi)",
      excerpt: "Learn about the sacred herb Tulsi and its powerful healing properties for respiratory and immune health.",
      category: "herbs",
      author: "Dr. Anjali Perera",
      date: "2023-10-27",
      readTime: "7 min read",
      image: blog133,
      featured: false,
      tags: ["Tulsi", "Holy Basil", "Respiratory Health"],
    },
    {
      id: 34,
      title: "Ayurvedic Principles for Weight Management",
      excerpt: "Discover natural Ayurvedic approaches to healthy weight management that work with your body's constitution.",
      category: "lifestyle",
      author: "Dr. Priya Fernando",
      date: "2023-10-25",
      readTime: "9 min read",
      image: blog134,
      featured: false,
      tags: ["Weight Management", "Healthy Living", "Balance"],
    },
    {
      id: 35,
      title: "The Art of Ayurvedic Breathing Exercises",
      excerpt: "Learn powerful breathing techniques from Ayurveda that can improve your health, energy, and mental clarity.",
      category: "wellness",
      author: "Dr. Rajesh Kumar",
      date: "2023-10-23",
      readTime: "8 min read",
      image: blog135,
      featured: false,
      tags: ["Breathing", "Pranayama", "Energy"],
    },
    {
      id: 36,
      title: "Ayurvedic Herbal Baths for Relaxation",
      excerpt: "Discover how to create therapeutic herbal baths using Ayurvedic principles for deep relaxation and healing.",
      category: "lifestyle",
      author: "Dr. Anjali Perera",
      date: "2023-10-21",
      readTime: "6 min read",
      image: blog136,
      featured: false,
      tags: ["Herbal Baths", "Relaxation", "Self-Care"],
    },
    {
      id: 37,
      title: "The Healing Power of Cumin in Ayurveda",
      excerpt: "Explore the medicinal properties of cumin and learn how this common spice can improve your digestive health.",
      category: "herbs",
      author: "Dr. Priya Fernando",
      date: "2023-10-19",
      readTime: "6 min read",
      image: blog137,
      featured: false,
      tags: ["Cumin", "Digestion", "Spices"],
    },
    {
      id: 38,
      title: "Ayurvedic Approaches to Joint Health",
      excerpt: "Learn natural Ayurvedic methods to maintain healthy joints and manage joint-related discomfort.",
      category: "wellness",
      author: "Dr. Rajesh Kumar",
      date: "2023-10-17",
      readTime: "8 min read",
      image: blog138,
      featured: false,
      tags: ["Joint Health", "Mobility", "Natural Care"],
    },
    {
      id: 39,
      title: "Understanding the Six Tastes in Ayurveda",
      excerpt: "Discover the six tastes (Rasas) in Ayurveda and learn how to balance them for optimal health and satisfaction.",
      category: "ayurveda",
      author: "Dr. Anjali Perera",
      date: "2023-10-15",
      readTime: "9 min read",
      image: blog139,
      featured: false,
      tags: ["Six Tastes", "Rasas", "Balance"],
    },
    {
      id: 40,
      title: "Ayurvedic Tea Blends for Every Season",
      excerpt: "Learn to create healing tea blends that align with seasonal changes and support your body's natural rhythms.",
      category: "recipes",
      author: "Dr. Priya Fernando",
      date: "2023-10-13",
      readTime: "7 min read",
      image: blog140,
      featured: false,
      tags: ["Tea Blends", "Seasonal", "Healing"],
    },
    {
      id: 41,
      title: "The Healing Properties of Cardamom",
      excerpt: "Explore the medicinal benefits of cardamom and learn how to use this aromatic spice for health and wellness.",
      category: "herbs",
      author: "Dr. Rajesh Kumar",
      date: "2023-10-11",
      readTime: "6 min read",
      image: blog141,
      featured: false,
      tags: ["Cardamom", "Digestion", "Aromatic"],
    },
    {
      id: 42,
      title: "Ayurvedic Principles for Healthy Eyes",
      excerpt: "Learn natural Ayurvedic practices to maintain healthy eyes and improve vision naturally.",
      category: "wellness",
      author: "Dr. Anjali Perera",
      date: "2023-10-09",
      readTime: "7 min read",
      image: blog142,
      featured: false,
      tags: ["Eye Health", "Vision", "Natural Care"],
    },
    {
      id: 43,
      title: "The Art of Ayurvedic Fasting",
      excerpt: "Discover the benefits of Ayurvedic fasting and learn safe methods to cleanse and rejuvenate your body.",
      category: "lifestyle",
      author: "Dr. Priya Fernando",
      date: "2023-10-07",
      readTime: "8 min read",
      image: blog143,
      featured: false,
      tags: ["Fasting", "Cleansing", "Rejuvenation"],
    },
    {
      id: 44,
      title: "Understanding the Five Elements in Ayurveda",
      excerpt: "Learn about the five elements (Panchamahabhutas) and how they influence your health and constitution.",
      category: "ayurveda",
      author: "Dr. Rajesh Kumar",
      date: "2023-10-05",
      readTime: "10 min read",
      image: blog144,
      featured: false,
      tags: ["Five Elements", "Constitution", "Balance"],
    },
    {
      id: 45,
      title: "Ayurvedic Remedies for Skin Health",
      excerpt: "Discover natural Ayurvedic treatments for healthy, glowing skin using herbs and natural ingredients.",
      category: "lifestyle",
      author: "Dr. Anjali Perera",
      date: "2023-10-03",
      readTime: "8 min read",
      image: blog145,
      featured: false,
      tags: ["Skin Health", "Natural Beauty", "Herbs"],
    },
    {
      id: 46,
      title: "The Healing Power of Coriander",
      excerpt: "Learn about the medicinal properties of coriander and how to use it for digestive and overall health.",
      category: "herbs",
      author: "Dr. Priya Fernando",
      date: "2023-10-01",
      readTime: "6 min read",
      image: blog146,
      featured: false,
      tags: ["Coriander", "Digestion", "Detox"],
    },
    {
      id: 47,
      title: "Ayurvedic Approaches to Heart Health",
      excerpt: "Discover natural Ayurvedic methods to maintain a healthy heart and cardiovascular system.",
      category: "wellness",
      author: "Dr. Rajesh Kumar",
      date: "2023-09-29",
      readTime: "9 min read",
      image: blog147,
      featured: false,
      tags: ["Heart Health", "Cardiovascular", "Natural Care"],
    },
    {
      id: 48,
      title: "The Art of Ayurvedic Spice Blending",
      excerpt: "Master the art of creating therapeutic spice blends for cooking and healing according to Ayurvedic principles.",
      category: "recipes",
      author: "Dr. Anjali Perera",
      date: "2023-09-27",
      readTime: "8 min read",
      image: blog148,
      featured: false,
      tags: ["Spice Blending", "Cooking", "Therapeutic"],
    },
    {
      id: 49,
      title: "Understanding Ojas: The Vital Essence",
      excerpt: "Learn about Ojas, the vital essence in Ayurveda, and how to build and maintain it for optimal health.",
      category: "ayurveda",
      author: "Dr. Priya Fernando",
      date: "2023-09-25",
      readTime: "9 min read",
      image: blog149,
      featured: false,
      tags: ["Ojas", "Vital Essence", "Vitality"],
    },
    {
      id: 50,
      title: "Ayurvedic Principles for Longevity",
      excerpt: "Discover ancient Ayurvedic wisdom for living a long, healthy, and fulfilling life.",
      category: "lifestyle",
      author: "Dr. Rajesh Kumar",
      date: "2023-09-23",
      readTime: "10 min read",
      image: blog150,
      featured: false,
      tags: ["Longevity", "Healthy Aging", "Wisdom"],
    },
  ];

  const allArticles = [...featuredArticles, ...regularArticles];

  const filteredArticles = allArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ayurveda': return BookOpen;
      case 'herbs': return Leaf;
      case 'wellness': return Heart;
      case 'recipes': return Brain;
      case 'lifestyle': return Shield;
      default: return BookOpen;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ayurveda': return 'from-primary/20 to-ayur-sage/20 text-primary';
      case 'herbs': return 'from-ayur-light-green/20 to-ayur-sage/20 text-ayur-deep-green';
      case 'wellness': return 'from-ayur-gold/20 to-ayur-warm-gold/20 text-ayur-gold';
      case 'recipes': return 'from-ayur-sage/20 to-ayur-light-green/20 text-ayur-sage';
      case 'lifestyle': return 'from-ayur-deep-green/20 to-primary/20 text-ayur-deep-green';
      default: return 'from-primary/20 to-ayur-sage/20 text-primary';
    }
  };



  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ayur-light-green/70 via-ayur-sage/50 to-ayur-deep-green/40"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-ayur-sage/30 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-ayur-light-green/40 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-ayur-gold/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto animate-fade-in">
            <Badge className="mb-8 bg-ayur-light-green/30 text-ayur-deep-green border-ayur-sage/50 px-6 py-2 text-sm font-medium backdrop-blur-sm">
              <BookOpen className="w-4 h-4 mr-2 animate-pulse" />
              Knowledge Hub
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-ayur-deep-green">
              Ayurvedic 
              <span className="block text-ayur-gold">Wisdom & Wellness</span>
            </h1>
            <p className="text-xl md:text-2xl text-ayur-deep-green/90 leading-relaxed max-w-4xl mx-auto">
              Discover the ancient wisdom of Ayurveda through our comprehensive collection of articles, 
              guides, and insights to enhance your health and well-being journey.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gradient-to-b from-background to-ayur-light-green/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center justify-between max-w-6xl mx-auto animate-fade-in">
            {/* Search */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
              <Input
                placeholder="Search articles, topics, or ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 sm:pl-12 h-10 sm:h-12 text-base sm:text-lg border-2 border-border/50 focus:border-primary transition-colors duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-48 h-10 sm:h-12 border-2 border-border/50 focus:border-primary transition-colors duration-300">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex items-center gap-3 mt-6 max-w-6xl mx-auto">
            {selectedCategory !== 'all' && (
              <Badge 
                variant="secondary" 
                className="cursor-pointer hover:bg-primary/10 transition-colors duration-300 px-4 py-2" 
                onClick={() => setSelectedCategory('all')}
              >
                {categories.find(c => c.id === selectedCategory)?.name} ×
              </Badge>
            )}
            {searchTerm && (
              <Badge 
                variant="secondary" 
                className="cursor-pointer hover:bg-primary/10 transition-colors duration-300 px-4 py-2" 
                onClick={() => setSearchTerm('')}
              >
                "{searchTerm}" ×
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Featured Articles - Image Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Featured Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our most popular and insightful articles to help you on your wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20">
            {featuredArticles.map((article, index) => (
              <Card 
                key={article.id} 
                className="group hover-lift animate-fade-in overflow-hidden cursor-pointer bg-white border-2 border-gray-100 hover:border-ayur-sage/50 hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open('https://web.facebook.com/shghelaosu/photos', '_blank')}
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-ayur-light-green/20 to-ayur-sage/10 flex items-center justify-center">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-ayur-gold to-ayur-warm-gold text-white px-3 py-1 text-xs font-bold shadow-lg">
                      Featured
                    </Badge>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="text-center text-white">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-semibold">View on Facebook</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 bg-gradient-to-b from-ayur-light-green/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              All Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our complete collection of Ayurvedic knowledge and wellness insights
            </p>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredArticles.map((article, index) => (
                <Card 
                  key={article.id} 
                  className="group hover-lift animate-fade-in overflow-hidden cursor-pointer bg-white border-2 border-gray-100 hover:border-ayur-sage/50 hover:shadow-2xl transition-all duration-500"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => window.open('https://web.facebook.com/shghelaosu/photos', '_blank')}
                >
                  <div className="relative overflow-hidden">
                    <div className="w-full h-64 bg-gradient-to-br from-ayur-light-green/20 to-ayur-sage/10 flex items-center justify-center">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Featured Badge */}
                    {article.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-gradient-to-r from-ayur-gold to-ayur-warm-gold text-white px-2 py-1 text-xs font-bold shadow-lg">
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <div className="text-center text-white">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-1">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                        <p className="text-xs font-semibold">View on Facebook</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No articles found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or filters
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="btn-primary"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default Blog;
