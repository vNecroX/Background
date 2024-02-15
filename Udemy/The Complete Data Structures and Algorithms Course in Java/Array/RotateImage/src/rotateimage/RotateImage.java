package rotateimage;

/**
 *
 * @author vNecroX
 */
public class RotateImage {
    int[][] matrix = {
        {3, 6, 9},
        {2, 5, 8},
        {1, 4, 7}
    };
    
    public static void main(String[] args) {
        RotateImage rI = new RotateImage();
        rI.rotate(rI.matrix);
    }
    
    public void rotate(int[][] matrix) {
        System.out.println("| Original matrix. |\n");
        printMatrix(matrix);
        
        matrix = flipDiagonally(matrix);
        matrix = flipHorizontally(matrix);
        
        System.out.println("| Rotated matrix. |\n");
        printMatrix(matrix);
    }
    
    public int[][] flipDiagonally(int[][] matrix) {
        System.out.println("\n| Diagonally flipped. |\n");
        int curr;
        
        for(int i=0; i<matrix.length-1; i++) {
            for(int j=0; j<matrix.length-1-i; j++) {
                curr = matrix[i][j];
                matrix[i][j] = matrix[matrix.length - 1 - j][matrix.length - 1 - i];
                matrix[matrix.length - 1 - j][matrix.length - 1 - i] = curr;
                printMatrix(matrix);
            } 
        }
        
        return matrix;
    }
    
    public int[][] flipHorizontally(int[][] matrix) {
        System.out.println("\n| Horizontally flipped. |\n");
        int curr;
        
        for(int i=0; i<matrix.length/2; i++) {
            for(int j=0; j<matrix.length; j++) {
                curr = matrix[i][j];
                matrix[i][j] = matrix[matrix.length - 1 - i][j];
                matrix[matrix.length - 1 - i][j] = curr;
                printMatrix(matrix);
            }
        }
        
        return matrix;
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
