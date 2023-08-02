"use client"
import React from 'react'
import { usePathname, useRouter, useSearchParams  } from 'next/navigation'
import { Input } from "./ui/input"


const Search = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const defaultSearchQuery = searchParams.get('search') ?? '';
    function onSubmit (e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const searchQuery = formData.get('search');
        router.replace(`/?search=${searchQuery}#store`)
    }
    
  return (
    <form onSubmit={onSubmit} className="hidden items-center lg:inline-flex">
        <Input
            id="search"
            name="search"
            type="search"
            autoComplete="off"
            placeholder="Search products..."
            className="h-9 lg:w-[300px]"
            defaultValue={defaultSearchQuery}
        />
    </form>
  )
}

export default Search