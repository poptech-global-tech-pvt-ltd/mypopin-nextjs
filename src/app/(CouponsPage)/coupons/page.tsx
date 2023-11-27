'use client'
import React, { useEffect, useState, useRef, Fragment } from 'react';
import { Khand, Manrope } from 'next/font/google'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { extractNumbersAndRest } from '@/utils/extractNumbersAndRest'
import { Button } from '@/components/ui/button';
import ReactCardFlip from 'react-card-flip';
import { ArrowRightCircle, Copy } from 'lucide-react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from '@/components/ui/scroll-area';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { FilteredCouponDataComponent } from '@/components/FilteredCouponDataComponent';
import { Input } from "@/components/ui/input"
import { Footer } from '@/components';



const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '700', '800']
})

const khand = Khand({
    weight: '700',
    subsets: ['latin']
})

function CouponsPage() {
    const [couponData, setCouponData] = useState<any[]>([]);
    const [filterCouponData, setFilterCouponData] = useState<any[]>([])
    const [brandData, setBrandData] = useState<any>([]);
    const [uniqueCategoryData, setUniqueCategoryData] = useState<any>();
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const containerRef = useRef(null);
    const [isFlippedRows, setIsFlippedRows] = useState<boolean[][]>([]);
    const [selectedStoreUuids, setSelectedStoreUuids] = useState<any>()
    const [filterUrl, setFilterUrl] = useState("");
    const [filteredCouponData, setFilteredCouponData] = useState<any[]>()
    const [search, setSearch] = useState<string>("");
    const [rankOnlyBrandUrls, setRankOnlyBrandUrls] = useState<any>();
    const [rankedUrl, setRankedUrl] = useState<string>("");
    const [rankedCouponData, setRankedCouponData] = useState<any>();
    const [categoryUrl, setCategoryUrl] = useState<string>();
    const [filteredCategoryBrandData, setFilteredCategoryBrandData] = useState<any>();
    const [uuidsForCategoryFilter, setUuidsForCategoryFilter] = useState<any>();
    const [categoryFilteredCouponData, setCategoryFilteredCouponData] = useState<any>();

    // fetch for ALL coupons table
    useEffect(() => {
        if ((uniqueCategoryData != undefined) && (brandData != undefined)) {
            if ((brandData?.data?.every((item: any) => !(item.isChecked))) && (uniqueCategoryData?.every((item: any) => !(item.isChecked)))) {
                const fetchData = async () => {
                    try {
                        const response = await fetch(`https://mypop-dashboard.popclub.co.in/api/coupons?sort[0]=storeuuid:asc&pagination[page]=${page}`);
                        const result = await response.json();
                        const filteredResult = result.data.filter((i: any) => !(i?.attributes?.summary.includes("For "))).filter((j: any) => !(j?.attributes?.title.includes("REF"))).filter((j: any) => !(j?.attributes?.title.includes("Ref"))).filter((j: any) => !(j?.attributes?.title.includes("ref")))

                        // Create a Set to track unique IDs
                        const uniqueIds = new Set();

                        // Filter out duplicates based on the 'id' property (TODO - this is probably not working)
                        const uniqueCoupons = filteredResult.filter((coupon: any) => {
                            if (!uniqueIds.has(coupon.id)) {
                                uniqueIds.add(coupon.id);
                                return true;
                            }
                            return false;
                        });
                        console.log({ uniqueCoupons })
                        console.log({ filteredResult })
                        // Add the 'isChecked' key to each coupon object
                        const couponsWithChecked = uniqueCoupons.map((coupon: any) => ({
                            ...coupon,
                            isChecked: false, // Initialize 'isChecked' to false
                        }));
                        // Check if there's more data to load
                        if (couponsWithChecked.length === 0) {
                            setHasMore(false);
                        } else {
                            // setCouponData((prevData) => [...prevData, ...couponsWithChecked]);

                            // removing duplicates
                            setCouponData((prevData) => {
                                let newData = [...prevData];

                                // Create a Set to track unique IDs within newData
                                const uniqueIdsNewData = new Set();

                                // Filter out duplicates based on the 'id' property within newData
                                newData = newData.filter((coupon) => {
                                    if (!uniqueIdsNewData.has(coupon.id)) {
                                        uniqueIdsNewData.add(coupon.id);
                                        return true;
                                    }
                                    return false;
                                });

                                // Now, you have `newData` without duplicates
                                // You can further manipulate `newData` if needed

                                return [...newData, ...couponsWithChecked]
                            });


                            // Initialize card flipping state when new data is fetched
                            const newIsFlippedRows = new Array(couponsWithChecked?.length).fill(false);
                            setIsFlippedRows((prevIsFlippedRows) => [...prevIsFlippedRows, newIsFlippedRows]);
                        }
                    } catch (error) {
                        console.error('Error fetching data:', error);
                    }
                };
                if (hasMore) {
                    fetchData();
                }
            }
        }
    }, [page, hasMore, uniqueCategoryData, brandData]);

    console.log({ couponData })

    // fetch for filtered coupon based on filter clicked
    useEffect(() => {
        if (selectedStoreUuids?.length > 0) {
            const apiUrl = 'https://mypop-dashboard.popclub.co.in/api/coupons';
            const queryParams = selectedStoreUuids?.map((storeuuid: any, index: number) => `filters[storeuuid][$in][${index}]=${storeuuid}`).join('&');
            const finalUrl = `${apiUrl}?${queryParams}`;
            setFilterUrl(finalUrl)
            const fetchData = async () => {
                try {
                    const response = await fetch(`${finalUrl}&sort[0]=storeuuid&pagination[page]=1&pagination[pageSize]=400`);
                    const result = await response.json();
                    const filteredResult = result.data.filter((i: any) => !(i?.attributes?.summary.includes("For "))).filter((j: any) => !(j?.attributes?.title.includes("REF"))).filter((j: any) => !(j?.attributes?.title.includes("Ref"))).filter((j: any) => !(j?.attributes?.title.includes("ref")))
                    // Add the 'isChecked' key to each coupon object
                    const couponsWithChecked = filteredResult.map((coupon: any) => ({
                        ...coupon,
                        isChecked: false, // Initialize 'isChecked' to false
                    }));
                    console.log({ couponsWithChecked })
                    // Initialize card flipping state when new data is fetched
                    const newIsFlippedRows = new Array(couponsWithChecked?.length).fill(false);
                    setIsFlippedRows((prevIsFlippedRows) => [...prevIsFlippedRows, newIsFlippedRows]);
                    setCouponData([]);
                    setFilteredCouponData(couponsWithChecked)
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchData()
        }
    }, [selectedStoreUuids]);

    // fetch for brand name table
    useEffect(() => {
        fetch('https://mypop-dashboard.popclub.co.in/api/brand-names?sort[0]=brand_name:asc&pagination[page]=1&pagination[pageSize]=200&populate=*').then((res) => res.json()).then((data) => {
            // Add the 'isChecked' key to each item in the data array
            const newData = data.data.map((item: any) => ({
                ...item,
                isChecked: false, // Initialize 'isChecked' to false
            }));
            // Set the modified data in the state
            setBrandData({ ...data, data: newData });
        })
    }, [])

    const handleScroll = () => {
        const container = containerRef.current;

        if (container) {
            const { scrollTop, clientHeight, scrollHeight } = container;

            if (scrollTop + clientHeight >= scrollHeight - 20 && hasMore) {
                // Load more data when user is near the bottom
                setPage(prevPage => prevPage + 1);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // This useEffect is responsible for taking out unique category values from the brandData state and setting to a new state
    useEffect(() => {
        setUniqueCategoryData(brandData?.data
            ?.reduce((uniqueItems: any[], itm: any) => {
                const categoryName = itm?.attributes?.brand_categories?.data[0]?.attributes?.categoryname;
                const categoryId = itm?.attributes?.brand_categories?.data[0]?.id;
                if (categoryName && categoryId && !uniqueItems.some(item => item.name === categoryName && item.id === categoryId)) {
                    uniqueItems.push({ name: categoryName, id: categoryId, isChecked: false });
                }
                console.log({ uniqueItems })
                return uniqueItems;
            }, []))
    }, [brandData])

    // Group coupons by 'storeuuid'
    const groupedCouponData: { [storeuuid: string]: any[] } = {};

    couponData.forEach(coupon => {
        const storeuuid = coupon?.attributes?.storeuuid;
        if (!groupedCouponData[storeuuid]) {
            groupedCouponData[storeuuid] = [];
        }
        groupedCouponData[storeuuid].push(coupon);
    });

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3.5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    // Toggle card flip
    const toggleCardFlip = (rowIndex: number, couponIndex: number) => {
        setIsFlippedRows(prevIsFlippedRows => {
            const newIsFlippedRows = [...prevIsFlippedRows];
            newIsFlippedRows[rowIndex] = newIsFlippedRows[rowIndex] || [];
            newIsFlippedRows[rowIndex][couponIndex] = !newIsFlippedRows[rowIndex][couponIndex];
            return newIsFlippedRows;
        });
    };

    // Initialize card flipping state for each row
    useEffect(() => {
        const newIsFlippedRows = Object.keys(groupedCouponData).map(() => []);
        setIsFlippedRows(newIsFlippedRows);
    }, []); // Add an empty dependency array to run this effect only once



    const handleClick = (item: any) => {
        // Toggle the 'isChecked' state of the clicked item
        item.isChecked = !item.isChecked;
        // If you want to update the state, you can create a copy of the brandData and update the clicked item
        const updatedBrandData = { ...brandData };
        const updatedData = updatedBrandData.data.map((brand: any) => {
            if (brand.id === item.id) {
                return {
                    ...brand,
                    isChecked: item.isChecked,
                };
            }
            return brand;
        });
        // Update the state with the modified data
        setBrandData({ ...updatedBrandData, data: updatedData });

        const newSelectedStoreUuids = brandData.data
            .filter((item: any) => item.isChecked)
            .map((item: any) => item.attributes.url);

        // Update the state with the selected storeuuid values
        setSelectedStoreUuids(newSelectedStoreUuids);
    };

    const handleCategoryFilterClick = (itm: { id: number, name: string, isChecked: boolean }) => {
        console.log({ itm })
        setUniqueCategoryData((prevData: any) => {
            return prevData.map((categoryItem: any) => {
                if (categoryItem.id === itm.id) {
                    return { ...categoryItem, isChecked: !itm.isChecked }; // Toggle the isChecked property
                }
                return categoryItem;
            });
        });
    }

    // This useEffect is responsibe for creating a url that will filter out according to the category names
    useEffect(() => {
        if (uniqueCategoryData != null) {
            const selectedCategories = uniqueCategoryData.filter((i: any) => i.isChecked)
                .map((category: any, index: number) => `filters[$or][${index}][brand_categories][categoryname][$eq]=${encodeURIComponent(category.name)}`)
                .join('&');

            const apiUrl = `https://mypop-dashboard.popclub.co.in/api/brand-names?sort=brand_name:ASC&${selectedCategories}&pagination[page]=1&pagination[pageSize]=200`;
            console.log({ apiUrl })
            setCategoryUrl(apiUrl)
        }
    }, [uniqueCategoryData])

    // This useEffect is responsible for storing the filtered out data
    useEffect(() => {
        if (categoryUrl != null) {
            fetch(`${categoryUrl}`).then((res) => res.json()).then((data) => setFilteredCategoryBrandData(data))
        }
    }, [categoryUrl])

    // This useEffect is responsible for storing out the storeuuids for categories
    useEffect(() => {
        if (filteredCategoryBrandData != null) {
            const storedIds = filteredCategoryBrandData?.data?.map((i: any, index: number) => i?.attributes?.url)
            console.log({ storedIds })
            setUuidsForCategoryFilter(storedIds)
        }
    }, [filteredCategoryBrandData])

    console.log({ uuidsForCategoryFilter })


    // CATEGORY FILTER ACTUAL coupons fetch based on the storeuuids
    useEffect(() => {
        const hasCheckedCategories = uniqueCategoryData?.some((item: any) => item.isChecked);
        if (hasCheckedCategories) {
            const apiUrl = 'https://mypop-dashboard.popclub.co.in/api/coupons';
            const queryParams = uuidsForCategoryFilter?.map((storeuuid: any, index: number) => `filters[storeuuid][$in][${index}]=${storeuuid}`).join('&');
            const finalUrl = `${apiUrl}?${queryParams}`;
            const fetchData = async () => {
                try {
                    const response = await fetch(`${finalUrl}&sort[0]=storeuuid&pagination[page]=1&pagination[pageSize]=400`);
                    const result = await response.json();
                    const filteredResult = result.data.filter((i: any) => !(i?.attributes?.summary.includes("For "))).filter((j: any) => !(j?.attributes?.title.includes("REF"))).filter((j: any) => !(j?.attributes?.title.includes("Ref"))).filter((j: any) => !(j?.attributes?.title.includes("ref")))
                    // Add the 'isChecked' key to each coupon object
                    const couponsWithChecked = filteredResult.map((coupon: any) => ({
                        ...coupon,
                        isChecked: false, // Initialize 'isChecked' to false
                    }));
                    console.log({ couponsWithChecked })
                    // Initialize card flipping state when new data is fetched
                    const newIsFlippedRows = new Array(couponsWithChecked?.length).fill(false);
                    setIsFlippedRows((prevIsFlippedRows) => [...prevIsFlippedRows, newIsFlippedRows]);
                    setCouponData([]);
                    setCategoryFilteredCouponData(couponsWithChecked)
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchData()
        }
    }, [uuidsForCategoryFilter, uniqueCategoryData])


    const handleCopyClick = (event: any, discountCode: string, id: number) => {
        event.stopPropagation()
        navigator.clipboard.writeText(discountCode);

        setCouponData((prevData: any) => {
            // Use map to create a new array with updated isChecked values
            return prevData.map((coupon: any) => {
                if (coupon.id === id) {
                    // Update the isChecked value to true for the matching coupon
                    return {
                        ...coupon,
                        isChecked: true,
                    };
                }
                return coupon; // Return other coupons as they are
            });
        });
    }

    useEffect(() => {
        fetch(`https://mypop-dashboard.popclub.co.in/api/brand-names?sort=rank_for_coupon:ASC&filters[$and][0][rank_for_coupon][$notNull]=true`).then((res) => res.json()).then((data) => {
            const temp = data?.data?.map((i: any) => i?.attributes?.url);
            setRankOnlyBrandUrls(temp)
        })
    }, [])

    useEffect(() => {
        if (rankOnlyBrandUrls?.length > 0) {
            const apiUrl = 'https://mypop-dashboard.popclub.co.in/api/coupons';
            const queryParams = rankOnlyBrandUrls?.map((storeuuid: any, index: number) => `filters[storeuuid][$in][${index}]=${storeuuid}`).join('&');
            const finalUrl = `${apiUrl}?${queryParams}`;
            setRankedUrl(finalUrl)
        }
    }, [rankOnlyBrandUrls])

    useEffect(() => {
        if (rankedUrl) {
            fetch(rankedUrl).then((res) => res.json()).then((data) => setRankedCouponData(data))
        }
    }, [rankedUrl])

    console.log({ brandData })
    console.log({ uniqueCategoryData })
    console.log({ selectedStoreUuids })
    console.log({ filteredCategoryBrandData })
    console.log("===", !(brandData?.data?.every((item: any) => item.isChecked)), !(uniqueCategoryData?.every((item: any) => item.isChecked)))

    return (
        <Fragment>
            <section className="pt-8 lg:pt-24 pb-2 max-w-[1400px] mx-auto">
                <div className='lg:grid lg:grid-cols-3 items-center'>
                    <div></div>
                    <div className={`${khand.className} text-center text-6xl text-[#F46651] py-2 lg:py-2 font-bold`}><span className={`text-slate-600 ${khand.className}`}>Coupons</span></div>
                    <div className='flex items-end justify-end'>

                        <Sheet>
                            <SheetTrigger asChild>
                                <Button className='mx-4 lg:mx-0' variant="secondary">Filters</Button>
                            </SheetTrigger>
                            <SheetContent>
                                {/* // CATEGORY FILTER */}
                                <div className='mt-[10vh]'>
                                    <div className={`${khand.className} text-2xl pb-1 font-normal`}>Category</div>
                                    <ScrollArea className="h-[20vh] w-full">
                                        {uniqueCategoryData
                                            ?.map((itm: any, index: number) => (
                                                <div key={index} className='flex items-center py-[1.5px]'>
                                                    <Checkbox className='text-slate-600' checked={itm?.isChecked} onClick={() => handleCategoryFilterClick(itm)} id={itm?.id} />
                                                    <label
                                                        htmlFor={itm?.id}
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-500"
                                                    >
                                                        &nbsp;&nbsp;{itm?.name}
                                                    </label>
                                                    <br />
                                                </div>
                                            ))}
                                    </ScrollArea>
                                </div>
                                {/* // BRAND FILTER */}
                                <div className='mt-[2vh]'>
                                    <div className={`${khand.className} text-2xl pb-1 font-normal`}>Brands</div>
                                    <Input onChange={(e) => setSearch(e.target.value)} value={search} placeholder='Search brands' className='h-[30px] w-full my-3' />
                                    <ScrollArea className="h-[45vh] w-full">
                                        {brandData?.data
                                            ?.filter((i: any) => i?.attributes?.brand_name.toLowerCase().includes(search.toLowerCase()))
                                            ?.map((itm: any, index: number) => (
                                                <div key={index} className='flex items-center py-[1.5px]'>
                                                    <Checkbox className='text-slate-600' checked={itm?.isChecked} onClick={() => handleClick(itm)} id={itm?.attributes?.url} />
                                                    <label
                                                        htmlFor={itm?.attributes?.url}
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-500"
                                                    >
                                                        &nbsp;&nbsp;{itm?.attributes?.brand_name}
                                                    </label>
                                                    <br />
                                                </div>
                                            ))}
                                    </ScrollArea>
                                </div>

                            </SheetContent>
                        </Sheet>
                    </div>
                </div>

                {/* // CATEGORY NAMES FILTER UI */}
                {uniqueCategoryData?.some((item: any) => item.isChecked) ?
                    <FilteredCouponDataComponent data={categoryFilteredCouponData} setFilteredCouponData={setCategoryFilteredCouponData} />
                    : null}

                {/* // BRAND NAMES FILTER UI */}
                {(selectedStoreUuids?.length > 0) ?
                    <FilteredCouponDataComponent data={filteredCouponData} setFilteredCouponData={setFilteredCouponData} />
                    : null}

                {/* // ALL COUPONS */}
                {!(brandData?.data?.every((item: any) => item.isChecked)) && !(uniqueCategoryData?.every((item: any) => item.isChecked)) ?
                    <>
                        {brandData?.data?.length === undefined && <div>
                            <Carousel
                                responsive={responsive}
                                className="z-[50] px-4 py-4">
                                <Skeleton width={"300px"} height={"300px"} count={1} />
                                <Skeleton width={"300px"} height={"300px"} count={1} />
                                <Skeleton width={"300px"} height={"300px"} count={1} />
                                <Skeleton width={"300px"} height={"300px"} count={1} />
                                <Skeleton width={"300px"} height={"300px"} count={1} />
                            </Carousel>
                        </div>
                        }
                        {/* {rankedCouponData?.data?.map((i: any, index: number) => <p>{i?.attributes?.storeuuid}</p>)} */}
                        {brandData?.data?.length > 0 && (
                            // FIX - removed maxHeight : '1000px' from style below
                            <div ref={containerRef} style={{ overflowY: 'scroll' }}>
                                {Object.keys(groupedCouponData).map((storeuuid, rowIndex) => {
                                    const brand = brandData.data?.find((brand: any) => brand?.attributes?.url === storeuuid);
                                    console.log({ brand })
                                    return (
                                        <>
                                            <div key={rowIndex}>
                                                <h2 className={`${manrope.className} px-4 font-extrabold py-4 text-3xl text-slate-700`}>{(brandData.data?.find((brand: any) => brand?.attributes?.url === storeuuid))?.attributes?.brand_name}</h2>
                                                <Carousel
                                                    responsive={responsive}
                                                    className="z-[50] px-4">
                                                    {groupedCouponData[storeuuid].map((coupon: any, couponIndex: number) => {
                                                        return (
                                                            <>
                                                                <ReactCardFlip
                                                                    isFlipped={isFlippedRows[rowIndex] && isFlippedRows[rowIndex][couponIndex]}
                                                                    key={couponIndex} flipDirection="horizontal">
                                                                    {/* // FRONT SIDE */}
                                                                    <div
                                                                        onClick={() => toggleCardFlip(rowIndex, couponIndex)}
                                                                        className="w-[300px] h-[300px] bg-white rounded-md shadow-md flex items-center justify-center border-[0.3px]">
                                                                        <div
                                                                            style={{ borderColor: brand?.attributes?.primary_color ? brand?.attributes?.primary_color : "black" }} className="w-[270px] h-[270px] border-[2px] mx-auto my-auto rounded-md cursor-pointer">
                                                                            <div className='text-center flex items-center justify-center py-3'>
                                                                                {brand?.attributes?.round_logo?.data?.attributes?.url ? <img className="border-[1px] w-[80px] h-[80px] object-contain rounded-full bg-white shadow-sm" src={brand?.attributes?.round_logo?.data?.attributes?.url} /> : <div className="border-[0px] w-[90px] h-[90px] rounded-full bg-white"></div>}
                                                                            </div>
                                                                            <div className="text-center">
                                                                                <div className="font-extrabold text-[1.6rem]">{extractNumbersAndRest(coupon?.attributes?.shortSummary)?.value}&nbsp;<span>{coupon?.attributes?.shortSummary ? <span>off</span> : null}</span></div>
                                                                                {/* <div className="font-normal text-[0.8rem]">{extractNumbersAndRest(coupon?.attributes?.shortSummary)?.rest?.split("off")[1]}</div> */}
                                                                            </div>
                                                                            {brand?.attributes?.isDoubleDiscount && (
                                                                                <>
                                                                                    <div className="flex items-center justify-center text-[10px] py-2">
                                                                                        <div>
                                                                                            <img width="30" height="30" src="/popcoin-icon.svg" />
                                                                                        </div>
                                                                                        <div className="px-2 py-[3px] rounded-tr-full rounded-br-full font-bold border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-[#F5664B]">{`Plus extra ${brand?.attributes?.discount_percentage ? brand?.attributes?.discount_percentage : "30"}% off with popcoins`}</div>
                                                                                    </div>
                                                                                </>
                                                                            )}
                                                                            <div className="flex items-center justify-center py-6">
                                                                                <Button style={{ backgroundColor: brand?.attributes?.primary_color ? brand?.attributes?.primary_color : "black", color: coupon?.attributes?.custom_getcode_btn_text_color ? coupon?.attributes?.custom_getcode_btn_text_color : brand?.attributes?.text_color }} className={`text-[0.67069rem] rounded-full h-0 px-5 py-4`}>GET CODE</Button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* // BACK SIDE */}
                                                                    <div>
                                                                        <div
                                                                            onClick={() => toggleCardFlip(rowIndex, couponIndex)}
                                                                            style={{ backgroundColor: coupon?.attributes?.custom_bg_color ? coupon?.attributes?.custom_bg_color : brand?.attributes?.primary_color }}
                                                                            className="w-[300px] h-[300px] rounded-md shadow-md flex items-center justify-center border-[0.3px]"
                                                                        >
                                                                            <div
                                                                                // onClick={() => handleClick(itm.id)} 
                                                                                className="w-[270px] h-[270px] mx-auto my-auto rounded-md cursor-pointer">
                                                                                <div className='text-center flex items-center justify-center py-1'>
                                                                                    {
                                                                                        brand?.attributes?.round_logo?.data?.attributes?.url
                                                                                            ?
                                                                                            <img className="border-[1px] w-[80px] h-[80px] object-contain rounded-full bg-white"
                                                                                                src={brand?.attributes?.round_logo?.data?.attributes?.url}
                                                                                            />
                                                                                            :
                                                                                            <div className="border-[0px] w-[90px] h-[90px] rounded-full bg-white">
                                                                                            </div>
                                                                                    }
                                                                                </div>

                                                                                <div className="flex">
                                                                                    <Button
                                                                                        onClick={(event) => handleCopyClick(event, coupon?.attributes?.title, coupon?.id)}
                                                                                        style={{ backgroundColor: brand?.attributes?.primary_color ? brand?.attributes?.primary_color : "white", color: coupon?.attributes?.custom_bg_text_color ? coupon?.attributes?.custom_bg_text_color : "white" }} className="text-center mx-auto rounded-lg"> {coupon?.isChecked ? "Copied!" : "Tap to Copy"}</Button>
                                                                                </div>

                                                                                <div style={{ borderColor: coupon?.attributes?.custom_bg_text_color ? coupon?.attributes?.custom_bg_text_color : "white" }} className={`text-center border-[1px] rounded-lg mx-8`}>
                                                                                    <div className="flex items-center justify-center">
                                                                                        <Button
                                                                                            style={{ backgroundColor: brand?.attributes?.primary_color ? brand?.attributes?.primary_color : "black", color: coupon?.attributes?.custom_bg_text_color ? coupon?.attributes?.custom_bg_text_color : "white" }}
                                                                                            onClick={(event) => handleCopyClick(event, coupon?.attributes?.title, coupon?.id)}
                                                                                            className="h-7 uppercase">{coupon?.attributes?.title?.length > 10 ? coupon?.attributes?.title?.slice(0, 10) + ".." : coupon?.attributes?.title}&nbsp;&nbsp;<Copy className="w-[15px] h-[15px]" /></Button>
                                                                                    </div>
                                                                                </div>
                                                                                <br />
                                                                                <>
                                                                                    {coupon?.isChecked ? (
                                                                                        <div className="flex items-center justify-center">
                                                                                            <a target="_blank" href={brand?.attributes?.redirection_url}>
                                                                                                <Button
                                                                                                    style={{ backgroundColor: brand?.attributes?.primary_color, color: coupon?.attributes?.custom_bg_text_color ? coupon?.attributes?.custom_bg_text_color : "white" }}
                                                                                                    onClick={(event) => event.stopPropagation()} className={`text-[0.67069rem] rounded-full h-0 px-3 py-3 mb-1 shadow-xl border-[0.01px]`}>REDEEM NOW&nbsp;&nbsp;<ArrowRightCircle className="w-4 h-4" /></Button>
                                                                                            </a>
                                                                                        </div>
                                                                                    ) : null}

                                                                                </>
                                                                                <div style={{ color: coupon?.attributes?.custom_bg_text_color ? coupon?.attributes?.custom_bg_text_color : "white" }} className="text-center text-[0.825rem]">
                                                                                    <div>{coupon?.attributes?.summary?.split("•")[0] ? coupon?.attributes?.summary?.split("•")[0] : null}</div>
                                                                                    <div>{coupon?.attributes?.summary?.split("•")[1] ? coupon?.attributes?.summary?.split("•")[1] : null}</div>
                                                                                    <div>{coupon?.attributes?.summary?.split("•")[2] ? coupon?.attributes?.summary?.split("•")[2] : null}</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </ReactCardFlip>
                                                            </>
                                                        )
                                                    })}
                                                </Carousel>
                                            </div>
                                        </>
                                    )
                                })}
                                {hasMore
                                    &&
                                    !(brandData?.data?.some((item: any) => item.isChecked))
                                    &&
                                    !(uniqueCategoryData?.some((item: any) => item.isChecked))
                                    && (
                                        <Carousel
                                            responsive={responsive}
                                            className="z-[50] px-4 py-4">
                                            <Skeleton width={"300px"} height={"300px"} count={1} />
                                            <Skeleton width={"300px"} height={"300px"} count={1} />
                                            <Skeleton width={"300px"} height={"300px"} count={1} />
                                            <Skeleton width={"300px"} height={"300px"} count={1} />
                                            <Skeleton width={"300px"} height={"300px"} count={1} />
                                        </Carousel>
                                    )}
                                <div>
                                    <Footer />
                                </div>
                            </div>
                        )}
                    </>
                    : null}
                <br />
                <br />
            </section>
        </Fragment>
    );
}

export default CouponsPage;
