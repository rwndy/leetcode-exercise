/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function minDepth(root: TreeNode | null): number {
     if (root === null) return 0

    const left = minDepth(root.left)
    const right = minDepth(root.right)

    console.log('left', left, 'r =>', right)

    if (left === 0) return right + 1
    if (right === 0) return left + 1

    return Math.min(left, right) + 1
};