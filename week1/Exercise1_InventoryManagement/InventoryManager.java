package week1.Exercise1_InventoryManagement;

import java.util.HashMap;

public class InventoryManager {

    private HashMap<Integer, Product> inventory = new HashMap<>();

    public void addProduct(Product product) {
        inventory.put(product.getProductId(), product);
    }

    public void updateProduct(int id, Product product) {
        inventory.put(id, product);
    }

    public void deleteProduct(int id) {
        inventory.remove(id);
    }

    public void displayProducts() {
        inventory.values().forEach(System.out::println);
    }
}