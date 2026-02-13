import * as z from "zod";

export type JobType = {
    id:string;
    createdAt:Date;
    updateAt:Date;
    clerkId:string;
    position:string;
    company:string;
    location:string;
    status:string;
    mode:string;
}

export enum JobStatus{
    Pending = 'pending',
    Interview = 'interview',
    Declined = 'declined'
}

export enum JobMode{
    FullTime = 'full-time',
    PartTime = 'part-time',
    Internship = 'internship'
}

export const createEditJobSchema = z.object({
    position:z.string().min(2,{
        message:"Position must be at least 2 characters long"
    }),
    company:z.string().min(2,{
        message:"Company must be at least 2 characters long"
    }),
    location:z.string().min(2,{
        message:"Location must be at least 2 characters long"
    }),
    status:z.enum(JobStatus),
    mode:z.enum(JobMode)
})

export type CreateEditJobType = z.infer<typeof createEditJobSchema>