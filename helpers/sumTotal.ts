import { TCart } from "~/types/book";

export function totalSum(arr: TCart[], coupon?: number) {
  let realSum = 0;
  let saleSum = 0;
  let totalSum = 0;
  let discount = 0;
  arr.forEach((el) => {
    realSum += +el.book.price * el.count;
    if (el.book.discount_price) {
      saleSum += el.book.discount_price * el.count;
    } else{
      saleSum += el.book.price * el.count;
    }
  });
  if (saleSum) {
    totalSum = saleSum - (coupon ?? 0);
    discount = 100 - Math.floor((saleSum * 100) / realSum);
  } else {
    totalSum = realSum - (coupon ?? 0);
  }
  return { realSum, saleSum, totalSum, discount };
}
