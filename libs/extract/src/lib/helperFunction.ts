import * as React from 'react'

export type IndicatorType = 'success' | 'error' | 'info'

export type ValidatorType = 'Required' | 'Email'

export interface ValidatorRules {
  type: ValidatorType
  custom?: () => string | undefined
}

export interface IValidator {
  message: string
  indicator: IndicatorType
  rules?: ValidatorRules
}

export const validateClassName = (value: IndicatorType) => {
  switch (value) {
    case 'success':
      return 'is-valid'
    case 'error':
      return 'is-invalid'
    default:
      return ''
  }
}

export const debounce = (func: () => void, ms: number) => {
  let timeoutID: number
  return (...args: any) => {
    clearTimeout(timeoutID)
    timeoutID = window.setTimeout(() => {
      func.apply(this, args)
    }, ms)
  }
}
