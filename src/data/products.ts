export type Product = {
  id: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  prime: boolean;
  image: string;
  description: string;
  brand: string;
  category: string;
};

export const products: Product[] = [
  {
    id: "1",
    title: "ピーコック魔法瓶工業 ステンレスボトル 1.0L ブルー",
    price: 2969,
    rating: 4.5,
    reviews: 1210,
    prime: true,
    image: "https://placehold.co/400x400/png?text=Peacock+Bottle",
    description: "【どこにでも持ち歩きたくなる】落ち着いたくすみカラーのマグボトル",
    brand: "ピーコック",
    category: "水筒・マグボトル",
  },
  {
    id: "2",
    title: "サーモス 真空断熱ケータイマグ 500ml ブラック",
    price: 1973,
    rating: 4.6,
    reviews: 8527,
    prime: true,
    image: "https://placehold.co/400x400/png?text=Thermos",
    description: "【保冷専用】軽量＆スリム設計 スポーツドリンク対応",
    brand: "サーモス",
    category: "水筒・マグボトル",
  },
  {
    id: "3",
    title: "象印 ステンレスマグ 360ml ホワイト",
    price: 2200,
    rating: 4.7,
    reviews: 3456,
    prime: true,
    image: "https://placehold.co/400x400/png?text=Zojirushi",
    description: "超軽量＆コンパクト 保温・保冷両用",
    brand: "象印",
    category: "水筒・マグボトル",
  },
  {
    id: "4",
    title: "タイガー 水筒 1.0L シルバー",
    price: 3490,
    rating: 4.4,
    reviews: 892,
    prime: true,
    image: "https://placehold.co/400x400/png?text=Tiger",
    description: "直飲み カバー付き スポーツボトル",
    brand: "タイガー",
    category: "水筒・マグボトル",
  },
  {
    id: "5",
    title: "FLSK フラスク 500ml シルバー",
    price: 5390,
    rating: 4.3,
    reviews: 635,
    prime: true,
    image: "https://placehold.co/400x400/png?text=FLSK",
    description: "ドイツ製 真空断熱 保温・保冷両用",
    brand: "FLSK",
    category: "水筒・マグボトル",
  }
];

export const categories = [
  "すべて",
  "水筒・マグボトル",
  "保温・保冷機能付き",
  "軽量タイプ",
  "大容量タイプ",
];

export const brands = [
  "サーモス",
  "タイガー",
  "象印",
  "ピーコック",
  "FLSK",
  "その他",
];

export const capacities = [
  "0.5L未満",
  "0.5～1.0L未満",
  "1.0～1.5L未満",
  "1.5～2.0L未満",
  "2.0L以上",
]; 