/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
  let tree = "";
  const maxWidth = height * 2 - 1;

  for (let i = 0; i < height; i++) {
    const treeSpaces = "_".repeat(height -i -1)
    const decoration = ornament.repeat(i * 2 + 1);
    tree += treeSpaces + decoration + treeSpaces + "\n";
  }

  const trunkTree = "_".repeat(height - 1) + "#" + "_".repeat(height - 1);
  tree += trunkTree + "\n" + trunkTree;

  return tree;
}

const tree = createXmasTree(5, "*");
console.log(tree);

const tree2 = createXmasTree(3, "+");
console.log(tree2);