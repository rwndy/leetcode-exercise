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

function preorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = []
   
    function Root(node: TreeNode | null, res ): void {
        if (node === null) return
        res.push(node?.val)

        Root(node?.left, res)
        Root(node?.right, res)
    }

    Root(root, result)
    return result

};