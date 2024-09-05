/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// TC: O((m+n) log (m+n)) - Worst solution and bad performance!
// Brute force and naive solution
var merge = function (nums1, m, nums2, n) {
    // Time complexity: : O(n)
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }
    // Time complexity: O((m+n) log (m+n))
    nums1.sort((a, b) => a - b);
};

// Better solution with better performance
// TC: O(m+n)
// Using two pointer
var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    // TC: O(m+n)
    while (j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

// INPUT:
// nums1 = [1,2,3,0,0,0]
// m = 3
// nums2 = [2,5,6]
// n = 3

// Output: [1,2,2,3,5,6]
