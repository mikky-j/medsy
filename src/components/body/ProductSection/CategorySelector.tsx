import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

interface Category {
  name: string;
  image: string;
}

interface CategorySelectorProps {
  categories?: Category[];
  onChange?: (category: Category) => void;
  activeCategory?: Category;
}

const randomCategory: Category[] = [
  {
    name: "Category 1",
    image: "http://picsum.photos/100",
  },
  {
    name: "Category 2",
    image: "http://picsum.photos/100",
  },
  {
    name: "Category 3",
    image: "http://picsum.photos/100",
  },
  {
    name: "Category 4",
    image: "http://picsum.photos/100",
  },
  {
    name: "Category 5",
    image: "http://picsum.photos/100",
  },
  {
    name: "Category 6",
    image: "http://picsum.photos/100",
  },
  {
    name: "Category 7",
    image: "http://picsum.photos/100",
  },
  {
    name: "Category 8",
    image: "http://picsum.photos/100",
  },
  {
    name: "Category 9",
    image: "http://picsum.photos/100",
  },
  {
    name: "Category 10",
    image: "http://picsum.photos/100",
  },
  {
    name: "Category 11",
    image: "http://picsum.photos/100",
  },
  {
    name: "Category 12",
    image: "http://picsum.photos/100",
  },
];

const CategorySelector = ({
  categories = randomCategory,
  onChange,
  activeCategory: _activeCategory,
}: CategorySelectorProps) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-right",
          prevEl: ".swiper-left",
        }}
        className="my-4"
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        spaceBetween={10}
        slidesPerView={6}
      >
        {categories.map((category) => (
          <SwiperSlide className="px-3" key={category.name}>
            <div
              className="h-[200px] hover:cursor-pointer border rounded-md bg-white w-full flex flex-col justify-center items-center"
              onClick={() => onChange && onChange(category)}
            >
              <img src={category.image} height={100} alt="" />
              <p className="font-semibold mt-3">{category.name}</p>
            </div>
          </SwiperSlide>
        ))}

        <button className="swiper-left transition-all shadow-md flex justify-center items-center absolute z-30 top-1/2 -translate-y-1/2 translate-x-1/2 left-3 h-[30px] w-[30px] rounded-full bg-white text-black hover:bg-black hover:text-white hover:cursor-pointer">
          <AiOutlineLeft size={20} />
        </button>
        <button className="swiper-right transition-all shadow-md flex justify-center items-center absolute z-30 top-1/2 -translate-y-1/2 -translate-x-1/2 right-3 h-[30px] w-[30px] rounded-full bg-white text-black hover:bg-black hover:text-white hover:cursor-pointer">
          <AiOutlineRight size={20} />
        </button>
      </Swiper>
    </div>
  );
};

export default CategorySelector;
