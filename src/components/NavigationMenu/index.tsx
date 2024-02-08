"use client"
import React, { useState, useEffect, Fragment } from "react"
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
import { Manrope } from 'next/font/google'
import ScrollLink from "@/utils/ScrollLink"
import { ScrollArea } from "@/components/ui/scroll-area"


const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '700']
})

const components: { title: string; href: string; description: string }[] = [
  {
    title: "POP Shop",
    href: "https://8mvyk.app.link/dh8SuwQK3wb",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
]

export function NavigationMenuDemo() {

  const [brandData, setBrandData] = useState<any>({});

  useEffect(() => {
    const getBrandNames = async () => {
      try {
        // TODO - not a good solution, heavy paginated request
        const response = await fetch('https://mypop-dashboard.popclub.co.in/api/brand-names?sort[0]=brand_name:asc&pagination[page]=1&pagination[pageSize]=100&populate=*');
        const data = await response?.json();
        console.log({ data })
        // Transform the data to group brands by category
        const transformedData = data?.data?.reduce((acc: any, item: any) => {
          const category = item?.attributes?.brand_categories.data[0]?.attributes?.categoryname;
          const brandUrl = item?.attributes?.url;
          if (!acc[category]) {
            acc[category] = [];
          }
          // acc[category]?.push(item?.attributes?.brand_name);
          acc[category]?.push({ name: item?.attributes?.brand_name, url: brandUrl });
          return acc;
        }, {});
        console.log({ transformedData })
        setBrandData(transformedData);
      }
      catch (error) {
        console.error('Error fetching brand names:', error);
      }
    };
    getBrandNames();
  }, []);


  const isBrandDataAvailable = Object.keys(brandData)?.length !== 0

  console.log({ brandData })

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className={`${manrope.className} font-bold text-[16px]`}
        >
          <NavigationMenuTrigger
            style={{ all: "unset", display: "flex", cursor: "pointer", alignItems: "center" }}
          >POP Partners</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ScrollArea className="h-[80vh]">
              <div className="grid gap-3 pb-6 pt-2 pl-6 pr-6 md:w-[400px] lg:w-[1100px] lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr]">
                {/* // if data is in STRAPI */}
                {isBrandDataAvailable && Object.keys(brandData).map((category: string) => (
                  <div key={category} className="pr-2">
                    <div className="font-bold pt-3 text-[15px] uppercase text-slate-900">{category}</div>
                    <div className="py-1" />
                    <div className="font-medium text-slate-700">
                      {brandData[category].map((brand: string, index: number) => (
                        <div key={index}>
                          {/* @ts-ignore */}
                          <Link prefetch={false} href={`/brands/${brand?.url?.toLocaleLowerCase().replace(/[^a-zA-Z0-9]+/g, "")}`}>
                            <div key={index} className={`py-1 text-[14px]`}>
                              {/* @ts-ignore */}
                              {brand?.name}
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <Link prefetch={false} href="/allbrands">
                <div className="text-right pb-4 pr-4 underline underline-offset-2">See All</div>
              </Link>
            </ScrollArea>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <div className="px-1" />
        <NavigationMenuItem className={`${manrope.className} font-bold`}>
          {/* <NavigationMenuLink className={navigationMenuTriggerStyle()}> */}
          <ScrollLink href="#popshop">
            <div className={`${manrope.className} font-bold text-[16px]`}>
              POPshop
            </div>
          </ScrollLink>
          {/* </NavigationMenuLink> */}
        </NavigationMenuItem>
        {/* 
        <NavigationMenuItem className={`${manrope.className} font-bold`}>
          <Link href="/coupons" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className={`${manrope.className} font-bold text-[16px]`}>Coupons</div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}

        <NavigationMenuItem className={`${manrope.className} font-bold`}>
          <Link prefetch={false} href="/blogs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className={`${manrope.className} font-bold text-[16px]`}>Blogs</div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className={`${manrope.className} font-bold`}>
          {/* <Link href="/" legacyBehavior passHref> */}
          <ScrollLink href="#footer-contact-us">
            <div className={`${manrope.className} font-bold text-[16px]`}>Contact Us</div>
          </ScrollLink>
          {/* </Link> */}
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
