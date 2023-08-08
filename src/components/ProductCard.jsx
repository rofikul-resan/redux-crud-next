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

const ProductCard = ({ product }) => {
  return (
    <Card variant="outlined">
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: orange["700"] }}>R</Avatar>}
        title="product name"
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
      />
      <CardMedia className="h-60">
        <Image
          src={
            "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          }
          height={300}
          width={400}
          priority
          alt="img"
          className="w-full"
        />
      </CardMedia>
      <CardContent>
        <div>
          <Typography variant="p" sx={{ fontSize: "22px" }}>
            {" "}
            The most advanced iPhone ever.{" "}
          </Typography>
          <p>
            <span className="font-semibold">Price : </span>$ 10
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
