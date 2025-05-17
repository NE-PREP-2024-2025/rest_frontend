
import axiosInstance from './axiosInstance';

export type SlotSize = 'SMALL' | 'MEDIUM' | 'LARGE';
export type SlotStatus = 'AVAILABLE' | 'OCCUPIED' | 'MAINTENANCE';

export type Slot = {
  id: string;
  slotNumber: string;
  slotSize: SlotSize;
  slotStatus: SlotStatus;
  createdAt?: string;
  updatedAt?: string;
};

export type SlotResponse = {
  data: {
    id: string;
    slotNumber: string;
    slotSize: SlotSize;
    slotStatus: SlotStatus;
    createdAt?: string;
    updatedAt?: string;
  }
};

export type SlotListParams = {
  page?: number;
  limit?: number;
  search?: string;
  slotSize?: SlotSize;
  slotStatus?: SlotStatus;
};

export type SlotListResponse = {
  data: Slot[];
  totalItems: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type CreateSlotRequest = {
  slotSize: SlotSize;
};

export type CreateManySlotRequest = {
  numberOfSlots: number;
  slotSize: SlotSize;
};

export type UpdateSlotRequest = {
  slotSize?: SlotSize;
  slotStatus?: SlotStatus;
};

const slotApi = {
  getSlots: async (params: SlotListParams = {}) => {
    try {
      const response = await axiosInstance.get<SlotListResponse>('/slots', { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  createSlot: async (data: CreateSlotRequest) => {
    try {
      const response = await axiosInstance.post<SlotResponse>('/slots', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  createManySlots: async (data: CreateManySlotRequest) => {
    try {
      const response = await axiosInstance.post<Slot[]>('/slots/many', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  getSlot: async (id: string) => {
    try {
      const response = await axiosInstance.get<SlotResponse>(`/slots/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  updateSlot: async (id: string, data: UpdateSlotRequest) => {
    try {
      const response = await axiosInstance.patch<SlotResponse>(`/slots/${id}`, data);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
  
  deleteSlot: async (id: string) => {
    try {
      const response = await axiosInstance.delete(`/slots/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default slotApi;
