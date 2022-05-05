import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";

import trophyImgUrl from "../assets/home-trophy.png";
import { useEffect, useState } from "react";

// import { ProductsCard } from "./ProductsCard";

export function HomePage() {
  const [openResourcePicker, setOpenResourcePicker] = useState(false);
  const [bestSellerProducts, setBestSellerProducts] = useState([]);

  useEffect(() => {
    console.log("openResourcePicker", openResourcePicker);
  }, [openResourcePicker]);

  const handleSelection = (resource) => {
    console.log(resource)
    // selectedProducts = resource.selection
    setOpenResourcePicker(false);
    // setBestSellerProducts()
  }

  return (
    <Page
      fullWidth
      title="Pick Best Seller"
      primaryAction={{
        content: "Select products",
        onAction: () => setOpenResourcePicker(true),
      }}
    >
      <ResourcePicker
        resourceType="Product"
        open={openResourcePicker}
        onCancel={() => setOpenResourcePicker(false)}
        onSelection={(resource) => handleSelection(resource)}
      />
    </Page>
  );
}
