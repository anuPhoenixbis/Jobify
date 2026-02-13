'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    username: z.string().min(2,{
        message: 'Username must be at least 2 characters'
    }),
})

function CreateJobForm() {
    // defining the form with react hook form and zod resolver
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            username:''
        }
    })
    const onSubmit = (values:z.infer<typeof formSchema>)=>{
        console.log(values)
    }
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            
            <Button type='submit'>Submit</Button>
        </form>
    </Form>
  )
}

export default CreateJobForm