import { z } from 'zod'

export interface IUserLoginData {
    email: string
    password: string
}

export interface IFormErrors {
    [key: string]: {
        message: string
        ref: any
        root: string
        type: any
        types: any
    }
}

export const loginSchema = z.object({
    password: z
        .string()
        .min(6, { message: 'Password must be at least 6 characters long' }),

    email: z.string().email({ message: 'Invalid email address' }),
})

export type FormLogin = z.infer<typeof loginSchema>
