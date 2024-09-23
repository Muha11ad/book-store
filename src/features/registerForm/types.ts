import { z } from 'zod'

export interface IUserData {
    name: string
    email: string
    password: string
}

export interface IFormErrors {
    [key:string ] : {message : string , ref : any , root : string, type : any, types : any }
} 


export const registerSchema = z.object({
    name: z
        .string()
        .min(3, { message: 'Name must be at least 3 characters long' })
        .regex(/^[A-Za-z][A-Za-z\s'-]*$/, {
            message: 'Name cannot contain numbers',
        }),

    password: z
        .string()
        .min(6, { message: 'Password must be at least 6 characters long' }),

    email: z.string().email({ message: 'Invalid email address' }),
})

export type FormFields = z.infer<typeof registerSchema >
