export interface CreateCandidateDto {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    isAvailable: boolean;
    city: string;
    technology: string;
    experience: string;
    isRemote: boolean;
    comments: string;
    linkedIn: string;
    noticePeriod: number;
}