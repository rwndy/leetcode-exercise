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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    console.log('root left=>', root?.left)
    console.log('root right =>', root?.right)
    console.log('root val =>', root?.val)
    if (root === null) return false

    targetSum -= root.val

    let left = root?.left
    let right = root?.right

    console.log('root left=>', left?.left)
    console.log('root right =>', right?.right)

    if (left === null && right === null) {
        return targetSum === 0
    }
    
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum)
};