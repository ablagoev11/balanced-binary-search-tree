class TreeNode {
  value;
  left;
  right;
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
let root = null;
const balanceBinaryTree = (array, start, end) => {
  if (start > end) return null;
  const middle = Math.ceil((start + end) / 2);
  const node = new TreeNode(array[middle]);
  node.left = balanceBinaryTree(array, start, middle - 1);
  node.right = balanceBinaryTree(array, middle + 1, end);
  return node;
};

const insert = (root, value) => {
  if (root.value > value) {
    if (root.left === null) {
      const node = new TreeNode(value);
      root.left = node;
      return;
    } else {
      insert(root.left, value);
    }
  } else {
    if (root.right === null) {
      const node = new TreeNode(value);
      root.right = node;
      return;
    } else {
      insert(root.right, value);
    }
  }
};

function delNode(root, x) {
  if (root === null) {
    return root;
  }
  if (root.value > x) {
    root.left = delNode(root.left, x);
  } else if (root.value < x) {
    root.right = delNode(root.right, x);
  } else {
    if (root.left === null) return root.right;

    if (root.right === null) return root.left;

    let succ = getSuccessor(root);
    root.value = succ.value;
    root.right = delNode(root.right, succ.value);
  }
  return root;
}

const sortAndRemoveDuplicate = (array) => {
  array.sort((a, b) => a - b);
  array = array.filter((element, index) => {
    return !(array[index] === array[index + 1]);
  });
  return array;
};

const find = (root, value) => {
  if (root === null) return null;
  if (root.value > value) {
    return find(root.left, value);
  } else if (root.value < value) {
    return find(root.right, value);
  } else if (root.value === value) return root;
};
levelOrder = (callback, root) => {
  const queue = [root];
  while (queue.length > 0) {
    const item = queue.shift();
    if (item) {
      callback(item);
      queue.push(item.left);
      queue.push(item.right);
    }
  }
};

const inOrder = (callback, root) => {
  if (root === null) return;
  inOrder(callback, root.left);
  callback(root);
  inOrder(callback, root.right);
};
const preOrder = (callback, root) => {
  if (root === null) return;
  callback(root);
  preOrder(callback, root.left);
  preOrder(callback, root.right);
};

const postOrder = (callback, root) => {
  if (root === null) return;
  postOrder(callback, root.left);
  postOrder(callback, root.right);
  callback(root);
};
const height = (root) => {
  if (root === null) return 0;
  const leftHeight = height(root.left);
  const rightHeight = height(root.right);
  return (leftHeight > rightHeight ? leftHeight : rightHeight) + 1;
};

const isBalanced = (root) => {
  if (root === null) return true;
  const leftHeight = height(root.left);
  const rightHeight = height(root.right);
  if (
    Math.abs(leftHeight - rightHeight) <= 1 &&
    isBalanced(root.left) === true &&
    isBalanced(root.right) === true
  )
    return true;
  return false;
};
const getArray = (root,nodes){
    if(root === null) return;
    getArray(root.left,nodes);
    nodes.push(root)
    getArray(root.right,nodes);
}
const rebalanceTree = (root) =>{
    if(!isBalanced(root)){
        const nodes = [];
        getArray(root,nodes)
        sortAndRemoveDuplicate(nodes)
        return balanceBinaryTree(array, 0, array.length - 1);
    }
}

const array = sortAndRemoveDuplicate([5, 6, 2, 4, 7, 0, 1, 3, 1, 2, 10]);
root = balanceBinaryTree(array, 0, array.length - 1);

