import {
  AppBar,
  Avatar,
  Badge,
  Button,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartAmount = useSelector((state) => state?.cartData);
  return (
    <AppBar position="sticky">
      <Container sx={{ paddingY: "10px" }}>
        <div className="flex justify-between">
          <div>
            <Typography variant="h3"> Loge</Typography>
          </div>
          <div className="flex gap-3 items-center text-white font-semibold">
            <Link href={"/"}>Home</Link>
            <Link href={"#"}>About</Link>
            <IconButton>
              <Link href={"/cart"}>
                <Badge color="success" badgeContent={cartAmount?.length}>
                  <ShoppingCartIcon className="text-white" />
                </Badge>
              </Link>
            </IconButton>
            <IconButton>
              <Avatar>R</Avatar>
            </IconButton>
          </div>
        </div>
      </Container>
    </AppBar>
  );
};

export default Navbar;
