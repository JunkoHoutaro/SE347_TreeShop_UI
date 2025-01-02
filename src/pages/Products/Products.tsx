import { Accordion, Checkbox, Container, Grid, GridCol, Slider, Title, Text, SimpleGrid, Pagination, RangeSlider } from "@mantine/core";
import classes from "./Products.module.css";
import { IconPlant } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';
import ProductCard from "../../components/ProductCard/ProductCard";
import { chunk } from "../Blogs/Blogs";
import { useEffect, useState } from "react";
import { getListProduct } from "../../api/productApi";

interface IProduct {
    id: number,
    name: string;
    img: string;
    price: number;
    type: string;
}

interface IFilters {
    types: string[];
    priceRange: [number, number];
    regions: string[];
}

const data = [
    {
        value: '1',
        icon: IconPlant,
        title: 'Loại cây',
        collections: [
            { colection: 'Cây ăn quả' },
            { colection: 'Cây hoa' },
            { colection: 'Xương rồng' },
            { colection: 'Cây sân vườn' },
            { colection: 'Cây thực phẩm' },
            { colection: 'Cây trong nhà' },
            { colection: 'Cây trước hiên' },
        ]
    },
    {
        value: '2',
        title: 'Khu vực',
        icon: IconMapPin,
        collections: [
            { colection: 'Tây nguyên' },
            { colection: 'Bắc trung bộ' },
            { colection: 'Nam bộ' },
            { colection: 'Tây bắc' },
            { colection: 'Duyên hải nam trung bộ' },
        ]
    }
];

const Products = () => {
    const [activePage, setPage] = useState(1);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
    const [filters, setFilters] = useState<IFilters>({
        types: [],
        priceRange: [0, 2000000],
        regions: []
    });

    useEffect(() => {
        getListProduct().then((data) => {
            const newProd = data.products?.map((item: any) => 
                ({ id: item.id, name: item.name, img: item.image, type: item.type.name, price: item.price } as IProduct)
            );
            setProducts(newProd);
            setFilteredProducts(newProd);
        });
    }, []);

    const handleTypeFilter = (type: string, checked: boolean) => {
        let newTypes = [...filters.types];
        if (checked) {
            newTypes.push(type);
        } else {
            newTypes = newTypes.filter(t => t !== type);
        }
        
        const newFilters = { ...filters, types: newTypes };
        setFilters(newFilters);
        applyFilters(newFilters);
    };

    const handleRegionFilter = (region: string, checked: boolean) => {
        let newRegions = [...filters.regions];
        if (checked) {
            newRegions.push(region);
        } else {
            newRegions = newRegions.filter(r => r !== region);
        }
        
        const newFilters = { ...filters, regions: newRegions };
        setFilters(newFilters);
        applyFilters(newFilters);
    };

    const handlePriceRangeChange = (value: [number, number]) => {
        const newFilters = { ...filters, priceRange: value };
        setFilters(newFilters);
        applyFilters(newFilters);
    };

    const applyFilters = (currentFilters: IFilters) => {
        let filtered = [...products];

        if (currentFilters.types.length > 0) {
            filtered = filtered.filter(product => 
                currentFilters.types.includes(product.type)
            );
        }

        filtered = filtered.filter(product => 
            product.price >= currentFilters.priceRange[0] && 
            product.price <= currentFilters.priceRange[1]
        );

        if (currentFilters.regions.length > 0) {
            filtered = filtered.filter(product => 
                currentFilters.regions.includes(product.type)
            );
        }

        setFilteredProducts(filtered);
        setPage(1);
    };

    const dataProducts = chunk(filteredProducts, 8);

    return (
        <>
            <Grid styles={{ inner: { margin: 0, width: '100%' } }}>
                <GridCol span={{ base: 3, sm: 2.5 }} visibleFrom="xs">
                    <nav className={classes.navbar}>
                        <Title size={'h4'}>LỌC</Title>
                        {data.map((item) => (
                            <Accordion defaultValue="1" key={item.value}>
                                <Accordion.Item value={item.value}>
                                    <Accordion.Control icon={<item.icon color="#87BD41" />}>
                                        {item.title}
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        {item.collections.map((i) => (
                                            <Container m={10} key={i.colection}>
                                                <Checkbox
                                                    color="#1E3B27"
                                                    label={i.colection}
                                                    onChange={(event) => {
                                                        if (item.value === '1') {
                                                            handleTypeFilter(i.colection, event.currentTarget.checked);
                                                        } else {
                                                            handleRegionFilter(i.colection, event.currentTarget.checked);
                                                        }
                                                    }}
                                                />
                                            </Container>
                                        ))}
                                    </Accordion.Panel>
                                </Accordion.Item>
                            </Accordion>
                        ))}
                        <Container size={'xl'} m={20}>
                            <Text>Giá</Text>
                            <RangeSlider
                                min={0}
                                max={2000000}
                                step={100000}
                                w={'80%'}
                                color="#1E3B27"
                                marks={[
                                    { value: 0, label: '0đ' },
                                    { value: 1000000, label: '1tr' },
                                    { value: 2000000, label: '2tr' },
                                ]}
                                value={filters.priceRange}
                                onChange={handlePriceRangeChange}
                            />
                        </Container>
                    </nav>
                </GridCol>
                <GridCol span={{ base: 12, xs: 9, sm: 9.5 }} style={{ marginTop: '100px' }}>
                    <SimpleGrid cols={{ base: 2, sm: 4 }} m="xl">
                        {dataProducts[activePage - 1]?.map((item) => (
                            <ProductCard key={item.id} item={item} />
                        ))}
                    </SimpleGrid>
                </GridCol>
            </Grid>
            <Container display={'flex'} style={{ justifyContent: 'center' }}>
                <Pagination 
                    color="#1E3B27" 
                    total={dataProducts.length} 
                    value={activePage} 
                    onChange={setPage} 
                    mt="sm" 
                />
            </Container>
        </>
    );
};

export default Products;