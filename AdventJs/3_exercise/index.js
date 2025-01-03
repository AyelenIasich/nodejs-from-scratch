/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */

function organizeInventory(inventory) {
  if (inventory.length) {
    const organizedInventory = inventory.reduce((finalInventory, item) => {
      const { category, name, quantity } = item;

      if (!finalInventory[category]) {
        finalInventory[category] = {};
      }
      if (finalInventory[category][name]) {
        finalInventory[category][name] += quantity;
      } else {
        finalInventory[category][name] = quantity;
      }
      return finalInventory;
    }, {});

    return organizedInventory;
  }

  return {};
}

const inventory = [
  { name: "doll", quantity: 5, category: "toys" },
  { name: "car", quantity: 3, category: "toys" },
  { name: "ball", quantity: 2, category: "sports" },
  { name: "car", quantity: 2, category: "toys" },
  { name: "racket", quantity: 4, category: "sports" },
];
const inventory1 = [
  { name: "doll", quantity: 5, category: "toys" },
  { name: "ball", quantity: 2, category: "sports" },
];

const inventoryEmpty = [];

const organize = organizeInventory(inventory);
console.log(organize);


const inventory2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
  ]
  
  const organize2 =organizeInventory(inventory2)
  console.log(organize2);
  