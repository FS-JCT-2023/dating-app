"use client";
import Navbar from '@/components/Nav/Nav';
import React from "react";
import { UserType } from '@/components/Nav/Nav';
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const questionnaireFormSchema = z.object({
  areYouCohen: z.boolean(),
  maritalStatus: z.string({
    required_error: "Please select a marital status to display.",
  }),
  birthPlace: z.string().min(2, {
    message: "birthPlace must be at least 2 characters.",
  }),
  heightInCm: z.number().min(0,{
    message: "You must enter a positive value.",
  }),
  job: z.string(),
  doYouSmoke: z.boolean(),
  areYouUnderMedicalTreatment: z.boolean(),
  numberOfSiblings: z.number().min(0,{
    message: "Number Of Siblings must be at least 0.",
  }),
  fatherName: z.string().min(2, {
    message: "Father Name must be at least 2 characters.",
  }),
  motherName: z.string().min(2, {
    message: "Mother Name must be at least 2 characters.",
  }),
  religiousStatus: z.string({  required_error: "Please select a religious status to display.",
}),
  parentsMaritalStatus: z.string({  required_error: "Please select a parents marital status to display.",}),
})

export default function ProfileForm() {
  const {
    formState: { errors },
  } = useForm<z.infer<typeof questionnaireFormSchema>>({
    resolver: zodResolver(questionnaireFormSchema),
  });

  const form = useForm<z.infer<typeof questionnaireFormSchema>>({
    resolver: zodResolver(questionnaireFormSchema),
    defaultValues: {
      areYouCohen: false,
      maritalStatus: "",
      birthPlace: "",
      heightInCm: 0,
      job: "",
      doYouSmoke: false,
      areYouUnderMedicalTreatment: false,
      numberOfSiblings: 0,
      fatherName: "",
      motherName: "",
      religiousStatus: "",
      parentsMaritalStatus: "",
    },
  })

  function onSubmit(values: z.infer<typeof questionnaireFormSchema>) {
    console.log(values)
  }

  return (
    <div>
      <Navbar userType={UserType.Client} />
      <div style={{ textAlign: 'center', paddingTop: '20px', fontSize: '24px', fontWeight: 'bold' }}>
        Questionnaire Form
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
        <ScrollArea className="h-[500px] w-[1000px] rounded-md border p-4">
        <div style={{ display: "flex", justifyContent: "center"}}>
        <div style={{width: '98%', maxWidth: '1000px'}}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="areYouCohen"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <FormLabel>Are you Cohen?</FormLabel>
                    <FormControl>
                    <Switch checked={field.value}  onCheckedChange={field.onChange}/>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
               control={form.control}
               name="maritalStatus"
               render={({ field }) => (
             <FormItem>
             <FormLabel>Marital Status</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger>
                <SelectValue />
             </SelectTrigger>
             <SelectContent>
             <SelectItem value="" disabled>
                Select a marital status
              </SelectItem>
               <SelectItem value="Single">Single</SelectItem>
               <SelectItem value="Divorced">Divorced</SelectItem>
               <SelectItem value="Widower/Widow">Widower/Widow</SelectItem>
             </SelectContent>
             </Select>
             
             </FormItem>
              )}
              />
    
<FormField
control={form.control}
name="parentsMaritalStatus"
render={({ field }) => (
  <FormItem>
    <FormLabel>Parents' Marital Status</FormLabel>
    <Select onValueChange={field.onChange} value={field.value}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="" disabled>
          Select a marital status
        </SelectItem>
        <SelectItem value="Single">Single</SelectItem>
        <SelectItem value="Divorced">Divorced</SelectItem>
        <SelectItem value="Widower/Widow">Widower/Widow</SelectItem>
      </SelectContent>
    </Select>
  </FormItem>
)}
/>


              <FormField
                control={form.control}
                name="birthPlace"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Birth Place</FormLabel>
                    <FormControl>
                      <Input placeholder="Birth Place" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="heightInCm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Height (cm)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Height (cm)" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="job"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job</FormLabel>
                    <FormControl>
                      <Input placeholder="Job" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="doYouSmoke"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <FormLabel>Do you smoke?</FormLabel>
                    <FormControl>
                    <Switch checked={field.value}  onCheckedChange={field.onChange}/>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="areYouUnderMedicalTreatment"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <FormLabel>Are you under medical treatment?</FormLabel>
                    <FormControl>
                    <Switch checked={field.value}  onCheckedChange={field.onChange}/>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="numberOfSiblings"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Siblings</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Number of Siblings" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fatherName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Father's Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Father's Name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="motherName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mother's Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Mother's Name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
<FormField
control={form.control}
name="religiousStatus"
render={({ field }) => (
  <FormItem>
    <FormLabel>Religious Status</FormLabel>
    <Select onValueChange={field.onChange} value={field.value}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="" disabled>
          Select a religious status
        </SelectItem>
        <SelectItem value="Haredi">Haredi</SelectItem>
        <SelectItem value="Dati Leumi">Dati Leumi</SelectItem>
        <SelectItem value="Dati">Dati</SelectItem>
        <SelectItem value="Reformed">Reformed</SelectItem>
        <SelectItem value="Habad">Habad</SelectItem>
        <SelectItem value="Secular">Secular</SelectItem>
      </SelectContent>
    </Select>
  </FormItem>
)}
/>
              

            
              <div style={{ textAlign: 'center' }}>
              <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
          </div>
          </div>

      </ScrollArea>
      </div>

    </div>
  )
}
