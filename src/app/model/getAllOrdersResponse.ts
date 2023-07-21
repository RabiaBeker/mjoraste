export interface GetAllOrdersResponse{
  id: number;
  userId: number,
  orderItems: [
    {
      id: number;
      quantity: number;
      totalItemPrice: number
    }
  ];
  orderCode: string;
  orderStatus: boolean;
  orderDate: string;
  shippingAddress: {
    id: number;
      city: string;
      town: string;
      fullAddress: string;
      user: null
  },
  totalPrice: number
}
