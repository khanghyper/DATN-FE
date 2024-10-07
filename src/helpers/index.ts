import { VariantItem, VariantProduct } from "@/redux/slices/shop-new-product.slice";

export const combineVariants = (variants: VariantItem[]) => {
  const init: VariantProduct[] = [{
    price: 0,
    sku: '',
    inStock: 0,
    variant: []
  }]
  return variants.reduce((acc: VariantProduct[], curr) => {
    const result: VariantProduct[] = [{
      price: 0,
      sku: '',
      inStock: 0,
      variant: []
    }]
    acc.forEach((a) => {
      curr.values.forEach(v => {
        result.push({ ...a, variant: [...a.variant, { name: curr.name, value: v.value }] });
      })
    })
    return result;
  }, init);
};