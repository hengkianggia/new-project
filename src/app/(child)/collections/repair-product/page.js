import HeaderEveryPage from "@/components/UI/HeaderEveryPage";
import Item from "@/components/UI/Item";
import React from "react";
import gambar from "../../../../../public/assets/product1.webp";

const page = () => {
  return (
    <div>
      <HeaderEveryPage
        title={"REPAIR PRODUCT"}
        desc={
          "Layanan reparasi untuk memudahkan customer NAH Project memperbaiki sepatunya yang rusak agar bisa digunakan kembali."
        }
      />
      <div className="flex flex-wrap gap-x-[50px] w-full min-h-screen px-24 pt-10 gap-y-12">
        <Item
          name={"FLICKER SANDAL NAVY"}
          priceAfterDiscount={"Rp 125.000"}
          priceBeforeDiscount={"Rp 140.000"}
          image={gambar}
        />
        <Item
          name={"FLICKER SANDAL NAVY"}
          priceAfterDiscount={"Rp 125.000"}
          priceBeforeDiscount={"Rp 140.000"}
          image={gambar}
        />
        <Item
          name={"FLICKER SANDAL NAVY"}
          priceAfterDiscount={"Rp 125.000"}
          priceBeforeDiscount={"Rp 140.000"}
          image={gambar}
        />
      </div>
    </div>
  );
};

export default page;
