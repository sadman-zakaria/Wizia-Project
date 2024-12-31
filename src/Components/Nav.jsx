import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["About Us", "Pricing", "Customers", "Solutions"];

  return (
    <>
      <div className="w-[100%] bg-[#002228] sticky top-0">
        <Navbar
          onMenuOpenChange={setIsMenuOpen}
          className="bg-[#002228] max:w-[1440px]  mx-auto  "
          maxWidth='2xl'
        >
          <NavbarContent>
            <NavbarBrand>
              <Link>
              <img src="Logo.png" alt="" className="w-[91px] h-[20px] hover:cursor-pointer" />
              </Link>
                
              
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex gap-4 " justify="center">
            <NavbarItem>
              <Link color="foreground" href="#" className="text-white hover:bg-gray-700 px-4 py-2 rounded-md">
                About Us
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page" className="text-white hover:bg-gray-700 px-4 py-2 rounded-md">
                Pricing
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" className="text-white hover:bg-gray-700 px-4 py-2 rounded-md">
                Customers
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link color="foreground" href="#" className="text-white hover:bg-gray-700 px-4 py-2 rounded-md">
                Solutions
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden md:flex">
              <Button  variant="solid" className="rounded-full bg-[#0FF1F6]">
                <Link href="#" className="text-black font-semibold">
                  Book a Demo
                </Link>
              </Button>
            </NavbarItem>
            <NavbarItem className="hidden  sm:flex">
              <Button color="white" variant="bordered" className="rounded-full hover:bg-gray-700">
                <Link href="#" className="text-white font-semibold">
                  Contact Us
                </Link>
              </Button>
            </NavbarItem>

            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden text-white"
            />
          </NavbarContent>
          <NavbarMenu className="bg-[#002228]">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full text-2xl pt-4 text-white"
                  href="#"
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  );
}