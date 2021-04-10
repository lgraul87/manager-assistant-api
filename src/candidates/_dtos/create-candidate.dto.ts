export interface CreateCandidateDto {
    name: string;
    lastName: string;
    dni: string;
    email: string;
    phone: string;
    isAvailable: boolean;
    city: string;
    technology: string;
    experience: Date;
    isRemote: boolean;
    photo: string;
    comments: string;
    linkedIn: string;
    noticePeriod: number;
}