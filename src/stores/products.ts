import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { Products as DefaultProducts } from "../data/Products";
import type { Product } from "../types/produce";

const STORAGE_KEY = "lumie_admin_products";

function loadProducts(): Product[] {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return [...DefaultProducts];
    }
  }
  return [...DefaultProducts];
}

export const useProductStore = defineStore("products", () => {
  const products = ref<Product[]>(loadProducts());

  const allProducts = computed(() => products.value);

  const getProductById = (id: number) => {
    return products.value.find((p) => p.id === id);
  };

  const getProductsByCategory = (category: string) => {
    return products.value.filter((p) => p.category === category);
  };

  function addProduct(product: Product) {
    products.value.push(product);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products.value));
  }

  function updateProduct(updatedProduct: Product) {
    const index = products.value.findIndex((p) => p.id === updatedProduct.id);
    if (index !== -1) {
      products.value[index] = updatedProduct;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products.value));
    }
  }

  function deleteProduct(id: number) {
    products.value = products.value.filter((p) => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products.value));
  }

  function resetToDefaults() {
    products.value = [...DefaultProducts];
    localStorage.removeItem(STORAGE_KEY);
  }

  return {
    products,
    allProducts,
    getProductById,
    getProductsByCategory,
    addProduct,
    updateProduct,
    deleteProduct,
    resetToDefaults,
  };
});