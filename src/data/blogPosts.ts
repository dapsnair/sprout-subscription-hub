
export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
}

export const categories = [
  "Growing Tips",
  "Nutrition",
  "Recipes",
  "Sustainability"
];

export const blogPosts: BlogPost[] = [
  {
    id: "growing-microgreens-at-home",
    title: "The Complete Guide to Growing Microgreens at Home",
    category: "Growing Tips",
    date: "2023-08-15",
    excerpt: "Learn how to grow nutritious microgreens in your kitchen with minimal equipment and space.",
    content: `
      <p>Growing microgreens at home is surprisingly easy and requires minimal space, making it perfect for urban dwellers or anyone with limited gardening space. Here's a step-by-step guide to get you started.</p>
      
      <h3>What You'll Need</h3>
      <ul>
        <li>Shallow containers with drainage holes</li>
        <li>Organic potting soil or coconut coir</li>
        <li>Microgreen seeds (broccoli, sunflower, radish, pea, etc.)</li>
        <li>Spray bottle for watering</li>
        <li>Sunny windowsill or grow light</li>
      </ul>
      
      <h3>Step 1: Prepare Your Container</h3>
      <p>Fill your container with about 1-2 inches of moistened soil. Flatten the soil but don't compact it too much.</p>
      
      <h3>Step 2: Sow Your Seeds</h3>
      <p>Sprinkle seeds densely across the soil surface. Unlike regular gardening, microgreens are grown close together, almost like a living carpet.</p>
      
      <h3>Step 3: Cover and Germinate</h3>
      <p>Cover seeds with a very thin layer of soil. For the first 3-5 days, place another tray on top to block light, which helps with germination.</p>
      
      <h3>Step 4: Water and Light</h3>
      <p>Once sprouted, remove the cover tray and place in indirect sunlight. Water from below by placing the container in a shallow tray of water for a few minutes, rather than watering from the top which can damage delicate seedlings.</p>
      
      <h3>Step 5: Harvest</h3>
      <p>In about 7-14 days, when the microgreens have their first true leaves, they're ready to harvest. Use scissors to cut them just above the soil line.</p>
      
      <p>Growing your own microgreens is not only economical but also ensures you have the freshest, most nutritious greens available right at your fingertips. Happy growing!</p>
    `,
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1",
    author: {
      name: "Emma Greene",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    }
  },
  {
    id: "microgreens-nutrient-density",
    title: "Understanding the Incredible Nutrient Density of Microgreens",
    category: "Nutrition",
    date: "2023-09-02",
    excerpt: "Discover why these tiny greens pack such a powerful nutritional punch compared to their mature counterparts.",
    content: `
      <p>When it comes to nutrient density, microgreens are the undisputed champions of the plant world. Research has shown that these tiny greens can contain up to 40 times more nutrients than their mature counterparts. Let's explore what makes microgreens such nutritional powerhouses.</p>
      
      <h3>The Science Behind the Nutrition</h3>
      <p>A study published in the Journal of Agricultural and Food Chemistry found that microgreens contained significantly higher levels of vitamins and carotenoids (antioxidants) than mature leaves from the same plants. This nutrient concentration happens because microgreens are harvested during a critical growth stage when the plant has all the nutrients it needs to grow but hasn't developed the fibrous components of mature plants yet.</p>
      
      <h3>Top Nutritional Superstars</h3>
      <p>While all microgreens are nutritious, some stand out for their specific nutrient profiles:</p>
      <ul>
        <li><strong>Red Cabbage Microgreens:</strong> Highest in vitamin C, with 40 times more than mature cabbage</li>
        <li><strong>Cilantro Microgreens:</strong> Rich in lutein and beta-carotene, important for eye health</li>
        <li><strong>Sunflower Microgreens:</strong> High in protein and healthy fats</li>
        <li><strong>Broccoli Microgreens:</strong> Contain sulforaphane, a powerful cancer-fighting compound</li>
      </ul>
      
      <h3>Bioavailability Matters</h3>
      <p>Not only do microgreens contain more nutrients, but these nutrients are often more bioavailable, meaning your body can absorb and use them more effectively. The tender cell walls of young plants make it easier for your digestive system to access these vital nutrients compared to mature vegetables.</p>
      
      <h3>Integrating Microgreens Into Your Diet</h3>
      <p>Adding just a small handful of microgreens to your daily meals can significantly boost your nutrient intake. Try adding them to smoothies, salads, sandwiches, or as garnishes on soups and main dishes.</p>
      
      <p>By understanding the exceptional nutritional profile of microgreens, you can make informed choices about incorporating these tiny but mighty greens into your wellness routine.</p>
    `,
    image: "https://images.unsplash.com/photo-1570367625387-79085a7c682e",
    author: {
      name: "Dr. Michael Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    }
  },
  {
    id: "microgreen-salad-recipes",
    title: "5 Delicious Microgreen Salad Recipes to Elevate Your Meals",
    category: "Recipes",
    date: "2023-10-10",
    excerpt: "Transform ordinary meals into nutritional powerhouses with these simple yet elegant microgreen salad recipes.",
    content: `
      <p>Microgreens aren't just nutritious—they're also delicious and can add complex flavors and beautiful colors to your meals. Here are five easy recipes to help you incorporate more microgreens into your diet.</p>
      
      <h3>1. Classic Microgreen Breakfast Salad</h3>
      <p><strong>Ingredients:</strong></p>
      <ul>
        <li>2 cups mixed microgreens (sunflower, pea shoots, radish)</li>
        <li>2 soft-boiled eggs, halved</li>
        <li>1 avocado, sliced</li>
        <li>Cherry tomatoes, halved</li>
        <li>Lemon-olive oil dressing</li>
        <li>Salt and pepper to taste</li>
      </ul>
      <p><strong>Instructions:</strong> Arrange microgreens on a plate, top with eggs, avocado, and tomatoes. Drizzle with dressing and season.</p>
      
      <h3>2. Citrus Microgreen Salad with Goat Cheese</h3>
      <p><strong>Ingredients:</strong></p>
      <ul>
        <li>3 cups arugula microgreens</li>
        <li>1 orange, segmented</li>
        <li>1 grapefruit, segmented</li>
        <li>2 oz crumbled goat cheese</li>
        <li>2 tbsp toasted pine nuts</li>
        <li>Honey-citrus vinaigrette</li>
      </ul>
      <p><strong>Instructions:</strong> Toss arugula microgreens with citrus segments. Top with goat cheese and pine nuts. Drizzle with vinaigrette.</p>
      
      <h3>3. Spicy Microgreen and Quinoa Bowl</h3>
      <p><strong>Ingredients:</strong></p>
      <ul>
        <li>1 cup cooked quinoa, cooled</li>
        <li>2 cups spicy microgreens (radish, mustard, arugula)</li>
        <li>1 cup chickpeas</li>
        <li>1/2 cup diced cucumber</li>
        <li>1/4 cup diced red onion</li>
        <li>Tahini-lemon dressing</li>
      </ul>
      <p><strong>Instructions:</strong> Mix quinoa with microgreens, chickpeas, cucumber, and red onion. Toss with dressing.</p>
      
      <h3>4. Microgreen Caprese Stack</h3>
      <p><strong>Ingredients:</strong></p>
      <ul>
        <li>Fresh mozzarella slices</li>
        <li>Heirloom tomato slices</li>
        <li>Basil microgreens</li>
        <li>Extra virgin olive oil</li>
        <li>Balsamic glaze</li>
        <li>Flaky sea salt</li>
      </ul>
      <p><strong>Instructions:</strong> Alternate layers of mozzarella and tomato. Top with basil microgreens, drizzle with olive oil and balsamic, and sprinkle with salt.</p>
      
      <h3>5. Microgreen and Berry Breakfast Bowl</h3>
      <p><strong>Ingredients:</strong></p>
      <ul>
        <li>Greek yogurt</li>
        <li>Mixed berries</li>
        <li>Sweet microgreens (sunflower, pea shoots)</li>
        <li>Granola</li>
        <li>Honey</li>
        <li>Chia seeds</li>
      </ul>
      <p><strong>Instructions:</strong> Layer yogurt in a bowl, top with berries, microgreens, granola, a drizzle of honey, and a sprinkle of chia seeds.</p>
      
      <p>These recipes showcase the versatility of microgreens and how they can enhance both the nutritional value and presentation of your meals.</p>
    `,
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af",
    author: {
      name: "Sophie Williams",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop"
    }
  },
  {
    id: "sustainable-microgreen-farming",
    title: "How Microgreen Farming is Revolutionizing Sustainable Agriculture",
    category: "Sustainability",
    date: "2023-11-05",
    excerpt: "Explore how microgreen cultivation is creating a more sustainable food system with minimal environmental impact.",
    content: `
      <p>In a world facing increasing challenges from climate change and resource scarcity, microgreen farming stands out as a beacon of sustainable agricultural innovation. Let's examine how these tiny greens are making a massive positive impact on our environment.</p>
      
      <h3>Minimal Resource Requirements</h3>
      <p>Microgreens require significantly fewer resources than traditional crops:</p>
      <ul>
        <li><strong>Water Usage:</strong> Microgreens use up to 98% less water compared to field-grown vegetables</li>
        <li><strong>Land Efficiency:</strong> One square foot can produce equivalent nutrients to 10-20 square feet of garden space</li>
        <li><strong>Energy Efficiency:</strong> Shorter growing cycles mean less energy used overall</li>
      </ul>
      
      <h3>Year-Round Local Production</h3>
      <p>Microgreens can be grown indoors in any climate, enabling local food production year-round. This dramatically reduces the carbon footprint associated with transporting produce across countries or continents. A study from the University of Michigan found that urban microgreen farming could reduce transportation emissions by up to 90% compared to conventional produce in some cities.</p>
      
      <h3>Reduced Food Waste</h3>
      <p>The "harvest as needed" model of microgreen cultivation significantly reduces food waste, as greens can be harvested right before consumption. Additionally, any growing medium can typically be composted, creating a nearly zero-waste system.</p>
      
      <h3>Minimal Packaging</h3>
      <p>Local microgreen farms often use minimal, reusable, or compostable packaging, further reducing environmental impact compared to conventionally farmed and shipped produce.</p>
      
      <h3>Accessibility and Food Security</h3>
      <p>The ability to grow microgreens in urban environments with minimal equipment makes them an important tool for addressing food deserts and improving food security in diverse communities.</p>
      
      <h3>The Future of Sustainable Farming</h3>
      <p>As climate change continues to challenge traditional agricultural systems, the resource efficiency and adaptability of microgreen farming provide a promising model for sustainable food production. Whether grown commercially in vertical farms or at home in a sunny window, microgreens represent a small but mighty solution to some of our biggest environmental challenges.</p>
    `,
    image: "https://images.unsplash.com/photo-1582726458086-30eef5a7ef89",
    author: {
      name: "Jonathan Rivers",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop"
    }
  }
];
