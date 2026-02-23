import * as React from "react"
import { Button } from "@/components/ui/button"
import { type ButtonProps } from "@/components/ui/button"

interface ActionButtonProps extends ButtonProps {
  children: React.ReactNode
}

export function ActionButton({ 
  children, 
  variant = "default",
  ...props 
}: ActionButtonProps) {
  return (
    <Button variant={variant} {...props}>
      {children}
    </Button>
  )
}
