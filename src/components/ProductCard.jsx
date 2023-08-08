import { MoreVert, TaskAlt } from "@mui/icons-material";
import { Avatar, Card, CardHeader, CardMedia, IconButton } from "@mui/material";
import { orange } from "@mui/material/colors";
import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: orange["700"] }}>R</Avatar>}
        title="product name"
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
      />
      <CardMedia>
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
    </Card>
  );
};

export default ProductCard;
