import http from "@/lib/http";

const categoryApiRequest = {
  findAll: () => http.get<any>('api/categories', {
    cache: 'no-cache'
  }),
  findById: (id: string) => http.get<any>(`api/categories/category/${id}`, {
    cache: 'no-cache'
  }),
  create: (payload: any) => http.post('api/categories/category', payload)
}

export default categoryApiRequest;