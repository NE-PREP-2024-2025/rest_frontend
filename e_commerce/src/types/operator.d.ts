interface IOperator {
  id: string;
  userId: string;
  institutionId: string;
  status: string;
  operatorType: string;
  roleId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  user: IUser;
  role: IRole;
  institution: IInstitution;
}

interface GetOperatorsResponse {
  data: IOperator[];
  total: number;
}

interface UseGetOperatorsParams {
  page?: number;
  limit?: number;
  search?: string;
  institution?: string;
  role?: string;
}
