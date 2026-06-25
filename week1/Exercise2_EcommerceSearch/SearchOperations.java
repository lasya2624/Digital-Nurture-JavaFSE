package Exercise2_EcommerceSearch;

public class SearchOperations {

    public static int linearSearch(Product[] products, String target) {

        for (int i = 0; i < products.length; i++) {
            if (products[i].productName.equalsIgnoreCase(target))
                return i;
        }

        return -1;
    }

    public static int binarySearch(Product[] products, String target) {

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            int result =
                products[mid].productName.compareToIgnoreCase(target);

            if (result == 0)
                return mid;
            else if (result < 0)
                low = mid + 1;
            else
                high = mid - 1;
        }

        return -1;
    }
}