let a = `{ "name": "", "description": "", "base_price": 0, "variant": { "variantAttributes": [{ "attribute": "Màu sắc", "values": [{ "image": "https://res.cloudinary.com/dg5xvqt5i/image/upload/v1730997693/fezssmr33wcbcxkmmdjo.jpg", "value": "Đỏ", "id": "KHEe7uPH2xNn" }, { "id": "UvmWW-PShcR7", "image": "https://res.cloudinary.com/dg5xvqt5i/image/upload/v1730997701/wifesk9mwan06xbfch9f.jpg", "value": "xanh" }] }], "variantProducts": [{ "image": "https://res.cloudinary.com/dg5xvqt5i/image/upload/v1730997693/fezssmr33wcbcxkmmdjo.jpg", "sku": "sku", "price": 100000, "stock": 10, "attributes": [{ "id": "KHEe7uPH2xNn", "attribute": "Màu sắc", "value": "Đỏ" }] }, { "image": "https://res.cloudinary.com/dg5xvqt5i/image/upload/v1730997701/wifesk9mwan06xbfch9f.jpg", "sku": "sku", "price": 100000, "stock": 10, "attributes": [{ "id": "UvmWW-PShcR7", "attribute": "Màu sắc", "value": "xanh" }] }] } }`
console.log(JSON.parse(a));
