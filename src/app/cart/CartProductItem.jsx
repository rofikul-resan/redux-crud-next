import { CheckOutlined, DeleteOutlineOutlined } from "@mui/icons-material";
import { Avatar, Button, Card, Typography } from "@mui/material";
import Image from "next/image";

const CartProductItem = ({ product }) => {
  return (
    <div className="my-4">
      <Card sx={{ bgcolor: "#e8e7ec", padding: "5px" }}>
        <div className="flex">
          <Image
            src={product.image}
            height={60}
            width={60}
            alt="image"
            priority
          />
          <div className="flex justify-between items-center w-full pl-6">
            <div>
              <Typography variant="h5">{product.name}</Typography>
              <p>
                <span className="font-semibold">Price : </span>$ {product.price}
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="contained" color="primary">
                <CheckOutlined />
              </Button>
              <Button variant="contained" color="warning">
                <DeleteOutlineOutlined />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CartProductItem;
