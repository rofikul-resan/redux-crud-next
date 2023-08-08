import { addToCart } from "@/RTK-state/Slice/productSlice";
import {
  Favorite,
  MoreVert,
  Share,
  ShoppingCart,
  TaskAlt,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Card variant="outlined">
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: orange["700"] }}>R</Avatar>}
        title={product.name}
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
      />
      <CardMedia className="h-60">
        <Image
          src={product?.image}
          height={300}
          width={400}
          priority
          alt="img"
          className="w-full"
        />
      </CardMedia>
      <CardContent>
        <div>
          <Typography variant="p" sx={{ fontSize: "22px" }} noWrap={true}>
            {product?.details}
          </Typography>
          <p>
            <span className="font-semibold">Price : </span>$ {product.price}
          </p>
        </div>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <Favorite className="text-orange-500" />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <div className="ml-auto">
          <Button
            onClick={() => dispatch(addToCart(product))}
            endIcon={<ShoppingCart />}
            variant="contained"
            color="success"
            className="bg-[#1b5e20]"
          >
            Add Cart
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
