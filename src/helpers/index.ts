import { VariantItem, VariantProduct } from "@/redux/slices/shop-new-product.slice";

export const combineVariants = (variants: VariantItem[]): VariantProduct[] => {
  const init: { name: string, value: string }[][] = [[]]
  const a = variants.map(item => ({ name: item.name, values: [...item.values.filter(i => i.value).map(i => i.value)] }));

  const b = a.reduce((acc, curr) => {
    const result: { name: string, value: string }[][] = [];
    acc.forEach(a => {
      curr.values.forEach(v => {
        result.push([...a, { name: curr.name, value: v }])
      })
    })
    return result;
  }, init);

  return b.map(item => {
    let c = '';
    if (item[0].name === variants[0].name) {
      let i = variants[0].values.find(it => it.value === item[0].value);
      if (i) c = i.image;
    }
    return {
      price: 0,
      inStock: 0,
      sku: '',
      image: c,
      variants: item
    }
  })
};


