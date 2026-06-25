package week1.Exercise1_InventoryManagement;

public class Main {
    public static void main(String[] args) {

        InventoryManager manager = new InventoryManager();

        manager.addProduct(new Product(1, "Laptop", 20, 50000));
        manager.addProduct(new Product(2, "Mouse", 100, 500));

        manager.displayProducts();

        manager.deleteProduct(2);

        System.out.println("\nAfter Deletion");
        manager.displayProducts();
    }
}