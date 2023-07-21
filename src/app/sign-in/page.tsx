import { Button } from "@/components/ui/button"
import ClientSignIn from "./ClientSignIn"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px] mx-auto mt-10">
      <TabsList className="grid w-full grid-cols-2 mb-2 bg-white shadow-sm">
        <TabsTrigger value="clients">Clients</TabsTrigger>
        <TabsTrigger value="matchmaker">Matchmaker</TabsTrigger>
      </TabsList>
      <TabsContent value="clients" className="bg-white">
        <ClientSignIn />      
      </TabsContent>
      <TabsContent value="matchmaker" className="bg-white">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
