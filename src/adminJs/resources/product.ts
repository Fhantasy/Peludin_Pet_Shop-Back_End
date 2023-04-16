import uploadFileFeature from "@adminjs/upload";
import { ResourceOptions, FeatureType } from "adminjs";
import path from "path";

export const productResourceOptions: ResourceOptions = {
  navigation: "Catálogo",
  editProperties: [
    "name",
    "description",
    "price",
    "uploadImg",
    "featured",
    "onSale",
    "categoryId",
  ],
  filterProperties: [
    "id",
    "name",
    "description",
    "price",
    "featured",
    "onSale",
    "categoryId",
    "createdAt",
    "updatedAt",
  ],
  listProperties: [
    "id",
    "name",
    "description",
    "price",
    "uploadImg",
    "featured",
    "onSale",
    "categoryId",
  ],
  showProperties: [
    "id",
    "name",
    "description",
    "price",
    "uploadImg",
    "featured",
    "onSale",
    "categoryId",
    "createdAt",
    "updatedAt",
  ],
};

export const productResourceFeatures: FeatureType[] = [
  uploadFileFeature({
    provider: {
      local: {
        opts: {},
        bucket: path.join(__dirname, "../../../public"),
      },
    },
    properties: {
      key: "imgUrl",
      file: "uploadImg",
    },
    uploadPath: (record, filename) =>
      `thumbnails/product-${record.get("id")}/${filename}`,
  }),
];
