export interface ListUserReq {
  page: number;
  per_page: number;
}

export interface UserResult {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  role: string;
  phone: string;
  imageFile: string;
  measurements: {
    height: number;
    weight: number;
    chest: number;
    waist: number;
    hip: number;
    inseam: number;
  };
}
