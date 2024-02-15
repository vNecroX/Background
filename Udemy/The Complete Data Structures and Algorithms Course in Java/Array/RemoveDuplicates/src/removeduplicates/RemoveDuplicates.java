package removeduplicates;

/**
 *
 * @author vNecroX
 */
public class RemoveDuplicates {
    int[] nums = {1, 1, 2, 3, 3, 4, 6, 6};
    
    public static void main(String[] args) {
        RemoveDuplicates rM = new RemoveDuplicates();
        int newSize = rM.remove(rM.nums);
        System.out.println("New size: " + newSize);
    }
    
    public int remove(int[] nums) {
        int i = 0;
        int l = nums.length;
        
        printNums(nums, l);
        
        for(int j=1; j<l; j++) {
            if(nums[i] != nums[j]) {
                i++;
                nums[i] = nums[j];
                printNums(nums, l);
            }
        }
        
        printNums(nums, i + 1);
        
        return i + 1;
    }
    
    public void printNums(int[] nums, int l) {
        for(int i=0; i<l; i++) { 
            System.out.print(nums[i] + " ");
        }
        
        System.out.println();
    }
}
