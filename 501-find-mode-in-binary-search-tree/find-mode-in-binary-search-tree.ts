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

function findMode(root: TreeNode | null): number[] {
   const freq = new Map<number, number>()
   
   function dfs(node: TreeNode | null) {
        if (!node) return
        freq.set(node.val, (freq.get(node.val) || 0) + 1)
        dfs(node.left)
        dfs(node.right)
    }
    
    dfs(root)

    let max = 0
    const result: number[] = []

    for (const [key, value] of freq) {
        if (value > max) {
        max = value
        result.length = 0
        result.push(key)
        } else if (value === max) {
        result.push(key)
        }
    }

  return result
};