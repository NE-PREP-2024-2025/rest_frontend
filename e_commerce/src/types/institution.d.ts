interface Count {
    employees: number;
    operators: number;
    visitors: number;
    departments: number;
}

interface IInstitution {
    id: string;
    name: string;
    title: string;
    category: string;
    description: string;
    phone: string;
    location: string;
    address: string;
    openingTime: string | null;
    closingTime: string | null;
    websiteUrl: string | null;
    profileImageUrl: string;
    galleryImagesUrls: string[];
    createdBy: string | null;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    _count: Count;
    operator: IOperator;
}

interface GetAllInstitutionResponse{
    data:IInstitution[],
    total:number
}

interface UseGetInstitutionsParams {
    page?: number;
    limit?: number;
    search?: string;
  }