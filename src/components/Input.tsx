"use client"

import { useId } from "react"
import { CreditCardIcon } from "lucide-react"
import { usePaymentInputs } from "react-payment-inputs"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function InputCardNumber() {
  const id = useId()
  const { getCardNumberProps } = usePaymentInputs()

  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={`number-${id}`}>Card Number</Label>
      <div className="relative">
        <Input
          {...getCardNumberProps()}
          id={`number-${id}`}
          className="peer ps-9 [direction:inherit]"
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <CreditCardIcon size={16} aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
