import React, { useState } from 'react';

const data = {
  MEN: [
    {
      name: "DRESS SHOES",
      value: "dress_shoes",
      subcategories: ["Oxfords", "Derbies", "Brogues", "Loafers", "Monk Straps"]
    },
    {
      name: "CASUAL SHOES",
      value: "casual_shoes",
      subcategories: ["Sneakers", "Boat Shoes", "Espadrilles", "Moccasins", "Slip-Ons"]
    },
    {
      name: "BOOTS",
      value: "boots",
      subcategories: ["Ankle Boots", "Chelsea Boots", "Chukka Boots", "Work Boots", "Hiking Boots"]
    },
    {
      name: "SANDALS",
      value: "sandals",
      subcategories: ["Flip Flops", "Slide Sandals", "Fisherman Sandals"]
    },
    {
      name: "ATHLETIC FOOTWEAR",
      value: "athletic_footwear",
      subcategories: ["Running Shoes", "Training Shoes", "Basketball Shoes", "Soccer Shoes", "Tennis Shoes"]
    },
    {
      name: "FORMAL SHOES",
      value: "formal_shoes",
      subcategories: ["Dress Boots", "Patent Leather Shoes"]
    },
    {
      name: "OUTDOOR SHOES",
      value: "outdoor_shoes",
      subcategories: ["Hiking Boots", "Trail Shoes"]
    },
    {
      name: "SLIPPERS",
      value: "slippers",
      subcategories: ["Indoor Slippers", "Outdoor Slippers"]
    }
  ],
  WOMEN: [
    {
      name: "HEELS",
      value: "heels",
      subcategories: ["Stilettos", "Kitten Heels", "Block Heels", "Wedges", "Platform Heels"]
    },
    {
      name: "FLATS",
      value: "flats",
      subcategories: ["Ballet Flats", "Loafers", "Espadrilles", "Moccasins"]
    },
    {
      name: "BOOTS",
      value: "boots",
      subcategories: ["Ankle Boots", "Knee-High Boots", "Over-the-Knee Boots", "Chelsea Boots", "Combat Boots"]
    },
    {
      name: "SANDALS",
      value: "sandals",
      subcategories: ["Gladiator Sandals", "Slide Sandals", "Flip Flops", "Slingback Sandals"]
    },
    {
      name: "SNEAKERS",
      value: "sneakers",
      subcategories: ["Running Shoes", "Casual Sneakers", "High-Top Sneakers", "Slip-On Sneakers"]
    },
    {
      name: "FORMAL SHOES",
      value: "formal_shoes",
      subcategories: ["Dress Shoes", "Pumps"]
    },
    {
      name: "ATHLETIC FOOTWEAR",
      value: "athletic_footwear",
      subcategories: ["Training Shoes", "Hiking Boots", "Walking Shoes"]
    },
    {
      name: "SLIPPERS",
      value: "slippers",
      subcategories: ["Indoor Slippers", "Outdoor Slippers"]
    }
  ],
  KIDS: [
    {
      "name": "SPORTS SHOES",
      "value": "sports_shoes",
      "subcategories": [
        "Running Shoes",
        "Training Shoes",
        "Soccer Shoes",
        "Basketball Shoes"
      ]
    },
    {
      "name": "CASUAL SHOES",
      "value": "casual_shoes",
      "subcategories": [
        "Sneakers",
        "Slip-Ons",
        "Sandals",
        "Flip Flops"
      ]
    },
    {
      "name": "SCHOOL SHOES",
      "value": "school_shoes",
      "subcategories": [
        "Boys",
        "Girls"
      ]
    },
    {
      "name": "BOOTS",
      "value": "boots",
      "subcategories": [
        "Ankle Boots",
        "Winter Boots",
        "Rain Boots"
      ]
    },
    {
      "name": "SLIPPERS",
      "value": "slippers",
      "subcategories": [
        "Indoor Slippers",
        "Outdoor Slippers"
      ]
    },
    {
      "name": "FORMAL SHOES",
      "value": "formal_shoes",
      "subcategories": [
        "Boys",
        "Girls"
      ]
    }
  ],
  OTHER_PRODUCTS: [
    {
      "name": "FOOTWEAR ACCESSORIES",
      "value": "footwear_accessories",
      "subcategories": [
        "Shoe Laces",
        "Insoles",
        "Shoe Polish"
      ]
    },
    {
      "name": "FOOTWEAR CARE",
      "value": "footwear_care",
      "subcategories": [
        "Waterproof Sprays",
        "Shoe Cleaners"
      ]
    },
    {
      "name": "SOCKS",
      "value": "socks",
      "subcategories": [
        "Casual Socks",
        "Athletic Socks",
        "Dress Socks"
      ]
    },
    {
      "name": "SHOE STORAGE",
      "value": "shoe_storage",
      "subcategories": [
        "Shoe Racks",
        "Shoe Bags"
      ]
    }
  ]
};

const Drop = ({
    Category,
    Footwear_Type,
    Variety,
    handleEntryCategory,
    handleCategoryChanges,
    handleSubcategoryChanges
})=>{

//   function handleEntryCategory(e) {
//     const entryCategoryValue = e.target.value;
//     setEntryCategory(entryCategoryValue);
//     setSelectedCategory("");
//     setSelectedSubcategory("");
//   }

//   function handleCategoryChanges(e) {
//     const categoryValue = e.target.value;
//     setSelectedCategory(categoryValue);
//     setSelectedSubcategory("");
//   }

//   function handleSubcategoryChanges(e) {
//     const subcategoryValue = e.target.value;
//     setSelectedSubcategory(subcategoryValue);
//   }

  const categories = Category ? data[Category] : [];
  const currentCategory = categories.find((category) => category.value === Footwear_Type);

  return (
    <div className='space-y-6'>
      <label htmlFor="entryCategorySelect">Select Category: </label>
      <select
        id="entryCategorySelect"
        value={Category}
        onChange={handleEntryCategory}
      >
        <option value="" disabled>Select it</option>
        {Object.keys(data).map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      {Category && (
        <div>
          <label htmlFor="categoriesSelect">Footwear Type: </label>
          <select
            id="categoriesSelect"
            value={Footwear_Type}
            onChange={handleCategoryChanges}
          >
            <option value="" disabled>Select it</option>
            {categories.map((category) => (
              <option key={category.value} value={category.value}>{category.name}</option>
            ))}
          </select>
        </div>
      )}

      {currentCategory && (
        <div>
          <label htmlFor="subcategoriesSelect">Variety: </label>
          <select
            id="subcategoriesSelect"
            value={Variety}
            onChange={handleSubcategoryChanges}
          >
            <option value="" disabled>Select it</option>
            {currentCategory.subcategories.map((subcategory) => (
              <option key={subcategory} value={subcategory}>{subcategory}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default Drop;
