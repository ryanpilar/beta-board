'use client'

import Link from "next/link"
import { CircleUser, Menu, Package2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import DND from "@/components/DND"
import { useState } from "react"

interface SectionProps {
    name: string
    anchor: string
    route: string
}
interface ZoneItemsProps {
    name: string
    id: number
    section: SectionProps[]
}

export default function Dashboard() {

    const [zoneItems, setZoneItems] = useState<ZoneItemsProps[]>([
        { name: 'Zone 1', id: 1693653637084, section: [{ name: '', anchor: '', route: '' }, { name: '', anchor: '', route: '' }] },
        { name: 'Zone 2', id: 1693653637086, section: [{ name: '', anchor: '', route: '' }] },
        { name: 'Zone 3', id: 1693653637088, section: [{ name: '', anchor: '', route: '' }] },
        { name: 'Zone 4', id: 1693653637090, section: [{ name: '', anchor: '', route: '' }] },
    ])
    const [mainWindow, setMainWindow] = useState<number>(3)

    const sectionItems = [
        { name: 'Section 1', id: 1693653637084, section: [{ name: '', anchor: '', route: '' }] },
        { name: 'Section 2', id: 1693653637086, section: [{ name: '', anchor: '', route: '' }] },
        { name: 'Section 3', id: 1693653637088, section: [{ name: '', anchor: '', route: '' }] },
        { name: 'Section 4', id: 1693653637090, section: [{ name: '', anchor: '', route: '' }] },
    ]

    return (
        <div className="flex min-h-screen w-full flex-col">

            <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">

                {/* DESKTOP NAV */}
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <Package2 className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Dashboardy
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Orders
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Products
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Customers
                    </Link>
                    <Link
                        href="#"
                        className="text-foreground transition-colors hover:text-foreground"
                    >
                        Settings
                    </Link>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>

                    {/* MOBILE SIDE NAV */}
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link
                                href="#"
                                className="flex items-center gap-2 text-lg font-semibold"
                            >
                                <Package2 className="h-6 w-6" />
                                <span className="sr-only">Acme Inc</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Dashboardie
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Orders
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Products
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Customers
                            </Link>
                            <Link href="#" className="hover:text-foreground">
                                Settings
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>

                <div className="flex w-full justify-end items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <DropdownMenu>

                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </header>

            <main className="flex flex-wrap ">

                <div className="mx-auto grid w-full max-w-6xl gap-2">
                    <h1 className="text-3xl font-semibold">Gym Setup</h1>
                </div>

                <div className='flex items-start'>
                    <DND defaultItems={zoneItems} setMainWindow={setMainWindow} label='Zones' />
                    {/* <DND defaultItems={sectionItems} label='Sections' /> */}

                    <Card className="w-[550px]">
                        <CardHeader>
                            <CardTitle>{zoneItems[mainWindow].name}</CardTitle>
                            <CardDescription>Deploy your new project in one-click.</CardDescription>
                        </CardHeader>
                        <CardContent>

                        </CardContent>
                    </Card>
                </div>

            </main>
        </div>
    )
}
