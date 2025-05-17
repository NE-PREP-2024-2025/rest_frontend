type UUID = string;

interface Permission {
  id: string;
  name: string;
}

interface CreatePermissionDto {
  name: string;
  description: string;
  institutionId: string;
  permissions: string[];
}

interface UpdateRoleDto {
  name: string;
  description: string;
}

interface Role {
  id: string;
  name: string;
  description: string;
  institutionId: string;
  institution: string;
  employees: string[];
  operators: string[];
  rolePermissions: string[];
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

interface IUser {
  id: string; 
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isVerified: boolean;
  mfaEnabled: boolean; 
  mfaSecret: string | null; 
  lastLogin: string; 
  status: string; 
  profileImageUrl: string;
  createdAt: string; 
  updatedAt: string; 
  deletedAt: string | null; 
  employees: Array<any>; 
  permissions: string[]; 
  user_type: string; 
  institutions: Array<{
    id: string;
    name: string;
    title: string;
    category: string;
    description: string | null;
    phone: string;
    location: string;
    address: string;
    openingTime: string | null;
    closingTime: string | null;
    websiteUrl: string;
    profileImageUrl: string;
    galleryImagesUrls: string[];
    createdBy: string | null;
    createdAt: string; 
    updatedAt: string; 
    deletedAt: string | null; 
  }>;
}
interface Permission {
  name: string;
  id: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

interface IRole {
  name: string;
  id: string;
  description: string;
  institutionId: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  rolePermissions: RolePermission[];
}
interface UserDto {
  name: string;
  password?: string;
  username: string;
  phone: string;
  email: string;
  institution: string;
  role: string;
  status: 'active' | 'inactive';
}

interface OperatorDto {
  name: string;
  username: string;
  phone: string;
  email: string;
  institution: string;
  role: string;
  status: 'active' | 'inactive';
}

interface RoleFormData {
  name: string;
  description: string;
  permissions: string[];
  institutionId: string;
}

interface RoleDto {
  name: string;
  id: string;
  description: string;
  institutionId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  rolePermissions: {
    id: string;
    roleId: string;
    permissionId: string;
    createdAt: string;
    updatedAt: string;
    permission: {
      name: string;
      id: string;
      description: string;
      createdAt: string;
      updatedAt: string;
      deletedAt: string | null;
    };
  }[];
  usersCount: number;
}

type InstitutionData = {
  institution: string;
  representative: Partial<UserDto>;
  contact: string;
  email: string;
  employees: number;
  visitors: number;
  departments: number;
  operators: number;
};

type DepartmentDto = {
  department: string;
  employees: number;
  visitors: number;
};

type EmployeesDto = {
  name: string;
  username: string;
  institution: string;
  departments: string;
  contacts: string;
  email: string;
  status: 'active' | 'inactive';
};

type CreateEmployeesDto = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  institution: string;
  department: string;
  status: 'active' | 'inactive';
};

type AttendanceDto = {
  name: string;
  username: string;
  institution: string;
  departments: string;
  contacts: string;
  email: string;
  status: 'active' | 'inactive';
};

type VisitorDto = {
  name: string;
  username: string;
  contacts: string;
  email: string;
  totalTime: string;
  visits: string;
};

type ReportDto = {
  fileName: string;
  fileType: string;
  fileSize: string;
  mimeType: string;
  date: Date;
};

type LogsDto = {
  name: string;
  username: string;
  entryTime: string;
  exitTime: string;
  duration: string;
};

type CodeType = 'qr' | 'barcode' | 'none';

type RegisterDto = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

type LoginDto = {
  email: string;
  password: string;
};

interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

type RegisterDto = { name: string; email: string; password: string };
type LoginDto = { email: string; password: string };

type LoginResponse = {
  accessToken: string;
};

type user = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  status: 'ACTIVE' | 'INACTIVE';
};
