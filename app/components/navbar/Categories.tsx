'use client';

import Container from '../Container';
import { TbBeach, TbMountain, TbBrandSnowflake, TbPool } from 'react-icons/tb';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';
import { GiBoatFishing, GiCactus, GiForestCamp } from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import CategoryBox from '../CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'Property close to the beach!'
    },
    {
        label: 'Snow',
        icon: TbBrandSnowflake,
        description: 'Property close to snow!'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'Property is in the countryside!'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'Property is modern!'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'Property has pool!'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'Property is close to a lake!'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'Property has skiing activities!'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'Property has camping activities!'
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'Property is in the desert!'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'Property has camping activities!'
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: 'Property is luxurious!'
    }
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';
    if (!isMainPage) {
        return null;
    }
    return ( 
        <Container>
            <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
                {categories.map((item) => (
                    <CategoryBox 
                        key = {item.label}
                        label = {item.label}
                        selected = {category === item.label}
                        icon = {item.icon}
                    />
                ))} 
            </div>
        </Container>
     );
}
 
export default Categories;