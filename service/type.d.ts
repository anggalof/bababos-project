export interface TProduct {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: TRating
}

export interface TRating {
  rate: number,
  count: number,
}

export interface TProfile {
  image_url: string,
  company_name: string,
  address: string,
  company_information: string,
  transaction_history: THistory[]
}

export interface THistory {
  id: number,
  title: string,
  price: number,
  status: string,
  image: string,
}
