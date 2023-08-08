"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "POP Shop",
    href: "/popshop",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
]

export function NavigationMenuDemo() {

  const [brandData, setBrandData] = useState<any>({});

  useEffect(() => {
    const getBrandNames = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/brand-names?populate=*');
        const data = await response.json();

        // Transform the data to group brands by category
        const transformedData = data.data.reduce((acc: any, item: any) => {
          const category = item.attributes.brand_categories.data[0].attributes.categoryname;
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(item.attributes.brand_name);
          return acc;
        }, {});

        setBrandData(transformedData);
      } catch (error) {
        console.error('Error fetching brand names:', error);
      }
    };
    getBrandNames();
  }, []);

  console.log(brandData)

  const isBrandDataAvailable = Object.keys(brandData).length !== 0

  const staticBrandData = {
    "Beauty": [
      "Body Tales",
      "BraavoKing",
      "Femisafe",
      "Khadi Essentials",
      "Mai Sknn",
      "Makeup Eraser",
      "Man Theory",
      "Paul Penders",
      "Tatha",
      "The Skin Story"
    ],
    "Fashion": [
      "Bacca Bucci"
    ],
    "Food & Drinks": [
      "Anveshan"
    ],
    "Health": [
      "Zoh Probiotics"
    ],
    "Home & Living": [
      "Dusaan",
      "Klotthe",
      "Saga Jaipur"
    ],
    "Stationary": [
      "Doodle Collection"
    ]
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            style={{ all: "unset", display: "flex", cursor: "pointer", alignItems: "center" }}
          >POP Partners</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 pb-6 pt-2 pl-6 pr-6 md:w-[400px] lg:w-[1100px] lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr]">

              {/* // if data is in STRAPI */}
              {isBrandDataAvailable && Object.keys(brandData).map((category: string) => (
                <div key={category} className="pr-2">
                  <div className="font-bold text-lg pt-3">{category}</div>
                  <div className="font-medium">
                    {brandData[category].map((brand: string, index: number) => (
                      <Link href={`/brands/${brand.toLocaleLowerCase().replace(/[^a-zA-Z0-9]+/g, "")}`}>
                        <div key={index} className="py-1">
                          {brand}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              {/* // if data is not in strapi */}
              {!isBrandDataAvailable && Object.keys(staticBrandData).map((category: string) => (
                <div key={category} className="pr-2">
                  <div className="font-bold text-lg pt-3">{category}</div>
                  <div className="font-medium">
                    {/* @ts-ignore */}
                    {staticBrandData[category].map((brand: string, index: number) => (
                      <Link href={`/brands/${brand.toLocaleLowerCase().replace(/[^a-zA-Z0-9]+/g, "")}`}>
                        <div key={index} className="py-1">
                          {brand}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}



            </div>
            <Link href="/allbrands">
              <div className="text-right pb-4 pr-4 underline underline-offset-2">See All</div>
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <div className="px-1" />
        <NavigationMenuItem>
          <NavigationMenuTrigger style={{ all: "unset", display: "flex", cursor: "pointer", alignItems: "center" }}
          >Our POP World</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[200px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {/* {component.description} */}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Rewards
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Coupons
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
