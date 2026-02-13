/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Control } from "react-hook-form";

type CustomFormFieldProps = {
  name: string;
  control:Control<any>
}

export function CustomFormField({name,control}:CustomFormFieldProps){
    return (
        <FormField
            control={control}
            name={name}
            render={({field})=>(
                <FormItem>
                    <FormLabel className="capitalize">{name}</FormLabel>
                    <FormControl>
                        <Input {...field}/>
                    </FormControl>
                </FormItem>
        )} />
    )
}

type CustomFormSelectProps = {
    name:string;
    control:Control<any>;
    items:string[];
    labelText?:string
}

export function CustomFormSelect({
    name,
    control,
    items,
    labelText
}:CustomFormSelectProps){
    return (
        <FormField
            control={control}
            name={name}
            render={({field})=>{
                return(
                    <FormItem>
                        <FormLabel className="capitalize">{labelText || name}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue/>
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {items.map((item,index)=>{
                                    return <SelectItem key={index} value={item}>
                                        {item}
                                    </SelectItem>
                                })}
                            </SelectContent>
                        </Select>
                        <FormMessage/>
                    </FormItem>
                )
            }}/>
    )
}