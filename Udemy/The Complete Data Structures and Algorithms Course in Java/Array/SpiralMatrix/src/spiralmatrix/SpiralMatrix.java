package spiralmatrix;

import java.util.List;
import java.util.ArrayList;

/**
 *
 * @author vNecroX
 */
public class SpiralMatrix {
    int[][] matrix = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    
    public static void main(String[] args) {
        SpiralMatrix sM = new SpiralMatrix();
        sM.show(sM.matrix);
    }
    
    public void show(int[][] matrix) {
        System.out.println("| Original matrix. |\n");
        printMatrix(matrix);
        
        System.out.println("\n| Traversing process. |\n");
        List<Integer> spiralList = new ArrayList<>();
        
        int count = -1;
        int auxCount = 0;
        int i = 0;
        
        for(int j=0; j<matrix.length; j++) {
            count++;
            System.out.println("[i " + i + "][j " + j + "]:" + matrix[i][j] + " ");
            spiralList.add(matrix[i][j]);

            if(j == (matrix.length - 1 - i)) {
                System.out.println("[count " + count+ "]");
                
                for(; i<count; i++) {
                    System.out.println("[i " + i + " + 1][j " + j + "]:" + matrix[i + 1][j] + " ");
                    spiralList.add(matrix[i + 1][j]);
                }

                count -= j;
  
                System.out.println("[j " + j + "]");

                for(; j>count; j--) {
                    auxCount++;
                    System.out.println("[i " + i + "][j " + j + " - 1]:" + matrix[i][j - 1] + " ");
                    spiralList.add(matrix[i][j - 1]);
                }

                System.out.println("[j " + j + "]");
                System.out.println("[i " + i + "]");
                
                count = matrix.length - auxCount;
                System.out.println("[count " + count+ "]");

                for(; i>count; i--) {
                    auxCount--;
                    System.out.println("[i " + i + " - 1][j " + j + "]:" + matrix[i - 1][j] + " ");
                    spiralList.add(matrix[i - 1][j]);
                }
                
                System.out.println("[auxCount " + auxCount+ "]");
                
                for(; j<auxCount; j++) {
                    System.out.println("[i " + i + "][j " + j + " + 1]:" + matrix[i][j + 1] + " ");
                    spiralList.add(matrix[i][j + 1]);
                }
                
                j = matrix.length;
            }
        }
        
        System.out.println("\n\n| Spiral traversed matrix. |\n");
        System.out.println(spiralList.toString());
    }
    
    public void printMatrix(int[][] matrix) {
        for(int i=0; i<matrix.length; i++) {
            for(int j=0; j<matrix.length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            
            System.out.println();
        }
        
        System.out.println();
    }
}
