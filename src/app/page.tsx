"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { FileText } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [inputValue, setInputValue] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Welcome to Your Next.js + shadcn/ui App
          </h1>
          <p className="text-lg text-slate-600">
            A beautiful and modern UI built with shadcn/ui components
          </p>
        </div>

        {/* Research Report Link */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <FileText className="w-6 h-6 text-blue-600" />
              <span>Research Report Template</span>
            </CardTitle>
            <CardDescription>
              Professional research report template with navigation and structured content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/research-report">
              <Button className="w-full">
                View Research Report Template
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Buttons Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Button Components</CardTitle>
            <CardDescription>
              Various button styles and variants available in shadcn/ui
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Button variant="default">Default Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="destructive">Destructive Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
          </CardContent>
        </Card>

        {/* Input Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Input Components</CardTitle>
            <CardDescription>
              Form inputs with different styles and states
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </CardContent>
        </Card>

        {/* Dialog Section */}
        <Card>
          <CardHeader>
            <CardTitle>Dialog Components</CardTitle>
            <CardDescription>
              Modal dialogs for user interactions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="name" className="text-right">
                      Name
                    </label>
                    <Input
                      id="name"
                      defaultValue="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="username" className="text-right">
                      Username
                    </label>
                    <Input
                      id="username"
                      defaultValue="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={() => setIsDialogOpen(false)}>
                    Save changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 text-slate-500">
          <p>Built with Next.js and shadcn/ui</p>
        </div>
      </div>
    </div>
  )
}
