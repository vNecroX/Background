package binarysearch;

/**
 *
 * @author vNecroX
 */
public class BinarySearch {
    int arr[] = {1, 3, 5, 8, 12, 34, 35};

    public static void main(String[] args) {
        BinarySearch bS = new BinarySearch();
        int targetIndex = bS.search(bS.arr, 35);
        System.out.println("Target index: " + targetIndex);
    }

    public int search(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        int mid;
        
        while(left <= right) {
            mid = (left + right)/2;
            System.out.println("Mid: " + mid);
            
            if(arr[mid] == target) return mid;
            else if(target > arr[mid]) {
                left = mid + 1;
                System.out.println("Left: " + left);
            }
            else {
                right = mid - 1;
                System.out.println("Right: " + right);
            }
        }
        
        return -1;
    }
}
