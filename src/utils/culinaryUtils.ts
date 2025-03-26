
// Culinary descriptions for each variety and use
export const getCulinaryDescription = (varietyId: string, use: string): string => {
  const descriptions: Record<string, Record<string, string>> = {
    broccoli: {
      'Salads': 'Add a nutritional boost to green salads with a handful of broccoli microgreens on top.',
      'Sandwiches': 'Layer between sandwich ingredients for an extra crunch and nutritional boost.',
      'Garnish for soups': 'Sprinkle on top of soups just before serving for added flavor and visual appeal.'
    },
    sunflower: {
      'Salads': 'The hearty texture makes them a substantial salad base or mix with other greens.',
      'Sandwiches': 'Their nutty flavor and crunch make them perfect for sandwiches and wraps.',
      'Wraps and rolls': 'Use as a main green in spring rolls or wraps for added texture.'
    },
    pea: {
      'Stir-fries': 'Add at the last minute to stir-fries for a sweet, delicate flavor.',
      'Salads': 'Mix with other greens or use alone for a distinctively sweet salad.',
      'Garnish for spring dishes': 'Perfect as a garnish for spring-themed dishes and soups.'
    },
    radish: {
      'Spicy addition to sandwiches': 'Add a peppery kick to sandwiches and burgers.',
      'Salad accent': 'Mix with milder greens to add a spicy contrast in salads.',
      'Garnish for rich dishes': 'Use to cut through rich, fatty dishes with their sharp flavor.'
    },
    amaranth: {
      'Color accent in salads': 'Add visual pop with their striking magenta stems in salads.',
      'Garnish for plating': 'Use as a beautiful garnish for professionally plated dishes.',
      'Smoothie addition': 'Add to smoothies for color and nutritional benefits.'
    },
    kale: {
      'Smoothies': 'Blend into smoothies for nutrition without the bitterness of mature kale.',
      'Salads': 'Mix with other greens for a mild kale flavor in salads.',
      'Grain bowls': 'Top grain bowls for added nutrition and visual appeal.'
    },
    basil: {
      'Italian dishes': 'Add to pasta, pizza, and other Italian favorites just before serving.',
      'Caprese salads': 'Use in place of or alongside mature basil in caprese salads.',
      'Infused oils': 'Use to infuse oils with concentrated basil flavor.'
    },
    cilantro: {
      'Mexican cuisine': 'Perfect for tacos, salsas, and other Mexican dishes.',
      'Thai dishes': 'Add to pad thai, curries, and other Thai cuisine.',
      'Fresh salsas': 'Mix into fresh salsas for a bright, citrusy note.'
    }
  };
  
  return descriptions[varietyId]?.[use] || 'A versatile addition to your culinary creations.';
};

// Pro tips for each variety
export const getProTip = (varietyId: string): string => {
  const tips: Record<string, string> = {
    broccoli: 'For maximum nutrition, consume broccoli microgreens raw as heat can reduce their sulforaphane content.',
    sunflower: 'Store sunflower microgreens with a slightly damp paper towel in a container in the refrigerator to maintain their crispness.',
    pea: 'Try lightly sautéing pea shoots with garlic and a splash of sesame oil for a simple side dish.',
    radish: 'Pair radish microgreens with creamy dishes where their spicy notes can cut through richness.',
    amaranth: 'The vibrant color of amaranth microgreens intensifies when grown with more light exposure.',
    kale: 'Massage kale microgreens with a little olive oil to soften them slightly before adding to salads.',
    basil: 'Chop basil microgreens and mix with softened butter to create a flavorful compound butter for bread or steak.',
    cilantro: 'If you find mature cilantro too strong, the microgreen version offers a more subtle flavor profile that might be more palatable.'
  };
  
  return tips[varietyId] || 'Harvest just before use for maximum freshness and flavor.';
};
