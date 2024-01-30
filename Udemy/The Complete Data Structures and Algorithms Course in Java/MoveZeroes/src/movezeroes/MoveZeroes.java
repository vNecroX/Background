package movezeroes;

/**
 *
 * @author vNecroX
 */
public class MoveZeroes {
    int nums[] = {0, 1, 0, 3, 4};
    
    public static void main(String[] args) {
        MoveZeroes mZ = new MoveZeroes();
        mZ.move(mZ.nums);
    }
    
    public void move(int[] nums) {
        int i = 0;
        int currentIndex = 0;
        int zeroesCount = 0;
        
        printNums(nums);
        
        for(; i<nums.length; i++) {
            if(nums[i] != 0) {
                nums[currentIndex] = nums[i];
                currentIndex++;
                printNums(nums);
            }
            else zeroesCount++;
        }
        
        i -= zeroesCount;
        
        for(; i<nums.length; i++) {
            nums[i] = 0;
            printNums(nums);
        }
    }
    
    public void printNums(int[] nums) {
        for(int i=0; i<nums.length; i++) { 
            System.out.print(nums[i] + " ");
        }
        
        System.out.println();
    }
}
