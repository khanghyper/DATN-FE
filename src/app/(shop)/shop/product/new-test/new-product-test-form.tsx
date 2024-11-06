'use client'
import NewProductVariantTableTest from "@/app/(shop)/shop/product/new-test/new-product-variant-table-test";
import VariantAttribute from "@/app/(shop)/shop/product/new-test/variant-attribute";
import { zodResolver } from "@hookform/resolvers/zod";
import { Asterisk, Plus } from "lucide-react";
import { nanoid } from "nanoid";
import React, { useEffect } from "react";
import { useFieldArray, UseFieldArrayReturn, useForm, useWatch } from "react-hook-form";
import { z } from "zod";

// Schema cho từng thuộc tính của biến thể (e.g., màu sắc, kích thước)
const AttributeSchema = z.object({
  attribute: z.string().min(1, "Attribute name is required"),
  values: z.array(z.object({
    id: z.string(),
    image: z.string().min(0),
    value: z.string().min(1)
  })),
});

// Schema cho từng biến thể của sản phẩm
const VariantSchema = z.object({
  image: z.string().min(0),
  sku: z.string().min(1, "SKU is required"),
  price: z.number().min(0, "Price must be a non-negative number"),
  stock: z.number().int().min(0, "Stock must be a non-negative integer"),
  attributes: z.array(z.object(
    {
      id: z.string().min(1),
      attribute: z.string().min(1),
      value: z.string().min(1)
    }
  )),
});

// Schema cho sản phẩm chính
const ProductSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  description: z.string().optional(),
  base_price: z.number().min(0, "Base price must be a non-negative number"),
  variant: z.object({
    variantAttributes: z.array(AttributeSchema),
    variantProducts: z.array(VariantSchema)
  }).nullable()
});

export type Product = z.infer<typeof ProductSchema>;
export type Variant = z.infer<typeof VariantSchema>;
export type Attribute = z.infer<typeof AttributeSchema>;

function generateVariantProducts(attributes: Array<z.infer<typeof AttributeSchema>>) {
  const combinations: Array<z.infer<typeof VariantSchema>> = [];

  // Helper function để lấy tổ hợp giá trị
  function combineValues(index: number, currentCombination: any) {
    if (index === attributes.length) {
      combinations.push({
        image: currentCombination.find((item: any) => item.image)?.image || "", // Lấy ảnh từ giá trị đầu tiên có `image`
        sku: "", // Hàm tạo SKU tùy thuộc vào tổ hợp
        price: 0, // Giá có thể được xác định tùy ý
        stock: 0, // Số lượng có thể được xác định tùy ý
        attributes: currentCombination.map((value: any) => ({
          id: value.id,
          attribute: value.attribute,
          value: value.value
        }))
      });
      return;
    }

    attributes[index].values.forEach(value => {
      combineValues(index + 1, [...currentCombination, {
        id: value.id,
        attribute: attributes[index].attribute,
        value: value.value,
        image: value.image
      }]);
    });
  }

  if (attributes.length > 0) {
    combineValues(0, []);
    return combinations;
  } else {
    return []
  }

}



export default function NewProductTestForm() {
  const productFormHandle = useForm<Product>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: "",
      description: "",
      base_price: 0,
      variant: { variantAttributes: [], variantProducts: [] }
    },
    mode: "all"
  });

  const watchedAttributes = useWatch({
    control: productFormHandle.control,
    name: "variant.variantAttributes",
  });

  const variantProducts = productFormHandle.watch("variant.variantProducts")
  const attributeFormHandle = useFieldArray({
    control: productFormHandle.control,
    name: "variant.variantAttributes",
  });
  const { fields: variantFields, append: addVariant, remove: deleteVariant } = attributeFormHandle;
  const { fields: variantProductFields } = useFieldArray({
    control: productFormHandle.control,
    name: "variant.variantProducts",
  });

  const onSubmit = (data: Product) => {
    console.log(data);
  }


  useEffect(() => {
    if (watchedAttributes && !productFormHandle.formState.errors.variant?.variantAttributes) {
      console.log('co');
      setTimeout(() => {
        const a = generateVariantProducts(productFormHandle.getValues('variant.variantAttributes'));
        productFormHandle.setValue('variant.variantProducts', a);
        productFormHandle.trigger('variant.variantProducts');
      }, 100)
    }
  }, [watchedAttributes, productFormHandle.formState.errors.variant?.variantAttributes])
  return (
    <form onSubmit={productFormHandle.handleSubmit(onSubmit)}>
      <div className="w-full">
        <div className="p-6">
          <div className="flex flex-col gap-4">
            {variantFields.map((v, index) => (
              <VariantAttribute
                key={v.id}
                attributeFormHandle={attributeFormHandle}
                productFormHandle={productFormHandle}
                index={index}
              />
            ))}
          </div>
          {variantFields.length < 2 && (
            <button onClick={() => {
              addVariant({ attribute: "", values: [{ image: "", value: "", id: nanoid(12) }] })
              productFormHandle.trigger()
            }} className="my-6 border p-2 px-3 flex items-center gap-1 rounded-xl text-sm" type="button">
              <Plus size={16} strokeWidth={1.5} className="group-hover:text-blue-500 text-[#858585]" />
              Thêm Loại biến thể ({variantFields.length}/2)
            </button>
          )}
          <div className="font-semibold mt-6 mb-6 flex items-center gap-2">
            <Asterisk size={16} color="#e83030" strokeWidth={1.25} />
            Giá bán & Kho hàng
          </div>

          <NewProductVariantTableTest
            variantProductFields={variantProducts}
            variantFields={productFormHandle.getValues('variant.variantAttributes')}
            productFormHandle={productFormHandle}
          />

          <button onClick={() => {
            console.log(productFormHandle.getValues());
          }} className="mt-6 border p-2" type="button">log data</button>
          <button onClick={() => {
            console.log(productFormHandle.formState.errors);
          }} className="mt-6 border p-2" type="button">log error</button>
          <button className="mt-6 border p-2" type="submit">Them san pham</button>
        </div>
      </div>
    </form>

  )
}



